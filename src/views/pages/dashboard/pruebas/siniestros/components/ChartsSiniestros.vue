<template>
  <div class="col-xl-9 wid-100">
    <div class="row">
      <!-- <MetricsCards /> -->
      <BarChartSiniestros />
      <TablaSiniestros />
      <GaugeChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MetricsCards from "./MetricsCards.vue";
import BarChartSiniestros from "./BarChartSiniestros.vue";
import TablaSiniestros from "./TablaSiniestros.vue";
// @ts-ignore
import GaugeChart from "./GaugeChart.vue";

export default defineComponent({
  name: "cardChart",
  components: {
    MetricsCards,
    BarChartSiniestros,
    TablaSiniestros,
    GaugeChart,
  },
});
</script>

<style scoped></style>
