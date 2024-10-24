<template>
  <div class="container-fluid vh-90">
    <div class="row">
      <div class="col-xl-9 col-xxl-8">
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body p-0">
                <div class="table-responsive active-projects style-1">
                  <div class="tbl-caption">
                    <h4 class="heading mb-0">Employees</h4>
                    <div>
                      <a class="btn btn-primary btn-sm" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                        >+ Add Employee</a
                      >
                      {{ " " }}
                      <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">+ Invite Employee</button>
                    </div>
                  </div>
                  <table id="empoloyees-tblwrapper" class="table mb-0">
                    <thead>
                      <tr>
                        <!-- <th @click="sortingArr">Employee ID</th>
                        <th @click="sortingArr">Employee Name</th>
                        <th @click="sortingArr">Department</th>
                        <th @click="sortingArr">Email Address</th>
                        <th @click="sortingArr">Contact Number</th>
                        <th @click="sortingArr">Gender</th>
                        <th @click="sortingArr">Location</th>
                        <th @click="sortingArr">Status</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="({ name, position, img, user, badge }, ind) in paginatedData" :key="ind">
                        <td><span>1001</span></td>
                        <td>
                          <div class="products">
                            <img :src="img" class="avatar avatar-md" alt="" />
                            <div>
                              <h6>{{ name }}</h6>
                              <span>{{ position }}</span>
                            </div>
                          </div>
                        </td>
                        <td><span>Computer Science</span></td>
                        <td><span class="text-primary">abc@gmail.com</span></td>
                        <td>
                          <span>+91 123 456 7890</span>
                        </td>
                        <td>
                          <span>Male</span>
                        </td>
                        <td>
                          <span>Delhi</span>
                        </td>
                        <td>
                          <span :class="`badge badge-${badge} light border-0`">{{ user }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="dataTables_info">Showing {{ paginatedData.length }} to 11 of {{ employeeTable.length }} entries</div>
                    <div class="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                      <a class="paginate_button previous" id="empoloyees-tblwrapper_previous" @click="backPage"><i class="fa-solid fa-angle-left"></i></a
                      ><span>
                        <a
                          class="paginate_button"
                          v-for="item in Math.ceil(data.length / perPage)"
                          :key="item"
                          :style="`background-color:${addActive == item ? 'var(--primary);' : ''};color:${addActive == item ? '#fff !important' : ''}`"
                          @click="() => goToPage(item)"
                          >{{ item }}</a
                        >
                      </span>
                      <a class="paginate_button next" @click="nextPage" aria-controls="empoloyees-tblwrapper" data-dt-idx="3" tabindex="0" id="empoloyees-tblwrapper_next"
                        ><i class="fa-solid fa-angle-right"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body p-0">
                <div class="table-responsive active-projects style-1 attendance-tbl">
                  <div class="tbl-caption">
                    <h4 class="heading mb-0">Attendance</h4>
                    <div>
                      <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Mark Attendance</button>
                    </div>
                  </div>

                  <coreHrTable />
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="dataTables_info">Showing {{ paginatedData.length }} to 11 of {{ employeeTable.length }} entries</div>
                    <div class="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                      <a class="paginate_button previous" id="empoloyees-tblwrapper_previous" @click="backPage"><i class="fa-solid fa-angle-left"></i></a
                      ><span>
                        <a
                          class="paginate_button"
                          v-for="item in Math.ceil(data.length / perPage)"
                          :key="item"
                          :style="`background-color:${addActive == item ? 'var(--primary);' : ''};color:${addActive == item ? '#fff !important' : ''}`"
                          @click="() => goToPage(item)"
                          >{{ item }}</a
                        >
                      </span>
                      <a class="paginate_button next" @click="nextPage" aria-controls="empoloyees-tblwrapper" data-dt-idx="3" tabindex="0" id="empoloyees-tblwrapper_next"
                        ><i class="fa-solid fa-angle-right"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-xxl-4">
        <div class="row">
          <div class="col-xl-12 col-md-6">
            <div class="card h-auto">
              <div class="card-header pb-0 border-0">
                <h4 class="heading mb-0">Attendance</h4>
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
          <div class="col-xl-12 col-md-6">
            <div class="card">
              <div class="card-header border-0">
                <h4 class="heading mb-0">Upcoming Holidays</h4>
              </div>
              <Calendor />
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
import { defineComponent, ref } from "vue";
import Calendor from "../elements/home/Calender.vue";
// import ProjectStatus from "@/elements/home/ProjectStatus.vue";
import handlePagination from "@/layouts/HandlePaginatin";
import { employeeTable } from "@/elements/TableArrayData";
import coreHrTable from "@/elements/coreHrTable.vue";

export default defineComponent({
  name: "coreHr",
  components: { Calendor, coreHrTable },
  data() {
    return { employeeTable };
  },
  setup() {
    const selectOptin = ref("Month");
    const checkboxes = ref(false);
    const handlePaginationValue = handlePagination(employeeTable, 11);
    return {
      selectOptin,
      selectBox: [{ title: "Today" }, { title: "Week" }, { title: "Month" }],
      ...handlePaginationValue,
      checkboxes,
    };
  },
  methods: {
    selectOption(option: string) {
      this.selectOptin = option;
    },
  },
});
</script>

<style scoped>
.paginate_button {
  height: 24px;
  width: 24px;
  padding: 0;
  margin-left: 0rem;
  margin: 0 0.125rem;
  line-height: 25px;
  text-align: center;
  font-size: 13px;
  border-radius: 0.375rem;
  border: 0;
  color: #0d99ff !important;
  cursor: pointer;
  box-shadow: none;
  box-sizing: border-box;
  display: inline-block;
}

.paginate_button:hover {
  color: var(--primary);
  background: var(--rgba-primary-1);
}
</style>
