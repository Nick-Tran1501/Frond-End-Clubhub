import React from "react";
import { useState, useEffect, useMemo } from "react";
import "antd/dist/antd.css";
// import NavBar from "../../components/navbar/NavBars";
import "./Admin.style.css";
import TableComponent from "./components/TableComponent";

// -------------- ant design import ---------------------
import {
  Col,
  Row,
  Input,
  Typography,
  Table,
  //   Search,
  Form,
  Menu,
  // Dropdown,
  // Space,
  Popconfirm,
  // message,
  Button,
  Select,
  Modal,
} from "antd";

// import icon
import {
  // DownOutlined,
  // CheckOutlined,
  // CloseOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { render } from "@testing-library/react";
import { Tab } from "react-bootstrap";

// ----------------------------------------------------------------

function AdminPage() {
  // -------- attributes --------------------------------
  const { Link } = Typography;
  const { Search } = Input;
  const { Option } = Select;
  const onSearch = (value) => console.log(value);

  //   //  ------- Functions --------------------------------
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

  // Table data

  const sampleData = [];
  for (let i = 0; i < 46; i++) {
    const randomNumber = parseInt(Math.random() * 1000);
    sampleData.push({
      key: i,
      id: randomNumber,
      name: `Em tuấn thứ ${i}`,
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "Content Writer",
    });
  }
  const [dataSource, setDataSource] = useState(sampleData);
  // new code

  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Join Date",
      dataIndex: "joinDate",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "20%",
      // render: (_, record) => (
      //   // Test new select
      //   <Select
      //     defaultValue={dataSource[record.key].role}
      //     style={{
      //       width: "100%",
      //     }}
      //     onChange={handleChange}
      //   >
      //     <Option value="President">President</Option>
      //     <Option value="Vice President"> Vice President</Option>
      //     <Option value="Content Writer"> Content Writer</Option>
      //     <Option value="Member"> Member</Option>
      //   </Select>
      // ),
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  // -------- CRUD Functions ---------------
  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      key: randomNumber,
      id: randomNumber,
      name: `Em tuấn thứ ${randomNumber}`,
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "Content Writer",
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          // console.log(record.id);
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  // Add new student input

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  // -------

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

          <Button onClick={onAddStudent}> Add a new Student </Button>
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            onChange={onChange}
            pagination={{
              position: ["bottomCenter"],
            }}
          />

          <Modal
            title="Edit Student"
            visible={isEditing}
            okText="Save"
            onCancel={() => {
              resetEditing();
            }}
            onOk={() => {
              setDataSource((pre) => {
                return pre.map((student) => {
                  if (student.id === editingStudent.id) {
                    return editingStudent;
                  } else {
                    return student;
                  }
                });
              });
              resetEditing();
            }}
          >
            <Input
              value={editingStudent?.name}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, name: e.target.value };
                });
              }}
            />
            <Input
              value={editingStudent?.email}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
            <Input
              value={editingStudent?.role}
              onChange={(e) => {
                setEditingStudent((pre) => {
                  return { ...pre, role: e.target.value };
                });
              }}
            />

            <Select
              defaultValue={editingStudent?.role}
              style={{
                width: "100%",
              }}
              // onChange={handleChange}
              onChange={(e) => {
                // console.log(e);
                setEditingStudent((pre) => {
                  return { ...pre, role: e };
                });
              }}
            >
              <Option value="President">President</Option>
              <Option value="Vice President"> Vice President</Option>
              <Option value="Content Writer"> Content Writer</Option>
              <Option value="Member"> Member</Option>

            </Select>

          </Modal>
        </Col>
        <Col className="request-title" span={24}>
          <h2> Create new club page request</h2>
          <div className="add-new-student">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item
              name="StudentID"
              label="Student ID"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Role"
              label="Role"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a specific role for new studetn"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="President">President</Option>
                <Option value="Vice President"> Vice President</Option>
                <Option value="Content Writer"> Content Writer</Option>
                <Option value="Member"> Member</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>

          </div>


        </Col>
        <Col className="request-table" span={24}>
          <h2> Request list </h2>
        </Col>
      </Row>
    </div>
  );
}

export default AdminPage;
