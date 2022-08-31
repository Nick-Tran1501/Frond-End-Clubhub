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

// import { render } from "@testing-library/react";
// import { Tab } from "react-bootstrap";

// ----------------------------------------------------------------

function AdminPage() {
  // -------- Attributes --------------------------------
  const { Link } = Typography;
  const { Search } = Input;
  const { Option } = Select;

  // sammple all user dat api (Search student attribute)
  const [sts, setSTs] = useState([
    {
      key: "objectid-1",
      id: "s123",
      name: "st1",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "President",
    },
    { 
      key: "objectid-2",
      id: "s456",
      name: "st2",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "Member",
    },
    { 
      key: "objectid-3",
      id: "s789",
      name: "st3",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "Content Writer",
    },
  ]);

  const [studentData, setStudentData] = useState();

  const columnStudentData = [
    {
      title: "ID",
      dataIndex: "id",
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "30%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "5%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
  ];

  // test
    const [disableSubmit, setDisableSubmit] = useState(true);


  //  ------- Functions --------------------------------
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
  // sample student in club
  const sampleData = [];
  for (let i = 0; i < 15; i++) {
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
  };

  const [dataSource, setDataSource] = useState(sampleData);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "5%",
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "20%",
    },
    {
      title: "Actions",
      width: "10%",
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

  // Function for table ( action edit)
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  // -------- CRUD Functions ---------------

  const onSearch = (value) => {
    if (value !== "") {
      const result = sts.filter((student) => student.id === value);
      if (!result[0]) {
        console.log("Student not found");
      } else {
        console.log(result[0]);
        setStudentData(result);
        setDisableSubmit(false)
      }
    } else {
      console.log("Please Input");
    }
  };

  const onAddStudent = (studentData) => {
    const randomNumber = parseInt(Math.random() * 1000);
    
    const newStudent = {
      key: randomNumber,
      id: studentData[0].id,
      name: studentData[0].name,
      gender: studentData[0].gender,
      joinDate: "12/11/2021",
      email: studentData[0].email,
      role: studentData[0].role,
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
    // console.log(values);
    if (studentData[0] !== ""){
      studentData[0].role = values.Role;
      onAddStudent(studentData);
      console.log("Add new student to club");
    }
    else {
      console.log("Student not found");
    }
  };

  const onReset = () => {
    setStudentData();
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
            Back To Home Page
          </Link>
        </Col>
        {/* list search bar search club name */}
        <Col className="" span={18}>
          <Search
            className="search-bar"
            placeholder="Input Club Name"
            size="large"
            onSearch={onSearch}
            enterButton
            required
          />
        </Col>
      </Row>

      {/* ----------  body --------------- */}
      <Row className="club-container"
      >
        {/* clubmembers table */}
        <Col className="member-table" span={24}>

          <h2> Club members table </h2>
          <p> Club Name: Sample Club </p>
          <p> Total members : Number </p>

          <div className="search-areas">
            {/* search bar ( search student by id) */}
            <Search
              className="search-bar"
              placeholder="Input student ID"
              size="medium"
              onSearch={onSearch}
              enterButton
              required
            />
            {/* single student table */}
            <Table
              bordered
              columns={columnStudentData}
              dataSource={studentData}
              size="small"
              pagination={false}
            />
            {/* select role and add student */}
            <Form
              // {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
              disabled={disableSubmit}
            >
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
                  placeholder="Select a specific role for new student"
                  allowClear
                >
                  <Option value="President">President</Option>
                  <Option value="Vice President"> Vice President</Option>
                  <Option value="Content Writer"> Content Writer</Option>
                  <Option value="Member"> Member</Option>
                </Select>
              </Form.Item>

              <Form.Item
              // {...tailLayout}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>

                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </div>

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

        {/* add new student */}
        <Col className="request-title" span={24}>
          <h2> Create new club page request</h2>
        </Col>
        <Col className="request-table" span={24}>
          <h2> Request list </h2>
        </Col>
      </Row>
    </div>
  );
}

export default AdminPage;
