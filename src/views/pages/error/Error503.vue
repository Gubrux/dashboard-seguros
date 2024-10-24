<template>
  <div class="authincation h-100">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-md-6">
          <div class="error-page">
            <div class="error-inner text-center">
              <div class="dz-error" data-text="503">503</div>
              <h4 class="error-head">
                <i class="fa fa-times-circle text-danger"></i> Service Unavailable
              </h4>
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
  name: 'error503_',
  components: { RouterLink },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
