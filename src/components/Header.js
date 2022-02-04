import React from 'react';
import '../stylesheets/header.css';

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
            <a href="https://www2022.thewebconf.org/">
                <img
                    width="110px"
                    alt="logo"
                    src='/data/images/TheACMWebConference2022.svg'
                />
            </a>

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
