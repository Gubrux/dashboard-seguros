<template>
  <CommonNavbar page="Form" path="CkEditor" />
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-xl-12 col-xxl-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Form CkEditor</h4>
          </div>
          <div class="card-body custom-ekeditor">
            <div id="ckeditor">
              <ckeditor :editor="editor" :config="editorConfig" v-model="editorData"></ckeditor>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-vue'
import CommonNavbar from '@/layouts/CommonNavbar.vue'

export default defineComponent({
  name: 'editor_',
  // @ts-ignore
  components: { CommonNavbar, ckeditor: CKEditor.component },
  setup() {
    const editor = ref(ClassicEditor)
    const editorData = ref('')
    const editorConfig = {
      toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        'blockQuote'
      ]
    }

    return {
      editor,
      editorData,
      editorConfig
    }
  },
  data() {
    return {
      editor: ClassicEditor
    }
  }
})
</script>
