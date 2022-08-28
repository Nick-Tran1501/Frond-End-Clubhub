import React, {useState, useEffect} from 'react';
import "./ProfilePage.css";
import Navbar from '../../components/navbar/NavBars';
import Footer from '../../components/footer/Footers';
import Sidebar from '../../components/sidebar/sidebar';
import "antd/dist/antd.css";
import ProfileBg from './components/ProfileBg';
import { Col, Row,Layout } from "antd";
import ProfileIntro from './components/ProfileIntro';
import ProfileMember from './components/ProfileMember';
import ProfileMedia from './components/ProfileMedia';
import ProfileSide from './components/ProfileSide';
import ProfilePost from './components/ProfilePost';


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
          <ProfileBg page={page} changePage={changePage} />
        </Col>
      </Row>

        {/* MAIN CONTENT */}
        {page === "post" && (
            <Row className="main-content">
              <Col xs={24} sm={24} md={7} lg={7} xl={7} >
                <ProfileSide page={page} changePage={changePage} />
              </Col>

              <Col xs={24} sm={24} md={17} lg={17} xl={17} >
                <ProfilePost />
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