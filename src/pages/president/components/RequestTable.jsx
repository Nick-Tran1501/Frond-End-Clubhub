import React, { useState, useEffect } from 'react'
import { Table, Avatar, Tag, Space, Button } from 'antd'
import { getJoinClubReques, processJoinRequest } from '../services/service';






const RequestTable = ({ data }) => {
    const [requestsInfo, setRequestsInfo] = useState([])

    const columns = [
        {
            title: 'Profile',
            dataIndex: 'avatarUrl',
            key: 'avatarUrl',
            render: (url) => <Avatar src={url} />
        },
        {
            title: 'USERNAME',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            render: (text) => <a>{text}</a>,
        },

        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
            render: (text) => <a>{text}</a>,
        },

        {
            title: 'Time',
            dataIndex: 'createAt',
            key: 'createAt',
            render: (text) => <a>{text}</a>,
        },



        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => onClickApprove(record)} >Accept</Button>
                    <Button type='primary' danger onClick={() => onClickReject(record)}>Reject</Button>
                </Space>
            ),
        },
    ];

    const onClickReject = (record) => {
        processJoinRequest(record, "reject").then(data =>
            getJoinClubReques().then(data => {
                setRequestsInfo(data)
            })
        )
    }

    const onClickApprove = (record) => {
        processJoinRequest(record, "approve").then(data =>
            getJoinClubReques().then(data => {
                setRequestsInfo(data)
            })
        )
    }

    const memberInfo = requestsInfo.map(request => {
        return {
            key: request._id,
            name: request.user.name,
            username: request.user.username,
            avatarUrl: request.user.avatarUrl,
            gender: request.user.gender,
            message: request.message,
            createAt: request.createAt
        }
    })

    useEffect(() => {
        getJoinClubReques().then(request => {
            setRequestsInfo(request)
        })


        console.log("request table api call")

    }, [])



    return (

        <Table columns={columns} dataSource={memberInfo} />
    )
}

export default RequestTable