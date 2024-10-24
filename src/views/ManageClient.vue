<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body p-0">
            <div class="table-responsive active-projects manage-client">
              <div class="tbl-caption">
                <h4 class="heading mb-0">Manage Client</h4>
              </div>
              <table id="reports-tbl" class="table">
                <thead>
                  <tr>
                    <!-- <th @click="sortingArr">Name</th>
                    <th @click="sortingArr">User Name</th>
                    <th @click="sortingArr">Contact</th>
                    <th @click="sortingArr">Gender</th>
                    <th @click="sortingArr">Location</th>
                    <th @click="sortingArr">Status</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="({ img, name, badge, user }, ind) in paginatedData" :key="ind">
                    <td>
                      <div class="products">
                        <img :src="img" class="avatar avatar-md" alt="" />
                        <div>
                          <h6>{{ name }}</h6>
                          <span>Web Designer</span>
                        </div>
                      </div>
                    </td>
                    <td><span class="text-primary">ricky.antony</span></td>
                    <td>
                      <span>+91 123 456 7890</span>
                    </td>
                    <td>
                      <span>Male</span>
                    </td>
                    <td>
                      <span>Uk</span>
                    </td>
                    <td>
                      <span :class="`badge badge-${badge} light border-0`">{{ user }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex align-items-center justify-content-between">
                <div class="dataTables_info">
                  Showing 11 to 12 of {{ employeeTable.length }} entries
                </div>
                <div
                  class="dataTables_paginate paging_simple_numbers"
                  id="empoloyees-tblwrapper_paginate"
                >
                  <a
                    class="paginate_button previous"
                    id="empoloyees-tblwrapper_previous"
                    @click="backPage"
                    ><i class="fa-solid fa-angle-left"></i></a
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
                  <a
                    class="paginate_button next"
                    @click="nextPage"
                    aria-controls="empoloyees-tblwrapper"
                    data-dt-idx="3"
                    tabindex="0"
                    id="empoloyees-tblwrapper_next"
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
</template>

<script lang="ts">
import { employeeTable } from '@/elements/TableArrayData'
import handlePagination from '@/layouts/HandlePaginatin'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'manageClient',
  data() {
    return {
      employeeTable
    }
  },
  setup() {
    const handlePaginationValue = handlePagination(employeeTable, 10)
    return { ...handlePaginationValue }
  }
})
</script>

<style scoped>
.active-projects th:first-child:after {
  display: inline-block;
}
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
  color: var(--primary);
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
