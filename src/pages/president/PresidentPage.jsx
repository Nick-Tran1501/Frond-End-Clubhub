import { Space, Tag, Button, Col, Row, Statistic, Avatar, Tabs, Typography, Divider, Badge } from 'antd';
import { MessageTwoTone, SmileTwoTone, setTwoToneColor } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { getClubMembers, getClubDetail, getJoinClubReques } from './services/service';
import MemberTable from './components/MemberTable';
import RequestTable from './components/RequestTable';
import axios from 'axios';
import './President.css'

const { TabPane } = Tabs




const PresidentPage = () => {
    const [clubData, setClubData] = useState(null)

    useEffect(() => {

        getClubDetail().then(clubDetail => {
            setClubData(clubDetail)
        })

    }, [])





    return (
        <div className='container'>
            <Typography.Title>{clubData?.clubData.name}</Typography.Title>
            <Avatar src={clubData?.clubData.logoUrl} size={64} />
            <Divider />
            <Typography>President: {clubData?.clubData.president.name}</Typography>
            <Statistic
                title="Total member" value={clubData?.memberCount}
            />

            <Tabs defaultActiveKey='2' destroyInactiveTabPane>
                <TabPane
                    tab={
                        <Badge count={0}>
                            <span>
                                <MessageTwoTone style={{ fontSize: 32 }} />
                                Requests
                            </span>
                        </Badge>
                    }
                    key='1'
                >
                    <RequestTable />
                </TabPane>

                <TabPane
                    tab={
                        <span>
                            <SmileTwoTone style={{ fontSize: 32 }} />
                            Members
                        </span>
                    }
                    key='2'
                >
                    <MemberTable />
                </TabPane>

            </Tabs>
        </div>
    )

}

export default PresidentPage