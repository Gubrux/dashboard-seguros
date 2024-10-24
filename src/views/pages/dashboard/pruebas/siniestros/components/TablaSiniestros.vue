<template>
  <div class="card">
    <div class="card-body p-0">
      <div class="table-responsive active-projects shorting">
        <div id="user-tbl_wrapper" class="dataTables_wrapper">
          <div
            class="tbl-caption d-flex justify-content-between align-items-center"
          >
            <h4 class="heading mb-0">Siniestros</h4>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import handlePagination from "@/layouts/HandlePaginatin";
import {
  ejercicios,
  calcularSeries,
} from "@/views/pages/dashboard/siniestros/composicionSiniestros";

export default defineComponent({
  setup() {
    interface DatosCodigos {
      [key: string]: number;
    }

    const series = calcularSeries();
    const codigos = series.map((s) => s.name);

    const datosSiniestros = computed(() => {
      return ejercicios.map((ejercicio, index) => {
        const datosCodigos = codigos.reduce(
          (acc: DatosCodigos, codigo: string) => {
            const valor =
              series.find((s) => s.name === codigo)?.data[index] || 0;
            acc[codigo] = valor;
            return acc;
          },
          {},
        );

        let proporcion: string | number = 0;
        if (codigos.length >= 2) {
          const denominador = datosCodigos[codigos[0]] || 0;
          const numerador = datosCodigos[codigos[1]] || 0;
          proporcion = denominador ? numerador + denominador : 0;
        }

        return {
          ejercicio,
          ...datosCodigos,
          proporcion,
        };
      });
    });

    const columns = computed(() => {
      return [
        { key: "ejercicio", label: "Ejercicio", isNumeric: false },
        ...codigos.map((code) => ({ key: code, label: code, isNumeric: true })),
        { key: "proporcion", label: "Total", isNumeric: true },
      ];
    });

    const { paginatedData, sortingArr } = handlePagination(
      datosSiniestros.value,
      10,
    );

    return {
      datosSiniestros,
      paginatedData,
      sortingArr,
      columns,
    };
  },
});
</script>
