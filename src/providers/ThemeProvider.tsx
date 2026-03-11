"use client";

import { useEffect, useState } from "react";

export default  function ThemeProvider({ children }: any) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    return children;
}