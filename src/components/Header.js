import React, { useEffect, useState } from 'react';
import '../stylesheets/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

function Header() {

    const list = [
        "Home",
        "Speakers & Panelists",
        "Introduction",
        "Agenda",
        "Topics",
        "Important Dates",
        "Organizers",
        "Contact",
    ]

    const [navbar, setNavbar] = useState(false);
    function changeNavColor() {
        if (window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeNavColor);

    return (
        <div
            className={navbar ? 'nav-bar active' : 'nav-bar'}>
            <div className='nav-box'>
                < a
                    href="https://www2022.thewebconf.org/"
                    style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        width="110px"
                        alt="logo"
                        src='./data/images/logo/logo-white.svg'
                    />
                </a >


                <input type="checkbox" id="menu" style={{ display: "none" }} />

                <label htmlFor="menu" className='nav-menu-bt'>
                    <MenuIcon style={{ width: "30px", height: "30px", color: "white" }} />
                </label>

                <label htmlFor="menu" className='nav-close-bt'>
                    <CloseIcon style={{ width: "30px", height: "30px", color: "white" }} />
                </label>

                <ul className='nav-items'>
                    {list.map((item, index) =>
                        <Link
                            to={item}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="text-lg hover:text-white cursor-pointer"
                            key={index}
                        >
                            <li
                                className='nav-item'
                            >
                                {item}

                            </li>
                        </Link>
                    )}
                </ul>
            </div>

        </div >
    )
}

export default Header;
