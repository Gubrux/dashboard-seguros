<template>
  <div class="col-xl-5 bst-seller">
    <div class="card">
      <div class="card-header border-0">
        <h4 class="heading mb-0">Best Selling Products</h4>
        <div class="d-flex align-items-center cs-settiong">
          <span>SORT BY:</span>
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
            <div
              class="dropdown-menu"
              style="max-height: 202px; overflow: hidden; min-height: 100px"
            >
              <div
                class="inner show"
                role="listbox"
                id="bs-select-3"
                tabindex="-1"
                style="max-height: 188px; overflow-y: auto; min-height: 0px"
                aria-activedescendant="bs-select-3-2"
              >
                <ul
                  class="dropdown-menu inner show"
                  role="presentation"
                  style="margin-top: 0px; margin-bottom: 0px"
                >
                  <li
                    :class="selectOptin == title ? 'active selected' : ''"
                    v-for="({ title }, ind) in selectBox"
                    :key="ind"
                    @click="selectOption(title)"
                  >
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
      </div>
      <div class="card-body p-0">
        <div
          class="table-responsive active-projects active-projects ItemsCheckboxSec selling-product shorting"
        >
          <table id="product-tbl" class="table mb-0">
            <thead>
              <tr>
                <th>
                  <div class="form-check custom-checkbox ms-0">
                    <input
                      type="checkbox"
                      class="form-check-input checkAllInput"
                      id="checkAll1"
                      required
                      @click="checkboxes = !checkboxes"
                    />
                    <label class="form-check-label" for="checkAll1"></label>
                  </div>
                </th>
                <!-- <th @click="sortingArr">Product Name</th>
                <th @click="sortingArr">Price</th>
                <th @click="sortingArr">Orders</th>
                <th @click="sortingArr">Stock</th>
                <th @click="sortingArr">Amount</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ img, name, stock, badge }, ind) in paginatedData" :key="ind">
                <td>
                  <div class="form-check custom-checkbox">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox220"
                      required
                      :checked="checkboxes"
                    />
                    <label class="form-check-label" for="customCheckBox220"></label>
                  </div>
                </td>
                <td>
                  <div class="products">
                    <img :src="img" class="avatar avatar-md" alt="" />
                    <div>
                      <h6>
                        <a href="javascript:void(0)">{{ name }}</a>
                      </h6>
                      <span>24 Apr 2021</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="text-primary">$85.20</span>
                </td>
                <td>
                  <span>750</span>
                </td>
                <td>
                  <span :class="`badge badge-${badge} light border-0`">{{ stock }}</span>
                </td>
                <td>
                  <span>$1200.75</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex align-items-center justify-content-between">
            <div class="dataTables_info">
              Showing {{ paginationLength - 6 == -1 ? 1 : paginationLength - 6 }} to
              {{ paginationLength }} of {{ bestSellingProduct.length }} entries
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
</template>

<script lang="ts">
import handlePagination from '@/layouts/HandlePaginatin'
import { defineComponent, ref } from 'vue'
import { bestSellingProduct } from '../TableArrayData'
import { useStore } from '@/stores/Store'

import { storeToRefs } from 'pinia'

export default defineComponent({
  data() {
    return {
      bestSellingProduct
    }
  },
  setup() {
    const selectOptin = ref('Month')

    const checkboxes = ref(false)
    const handlePaginationValue = handlePagination(bestSellingProduct, 7)
    const { paginationLength } = storeToRefs(useStore())

    return {
      ...handlePaginationValue,
      checkboxes,
      selectOptin,
      paginationLength,
      selectBox: [{ title: 'Today' }, { title: 'Week' }, { title: 'Month' }]
    }
  },
  methods: {
    selectOption(option: string) {
      this.selectOptin = option
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

#user-tbl_filter {
  color: #888888;
  border-radius: 1rem;
  margin-bottom: 0.35rem;
  padding-top: 1rem;
}
</style>
