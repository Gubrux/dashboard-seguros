<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h5 class="mb-0">Tasks Summary</h5>
      <div class="d-flex align-items-center">
        <div class="icon-box icon-box-sm task-tab me-2">
          <RouterLink to="/task-summary">
            <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.50032 3H2.66699V8.83333H8.50032V3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.6668 3H11.8335V8.83333H17.6668V3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.6668 12.1667H11.8335V18H17.6668V12.1667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.50032 12.1667H2.66699V18H8.50032V12.1667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </RouterLink>
        </div>
        <a href="javascript:void(0)" class="btn btn-primary btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add Task</a>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body">
            <div class="row task">
              <div class="col-xl-2 col-sm-4 col-6">
                <div class="task-summary">
                  <div class="d-flex align-items-center">
                    <h2 class="text-primary count">8</h2>
                    <span>Not Started</span>
                  </div>
                  <p>Tasks assigne</p>
                </div>
              </div>
              <div class="col-xl-2 col-sm-4 col-6">
                <div class="task-summary">
                  <div class="d-flex align-items-center">
                    <h2 class="text-purple count">7</h2>
                    <span>In Progress</span>
                  </div>
                  <p>Tasks assigne</p>
                </div>
              </div>
              <div class="col-xl-2 col-sm-4 col-6">
                <div class="task-summary">
                  <div class="d-flex align-items-center">
                    <h2 class="text-warning count">13</h2>
                    <span>Testing</span>
                  </div>
                  <p>Tasks assigne</p>
                </div>
              </div>
              <div class="col-xl-2 col-sm-4 col-6">
                <div class="task-summary">
                  <div class="d-flex align-items-center">
                    <h2 class="text-danger count">11</h2>
                    <span>Awaiting</span>
                  </div>
                  <p>Tasks assigne</p>
                </div>
              </div>
              <div class="col-xl-2 col-sm-4 col-6">
                <div class="task-summary">
                  <div class="d-flex align-items-center">
                    <h2 class="text-success count">21</h2>
                    <span>Complete</span>
                  </div>
                  <p>Tasks assigne</p>
                </div>
              </div>
              <div class="col-xl-2 col-sm-4 col-6">
                <div class="task-summary">
                  <div class="d-flex align-items-center">
                    <h2 class="text-danger count">16</h2>
                    <span>pending</span>
                  </div>
                  <p>Tasks assigne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body p-0">
            <div class="table-responsive active-projects task-table">
              <div class="tbl-caption">
                <h4 class="heading mb-0">Task</h4>
              </div>
              <table id="empoloyeestbl2" class="table">
                <thead>
                  <tr>
                    <th>
                      <div class="form-check custom-checkbox">
                        <input type="checkbox" class="form-check-input" id="checkAll" required @click="checkboxes = !checkboxes" />
                        <label class="form-check-label" for="checkAll"></label>
                      </div>
                    </th>
                    <th>#</th>
                    <!-- <th @click="sortingArr">Name</th>
                    <th @click="sortingArr">Status</th>
                    <th @click="sortingArr">Start Date</th>
                    <th @click="sortingArr">End Date</th>
                    <th @click="sortingArr">Assigned To</th>
                    <th @click="sortingArr">Tags</th>
                    <th class="text-end" @click="sortingArr">Priority</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="({ name, value }, ind) in paginatedData" :key="ind">
                    <td>
                      <div class="form-check custom-checkbox">
                        <input type="checkbox" class="form-check-input" id="customCheckBox3" required :checked="checkboxes" />
                        <label class="form-check-label" for="customCheckBox3"></label>
                      </div>
                    </td>
                    <td><span>03</span></td>
                    <td>
                      <div class="products">
                        <div>
                          <h6>Create Frontend WordPress</h6>
                          <span>INV-100023456</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <CustomeSelectOptinProject :valueOne="name" valueTwo="Pending" valueThree="Testing" valueFour="Complete" />
                    </td>
                    <td><span>06 Feb 2023</span></td>
                    <td>
                      <span>19 Feb 2023</span>
                    </td>
                    <td>
                      <div class="avatar-list avatar-list-stacked">
                        <img src="../../assets/images/contacts/pic666.jpg" class="avatar rounded-circle" alt="" />
                        <img src="../../assets/images/contacts/pic555.jpg" class="avatar rounded-circle" alt="" />
                        <img src="../../assets/images/contacts/pic666.jpg" class="avatar rounded-circle" alt="" />
                      </div>
                    </td>
                    <td>
                      <span class="badge badge-primary light border-0 me-1">Issue</span>
                      <span class="badge badge-primary light border-0 ms-1">HTML</span>
                    </td>
                    <td class="text-end">
                      <CustomTaskSelectOptin :valueOne="value" valueTwo="High" valueThree="Low" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex align-items-center justify-content-between">
                <div class="dataTables_info">Showing 11 to 12 of {{ taskTable.length }} entries</div>
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
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="false" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="'col-xl-12">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title Name" />
              </div>
            </div>
            <div class="col-xl-6">
              <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Contacts<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="exampleFormControlInput2" placeholder="+910213598458" />
              </div>
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">priority<span class="text-danger">*</span></label>
              <div class="dropdown bootstrap-select default-select style-1 form-control">
                <select class="default-select style-1 form-control">
                  <option data-display="Select">priority</option>
                  <option value="html">Hight</option>
                  <option value="css">Medium</option>
                  <option value="javascript">Low</option></select
                ><button
                  type="button"
                  tabindex="-1"
                  class="btn dropdown-toggle btn-light"
                  data-bs-toggle="dropdown"
                  role="combobox"
                  aria-owns="bs-select-21"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  title="priority"
                >
                  <div class="filter-option">
                    <div class="filter-option-inner"><div class="filter-option-inner-inner">priority</div></div>
                  </div>
                </button>
                <div class="dropdown-menu">
                  <div class="inner show" role="listbox" id="bs-select-21" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div>
                </div>
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
import CustomeSelectOptinProject from "@/elements/projectContent/CustomeSelectOptinProject.vue";
import handlePagination from "@/layouts/HandlePaginatin";
import { taskTable } from "@/elements/TableArrayData";
import CustomTaskSelectOptin from "@/elements/CustomTaskSelectOptin.vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "task_",
  components: { CustomeSelectOptinProject, CustomTaskSelectOptin, RouterLink },
  data() {
    return {
      taskTable,
    };
  },
  setup() {
    const checkboxes = ref(false);
    const handlePaginationValue = handlePagination(taskTable, 10);
    return { ...handlePaginationValue, checkboxes };
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

#user-tbl_filter {
  color: #888888;
  border-radius: 1rem;
  margin-bottom: 0.35rem;
  padding-top: 1rem;
}
</style>
