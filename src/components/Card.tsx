const Card = ({ children, action, className }: any) => {
    return (
        { children }
        // <div className={`card card-flush h-lg-50 ${className || ""}`}>
        //     <div className="card-header pt-5">
        //         <h3 className="card-title text-gray-800 fw-bold">External Links</h3>
        //         <div className="card-toolbar">
        //             <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
        //                 data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"
        //                 data-kt-menu-overflow="true">
        //                 <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1"><svg width="24" height="24"
        //                     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4"
        //                         fill="currentColor" />
        //                     <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
        //                     <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
        //                     <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
        //                 </svg>
        //                 </span>
        //             </button>
        //             <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
        //                 data-kt-menu="true">
        //                 <div className="menu-item px-3">
        //                     <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
        //                         Quick Actions</div>
        //                 </div>
        //                 <div className="separator mb-3 opacity-75"></div>
        //                 <div className="menu-item px-3">
        //                     <a href="#" className="menu-link px-3">
        //                         New Ticket
        //                     </a>
        //                 </div>
        //                 <div className="menu-item px-3">
        //                     <a href="#" className="menu-link px-3">
        //                         New Customer
        //                     </a>
        //                 </div>
        //                 <div className="menu-item px-3" data-kt-menu-trigger="hover"
        //                     data-kt-menu-placement="right-start">
        //                     <a href="#" className="menu-link px-3">
        //                         <span className="menu-title">New Group</span>
        //                         <span className="menu-arrow"></span>
        //                     </a>
        //                     <div className="menu-sub menu-sub-dropdown w-175px py-4">
        //                         <div className="menu-item px-3">
        //                             <a href="#" className="menu-link px-3">
        //                                 Admin Group
        //                             </a>
        //                         </div>
        //                         <div className="menu-item px-3">
        //                             <a href="#" className="menu-link px-3">
        //                                 Staff Group
        //                             </a>
        //                         </div>
        //                         <div className="menu-item px-3">
        //                             <a href="#" className="menu-link px-3">
        //                                 Member Group
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="menu-item px-3">
        //                     <a href="#" className="menu-link px-3">
        //                         New Contact
        //                     </a>
        //                 </div>
        //                 <div className="separator mt-3 opacity-75"></div>
        //                 <div className="menu-item px-3">
        //                     <div className="menu-content px-3 py-3">
        //                         <a className="btn btn-primary  btn-sm px-4" href="#">
        //                             Generate Reports
        //                         </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="card-body pt-5">
        //         <div className="d-flex flex-stack">
        //             <a href="#" className="text-primary fw-semibold fs-6 me-2">Avg. Client
        //                 Rating</a>
        //             <button type="button"
        //                 className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
        //                 <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24"
        //                     fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path opacity="0.3"
        //                         d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
        //                         fill="currentColor" />
        //                     <rect x="21.9497" y="3.46448" width="13" height="2" rx="1"
        //                         transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
        //                     <path
        //                         d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
        //                         fill="currentColor" />
        //                 </svg>
        //                 </span>
        //             </button>
        //         </div>

        //         <div className="separator separator-dashed my-3"></div>

        //         <div className="d-flex flex-stack">
        //             <a href="#" className="text-primary fw-semibold fs-6 me-2">Instagram
        //                 Followers</a>

        //             <button type="button"
        //                 className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
        //                 <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24"
        //                     fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path opacity="0.3"
        //                         d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
        //                         fill="currentColor" />
        //                     <rect x="21.9497" y="3.46448" width="13" height="2" rx="1"
        //                         transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
        //                     <path
        //                         d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
        //                         fill="currentColor" />
        //                 </svg>
        //                 </span>
        //             </button>
        //         </div>

        //         <div className="separator separator-dashed my-3"></div>

        //         <div className="d-flex flex-stack">

        //             <a href="#" className="text-primary fw-semibold fs-6 me-2">Google Ads
        //                 CPC</a>
        //             <button type="button"
        //                 className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end">
        //                 <span className="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24"
        //                     fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path opacity="0.3"
        //                         d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
        //                         fill="currentColor" />
        //                     <rect x="21.9497" y="3.46448" width="13" height="2" rx="1"
        //                         transform="rotate(135 21.9497 3.46448)" fill="currentColor" />
        //                     <path
        //                         d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
        //                         fill="currentColor" />
        //                 </svg>
        //                 </span>
        //             </button>
        //         </div>

        //     </div>
        // </div>
    );
}
export default Card;