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

  const { Link, Title, Paragraph } = Typography;
  // const { Search } = Input;

  return (
    <div className="admin-container">
      <Row className="admin-header">
        <Col className="admin-header-title" span={24}>
          <Title
            style={{
              color: "white",
            }}
          >
            Admin Page
          </Title>
        </Col>
        <Col className="admin-header-subtitle" span={24}>
            <Title
              level={3}
              style={{
                color: "white",
              }}
            >
              Wellcome Le Anh Tuan
            </Title>

            <Paragraph>
              <pre
                style={{
                  fontSize: "1rem",
                  color: "white",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                exercitationem ab adipisci tempore nostrum iusto iure, itaque
                mollitia beatae neque amet non, reiciendis quia fugit aspernatur
                eum dolor quo provident !
              </pre>
            </Paragraph>
        </Col>
        
      </Row>
      <Row className="header-container">
        <Col className="header-body" span={6}>
          <Link href="" target="_blank">
            Back To Home Page
          </Link>
        </Col>
        <Col className="" span={18}>
          <p> Filter area </p>
        </Col>
      </Row>
      <Row className="content-row">
        <Col className="content-col" span={24}>
          <Tabs onChange={onChange} type="card">
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
