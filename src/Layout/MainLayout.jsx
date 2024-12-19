import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-9/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;