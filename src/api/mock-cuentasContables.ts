import type { TipoComparativo } from "./TiposComparativos.interface";

export const tiposComparativos: TipoComparativo[] = [
  {
    key: "401vs506",
    title: "Comparativa Primas y Siniestros por Ejercicio",
    name: "Primas vs Stros.",
    codigoProd: "401",
    codigoGasto: "506",
    subtitle: "Siniestros",
    colors: ["#008FFB", "#00E396"],
  },
  {
    key: "401vs525",
    title: "Comparativa Primas vs. Gtos. de Explotación",
    name: "Primas vs Gtos. de Explotación",
    codigoProd: "401",
    codigoGasto: "525",
    subtitle: "Gastos de Explotación",
    colors: ["#DFBF1F", "#FD5E01"],
  },
  {
    key: "401vs504",
    title: "Comparativa Primas vs. Fomento de Producción",
    name: "Primas vs Fomento de Prod.",
    codigoProd: "401",
    codigoGasto: "504",
    subtitle: "Gastos Fomento de Producción",
    colors: ["#B831CD", "#35ABC9"],
  },
];
