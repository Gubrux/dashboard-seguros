<template>
  <div class="card">
    <div class="card-body p-0">
      <div class="table-responsive active-projects shorting">
        <div id="user-tbl_wrapper" class="dataTables_wrapper">
          <div
            class="tbl-caption d-flex justify-content-between align-items-center"
          >
            <h4 class="heading mb-0">
              {{ currentChart.title }}
            </h4>
          </div>
          <div class="gauge-chart-container">
            <GaugeChart
              v-for="(item, index) in dataList"
              :key="index"
              :porcentaje="item.porcentaje"
              :ejercicio="item.ejercicio"
            />
          </div>
          <table id="projects-tbl" class="table ItemsCheckboxSec">
            <thead>
              <tr>
                <th>Ejercicio</th>
                <th
                  v-for="codigo in codigosContables"
                  :key="codigo"
                  style="cursor: pointer"
                  :class="{ 'text-end': true }"
                >
                  {{ codigo }}
                </th>
                <th>Porcentaje</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tableData" :key="index">
                <td>{{ item.ejercicio }}</td>
                <td
                  v-for="codigo in codigosContables"
                  :key="codigo"
                  :class="{ 'text-end': true }"
                >
                  {{ moneyFormatter(Number(item[codigo])) }}
                </td>
                <td>{{ item.porcentaje.toFixed(2) }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import {
  createTableData,
  calcularTotalesGrupoEjercicio,
} from "@/views/pages/dashboard/comparativos/composicionProdStros";
import type { TipoComparativo } from "@/api/TiposComparativos.interface";
// @ts-ignore
import GaugeChart from "./GaugeChart.vue";

export default defineComponent({
  components: {
    GaugeChart,
  },
  props: ["currentChart"],
  setup(props) {
    const currentChart = ref<TipoComparativo>(props.currentChart);

    watch(
      () => props.currentChart,
      (newCurrentChart) => {
        currentChart.value = newCurrentChart;
      },
    );

    const totalesGrupoEjercicio = computed(() =>
      calcularTotalesGrupoEjercicio(
        currentChart.value.codigoProd,
        currentChart.value.codigoGasto,
      ),
    );

    const tableData = computed(() =>
      createTableData(
        totalesGrupoEjercicio.value,
        currentChart.value.codigoProd,
        currentChart.value.codigoGasto,
      ),
    );

    const dataList = computed(() =>
      tableData.value.map((item) => ({
        porcentaje: item.porcentaje,
        ejercicio: item.ejercicio,
      })),
    );

    const codigosContables = computed(() => [
      currentChart.value.codigoProd,
      currentChart.value.codigoGasto,
    ]);

    const columns = computed(() => {
      return [
        { key: "ejercicio", label: "Ejercicio", isNumeric: false },
        // @ts-ignore
        ...codigos.map((code) => ({ key: code, label: code, isNumeric: true })),
        { key: "proporcion", label: "Proporción", isNumeric: true },
      ];
    });

    return {
      currentChart,
      columns,
      tableData,
      codigosContables,
      dataList,
    };
  },
});
</script>
<style scoped>
.gauge-chart-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 15px;
}
</style>
