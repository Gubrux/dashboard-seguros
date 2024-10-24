<template>
  <div class="card">
    <div class="card-body p-0">
      <div class="table-responsive active-projects shorting">
        <div id="user-tbl_wrapper" class="dataTables_wrapper">
          <div
            class="tbl-caption d-flex justify-content-between align-items-center"
          >
            <h4 class="heading mb-0">Primas netas de Anulación</h4>
            <div class="col-xl-3 col-sm-6">
              <div class="card chart-grd same-card">
                <div class="card-body depostit-card p-0">
                  <div
                    class="depostit-card-media d-flex justify-content-between pb-0"
                  >
                    <div>
                      <h5 class="text-primary">
                        <span class="text-primary">
                          {{ moneyFormatter(totalPrimasNetas) }}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table id="projects-tbl" class="table ItemsCheckboxSec">
            <thead>
              <tr>
                <th></th>
                <th>Sección</th>
                <th class="text-end">Total Prima</th>
                <th>Proporción</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(
                  { seccion, prima, porcentaje }, index
                ) in datosSecciones"
                :key="index"
              >
                <td></td>
                <td>{{ seccion }}</td>
                <td>
                  <p class="mb-0 ms-2 text-end">{{ moneyFormatter(prima) }}</p>
                </td>
                <td class="">{{ porcentaje.toFixed(2) }} %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { objPrimasPorSeccion } from "@/views/pages/dashboard/produccion/composicionPrimas";
import { moneyFormatter } from "@/utils/dataFormatter";

export default defineComponent({
  props: ["secciones", "primas"],
  setup(props) {
    const primasNetas = computed(() => props.primas);
    const secciones = computed(() => props.secciones);

    const totalPrimasNetas = computed(() =>
      primasNetas.value.reduce((acc: number, value: number) => acc + value, 0),
    );

    const datosSecciones = computed(() =>
      objPrimasPorSeccion(secciones.value, primasNetas.value),
    );

    return {
      totalPrimasNetas,
      datosSecciones,
      moneyFormatter,
    };
  },
});
</script>
