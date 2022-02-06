import React, { useEffect, useState } from 'react';
import '../stylesheets/organizers.css'
import OrganizerCard  from '../components/OrganizerCard';

function Organizers() {
  const [organizerData, setOrganizerData] = useState(null);

  useEffect(() => {
    fetch("/data/organizer.json")
      .then(res => res.json())
      .then(data => setOrganizerData(data))
  }, []);

  console.log(organizerData);
  return (
    <div className='org-box'>

      <p className='org-title'>Organizers</p>

      <div className='org-wrapper'>
        {organizerData?.organizers.map((organizer, index) =>
          <OrganizerCard
            key={index}
            name={organizer.name}
            link={organizer.link}
            institution={organizer.institution}
            image={organizer.image}
          />)}
      </div>
    </div>
  )
}

export default Organizers;
