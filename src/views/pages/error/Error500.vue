<template>
  <div class="authincation h-100">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-md-6">
          <div class="error-page">
            <div class="error-inner text-center">
              <div class="dz-error" data-text="500">500</div>
              <h4 class="text-nowrap error-head">
                <i class="fa fa-times-circle text-danger"></i> Internal Server Error
              </h4>
              <p class="error-head">You do not have permission to view this resource</p>
              <div>
                <RouterLink to="/" class="btn btn-secondary">BACK TO HOMEPAGE</RouterLink>
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
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'error500_',
  components: { RouterLink },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
