<template>
  <div
    class="offcanvas offcanvas-end customeoff"
    tabindex="-1"
    id="offcanvasExample1"
    aria-modal="true"
    role="dialog"
  >
    <div class="offcanvas-header">
      <h5 class="modal-title" id="#gridSystemModal1">Add New Task</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="container-fluid">
        <form>
          <div class="row">
            <div class="col-xl-6 mb-3">
              <label for="exampleFormControlInputfirst" class="form-label"
                >Title<span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInputfirst"
                placeholder="Title"
              />
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">Project<span class="text-danger">*</span></label>
              <v-select
                id="dynamic-option-creation"
                placeholder="Project"
                :options="[
                  { title: 'Salesmate' },
                  { title: 'ActiveCampaign' },
                  { title: 'Insightly' }
                ]"
                label="title"
              />
            </div>
            <div class="col-xl-6 mb-3">
              <label for="exampleFormControlInputthree" class="form-label"
                >Start Date<span class="text-danger">*</span></label
              >
              <input type="date" class="form-control" id="exampleFormControlInputthree" />
            </div>
            <div class="col-xl-6 mb-3">
              <label for="exampleFormControlInputfour" class="form-label"
                >End Date<span class="text-danger">*</span></label
              >
              <input type="date" class="form-control" id="exampleFormControlInputfour" />
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">Estimated Hour<span class="text-danger">*</span></label>
              <div class="input-group">
                <input type="text" class="form-control" value="09:30" /><span
                  class="input-group-text"
                  ><i class="fas fa-clock"></i
                ></span>
              </div>
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">Status<span class="text-danger">*</span></label>
              <v-select
                id="dynamic-option-creation"
                placeholder="Status"
                :options="[
                  { title: 'Status' },
                  { title: 'Inprogress' },
                  { title: 'Pending' },
                  { title: 'Completed' }
                ]"
                label="title"
              />
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">priority<span class="text-danger">*</span></label>
              <v-select
                id="dynamic-option-creation"
                placeholder="priority"
                :options="[
                  { title: 'priority' },
                  { title: 'Hight' },
                  { title: 'Medium' },
                  { title: 'Low' }
                ]"
                label="title"
              />
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">Category<span class="text-danger">*</span></label>

              <v-select
                id="dynamic-option-creation"
                placeholder="Category"
                :options="[
                  { title: 'Category' },
                  { title: 'Designing' },
                  { title: 'Development' },
                  { title: 'React developer' }
                ]"
                label="title"
              />
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">Permission<span class="text-danger">*</span></label>
              <v-select
                id="dynamic-option-creation"
                placeholder="Permission"
                :options="[{ title: 'Permission' }, { title: 'Public' }, { title: 'Private' }]"
                label="title"
              />
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">Deadline add<span class="text-danger">*</span></label>

              <v-select
                id="dynamic-option-creation"
                placeholder="Deadline"
                :options="[{ title: 'Deadline' }, { title: 'Yes' }, { title: 'No' }]"
                label="title"
              />
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">Assigned to<span class="text-danger">*</span></label>
              <v-select
                id="dynamic-option-creation"
                placeholder="Assigned"
                :options="[
                  { title: 'Assigned' },
                  { title: 'Bernard' },
                  { title: 'Sergey Brin' },
                  { title: 'Larry Ellison' }
                ]"
                label="title"
              />
            </div>
            <div class="col-xl-6 mb-3">
              <label class="form-label">Responsible Person<span class="text-danger">*</span></label>
              <v-select
                multiple
                id="dynamic-option-creation"
                placeholder="Assigned"
                :options="[
                  { title: 'Assigned' },
                  { title: 'Bernard' },
                  { title: 'Sergey Brin' },
                  { title: 'Larry Ellison' }
                ]"
                label="title"
              />
            </div>
            <div class="col-xl-12 mb-3">
              <label class="form-label">Description<span class="text-danger">*</span></label>
              <textarea rows="3" class="form-control"></textarea>
            </div>
            <div class="col-xl-12 mb-3">
              <label class="form-label">Summary<span class="text-danger">*</span></label>
              <textarea rows="3" class="form-control"></textarea>
            </div>
          </div>
          <div>
            <button class="btn btn-danger light ms-1">Cancel</button> {{ ' ' }}
            <button class="btn btn-primary me-1">Help Desk</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="offcanvas offcanvas-end customeoff" tabindex="-1" id="offcanvasExample">
    <div class="offcanvas-header">
      <h5 class="modal-title" id="#gridSystemModal">Add a Role</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <div class="container-fluid">
        <div class="col-xl-12 mb-3">
          <label for="exampleFormControlInput1" class="form-label font-w500"
            >Role Name<span class="text-danger">*</span></label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Role Name"
          />
        </div>
        <h4 class="heading">User Access levels</h4>
        <div class="table-responsive">
          <table id="role" class="table role-tble">
            <thead>
              <tr>
                <th>Entity</th>
                <th class="text-end">Add</th>
                <th class="text-end">Edit</th>
                <th class="text-end">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>User Management</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input type="checkbox" class="form-check-input" id="customCheckBox4" required />
                    <label class="form-check-label" for="customCheckBox4">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox5"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox5">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox6"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox6">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Release</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input type="checkbox" class="form-check-input" id="customCheckBox7" required />
                    <label class="form-check-label" for="customCheckBox7">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input type="checkbox" class="form-check-input" id="customCheckBox8" required />
                    <label class="form-check-label" for="customCheckBox8">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input type="checkbox" class="form-check-input" id="customCheckBox9" required />
                    <label class="form-check-label" for="customCheckBox9">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Content Management</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox10"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox10">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox11"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox11">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox12"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox12">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Libabry Management</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox131"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox131">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox132"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox132">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox13"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox13">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Permissions for work items</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox14"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox14">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox15"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox15">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox16"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox16">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>User Management</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox17"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox17">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox18"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox18">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox19"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox19">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Release</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox20"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox20">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox21"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox21">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox22"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox22">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Content Management</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox23"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox23">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox24"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox24">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox25"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox25">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Libabry Management</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox26"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox26">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox27"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox27">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox28"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox28">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Permissions for work items</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox29"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox29">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox30"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox30">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox31"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox31">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>User Management</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox32"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox32">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox33"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox33">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox34"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox34">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Release</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox35"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox35">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox36"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox36">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox37"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox37">Delete</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Content Management</td>
                <td>
                  <div class="form-check custom-checkbox checkbox-primary">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox38"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox38">Add</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-warning">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox39"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox39">Edit</label>
                  </div>
                </td>
                <td>
                  <div class="form-check custom-checkbox checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox40"
                      required
                    />
                    <label class="form-check-label" for="customCheckBox40">Delete</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <a href="javascript:void(0)" class="btn btn-light btn-sm me-1">Discard</a>
          <a href="javascript:void(0)" class="btn btn-primary btn-sm">Submit</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueMultiselect from 'vue-multiselect'

export default defineComponent({
  name: 'addNewTask',
  components: { VueMultiselect },
  setup() {
    return {}
  }
})
</script>

<style>
.vs__open-indicator {
  transform: scale(0.6) !important;
}
.vs--open .vs__open-indicator {
  transform: rotate(180deg) scale(0.6) !important;
}
.vs__clear {
  display: none;
}
</style>
