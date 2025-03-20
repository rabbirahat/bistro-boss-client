import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/NavBar";


const Main = (props) => {
    return (
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;