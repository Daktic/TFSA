
import {ConversionRate} from "../pages/conversion_rate/ConversionRate.jsx";
import {Convert} from "../pages/convert/convert.jsx";
import {RideStart} from "../pages/ride_start/rideStart.jsx";
import {RideInProgress} from "../pages/ride_in_progress/rideInProgress.jsx";
import {RideComplete} from "../pages/ride_complete/rideComplete.jsx";
import {Assets} from "../pages/assets/Assets.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function AppHome () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ConversionRate/>}/>
                <Route path="/conversion_rates" element={<ConversionRate/>}/>
                <Route path="/convert" element={<Convert/>}/>
                <Route path="/ride_start" element={<RideStart/>}/>
                <Route path="/ride_in_progress" element={<RideInProgress/>}/>
                <Route path="/ride_complete" element={<RideComplete/>}/>
                <Route path={"/assets"} element={<Assets/>}/>
            </Routes>
        </BrowserRouter>
        );
}

export default AppHome ;