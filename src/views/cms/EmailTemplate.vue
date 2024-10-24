<template>
  <CommonNavbar page="CMS" path="Email Template" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa"><i class="fa-solid fa-filter me-1"></i>Filter</div>
            <div class="tools">
              <a
                href="#emailCollape"
                class="expand SlideToolHeader"
                data-bs-toggle="collapse"
                data-bs-target="#emailCollape"
                aria-expanded="true"
                aria-controls="emailCollape"
                ><i class="fal fa-angle-down"></i
              ></a>
            </div>
          </div>
          <div class="cm-content-body form excerpt collape show" id="emailCollape">
            <div class="card-body">
              <div class="row">
                <div class="col-xl-3 col-sm-6">
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Title" />
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3 mb-sm-0">
                  <EmailCustomSelect
                    valueOne="Select Status"
                    valueTwo="Active"
                    valueThree="Inactive"
                  />
                </div>
                <div class="col-xl-3 col-sm-6 mb-3 mb-sm-0">
                  <input type="text" class="form-control" placeholder="Title" />
                </div>
                <div class="col-xl-3 col-sm-6">
                  <a href="javascript:void(0);" class="btn btn-primary">Filter</a>{{ ' ' }}
                  <a href="javascript:void(0);" class="btn btn-danger light">Remove Filter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <ul class="d-flex align-items-center">
            <li>
              <RouterLink to="/add-email" class="btn btn-primary">New Email Template</RouterLink>
            </li>
          </ul>
        </div>
        <CmsTable title="Email Template List" icon="fa-solid fa-envelope me-1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CmsTable from '@/elements/CmsTable.vue'
import EmailCustomSelect from '@/components/EmailCustomSelect.vue'
import { defineComponent } from 'vue'
import CommonNavbar from '@/layouts/CommonNavbar.vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'email_template',
  setup() {
    return {}
  },
  components: { CmsTable, EmailCustomSelect, CommonNavbar }
})
</script>

<style scoped></style>
