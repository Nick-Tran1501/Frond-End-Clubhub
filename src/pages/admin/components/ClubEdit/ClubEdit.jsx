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
  Form,
  Button,
  Select,
  Modal,
  notification,
} from "antd";

// import icon
import {
  EditOutlined,
  DeleteOutlined,
  TeamOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
// import Title from "antd/lib/skeleton/Title";

import {
  addStudentToClub,
  getActiveClubData,
  getClubID,
  getStudent,
  removeUserFromClub,
  updateRole,
} from "./ClubAPI.js";

function ClubEdit() {
  // -------- Attributes --------------------------------
  const { Search } = Input;
  const { Option } = Select;
  const { Title } = Typography;

  const [clubs, setClubs] = useState([]);
  const [clubDisplay, setClubDisplay] = useState();

  // --- club's students data table -----
  const [dataSource, setDataSource] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [disableSearch, setDisableSearch] = useState(true);

  // **** single student attribute ****
  const [studentData, setStudentData] = useState([]);
  // const [studentDisplay, setStudentDisplay] = useState();
  // **************************************

  const [form] = Form.useForm();
  const [form_search] = Form.useForm();

  //  ******** Notification / type: {success, info, warning, error} *******
  const openNotificationWithIcon = (type, content) => {
    notification[type]({
      message: "Notification Title",
      description: content,
    });
  };

  // ****************************************************************

  // ---- search club ------

  useEffect(() => {
    getActiveClubData().then((data) => setClubs(data));
  }, []);

  const searchClub = (value) => {
    getClubID(value.clubID).then((data) => {
      setClubDisplay(data);
      const studentsData = data.clubData.members;
      const clubSelected = [];
      for (let i = 0; i < studentsData.length; i++) {
        let currentClub = studentsData[i].clubs.find(
          (club) => club.club === data.clubData._id
        );
        clubSelected.push({
          key: studentsData[i]._id,
          id: studentsData[i].snumber,
          name: studentsData[i].name,
          gender: studentsData[i].gender,
          joinDate: currentClub.joinDate.slice(0, 10),
          email: studentsData[i].email,
          role: currentClub.role,
        });
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

  // club members table column
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
  // -----------------------------------
  // -------- CRUD Functions ---------------
  // Search student by id

  const onSearch = (value) => {
    if (value !== "") {
      const cID = clubDisplay.clubData._id;
      const checkAppearance = dataSource.filter(
        (student) => student.id === value
      );
      console.log(checkAppearance);
      if (checkAppearance.length > 0) {
        return openNotificationWithIcon(
          "error",
          `Student with ID: ${value} already in club`
        );
      }

      getStudent(value, cID).then((data) => {
        if (!data) {
          return openNotificationWithIcon(
            "error",
            `Cannot found student with ID: ${value}`
          );
        }
        const newStudent = {
          key: data._id,
          id: data.snumber,
          name: data.name,
          gender: data.gender,
          email: data.email,
        };
        setStudentData([newStudent]);
        setDisableSubmit(false);
      });
    } else {
      return openNotificationWithIcon(
        "warning",
        `Please input student ID start with S`
      );
    }
  };

  const onAddStudent = (studentData) => {
    const student = studentData[0];
    const clubId = clubDisplay.clubData._id;
    const studentId = student.key;
    const role = student.role;
    // console.log(dataSource);
    const checkAppearance = dataSource.filter(
      (student) => student.key === studentId
    );
    if (checkAppearance.length > 0) {
      return openNotificationWithIcon(
        "error",
        `Student with ID: ${student.id} is already in club`
      );
    }
    addStudentToClub(clubId, studentId, role);
    setDataSource((pre) => [...pre, student]);
    return openNotificationWithIcon(
      "success",
      `Add student id ${student.id} to club !`
    );
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        const userId = record.key;
        const clubId = clubDisplay.clubData._id;
        removeUserFromClub(userId, clubId);
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
        openNotificationWithIcon(
          "success",
          `Remove student id ${record.id} from club !`
        );
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

  // ---- Add new student input ----å

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

  const onFinish = (values) => {
    if (studentData[0] !== "") {
      studentData[0].role = values.Role;
      studentData[0].joinDate = new Date(Date.now())
        .toLocaleString("en-GB", { timeZone: "Asia/Ho_Chi_Minh" })
        .slice(0, 10);
      onAddStudent(studentData);
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
                    value={clubDisplay?.clubData.createDate.slice(0, 10)}
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
              pagination={{
                position: ["bottomRight"],
              }}
            />
            <Modal
              title="Edit Student Role"
              visible={isEditing}
              okText="Save"
              onCancel={() => {
                resetEditing();
              }}
              onOk={() => {
                const clubId = clubDisplay.clubData._id;
                const userId = editingStudent.key;
                const role = editingStudent.role;
                updateRole(clubId, userId, role)
                .then((status) => {
                  console.log(status)
                  if (status === 200) {
                    openNotificationWithIcon(
                      "success",
                      `Student ID: ${editingStudent.id}'s role was updated to ${role}`
                    )
                    setDataSource((pre) => {
                      return pre.map((student) => {
                        if (student.id === editingStudent.id) {
                          return editingStudent;
                        } else {
                          return student;
                        }
                      })
                    })
                  }
                  if (status === 400) {
                    openNotificationWithIcon(
                      "error",
                      `This club already have a president, please try again`
                    )
                  }
                  if (status === 401) {
                    openNotificationWithIcon(
                      "error",
                      `This student has already been president of another club`
                    )
                  }
                })
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
