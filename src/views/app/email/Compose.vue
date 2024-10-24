<template>
  <div class="container-fluid p-0 vh-100">
    <div class="row gx-0">
      <div class="col-lg-12">
        <div class="card mb-0 h-auto border-0">
          <div class="card-body">
            <div class="row gx-0">
              <div
                :class="`col-xl-2 col-xxl-3 col-lg-3 email-left-body ${emaiComposeMenuToggle ? 'active' : ''}`"
              >
                <EmailRightContent />
              </div>
              <div class="col-lg-9 col-xl-10 col-xxl-9">
                <div class="email-right-box ms-0">
                  <div class="d-flex align-items-center px-3">
                    <h4 class="card-title d-sm-none d-block">Email</h4>
                    <div
                      :class="`email-tools-box float-end mb-2 ${emaiComposeMenuToggle ? 'active' : ''}`"
                      @click="emaiComposeMenuToggle = !emaiComposeMenuToggle"
                    >
                      <i class="fa-solid fa-list-ul"></i>
                    </div>
                  </div>
                  <div class="compose-wrapper mt-3" id="compose-content">
                    <div class="compose-content">
                      <form action="#">
                        <div class="mb-3">
                          <input
                            type="text"
                            class="form-control bg-transparent"
                            placeholder=" To:"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="text"
                            class="form-control bg-transparent"
                            placeholder=" Subject:"
                          />
                        </div>
                        <div class="mb-3">
                          <textarea
                            id="email-compose-editor"
                            class="textarea_editor form-control bg-transparent"
                            rows="5"
                            placeholder="Enter text ..."
                          ></textarea>
                        </div>
                      </form>
                      <h5 class="my-3"><i class="fa fa-paperclip me-2"></i>Attatchment</h5>

                      <form action="#" class="dropzone" @click="open">
                        <div
                          class="fallback"
                          v-bind="getRootProps()"
                          :style="`justify-content: ${urls.length > 0 ? 'start' : 'center'}`"
                        >
                          <input name="file" v-bind="getInputProps()" />
                          <div
                            v-if="urls[0]"
                            class="doropImagebox"
                            v-for="(ele, ind) in urls"
                            :key="ind"
                          >
                            <img class="dropImage" :src="ele" alt="" srcset="" />
                          </div>
                          <p v-else>Drop files here to upload</p>
                        </div>
                      </form>
                    </div>
                    <div class="text-start mt-4 mb-3">
                      <button class="btn btn-danger light btn-sl-sm" type="button">
                        <span class="me-2"><i class="fa fa-times"></i></span>Discard
                      </button>
                      {{ ' ' }}
                      <button class="btn btn-primary btn-sl-sm me-2" type="button">
                        <span class="me-2"><i class="fa fa-paper-plane"></i></span>Send
                      </button>
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
import { defineComponent, ref } from 'vue'
import EmailRightContent from '@/elements/EmailRightContent.vue'
import { useDropzone } from 'vue3-dropzone'
import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'compose_',
  components: { EmailRightContent },
  setup() {
    const urls = ref([])
    const { emaiComposeMenuToggle } = storeToRefs(useStore())
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
      maxFiles: 4,
      accept: '.jpg, .jpeg, .png',
      onDrop: (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const fileSrc = URL.createObjectURL(file)
          // @ts-ignore
          urls.value.push(fileSrc)
          setTimeout(() => {
            URL.revokeObjectURL(fileSrc)
          }, 1000)
        })
      }
    })
    return {
      getRootProps,
      getInputProps,
      isDragActive,
      open,
      urls,
      emaiComposeMenuToggle
    }
  }
})
</script>

<style scoped>
.dropzone {
  display: grid;
  place-items: center;
}
.dropImage {
  border-radius: 20px;
  overflow: hidden;
  width: 90px;
  height: 90px;
  position: relative;
  display: block;
  z-index: 10;
}
.fallback {
  display: flex;
  flex-wrap: wrap;
  gap: 2vmax;
  width: 100%;
  padding: 10px;
}
</style>
