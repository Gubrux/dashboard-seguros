<template>
  <div class="card-body schedules-cal p-2">
    <VueDatePicker class="date-picker" v-model="date" inline auto-apply />
    <div class="events">
      <h6>events</h6>
      <div class="dz-scroll event-scroll" style="height: 200px">
        <div class="event-media">
          <div class="d-flex align-items-center">
            <div class="event-box">
              <h5 class="mb-0">20</h5>
              <span>Mon</span>
            </div>
            <div class="event-data ms-2">
              <h5 class="mb-0"><a href="javascript:void(0)">Development planning</a></h5>
              <span>w3it Technologies</span>
            </div>
          </div>
          <span class="text-secondary">12:05 PM</span>
        </div>
        <div class="event-media">
          <div class="d-flex align-items-center">
            <div class="event-box">
              <h5 class="mb-0">20</h5>
              <span>Mon</span>
            </div>
            <div class="event-data ms-2">
              <h5 class="mb-0"><a href="javascript:void(0)">Development planning</a></h5>
              <span>w3it Technologies</span>
            </div>
          </div>
          <span class="text-secondary">12:05 PM</span>
        </div>
        <div class="event-media">
          <div class="d-flex align-items-center">
            <div class="event-box">
              <h5 class="mb-0">20</h5>
              <span>Mon</span>
            </div>
            <div class="event-data ms-2">
              <h5 class="mb-0"><a href="javascript:void(0)">Development planning</a></h5>
              <span>w3it Technologies</span>
            </div>
          </div>
          <span class="text-secondary">12:05 PM</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'

export default defineComponent({
  name: 'calender_',
  components: { VueDatePicker },
  data() {
    return {
      date: null
    }
  },
  setup() {
    return {}
  }
})
</script>

<style>
[data-theme-version='dark'] .schedules-cal {
  --celendorbg: #242424;
  --toplabel: #dadada;
  --headerbg: #1e1e1e;
  --text: #686868;
  --hover: #1e1e1e;
}
[data-theme-version='light'] .schedules-cal {
  --celendorbg: #fff;
  --toplabel: #dadada;
  --headerbg: #f0f4f9;
  --text: #545556;
  --hover: rgba(13, 153, 255, 0.1);
}

.card-body .dp__instance_calendar {
  background-color: var(--celendorbg) !important;
}
.date-picker > div:nth-child(2) {
  width: 100%;
}
.date-picker .dp__calendar .dp__calendar_row {
  justify-content: space-between;
}
.date-picker .dp__menu_inner .dp__month_year_row {
  justify-content: space-between;
  margin-bottom: 5px;
}

.date-picker .dp__month_year_row .dp--arrow-btn-nav .dp__inner_nav {
  height: 32px;
  width: 32px;
  border-radius: 0.375rem;
  background: var(--rgba-primary-1);
  color: var(--primary);
  line-height: 32px;
}
.date-picker .dp__month_year_row .dp--arrow-btn-nav .dp__inner_nav .dp__icon {
  width: 16px;
}
.date-picker .dp__calendar .dp__calendar_header .dp__calendar_header_item {
  font-weight: 400;
  color: var(--text);
  background-color: var(--headerbg);
  border-radius: 0;
}
.date-picker .dp__calendar .dp__calendar_header_separator {
  background-color: transparent;
}
.date-picker .dp__calendar .dp__calendar .dp__calendar_item {
  flex-grow: 0;
  width: 39px;
  height: 39px;
  display: flex;
  color: var(--text);
  justify-content: center;
  align-content: center;
}
.date-picker .dp__calendar .dp__calendar .dp__calendar_item .dp__cell_inner {
  padding: 10px 30px;
}

.date-picker .dp__menu {
  border: 0;
}
.date-picker .dp__month_year_row .dp__month_year_wrap {
  width: unset;
  justify-self: space-beetwwn;
}

.date-picker .dp--tp-wrap {
  display: none;
}
.dp__date_hover:hover {
  background-color: var(--hover) !important;
  color: var(--text);
}
.dp__month_year_select:hover {
  background-color: transparent !important;
}
</style>
