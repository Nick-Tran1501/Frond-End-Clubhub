import React from 'react';
import './RightBars.css';
import RecommendClubs from "../recommendclubs/RecommendClubs";
import UpcomingEvent from "../upcomingevents/UpcomingEvents";
import "antd/dist/antd.min.css";


const Rightbars = () => {
  return (
    <div className='rightContainer'>
      <RecommendClubs/>
      <UpcomingEvent/>
    </div>
  )
}

export default Rightbars