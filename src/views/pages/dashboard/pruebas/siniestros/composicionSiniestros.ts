import { datosSiniestros } from "../../../../api/mock-data-siniestros";

export const ejercicios = [
  ...new Set(datosSiniestros.map((d) => d.EJERC)),
].sort();

export const grupos = [...new Set(datosSiniestros.map((d) => d.GRUPO))].sort();

export const calcularSeries = () => {
  let series: Array<{ name: string; data: Array<number> }> = [];
  series = grupos.map((grupo) => {
    return { name: grupo, data: ejercicios.map((e) => 0) };
  });

  const minEjercicio = Math.min(...ejercicios.map((e) => Number(e)));

  datosSiniestros.forEach((dato) => {
    const { EJERC, GRUPO, IMPORTE } = dato;
    const serie = series.find((serie) => serie.name === GRUPO);
    if (serie) {
      const posEjercicio = Math.abs(minEjercicio - Number(EJERC));
      serie.data[posEjercicio] += IMPORTE;
    }
  });
  return series;
};
