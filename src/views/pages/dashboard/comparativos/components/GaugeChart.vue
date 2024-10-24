<template>
  <VueSpeedometer
    :value="currentValue"
    :min-value="0"
    :max-value="100"
    :segments="15"
    :needle-color="'#008FFB'"
    :start-color="'#58AF4F'"
    :end-color="'#F91E05'"
    :ring-width="60"
    :text-color="'#888888'"
    :label="'Fully Custom Speedometer'"
    :force-render="true"
    :custom-segment-stops="[0, 15, 30, 45, 60, 75, 100]"
    :custom-segment-labels="customLabels"
    :max-segment-label="'MAX'"
    :min-segment-label="'MIN'"
    :current-value-text="`${ejercicio} - ${currentValue.toFixed(2)}%`"
    :needle-transition="'easeElastic'"
    :needle-transition-duration="5000"
    :needle-height-ratio="0.8"
    :width="200"
    :height="150"
  />
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
//@ts-ignore
import VueSpeedometer from "vue-speedometer";

const props = defineProps(["porcentaje", "ejercicio"]);

const currentValue = computed(() => props.porcentaje);

const customLabels = [
  { color: "#00FF00" },
  { color: "#FFFF00" },
  { color: "#FFA500" },
  { color: "#FF4500" },
  { color: "#FF0000" },
  { color: "#ED1138" },
];
</script>
