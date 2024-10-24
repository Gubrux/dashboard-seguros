<template>
  <div>
    <div class="card overflow-hidden">
      <div class="card-header border-0 pb-0">
        <h4 class="heading mb-0">
          {{ currentChart.title }}
        </h4>
      </div>
      <div class="card-body p-0">
        <div id="chart">
          <apexchart
            type="bar"
            height="350"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
// @ts-ignore
import VueApexCharts from "vue3-apexcharts";

import {
  ejercicios,
  calcularSeries,
} from "@/views/pages/dashboard/comparativos/composicionProdStros";
import { tiposComparativos } from "../../../../../api/mock-cuentasContables";
import type { TipoComparativo } from "../../../../../api/TiposComparativos.interface.ts";
import { moneyFormatter } from "@/utils/dataFormatter";
export default defineComponent({
  name: "BarChartSiniestros",
  components: {
    apexchart: VueApexCharts,
  },
  props: ["currentChart"],
  setup(props) {
    const currentChart = ref<TipoComparativo>(props.currentChart);

    watch(
      () => props.currentChart,
      (newCurrentChart) => {
        console.log(currentChart.value.colors);
        currentChart.value = newCurrentChart;
      },
    );
    const series = computed(() => {
      return calcularSeries(
        currentChart.value.codigoProd,
        currentChart.value.codigoGasto,
      );
    });

    const chartOptions = computed(() => {
      return {
        chart: {
          type: "bar",
          height: 350,
          stacked: false,
          legend: {
            labels: {
              colors: "#888888",
            },
          },
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
        colors: currentChart.value.colors,
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
              return moneyFormatter(val);
            },
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val: number) {
              return moneyFormatter(val);
            },
          },
        },
      };
    });

    return {
      series,
      chartOptions,
      tiposComparativos,
      currentChart,
    };
  },
  methods: {
    selectCurrentChart(currentChart: TipoComparativo) {
      this.currentChart = currentChart;
    },
  },
});
</script>
