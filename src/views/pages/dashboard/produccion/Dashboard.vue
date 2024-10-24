<template>
  <div class="container-fluid">
    <div class="row">
      <CardChart />
      <EarningChart />
      <Projects />
      <ActiveUsers />
      <Chat />
      <BestSellingProduct />
      <div class="col-xl-3 col-md-6 up-shd">
        <div class="card">
          <div class="card-header border-0 pb-1">
            <h4 class="heading mb-0">Upcoming Schedules</h4>
          </div>
          <Calender />
        </div>
      </div>
      <div class="col-xl-3 col-md-6 up-shd">
        <div class="card">
          <div class="card-header pb-0 border-0">
            <h4 class="heading mb-0">Projects Status</h4>
            <div class="dropdown bootstrap-select default-select status-select normal-select">
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
                    <div class="filter-option-inner-inner">{{ selectOptin }}</div>
                  </div>
                </div>
              </button>
              <div class="dropdown-menu" style="max-height: 202px; overflow: hidden; min-height: 100px">
                <div
                  class="inner show"
                  role="listbox"
                  id="bs-select-3"
                  tabindex="-1"
                  style="max-height: 188px; overflow-y: auto; min-height: 0px"
                  aria-activedescendant="bs-select-3-2"
                >
                  <ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px">
                    <li :class="selectOptin == title ? 'active selected' : ''" v-for="({ title }, ind) in selectBox" :key="ind" @click="selectOption(title)">
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
            </div>
          </div>
          <ProjectStatus />
        </div>
      </div>
      <div class="col-xl-9 bst-seller">
        <div class="card">
          <div class="card-body p-0">
            <div class="table-responsive active-projects style-1 ItemsCheckboxSec shorting">
              <div class="tbl-caption">
                <h4 class="heading mb-0">Employees</h4>
                <div>
                  <button
                    class="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                    tabindex="0"
                    aria-controls="user-tbl"
                    type="button"
                    style="background-color: var(--rgba-primary-1); color: var(--primary)"
                  >
                    <span><i class="fa-solid fa-file-excel"></i> Export Report</span>
                  </button>
                  {{ " " }}
                  <a class="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">+ Add Employee</a
                  >{{ " " }}
                  <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">+ Invite Employee</button>
                </div>
              </div>
              <EmployeesTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-center">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel1">Invite Customer</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-xl-12">
              <label class="form-label">Email ID<span class="text-danger">*</span></label>
              <input type="email" class="form-control" placeholder="hello@gmail.com" />
              <label class="form-label mt-3">Employment date<span class="text-danger">*</span></label>
              <input class="form-control" type="date" />
              <div class="row">
                <div class="col-xl-6">
                  <label class="form-label mt-3">First Name<span class="text-danger">*</span></label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Name" />
                  </div>
                </div>
                <div class="col-xl-6">
                  <label class="form-label mt-3">Last Name<span class="text-danger">*</span></label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Surname" />
                  </div>
                </div>
              </div>
              <div class="mt-3 invite">
                <label class="form-label">Send invitation email<span class="text-danger">*</span></label>
                <input type="email" class="form-control" placeholder="+ invite" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
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

export default defineComponent({
  name: "dashBoard",
  data() {
    return SVGImage;
  },
  setup() {
    const selectOptin = ref("Month");
    watchEffect(() => {
      if (router.currentRoute.value.name == "index_2") {
        document.body.setAttribute("data-theme-version", "dark");
      } else {
        document.body.setAttribute("data-theme-version", "light");
      }
    });
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
    CardChart,
    Projects,
    ActiveUsers,
    BestSellingProduct,
    Calender,
    EmployeesTable,
    EarningChart,
    Chat,
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
