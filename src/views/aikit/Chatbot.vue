<template>
  <CommonNavbar page="AIKit" path="Chatbot" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div class="alert alert-dismissible ai-header-alert fade show mb-5">
          This is RouterLink demo of AIKit plugin made for you to test the experience of using the
          plugin.

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
        <p>
          AIKit Chatbot allows you to create RouterLink chatbot that can be used on your website.
          You, or your users can use it to answer questions and provide support about your products
          or services.
        </p>

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
            <RouterLink to="/rss" class="nav-link">RSS</RouterLink>
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink to="/chatbot" class="nav-link active">Chatbot</RouterLink>
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
        <div class="card h-auto">
          <div class="card-header border-0 pb-0">
            <h4 class="heading mb-0">Auto Writer</h4>
            <CuntrySelectOption />
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-2">
                <p class="mb-2">Choose content type:</p>
                <div
                  class="btn-group d-block"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
                  <label class="btn btn-outline-primary btn-sm rounded" for="btnradio1">Yes</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
                  <label class="btn btn-outline-primary btn-sm rounded ms-2" for="btnradio2"
                    >No</label
                  >
                </div>
              </div>
              <div class="col-xl-3">
                <p class="mb-2">Default view:</p>
                <div
                  class="btn-group d-block"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" checked />
                  <label class="btn btn-outline-primary btn-sm rounded" for="btnradio3"
                    >Collapsed</label
                  >

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio4" />
                  <label class="btn btn-outline-primary btn-sm rounded ms-2" for="btnradio4"
                    >Expanded</label
                  >
                </div>
              </div>

              <div class="col-xl-7"></div>
              <div class="col-xl-4">
                <label class="form-label">Chatbot model</label>
                <div class="mb-3">
                  <CustomSelectOption valueOne="gpt-3.5-turbo" valueTwo="gpt-3.6-turbo" />
                  <div id="emailHelp" class="form-text">
                    For best results, please use chat models like gpt-3.5-turbo or gpt-4.
                  </div>
                </div>
              </div>
              <div class="col-xl-4">
                <label class="form-label">Show Chatbot on</label>
                <div class="mb-3">
                  <CustomSelectOption valueOne="Frontend Only" valueTwo="Backend Only" />
                </div>
              </div>
              <div class="col-xl-4">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Max response tokens</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="150"
                  />
                </div>
              </div>
              <div class="col-xl-6">
                <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
Prompt stop sequence
										  </textarea
                  >
                  <div id="emailHelp-1" class="form-text">
                    Please set this only if you are using RouterLink fine-tuned model. Leave empty
                    if you are using any of the built-in models. Completion stop sequence is used to
                    mark the stop of the completion.
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea2" rows="3">
Completion stop sequence
										  </textarea
                  >
                  <div id="emailHelp-2" class="form-text">
                    Please set this only if you are using RouterLink fine-tuned model. Leave empty
                    if you are using any of the built-in models. Completion stop sequence is used to
                    mark the stop of the completion.
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea3" rows="5">
Chatbot Context
										  </textarea
                  >
                  <div id="emailHelp-3" class="form-text">
                    You can use this field to set the behaviour of the chatbot. For example, use
                    something like "You are RouterLink helpful assistant." or "Answer in the style
                    of Shakespeare."
                  </div>
                </div>
                <label class="form-label">Show Chatbot only for user role</label>
                <div class="mb-3">
                  <CustomSelectOption valueOne="All" valueTwo="One" />
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    Page content aware?
                  </label>
                </div>
                <div id="emailHelp-4" class="form-text">
                  If enabled, the chatbot will be able to use the content of the current page to
                  generate better responses. Important: it will increase your API costs!
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <h4 class="heading">Create Repurpose Job</h4>
            <div class="row">
              <div class="col-xl-4">
                <div class="mb-3">
                  <label for="exampleFormControlInput4" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput4"
                    placeholder="Chat with us"
                  />
                </div>
              </div>
              <div class="col-xl-4">
                <div class="mb-3">
                  <label for="exampleFormControlInput2" class="form-label"
                    >Input text placeholder</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Input text placeholder"
                  />
                </div>
              </div>
              <div class="col-xl-4">
                <div class="mb-3">
                  <label for="exampleFormControlInput3" class="form-label">Start Message</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput3"
                    placeholder="Hi there! How can I help you?"
                  />
                </div>
              </div>
              <div class="col-xl-12 mt-3">
                <div class="check-ai mb-3">
                  <h4 class="heading">Width (px)</h4>
                  <div id="slider" class="ai-slider">
                    <range-slider
                      class="slider"
                      min="10"
                      max="1000"
                      step="10"
                      :alwaysShowHandle="true"
                      :handleScale="3"
                      color="var(--primary)"
                      track-color="#cccccc"
                      v-model="sliderValue"
                    >
                    </range-slider>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-sm-4">
                <div class="example style-1">
                  <p class="mb-1">Main Color</p>
                  <color-picker
                    class="colorPicker"
                    pureColor="rgb(13, 153, 255)"
                    gradientColor="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
                  />
                </div>
              </div>
              <div class="col-xl-2 col-sm-4">
                <div class="example style-1">
                  <p class="mb-1">Title Color</p>
                  <color-picker
                    class="colorPicker"
                    pureColor="#000"
                    gradientColor="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
                  />
                </div>
              </div>
              <div class="col-xl-2 col-sm-4">
                <div class="example style-1">
                  <p class="mb-1">AI Message Bubble Color</p>
                  <color-picker
                    class="colorPicker"
                    pureColor="rgb(73, 90, 105)"
                    gradientColor="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
                  />
                </div>
              </div>
              <div class="col-xl-2 col-sm-4">
                <div class="example style-1">
                  <p class="mb-1">AI Message Text Color</p>
                  <color-picker
                    class="colorPicker"
                    pureColor="rgb(144, 132, 177)"
                    gradientColor="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
                  />
                </div>
              </div>
              <div class="col-xl-2 col-sm-4">
                <div class="example style-1">
                  <p class="mb-1">User Message Bubble Color</p>
                  <color-picker
                    class="colorPicker"
                    pureColor="rgb(144, 132, 177)"
                    gradientColor="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
                  />
                </div>
              </div>
              <div class="col-xl-2 col-sm-4">
                <div class="example style-1">
                  <p class="mb-1">User Message Text Color</p>
                  <color-picker
                    class="colorPicker"
                    pureColor="rgb(13, 153, 255)"
                    gradientColor="linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
                  />
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-primary float-end mt-3">Save Settings</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomSelectOption from '@/components/CustomSelectOption.vue'
import CommonNavbar from '@/layouts/CommonNavbar.vue'
import RangeSlider from 'vue3-slider'
import { ColorPicker } from 'vue3-colorpicker'
import CuntrySelectOption from '@/components/CuntrySelectOption.vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'chatbot_',
  data() {
    return {
      sliderValue: 50
    }
  },
  setup() {
    const pureColor = ref('rgb(13, 153, 255)')
    const gradientColor = ref('linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)')
    return { pureColor, gradientColor }
  },
  components: {
    CommonNavbar,
    CustomSelectOption,
    RangeSlider,
    ColorPicker,
    CuntrySelectOption,
    RouterLink
  }
})
</script>

<style>
.ai-slider .hover {
  position: relative;
  background-color: #fff !important;
  box-shadow: 1px 1px 15px rgb(0, 0, 0);
  top: -5px;
}
.ai-slider .hover::after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary);
}
.vc-color-wrap {
  width: 45px !important;
  height: 45px !important;
  border-radius: 5px;
}
</style>
