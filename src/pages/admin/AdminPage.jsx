import React from "react";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
// import NavBar from "../../components/navbar/NavBars";
import "./Admin.style.css";

// -------------- ant design import ---------------------
import {
  Col,
  Row,
  Input,
  Typography,
  Table,
  Search,
  Form,
  Menu,
  Dropdown,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

// ----------------------------------------------------------------

function AdminPage() {
  const { Text, Link } = Typography;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  //  test table
  const roleList = (
    <Menu
      items={[
        {
          key: "1",
          label: "President",
        },
        {
          key: "2",
          label: "Vice President",
        },
        {
          key: "3",
          label: "Content Writer",
        },
        {
          key: "4",
          label: ",Members",
        },
      ]}
    />
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
    },
    {
      title: "Age",
      dataIndex: "age",
      width: "5%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "5%",
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "30%",
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "10%",
    },
    {
      title: "Change Role",
      dataIndex: "Remove",
      width: "10%",
      render: () => (
        <Space size="middle">
          <Dropdown overlay={roleList}>
            <a>
              More <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
    {
      title: "Remove",
      dataIndex: "remove",
      width: "10%",
    },
  ];

  const data = [];

  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      gender: "Male",
      role: "Onchange",
      remove: "Button"
    });
  }

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="container">
      {/* header title */}
      <Row className="title-container">
        <Col className="title-content" span={24}>
          <h1> Admin Page </h1>
        </Col>
      </Row>
      {/* header search bar */}
      <Row className="header-container">
        <Col className="header-body" span={6}>
          <Link href="" target="_blank">
            Back To Home Page (logo)
          </Link>
        </Col>
        <Col className="header-body" span={18}>
          <Search
            className="search-bar"
            placeholder="Input Club Name"
            size="large"
            onSearch={onSearch}
            enterButton
          />
        </Col>
      </Row>

      {/* body */}
      <Row className="club-container">
        <Col className="member-table" span={24}>
          <h2> Club members table </h2>
          <p> Club Name: Sample Club </p>
          <p>Total members : Number</p>

          <Table
            bordered
            columns={columns}
            dataSource={data}
            onChange={onChange}
          />
        </Col>

        <Col className="request-title" span={24}>
          <h2> Create new club page request</h2>
        </Col>
        <Col className="request-table" span={24}>
          Request list
          <Table
            bordered
            columns={columns}
            dataSource={data}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
}

export default AdminPage;
