import React, { useState, useEffect } from 'react';
import '../stylesheets/agenda.css';

function Agenda() {
  //Fetch agenda data
  const [agendaData, setAgendaData] = useState(null);
  useEffect(() => {
    fetch('/data/agenda.json')
      .then(res => res.json())
      .then(data => setAgendaData(data.agenda));
  }, [])

  return (
    <div className='agenda-box' id='Agenda'>

      <p className='agenda-title'>
        Agenda
      </p>
      <p className='agenda-date'>
        (US Central Time, April 25-26)
      </p>

      <div className='agenda-wrapper'>
        {agendaData?.map((item, index) => {
          return (
            <div className='agenda-info' key={index}>
              <p className='agenda-time'>{item.time}</p>
              <p className='agenda-event'>{item.event}</p>
            </div>
          )
        })}
      </div>

      {/* sumission submodule */}
      <div className='submission-wrapper'>
        <p className='submission-title'>Submission Guidelines</p>
        <p className='submission-intro'>The Web Conference is the premier conference about Web, mining, and applications. Healthcare is an important applied area of the Web technologies. Therefore, promoting Web and semantic web technologies to enable AI in health is important. The organizing committee of this workshop contains leading scientists from semantic web, data mining, graph mining, artificial intelligence, and the applied area of healthcare. Some of them have track records and experiences of organizing similar workshops at other premier venues. The target audience of this workshop includes web and semantic web experts, machine learning and deep learning data scientists, graph mining researchers, computer vision experts, healthcare professionals, and industrial experts on subject matters, decision makers, and leaderships in organizations like startups, companies, government agencies, and institutions which AI in health is needed. We will promote our workshop through major mailinglists (such as dbworld, SIG mailinglist, linkedin, twitter, facebook, and internal mailinglists in universities and companies).</p>
        <p className='submission-detial'>The workshop will be open for the whole conference. Each submitted paper will be evaluated by three reviewers from the aspects of novelty, significance, technique sound, experiments, and presentations. The reviewers will be program committee members or researchers recommended by the members</p>
        <p className='submission-detial'>The selected workshop papers will be extended and published by Journal of Data Intelligence.</p>
        <p className='submission-detial'>All papers submitted should have a maximum length of 8 pages and demo papers should be no more than 4 pages. All must be prepared using the <a href="https://www.acm.org/publications/proceedings-template">ACM camera-ready template</a> . Authors are required to submit their papers electronically in PDF format.
        </p>
        <p className='submission-link'>
          Please submit your papers at
          <a href="https://easychair.org/conferences/?conf=aiinhealthatthewebco0"> https://easychair.org/conferences/?conf=aiinhealthatthewebco0</a>
        </p>
      </div>

    </div >
  )
}

export default Agenda;
