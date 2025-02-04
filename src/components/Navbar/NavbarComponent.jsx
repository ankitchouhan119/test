import React from "react";
import "../../css/Navbar.css";
import "../../css/styles.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="leftSide" > <ul>
            <li className="active" onClick={() => handleNavigation("./CompanyInfo")}  >  Company </li>
            <li onClick={() => handleNavigation("/Advertisements")}  >
                Advertisements
            </li>
            <li onClick={() => handleNavigation("/Payments")} >
                Payments
            </li>
            <li onClick={() => handleNavigation("/Analytics")} >
                Analytics
            </li>


        </ul>
        </div>
    );




};

export default Navbar;