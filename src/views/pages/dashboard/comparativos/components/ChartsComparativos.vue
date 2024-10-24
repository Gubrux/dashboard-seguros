<template>
  <div class="col-xl-12">
    <div class="row">
      <div class="col-xl-3 col-sm-6">
        <div class="card chart-grd same-card">
          <div class="card-body depostit-card p-0">
            <div
              class="depostit-card-media d-flex justify-content-between pb-0"
            >
              <div>
                <h6>Total Prima</h6>
                <h3>
                  {{ moneyFormatter(totalesPorGrupo[currentChart.codigoProd]) }}
                </h3>
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
                <h6>{{ currentChart.subtitle }}</h6>
                <h3 class="text-danger-light">
                  {{
                    moneyFormatter(totalesPorGrupo[currentChart.codigoGasto])
                  }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-sm-6">
        <div class="card chart-grd same-card">
          <div class="card-body p-0">
            <div
              class="depostit-card-media d-flex justify-content-between pb-0"
            >
              <div>
                <h6 class="text-danger">Tipo Comparativo</h6>
                <div class="d-flex align-items-center cs-settiong">
                  <div
                    class="dropdown bootstrap-select default-select status-select normal-select"
                  >
                    <button
                      type="button"
                      tabindex="-1"
                      class="btn dropdown-toggle btn-light d-flex"
                      data-bs-toggle="dropdown"
                      role="combobox"
                      aria-owns="bs-select-3"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      title="Month"
                    >
                      <div class="filter-option">
                        <div class="filter-option-inner">
                          <div
                            class="filter-option-inner-inner"
                            style="font-size: 16px"
                          >
                            {{ currentChart?.name }}
                          </div>
                        </div>
                      </div>
                    </button>
                    <div
                      class="dropdown-menu"
                      style="
                        max-height: 202px;
                        /* overflow: hidden; */
                        min-height: 100px;
                      "
                    >
                      <div
                        class="inner show"
                        role="listbox"
                        id="bs-select-3"
                        tabindex="-1"
                        style="
                          max-height: 188px;
                          overflow-y: auto;
                          min-height: 0px;
                        "
                        aria-activedescendant="bs-select-3-2"
                      >
                        <ul
                          class="dropdown-menu inner show"
                          role="presentation"
                          style="margin-top: 0px; margin-bottom: 0px"
                        >
                          <li
                            :class="
                              currentChart?.key == item.key
                                ? 'active selected'
                                : ''
                            "
                            v-for="(item, ind) in tiposComparativos"
                            :key="ind"
                            @click="selectCurrentChart(item)"
                          >
                            <a
                              role="option"
                              :class="`dropdown-item ${currentChart?.key == item.key ? 'active selected' : ''}`"
                              id="bs-select-3-0"
                              tabindex="0"
                              aria-setsize="3"
                              aria-posinset="1"
                              ><span class="text">{{ item?.name }}</span></a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <BarChartProdStros :currentChart="currentChart" />
      <TablaProdStros :currentChart="currentChart" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import BarChartProdStros from "../../comparativos/components/BarChartProdStros.vue";
import TablaProdStros from "../../comparativos/components/TablaProdStros.vue";
import { totalGralPorGrupo } from "../composicionProdStros";
import type { TipoComparativo } from "@/api/TiposComparativos.interface";
import { tiposComparativos } from "../../../../../api/mock-cuentasContables";
export default defineComponent({
  name: "cardChart",
  setup() {
    let currentChart = ref<TipoComparativo>(
      tiposComparativos.find((tipo) => tipo.key === "401vs506") ||
        tiposComparativos[0],
    );

    const totalesPorGrupo = computed(() => {
      const totalGenerado = totalGralPorGrupo(currentChart.value);
      const totalMapeado: { [key: string]: number } = {};
      totalGenerado.forEach((totalGrupo) => {
        totalMapeado[totalGrupo.grupo] = totalGrupo.total;
      });
      return totalMapeado;
    });

    return {
      tiposComparativos,
      currentChart,
      totalesPorGrupo,
    };
  },
  methods: {
    selectCurrentChart(currentChart: TipoComparativo) {
      this.currentChart = currentChart;
    },
  },
  components: {
    BarChartProdStros,
    TablaProdStros,
  },
});
</script>

<style scoped></style>
