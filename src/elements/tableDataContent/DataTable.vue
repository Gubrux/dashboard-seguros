<template>
  <div class="col-xl-12">
    <div class="card dz-card" id="accordion-two">
      <div class="card-header flex-wrap d-flex justify-content-between">
        <div>
          <h4 class="card-title">Datatable</h4>
          <p class="m-0 subtitle">
            datatables with border. Add class <code>datatables-bordered</code> with the class
            <code> datatables</code>
          </p>
        </div>
        <ul class="nav nav-tabs dzm-tabs" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab-1"
              data-bs-toggle="tab"
              data-bs-target="#bordered"
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
              id="profile-tab-1"
              data-bs-toggle="tab"
              data-bs-target="#bordered-html"
              type="button"
              role="tab"
              aria-selected="false"
            >
              HTML
            </button>
          </li>
        </ul>
      </div>

      <!-- tab-content -->
      <div class="tab-content" id="myTabContent-1">
        <div
          class="tab-pane fade show active"
          id="bordered"
          role="tabpanel"
          aria-labelledby="home-tab-1"
        >
          <div class="card-body">
            <div class="table-responsive">
              <div id="example2_wrapper" class="dataTables_wrapper">
                <div id="example_filter" class="dataTables_filter">
                  <label class="mb-0 me-2">Search:</label>
                  <input
                    type="search"
                    class="table-data-base-search"
                    placeholder=""
                    @input="(e) => searchData((e.target as HTMLInputElement).value)"
                    aria-controls="table_example"
                  />
                </div>
                <table id="table_example" class="display table" style="min-width: 845px">
                  <thead>
                    <tr>
                      <!-- <th @click="sortingArr">Name</th>
                      <th @click="sortingArr">Position</th>
                      <th @click="sortingArr">Office</th>
                      <th @click="sortingArr">Age</th>
                      <th @click="sortingArr">Start date</th>
                      <th @click="sortingArr">Salary</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(
                        { name, Position, Office, Age, Start_date, Salary }, ind
                      ) in paginatedData"
                      :key="ind"
                    >
                      <td>{{ name }}</td>
                      <td>{{ Position }}</td>
                      <td>{{ Office }}</td>
                      <td>{{ Age }}</td>
                      <td>{{ Start_date }}</td>
                      <td>{{ Salary }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="bordered-html" role="tabpanel" aria-labelledby="home-tab-1">
          <div class="card-body pt-0 p-0 code-area">
            <pre class="mb-0"><code class="language-html">
  &lt;div class="table-responsive"&gt;
	&lt;table id="table_example" class="display table" style="min-width: 845px"&gt;
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
      { name, Position, Office, Age, Start_date, Salary }, ind
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { tableDatabase } from '@/elements/TableArrayData'
import { SVGImage } from '@/constent/Theme'
import { RouterLink } from 'vue-router'
import handlePagination from '@/layouts/HandlePaginatin'

export default defineComponent({
  components: { RouterLink },
  data() {
    return SVGImage
  },
  setup() {
    const checkboxes = ref(false)
    const selectOption = ref(0)
    const entryValue = ref(10)
    const handlePaginationValue = handlePagination(tableDatabase, 10)
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
      handlePagination(tableDatabase, this.entryValue)
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
