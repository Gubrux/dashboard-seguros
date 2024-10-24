<template>
  <div class="filter cm-content-box box-primary">
    <div class="content-title">
      <div class="cpa"><i :class="icon"></i>{{ title }}</div>
      <div class="tools">
        <a
          href="javascript:void(0);"
          class="expand SlideToolHeader"
          data-bs-toggle="collapse"
          data-bs-target="#contentCollapseExample2"
          aria-expanded="true"
          aria-controls="contentCollapseExample2"
          ><i class="fal fa-angle-down"></i
        ></a>
      </div>
    </div>
    <div id="contentCollapseExample2" class="cm-content-body form excerpt collapse show">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered table-striped table-condensed flip-content">
            <thead>
              <tr>
                <th class="text-black">S.No</th>
                <th class="text-black">Title</th>
                <th class="text-black">Status</th>
                <th class="text-black">Modified</th>
                <th class="text-black text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>About Us</td>
                <td>Published</td>
                <td>18 Feb, 2024</td>
                <td class="text-end">
                  <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                    <i class="fa fa-edit"></i>
                  </a>
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon">
                    <i class="fa fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>FAQ</td>
                <td>Published</td>
                <td>13 Jan, 2024</td>
                <td class="text-end">
                  <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                    <i class="fa fa-edit"></i>
                  </a>
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon">
                    <i class="fa fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Pricing</td>
                <td>Published</td>
                <td>13 Jan, 2024</td>
                <td class="text-end">
                  <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                    <i class="fa fa-edit"></i>
                  </a>
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon">
                    <i class="fa fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Schedule</td>
                <td>Published</td>
                <td>13 Jan, 2024</td>
                <td class="text-end">
                  <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                    <i class="fa fa-edit"></i>
                  </a>
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon">
                    <i class="fa fa-times"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Under Maintenance</td>
                <td>Published</td>
                <td>25 Jan, 2024</td>
                <td class="text-end">
                  <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                    <i class="fa fa-edit"></i>
                  </a>
                  <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon">
                    <i class="fa fa-times"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="d-flex align-items-center justify-content-xl-between flex-wrap justify-content-center"
          >
            <span
              >Page 1 of 5, showing 2 records out of 8 total, starting on record 1, ending on
              2</span
            >
            <nav aria-label="Page navigation example">
              <ul class="pagination mb-2 mb-sm-0">
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);"
                    ><i class="fa-solid fa-angle-left"></i
                  ></a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);"
                    ><i class="fa-solid fa-angle-right"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'cmsTable_',
  props: {
    title: String as () => string,
    icon: String as () => string
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
