<template>
  <CommonNavbar page="AIKit" path="Fine-tune Models" />

  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div class="alert alert-dismissible ai-header-alert fade show mb-5" role="alert">
          This is RouterLink demo of AIKit plugin made for you to test the experience of using the
          plugin. Text & images generated in this demo are dummy. In real life, AIKit will call
          OpenAI API and generate relevant text and images based on your prompts.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_58_5949)">
                <path
                  d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
                  stroke="#FF5B5B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 7.5L7.5 12.5"
                  stroke="#FF5B5B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 7.5L12.5 12.5"
                  stroke="#FF5B5B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_58_5949">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <ul class="nav nav-tabs style-1 mb-4" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <RouterLink to="/auto-write" class="nav-link border-s-1">Auto Writer</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/scheduled" class="nav-link">Scheduler</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/repurpose" class="nav-link">Repurpose</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/rss" class="nav-link">RSS</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/chatbot" class="nav-link">Chatbot</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/fine-tune-models" class="nav-link active">Fine-tune Models</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/prompt" class="nav-link">AI Menu Prompts</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/setting" class="nav-link">Settings</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/import" class="nav-link border-s-2">Export/Import Settings</RouterLink>
          </li>
        </ul>
        <div class="card h-auto">
          <div class="card-body ai-tabs-1 py-2">
            <ul class="nav nav-tabs align-items-end" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="create-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#create-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="create-tab-pane"
                  aria-selected="true"
                >
                  Create Fine-tune Job
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="jobs-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#jobs-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="jobs-tab-pane"
                  aria-selected="false"
                >
                  Jobs<span class="badge badge-circle badge-light light ms-2">5</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade"
            id="create-tab-pane"
            role="tabpanel"
            aria-labelledby="create-tab"
            tabindex="0"
          >
            <AiKitData />
          </div>
          <div
            class="tab-pane fade show active"
            id="jobs-tab-pane"
            role="tabpanel"
            aria-labelledby="jobs-tab"
            tabindex="0"
          >
            <div class="card">
              <div class="card-body p-0">
                <div class="table-responsive active-projects style-1">
                  <table id="empoloyees-tblwrapper" class="table mb-0">
                    <thead>
                      <tr>
                        <th>Model Name Suffix</th>
                        <th>Model Name</th>
                        <th>Base Model</th>
                        <th>Date created</th>
                        <!-- <th @click="sortingArr">Status</th> -->
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="({ status, badge }, ind) in paginatedData" :key="ind">
                        <td class="text-black">Write RouterLink rat story</td>
                        <td>lion</td>

                        <td>hourly</td>
                        <td>4:50 am July 11, 2023</td>
                        <td>
                          <span :class="`badge badge-${badge}`">{{ status }}</span>
                        </td>
                        <td>
                          <RouterLink to="?" class="btn btn-primary light btn-sharp">
                            <svg
                              width="15"
                              height="16"
                              viewBox="0 0 15 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                                stroke="var(--primary)"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
                                stroke="var(--primary)"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </RouterLink>
                          {{ '   ' }}
                          <RouterLink to="?" class="btn btn-danger light btn-sharp">
                            <svg
                              width="15"
                              height="16"
                              viewBox="0 0 15 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.875 4.25H3.125H13.125"
                                stroke="#FF5B5B"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                                stroke="#FF5B5B"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M6.25 7.375V11.125"
                                stroke="#FF5B5B"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.75 7.375V11.125"
                                stroke="#FF5B5B"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </RouterLink>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="dataTables_info">
                      Showing {{ paginationLength - 9 }} to {{ paginationLength }} of
                      {{ fineTuneModels.length }} entries
                    </div>
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="empoloyees-tblwrapper_paginate"
                    >
                      <RouterLink
                        class="paginate_button previous"
                        id="empoloyees-tblwrapper_previous"
                        to="?"
                        @click="backPage"
                        ><i class="fa-solid fa-angle-left"></i></RouterLink
                      ><span>
                        <RouterLink
                          class="paginate_button"
                          v-for="item in Math.ceil(data.length / perPage)"
                          :key="item"
                          to="?"
                          :style="`background-color:${addActive == item ? 'var(--primary);' : ''};color:${addActive == item ? '#fff !important' : ''}`"
                          @click="() => goToPage(item)"
                          >{{ item }}</RouterLink
                        >
                      </span>
                      <RouterLink
                        class="paginate_button next"
                        @click="nextPage"
                        to="?"
                        aria-controls="empoloyees-tblwrapper"
                        data-dt-idx="3"
                        tabindex="0"
                        id="empoloyees-tblwrapper_next"
                        ><i class="fa-solid fa-angle-right"></i
                      ></RouterLink>
                    </div>
                  </div>
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
import AiKitData from '@/components/AiKitData.vue'
import { fineTuneModels } from '@/elements/TableArrayData'
import handlePagination from '@/layouts/HandlePaginatin'
import CommonNavbar from '@/layouts/CommonNavbar.vue'
import { RouterLink } from 'vue-router'
import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'fineTuneModales',
  components: { AiKitData, CommonNavbar, RouterLink },
  data() {
    return {
      fineTuneModels
    }
  },
  setup() {
    const { paginationLength } = storeToRefs(useStore())
    const handlePaginationValue = handlePagination(fineTuneModels, 10)
    return { ...handlePaginationValue, paginationLength }
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
