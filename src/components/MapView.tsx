"use client"

import { useEffect, useRef } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

export default function MapView() {

    const mapContainer = useRef<HTMLDivElement | null>(null)
    const map = useRef<maplibregl.Map | null>(null)
    const goToLocation = (lat: number, lng: number) => {
        map.current?.flyTo({
            center: [lng, lat],
            zoom: 16,
            speed: 0.8,
            curve: 1.6,
            essential: true
        })
    }
    useEffect(() => {
        if (!mapContainer.current) return
        if (map.current) return

        // tạo map
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: "https://tiles.openfreemap.org/styles/liberty",
            center: [106.6297, 10.8231],
            zoom: 12
        })

        // thêm nút zoom
        map.current.addControl(new maplibregl.NavigationControl())

        // nút My Location
        // const geoControl = new maplibregl.GeolocateControl({
        //     positionOptions: {
        //         enableHighAccuracy: true
        //     },
        //     trackUserLocation: false
        // })

        // map.current.addControl(geoControl)

        // // khi user bấm nút location
        // geoControl.on("geolocate", (e) => {

        //     const lat = e.coords.latitude
        //     const lng = e.coords.longitude

        //     map.current?.flyTo({
        //         center: [lng, lat],
        //         zoom: 16,
        //         speed: 0.8,
        //         curve: 1.6,
        //         essential: true
        //     })
        // })

        // khi map load xong
        map.current.on("load", () => {

            navigator.geolocation.getCurrentPosition((position) => {

                const lat = position.coords.latitude
                const lng = position.coords.longitude

                goToLocation(lat, lng)// animation mượt tới vị trí user

                // marker vị trí user
                new maplibregl.Marker({ color: "red" })
                    .setLngLat([lng, lat])
                    .addTo(map.current!)
            })
        })
    }, [])
    return (
        <div style={{ position: "relative" }}>
            <button
                onClick={() => {
                    navigator.geolocation.getCurrentPosition((position) => {
                        const lat = position.coords.latitude
                        const lng = position.coords.longitude
                        goToLocation(lat, lng)
                        new maplibregl.Marker({ color: "red" })
                            .setLngLat([lng, lat])
                            .addTo(map.current!)
                    })
                    
                }}
                className={"btn btn-sm fw-bold btn-primary position-absolute top-10 right-10 z-1"}>
                My Location
            </button>
            <button
                onClick={() => {
                    document.querySelectorAll(".maplibregl-marker").forEach(el => el.remove())

                    const locations: [number, number][] = [
                        [106.65042, 10.80312],
                        [106.65071, 10.80335],
                        [106.64789, 10.80476]
                    ]

                    locations.forEach((coord) => {
                        // const el = document.createElement("img")
                        // el.src = "/next.svg"

                        const el = document.createElement('div');
                        el.className = 'marker';
                        el.style.background =
                            `blue url("/vercel.svg") no-repeat`;
                        el.style.width = "30px"
                        el.style.height = "30px"
                        new maplibregl.Marker({ element: el })
                            .setLngLat(coord)
                            .addTo(map.current!)

                        goToLocation(locations[0][1], locations[0][0]) // zoom tới vị trí đầu tiên
                        // map.current!.addLayer({
                        //     'id': "",
                        //     'type': 'symbol',
                        //     'source': "index",
                        //     'layout': {
                        //         'icon-image': 'rosa-pin',
                        //         'icon-anchor': 'bottom',
                        //         'icon-offset': [0, 5],
                        //         'icon-allow-overlap': true
                        //     }
                        // });
                    })
                }}
                className={"btn btn-sm fw-bold btn-primary position-absolute top-25 right-10 z-1"}>
                Nhà hàng
            </button>
            <div
                ref={mapContainer}
                style={{
                    width: "100%",
                    height: "75vh"
                }}
            />

        </div>
    )
}