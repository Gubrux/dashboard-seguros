<template>
  <div class="card-body">
    <div id="projectChart" class="project-chart">
      <apexchart
        width="400px"
        :options="doughtnutChart.chartOption"
        :series="doughtnutChart.series"
      ></apexchart>
    </div>
    <div class="project-date">
      <!-- <div
        class="project-media"
        v-for="({ img, title }, ind) in projectStatusData"
        :key="ind"
      >
        <p class="mb-0">
          <span v-html="img"></span>
          {{ title }}
        </p>
        <span>300 Polizas</span>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { SVGImage } from "@/constent/Theme";
import { defineComponent } from "vue";
// @ts-ignore
import VueApexCharts from "vue3-apexcharts";
import { getDoughtnutChart } from "@/layouts/ChartsData";
import { totalesPrimas } from "@/views/pages/dashboard/produccion/composicionPrimas";

export default defineComponent({
  name: "composicionPrimas",
  components: { apexchart: VueApexCharts },

  props: ["data"],
  setup(props) {
    const data = props.data;
    const { totalNuevas, totalRenovadas, totalAnuladas } = data.totalGralPrimas;
    const { pctNuevas, pctRenovadas, pctAnuladas } = totalesPrimas(
      totalNuevas,
      totalRenovadas,
      totalAnuladas,
    );
    const doughtnutChart = getDoughtnutChart(
      pctNuevas,
      pctRenovadas,
      pctAnuladas,
    );

    return {
      projectStatusData: [
        { img: SVGImage.color2, title: "Cantidad Nuevas" },
        { img: SVGImage.color4, title: "Cantidad Renovadas" },
        { img: SVGImage.color3, title: "Anuladas" },
      ],
      doughtnutChart,
    };
  },
});
</script>

<style scoped></style>
