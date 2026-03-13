"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: any) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        setTheme((window as any).KTCookie?.get("app_theme_mode") || "light");
    }, [theme]);

    
    
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, []);

    return children;
}
// var KTAppSidebar = function () {
//     const sidebar = document.querySelector('#kt_app_sidebar');
//     const toggle = document.querySelector('#kt_app_sidebar_toggle');
//     const headerMenu = document.querySelector('#kt_app_header_menu');
            
//     if ( sidebar === null ) {
//         return;
//     }

//     if (toggle) {
//         var toggleObj = KTToggle.getInstance(toggle);
//         var headerMenuObj = KTMenu.getInstance(headerMenu);

//         if (toggleObj === null) {
//             return;
//         }

//         useEffect(() => {
//             sidebar.classList.add('animating');
//             setTimeout(function () {
//                 sidebar.classList.remove('animating');
//             }, 300);

//             if (headerMenuObj) {
//                 headerMenuObj.disable();
//                 setTimeout(function () {
//                     headerMenuObj.enable();
//                 }, 1000);
//             }
//             // var date = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
//             // KTCookie.set("sidebar_minimize_state", toggleObj.isEnabled() ? "on" : "off", { expires: date }); 

//         }, [toggleObj])
//     }
// }