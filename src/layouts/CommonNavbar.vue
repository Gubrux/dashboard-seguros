<template>
  <div class="page-titles">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="javascript:void(0)">{{ page }}</a>
      </li>
      <li class="breadcrumb-item active">
        <a href="javascript:void(0)">{{ path }}</a>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'commonNavbar',
  props: {
    page: String as () => string,
    path: String as () => string
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
