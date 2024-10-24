<template>
  <CommonNavbar page="CMS" path="Add Content" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div>
          <RouterLink to="/content" class="btn btn-primary mb-3 me-1">Content List</RouterLink>
          <button
            type="button"
            class="btn btn-primary mb-3 open"
            data-bs-toggle="collapse"
            data-bs-target="#CheckBoxes"
            aria-controls="CheckBoxes"
            aria-expanded="false"
          >
            Screen Option
          </button>
        </div>
        <AddContentData />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddContentData from '@/components/cmsData/AddContentData.vue'
import { RouterLink } from 'vue-router'
import CommonNavbar from '@/layouts/CommonNavbar.vue'

export default defineComponent({
  name: 'addContent',
  components: { AddContentData, RouterLink, CommonNavbar },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
