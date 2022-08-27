import React from 'react';
import './RightBars.css';
import RecommendClub from "../recommendclubs/RecommendClubs";
import UpcomingEvent from "../upcomingevents/UpcomingEvents";
import "antd/dist/antd.min.css";


const Rightbars = () => {
  return (
    <div className='rightContainer'>
      <RecommendClub/>
      <UpcomingEvent/>
      <UpcomingEvent/>
    </div>
  )
}

export default Rightbars