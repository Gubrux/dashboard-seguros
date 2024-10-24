<template>
  <div class="page-titles">
    <ol class="breadcrumb">
      <li>
        <!-- <h5 class="bc-title">{{ mainTitle }}</h5> -->
        <h5 class="bc-title text-primary">Dashboard</h5>
      </li>
      <li class="breadcrumb-item">
        <h4 class="text-secondary">
          <!-- <span v-html="homeIcon"></span> -->
          <!-- Valores expresados en miles de Gs. -->
        </h4>
      </li>
      <!-- <li class="breadcrumb-item active">
        <a href="javascript:void(0)">{{ title }}</a> -->
      <!-- </li> -->
    </ol>
    <!-- <label class="switch">
            <input
                type="checkbox"
                v-model="isDarkMode"
                @change="toggleDarkMode"
            />
            <span class="slider round"></span>
        </label> -->
  </div>
</template>

<script lang="ts">
import { SVGImage } from "@/constent/Theme";
import router from "@/router";
import { defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  name: "pageTitle",
  data() {
    return SVGImage;
  },
  setup() {
    // const title = ref("Dashboard");
    const mainTitle = ref("Dashboard");
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      if (isDarkMode.value) {
        document.body.setAttribute("data-theme-version", "dark");
      } else {
        document.body.setAttribute("data-theme-version", "light");
      }
    };

    // watchEffect(() => {
    //   const pageTitle = router.currentRoute.value.fullPath.split("/");
    //   if (pageTitle[1] == "") {
    //     title.value = "Dashboard";
    //   } else {
    //     title.value =
    //       pageTitle[1].charAt(0).toUpperCase() + pageTitle[1].slice(1);
    //   }
    //   if (pageTitle[1] == "") {
    //     mainTitle.value = "Dashboard";
    //   } else if (router.currentRoute.value.query) {
    //     mainTitle.value = "Dashboard";
    //     title.value = "Dashboard";
    //   } else {
    //     let titleVal =
    //       pageTitle[1].charAt(0).toUpperCase() + pageTitle[1].slice(1);
    //     if (titleVal.indexOf("-")) {
    //       mainTitle.value = titleVal.split("-")[0];
    //     }
    //   }
    // });

    return { isDarkMode, toggleDarkMode };
  },
});
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: rgb(189, 184, 184);
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #28353f;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
