<template>
  <div class="content-body chat-height">
    <div class="container-fluid">
      <div class="row gx-0">
        <div class="col-xl-12">
          <div class="card overflow-hidden">
            <div class="card-body p-0">
              <div class="row gx-0">
                <ChatColumn />
                <div class="col-xl-5 col-lg-6 col-sm-7 chat-border">
                  <div class="chat-p shaprate">
                    <div class="d-flex">
                      <img
                        src="../../assets/images/contacts/d1.jpg"
                        class="avatar avatar-md rounded-circle"
                        alt=""
                      />
                      <div class="ms-2">
                        <h6 class="mb-0">K kumar Gaur</h6>
                        <span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="7"
                              cy="7"
                              r="6"
                              fill="#3AC977"
                              stroke="white"
                              stroke-width="2"
                            />
                          </svg>
                          online</span
                        >
                      </div>
                    </div>
                    <div class="chat-admin">
                      <div class="icon-box bg-info mx-1 chat-toggle">
                        <i class="fa-solid fa-list-ul text-white"></i>
                      </div>
                      <div class="icon-box bg-success mx-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_505_3755)">
                            <path
                              d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_505_3755">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div class="icon-box bg-primary mx-1">
                        <svg
                          width="20"
                          height="14"
                          viewBox="0 0 20 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.561 1.172C19.4256 1.08045 19.2699 1.02347 19.1074 1.00604C18.945 0.988603 18.7807 1.01125 18.629 1.072L14.954 2.542C14.8449 1.83596 14.4875 1.19201 13.946 0.726018C13.4045 0.260026 12.7144 0.00258053 12 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V11C0 11.7956 0.316071 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H12C12.7143 13.9975 13.4042 13.7402 13.9457 13.2744C14.4872 12.8086 14.8447 12.1649 14.954 11.459L18.629 12.929C18.7807 12.9896 18.945 13.0121 19.1075 12.9946C19.27 12.977 19.4257 12.9199 19.561 12.8282C19.6962 12.7365 19.807 12.6131 19.8835 12.4687C19.9601 12.3244 20.0001 12.1634 20 12V2C20 1.83663 19.96 1.67573 19.8835 1.53139C19.807 1.38705 19.6962 1.26365 19.561 1.172ZM12 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V11C13 11.2652 12.8946 11.5196 12.7071 11.7071C12.5196 11.8946 12.2652 12 12 12ZM18 10.523L15 9.323V4.677L18 3.477V10.523Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="chat-box-area style-2 dz-scroll" id="chartBox2">
                    <span class="text-center d-block mb-4">25/04/2023</span>
                    <div class="media justify-content-end align-items-end ms-auto">
                      <div class="message-sent w-auto">
                        <p>
                          Even the all-powerful Pointing has no control about the blind texts it is
                          an<br />
                          almost unorthographic life One day however a small line of blind text by
                          the <br />
                          name of Lorem Ipsum decided to leave for the far World of Grammar. Aenean
                          <br />
                          vulputate eleifend tellus. Aenean leo ligula.
                        </p>
                        <span class="fs-12">9.30 AM</span>
                      </div>
                    </div>
                    <div class="media">
                      <div class="message-received w-auto">
                        <div class="d-flex">
                          <img
                            src="../../assets/images/contacts/pic2.jpg"
                            class="avatar rounded-circle"
                            alt=""
                          />
                          <div class="ms-1 text">
                            <p class="mb-1">Good morning</p>
                            <p class="mb-1">Can you arrange schedule for next meeting?</p>
                            <span>12:45 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span class="text-center d-block mb-4">Today</span>
                    <div class="media justify-content-end align-items-end ms-auto">
                      <div class="message-sent w-auto">
                        <p class="mb-1">Very Good morning</p>
                        <p class="mb-1">Okay, I’ll arrange it soon. i noftify you when</p>
                        <p class="mb-1">Very Good morning</p>
                        <p>
                          Okay, I’ll arrange it soon. i noftify you when it’s done<br />
                          +91-235 2574 2566<br />
                          kk Sharma<br />
                          pan card eeer2063i
                        </p>
                        <span class="fs-12">9.30 AM</span>
                      </div>
                    </div>
                  </div>
                  <div class="message-send style-2">
                    <div class="type-massage style-1">
                      <div class="input-group">
                        <textarea
                          rows="1"
                          class="form-control"
                          placeholder="Hello Hanuman..."
                        ></textarea>
                      </div>
                    </div>
                    <button type="button" class="btn btn-primary p-2">
                      Send
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.555 5.44976L6.73936 9.30612L2.39962 6.59178C1.77783 6.20276 1.90718 5.25829 2.61048 5.05262L12.9142 2.03518C13.5582 1.84642 14.155 2.44855 13.9637 3.09466L10.9154 13.3912C10.7066 14.0955 9.76747 14.2213 9.38214 13.5968L6.73734 9.3068"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="chat-meadia">
                    <h4 class="fs-16">Media</h4>
                    <div class="image-list">
                      <img src="../../assets/images/chat/1.png" alt="" />
                      <img src="../../assets/images/chat/3.png" alt="" />
                      <img src="../../assets/images/chat/2.png" alt="" />
                      <img src="../../assets/images/chat/5.png" alt="" />
                      <img src="../../assets/images/chat/4.png" alt="" />
                      <img src="../../assets/images/chat/2.png" alt="" />
                      <img src="../../assets/images/chat/4.png" alt="" />
                      <img src="../../assets/images/chat/1.png" alt="" />
                      <img src="../../assets/images/chat/4.png" alt="" />
                      <img src="../../assets/images/chat/3.png" alt="" />
                    </div>
                  </div>
                  <div class="chat-meadia">
                    <h4 class="fs-16">Files</h4>
                    <div class="file-list row dz-scroll">
                      <div
                        class="text-center col-xl-4 col-6 filie-l-icon"
                        v-for="({ img, title }, ind) in fileData"
                        :key="ind"
                      >
                        <img :src="img" alt="" />
                        <h5>{{ title }}</h5>
                        <span>3 Items December 27th, 2021 04:56 AM - 10.0 MB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IMAGE from '@/constent/Theme'
import ChatColumn from '@/elements/chatContent/ChatColumn.vue'

export default defineComponent({
  name: 'chat_',
  components: { ChatColumn },
  setup() {
    return {
      fileData: [
        { img: IMAGE.googleDoc1, title: 'document.doc' },
        { img: IMAGE.playButton1, title: 'document.player' },
        { img: IMAGE.musictNotes1, title: 'document.mp3' },
        { img: IMAGE.pdf1, title: 'project.pdf' },
        { img: IMAGE.musictNotes1, title: 'document.mp3' },
        { img: IMAGE.googleDoc1, title: 'document.doc' }
      ]
    }
  }
})
</script>

<style scoped></style>
