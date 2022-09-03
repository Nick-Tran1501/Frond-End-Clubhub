import React from "react";
import "antd/dist/antd.css";

import "./Request.style.css";

import { SmileOutlined } from "@ant-design/icons";
import {
  Button,
  Descriptions,
  PageHeader,
  Row,
  Col,
  Tag,
  Typography,
  Empty,
  Result,
} from "antd";

import { MoreOutlined } from "@ant-design/icons";

function RequestClub() {
  // test request list

  const { Paragraph, Text } = Typography;

  return (
    <div>
      {/* <Empty /> */}
      {/* <Result
        style={{
          backgroundColor: "white",
          height: "100%",
        }}
        icon={<SmileOutlined />}
        title="Great, you have done all the request!"
        extra={<Button type="primary">Next</Button>}
      /> */}

      {/* test  */}
      <Row>
        <Col className="request-list" span={24}>
          {/* sample request */}
          <PageHeader
            title="Cau Lac Bo Chim Chich Choe"
            subTitle= " Ca mua hat "
            tags={<Tag color="blue">Pending</Tag>}
            extra={[
              <Button key="2">Cancel</Button>,
              <Button key="1" type="primary">
                Accept
              </Button>,
            ]}

            style ={{
              backgroundColor: "white",
              paddingBottom: "10px",
            }}
          >
            <Descriptions size="small" column={2}>
              <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
              <Descriptions.Item label="Association">
                <a>421421</a>
              </Descriptions.Item>
              <Descriptions.Item label="Creation Time">
                2017-01-10
              </Descriptions.Item>
              <Descriptions.Item label="Effective Time">
                2017-10-10
              </Descriptions.Item>
              <Descriptions.Item label="Remarks">
                Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>

        </Col>
      </Row>
    </div>
  );
}

export default RequestClub;
