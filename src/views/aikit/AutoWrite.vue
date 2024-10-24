<template>
  <CommonNavbar page="AIKit" path="Auto Writer" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div class="alert alert-dismissible ai-header-alert fade show mb-4">
          This is RouterLink demo of AIKit plugin made for you to test the experience of using the
          plugin. Text & images generated in this demo are dummy. In real life, AIKit will call
          OpenAI API and generate relevant text and images based on your prompts.

          <button
            type="button"
            class="btn-close ms-auto"
            data-bs-dismiss="alert"
            aria-label="btn-close"
          >
            <svg
              class=""
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
          </button>
        </div>
        <p>
          AIKit Auto Writer is a tool helps you write drafts quickly, but please review and edit
          before publishing for best results. This is not a substitute for human editing, but a
          drafting aid. Happy writing!
        </p>
        <ul class="nav nav-tabs style-1 mb-4" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <RouterLink to="/auto-write" class="nav-link active border-s-1">Auto Writer</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/scheduled" class="nav-link">Scheduler</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/repurpose" class="nav-link">Repurpose</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/rss" class="nav-link">RSS</RouterLink>
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
        <AiKitData />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonNavbar from '@/layouts/CommonNavbar.vue'
import AiKitData from '@/components/AiKitData.vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'autoWrite',
  components: {
    CommonNavbar,
    AiKitData,
    RouterLink
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
