import React from "react";
import { useState, useEffect, useMemo } from "react";
import "antd/dist/antd.css";
// import NavBar from "../../components/navbar/NavBars";
import "./ClubEdit.style.css";
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
import Title from "antd/lib/skeleton/Title";
import { getActiveClubData } from "./ClubAPI.js";

// ----------------------------------------------------------------
function ClubEdit() {
  // -------- Attributes --------------------------------
  const { Search } = Input;
  const { Option } = Select;
  const { Title } = Typography;

  // ---- search club ------

  // get every club data
  useEffect(() => {
    getActiveClubData().then((data) => setClubs(data));
  }, []);

  const [clubs, setClubs] = useState([]);

  // console.log(clubs);

  const searchClub = (values) => {
    // console.log(values);
    const newClub = clubs.filter((club) => club.name === values.clubName);
    // console.log(newClub[0]);
    // setClub(newClub[0]);
    setClubDisplay(
      <PageHeader
        title={newClub[0].name}
        tags={<Tag color="blue">{newClub[0].clubCategory}</Tag>}
      >
        <Row>
          <Statistic title="President" value={newClub[0].president.username} />
          <Statistic
            title="Members"
            value={newClub[0].members.length}
            style={{
              margin: "0 50px",
            }}
          />
          <Statistic title="Generated" value={newClub[0].created} />
        </Row>
      </PageHeader>
    );
    const studentsData = newClub[0].members;
    const clubSelected = [];
      for (let i = 0; i < studentsData.length; i++) {
        clubSelected.push({
          key: studentsData[i]._id,
          id: studentsData[i]._id,
          name: studentsData[i].name,
          gender: studentsData[i].gender,
          joinDate: "12/11/2021",
          email: studentsData[i].email,
          role: "Content Writer",
        });
    setDataSource(clubSelected);
  }
  }

  const searchReset = () => {
    form_search.resetFields();
    setClubDisplay(<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />);
  };

  const [clubDisplay, setClubDisplay] = useState(
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  );
  //  ----------------------------------------------------------------

  // ------------------ TABLE MEMBERS ----------------------------------
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
  // console.log(clubDisplay);

  // const [clubSelected, setClubSelected] = useState([]);

  // const studentsInClub = () => {
  //   const sampleData = [];
  //   if (clubSelected.length > 0) {
  //     for (let i = 0; i < clubSelected.length; i++) {
  //       sampleData.push({
  //         key: clubSelected[i]._id,
  //         id: clubSelected[i]._id,
  //         name: clubSelected[i].name,
  //         gender: clubSelected[i].gender,
  //         joinDate: "12/11/2021",
  //         email: clubSelected[i].email,
  //         role: "Content Writer",
  //       });
  //     }
  //     console.log("True");
  //   }
  //   else {
  //     console.log(clubSelected.length);
  //     console.log("False");
  //   }
  //   return sampleData;
  // }

  // const [studentsInClub, setStudentsInClub] = useState(getStudentInClub())

  // console.log(sampleData)

  const [dataSource, setDataSource] = useState([]);
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
  // search student by id
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

  // delete student in club members
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
  //  -------------------------------------------------------------

  return (
    <div className="">
      <Row className="club-edit-container">
        {/* area 1 */}
        <Col className="club-edit-search" span={24}>
          <Form
            form={form_search}
            name="search-club"
            onFinish={searchClub}
            size="medium"
            // style={{}}
          >
            <Form.Item
              name="clubName"
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
                    <Option key={club._id} value={club.name}>
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
        </Col>

        {/* area 2 */}
        <Col span={24}>{clubDisplay}</Col>

        {/* area 3 */}
        {/* Add new student  */}
        <Col className="add-container" span={24}>
          {/* search bar ( search student by id) */}
          <Title level={2} style={{ margin: "0 20px" }}>
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
        </Col>

        {/* area 4 */}
        <Col className="table-content" span={24}>
          {/* single student table */}

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
