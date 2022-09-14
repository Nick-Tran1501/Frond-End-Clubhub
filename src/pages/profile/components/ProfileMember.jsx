import React from 'react';
import "../ProfilePage";
import "antd/dist/antd.css";
import { Col, Row} from "antd";

const ProfileMember = ({ members }) => {
    return (
        <div className="main-left">
            <Row className="ml friend-list">
                <Col span={24} className="fr it-row1">
                    <div className='row1-title'>
                        <h3>Members</h3>
                    </div>
                </Col>
                {members.map((member) => {
                    return <Col span={12} className='p-row mem-tag'>
                        <img src={member.avatarUrl} alt="avatar" />
                        <div className='memInfo'>
                            <h3>{member.name}</h3>
                        </div>
                    </Col>
                })}


            </Row>
        </div>
    )
}

export default ProfileMember