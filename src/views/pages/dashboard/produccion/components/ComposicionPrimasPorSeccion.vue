<template>
  <div class="col-xl-6">
    <div class="card">
      <div class="card-header pb-0 border-0">
        <h4 class="heading mb-0">Primas netas de Anulación</h4>
        <button @click="$emit('toggle-chart')" class="btn btn-light">
          Cambiar a Gráfico Consolidadas
        </button>
      </div>

      <div class="card-body">
        <div id="projectChart" class="project-chart">
          <apexchart
            width="600px"
            :options="chartData.chartOptions"
            :series="chartData.series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <primas-table :secciones="seccionesTable" :primas="primasTable" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ts-ignore
import VueApexCharts from "vue3-apexcharts";
import PrimasTable from "@/views/pages/dashboard/produccion/components/PrimasTable.vue";
import { objPrimasPorSeccion } from "@/views/pages/dashboard/produccion/composicionPrimas";
import { moneyFormatter } from "@/utils/dataFormatter";

export default defineComponent({
  name: "ComposicionPrimasPorSeccion",
  components: { apexchart: VueApexCharts, PrimasTable },
  props: ["data"],
  setup(props) {
    const data = props.data;

    const datosSecciones = objPrimasPorSeccion(
      data.secciones,
      data.totalesPorSeccion.primas_netas,
    );
    const primasOriginales = data.totalesPorSeccion.primas_netas;
    const seccionesOriginales = data.secciones;

    const primasTable = primasOriginales;
    const seccionesTable = seccionesOriginales;

    const colorArray = [
      "#ADDB23",
      "#EECE10",
      "#FE9D00",
      "#E28059",
      "#D75927",
      "#FC025F",
      "#FE00B7",
      "#CA04FA",
      "#9401FD",
      "#05C1F9",
      "#06F8E0",
      "#06F8A9",
      "#12EC73",
      "#15E929",
      "#37C751",
      "#DFBF1F",
    ];
    const chartData = {
      series: datosSecciones.map((key: any) => key.prima),
      chartOptions: {
        chart: {
          type: "donut",
        },
        labels: datosSecciones.map((key: any) => key.seccion),
        dataLabels: {
          enabled: true,
        },
        colors: colorArray,
        plopOptions: {
          pie: {
            donut: {
              size: "65%",
            },
          },
        },
        legend: {
          labels: {
            colors: "#888888",
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        tooltip: {
          y: {
            formatter: function (
              val: number,
              {
                config: { labels },
                seriesIndex,
              }: { config: { labels: Array<string> }; seriesIndex: number },
            ) {
              return labels[seriesIndex] + ": " + moneyFormatter(val);
            },
            title: {
              formatter: function (seriesName: Array<string>) {
                return "";
              },
            },
          },
        },
      },
    };

    return {
      chartData,
      seccionesTable,
      primasTable,
    };
  },
});
</script>

<style scoped></style>
