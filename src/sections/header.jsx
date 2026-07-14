// import { Link } from "react-router-dom";
import Icons from "../icons";
import { useState } from "react";
import "../css/header.css";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div>
            <div>
                <div className='header-main-div container'>
                    <img src='Logo.png' alt='img' className='logotip' />
                    <div className='header-buttons'>
                        <button className='btn'>
                            <Icons.UserIcon /> Log in
                        </button>
                        <button className='btn'>
                            <Icons.BasketIcon /> 0
                        </button>
                        <button className='line-btn' onClick={setDrawerOpen}>
                            <Icons.LineIcon className='line-img' />
                        </button>
                    </div>
                </div>

                <div className='line'></div>
            </div>

            {drawerOpen && (
                <div className='overlay' onClick={() => setDrawerOpen(false)} />
            )}

            <div className={`drawer ${drawerOpen ? "active" : ""}`}>
                <button onClick={() => setDrawerOpen(false)}>x</button>

                <h2>Menu</h2>

                <ul>
                    <li>Delivery info</li>
                    <li>About us</li>
                    <li>Restaurants</li>
                    <li>Specialities</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;
