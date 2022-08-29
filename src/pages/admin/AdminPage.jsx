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
  //   Search,
  //   Form,
  Menu,
  Dropdown,
  Space,
  Popconfirm,
  message,
  Button,
  //   Select,
} from "antd";

import {
  DownOutlined,
  CheckOutlined,
  CloseSquareFilled,
} from "@ant-design/icons";

// ----------------------------------------------------------------

function AdminPage() {
  // -------- attributes --------------------------------
  const { Text, Link } = Typography;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  // const [role, setRole] = useState(" ");

  // table data
  const [data, setData] = useState([
    {
      key: "0",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "1",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "2",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "3",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "4",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "5",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "6",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "7",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "8",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "9",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "10",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "11",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    {
      key: "12",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
  ]);

  //  ------- Functions --------------------------------

  // handle select role
  const handleRole = (e) => {
    // message.info("Click on menu item.");
    const roleObj = roleList.props.items;
    const roleResult = roleObj.filter((item) => item.key === e.key);
    const newRole = roleResult[0].label;
    return newRole;
    // console.log(newRole);
    // const newData = data.filter((item) => item.key !== key);
    // setData(newData);
    // setRole(newRole);
  };

  // const updateRole = async (key) => {
  // console.log(key);
  // const newData = data.filter((item) => item.key === key);
  // const newRole =  await handleRole();
  // console.log(newData + " "  + newRole);
  // setData({ ...newData, role: await handleRole() });
  // };

  //  delete handle
  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log(
      "params --- ",
      "pag:",
      pagination,
      "filters: ",
      filters,
      "sorter: ",
      sorter,
      "extra: ",
      extra
    );
  };

  // Table atributes
  const roleList = (
    <Menu
      onClick={handleRole}
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
          label: "Member",
        },
      ]}
    />
  );

  //  Define table columns
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
      title: "Join Date",
      dataIndex: "joinDate",
      width: "10%",
    },

    {
      title: "Email",
      dataIndex: "email",
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
      render: (_, record) => (
        <Space size="middle">
          <Dropdown overlay={roleList}>
            {/* <a onClick={() => updateRole(record.key)}> */}
            <a>
              Select Role
              <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
    {
      title: "operation",
      dataIndex: "operation",
      width: "10%",
      render: (_, record) =>
        data.length >= 1 ? (
          <Popconfirm
            title="Are you sure to remove this person ?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a> Remove </a>
          </Popconfirm>
        ) : null,
    },
  ];

  // return
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
          <Button
            type="primary"
            icon={<CheckOutlined />}
            style={{ color: "#95de64"
            }}
          >
            Save change
          </Button>

          
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
