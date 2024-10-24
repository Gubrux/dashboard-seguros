<template>
  <div class="col-xl-6 active-p">
    <div class="card">
      <div class="card-body p-0">
        <div class="table-responsive active-projects shorting">
          <div id="user-tbl_wrapper" class="dataTables_wrapper">
            <div class="tbl-caption">
              <h4 class="heading mb-0">Active Projects</h4>
            </div>
            <div class="dt-buttons">
              <a :href="paginatedData" download>
                <button
                  class="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                  tabindex="0"
                  aria-controls="user-tbl"
                  type="button"
                  style="margin-top: 5px; margin-right: 1rem"
                >
                  <span><i class="fa-solid fa-file-excel"></i> Export Report</span>
                </button>
              </a>
            </div>

            <table id="projects-tbl" class="table ItemsCheckboxSec">
              <thead>
                <tr>
                  <th>
                    <div class="form-check custom-checkbox ms-0">
                      <input
                        type="checkbox"
                        class="form-check-input checkAllInput"
                        id="checkAll"
                        required
                        @click="checkboxes = !checkboxes"
                      />
                      <label class="form-check-label" for="checkAll"></label>
                    </div>
                  </th>
                  <!-- <th @click="sortingArr">Project Name</th>
                  <th @click="sortingArr">Project Lead</th>
                  <th @click="sortingArr">Progress</th>
                  <th @click="sortingArr">Assignee</th>
                  <th @click="sortingArr">Status</th>
                  <th @click="sortingArr">Due Date</th> -->
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(
                    { title, name, progress, img, status, avatar, badge, color }, ind
                  ) in paginatedData"
                  :key="ind"
                >
                  <td>
                    <div class="form-check custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="customCheckBox2"
                        required
                        :checked="checkboxes"
                      />
                      <label class="form-check-label" for="customCheckBox2"></label>
                    </div>
                  </td>
                  <td>{{ title }}</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <img :src="img" class="avatar rounded-circle" alt="" />
                      <p class="mb-0 ms-2">{{ name }}</p>
                    </div>
                  </td>
                  <td class="pe-0">
                    <div class="tbl-progress-box">
                      <div class="progress">
                        <div
                          :class="`progress-bar bg-${color}`"
                          :style="`width: ${progress}; height: 5px; border-radius: 4px`"
                          role="progressbar"
                        ></div>
                      </div>
                      <span :class="`text-${color}`">{{ progress }}</span>
                    </div>
                  </td>
                  <td class="pe-0">
                    <div class="avatar-list avatar-list-stacked">
                      <img
                        v-for="({ img }, ind) in avatar"
                        :src="img"
                        class="avatar rounded-circle"
                        alt=""
                        :key="ind"
                      />
                    </div>
                  </td>
                  <td class="pe-0">
                    <span :class="`badge ${badge} light border-0`">{{ status }}</span>
                  </td>
                  <td>
                    <span>08 Sep 2023</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="d-flex align-items-center justify-content-between">
            <div class="dataTables_info">
              Showing {{ paginationLength - 4 }} to {{ paginationLength }} of
              {{ activeProjectData.length }} entries
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
import { defineComponent, ref } from 'vue'
import IMAGE from '@/constent/Theme'
import handlePagination from '@/layouts/HandlePaginatin'
import { activeProjectData } from '../TableArrayData'
import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  data() {
    return {
      activeProjectData
    }
  },
  setup() {
    const checkboxes = ref(false)
    const { paginationLength } = storeToRefs(useStore())
    const handlePaginationValue = handlePagination(activeProjectData, 5)
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

#user-tbl_filter {
  color: #888888;
  border-radius: 1rem;
  margin-bottom: 0.35rem;
  padding-top: 1rem;
}
div.dt-buttons {
  position: relative;
  float: unset;
  margin-top: unset;
}
</style>
