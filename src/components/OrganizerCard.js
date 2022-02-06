import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../stylesheets/organizer-card.css'
function OrganizerCard({ name, institution, image, link }) {
  return (

    <div className='org-card-box'>

      <img
        className='org-img'
        src={image}
        alt=""
      />

      <div className='org-info'>
        <p className='org-name'>
          {name}
        </p>
        <p className='org-insti'>
          {institution}
        </p>
      </div>

      <div className='overlay'></div>

      <a href={link}>
        <div
          className='org-detail'
        >
          <ArrowForwardIcon />
        </div>
      </a>

    </div>
  )
}


export default OrganizerCard;
