<template>
  <div class="col-xl-9 wid-100">
    <div class="row">
      <BarChartSiniestros />
      <TablaSiniestros />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarChartSiniestros from "./BarChartSiniestros.vue";
import TablaSiniestros from "./TablaSiniestros.vue";

export default defineComponent({
  name: "cardChart",
  components: {
    BarChartSiniestros,
    TablaSiniestros,
  },
});
</script>

<style scoped></style>
