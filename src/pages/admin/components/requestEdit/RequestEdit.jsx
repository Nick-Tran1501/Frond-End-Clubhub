import { useState, useEffect, React } from "react";
import "antd/dist/antd.css";
import "./Request.scss";
import "./RequestAPI.js";

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
import Title from "antd/lib/skeleton/Title";
import { acceptRequest, getRequestList, cancelRequest} from "./RequestAPI.js";

function RequestClub() {
  //  Attributes
  // const { Title } = Typography;

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequestList().then((data) => setRequests(data));
  }, []);

  console.log(requests);


  // ----- function ------

  const onAccept = async (key) => {
    const status = await acceptRequest(key);
    console.log(status);
    getRequestList().then((data) => setRequests(data));
  };

  const onCancel = async (key) => {
    const status = await cancelRequest(key);
    console.log(status);
    getRequestList().then((data) => setRequests(data));
  };

  return (
    <div className="request-list">
      <Row>
        {/* display list */}
        <Col span={24}>
          {requests.length > 0 &&
            requests.map((request) => (
              <div className="request-element" key={request._id}>
                <PageHeader
                  key={request?._id}
                  title={request?.name}
                  subTitle={request.description}
                  tags={[
                    <Tag color="blue" key={request?._id}>
                      {request?.clubCategory}
                    </Tag>,
                    <Tag color="purple" key={request?._id + "status"}>
                      {request?.status}
                    </Tag>,
                  ]}
                  extra={[
                    <Button
                      key="2"
                      type="danger"
                      onClick={() => onCancel(request._id)}
                    >
                      Cancel
                    </Button>,
                    <Button
                      key="1"
                      type="primary"
                      onClick={() => onAccept(request._id)}
                    >
                      Accept
                    </Button>,
                  ]}
                >
                  <Descriptions size="small" column={1}>
                    <Descriptions.Item label="Creator">
                      {request?.president.username}
                    </Descriptions.Item>
                    <Descriptions.Item label="Email Represent">
                      <a>{request?.email}</a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Creation Time">
                      {request?.createDate}
                    </Descriptions.Item>
                    <Descriptions.Item label="Effective Time">
                      2017-10-10
                    </Descriptions.Item>
                    <Descriptions.Item label="Slogan">
                      {request?.slogan}
                    </Descriptions.Item>
                  </Descriptions>
                </PageHeader>
              </div>
            ))}



          {requests.length === 0 && (            
            <Result
              style={{
                backgroundColor: "white",
                height: "100vh",
              }}
              icon={<SmileOutlined />}
              title="Great, you have done all the request!"
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default RequestClub;
