import React, {useState, useEffect} from 'react';
import "./ProfilePage.css";
import Navbar from '../../components/navbar/NavBars';
import Footer from '../../components/footer/Footers';
import Sidebar from '../../components/sidebar/sidebar';
import "antd/dist/antd.css";
import Profile_bg from './components/ProfileBg';
import Profile_main_side from './components/ProfileSide';
import Profile_main_post from './components/ProfilePost';
import { Col, Row,Layout } from "antd";
import ProfileIntro from './components/ProfileIntro';
import ProfileMember from './components/ProfileMember';
import ProfileMedia from './components/ProfileMedia';


const Profile = () => {

  const [page, setPage] = useState("post");

  function changePage(p) {
    setPage(p)
  }

  return (
    <div className='profile--container'>
      <Row>
        <Col span={24} >
          <Navbar />
        </Col>
      </Row>

      {/* <Sidebar/> */}
      <div className='container'>
      <Row>
        <Col span={24} >
          <Profile_bg page={page} changePage={changePage} />
        </Col>
      </Row>

        {/* MAIN CONTENT */}
        {page === "post" && (
            <Row className="main-content">
              <Col xs={24} sm={24} md={7} lg={7} xl={7} >
                <Profile_main_side />
              </Col>

              <Col xs={24} sm={24} md={17} lg={17} xl={17} >
                <Profile_main_post />
              </Col>
            </Row>
          )
        }

        {page === "intro" && (
            <Row className="main-content">
              <Col span={24} >
                <ProfileIntro />
              </Col>
            </Row>
          )
        }

        {page === "member" && (
            <Row className="main-content">
              <Col span={24} >
                <ProfileMember />
              </Col>
            </Row>
          )
        }

        {page === "media" && (
            <Row className="main-content">
              <Col span={24} >
                <ProfileMedia />
              </Col>
            </Row>
          )
        }
      </div>
    </div>
  )
}

export default  Profile