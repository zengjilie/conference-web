import React, { useEffect, useState } from 'react';
import '../stylesheets/topics.css'

function Topics() {

  const [topicsData, setTopicsData] = useState(null);
  useEffect(() => {
    fetch('/data/topics.json')
      .then(res => res.json())
      .then(data => setTopicsData(data.topics));
  }, [])
  console.log(topicsData);
  return (

    <div className='topics-box'>
      <p className='topics-title'>Topics (Not Limit To)</p>
      <dir className='topics-wrapper'>
        {topicsData?.map((tp, index) => {
          return (
            <div key={index}>
              <p>
                {tp}
              </p>
            </div>
          )
        })}
      </dir>
    </div>
  )
}

export default Topics;
