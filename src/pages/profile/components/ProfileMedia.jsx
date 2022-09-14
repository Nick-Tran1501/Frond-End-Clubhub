import React, {useState, useEffect} from 'react';
import "../ProfilePage";
import "antd/dist/antd.css";
import { Image, Button, Comment, Form, Input, List, Carousel, DatePicker, Modal } from "antd";
import { Col, Row,Layout } from "antd";

const ProfileMedia = () => {
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
                </Col>
            </Row>
        </Row>
    </div>
  )
}

export default ProfileMedia