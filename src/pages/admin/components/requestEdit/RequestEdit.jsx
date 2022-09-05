import {useState, React } from "react";
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


function RequestClub() {
  // test request list

  // const { Paragraph, Text } = Typography;
  {/* request API */}

  

  // sample request data
  const defaultData = [];
  for (let i = 0; i < 10; i++) {
    defaultData.push({
      key: i,
      id : `s ${i}`,
      name: `Câu lạc bộ học giỏi ${i}`,
      clubCategory: "Sport",
      president: "William Bình Định",
      creation: "12/12/1212",
      clubEmail: "WilliamDaQuo@email.bualuaxua",
    })
  }

  // console.log(defaultData);
  const [requests, setRequests] = useState(defaultData);

  // ----- function ------

  const onAccept = (key) => {
    console.log("click accept on " + key);
    const newList = requests.filter(request => request.key !== key);
    setRequests(newList);
  };


  return (
    <div className="request-list">

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

      <Row>
        <Col span={24}> 
           {/* test display */}
          <div className="request-element">
            {requests.map((request) => 
            
            <PageHeader
              key = {request.id}
              title= {request.name}
              subTitle= "sub title"
              tags={[
                <Tag color="blue">{request.clubCategory}</Tag>,
                <Tag color="purple">Pending</Tag>
              ]}
              extra={[
                <Button key="2">Cancel</Button>,
                <Button key="1" type="primary" onClick={()=> onAccept(request.key)}> Accept </Button>,
                
              ]}
            >
              <Descriptions size="small" column={2}>
                <Descriptions.Item label="Created"> {request.president} </Descriptions.Item>
                <Descriptions.Item label="Association">
                  <a> 421421</a>
                </Descriptions.Item>
                <Descriptions.Item label="Creation Time">
                  {request.creation}
                </Descriptions.Item>
                <Descriptions.Item label="Effective Time">
                  2017-10-10
                </Descriptions.Item>
                <Descriptions.Item label="Remarks">
                  Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
              </Descriptions>
            </PageHeader> 
            )}
          </div>

        </Col>
      </Row>

    </div>
  );
}

export default RequestClub;
