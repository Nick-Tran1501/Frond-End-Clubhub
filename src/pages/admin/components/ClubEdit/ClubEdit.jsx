import React from "react";
import { useState, useEffect, useMemo } from "react";
import "antd/dist/antd.css";
// import NavBar from "../../components/navbar/NavBars";
import "./ClubEdit.style.css";

// -------------- ant design import ---------------------
import {
  Col,
  Row,
  Input,
  PageHeader,
  Statistic,
  Tag,
  Typography,
  Table,
  //   Search,
  Form,
  // Menu,
  // Dropdown,
  // Space,
  // Popconfirm,
  // message,
  Button,
  Select,
  Modal,
} from "antd";

// import icon
import {
  EditOutlined,
  DeleteOutlined,
  TeamOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/skeleton/Title";

// ----------------------------------------------------------------
function ClubEdit() {
  // -------- Attributes --------------------------------
  const { Search } = Input;
  const { Option } = Select;
  const { Title } = Typography;

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

  // disable submit button
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
  }

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
        setDisableSubmit(false);
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
  // css label
  // const layout = {
  //   labelCol: {
  //     span: 3,
  //   },
  //   wrapperCol: {
  //     span: 16,
  //   },
  // };

  // const tailLayout = {
  //   wrapperCol: {
  //     offset: 8,
  //     span: 16,
  //   },
  // };

  const [form] = Form.useForm();
  const [form_search] = Form.useForm();

  const onFinish = (values) => {
    // console.log(values);
    if (studentData[0] !== "") {
      studentData[0].role = values.Role;
      onAddStudent(studentData);
      console.log("Add new student to club");
    } else {
      console.log("Student not found");
    }
  };

  const onReset = () => {
    setStudentData();
    form.resetFields();
  };

  // search club
  const [club, setClub] = useState({
    key: "default",
    id: "sample",
    name: "Club name",
    type: "Club type",
    created: "Created date",
    email: "club email",
    president: "Tran Chan Nam",
    members: "number",
  });

  const sampleClubs = [];
  for (let i = 0; i < 10; i++) {
    const randomNumber = parseInt(Math.random() * 1000);
    sampleClubs.push({
      key: i,
      id: randomNumber,
      name: `Club name ${i}`,
      type: "Sport",
      created: "12/11/2021",
      email: "student@gmail.com",
      president: "Tran Chan Nam",
      members: "6868",
    });
  }

  const searchClub = (values) => {
    console.log(values);
    const newClub = sampleClubs.filter((club) => club.name === values.clubName);
    console.log(newClub[0]);
    setClub(newClub[0]);
  };

  const searchReset = () => {
    form_search.resetFields();
  };

  return (
    <div className="">
      <Row className="club-edit-container">
        {/* area 1 */}
        <Col className="club-edit-search" span={24}>
          <Form
            // {...layout}
            form={form_search}
            name="search-club"
            onFinish={searchClub}
            size="small"
            style={{}}
          >
            <Form.Item
              // {...tailLayout}
              name="clubName"
              label="Club Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Selec Club name" allowClear style={{}}>
                {sampleClubs.map((club) => {
                  return (
                    <Option key={club.id} value={club.name}>
                      {club.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button htmlType="button" onClick={searchReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {/* area 2 */}
        <Col span={24}>
          {/* club members details */}
          <PageHeader
            // size= "small"
            title={club.name}
            tags={<Tag color="blue">{club.type}</Tag>}
          >
            <Row>
              <Statistic title="President" value={club.president} />
              <Statistic
                title="Members"
                value={club.members}
                style={{
                  margin: "0 50px",
                }}
              />
              <Statistic title="Generated" value={club.created} />
            </Row>
          </PageHeader>
        </Col>

        {/* area 3 */}
        {/* Add new studen  */}
        <Col className="add-container" span={24}>
          {/* search bar ( search student by id) */}
          <Title level={4} style={{ margin: "0 20px" }}>
            Add new student to club
          </Title>


          <Search
            style={{
              margin: "10px 20px",
            }}
            className="search-bar"
            placeholder="Input student ID"
            size="medium"
            onSearch={onSearch}
            enterButton
            required
          />

          <Title
            level={4}
            style={{
              margin: "10px",
              textAlign: "center",
            }}
          >
            Student Information
          </Title>
          
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
                Add student
              </Button>

              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {/* area 4 */}
        <Col className="table-content" span={24}>
          {/* single student table */}
          <Title level={4} 
            style={{ 
              textAlign: 'center',
              margin: "10px",
          }}
          > Club Members </Title>
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
              <Option value="President">President </Option>
              <Option value="Vice President"> Vice President </Option>
              <Option value="Content Writer"> Content Writer </Option>
              <Option value="Member"> Member </Option>
            </Select>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default ClubEdit;
