<template>
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body p-0">
            <div class="table-responsive active-projects manage-client">
              <div class="tbl-caption">
                <h4 class="heading mb-0">Generated Report</h4>
              </div>
              <table id="reports-tbl" class="table">
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <!-- <th @click="sortingArr">Customer</th>
                    <th @click="sortingArr">Date</th>
                    <th @click="sortingArr">Due Date</th>
                    <th @click="sortingArr">Amount</th>
                    <th @click="sortingArr">Discount</th>
                    <th @click="sortingArr">Amount Open</th>
                    <th @click="sortingArr">Adjustment</th>
                    <th @click="sortingArr">Status</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="{
                      name,
                      invoice_number,
                      invoice_date,
                      due_date,
                      amount,
                      tax,
                      total,
                      status,
                      status_color
                    } in paginatedData"
                  >
                    <td>
                      <a href="javascript:void(0)" class="text-primary">{{ invoice_number }}</a>
                    </td>
                    <td>
                      <span>{{ name }}</span>
                    </td>
                    <td>
                      <span>{{ invoice_date }}</span>
                    </td>
                    <td>
                      <span>{{ due_date }}</span>
                    </td>
                    <td>
                      <span class="text-secondary">{{ amount }} $</span>
                    </td>
                    <td>
                      <span class="text-secondary">{{ tax }} $</span>
                    </td>
                    <td>
                      <span class="text-secondary">{{ total }} $</span>
                    </td>
                    <td>
                      <span class="text-secondary">0.00</span>
                    </td>
                    <td>
                      <span :class="`badge badge-${status_color} light border-0`">{{
                        status
                      }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex align-items-center justify-content-between">
                <div class="dataTables_info">
                  Showing 11 to 12 of {{ reportTable.length }} entries
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
import { reportTable } from '@/elements/TableArrayData'
import handlePagination from '@/layouts/HandlePaginatin'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'report_',
  data() {
    return {
      reportTable
    }
  },
  setup() {
    const handlePaginationValue = handlePagination(reportTable, 10)
    return { ...handlePaginationValue }
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

#user-tbl_filter {
  color: #888888;
  border-radius: 1rem;
  margin-bottom: 0.35rem;
  padding-top: 1rem;
}
</style>
