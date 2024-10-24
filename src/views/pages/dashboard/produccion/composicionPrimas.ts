// crear una funcion para que sume las polizas nuevas, renovadas y anuladas y encontrar sus respectivos porcentajes.
export const totalesPrimas = (
  nuevas: number,
  renovadas: number,
  anuladas: number,
) => {
  const sumaPrimas = nuevas + renovadas + Math.abs(anuladas);
  const pctNuevas = Number(((100 * nuevas) / sumaPrimas).toFixed(2));
  const pctRenovadas = Number(((100 * renovadas) / sumaPrimas).toFixed(2));
  const pctAnuladas = Number(
    ((100 * Math.abs(anuladas)) / sumaPrimas).toFixed(2),
  );
  return {
    pctNuevas,
    pctRenovadas,
    pctAnuladas,
  };
};

export const objPrimasPorSeccion = (
  seccionesList: Array<string>,
  primasNetasPorSeccion: Array<number>,
) => {
  let totalEmisiones = 0;

  for (let i = 0; i < primasNetasPorSeccion.length; i++) {
    totalEmisiones += primasNetasPorSeccion[i];
  }

  const datosSecciones = [];

  for (let i = 0; i < primasNetasPorSeccion.length; i++) {
    if (primasNetasPorSeccion[i] !== 0) {
      const seccion = seccionesList[i];
      const prima = primasNetasPorSeccion[i];
      const porcentaje = (prima / totalEmisiones) * 100;

      datosSecciones.push({
        seccion,
        prima,
        porcentaje,
      });
    }
  }

  return datosSecciones;
};

export const primasConsolidadas = (
  seccionesList: Array<string>,
  primasNetasPorSeccion: Array<number>,
  codigo: Array<number>,
) => {
  let totalEmisiones = primasNetasPorSeccion.reduce((acc, val) => acc + val, 0);

  const datosSecciones = [];

  let primaOtrosRiesgos = 0;

  for (let i = 0; i < primasNetasPorSeccion.length; i++) {
    if (codigo.includes(i)) {
      datosSecciones.push({
        seccion: seccionesList[i],
        prima: primasNetasPorSeccion[i],
        porcentaje: (primasNetasPorSeccion[i] / totalEmisiones) * 100,
      });
    } else {
      primaOtrosRiesgos += primasNetasPorSeccion[i];
    }
  }

  datosSecciones.push({
    seccion: "OTROS RIESGOS",
    prima: primaOtrosRiesgos,
    porcentaje: (primaOtrosRiesgos / totalEmisiones) * 100,
  });

  return datosSecciones;
};
