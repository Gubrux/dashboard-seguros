<template>
  <div class="col-xl-6">
    <div class="card">
      <div class="card-header pb-0 border-0">
        <h4 class="heading mb-0">Primas netas de Anulación</h4>
        <button @click="$emit('toggle-chart')" class="btn btn-light">
          Cambiar a Gráfico por Sección
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
        <button
          @click="resetSeccionesOriginales"
          class="btn bg-primary text-white"
        >
          Restablecer
        </button>
        <div class="checkbox-grid">
          <div
            v-for="(seccion, index) in seccionesChart"
            :key="index"
            class="card m-0 h-100"
          >
            <div class="card-body">
              <div class="form-check custom-checkbox checkbox-success">
                <input
                  type="checkbox"
                  v-model="seccionesSeleccionadas"
                  :value="index"
                  class="form-check-input"
                  :id="'check-' + index"
                />
                <label class="form-label ms-1" :for="'check-' + index">
                  {{ seccion }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-xl-6">
    <primas-table
      :secciones="seccionesConsolidadas"
      :primas="primasConsolidada"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
// @ts-ignore
import VueApexCharts from "vue3-apexcharts";
import PrimasTable from "@/views/pages/dashboard/produccion/components/PrimasTable.vue";
import { primasConsolidadas } from "@/views/pages/dashboard/produccion/composicionPrimas";
import { moneyFormatter } from "@/utils/dataFormatter";
import { useStore } from "@/stores/Store";

export default defineComponent({
  name: "ComposicionPrimasConsolidadas",
  components: { apexchart: VueApexCharts, PrimasTable },
  props: ["data"],
  setup(props) {
    const data = props.data;

    const seccionesChart = data.secciones;
    const { parametros } = useStore();

    const parametrosSeccionInicial = parametros.find(
      (parametro) => parametro.key == "CODIGO_SECCIONES_INDIVIDUALES",
    );
    const seccionesSeleccionadas = ref(parametrosSeccionInicial?.value || []);

    const listPrimasConsolidadas = computed(() =>
      primasConsolidadas(
        data.secciones,
        data.totalesPorSeccion.primas_netas,
        seccionesSeleccionadas?.value,
      ),
    );

    const seriesPrimasConsolidadas = computed(() =>
      listPrimasConsolidadas.value.map((key: any) => key.prima),
    );
    const labelsSeccionesConsolidadas = computed(() =>
      listPrimasConsolidadas.value.map((key: any) => key.seccion),
    );
    const resetSeccionesOriginales = () => {
      seccionesSeleccionadas.value = parametrosSeccionInicial?.value || [];
    };
    const colorArray = [
      "#46c9e3",
      "#3ac977",
      "#f2a538",
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

    const chartData = computed(() => ({
      series: seriesPrimasConsolidadas.value,
      chartOptions: {
        chart: {
          type: "pie",
        },
        labels: labelsSeccionesConsolidadas.value,
        dataLabels: {
          enabled: true,
        },
        colors: colorArray,
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
              return moneyFormatter(val);
            },
          },
        },
      },
    }));

    return {
      chartData,
      seccionesConsolidadas: labelsSeccionesConsolidadas,
      primasConsolidada: seriesPrimasConsolidadas,
      seccionesChart,
      seccionesSeleccionadas,
      resetSeccionesOriginales,
    };
  },
});
</script>
<style scoped>
.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 20px;
}

.checkbox-item {
  background-color: #f1f1f1;
  padding: 5px;
  border-radius: 5px;
}

.checkbox-item label {
  display: flex;
  align-items: center;
}

.checkbox-item input[type="checkbox"] {
  margin-right: 8px;
}
</style>
