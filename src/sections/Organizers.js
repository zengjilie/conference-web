import React, { useEffect, useState } from 'react';
import '../stylesheets/organizers.css'
import OrganizerCard from '../components/OrganizerCard';
import organizerData from '../data/organizer.json';
import studentData from '../data/student.json';

function Organizers() {

  return (
    <div className='org-box'>

      <p className='org-title'>Organizers</p>

      <div className='org-wrapper' id='Organizers'>
        {organizerData?.organizers.map((organizer, index) =>
          <OrganizerCard
            key={index}
            name={organizer.name}
            link={organizer.link}
            institution={organizer.institution}
            image={organizer.image}
          />)}
      </div>


      <p className='stu-org-title'>Student Organizers</p>

      <div className='org-wrapper' id='Organizers'>
        {studentData?.students.map((student, index) =>
          <OrganizerCard
            key={index}
            name={student.name}
            link={student.link}
            institution={student.institution}
            image={student.image}
          />)}
      </div>
    </div>
  )
}

export default Organizers;
