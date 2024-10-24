<template>
  <div class="col-xl-12">
    <div class="card dz-card" id="accordion-three">
      <div class="card-header flex-wrap d-flex justify-content-between">
        <div>
          <h4 class="card-title">Profile Datatable</h4>
          <p class="m-0 subtitle">Add <code>profile</code> class with <code>datatables</code></p>
        </div>
        <ul class="nav nav-tabs dzm-tabs" id="myTab-2" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab-2"
              data-bs-toggle="tab"
              data-bs-target="#withoutSpace"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab-2"
              data-bs-toggle="tab"
              data-bs-target="#withoutSpace-html"
              type="button"
              role="tab"
              aria-selected="false"
            >
              HTML
            </button>
          </li>
        </ul>
      </div>

      <!-- /tab-content -->
      <div class="tab-content" id="myTabContent-2">
        <div
          class="tab-pane fade show active"
          id="withoutSpace"
          role="tabpanel"
          aria-labelledby="home-tab-2"
        >
          <div class="card-body pt-0">
            <div class="table-responsive">
              <div id="example_wrapper">
                <div class="dataTables_length" id="example_length">
                  <label
                    >Show
                    <div class="dropdown bootstrap-select dropup" style="width: auto">
                      <button
                        type="button"
                        tabindex="-1"
                        class="btn dropdown-toggle btn-light"
                        data-bs-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-1"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="10"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">
                              {{ entryValue }}
                            </div>
                          </div>
                        </div>
                      </button>
                      <div
                        class="dropdown-menu"
                        style="max-height: 193.067px; overflow: hidden; min-height: 86px"
                      >
                        <div
                          class="inner show"
                          role="listbox"
                          id="bs-select-1"
                          tabindex="-1"
                          style="max-height: 179.067px; overflow-y: auto; min-height: 72px"
                          aria-activedescendant="bs-select-1-0"
                        >
                          <ul
                            class="dropdown-menu inner show"
                            role="presentation"
                            style="margin-top: 0px; margin-bottom: 0px"
                          >
                            <li
                              class="selected active"
                              v-for="({ num }, ind) in optionArray"
                              @click="setValueOption(ind)"
                            >
                              <a
                                role="option"
                                :class="`dropdown-item ${ind === selectOption ? 'active selected' : ''}`"
                                :id="`bs-select-1-${ind}`"
                                tabindex="0"
                                aria-setsize="4"
                                aria-posinset="1"
                                aria-selected="true"
                                ><span class="text">{{ num }}</span></a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    entries</label
                  >
                </div>
                <div id="example_filter" class="dataTables_filter">
                  <label class="mb-0 me-2">Search:</label>
                  <input
                    type="search"
                    class="table-data-base-search"
                    placeholder=""
                    @input="(e) => searchData((e.target as HTMLInputElement).value)"
                    aria-controls="example"
                  />
                </div>
              </div>
              <table id="example3" class="display table" style="min-width: 845px">
                <thead>
                  <tr>
                    <!-- <th @click="sortingArr"></th>
                    <th @click="sortingArr">Name</th>
                    <th @click="sortingArr">Department</th>
                    <th @click="sortingArr">Gender</th>
                    <th @click="sortingArr">Education</th>
                    <th @click="sortingArr">Mobile</th>
                    <th @click="sortingArr">Email</th>
                    <th @click="sortingArr">Joining Date</th>
                    <th @click="sortingArr">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="({ img, name, Department, Gender }, ind) in paginatedData" :key="ind">
                    <td>
                      <img class="rounded-circle" width="35" :src="img" alt="" />
                    </td>
                    <td>{{ name }}</td>
                    <td>{{ Department }}</td>
                    <td>{{ Gender }}</td>
                    <td>M.COM., P.H.D.</td>
                    <td>
                      <a href="javascript:void(0);"><strong>123 456 7890</strong></a>
                    </td>
                    <td>
                      <a href="javascript:void(0);"><strong>info@example.com</strong></a>
                    </td>
                    <td>2011/04/25</td>
                    <td>
                      <div class="d-flex">
                        <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a href="#" class="btn btn-danger shadow btn-xs sharp"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="withoutSpace-html"
          role="tabpanel"
          aria-labelledby="home-tab-2"
        >
          <div class="card-body pt-0 p-0 code-area">
            <pre class="mb-0"><code class="language-html">&lt;div class="table-responsive"&gt;
	&lt;table id="example" class="display table" style="min-width: 845px"&gt;
		&lt;thead&gt;
			&lt;tr&gt;
				&lt;th&gt;Name&lt;/th&gt;
				&lt;th&gt;Position&lt;/th&gt;
				&lt;th&gt;Office&lt;/th&gt;
				&lt;th&gt;Age&lt;/th&gt;
				&lt;th&gt;Start date&lt;/th&gt;
				&lt;th&gt;Salary&lt;/th&gt;
			&lt;/tr&gt;
		&lt;/thead&gt;
		&lt;tbody&gt;
			&lt;tr&gt;  v-for="(
      { img, name, Department, Gender }, ind
              ) in paginatedData"
              :key="ind"
				&lt;td&gt;Tiger Nixon&lt;/td&gt;
				&lt;td&gt;System Architect&lt;/td&gt;
				&lt;td&gt;Edinburgh&lt;/td&gt;
				&lt;td&gt;61&lt;/td&gt;
				&lt;td&gt;2011/04/25&lt;/td&gt;
				&lt;td&gt;$320,800&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/tbody&gt;
		&lt;tfoot&gt;
			&lt;tr&gt;
				&lt;th&gt;Name&lt;/th&gt;
				&lt;th&gt;Position&lt;/th&gt;
				&lt;th&gt;Office&lt;/th&gt;
				&lt;th&gt;Age&lt;/th&gt;
				&lt;th&gt;Start date&lt;/th&gt;
				&lt;th&gt;Salary&lt;/th&gt;
			&lt;/tr&gt;
		&lt;/tfoot&gt;
	&lt;/table&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </div>
      <!-- /tab-content -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { profileDataTable } from '@/elements/TableArrayData'
import handlePagination from '@/layouts/HandlePaginatin'
export default defineComponent({
  setup() {
    const checkboxes = ref(false)
    const selectOption = ref(0)
    const entryValue = ref(10)
    const handlePaginationValue = handlePagination(profileDataTable, 10)
    return {
      ...handlePaginationValue,
      checkboxes,
      selectOption,
      entryValue,
      optionArray: [{ num: 10 }, { num: 25 }, { num: 50 }, { num: 100 }]
    }
  },
  methods: {
    setValueOption(index: number) {
      this.selectOption = index
      this.entryValue = this.optionArray[index].num
      handlePagination(profileDataTable, this.entryValue)
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
#example_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#example_filter {
  display: flex;
  align-items: center;
}
.table-data-base-search {
  border: 0.0625rem solid #e2e2e2;
  padding: 0.3rem 0.5rem;
  color: #715d5d;
  border-radius: 0.3125rem;
}

@media screen and (max-width: 650px) {
  #example_wrapper {
    flex-direction: column;
    align-items: start;
  }
}
@media screen and (max-width: 370px) {
  #example_filter {
    flex-direction: column;
    align-items: start;
  }
}
</style>
