<template>
  <div class="container-fluid">
    <div class="row">
      <ChartsComparativos />
      <div class="col-xl-3 col-md-6 up-shd"></div>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { SVGImage } from "@/constent/Theme";
import CardChart from "@/elements/CardChart.vue";
import Projects from "@/elements/home/Projects.vue";
import ActiveUsers from "@/elements/home/ActiveUsers.vue";
import BestSellingProduct from "@/elements/home/BestSellingProduct.vue";
import Calender from "@/elements/home/Calender.vue";
import EmployeesTable from "@/elements/home/EmployeesTable.vue";
import EarningChart from "@/elements/home/EarningChart.vue";
import Chat from "@/elements/home/Chat.vue";
import router from "@/router";
import ChartsSiniestros from "./components/ChartsComparativos.vue";
import ChartsComparativos from "./components/ChartsComparativos.vue";

export default defineComponent({
  name: "dashBoard",
  data() {
    return SVGImage;
  },
  setup() {
    const selectOptin = ref("Month");
    // comentado porque causa bug en el dark mode
    // watchEffect(() => {
    //   if (router.currentRoute.value.name == "index_2") {
    //     document.body.setAttribute("data-theme-version", "dark");
    //   } else {
    //     document.body.setAttribute("data-theme-version", "light");
    //   }
    // });
    return {
      selectOptin,
      selectBox: [{ title: "Today" }, { title: "Week" }, { title: "Month" }],
    };
  },
  methods: {
    selectOption(option: string) {
      this.selectOptin = option;
    },
  },
  components: {
    ChartsComparativos,
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
