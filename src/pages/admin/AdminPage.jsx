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
              marginTop: "1rem",
            }}
          >
            Admin Page
          </Title>
        </Col>

        <Col className="admin-header-subtitle" span={24}>
          {/* Heading */}
          <Title
            level={4}
            style={
              {
                paddingLeft: "1rem",  
                // color: "white",
              }
            }
          >
            WELLCOME : ADMIN NAME
          </Title>
            {/*  */}
          <Paragraph>
            <pre
              style={{
                fontSize: "1rem",
                // color: "white",
              }}
            >
              Admin Pages display in the administration area. Appropriate menus
              and other styling appear around your content. Use this pages in
              order to provide extra administration functionality.
            </pre>
          </Paragraph>

          {/* <Text> What whould you like to do ?</Text> */}
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
