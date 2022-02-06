import React, { useState, useEffect } from 'react';
import '../stylesheets/agenda.css';

function Agenda() {
  const [agendaData, setAgendaData] = useState(null);
  useEffect(() => {
    fetch('/data/agenda.json')
      .then(res => res.json())
      .then(data => setAgendaData(data.agenda));
  }, [])

  const [bg, setBg] = useState(false);

  function changeBg() {
    if (window.scrollY >= 1900) {
      setBg(true);
    } else {
      setBg(false);
    }
  }
  window.addEventListener('scroll', changeBg);

  return (
    <div className='agenda-box'>

      <p className='agenda-title'>
        Agenda
      </p>
      <p className='agenda-time'>
        (US Central Time, April 25-26)
      </p>

      {agendaData?.map((item, index) => {
        return (
          <div key={index} className='agenda-wrapper'>
            <p>{item.time} {item.event}</p>
          </div>
        )
      })}

      <div className={bg ? 'agenda-bg' : 'nothing'}></div>
    </div >
  )
}

export default Agenda;
