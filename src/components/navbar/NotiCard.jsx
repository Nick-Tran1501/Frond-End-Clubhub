import React, { useState } from 'react';
import "./NotiCard.css";
import { Card, Avatar, Switch, } from 'antd';

const { Meta } = Card;

const NotiCard = () => {
    // Handle the loading when waiting uploading the notification (when applying API)

    // const [loading, setLoading] = useState(true);

    // Handle the changing data

    // const onChange = (checked) => {
    //     setLoading(!checked);
    // }

  return (
    <div className='cardContainer'>

    {/* <Switch checked={!loading} onChange={onChange}/> */}

    {/* Add loading={loading} as a prroperty */}
    <Card style={{width: 270, height: 70,}} size="small">
        <Meta avatar={<Avatar />}
            title="FINTECH CLUB"
            description="just has posted an image"
        />
    </Card>
    </div>
  )
}

export default NotiCard