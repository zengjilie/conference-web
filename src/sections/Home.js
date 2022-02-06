import React, { useState, useEffect } from 'react';
import { useWindowHeight } from '@react-hook/window-size';
import '../stylesheets/home.css';

function Home() {

  //Get window height
  const wHeight = useWindowHeight();

  //Get scroll height -> change bg-img
  const [bg, setBg] = useState(true);

  function changeBg() {
    if (window.scrollY >= wHeight + (8 / 4) * 410 + 250) {
      setBg(false);
    } else {
      setBg(true);
    }
  }
  window.addEventListener('scroll', changeBg);

  return (
    <div className='home-box'>
      <p className='home-title'>
        International Workshop<br />
        on AI in Health:<br />
        Explainable AI for Better Health
      </p>

      <a
        className='home-text'
        href="https://www2022.thewebconf.org">
        THE WEB CONFERENCE 2022
      </a>

      <p className="home-text">Online, Hosted by Lyon, France</p>
      <p className="home-text">25-29 April 2022</p>
      <p className="home-text">School of Information, The University of Texas at Austin</p>
      <p className='home-text'>You need to register the conference in order to attend this workshop, please click the Attend button which will lead you to the conference registration page</p>

      <div className='home-bts'>
        <a
          href="https://www2022.thewebconf.org/attendees/">
          <button
            className="home-attend-bt">Attend
          </button>
        </a>

        <a
          href="https://easychair.org/conferences/?conf=aiinhealthatthewebco0"
          target="blank">
          <button className="home-submit-bt">
            Submit
          </button>
        </a>
      </div>

      <div className={bg ? 'home-bg' : 'nothing'}></div>

    </div>
  )
}

export default Home;
