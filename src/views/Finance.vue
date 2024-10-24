<template>
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-xl-3 col-xxl-4">
        <div class="card h-auto">
          <div class="card-header">
            <h4 class="heading mb-0">Add New Account</h4>
          </div>
          <div class="card-body">
            <form class="finance-hr">
              <div class="form-group mb-3">
                <label class="text-secondary font-w500">
                  Account Title<span class="text-danger">*</span>
                </label>
                <input type="text" class="form-control" placeholder="Account Title" />
              </div>
              <div class="form-group mb-3">
                <label> Amount<span class="text-danger">*</span> </label>
                <div class="input-group">
                  <div class="input-group-text">$</div>
                  <input type="number" class="form-control" placeholder="5000" />
                </div>
              </div>
              <div class="form-group mb-3">
                <label class="text-secondary"> Account No<span class="text-danger">*</span> </label>
                <input type="number" class="form-control" placeholder="123456" />
              </div>
              <div class="form-group mb-3">
                <label class="text-secondary">Branch Code<span class="text-danger">*</span> </label>
                <input type="number" class="form-control" placeholder="#321456" />
              </div>
              <div class="form-group mb-3">
                <label class="text-secondary">Branch Name<span class="text-danger">*</span> </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Industrial and Commercial Bank of China Limited"
                />
              </div>
              <button type="submit" class="btn btn-primary mb-3">Confirm</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-9 col-xxl-8">
        <div class="card">
          <div class="card-body p-0">
            <div class="table-responsive active-projects manage-client">
              <div class="tbl-caption">
                <h4 class="heading mb-0">Finance</h4>
              </div>
              <table id="empoloyees-tbl1" class="table">
                <thead>
                  <tr>
                    <!-- <th @click="sortingArr">Account Title</th>
                    <th @click="sortingArr">Amount</th>
                    <th @click="sortingArr">Account No</th>
                    <th @click="sortingArr">Branch Code</th>
                    <th @click="sortingArr">Branch Name</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="({ name, amount, accountNumber, bankName }, ind) in paginatedData"
                    :key="ind"
                  >
                    <td>
                      <a href="javascript:void(0)" class="text-primary">{{ name }}</a>
                    </td>
                    <td>
                      <span>{{ amount }}$</span>
                    </td>
                    <td>
                      <span>{{ accountNumber }}</span>
                    </td>
                    <td>
                      <span>5678 </span>
                    </td>
                    <td>
                      <span>{{ bankName }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex align-items-center justify-content-between">
                <div class="dataTables_info">
                  Showing {{ paginationLength - 7 }} to {{ paginationLength }} of
                  {{ financeDataTable.length }} entries
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
import { defineComponent } from 'vue'
import handlePagination from '@/layouts/HandlePaginatin'
import { financeDataTable } from '@/elements/TableArrayData'
import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'finance_',
  data() {
    return {
      financeDataTable
    }
  },
  setup() {
    const handlePaginationValue = handlePagination(financeDataTable, 8)
    const { paginationLength } = storeToRefs(useStore())

    return {
      selectBox: [{ title: 'Today' }, { title: 'Week' }, { title: 'Month' }],
      ...handlePaginationValue,
      paginationLength
    }
  }
})
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
