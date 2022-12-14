import React, { useState, useEffect } from 'react'
import { Table, Avatar, Tag, Space, Button, Modal, Typography } from 'antd'
import { getClubMembers, kickClubMember, setMemberRoleInClub } from '../services/service';
import { MehFilled } from '@ant-design/icons';



// Map members to rows
const MemberTable = () => {
    const [memberData, setMemberData] = useState([])
    const [clubId, setClubId] = useState(null)

    useEffect(() => {
        getClubMembers().then(data => {
            setMemberData(data.members)
            setClubId(data.clubId)

        })


    }, [])
    const columns = [
        {
            title: 'Profile',
            dataIndex: 'avatarUrl',
            key: 'avatarUrl',
            responsive: ['md'],
            render: (url) => <Avatar src={url} />
        },
        {
            title: "Full Name",
            dataIndex: "name",
            key: "name",
            responsive: ['lg'],
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
            responsive: ['lg'],
            render: (gender) => <a>{gender}</a>
        },

        {
            title: 'Role',
            key: 'clubRole',
            dataIndex: 'clubRole',
            responsive: ['lg'],
            render: (clubRole) => {
                let color = 'brown'
                if (clubRole === 'Member') {
                    color = 'green'
                } else if (clubRole === 'Content Writer') {
                    color = 'blue'
                }
                return (
                    <Tag color={color} key={clubRole}>
                        {clubRole}
                    </Tag>
                )

            }
        },

        {
            title: 'Action',
            key: 'action',

            render: (_, record) => {
                let isPresident = false
                let isContenWriter = false
                if (record.clubRole === 'President') {
                    isPresident = true
                } else if (record.clubRole === 'Content Writer') {
                    isContenWriter = true
                }

                return (
                    <Space size="middle" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button type='primary' onClick={() => onClickViewInfo(record)}>View Info</Button>
                        {(!isContenWriter && !isPresident) && <Button type="primary" onClick={() => onClickSetRole(record, "Content Writer")}>Allow posting</Button>}
                        {(isContenWriter && !isPresident) && <Button type="default" onClick={() => onClickSetRole(record, "Member")}>Disable posting</Button>}
                        {!isPresident &&
                            <Button type='primary' danger onClick={() => onClickKickMember(record)}>Remove</Button>
                        }
                    </Space>
                )
            },
        },
    ];

    let memberInfo = []
    if (memberData.length > 0) {
        memberInfo = memberData.map(member => {
            let clubRole = member.clubs.find(club => club.club === clubId)


            return {
                key: member._id,
                name: member.name,
                username: member.username,
                avatarUrl: member.avatarUrl,
                roles: member.roles,
                dob: member.dob,
                gender: member.gender,
                snumber: member?.snumber,
                phone: member.phone,
                clubRole: clubRole.role
            }
        })
    }





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
                        setMemberData(data.members)
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
    const onClickSetRole = (record, updatedRole) => {
        setMemberRoleInClub(record, updatedRole).then(() => {
            getClubMembers().then(data => {
                setMemberData(data.members)
            })
        })
    }




    // console.log(memberData)




    return (


        <Table columns={columns} dataSource={memberInfo} />
    )
}

export default MemberTable