<template>
  <div class="page-titles">
    <ol class="breadcrumb">
      <li><h5 class="bc-title">Dashboard</h5></li>
      <li class="breadcrumb-item">
        <a href="javascript:void(0)">
          <span v-html="homeIcon"></span>
          Customers
        </a>
      </li>
      <li class="breadcrumb-item active">
        <a href="javascript:void(0)">Customers</a>
      </li>
    </ol>
    <a
      class="text-primary fs-13"
      data-bs-toggle="offcanvas"
      href="#offcanvasExample1"
      role="button"
      aria-controls="offcanvasExample1"
      >+ Add Task</a
    >
  </div>
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-xl-12 bst-seller">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="heading mb-0">Customer</h4>
          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-primary btn-sm me-2">
              <i class="fa-solid fa-filter me-2"></i>Filter
            </button>

            <a
              class="btn btn-primary btn-sm ms-2"
              data-bs-toggle="offcanvas"
              href="#addCustomers"
              role="button"
              aria-controls="addCustomers"
              >+ Add Customer</a
            >
          </div>
        </div>
        <div class="card h-auto">
          <div class="card-body p-0">
            <div class="table-responsive active-projects style-1 dt-filter exports">
              <div id="user-tbl_wrapper" class="dataTables_wrapper">
                <div class="dt-buttons">
                  <button
                    class="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                    tabindex="0"
                    aria-controls="user-tbl"
                    type="button"
                    style="margin-top: 1rem; margin-right: 1rem"
                  >
                    <span><i class="fa-solid fa-file-excel"></i> Export Report</span>
                  </button>
                </div>
                <div id="user-tbl_filter" class="dataTables_filter">
                  <label>
                    <i class="fa-solid fa-magnifying-glass"></i
                    ><input
                      type="search"
                      class=""
                      placeholder="Search..."
                      aria-controls="user-tbl"
                      @input="(e) => searchData((e.target as HTMLInputElement).value)"
                  /></label>
                </div>
                <table id="customer-tbl" class="table shorting">
                  <thead>
                    <tr>
                      <th class="">
                        <div class="form-check custom-checkbox ms-0">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            @click="checkboxes = !checkboxes"
                            id="checkAll"
                            required
                          />
                          <label class="form-check-label" for="checkAll"></label>
                        </div>
                      </th>
                      <!-- <th @click="sortingArr">Customer ID</th>
                      <th @click="sortingArr">Customer Name</th>
                      <th @click="sortingArr">Email Address</th>
                      <th @click="sortingArr">Contact Number</th>
                      <th @click="sortingArr">Gender</th>
                      <th @click="sortingArr">Location</th>
                      <th @click="sortingArr">Status</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(
                        {
                          name,
                          country,
                          designation,
                          email,
                          gender,
                          id,
                          phone,
                          badge,
                          status,
                          img
                        },
                        ind
                      ) in paginatedData"
                      :key="ind"
                    >
                      <td>
                        <div class="form-check custom-checkbox">
                          <input
                            :checked="checkboxes"
                            type="checkbox"
                            class="form-check-input"
                            id="customCheckBox022"
                          />
                          <label class="form-check-label" for="customCheckBox022"></label>
                        </div>
                      </td>
                      <td>
                        <span>{{ id }}</span>
                      </td>
                      <td>
                        <div class="products">
                          <img :src="img" class="avatar avatar-md" alt="" />
                          <div>
                            <h6>
                              <RouterLink to="/app-profile-2">{{ name }}</RouterLink>
                            </h6>
                            <span>{{ designation }}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="javascript:void(0)" class="text-primary">{{ email }}</a>
                      </td>
                      <td>
                        <span>{{ phone }}</span>
                      </td>
                      <td>
                        <span>{{ gender }}</span>
                      </td>
                      <td>
                        <span>{{ country }}</span>
                      </td>
                      <td>
                        <span :class="`badge badge-${badge} light border-0`">{{ status }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="dataTables_info">
                    Showing {{ paginationLength - 8 }} to {{ paginationLength }} of
                    {{ Customer.length }} entries
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
  </div>
  <AddCustomers />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Customer } from '@/elements/TableArrayData'
import handlePagination from '@/layouts/HandlePaginatin'
import { SVGImage } from '@/constent/Theme'
import { RouterLink } from 'vue-router'
import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'
import AddCustomers from '@/elements/AddCustomers.vue'

export default defineComponent({
  name: 'customer_',
  components: { RouterLink, AddCustomers },
  data() {
    return SVGImage
  },
  setup() {
    const checkboxes = ref(false)
    const { paginationLength } = storeToRefs(useStore())
    const handlePaginationValue = handlePagination(Customer, 9)
    return { ...handlePaginationValue, checkboxes, Customer, paginationLength }
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
