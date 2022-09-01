import React from "react";
import "antd/dist/antd.css";
import { Empty,Button, Result } from "antd";
import { SmileOutlined } from '@ant-design/icons';


function RequestClub() {
  return (
    <div>
      {/* <Empty /> */}
      <Result
        style={{
          backgroundColor: 'white',
          height: "100%"
        }}
        icon={<SmileOutlined />}
        title="Great, you have done all the request!"
        // extra={<Button type="primary">Next</Button>}
      />
    </div>
  );
}

export default RequestClub;
