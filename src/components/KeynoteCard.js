import React from 'react';
import '../stylesheets/keynote-card.css';
import CloseIcon from '@mui/icons-material/Close';

function KeynoteCard({ isOpen, name, keynote, link, openKeynote }) {
    console.log(isOpen);
    return (
        <div
            className={isOpen ? 'keynote-box' : 'inactive'}>
            <div className='keynote-content'>

                <p className='keynote-header'>Keynote - {name}</p>
                <p className='keynote-title'>{keynote.title}</p>
                <p className='keynote-abstract'><span>Abstract: </span>{keynote.abstract}</p>
                <p className='keynote-profile'>{keynote.profile}</p>

                <div className='keynote-bts'>
                    <p
                        className='keynote-close-bt'
                        onClick={openKeynote}>
                        Close
                    </p>
                    <a
                        className='keynote-link-bt'
                        href={link}>
                        More
                    </a>
                </div>
            </div>

        </div>
    )
}

export default KeynoteCard;
