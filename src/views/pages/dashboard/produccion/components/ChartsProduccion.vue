<template>
  <div class="col-xl-9">
    <div class="row">
      <div class="col-xl-3 col-sm-6">
        <div class="card chart-grd same-card">
          <div class="card-body depostit-card p-0">
            <div
              class="depostit-card-media d-flex justify-content-between pb-0"
            >
              <div>
                <h6>Primas Emitidas</h6>
                <h4 class="text-primary">
                  <span class="text-primary">
                    {{ moneyFormatter(totalGralPrimas.totalEmisiones) }}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card chart-grd same-card">
          <div class="card-body depostit-card p-0">
            <div
              class="depostit-card-media d-flex justify-content-between pb-0"
            >
              <div>
                <h6>Primas Nuevas</h6>
                <h4 class="text-green">
                  <span class="text-green">
                    {{ moneyFormatter(totalGralPrimas.totalNuevas) }}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card chart-grd same-card">
          <div class="card-body depostit-card p-0">
            <div
              class="depostit-card-media d-flex justify-content-between pb-0"
            >
              <div>
                <h6>Primas Renovadas</h6>
                <h4 class="text-orange">
                  <span class="text-orange">
                    {{ moneyFormatter(totalGralPrimas.totalRenovadas) }}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card chart-grd same-card">
          <div class="card-body depostit-card p-0">
            <div
              class="depostit-card-media d-flex justify-content-between pb-0"
            >
              <div>
                <h6>Primas Anuladas</h6>
                <h4 class="text-danger">
                  <span class="text-danger">
                    {{ moneyFormatter(totalGralPrimas.totalAnuladas) }}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl">
        <div class="card overflow-hidden">
          <div class="card-header border-0 pb-0 flex-wrap">
            <h4 class="heading mb-0">Pólizas</h4>
          </div>
          <div class="card-body p-0">
            <div id="overiewChart">
              <apexchart
                type="line"
                ref="barChart"
                height="300px"
                :options="state.chartOptions"
                :series="state.series"
              ></apexchart>
            </div>
            <div class="ttl-project">
              <div>
                <h6>Pólizas Emitidas</h6>
                <h3 class="cantidad-emitidas">
                  {{ quantityFormatter(totalGralCant.totalEmisiones) }}
                </h3>
              </div>

              <div>
                <h6>Pólizas Nuevas</h6>
                <h3 class="totalNuevas">
                  {{ quantityFormatter(totalGralCant.totalNuevas) }}
                </h3>
              </div>
              <div>
                <h6>Pólizas Renovadas</h6>
                <h3 class="totalRenovadas">
                  {{ quantityFormatter(totalGralCant.totalRenovadas) }}
                </h3>
              </div>

              <div>
                <h6>Pólizas Anuladas</h6>
                <h3 class="totalAnuladas">
                  {{ quantityFormatter(totalGralCant.totalAnuladas) }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
// @ts-ignore
import VueApexCharts from "vue3-apexcharts";
import { lineChart, pieChart, lineChart2 } from "@/layouts/ChartsData";
import { SVGImage } from "@/constent/Theme";

export default defineComponent({
  name: "chartsProduccion",
  components: { apexchart: VueApexCharts },

  props: ["data"],

  setup(props) {
    const data = props.data;
    const state = reactive({
      series: [
        {
          name: "Polizas Emitidas",
          type: "column",
          data: data.totalesByMonths.emisiones,
        },
        {
          name: "Renovadas",
          type: "line",
          data: data.totalesByMonths.renovadas,
        },
        {
          name: "Polizas Nuevas",
          type: "area",
          data: data.totalesByMonths.nuevas,
        },
        {
          name: "Anulaciones",
          type: "line",
          data: data.totalesByMonths.anuladas,
        },
      ],
      chartOptions: {
        chart: {
          type: "line",
          stacked: false,
          offsetY: -10,
          toolbar: {
            tools: {
              download: false,
              selection: true,
              zoom: false,
            },
          },
        },
        stroke: {
          width: [0, 1, 1],
          curve: "straight",
          dashArray: [0, 0, 5],
          colors: ["#0000ff", "#f7890c", "#3AC977", "#ff0000"], // (Polizas Emitidas, Renovadas, Polizas Nuevas, Anulaciones)
        },
        legend: {
          fontSize: "13px",
          fontFamily: "poppins",
          labels: {
            colors: "#888888",
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "18%",
            horizontal: false,
            borderRadius: 6,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            colorStops: [
              [
                {
                  offset: 0,
                  color: "var(--primary)", // Color para Polizas Emitidas
                  opacity: 1,
                },
                {
                  offset: 100,
                  color: "var(--primary)", // Color para Polizas Emitidas
                  opacity: 1,
                },
              ],
              [
                {
                  offset: 0,
                  color: "#f7890c", // Color para Renovadas
                  opacity: 1,
                },
                {
                  offset: 100,
                  color: "#f7890c", // Color para Renovadas
                  opacity: 1,
                },
              ],
              [
                {
                  offset: 0,
                  color: "#3AC977", // Color para Polizas Nuevas
                  opacity: 1,
                },
                {
                  offset: 0.4,
                  color: "#3AC977", // Color para Polizas Nuevas
                  opacity: 0.3,
                },
                {
                  offset: 100,
                  color: "#3AC977", // Color para Polizas Nuevas
                  opacity: 0.15,
                },
              ],
              [
                {
                  offset: 0,
                  color: "#fc1e1e", // Color para Anulaciones
                  opacity: 1,
                },
              ],
            ],
            stops: [0, 100, 100, 100],
          },
        },
        colors: ["var(--primary)", "#f7890c", "#3AC977", "#fc1e1e"], // (Polizas Emit
        markers: {
          size: 0,
        },
        xaxis: {
          categories: [
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
          ],
          labels: {
            style: {
              fontSize: "13px",
              colors: "#888888", // Color de los numeros en el eje X
            },
          },
        },
        yaxis: {
          min: 0,
          tickAmount: 4,
          labels: {
            style: {
              fontSize: "13px",
              colors: "#888888", // Color de los numeros en el eje Y
            },
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y: any) {
              if (typeof y !== "undefined") {
                return y.toFixed(0);
              }
              return y;
            },
          },
        },
      },
    });

    const totalGralPrimas = data.totalGralPrimas;
    const totalGralCant = data.totalGralCant;
    const totalesPorSeccion = data.totalesPorSeccion;

    const updateData = (value: string) => {
      switch (value) {
        case "secciones":
          state.chartOptions = {
            ...state.chartOptions,
            xaxis: { ...state.chartOptions.xaxis, categories: data.secciones },
          };
          state.series[0].data = totalesPorSeccion.emisiones;
          state.series[1].data = totalesPorSeccion.nuevas;
          state.series[2].data = totalesPorSeccion.renovadas;
          state.series[3].data = totalesPorSeccion.anuladas;
          console.log(state);
          break;
        case "month":
          state.series[0].data = [
            20, 50, 80, 52, 10, 80, 50, 30, 95, 10, 60, 85,
          ];
          state.series[1].data = [
            40, 25, 85, 45, 85, 25, 95, 65, 45, 45, 20, 12,
          ];
          state.series[2].data = [
            65, 45, 25, 65, 45, 25, 75, 35, 65, 75, 15, 65,
          ];
          break;
        default:
          break;
      }
    };

    return {
      state,
      totalGralPrimas,
      totalGralCant,
      totalesPorSeccion,
      updateData,
    };
  },

  data() {
    return {
      lineChart,
      pieChart,
      lineChart2,
      SVGImage,
    };
  },
  // methods: {
  //   moneyFormatter: (number: Number) => {
  //     return number.toLocaleString("es-PY", {
  //       style: "currency",
  //       currency: "PYG",
  //     });
  //   },
  // },
});
</script>

<style scoped></style>
