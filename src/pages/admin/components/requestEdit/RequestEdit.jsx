import { useState, React } from "react";
import "antd/dist/antd.css";
import "./Request.scss";

// import styles from "./Request.less"
// import "./test.css";

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

function RequestClub() {

  //  Attributes 
  const {Title} = Typography;

  // sample request data
  const defaultData = [];
  for (let i = 0; i < 10; i++) {
    defaultData.push({
      key: i ,
      id: `student ${i}`,
      name: `Câu lạc bộ học giỏi ${i}`,
      clubCategory: "Sport",
      president: "William Bình Định",
      creation: "12/12/1212",
      clubEmail: "WilliamDaQuo@email.bualuaxua",
    });
  }

  // console.log(defaultData);
  const [requests, setRequests] = useState(defaultData);

  // ----- function ------

  const onAccept = (key) => {
    console.log("click accept on " + key);
    const newList = requests.filter((request) => request.key !== key);
    setRequests(newList);

  };

  const onCancel = (key) => {
    console.log("click accept on " + key);
    const newList = requests.filter((request) => request.key !== key);
    console.log(newList.length);
    setRequests(newList);
    // if (newList.length ===  0) {
    //   console.log("empty");
    //   setRequests(
    //     <Result
    //       style={{
    //         backgroundColor: "white",
    //         height: "100%",
    //       }}
    //       icon={<SmileOutlined />}
    //       title="Great, you have done all the request!"
    //     />
    //   )
    // }
    // else {
    //   console.log("test");
    //   setRequests(newList);
    // }


    // console.log(requests.length);
    // if (requests.length === 0) {
    //   setRequests(
    //     // <Result
    //     //   style={{
    //     //     backgroundColor: "white",
    //     //     height: "100%",
    //     //   }}
    //     //   icon={<SmileOutlined />}
    //     //   title="Great, you have done all the request!"
    //     // />
    //     <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    //   )
    // }

  };





  return (
    <div className="request-list">
      <Row>
        <Col span={24}>
          <div className="title-container">
            {/* <Title level={4} className= "request-title"> </Title> */}
          </div>
        </Col>
        {/* display list */}
        <Col span={24}>
          {/* test display */}
          {requests.map((request) => (
            <div className="request-element" key={request.key}>
              <PageHeader
                key={request.key}
                title={request.name}
                subTitle="sub title"
                tags={[
                  <Tag color="blue" key={request.key}> {request.clubCategory} </Tag>
                ]}
                extra={[
                  <Button 
                    key="2"
                    type="danger"
                    onClick={() => onCancel(request.key)}
                  >
                    Cancel
                  </Button>,
                  <Button
                    key="1"
                    type="primary"
                    onClick={() => onAccept(request.key)}
                  >
                    Accept

                  </Button>,
                ]}
              >
                <Descriptions size="small" column={1}>
                  <Descriptions.Item label="Creator">
                    {request.president}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email Represent">
                    <a>{request.clubEmail}</a>
                  </Descriptions.Item>
                  <Descriptions.Item label="Creation Time">
                    {request.creation}
                  </Descriptions.Item>
                  <Descriptions.Item label="Effective Time">
                    2017-10-10
                  </Descriptions.Item>
                  <Descriptions.Item label="Reason">
                    Reason create to home page ......
                    Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                  </Descriptions.Item>
                </Descriptions>
              </PageHeader>
            </div>
          ))}
          
        </Col>
      </Row>
    </div>
  );
}

export default RequestClub;
