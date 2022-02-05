import React from 'react';
import '../stylesheets/header.css';
import MenuIcon from '@mui/icons-material/Menu';

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

    return (
        <div
            className='tab-bar'>
            <a href="https://www2022.thewebconf.org/" style={{ display: "flex", justifyContent: "center" }}>
                <img
                    width="110px"
                    alt="logo"
                    src='/data/images/TheACMWebConference2022.svg'
                />
            </a>


            <input type="checkbox" id="menu" style={{ display: "none" }} />

            <label for="menu" className='tab-menu-bt'>
                <MenuIcon style={{ width: "40px", height: "40px" }} />
            </label>

            <ul className='tab-items'>
                {list.map((item, index) =>
                    <li
                        className='tab-item'
                        key={index}>
                        {item}
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Header;
