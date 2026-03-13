"use client";

import { useEffect } from "react";

export default function AppSidebar() {

    useEffect(() => {
        const sidebar = document.querySelector("#kt_app_sidebar") as HTMLElement | null;
        const toggle = document.querySelector("#kt_app_sidebar_toggle") as HTMLElement | null;
        const headerMenu = document.querySelector("#kt_app_header_menu") as HTMLElement | null;
        const menuDashboardsCollapse = document.querySelector("#kt_app_sidebar_menu_dashboards_collapse");
        const menuWrapper = document.querySelector("#kt_app_sidebar_menu_wrapper") as HTMLElement | null;

        if (!sidebar) return;

        // HANDLE TOGGLE
        const handleToggle = () => {
            const toggleObj = (window as any).KTToggle?.getInstance(toggle);
            const headerMenuObj = (window as any).KTMenu?.getInstance(headerMenu);

            if (!toggleObj) return;

            toggleObj.on("kt.toggle.change", () => {
                sidebar.classList.add("animating");

                setTimeout(() => {
                    sidebar.classList.remove("animating");
                }, 300);

                if (headerMenuObj) {
                    headerMenuObj.disable();

                    setTimeout(() => {
                        headerMenuObj.enable();
                    }, 1000);
                }
            });

            toggleObj.on("kt.toggle.changed", () => {
                const date = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

                (window as any).KTCookie?.set(
                    "sidebar_minimize_state",
                    toggleObj.isEnabled() ? "on" : "off",
                    { expires: date }
                );
            });
        };

        // HANDLE SHOW MORE
        const handleShowMore = () => {
            menuDashboardsCollapse?.addEventListener("hide.bs.collapse", () => {
                menuWrapper?.scrollTo({
                    top: 0,
                    behavior: "instant" as ScrollBehavior,
                });
            });
        };

        // HANDLE MENU SCROLL
        const handleMenuScroll = () => {
            const menuActiveItem = menuWrapper?.querySelector(".menu-link.active") as HTMLElement | null;

            if (!menuActiveItem || !menuWrapper) return;

            const KTUtil = (window as any).KTUtil;

            if (KTUtil?.isVisibleInContainer(menuActiveItem, menuWrapper)) return;

            // menuWrapper.scroll({
            //     top: KTUtil.getRelativeTopPosition(menuActiveItem, menuWrapper),
            //     behavior: "smooth",
            // });
        };

        if (toggle) handleToggle();
        if (menuWrapper) handleMenuScroll();
        if (menuDashboardsCollapse) handleShowMore();

    }, []);

    return null;
}