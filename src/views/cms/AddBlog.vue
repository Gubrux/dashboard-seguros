<template>
  <CommonNavbar page="CMS" path="Add Blog" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div>
          <RouterLink to="/add-email" class="btn btn-primary mb-3 me-1">Blog List</RouterLink>
          <RouterLink to="/blog-category" class="btn btn-primary mb-3 me-1"
            >Blog Category</RouterLink
          >
          <RouterLink to="/blog-category" class="btn btn-primary mb-3 me-1"
            >Add Blog Category</RouterLink
          >
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
import { RouterLink } from 'vue-router'
import AddContentData from '../../components/cmsData/AddContentData.vue'
import CommonNavbar from '../../layouts/CommonNavbar.vue'

export default defineComponent({
  name: 'addBlog',
  components: {
    AddContentData,
    CommonNavbar
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
