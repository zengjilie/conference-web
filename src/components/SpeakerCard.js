import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../stylesheets/speaker-card.css'
import KeynoteCard from './KeynoteCard';

function SpeakerCard({ name, institution, image, link, keynote }) {
    const [isOpen, setIsOpen] = useState(false);
    // const [isOpen, setIsOpen] = useState(true);

    const openKeynote = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='speaker-card-box'>

            <img
                className='speaker-img'
                src={image}
                alt=""
            />

            <div className='speaker-info'>
                <p className='speaker-name'>
                    {name}
                </p>
                <p className='speaker-insti'>
                    {institution}
                </p>
            </div>

            <div className='overlay'></div>

            <div
                className='speaker-detail'
                onClick={openKeynote}
            >
                <ArrowForwardIcon />
            </div>

            <KeynoteCard isOpen={isOpen} name={name} keynote={keynote} link={link} openKeynote={openKeynote} />
        </div>
    )
}

export default SpeakerCard;
