import React from 'react';
import '../stylesheets/home.css';

function Home() {
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

      <div className='home-bg' ></div>

      {/* <image src="../../public/data/images/bg/bg1.jpg" alt="image" weight="100px" height="100px" /> */}
    </div>
  )
}

export default Home;
