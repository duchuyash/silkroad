import { Button } from "@/components/Button/Button";
import Toolbar from "@/components/Toolbar";
import Sidebar from "@/components/Sidebar";
// import Chart17 from "@/providers/ChartProvider/chart17";

export default function Home() {
  return (
    <div className="app-wrapper flex-column flex-row-fluid " id="kt_app_wrapper">
      <Sidebar />
      <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
        <Toolbar />
        <div className="d-flex flex-column flex-column-fluid">
          <div id="kt_app_content" className="app-content  flex-column-fluid ">
            <div id="kt_app_content_container" className="app-container container-xxl ">
              <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                  <div className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10"
                    style={{ backgroundColor: '#F1416C', backgroundImage: "url(/media/patterns/vector-1.png)" }}>
                    <div className="card-header pt-5">
                      <div className="card-title d-flex flex-column">
                        <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">69</span>

                        <span className="text-white opacity-75 pt-1 fw-semibold fs-6">Active
                          Projects</span>
                      </div>
                    </div>
                    <div className="card-body d-flex align-items-end pt-0">
                      <div className="d-flex align-items-center flex-column mt-3 w-100">
                        <div
                          className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                          <span>43 Pending</span>
                          <span>72%</span>
                        </div>
                        <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                          <div className="bg-white rounded h-8px" role="progressbar" style={{ width: "72%" }}
                            aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                    <div className="card-header pt-5">
                      <div className="card-title d-flex flex-column">
                        <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">357</span>

                        <span className="text-gray-400 pt-1 fw-semibold fs-6">Professionals</span>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-end pe-0">
                      <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">Today’s
                        Heroes</span>
                      <div className="symbol-group symbol-hover flex-nowrap">
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                          <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                        </div>
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                          title="Michael Eberon">
                          <img alt="Pic" src="/media/avatars/300-11.jpg" />
                        </div>
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                          title="Susan Redwood">
                          <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                        </div>
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                          <img alt="Pic" src="/media/avatars/300-2.jpg" />
                        </div>
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                          title="Perry Matthew">
                          <span className="symbol-label bg-danger text-inverse-danger fw-bold">P</span>
                        </div>
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                          <img alt="Pic" src="/media/avatars/300-12.jpg" />
                        </div>
                        <a href="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal"
                          data-bs-target="#kt_modal_view_users">
                          <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">+42</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                  <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                    <div className="card-header pt-5">
                      <div className="card-title d-flex flex-column">
                        <div className="d-flex align-items-center">
                          <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">$</span>
                          <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
                          <span className="badge badge-light-success fs-base">
                            <span className="svg-icon svg-icon-5 svg-icon-success ms-n1"><svg width="24" height="24"
                              viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1"
                                transform="rotate(90 13 6)" fill="currentColor" />
                              <path
                                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                fill="currentColor" />
                            </svg>
                            </span>
                            2.2%
                          </span>
                        </div>

                        <span className="text-gray-400 pt-1 fw-semibold fs-6">Projects Earnings
                          in April</span>
                      </div>
                    </div>
                    <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                      <div className="d-flex flex-center me-5 pt-2">
                        {/* <div id="kt_card_widget_17_chart" style={{ minWidth: '70px', minHeight: '70px' }}
                      data-kt-size="70" data-kt-line="11">
                    </div> */}
                        {/* <Chart17 /> */}
                      </div>
                      <div className="d-flex flex-column content-justify-center flex-row-fluid">
                        <div className="d-flex fw-semibold align-items-center">
                          <div className="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
                          <div className="text-gray-500 flex-grow-1 me-4">Leaf CRM</div>
                          <div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>

                        </div>
                        <div className="d-flex fw-semibold align-items-center my-3">

                          <div className="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>

                          <div className="text-gray-500 flex-grow-1 me-4">Mivy App</div>

                          <div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>

                        </div>
                        <div className="d-flex fw-semibold align-items-center">

                          <div className="bullet w-8px h-3px rounded-2 me-3" style={{ backgroundColor: '#E4E6EF' }}>
                          </div>

                          <div className="text-gray-500 flex-grow-1 me-4">Others</div>

                          <div className=" fw-bolder text-gray-700 text-xxl-end">$45,257</div>

                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card card-flush h-lg-50">
                    <div className="card-header pt-5">
                      <h3 className="card-title text-gray-800 fw-bold">External Links</h3>
                      <div className="card-toolbar">
                        <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                          data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"
                          data-kt-menu-overflow="true">
                          <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4"
                              fill="currentColor" />
                            <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                            <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                            <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                          </svg>
                          </span>
                        </button>
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                          data-kt-menu="true">
                          <div className="menu-item px-3">
                            <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                              Quick Actions</div>
                          </div>
                          <div className="separator mb-3 opacity-75"></div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Ticket
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Customer
                            </a>
                          </div>
                          <div className="menu-item px-3" data-kt-menu-trigger="hover"
                            data-kt-menu-placement="right-start">
                            <a href="#" className="menu-link px-3">
                              <span className="menu-title">New Group</span>
                              <span className="menu-arrow"></span>
                            </a>
                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Admin Group
                                </a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Staff Group
                                </a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Member Group
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              New Contact
                            </a>
                          </div>
                          <div className="separator mt-3 opacity-75"></div>
                          <div className="menu-item px-3">
                            <div className="menu-content px-3 py-3">
                              <a className="btn btn-primary  btn-sm px-4" href="#">
                                Generate Reports
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-5">

                      <div className="d-flex flex-stack">
                        <a href="#" className="text-primary fw-semibold fs-6 me-2">Avg. Client
                          Rating</a>

                        <button type="button"
                          className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                          <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3"
                              d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
                              fill="currentColor" />
                            <rect x="21.9497" y="3.46448" width="13" height="2" rx="1"
                              transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
                            <path
                              d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
                              fill="currentColor" />
                          </svg>
                          </span>
                        </button>
                      </div>

                      <div className="separator separator-dashed my-3"></div>

                      <div className="d-flex flex-stack">
                        <a href="#" className="text-primary fw-semibold fs-6 me-2">Instagram
                          Followers</a>

                        <button type="button"
                          className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                          <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3"
                              d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
                              fill="currentColor" />
                            <rect x="21.9497" y="3.46448" width="13" height="2" rx="1"
                              transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
                            <path
                              d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
                              fill="currentColor" />
                          </svg>
                          </span>
                        </button>
                      </div>

                      <div className="separator separator-dashed my-3"></div>

                      <div className="d-flex flex-stack">

                        <a href="#" className="text-primary fw-semibold fs-6 me-2">Google Ads
                          CPC</a>
                        <button type="button"
                          className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
                          <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3"
                              d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
                              fill="currentColor" />
                            <rect x="21.9497" y="3.46448" width="13" height="2" rx="1"
                              transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
                            <path
                              d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
                              fill="currentColor" />
                          </svg>
                          </span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="card card-flush h-md-100">
                    <div className="card-body d-flex flex-column justify-content-between mt-9 bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0"
                      style={{ backgroundPosition: '100% 50%' }}>
                      <div className="mb-10">
                        <div className="fs-2hx fw-bold text-gray-800 text-center mb-13">
                          <span className="me-2">
                            Try our all new Enviroment with
                            <br />
                            <span className="position-relative d-inline-block text-danger">
                              <a href="../pages/user-profile/overview.html"
                                className="text-danger opacity-75-hover">Pro Plan</a>
                              <span
                                className="position-absolute opacity-15 bottom-0 start-0 border-4 border-danger border-bottom w-100"></span>
                            </span>
                          </span>
                          for Free
                        </div>
                        <div className="text-center">
                          <Button action={"#"} className="btn-dark fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
                            Upgrade Now
                          </Button>
                        </div>
                      </div>
                      <img className="mx-auto h-150px h-lg-200px  theme-light-show"
                        src="/media/illustrations/misc/upgrade.svg" alt="" />
                      <img className="mx-auto h-150px h-lg-200px  theme-dark-show"
                        src="/media/illustrations/misc/upgrade-dark.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
