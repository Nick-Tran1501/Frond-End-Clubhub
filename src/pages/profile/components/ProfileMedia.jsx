import React, {useState, useEffect} from 'react';
import "../ProfilePage";
import "antd/dist/antd.css";
import axios from 'axios';
import { Image} from "antd";
import { Col, Row,Layout } from "antd";

const ProfileMedia = () => {
    const token = localStorage.getItem("token")
    const clubId = localStorage.getItem("clubId")
    const [clubImg, setClubImg] = useState([]);

    useEffect(() => {
        axios({
          method: "get",
          url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/featureimage/${clubId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setClubImg(response.data);
            console.log("img", response);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <div className="main-left">
        <Row className="ml media">
            <Col span={24} className="md it-row1">
                <div className='row1-title'>
                    <h3>Images</h3>
                </div>
            </Col>
            <Row 
                gutter={{
                    xs: 0,
                    sm: 15,
                    md: 15,
                    lg: 15,
                  }}
                className="memGalery"
            >
                {clubImg.map((img)=>{
                    return(<Col xs={24} sm={24} md={17} lg={17} xl={6} key={img.url}>
                        <Image
                            width="100%"
                            height="12rem"
                            src={img.url}
                            className="Images img"
                        />
                    </Col>)
                })}
                
                {/* <Col xs={24} sm={24} md={17} lg={17} xl={6}>
                    <Image
                        width="100%"
                        height="12rem"
                        // src={require("../../../image/Image1.jpg")}
                        className="Images img"
                    />
                </Col>
                <Col xs={24} sm={24} md={17} lg={17} xl={6}>
                    <Image
                        width="100%"
                        height="12rem"
                        // src={require("../../../image/Image1.jpg")}
                        className="Images img"
                    />
                </Col>
                <Col xs={24} sm={24} md={17} lg={17} xl={6}>
                    <Image
                        width="100%"
                        height="12rem"
                        // src={require("../../../image/Image2.jpg")}
                        className="Images img"
                    />
                </Col>
                <Col xs={24} sm={24} md={17} lg={17} xl={6}>
                    <Image
                        width="100%"
                        height="12rem"
                        // src={require("../../../image/Image3.jpg")}
                        className="Images img"
                    />
                </Col> */}
            </Row>
        </Row>
    </div>
  )
}

export default ProfileMedia