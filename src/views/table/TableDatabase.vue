<template>
  <div class="container-fluid">
    <div class="element-area">
      <div class="demo-view">
        <div class="container-fluid pt-0 ps-0 pe-lg-4 pe-0">
          <div class="row">
            <BasicDatatable />
          </div>
          <DataTable />
          <ProfileDatatable />
          <FeesCollection />
          <!-- Column ends -->
          <!-- Column starts -->
          <PatientTable />
          <!-- Column ends -->
        </div>
      </div>
      <div class="demo-right">
        <div class="demo-right-inner" id="right-sidebar">
          <h4 class="title">Datatabls</h4>
          <div class="dz-scroll demo-right-tabs" id="rightSidebarScroll">
            <ul class="navbar-nav nav" id="menu-bar">
              <li><a href="#accordion-one" class="scroll">Basic Datatable</a></li>
              <li><a href="#accordion-two" class="scroll">Datatable</a></li>
              <li><a href="#accordion-three" class="scroll">Profile Datatable</a></li>
              <li><a href="#accordion-four" class="scroll">Fees Collection</a></li>
              <li><a href="#accordion-five" class="scroll">Patient</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import BasicDatatable from '@/elements/tableDataContent/BasicDatatable.vue'
import DataTable from '@/elements/tableDataContent/DataTable.vue'
import ProfileDatatable from './ProfileDatatable.vue'
import FeesCollection from '@/elements/tableDataContent/FeesCollection.vue'
import PatientTable from './PatientTable.vue'

export default defineComponent({
  name: 'tableDatabase',
  components: {
    RouterLink,
    BasicDatatable,
    DataTable,
    ProfileDatatable,
    FeesCollection,
    PatientTable
  },

  setup() {
    return {}
  }
})
</script>
