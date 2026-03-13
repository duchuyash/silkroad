import MapView from "@/components/MapView";
import "maplibre-gl/dist/maplibre-gl.css"
import Sidebar from "@/components/Sidebar";

export default function Map() {
    return (
        <div className="app-wrapper flex-column flex-row-fluid " id="kt_app_wrapper">
            <Sidebar />
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                <div className="d-flex flex-column flex-column-fluid">
                    <div id="kt_app_content" className="app-content  flex-column-fluid ">
                        <div id="kt_app_content_container" className="app-container container-xxl ">
                <MapView />
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}