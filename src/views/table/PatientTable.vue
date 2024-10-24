<template>
  <div class="col-xl-12">
    <div class="card dz-card" id="accordion-five">
      <div class="card-header flex-wrap d-flex justify-content-between">
        <div>
          <h4 class="card-title">Patient</h4>
          <p class="m-0 subtitle">Add <code>Patient</code> class with <code>datatables</code></p>
        </div>
        <ul class="nav nav-tabs dzm-tabs" id="myTab-4" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab-4"
              data-bs-toggle="tab"
              data-bs-target="#leftPosition"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab-4"
              data-bs-toggle="tab"
              data-bs-target="#leftPosition-html"
              type="button"
              role="tab"
              aria-selected="false"
            >
              HTML
            </button>
          </li>
        </ul>
      </div>
      <!-- tab-content -->
      <div class="tab-content" id="myTabContent-4">
        <div
          class="tab-pane fade show active"
          id="leftPosition"
          role="tabpanel"
          aria-labelledby="home-tab-4"
        >
          <div class="card-body">
            <div class="table-responsive">
              <table id="example5" class="display table" style="min-width: 845px">
                <thead>
                  <tr>
                    <th>
                      <div class="custom-control d-inline custom-checkbox">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="checkAll"
                          required
                          @click="checkboxes = !checkboxes"
                        />
                        <label class="form-check-label" for="checkAll"></label>
                      </div>
                    </th>
                    <!-- <th @click="sortingArr">Patient ID</th>
                    <th @click="sortingArr">Date Check in</th>
                    <th @click="sortingArr">Patient Name</th>
                    <th @click="sortingArr">Doctor Assgined</th>
                    <th @click="sortingArr">Disease</th>
                    <th @click="sortingArr">Status</th>
                    <th @click="sortingArr">Room no</th>
                    <th @click="sortingArr">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(
                      { doctor, disease, name, status, roomNo, badgeColor }, ind
                    ) in paginatedData"
                    :key="ind"
                  >
                    <td>
                      <div class="form-check custom-checkbox ms-2">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="customCheckBox2"
                          required
                          :checked="checkboxes"
                        />
                        <label class="form-check-label" for="customCheckBox2"></label>
                      </div>
                    </td>
                    <td>#P-0000#{{ ind + 1 }}</td>
                    <td>26/02/2020, 12:42 AM</td>
                    <td>{{ name }}</td>
                    <td>{{ doctor }}</td>
                    <td>{{ disease }}</td>
                    <td>
                      <span :class="`badge light badge-${badgeColor}`">
                        <i class="fa fa-circle text-danger me-1"></i>
                        {{ status }}
                      </span>
                    </td>
                    <td>{{ roomNo }}</td>
                    <td>
                      <div class="dropdown ms-auto text-end c-pointer">
                        <div class="btn-link" data-bs-toggle="dropdown">
                          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                              <rect x="0" y="0" width="24" height="24"></rect>
                              <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                              <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                              <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                            </g>
                          </svg>
                        </div>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Accept Patient</a>
                          <a class="dropdown-item" href="#">Reject Order</a>
                          <a class="dropdown-item" href="#">View Details</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="leftPosition-html"
          role="tabpanel"
          aria-labelledby="home-tab-4"
        >
          <div class="card-body pt-0 p-0 code-area">
            <pre class="mb-0"><code class="language-html">&lt;div class="table-responsive"&gt;
&lt;table id="example5" class="display table" style="min-width: 845px"&gt;
	&lt;thead&gt;
		&lt;tr&gt;
			&lt;th&gt;
				&lt;div class="custom-control d-inline custom-checkbox"&gt;
					&lt;input type="checkbox" class="form-check-input" id="checkAll" required&gt;
					&lt;label class="form-check-label" for="checkAll"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/th&gt;
			&lt;th&gt;Patient ID&lt;/th&gt;
			&lt;th&gt;Date Check in&lt;/th&gt;
			&lt;th&gt;Patient Name&lt;/th&gt;
			&lt;th&gt;Doctor Assgined&lt;/th&gt;
			&lt;th&gt;Disease&lt;/th&gt;
			&lt;th&gt;Status&lt;/th&gt;
			&lt;th&gt;Room no&lt;/th&gt;
			&lt;th&gt;Action&lt;/th&gt;
		&lt;/tr&gt;
	&lt;/thead&gt;
	&lt;tbody&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox2" required&gt;
					&lt;label class="form-check-label" for="customCheckBox2"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00001&lt;/td&gt;
			&lt;td&gt;26/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Tiger Nixon&lt;/td&gt;
			&lt;td&gt;Dr. Cedric&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-001&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;												
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox3" required&gt;
					&lt;label class="form-check-label" for="customCheckBox3"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00002&lt;/td&gt;
			&lt;td&gt;28/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Garrett Winters&lt;/td&gt;
			&lt;td&gt;Dr. Cedric&lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-002&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox4" required&gt;
					&lt;label class="form-check-label" for="customCheckBox4"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00003&lt;/td&gt;
			&lt;td&gt;26/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Ashton Cox&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-success"&gt;
					&lt;i class="fa fa-circle text-success me-1"&gt;&lt;/i&gt;
					Recovered
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-003&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox5" required&gt;
					&lt;label class="form-check-label" for="customCheckBox5"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00004&lt;/td&gt;
			&lt;td&gt;29/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Ashton Cox&lt;/td&gt;
			&lt;td&gt;Dr. Cedric&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-004&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox6" required&gt;
					&lt;label class="form-check-label" for="customCheckBox6"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00005&lt;/td&gt;
			&lt;td&gt;28/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Ashton Cox&lt;/td&gt;
			&lt;td&gt;Dr. Cedric&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-005&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox7" required&gt;
					&lt;label class="form-check-label" for="customCheckBox7"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00006&lt;/td&gt;
			&lt;td&gt;28/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Ashton Cox&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-006&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox8" required&gt;
					&lt;label class="form-check-label" for="customCheckBox8"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00007&lt;/td&gt;
			&lt;td&gt;26/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Airi Satou&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-007&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox9" required&gt;
					&lt;label class="form-check-label" for="customCheckBox9"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00008&lt;/td&gt;
			&lt;td&gt;29/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Airi Satou&lt;/td&gt;
			&lt;td&gt;Dr. Garrett &lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-008&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox10" required&gt;
					&lt;label class="form-check-label" for="customCheckBox10"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00009&lt;/td&gt;
			&lt;td&gt;25/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Airi Satou&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-009&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox11" required&gt;
					&lt;label class="form-check-label" for="customCheckBox11"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00010&lt;/td&gt;
			&lt;td&gt;26/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Airi Satou&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-010&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox12" required&gt;
					&lt;label class="form-check-label" for="customCheckBox12"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00011&lt;/td&gt;
			&lt;td&gt;28/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Airi Satou&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-011&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox13" required&gt;
					&lt;label class="form-check-label" for="customCheckBox13"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00012&lt;/td&gt;
			&lt;td&gt;29/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Garrett&lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-012&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox14" required&gt;
					&lt;label class="form-check-label" for="customCheckBox14"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00013&lt;/td&gt;
			&lt;td&gt;25/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-013&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox15" required&gt;
					&lt;label class="form-check-label" for="customCheckBox15"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00014&lt;/td&gt;
			&lt;td&gt;26/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Garrett&lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-014&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox16" required&gt;
					&lt;label class="form-check-label" for="customCheckBox16"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00015&lt;/td&gt;
			&lt;td&gt;28/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-015&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox17" required&gt;
					&lt;label class="form-check-label" for="customCheckBox17"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00016&lt;/td&gt;
			&lt;td&gt;29/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Garrett&lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-016&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox18" required&gt;
					&lt;label class="form-check-label" for="customCheckBox18"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00017&lt;/td&gt;
			&lt;td&gt;25/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-017&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox19" required&gt;
					&lt;label class="form-check-label" for="customCheckBox19"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00018&lt;/td&gt;
			&lt;td&gt;26/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-018&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox20" required&gt;
					&lt;label class="form-check-label" for="customCheckBox20"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00019&lt;/td&gt;
			&lt;td&gt;28/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Rhona&lt;/td&gt;
			&lt;td&gt;Cold & Flu&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-danger"&gt;
					&lt;i class="fa fa-circle text-danger me-1"&gt;&lt;/i&gt;
					New Patient
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-019&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;
				&lt;div class="form-check custom-checkbox ms-2"&gt;
					&lt;input type="checkbox" class="form-check-input" id="customCheckBox21" required&gt;
					&lt;label class="form-check-label" for="customCheckBox21"&gt;&lt;/label&gt;
				&lt;/div&gt;
			&lt;/td&gt;
			&lt;td&gt;#P-00020&lt;/td&gt;
			&lt;td&gt;25/02/2020, 12:42 AM&lt;/td&gt;
			&lt;td&gt;Sonya Frost&lt;/td&gt;
			&lt;td&gt;Dr. Garrett&lt;/td&gt;
			&lt;td&gt;Sleep Problem&lt;/td&gt;
			&lt;td&gt;
				&lt;span class="badge light badge-warning"&gt;
					&lt;i class="fa fa-circle text-warning me-1"&gt;&lt;/i&gt;
					In Treatment
				&lt;/span&gt;
			&lt;/td&gt;
			&lt;td&gt;AB-020&lt;/td&gt;
			&lt;td&gt;
				&lt;div class="dropdown ms-auto text-end"&gt;
					&lt;div class="btn-link" data-bs-toggle="dropdown"&gt;
						&lt;svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"&gt;&lt;g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"&gt;&lt;rect x="0" y="0" width="24" height="24"&gt;&lt;/rect&gt;&lt;circle fill="#000000" cx="5" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="12" cy="12" r="2"&gt;&lt;/circle&gt;&lt;circle fill="#000000" cx="19" cy="12" r="2"&gt;&lt;/circle&gt;&lt;/g&gt;&lt;/svg&gt;
					&lt;/div&gt;
					&lt;div class="dropdown-menu dropdown-menu-end"&gt;
						&lt;a class="dropdown-item" href="#"&gt;Accept Patient&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;Reject Order&lt;/a&gt;
						&lt;a class="dropdown-item" href="#"&gt;View Details&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/td&gt;
		&lt;/tr&gt;
	&lt;/tbody&gt;
&lt;/table&gt;
&lt;/div&gt;
</code></pre>
          </div>
        </div>
      </div>
      <!-- /tab-content -->
    </div>
  </div>
</template>

<script lang="ts">
import { patiantTable } from '@/elements/TableArrayData'
import handlePagination from '@/layouts/HandlePaginatin'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'patient_',
  setup() {
    const checkboxes = ref(false)
    const handlePaginationValue = handlePagination(patiantTable, 20)
    return {
      ...handlePaginationValue,
      checkboxes
    }
  }
})
</script>

<style scoped></style>
