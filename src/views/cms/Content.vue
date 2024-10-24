<template>
  <CommonNavbar page="CMS" path="Content" />
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-xl-12">
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa"><i class="fa-sharp fa-solid fa-filter me-2"></i>Filter</div>
            <div class="tools">
              <a
                href="javascript:void(0);"
                class="expand SlideToolHeader"
                data-bs-toggle="collapse"
                data-bs-target="#contentCollapseExample"
                aria-expanded="false"
                aria-controls="contentCollapseExample"
                ><i class="fal fa-angle-down"></i
              ></a>
            </div>
          </div>
          <div id="contentCollapseExample" :class="`cm-content-body form excerpt collapse show`">
            <div class="card-body">
              <div class="row">
                <div class="col-xl-3 col-sm-6">
                  <input
                    type="text"
                    class="form-control mb-xl-0 mb-3"
                    id="exampleFormControlInput1"
                    placeholder="Title"
                  />
                </div>
                <div class="col-xl-3 col-sm-6 mb-3 mb-xl-0">
                  <CustomSelectOption2
                    valueOne="Select Status"
                    valueTwo="Published"
                    valueThree="Draft"
                    valueFour="Trash"
                    valueFive="Private"
                    valueSix="Pending"
                  />
                </div>
                <div class="col-xl-3 col-sm-6">
                  <datepicker
                    class="form-control mb-xl-0 mb-3"
                    :week-starts-on="1"
                    startingView="day"
                    dayPickerHeadingFormat="dd-mm-yyyy"
                    id="datepicker"
                    v-model="picked"
                  />
                </div>
                <div class="col-xl-3 col-sm-6">
                  <button class="btn btn-info" title="Click here to Search" type="button">
                    <i class="fa fa-search me-1"></i>Filter
                  </button>
                  {{ ' ' }}

                  <button
                    class="btn btn-danger light"
                    title="Click here to remove filter"
                    type="button"
                  >
                    Remove Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <RouterLink to="/content-add" class="btn btn-primary">Add Content</RouterLink>
        </div>
        <CmsTable title="Contact List" icon="fa-solid fa-file-lines me-1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CommonNavbar from '@/layouts/CommonNavbar.vue'
import Datepicker from 'vue3-datepicker'
import CustomSelectOption2 from '@/components/CustomSelectOption2.vue'
import CmsTable from '@/elements/CmsTable.vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'content_',
  components: { CommonNavbar, Datepicker, CustomSelectOption2, CmsTable, RouterLink },
  data() {
    return {
      picked: new Date()
    }
  },
  setup() {
    const dropDown = ref(false)
    return { dropDown }
  }
})
</script>
