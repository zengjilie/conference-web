import React from 'react';
import '../stylesheets/footer.css'

function Footer() {
  return (
    <div className='footer-box' id='Contact'>
      <div className='footer-wrapper'>
        < a
          className='footer-logo'
          href="https://www2022.thewebconf.org/"
          style={{ display: "flex", justifyContent: "center" }}>
          <img
            width="120px"
            alt="logo"
            src='./data/images/logo/logo-white.svg'
          />
        </a >

        <p className='footer-title'>SUBMISSION</p>

        <a className='footer-text' href="https://easychair.org/conferences/?conf=aiinhealthatthewebco0">
          <p>https://easychair.org/conferences/?conf=aiinhealthatthewebco0</p>
        </a>

        <p className='footer-title'>IMPORTANT DATE</p>

        <p className='footer-text'>Submissions due: Feb 10, 2022</p>
        <p className='footer-text'>Acceptance notifications: March 3, 2022</p>
        <p className='footer-text'>Camera-ready submission: March 10, 2022</p>
        <p className='footer-text'>Workshop date: April 25-26, 2022</p>

        <p className='footer-title'>CONTACT US</p>
        <p className='footer-text'>Ying Ding</p>
        <a className='footer-text' href="ying.ding@austin.utexas.edu">
          <p>ying.ding@austin.utexas.edu</p>
        </a>

        <p className='footer-attribute'>Copyright © WWW 2022. All rights reserved
          Website Organized by: Tianhao Li (The University of Texas at Austin) |
          Built by: Jilie Zeng (The University of Texas at Austin)</p>
      </div>
    </div>
  )
}

export default Footer;
