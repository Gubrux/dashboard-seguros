<template>
  <CommonNavbar page="App" path="User" />
  <div class="container-fluid vh-90">
    <div class="row">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="heading mb-0">Users</h4>
        <div class="d-flex align-items-center">
          <ul class="nav nav-pills mix-chart-tab user-m-tabe" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                data-series="colm"
                id="pills-colm-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-colm"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24  24"
                  version="1.1"
                  class="svg-main-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z"
                      fill="#000000"
                    />
                    <path
                      d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                data-series="list"
                id="pills-week-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-list"
                type="button"
                role="tab"
                aria-selected="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  class="svg-main-icon"
                >
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <rect fill="#000000" opacity="0.3" x="4" y="4" width="4" height="4" rx="1" />
                    <path
                      d="M5,10 L7,10 C7.55228475,10 8,10.4477153 8,11 L8,13 C8,13.5522847 7.55228475,14 7,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 L14,7 C14,7.55228475 13.5522847,8 13,8 L11,8 C10.4477153,8 10,7.55228475 10,7 L10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,10 L13,10 C13.5522847,10 14,10.4477153 14,11 L14,13 C14,13.5522847 13.5522847,14 13,14 L11,14 C10.4477153,14 10,13.5522847 10,13 L10,11 C10,10.4477153 10.4477153,10 11,10 Z M17,4 L19,4 C19.5522847,4 20,4.44771525 20,5 L20,7 C20,7.55228475 19.5522847,8 19,8 L17,8 C16.4477153,8 16,7.55228475 16,7 L16,5 C16,4.44771525 16.4477153,4 17,4 Z M17,10 L19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 L17,14 C16.4477153,14 16,13.5522847 16,13 L16,11 C16,10.4477153 16.4477153,10 17,10 Z M5,16 L7,16 C7.55228475,16 8,16.4477153 8,17 L8,19 C8,19.5522847 7.55228475,20 7,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,17 C4,16.4477153 4.44771525,16 5,16 Z M11,16 L13,16 C13.5522847,16 14,16.4477153 14,17 L14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 L10,17 C10,16.4477153 10.4477153,16 11,16 Z M17,16 L19,16 C19.5522847,16 20,16.4477153 20,17 L20,19 C20,19.5522847 19.5522847,20 19,20 L17,20 C16.4477153,20 16,19.5522847 16,19 L16,17 C16,16.4477153 16.4477153,16 17,16 Z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </button>
            </li>
          </ul>
          <RouterLink to="/edit-profile" class="btn btn-primary btn-sm ms-2">+ Add User</RouterLink>
        </div>
      </div>
      <div class="col-xl-12 active-p">
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-list" role="tabpanel">
            <div class="row">
              <div
                class="col-xl-3 col-lg-4 col-sm-6"
                v-for="({ date, img, name, position, userDisactive }, ind) in userCards"
                :key="ind"
              >
                <div class="card">
                  <div class="card-body">
                    <div class="card-use-box">
                      <div class="crd-bx-img">
                        <img :src="img" class="rounded-circle" alt="" />
                        <div :class="`active ${userDisactive}`"></div>
                      </div>
                      <div class="card__text">
                        <h4 class="mb-0">{{ name }}</h4>
                        <p>demo11@gmail.com</p>
                      </div>
                      <ul class="card__info">
                        <li>
                          <span class="card__info__stats">175</span>
                          <span>posts</span>
                        </li>
                        <li>
                          <span class="card__info__stats">50</span>
                          <span>followers</span>
                        </li>
                        <li>
                          <span class="card__info__stats">30</span>
                          <span>following</span>
                        </li>
                      </ul>
                      <ul class="post-pos">
                        <li>
                          <span class="card__info__stats">Position: </span>
                          <span>{{ position }}</span>
                        </li>
                        <li>
                          <span class="card__info__stats">Joining Date: </span>
                          <span>{{ date }}</span>
                        </li>
                      </ul>
                      <div>
                        <RouterLink to="/chat" class="btn btn-primary btn-sm me-2"
                          >Message</RouterLink
                        >
                        <a href="javascript:void(0)" class="btn btn-secondary btn-sm ms-2"
                          >Following</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-colm"
            role="tabpanel"
            aria-labelledby="pills-colm-tab"
          >
            <div class="card">
              <div class="card-body px-0">
                <div class="table-responsive active-projects user-tbl dt-filter">
                  <div id="user-tbl_wrapper" class="dataTables_wrapper no-footer">
                    <div class="dt-buttons">
                      <button
                        class="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                        tabindex="0"
                        aria-controls="user-tbl"
                        type="button"
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
                    <table id="user-tbl" class="table">
                      <thead>
                        <tr>
                          <th>
                            <div class="form-check custom-checkbox ms-0">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="checkAll"
                                @click="checkboxes = !checkboxes"
                              />
                              <label class="form-check-label" for="checkAll"></label>
                            </div>
                          </th>
                          <!-- <th @click="sortingArr">User</th>
                          <th @click="sortingArr">Email</th>
                          <th @click="sortingArr">Position</th>
                          <th @click="sortingArr">Date Of Joining</th>
                          <th @click="sortingArr">Last Status</th>
                          <th @click="sortingArr">Action</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, ind) in paginatedData" :key="ind">
                          <td>
                            <div class="form-check custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="customCheckBox222"
                                :checked="checkboxes"
                              />
                              <label class="form-check-label" for="customCheckBox222"></label>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <img :src="item.img" class="avatar rounded-circle" alt="" />
                              <p class="mb-0 ms-2">{{ item.name }}</p>
                            </div>
                          </td>
                          <td>demo@gmail.com</td>
                          <td>Software Engineer</td>
                          <td>12 Jan 2023</td>
                          <td>Monday</td>
                          <td>
                            <div class="dropdown c-pointer">
                              <div
                                class="btn-link"
                                data-bs-toggle="dropdown"
                                v-html="SVGImage.dotIcon"
                              ></div>
                              <div class="dropdown-menu dropdown-menu-right" style="">
                                <a class="dropdown-item" href="javascript:void(0);">Edit</a>
                                <a class="dropdown-item" href="javascript:void(0);">Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="dataTables_info">Showing 11 to 12 of {{ '' }} entries</div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import IMAGE from '../../../constent/Theme'
import { SVGImage } from '../../../constent/Theme'
import { userTabble } from '@/elements/TableArrayData'
import handlePagination from '@/layouts/HandlePaginatin'
import CommonNavbar from '@/layouts/CommonNavbar.vue'

export default defineComponent({
  name: 'user_',
  components: { CommonNavbar, RouterLink },
  data() {
    return { SVGImage }
  },

  setup() {
    const userCards = ref([
      {
        img: IMAGE.friendsF1,
        name: 'Sophia Ava',
        position: 'Software Engineer',
        date: '15 Feb 2024'
      },
      {
        img: IMAGE.user1,
        name: 'Alexandra Joi',
        position: 'Web Doveloper',
        date: '12 Jan 2024',
        userDisactive: 'deactive'
      },
      { img: IMAGE.friendsF2, name: 'Amelia Mia', position: 'App Doveloper', date: '17 Mar 2024' },
      {
        img: IMAGE.friendsF3,
        name: 'Olivia Emma',
        position: 'App Doveloper',
        date: '17 Mar 2024',
        userDisactive: 'deactive'
      },
      {
        img: IMAGE.friendsF4,
        name: 'Ava Sophia',
        position: 'Mobile Doveloper',
        date: '17 Mar 2024'
      },
      {
        img: IMAGE.friendsF1,
        name: 'Sophia Ava',
        position: 'Software Engineer',
        date: '15 Feb 2024',
        userDisactive: 'deactive'
      },
      {
        img: IMAGE.user1,
        name: 'Alexandra Joi',
        position: 'Web Doveloper',
        date: '12 Jan 2024'
      },
      {
        img: IMAGE.friendsF2,
        name: 'Amelia Mia',
        position: 'App Doveloper',
        date: '17 Mar 2024',
        userDisactive: 'deactive'
      },
      { img: IMAGE.friendsF3, name: 'Olivia Emma', position: 'App Doveloper', date: '17 Mar 2024' },
      {
        img: IMAGE.friendsF4,
        name: 'Ava Sophia',
        position: 'Mobile Doveloper',
        date: '17 Mar 2024',
        userDisactive: 'deactive'
      },
      {
        img: IMAGE.friendsF1,
        name: 'Sophia Ava',
        position: 'Software Engineer',
        date: '15 Feb 2024'
      },
      {
        img: IMAGE.user1,
        name: 'Alexandra Joi',
        position: 'Web Doveloper',
        date: '12 Jan 2024',
        userDisactive: 'deactive'
      }
    ])

    const checkboxes = ref(false)
    const handlePaginationValue = handlePagination(userTabble, 9)

    return { userCards, ...handlePaginationValue, checkboxes }
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

#tbl_filter {
  color: #888888;
  border-radius: 1rem;
  padding: 0.125rem 0;
  margin-bottom: 0.35rem;
}
input {
  border: 0.0625rem solid #e2e2e2;
  padding: 0.3rem 0.5rem;
  color: #715d5d;
  border-radius: 0.3125rem;
}
div.dt-buttons {
  position: relative;
  float: unset;
}
</style>
