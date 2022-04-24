import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../stylesheets/speaker-card.css'
import KeynoteCard from './KeynoteCard';

function SpeakerCard({ name, institution, image, link, keynote }) {
    const [isOpen, setIsOpen] = useState(false);

    const openKeynote = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='speaker-card-box'>

            <div className='speaker-img' style={{
                width: "100%",
                marginTop: "30px",
                height: "250px",
                backgroundPosition: "center",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position:"relative"
            }}>
                <div className='speaker-overlay'></div>
                <div
                    className='speaker-detail'
                    onClick={openKeynote}
                >
                    <ArrowForwardIcon />
                </div>
            </div>
            {/* <div className='speaker-info'> */}
                <p className='speaker-name'>
                    {name}
                </p>
                <p className='speaker-insti'>
                    {institution}
                </p>
            {/* </div> */}

            {/* <div className='overlay'></div> */}


            <KeynoteCard isOpen={isOpen} name={name} keynote={keynote} link={link} openKeynote={openKeynote} />
        </div>
    )
}

export default SpeakerCard;
