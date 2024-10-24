<template>
  <div class="container-fluid">
    <div class="row">
      <Counter />
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h5 class="mb-0">Tasks Summary</h5>
        <div class="d-flex align-items-center">
          <div class="icon-box icon-box-sm bg-secondary me-2">
            <RouterLink to="/task-summary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.50032 3H2.66699V8.83333H8.50032V3Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.6668 3H11.8335V8.83333H17.6668V3Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.6668 12.1667H11.8335V18H17.6668V12.1667Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.50032 12.1667H2.66699V18H8.50032V12.1667Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </RouterLink>
          </div>
          <RouterLink to="?" class="btn btn-primary btn-sm ms-2">+ Add Task</RouterLink>
        </div>
      </div>
      <div
        class="col-xl-3 col-sm-6"
        v-for="({ img, bg, selectValue }, ind) in optionArray"
        :key="ind"
      >
        <div class="card box-hover">
          <div class="card-header">
            <h5 class="mb-0"># 1 . Advertising Platform AD.</h5>
          </div>
          <div class="card-body">
            <div class="products style-1">
              <img :src="img" class="avatar avatar-lg rounded-circle" alt="" />
              <div>
                <h6>Cedric Kelly</h6>
                <span>06 Feb 2023</span>
              </div>
            </div>
            <p class="my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text.
            </p>
            <div>
              <p class="text-secondary mb-1 font-w500">Team</p>
              <div class="avatar-list avatar-list-stacked">
                <img
                  src="../assets/images/contacts/pic666.jpg"
                  class="avatar rounded-circle"
                  alt=""
                />{{ ' ' }}
                <img
                  src="../assets/images/contacts/pic555.jpg"
                  class="avatar rounded-circle"
                  alt=""
                />{{ ' ' }}
                <img
                  src="../assets/images/contacts/pic1.jpg"
                  class="avatar rounded-circle"
                  alt=""
                />{{ ' ' }}
                <img
                  src="../assets/images/contacts/pic555.jpg"
                  class="avatar rounded-circle"
                  alt=""
                />{{ ' ' }}
                <img
                  src="../assets/images/contacts/pic666.jpg"
                  class="avatar rounded-circle"
                  alt=""
                />
              </div>
            </div>
            <div class="progress mt-4">
              <div
                :class="`progress-bar bg-${bg}`"
                style="width: 60%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between flex-wrap">
            <div class="due-progress">
              <p class="mb-0 text-secondary">Due <span class="text-purple">: 2023-06-02</span></p>
            </div>
            <CustomeSelectOptinProject
              :valueOne="selectValue"
              valueTwo="Pending"
              valueThree="Testing"
              valueFour="Complete"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IMAGE from '@/constent/Theme'
import Counter from '@/elements/projectContent/Counter.vue'
import CustomeSelectOptinProject from '@/elements/projectContent/CustomeSelectOptinProject.vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'project_',
  components: { Counter, CustomeSelectOptinProject, RouterLink },
  setup() {
    return {
      optionArray: [
        { img: IMAGE.contactPic2, bg: 'purple', selectValue: 'Testing' },
        { img: IMAGE.contactPic2, bg: 'danger', selectValue: 'Pending' },
        { img: IMAGE.contactPic1, bg: 'purple', selectValue: 'In Progress' },
        { img: IMAGE.contactPic3, bg: 'danger', selectValue: 'Pending' },
        { img: IMAGE.contactPic3, bg: 'danger', selectValue: 'Pending' },
        { img: IMAGE.contactPic2, bg: 'danger', selectValue: 'Pending' },
        { img: IMAGE.contactPic2, bg: 'purple', selectValue: 'In Progress' },
        { img: IMAGE.contactPic3, bg: 'danger', selectValue: 'Pending' }
      ]
    }
  }
})
</script>

<style scoped></style>
