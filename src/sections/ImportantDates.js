import React, { useState, } from 'react';
import '../stylesheets/importantDates.css';

function ImportantDates() {
  return (
    <div className='impt-box'>
      <p className='impt-title'>Important Dates</p>

      <div className='impt-wrapper'>
        <div className='impt-box2'>
          <div className='impt-logo'></div>
          <p className='impt-dates'></p>
          <p className='impt-event'></p>
        </div>

        <div className='impt-box2'>
          <div className='impt-logo'></div>
          <p className='impt-dates'></p>
          <p className='impt-event'></p>
        </div>

        <div className='impt-box2'>
          <div className='impt-logo'></div>
          <p className='impt-dates'></p>
          <p className='impt-event'></p>
        </div>

        <div className='impt-box2'>
          <div className='impt-logo'></div>
          <p className='impt-dates'></p>
          <p className='impt-event'></p>
        </div>
      </div>
    </div>
  )
}

export default ImportantDates;
