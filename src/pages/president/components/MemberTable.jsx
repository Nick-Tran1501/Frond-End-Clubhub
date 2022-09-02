import React, { useState, useEffect } from 'react'
import { Table, Avatar, Tag, Space, Button } from 'antd'
import { getClubMembers, kickClubMember } from '../services/service';



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
                    <Button type='primary'>Promote</Button>
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
        kickClubMember(record).then(function () {
            getClubMembers().then(data => {
                setMemberData(data)
            })
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