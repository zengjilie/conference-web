import React, { useEffect, useState } from 'react';
import '../stylesheets/speakers.css';
import SpeakerCard from '../components/SpeakerCard';

function Speakers() {
  const [speakerData, setSpeakerData] = useState(null);

  useEffect(() => {
    fetch("/data/speaker.json")
      .then(res => res.json())
      .then(data => setSpeakerData(data))
  }, []);

  return (
    <div className='speakers-box'>

      <p className='speakers-title'>Confirmed Speakers and Panelists</p>

      <div className='speakers-wrapper'>
        {speakerData?.speakers.map((speaker, index) =>
          <SpeakerCard
            key={index}
            name={speaker.name}
            link={speaker.link}
            keynote={speaker.keynote}
            institution={speaker.institution}
            image={speaker.image}
          />)}
      </div>

    </div>
  )
}

export default Speakers;
