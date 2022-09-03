import React, { useState, useEffect } from 'react'
import { Table, Avatar, Tag, Space, Button, Modal, Typography } from 'antd'
import { getClubMembers, kickClubMember } from '../services/service';
import { MehFilled } from '@ant-design/icons';



// Map members to rows
const MemberTable = () => {
    const [memberData, setMemberData] = useState([])

    const columns = [
        {
            title: 'Profile',
            dataIndex: 'avatarUrl',
            key: 'avatarUrl',
            render: (url) => <Avatar src={url} />
        },
        {
            title: "Full Name",
            dataIndex: "name",
            key: "name",
            render: (name) => <a>{name}</a>
        },
        {
            title: 'USERNAME',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: 'gender',
            render: (gender) => <a>{gender}</a>
        },

        {
            title: "SNumber",
            dataIndex: 'snumber',
            key: 'snumber',
            render: (snumber) => <a>{snumber ? snumber : "Empty "}</a>
        },
        {
            title: 'Roles',
            key: 'roles',
            dataIndex: 'roles',
            render: (_, { roles }) => {
                let color = 'blue'
                if (roles === 'user') {
                    color = 'green'
                }
                return (
                    <Tag color={color} key={roles}>
                        {roles.toUpperCase()}
                    </Tag>
                )

            }
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => onClickViewInfo(record)}>View Info</Button>
                    <Button type='primary' danger onClick={() => onClickKickMember(record)}>Kick</Button>
                </Space>
            ),
        },
    ];

    let memberInfo = memberData.map(member => {
        return {
            key: member._id,
            name: member.name,
            username: member.username,
            avatarUrl: member.avatarUrl,
            roles: member.roles,
            dob: member.dob,
            gender: member.gender,
            snumber: member?.snumber,
            phone: member.phone
        }
    })

    const onClickKickMember = (record) => {
        Modal.confirm({
            centered: true,
            okButtonProps: {
                type: "primary",
                danger: true
            },
            icon: <MehFilled style={{ fontSize: 32 }} />,
            title: `Are you sure you want to kick ${record.username} ?`,
            onOk: () => {
                kickClubMember(record).then(function () {
                    getClubMembers().then(data => {
                        setMemberData(data)
                    })
                }).catch(err => {
                    console.log(err.response.data)
                })
            }
        })

    }

    const onClickViewInfo = (record) => {
        Modal.info({
            title: "Member Information",
            content: (
                <div>
                    <Avatar src={record.avatarUrl} />
                    <Typography.Link>{record.username}</Typography.Link>
                    <Typography>Name: {record.name}</Typography>
                    <Typography>DoB: {record.dob}</Typography>
                    <Typography>Phone: {record.phone}</Typography>
                    <Typography>Gender: {record.gender}</Typography>
                </div>
            )
        })

    }

    useEffect(() => {
        getClubMembers().then(data => {
            setMemberData(data)
        })

        console.log('Member table api call')
    }, [])



    return (

        <Table columns={columns} dataSource={memberInfo} />
    )
}

export default MemberTable