import React from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";

// css


import "./Admin.style.scss";

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
      <div className="admin-header">
        
        <Row>
          {/* Area 1 */}
          <Col className="admin-header-title" span={24}> 
            <Title> Admin Page </Title>
          </Col>
          
          {/* Area 2 */}
          <Col className="admin-header-subtitle" span={24}>
            <Title
              level={4}
            >
              Welcome to Admin Page!
            </Title>
            
            {/* admin page functionality */}
            <Descriptions
              title="Admin Page Descriptions"
            >
              <Descriptions.Item label="System Editor">
                Admin name
              </Descriptions.Item>
              <Descriptions.Item label="System Name">
                RMIT Club Hub
              </Descriptions.Item>
              <Descriptions.Item label="System Users"> 999+ </Descriptions.Item>
              <Descriptions.Item label="Location"> SGS </Descriptions.Item>
              <Descriptions.Item label="Edit">
                Clubs Controller , Users Controller , Club Creation requests
              </Descriptions.Item>
            </Descriptions>

          </Col>

        </Row>

      </div>

      {/* Tab container */}
      <div className="admin-tab">
        <Row>
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
    </div>
  );
}

export default AdminPage;
