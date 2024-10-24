<template>
  <div
    class="dropdown bootstrap-select form-control custom-image-select ai-select image-select dropup"
  >
    <button
      type="button"
      tabindex="-1"
      class="btn dropdown-toggle btn-light"
      data-bs-toggle="dropdown"
      role="combobox"
      aria-owns="bs-select-11"
      aria-haspopup="listbox"
      aria-expanded="false"
      title="England"
    >
      <div class="filter-option">
        <div class="filter-option-inner">
          <div class="filter-option-inner-inner">
            <img :src="optionData[index].img" /> {{ optionData[index].title }}
          </div>
        </div>
      </div>
    </button>
    <div class="dropdown-menu" style="max-height: 157.6px; overflow: hidden; min-height: 0px">
      <div
        class="inner show"
        role="listbox"
        id="bs-select-11"
        tabindex="-1"
        style="max-height: 143.6px; overflow-y: auto; min-height: 0px"
        aria-activedescendant="bs-select-11-0"
      >
        <ul
          class="dropdown-menu inner show"
          role="presentation"
          style="margin-top: 0px; margin-bottom: 0px"
        >
          <li
            v-for="({ img, title }, ind) in optionData"
            :key="ind"
            @click="changeValue(ind)"
            :class="index == ind ? 'select active' : ''"
          >
            <a
              role="option"
              :class="`dropdown-item ${index == ind ? ' active' : ''}`"
              id="bs-select-11-2"
              tabindex="0"
              ><span class="text"><img :src="img" />{{ title }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IMAGE from '@/constent/Theme'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'cuntrySelectOptin',
  setup() {
    const index = ref(0)
    return {
      index,
      optionData: [
        { title: 'England', img: IMAGE.england },
        { title: 'India', img: IMAGE.india },
        { title: 'UAE', img: IMAGE.emirates }
      ]
    }
  },
  methods: {
    changeValue(ind: number) {
      this.index = ind
    }
  }
})
</script>

<style scoped></style>
