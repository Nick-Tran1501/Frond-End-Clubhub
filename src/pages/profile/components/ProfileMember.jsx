import React, {useState, useEffect} from 'react';
import "../ProfilePage";
import "antd/dist/antd.css";
import { Image, Button, Comment, Form, Input, List, Carousel, DatePicker, Modal } from "antd";
import { Col, Row,Layout } from "antd";

const ProfileMember = () => {
    return (
    <div className="main-left">
        <Row className="ml friend-list">
            <Col span={24} className="fr it-row1">
                <div className='row1-title'>
                    <h3>Members</h3>
                </div>
            </Col>
            <Col span={12} className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </Col>
            <Col span={12} className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </Col>
            <Col span={12} className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </Col>
            <Col span={12} className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </Col>
            {/* <div className="fr img-list">
                
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Doraemon</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Shizuka</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Chaien</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Suneo</div>
            </div> */}
        </Row>
    </div>
  )
}

export default ProfileMember