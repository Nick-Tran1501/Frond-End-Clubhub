import React from "react";
import { useState, useEffect, useMemo } from "react";
import "antd/dist/antd.css";
import "./ClubEdit.scss";
import "./ClubAPI.js";

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
  Empty,
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
// import Title from "antd/lib/skeleton/Title";
import { getActiveClubData, getClubID } from "./ClubAPI.js";

function ClubEdit() {


// -------- Attributes --------------------------------
  const { Search } = Input;
  const { Option } = Select;
  const { Title } = Typography;

  const [clubs, setClubs] = useState([]);
  const [clubDisplay, setClubDisplay] = useState();
  const [dataSource, setDataSource] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
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
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [disableSearch, setDisableSearch] = useState(true);
  const [studentData, setStudentData] = useState();
  const [form] = Form.useForm();
  const [form_search] = Form.useForm();

// ****************************************************************

  // ---- search club ------

  // get every club data
  useEffect(() => {
    getActiveClubData().then((data) => setClubs(data));
  }, []);

  
  const searchClub = (value) => {
    getClubID(value.clubID).then((data) => {
      console.log(data);
      setClubDisplay(data);

      const studentsData = data.clubData.members;
      console.log(studentsData[0].clubs);

      const clubSelected = [];
      for (let i = 0; i < studentsData.length; i++) {
        let currentClub = studentsData[i].clubs.find((club) => club.club === data.clubData._id);
        // console.log(roleData);
        clubSelected.push({
          key: studentsData[i]._id,
          id: studentsData[i].snumber,
          name: studentsData[i].name,
          gender: studentsData[i].gender,
          joinDate: currentClub.joinDate,
          email: studentsData[i].email,
          role: currentClub.role,
        })
        setDataSource(clubSelected);
        setDisableSearch(false);
      }
    });
  };

  const searchReset = () => {
    form_search.resetFields();
    setDataSource();
    setDisableSearch(true);
  };

  //  ----------------------------------------------------------------

  // ------------------ TABLE MEMBERS ----------------------------------

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

  // -------- CRUD Functions ---------------
  // Search student by id
  const onSearch = (value) => {
    if (value !== "") {
      const result = sts.filter((student) => student.id === value);
      if (!result[0]) {
        console.log("Student not found");
      } 
      else {
        console.log(clubDisplay.clubData._id);
        console.log(result[0]);
        setStudentData(result);
        setDisableSubmit(false);
      }
    }
    else {
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

  // ---- Add new student input ----


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
  //  -------------------------------------------------------------

  //  -------------------------- DISPLAY ----------------------------------
  return (
    <div className="club-edit-container">
      <Row className="">
        {/* Area 1 */}
        <Col span={24}>
          <div className="club-edit-search">
            <Form
              form={form_search}
              name="search-club"
              onFinish={searchClub}
              size="medium"
            >
              <Form.Item
                name="clubID"
                label="Club Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Select Club name" allowClear style={{}}>
                  {clubs.map((club) => {
                    return (
                      <Option key={club._id} value={club._id}>
                        {club.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ marginRight: "10px" }}
                  type="primary"
                  htmlType="submit"
                >
                  Search
                </Button>
                <Button htmlType="button" onClick={searchReset}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        {/* Area 2 */}
        <Col span={24}>
          <div className="club-description">
            {clubDisplay && (
              <PageHeader
                title={clubDisplay.clubData.name}
                tags={
                  <Tag color="blue">{clubDisplay.clubData.clubCategory}</Tag>
                }
              >
                <Row>
                  <Statistic
                    title="President"
                    value={clubDisplay?.clubData.president.username}
                  />
                  <Statistic
                    title="Members"
                    value={clubDisplay.memberCount}
                    style={{
                      margin: "0 50px",
                    }}
                  />
                  <Statistic
                    title="Generated"
                    value={clubDisplay?.clubData.createDate}
                  />
                </Row>
              </PageHeader>
            )}
          </div>
        </Col>

        {/* Area 3 */}
        <Col span={24}>
          {/* search bar ( search student by id) */}
          <div className="add-container">
            <Title level={3}>Add new student to club</Title>

            <Search
              className="search-bar"
              placeholder="Input student ID"
              size="medium"
              onSearch={onSearch}
              enterButton
              disabled={disableSearch}
              required
            />

            <Title
              level={3}
              style={{
                margin: "0px",
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Student Information
            </Title>

            {/* student information*/}
            <Table
              bordered
              columns={columnStudentData}
              dataSource={studentData}
              size="small"
              pagination={false}
            />

            {/* select role and add student */}
            <Form
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

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: "10px" }}
                >
                  Add student
                </Button>

                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        {/* area 4 */}
        <Col span={24}>
          <div className="members-table">
            <Title
              level={3}
              style={{
                textAlign: "center",
                margin: "0px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Club Members
            </Title>

            <Table
              bordered
              columns={columns}
              dataSource={dataSource}
              onChange={onChange}
              pagination={{
                position: ["bottomRight"],
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
    
              <Select
                defaultValue={editingStudent?.role}
                style={{
                  width: "100%",
                }}
                onChange={(e) => {
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
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ClubEdit;
