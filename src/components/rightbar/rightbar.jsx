import React from 'react';
import './RightBar.css';
import RecommendClub from "../recommendclub/RecommendClub";
import UpcomingEvent from "../upcomingevent/UpcomingEvent";
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