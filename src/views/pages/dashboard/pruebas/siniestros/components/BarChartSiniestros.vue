<template>
  <div>
    <div class="card overflow-hidden">
      <div class="card-header border-0 pb-0 flex-wrap">
        <div class="col-xl-9">
          <h4 class="heading mb-0">Siniestros y Gastos por Ejercicio</h4>
          <div id="chart">
            <apexchart
              type="bar"
              height="350"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
        <div class="card-body p-0"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ts-ignore
import VueApexCharts from "vue3-apexcharts";

import {
  ejercicios,
  calcularSeries,
} from "@/views/pages/dashboard/siniestros/composicionSiniestros";

export default defineComponent({
  name: "BarChartSiniestros",
  components: {
    apexchart: VueApexCharts,
  },
  setup() {
    const series = calcularSeries();
    const chartOptions = {
      chart: {
        type: "bar",
        height: 350,
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          endingShape: "rounded",
        },
      },
      colors: ["#008FFB", "#00E396"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      legend: {
        labels: {
          colors: "#888888",
        },
      },
      xaxis: {
        categories: ejercicios,
      },
      yaxis: {
        title: {
          text: "Monto en Miles",
        },
        labels: {
          formatter: function (val: number) {
            return val.toLocaleString();
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return val.toLocaleString() + " Miles";
          },
        },
      },
    };

    return {
      series,
      chartOptions,
    };
  },
});
</script>
