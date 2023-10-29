import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div
                className={
                    closeMenu === false
                        ? "logoContainer"
                        : "logoContainer active"
                }
                onClick={() => {
                    handleCloseMenu();
                }}
            >
                <img src={Logo} alt="exaf" className="logo" />
                <h2 className="title">Exafluence </h2>
            </div>

            <div
                className={
                    closeMenu === false
                        ? "contentsContainer"
                        : "contentsContainer active"
                }
            >
                <ul>
                    <Link to='/' className="link"><li className={location.pathname === "/" ? "active" : ""}>
                        <i class="bi bi-columns-gap"></i>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <Link to='/myAccount' className="link"><li
                        className={
                            location.pathname === "/myAccount"
                                ? "active"
                                : ""
                        }
                    >
                        <i class="bi bi-person" ></i>
                        <span >My Account</span>
                    </li></Link>
                    <Link to='/myShipment' className="link"><li
                        className={
                            location.pathname === "/myShipment" ? "active" : ""
                        }
                    >
                        <i class="bi bi-file-earmark-text" ></i>
                        <span>My Shipment</span>
                    </li></Link>
                    <Link to='/newShipment' className="link"><li
                        className={
                            location.pathname === "/newShipment" ? "active" : ""
                        }
                    >
                        <i class="bi bi-truck" ></i>
                        <span>New Shipment</span>
                    </li></Link>
                    <Link to='/deviceData' className="link"><li
                        className={
                            location.pathname === "/deviceData" ? "active" : ""
                        }
                    >
                        <i class="bi bi-hdd" ></i>
                        <span>Device Data</span>
                    </li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
