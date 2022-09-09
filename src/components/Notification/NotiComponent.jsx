
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, notification, Space } from 'antd';


const openNotificationWithIcon = (type,content) => {
  notification[type]({
    message: 'Notification Title',
    description: content,
  });
};

function NotiComponent (type,content) {

return (
    openNotificationWithIcon(type,content)
    
//     <Space>
//         <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
//         <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
//         <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
//         <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
//   </Space>

)}

export default NotiComponent;
