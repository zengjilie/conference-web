import React from 'react';
import '../stylesheets/organizers.css'
import OrganizerCard from '../components/OrganizerCard';
import studentsData from '../data/students.json';

function Students() {
  return (
    <div className='org-box'>

      <p className='org-title'>Student Organizers</p>

      <div className='org-wrapper' id='Organizers'>
        {studentsData?.students.map((student, index) =>
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

export default Students