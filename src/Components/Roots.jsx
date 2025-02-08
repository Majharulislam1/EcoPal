import { Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

 

const Roots = () => {
    return (
        <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;