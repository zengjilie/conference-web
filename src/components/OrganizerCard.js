import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../stylesheets/organizer-card.css'
function OrganizerCard({ name, institution, image, link }) {
  return (

    <div className='org-card-box'>


      <div className='speaker-img' style={{
        width: "100%",
        marginTop: "30px",
        height: "250px",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"
      }}>
        <div className='org-overlay'></div>

        <a href={link}>
          <div
            className='org-detail'
          >
            <ArrowForwardIcon />
          </div>
        </a>

      </div>

      {/* <div className='org-info'> */}
        <p className='org-name'>
          {name}
        </p>
        <p className='org-insti'>
          {institution}
        </p>
      {/* </div> */}

    </div>
  )
}


export default OrganizerCard;
