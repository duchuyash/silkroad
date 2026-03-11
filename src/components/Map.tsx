"use client";

export default function Page() {
    return (
        <div className="h-[500px] w-full">
            <Map center={[106.6297, 10.8231]} zoom={10}>
                <MapControls />
            </Map>
        </div>
    );
}