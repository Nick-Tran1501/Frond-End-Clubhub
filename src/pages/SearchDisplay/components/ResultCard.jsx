import React, { useEffect, useState } from 'react'
import { Avatar, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HeartFilled, HomeFilled, MessageFilled, PlusCircleFilled } from '@ant-design/icons'
const { Meta } = Card
const ResultCard = ({ data }) => {
    const navigate = useNavigate()
    const onClickCard = () => {
        localStorage.setItem("clubId", data._id)
        navigate("/profile")
    }

    return (
        <Card
            hoverable
            bordered
            style={{ width: 300, height: "auto", margin: 10, borderRadius: 10 }}
            actions={[
                <HomeFilled key="visit" onClick={() => onClickCard()} />,
                <PlusCircleFilled key="join" />
            ]}
        >
            <Meta
                avatar={<Avatar src={data.logoUrl} />}
                title={data.name}
                description={data.clubCategory}
            />

        </Card>
    )
}

export default ResultCard