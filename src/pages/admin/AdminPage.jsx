import React from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";

// css
import "./Admin.style.css";

// import antd
import {
  Col,
  Row,
  Paragraph,
  Descriptions,
  // Input,
  Typography,
  // Table,
  //   Search,
  // Form,
  // Menu,
  // Dropdown,
  // Space,
  // Popconfirm,
  // message,
  // Button,
  // Select,
  // Modal,
} from "antd";

// import commponents
import RequestClub from "./components/requestEdit/RequestEdit";
import ClubEdit from "./components/ClubEdit/ClubEdit";
import UserEdit from "./components/userEdit/UserEdit";

function AdminPage() {
  const { TabPane } = Tabs;

  const onChange = (key) => {
    // console.log(key);
  };

  const { Text, Title, Paragraph } = Typography;
  // const { Search } = Input;

  return (
    <div className="admin-container">
      {/* area 1 */}
      <Row className="admin-header">
        {/* title  */}
        <Col className="admin-header-title" span={24}>
          <Title
            style={{
              color: "white",
              // marginTop: "1rem",
            }}
          >
            Admin Page
          </Title>
        </Col>

        {/* title description */} 
        <Col className="admin-header-subtitle" span={24}>
          {/* Heading */}
          <Title
            level={4}
            style={{
              paddingLeft: "20px",
              margin: "10px 0px",
              // height: "20%"
            }}
          >
            Welcome to WorldPress !
          </Title>
            {/* admin page functionality */}
          <Descriptions className="header-description" title="Admin Page Descriptions">
            <Descriptions.Item label="System Editor"> Admin name</Descriptions.Item>
            <Descriptions.Item label="System Name"> RMIT Club Hub </Descriptions.Item>
            <Descriptions.Item label="System Users"> 999+  </Descriptions.Item>
            <Descriptions.Item label="Location"> SGS </Descriptions.Item>
            <Descriptions.Item label="Edit">
              Clubs Controller , Users Controller , Club Creation requests
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      {/* area 2  */}
      <Row className="admin-tab">
        <Col className="admin-tab-content" span={24}>
          <Tabs onChange={onChange} type="card" size="large">
            <TabPane tab="Request" key="1">
              <RequestClub />
            </TabPane>
            <TabPane tab="Club Editing" key="2">
              <ClubEdit />
            </TabPane>
            <TabPane tab="Users Editing" key="3">
              <UserEdit />
            </TabPane>
          </Tabs>
        </Col>
      </Row>

    </div>
  );
}

export default AdminPage;
