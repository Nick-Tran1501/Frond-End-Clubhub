import { Space, Tag, Button, Col, Row, Statistic, Avatar, Tabs, Typography, Divider, Badge } from 'antd';
import { MessageTwoTone, SmileTwoTone, setTwoToneColor } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { getClubDetail } from './services/service';
import MemberTable from './components/MemberTable';
import RequestTable from './components/RequestTable';

import './President.scss'

const { TabPane } = Tabs




const PresidentPage = () => {
    const [clubData, setClubData] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const onClickCreateClub = () => {
        navigate("/createClub")
    }

    const onClickBack = () => {
        navigate("/home")
    }


    useEffect(() => {
        getClubDetail().then(clubDetail => {

            setClubData(clubDetail)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })


    }, [])


    if (loading) {
        return (
            <div className='container'>
                <Typography.Title style={{ textAlign: 'center', marginTop: "20vh" }}>Loading club data...</Typography.Title>
            </div>
        )
    }

    if (!clubData) {
        return (
            <div className='container' >
                <Typography.Title style={{ textAlign: 'center', marginTop: "20vh" }}>You have not create a club</Typography.Title>
                <Button type='primary' onClick={() => onClickCreateClub()} block style={{ maxWidth: "40%", alignSelf: 'center', borderRadius: '10px', minHeight: "5vh", fontSize: '2rem', minWidth: "fit-content" }}>Establish a club</Button>
                <Button type='primary' danger onClick={() => onClickBack()} block style={{
                    maxWidth: "40%", alignSelf: 'center', borderRadius: '10px', minHeight: "5vh", fontSize: '2rem', marginTop: '1rem',
                    minWidth: "fit-content"
                }}>Back to Home</Button>

            </div>
        )
    }
    return (
        <div className='container'>



            {clubData?.status === 'Pending' &&
                <div>
                    <Typography.Title>{clubData?.clubName}</Typography.Title>
                    <Typography style={{ fontSize: 24 }}>Your club is being reviewed by our staffs, your dashboard will appear when it has been approved</Typography>
                </div>
            }

            {clubData?.clubData &&

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









export default PresidentPage