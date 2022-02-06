import React, { useEffect, useState } from 'react';
import '../stylesheets/topics.css'

function Topics() {

  const [topicsData, setTopicsData] = useState(null);
  useEffect(() => {
    fetch('/data/topics.json')
      .then(res => res.json())
      .then(data => setTopicsData(data.topics));
  }, [])
  return (

    <div className='topics-box' id='Topics'>
      <p className='topics-title'>Topics (Not Limit To)</p>
      <dir className='topics-wrapper'>
        {topicsData?.map((tp, index) => {
          return (
              <p className='topics-content' key={index}>
                {tp}
              </p>
          )
        })}
      </dir>
    </div>
  )
}

export default Topics;
