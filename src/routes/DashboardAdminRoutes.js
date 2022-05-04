import { Route, Routes } from "react-router-dom";
import SupportAdmin from "../SupportAdmin/index";

/* Pages */

const DashboardAdminRoute = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<SupportAdmin />} />
            </Routes>
        </div>
    )
}

export default DashboardAdminRoute;