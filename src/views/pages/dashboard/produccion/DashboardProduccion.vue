<template>
  <div class="container-fluid">
    <div class="row">
      <ChartsProduccion :data="apiData" />

      <div class="col-3 up-shd">
        <div class="card">
          <div class="card-header pb-0 border-0">
            <h4 class="heading mb-0">Composición Pólizas</h4>
            <!-- <div
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
                    <div class="filter-option-inner-inner">
                      {{ selectOptin }}
                    </div>
                  </div>
                </div>
              </button>
              <div
                class="dropdown-menu"
                style="max-height: 202px; overflow: hidden; min-height: 100px"
              >
                <div
                  class="inner show"
                  role="listbox"
                  id="bs-select-3"
                  tabindex="-1"
                  style="max-height: 188px; overflow-y: auto; min-height: 0px"
                  aria-activedescendant="bs-select-3-2"
                >
                  <ul
                    class="dropdown-menu inner show"
                    role="presentation"
                    style="margin-top: 0px; margin-bottom: 0px"
                  >
                    <li
                      :class="selectOptin == title ? 'active selected' : ''"
                      v-for="({ title }, ind) in selectBox"
                      :key="ind"
                      @click="selectOption(title)"
                    >
                      <a
                        role="option"
                        :class="`dropdown-item ${selectOptin == title ? 'active selected' : ''}`"
                        id="bs-select-3-0"
                        tabindex="0"
                        aria-setsize="3"
                        aria-posinset="1"
                        ><span class="text">{{ title }}</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div> -->
          </div>
          <ComposicionPrimas :data="apiData" />
        </div>
      </div>

      <ComposicionPrimasConsolidadas
        v-if="isConsolidada"
        :data="apiData"
        @toggle-chart="toggleChart"
      />
      <ComposicionPrimasPorSeccion
        v-else
        :data="apiData"
        @toggle-chart="toggleChart"
      />
    </div>
  </div>

  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-center">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel1">
            Invite Customer
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-xl-12">
              <label class="form-label"
                >Email ID<span class="text-danger">*</span></label
              >
              <input
                type="email"
                class="form-control"
                placeholder="hello@gmail.com"
              />
              <label class="form-label mt-3"
                >Employment date<span class="text-danger">*</span></label
              >
              <input class="form-control" type="date" />
              <div class="row">
                <div class="col-xl-6">
                  <label class="form-label mt-3"
                    >First Name<span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="col-xl-6">
                  <label class="form-label mt-3"
                    >Last Name<span class="text-danger">*</span></label
                  >
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Surname"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-3 invite">
                <label class="form-label"
                  >Send invitation email<span class="text-danger"
                    >*</span
                  ></label
                >
                <input
                  type="email"
                  class="form-control"
                  placeholder="+ invite"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger light"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { SVGImage } from "@/constent/Theme";
import ChartsProduccion from "@/views/pages/dashboard/produccion/components/ChartsProduccion.vue";
import ComposicionPrimas from "@/views/pages/dashboard/produccion/components/ComposicionPrimas.vue";
import router from "@/router";
import ComposicionPrimasPorSeccion from "@/views/pages/dashboard/produccion/components/ComposicionPrimasPorSeccion.vue";
import { api } from "@/api/dashboad-api";
import mockDataApi from "@/api/mock-data-api";
import ComposicionPrimasConsolidadas from "./components/ComposicionPrimasConsolidadas.vue";

export default defineComponent({
  name: "dashBoard",
  data() {
    return SVGImage;
  },
  async setup() {
    // const response = await api.get("total_produccion");
    const apiData = mockDataApi; // mockDataApi; // response.data;

    const selectOptin = ref("Mes");

    const isConsolidada = ref(false);
    const toggleChart = () => {
      isConsolidada.value = !isConsolidada.value;
    };

    return {
      selectOptin,
      selectBox: [{ title: "Hoy" }, { title: "Semana" }, { title: "Mes" }],
      apiData,
      isConsolidada,
      toggleChart,
    };
  },
  methods: {
    selectOption(option: string) {
      this.selectOptin = option;
    },
  },
  components: {
    ChartsProduccion,
    ComposicionPrimas,
    ComposicionPrimasPorSeccion,
    ComposicionPrimasConsolidadas,
  },
});
</script>

<style scoped>
div.dt-buttons {
  position: relative;
  float: unset;
  margin-top: unset;
}
</style>
