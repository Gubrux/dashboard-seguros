<template>
  <table id="empoloyees-tblwrapper" class="table">
    <thead>
      <tr>
        <th>
          <div class="form-check custom-checkbox ms-0">
            <input
              type="checkbox"
              class="form-check-input checkAllInput"
              id="checkAll2"
              required
              @click="checkboxes = !checkboxes"
            />
            <label class="form-check-label" for="checkAll2"></label>
          </div>
        </th>
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
        <td class="sorting_1">
          <div class="form-check custom-checkbox">
            <input type="checkbox" class="form-check-input" :checked="checkboxes" required />
            <label class="form-check-label" for="customCheckBox0100"></label>
          </div>
        </td>
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
    <div class="dataTables_info">
      Showing {{ paginationLength - 6 == -1 ? 1 : paginationLength - 6 }} to
      {{ paginationLength }} of {{ employeeTable.length }} entries
    </div>
    <div class="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
      <a class="paginate_button previous" id="empoloyees-tblwrapper_previous" @click="backPage"
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
</template>

<script lang="ts">
import handlePagination from '@/layouts/HandlePaginatin'
import { defineComponent, ref } from 'vue'
import { employeeTable } from '../TableArrayData'
import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'employeesTable',
  data() {
    return {
      employeeTable
    }
  },
  setup() {
    const checkboxes = ref(false)
    const { paginationLength } = storeToRefs(useStore())
    const handlePaginationValue = handlePagination(employeeTable, 5)
    return { ...handlePaginationValue, checkboxes, paginationLength }
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
