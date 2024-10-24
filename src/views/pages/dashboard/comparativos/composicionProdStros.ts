import type { TipoComparativo } from "@/api/TiposComparativos.interface";
import { datosContables } from "../../../../api/mock-prod-stros";

export interface TotalGrupoEjercicio {
  grupo: string;
  ejercicio: string;
  total: number;
}

export const ejercicios = [
  ...new Set(datosContables.map((d) => d.EJERC)),
].sort();
export const grupos = [...new Set(datosContables.map((d) => d.GRUPO))].sort();

export const calcularSeries = (
  codigoContableProd: string,
  codigoContableGasto: string,
) => {
  const gruposComparativos = grupos.filter(
    (grupo) => grupo === codigoContableProd || grupo === codigoContableGasto,
  );

  let series: Array<{ name: string; data: Array<number> }> = [];

  series = gruposComparativos.map((grupo) => {
    return { name: grupo, data: ejercicios.map((e) => 0) };
  });

  const minEjercicio = Math.min(...ejercicios.map((e) => Number(e)));

  datosContables.forEach((dato) => {
    const { EJERC, GRUPO, IMPORTE } = dato;
    const serie = series.find((serie) => serie.name === GRUPO);
    if (serie) {
      // 2022, 2023, 2025
      // 0, 1, 2, 3
      const posEjercicio = Math.abs(minEjercicio - Number(EJERC));
      serie.data[posEjercicio] += IMPORTE;
    }
  });
  return series;
};

export const calcularTotalesGrupoEjercicio = (cod1: string, cod2: string) => {
  let totalesGrupoEjercicio: Array<TotalGrupoEjercicio> = [];
  datosContables.forEach((datoContable) => {
    const { EJERC, GRUPO, IMPORTE } = datoContable;

    if (GRUPO === cod1 || GRUPO === cod2) {
      const totalEncontrado = totalesGrupoEjercicio.find(
        (totalGrupoEjercicio) =>
          totalGrupoEjercicio.ejercicio === EJERC &&
          totalGrupoEjercicio.grupo === GRUPO,
      );

      if (totalEncontrado) {
        totalEncontrado.total += IMPORTE;
      } else {
        totalesGrupoEjercicio.push({
          grupo: GRUPO,
          ejercicio: EJERC,
          total: IMPORTE,
        });
      }
    }
  });
  return totalesGrupoEjercicio;
};

// para formar los datos de la tabla:
// crear una funcion que recorra el retorno de calcularTotalesGrupoEjercicio
// debe retornar por cada uno, UN OBJETO con todos los ejercicios, los codigos 401 y 506 con sus valores, y la proporcion en base a siniestros contra prima(regla de 3) ((506.val*100)/401).
// ejemplo: [{ejercicio: '2022',  401: 128.568.300.796, 506: 90.916.762.293, porcentaje: 71.71% }, etc.]

// en base a los parametros que se reciban, calcular

export const createTableData = (
  totalesGrupoEjercicio: Array<TotalGrupoEjercicio>,
  codigoContableProd: string,
  codigoContableGasto: string,
) => {
  let totalesEjercicio: Array<{
    [key: string]: number | string;
    ejercicio: string;
    porcentaje: number;
  }> = [];

  totalesGrupoEjercicio.forEach((totalGrupoEjercicio) => {
    let totalEjercicio = totalesEjercicio.find(
      (totalEjercicio) =>
        totalEjercicio.ejercicio === totalGrupoEjercicio.ejercicio,
    );

    if (totalEjercicio) {
      totalEjercicio[totalGrupoEjercicio.grupo] = totalGrupoEjercicio.total;
      const porcentaje =
        (Number(totalEjercicio[codigoContableGasto]) * 100) /
        Number(totalEjercicio[codigoContableProd]);
      totalEjercicio.porcentaje = porcentaje;
    } else {
      totalesEjercicio.push({
        // hace push de, [ { '401': totalDelEjercicioActual, ejercicio: '2021', pct: 0 } ] cada vez que no encuentre totalEjercicio
        [totalGrupoEjercicio.grupo]: totalGrupoEjercicio.total,
        ejercicio: totalGrupoEjercicio.ejercicio,
        porcentaje: 0,
      });
    }
  });

  return totalesEjercicio;
};

// Para el totalGralPorGrupo utilizar el retorno de calcularTotalesGrupoEjercicio
// Debe retornar la suma entre el grupo 401 y 506.
// [{grupo: '401', totalGral: sumaDeTodosLos401 }, {grupo: '506', totalGral: sumaDeTodosLos506 }]

export const totalGralPorGrupo = (currentChart: TipoComparativo) => {
  const codigoContableProd = currentChart.codigoProd;
  const codigoContableGasto = currentChart.codigoGasto;
  let gralPorGrupo: Array<{
    grupo: string;
    total: number;
  }> = [];
  const totalesGrupos = calcularTotalesGrupoEjercicio(
    codigoContableProd,
    codigoContableGasto,
  );
  totalesGrupos.forEach((totalGrupo) => {
    const { grupo, total } = totalGrupo;
    if (grupo === codigoContableProd || grupo === codigoContableGasto) {
      const totalEncontrado = gralPorGrupo.find(
        (totalGrupo) => totalGrupo.grupo === grupo,
      );

      if (totalEncontrado) {
        totalEncontrado.total += total;
      } else {
        gralPorGrupo.push({
          grupo: grupo,
          total: total,
        });
      }
    }
  });
  return gralPorGrupo;
};
// export const totalGralPorGrupo = (
//   codigoContableProd: string,
//   codigoContableGasto: string,
// ) => {
//   let gralPorGrupo: Array<{
//     grupo: string;
//     total: number;
//   }> = [];
//   const totalesGrupos = calcularTotalesGrupoEjercicio(
//     codigoContableProd,
//     codigoContableGasto,
//   );
//   totalesGrupos.forEach((totalGrupo) => {
//     const { grupo, total } = totalGrupo;
//     if (grupo === codigoContableProd || grupo === codigoContableGasto) {
//       const totalEncontrado = gralPorGrupo.find(
//         (totalGrupo) => totalGrupo.grupo === grupo,
//       );

//       if (totalEncontrado) {
//         totalEncontrado.total += total;
//       } else {
//         gralPorGrupo.push({
//           grupo: grupo,
//           total: total,
//         });
//       }
//     }
//   });
//   return gralPorGrupo;
// };
