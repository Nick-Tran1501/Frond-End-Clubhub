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
    const [clubData, setClubData] = useState()

    useEffect(() => {
        getClubDetail().then(clubDetail => {
            setClubData(clubDetail)
        })


    }, [])


    if (!clubData) {
        return (
            <div className='container'>
                <Typography.Title>You have not create a club</Typography.Title>
            </div>
        )
    } else {
        return (
            <div className='container'>



                {clubData?.clubData.status !== 'Active' &&
                    <div>
                        <Typography.Title>{clubData?.clubData?.name}</Typography.Title>
                        <Typography style={{ fontSize: 24 }}>Your club is being reviewed by our staffs, your dashboard will appear when it has been approved</Typography>
                    </div>
                }

                {clubData?.clubData.status === 'Active' &&

                    <>


                        <Typography.Title>Club Member management</Typography.Title>
                        <Avatar src={clubData?.clubData.logoUrl} size={64} />
                        <Typography.Text>{clubData?.clubData.name}</Typography.Text>
                        <Typography>{clubData?.clubData.slogan}</Typography>
                        <Divider />
                        <Typography>President: {clubData?.clubData.president.name}</Typography>


                        <Tabs defaultActiveKey='1' destroyInactiveTabPane>
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
                    </>
                }
            </div>


        )

    }


}






export default PresidentPage