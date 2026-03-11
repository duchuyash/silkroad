"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
            <h1>Custom Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <div className={`btn btn-sm fw-bold btn-primary`} onClick={()=> router.push("/")}>
                Back to Home
            </div>
        </div>
    );
}