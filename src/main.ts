import "bootstrap";
import "vue3-colorpicker/style.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import "sweetalert2/dist/sweetalert2.min.css";
import "@/assets/css/bootstrap-select.min.css";
import "vue-select/dist/vue-select.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "vue3-toastify/dist/index.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "@vuepic/vue-datepicker/dist/main.css";
import "@/assets/css/style.css";
import "@/utils/dataFormatter";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import vSelect from "vue-select";
import VueSweetalert2 from "vue-sweetalert2";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import CKEditor from "@ckeditor/ckeditor5-vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import dataFormatter from "@/utils/dataFormatter";

const app = createApp(App);

app.component("v-select", vSelect);
app.use(VueSweetalert2);
app.use(createPinia());
app.use(dataFormatter);
app.use(router);
app.mount("#app");

// main.ts

app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions);

app.use(CKEditor);
app.component("VueDatePicker", VueDatePicker);
// app.component('Popper', Popper)
