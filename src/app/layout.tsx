import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/style.bundle.css";
import "@/styles/plugins.bundle.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Con đường tơ lụa",
  description: "Planning and Booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body id="kt_app_body" data-kt-app-layout="dark-header" data-kt-app-header-fixed="true"  data-kt-app-toolbar-enabled="true" className={`${inter.className} app-default`} >
        <ThemeProvider>
          <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
          <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">    
            <Header />
            <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
              <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    {children}
                <Footer />
              </div>
            </div>
          </div>
        </div> 
        </ThemeProvider>
      </body>
    </html>
  );
}
