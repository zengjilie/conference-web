import React, { useState, } from 'react';
import '../stylesheets/importantDates.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CoffeeIcon from '@mui/icons-material/Coffee';
import GroupsIcon from '@mui/icons-material/Groups';
import Organizers from './Organizers';

function ImportantDates() {
  return (
    <div className='impt-box'>
      <p className='impt-title'>Important Dates</p>

      <div className='impt-wrapper'>
        <div className='impt-box2'>
          <div className='impt-logo'>
            <InsertDriveFileIcon />
          </div>
          <p className='impt-date'>Feb 10, 2022</p>
          <p className='impt-event'>Submissions due （Extended）</p>
        </div>

        <div className='impt-box2'>
          <div className='impt-logo'>
            <EmojiEventsIcon />
          </div>
          <p className='impt-date'>Mar 3, 2022</p>
          <p className='impt-event'>Acceptance notifications
          </p>
        </div>

        <div className='impt-box2'>
          <div className='impt-logo'>
            <CoffeeIcon />
          </div>
          <p className='impt-date'>Mar 10, 2022</p>
          <p className='impt-event'>Camera-ready submission
          </p>
        </div>

        <div className='impt-box2'>
          <div className='impt-logo'>
            <GroupsIcon />
          </div>
          <p className='impt-date'>Apr 25-26, 2022
          </p>
          <p className='impt-event'>Workshop date
          </p>
        </div>
      </div>
      <a href="https://easychair.org/conferences/?conf=aiinhealthatthewebco0">
        <button className='impt-bt'>Submit</button>
      </a>

      <Organizers />
    </div>
  )
}

export default ImportantDates;
