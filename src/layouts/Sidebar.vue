<template>
  <div
    class="deznav"
    @mouseenter="iconHover = true"
    @mouseleave="iconHover = false"
  >
    <div class="deznav-scroll">
      <ul class="metismenu" id="menu">
        <!-- <li class="menu-title">YOUR COMPANY</li> -->
        <img src="../assets/icons/segu_logo.jpg" alt="seguridad-seguros-logo" />
        <template
          v-for="(
            { title, icons, className, subMenuItems, to }, ind
          ) in MenuItems"
          :key="ind"
        >
          <li
            v-if="className == 'sub-menu'"
            :class="addActive == title ? ' mm-active' : ''"
          >
            <RouterLink
              class="has-arrow"
              to="?"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapseExample${ind}`"
              aria-expanded="false"
            >
              <div class="menu-icon" v-html="icons"></div>
              <span class="nav-text">{{ title }}</span>
            </RouterLink>
            <ul
              :class="`collapse mm-show ${addActive == title ? 'show' : ''}`"
              :id="`collapseExample${ind}`"
            >
              <template
                v-for="(
                  { menu, subMenuDownItems, className, to }, index
                ) in subMenuItems"
                :key="ind"
              >
                <li v-if="className == 'sub-menu-down'">
                  <a
                    class="has-arrow collapsed"
                    href="javascript:void(0);"
                    aria-expanded="false"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapseExample${index}`"
                    >{{ menu }}</a
                  >
                  <ul
                    aria-expanded="false"
                    class="collapse"
                    :id="`collapseExample${index}`"
                  >
                    <li
                      v-for="({ child, to }, ind) in subMenuDownItems"
                      :key="ind"
                      :class="addActive == title ? ' mm-active' : ''"
                    >
                      <RouterLink :to="`${to}`">{{ child }}</RouterLink>
                    </li>
                  </ul>
                </li>
                <li v-else>
                  <RouterLink :to="`${to}`">{{ menu }}</RouterLink>
                </li>
              </template>
            </ul>
          </li>

          <li class="menu-title" v-else-if="className == 'menu-title'">
            OUR FEATURES
          </li>

          <li v-else :class="addActive == title ? ' mm-active' : ''">
            <RouterLink
              :to="`${to}`"
              :class="addActive == title ? ' mm-active' : ''"
              aria-expanded="false"
            >
              <div class="menu-icon" v-html="icons"></div>
              <span class="nav-text">{{ title }}</span>
            </RouterLink>
          </li>
        </template>
      </ul>
      <div class="help-desk">
        <!-- <a href="javascript:void(0)" class="btn btn-primary">Help Desk</a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import MenuItems from "@/layouts/Menu";
import router from "@/router";
import { useStore } from "@/stores/Store";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "sidebar_",

  setup() {
    const { iconHover } = storeToRefs(useStore());
    const addActive = ref("Dashboard");
    watchEffect(() => {
      MenuItems.map((el) => {
        if (router.currentRoute.value.fullPath == el.to) {
          addActive.value = String(el.title);
        }
        el.subMenuItems?.map((ell) => {
          if (router.currentRoute.value.fullPath == ell.to) {
            addActive.value = String(el.title);
          }
          ell.subMenuDownItems?.map((ele) => {
            if (router.currentRoute.value.fullPath == ele.to) {
              addActive.value = String(el.title);
            }
          });
        });
      });
    });
    return { MenuItems, addActive, iconHover };
  },
});
</script>

<style>
.mm-show {
  transition: all 0.3s linear;
}
</style>
