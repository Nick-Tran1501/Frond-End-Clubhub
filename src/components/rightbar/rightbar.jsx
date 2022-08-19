import React from 'react';
import './rightbar.css';
import RecommendClub from "../recommendClub/recommendClub";
import UpcomingEvent from "../upComingEvent/upComingEvent";
import "antd/dist/antd.min.css";




const Rightbars = () => {
  return (
    <div className='rightContainer'>
      <RecommendClub/>
      <UpcomingEvent/>
    </div>
  )
}

export default Rightbars