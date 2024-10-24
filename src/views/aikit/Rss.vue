<template>
  <CommonNavbar page="AIKit" path="RSS" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div class="alert alert-dismissible ai-header-alert fade show mb-4">
          This is a demo of AIKit plugin made for you to test the experience of using the plugin.
          Text & images generated in this demo are dummy. In real life, AIKit will call OpenAI API
          and generate relevant text and images based on your prompts.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
            <span
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_58_5949)">
                  <path
                    d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
                    stroke="#FF5B5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 7.5L7.5 12.5"
                    stroke="#FF5B5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 7.5L12.5 12.5"
                    stroke="#FF5B5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_58_5949">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </div>
        <ul class="nav nav-tabs style-1 mb-4" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <RouterLink to="/auto-write" class="nav-link border-s-1">Auto Writer</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/scheduled" class="nav-link">Scheduler</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/repurpose" class="nav-link">Repurpose</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/rss" class="nav-link active">RSS</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/chatbot" class="nav-link">Chatbot</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/fine-tune-models" class="nav-link">Fine-tune Models</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/prompt" class="nav-link">AI Menu Prompts</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/setting" class="nav-link">Settings</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/import" class="nav-link border-s-2">Export/Import Settings</RouterLink>
          </li>
        </ul>
        <div class="row">
          <div class="col-xl-4">
            <div class="card h-auto overflow-hidden">
              <div class="card-header border-0 pb-0">
                <h4 class="heading mb-0">Create Repurpose Job</h4>
                <CuntrySelectOption />
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">RSS URL</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="https://yogacare.dexignzone.com/"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput2" class="form-label"
                        >Time to wait between generating articles (minutes)</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput2"
                        placeholder="30"
                      />
                    </div>
                    <label for="exampleFormControlInput2" class="form-label d-block"
                      >Post status</label
                    >
                    <div class="mb-3">
                      <CustomSelectOption valueOne="Draft" valueTwo="Product" />
                    </div>
                    <label class="form-label">Post type</label>
                    <div class="mb-3">
                      <CustomSelectOption valueOne="Post" valueTwo="Product" />
                    </div>
                    <label class="form-label">Post category</label>
                    <div class="mb-3">
                      <CustomSelectOption valueOne="Uncategorized" valueTwo="Categorized" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput3" class="form-label"
                        >Posts to generate</label
                      >
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput3"
                        placeholder="1"
                      />
                    </div>
                    <label class="form-label"
                      >How often to check for new articles in RSS feed</label
                    >
                    <div class="mb-3">
                      <CustomSelectOption valueOne="Hourly" valueTwo="Weekly" />
                    </div>
                    <hr style="margin-left: -21px; margin-right: -21px" />
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input type="checkbox" class="btn-check" id="btncheck1" />
                      <label class="btn btn-outline-primary btn-sm mb-0" for="btncheck1"
                        >Include featured image</label
                      >
                    </div>
                    <hr style="margin-left: -21px; margin-right: -21px; margin-bottom: 0" />
                  </div>
                </div>
              </div>
              <div class="card-footer border-0">
                <div class="text-center">
                  <a href="javascript:void(0);" class="btn btn-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33301 9.16699C5.32213 9.16699 7.22979 9.95717 8.63631 11.3637C10.0428 12.7702 10.833 14.6779 10.833 16.667"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.33301 3.33301C6.86923 3.33301 10.2606 4.73777 12.7611 7.23825C15.2616 9.73874 16.6663 13.1301 16.6663 16.6663"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.16634 16.6667C4.62658 16.6667 4.99967 16.2936 4.99967 15.8333C4.99967 15.3731 4.62658 15 4.16634 15C3.7061 15 3.33301 15.3731 3.33301 15.8333C3.33301 16.2936 3.7061 16.6667 4.16634 16.6667Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    Add RSS Job</a
                  >
                </div>
              </div>
            </div>
          </div>
          <AiKitRightContent />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CuntrySelectOption from '@/components/CuntrySelectOption.vue'
import CustomSelectOption from '@/components/CustomSelectOption.vue'
import AiKitRightContent from '@/layouts/AiKitRightContent.vue'
import CommonNavbar from '@/layouts/CommonNavbar.vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'rss_',
  setup() {
    return {}
  },
  components: {
    AiKitRightContent,
    CommonNavbar,
    CustomSelectOption,
    CuntrySelectOption,
    RouterLink
  }
})
</script>

<style scoped></style>
