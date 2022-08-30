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

// ----------------------------------------------------------------

function AdminPage() {
  // -------- attributes --------------------------------
  //   const { Text, Link } = Typography;
  //   const { Search } = Input;
  //   const { Option } = Select;
  //   const onSearch = (value) => console.log(value);

  //   // select options
  //   const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  //   const onSelectChange = (newSelectedRowKeys) => {
  //     console.log("selectedRowKeys changed: ", selectedRowKeys);
  //     setSelectedRowKeys(newSelectedRowKeys);
  //   };

  //   const rowSelection = {
  //     selectedRowKeys,
  //     onChange: onSelectChange,
  //     selections: [
  //       Table.SELECTION_ALL,
  //       // Table.SELECTION_INVERT,
  //       Table.SELECTION_NONE,
  //       {
  //         key: "odd",
  //         text: "Select Odd Row",
  //         onSelect: (changableRowKeys) => {
  //           let newSelectedRowKeys = [];
  //           newSelectedRowKeys = changableRowKeys.filter((_, index) => {
  //             if (index % 2 !== 0) {
  //               return false;
  //             }

  //             return true;
  //           });
  //           setSelectedRowKeys(newSelectedRowKeys);
  //         },
  //       },
  //       {
  //         key: "even",
  //         text: "Select Even Row",
  //         onSelect: (changableRowKeys) => {
  //           let newSelectedRowKeys = [];
  //           newSelectedRowKeys = changableRowKeys.filter((_, index) => {
  //             if (index % 2 !== 0) {
  //               return true;
  //             }

  //             return false;
  //           });
  //           setSelectedRowKeys(newSelectedRowKeys);
  //         },
  //       },
  //     ],
  //   };

  //   //  ------- Functions --------------------------------

  //   const handleChange = (value) => {
  //     console.log(`selected ${value}`);
  //     // console.log(value.target);
  //   };

  //   const onChange = (pagination, filters, sorter, extra) => {
  //     console.log(
  //       "params --- ",
  //       "pag:",
  //       pagination,
  //       "filters: ",
  //       filters,
  //       "sorter: ",
  //       sorter,
  //       "extra: ",
  //       extra
  //     );
  //   };

  //   const updateList = (a) => {
  //     if (a != 0) {
  //       console.log(a);
  //     } else {
  //       console.log("Not Things Changes");
  //     }
  //   };

  //   // table data
  //   const [data, setData] = useState([
  //     {
  //       key: "0",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "Content Writer",
  //     },
  //     {
  //       key: "1",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "2",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "3",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "4",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "5",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "6",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "7",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "8",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "9",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "10",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "11",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //     {
  //       key: "12",
  //       name: "Edward King 0",
  //       age: "32",
  //       gender: "Male",
  //       joinDate: "12/11/2021",
  //       email: "student@gmail.com",
  //       role: "President",
  //     },
  //   ]);

  //   const columns = [
  //     {
  //       title: "Name",
  //       dataIndex: "name",
  //       width: "20%",
  //     },
  //     {
  //       title: "Age",
  //       dataIndex: "age",
  //       width: "5%",
  //     },
  //     {
  //       title: "Gender",
  //       dataIndex: "gender",
  //       width: "5%",
  //     },
  //     {
  //       title: "Join Date",
  //       dataIndex: "joinDate",
  //       width: "10%",
  //     },

  //     {
  //       title: "Email",
  //       dataIndex: "email",
  //       width: "30%",
  //     },
  //     {
  //       title: "Role",
  //       dataIndex: "Role",
  //       width: "20%",
  //       render: (_, record) => (
  //         // Test new select
  //         <Select
  //           defaultValue={data[record.key].role}
  //           style={{
  //             width: "100%",
  //           }}
  //           onChange={handleChange}
  //         >
  //           <Option value="President">President</Option>
  //           <Option value="Vice President"> Vice President</Option>
  //           <Option value="Content Writer"> Content Writer</Option>
  //           <Option value="Member"> Member</Option>
  //         </Select>
  //       ),
  //     },
  //     Table.SELECTION_COLUMN,
  //     // {
  //     //   title: 'Remove',
  //     //   dataIndex: 'Remove',
  //     //   key: 'Remove',
  //     // },
  //     // {
  //     //   title: "operation",
  //     //   dataIndex: "operation",
  //     //   width: "10%",
  //     //   render: (_, record) =>
  //     //     data.length >= 1 ? (
  //     //       <Popconfirm
  //     //         title="Are you sure to remove this person ?"
  //     //         onConfirm={() => handleDelete(record.key)}
  //     //       >
  //     //         <Button type="primary" danger>
  //     //             Remove
  //     //         </Button>

  //     //       </Popconfirm>
  //     //     ) : null,
  //     // },
  //   ];

  //   return (
  //     <div className="container">
  //       {/* header title */}
  //       <Row className="title-container">
  //         <Col className="title-content" span={24}>
  //           <h1> Admin Page </h1>
  //         </Col>
  //       </Row>
  //       {/* header search bar */}
  //       <Row className="header-container">
  //         <Col className="header-body" span={6}>
  //           <Link href="" target="_blank">
  //             Back To Home Page (logo)
  //           </Link>
  //         </Col>
  //         <Col className="header-body" span={18}>
  //           <Search
  //             className="search-bar"
  //             placeholder="Input Club Name"
  //             size="large"
  //             onSearch={onSearch}
  //             enterButton
  //           />
  //         </Col>
  //       </Row>

  //       {/* body */}
  //       <Row className="club-container">
  //         <Col className="member-table" span={24}>
  //           <h2> Club members table </h2>
  //           <p> Club Name: Sample Club </p>
  //           <p>Total members : Number</p>

  //           {/* render back */}
  //           <Table
  //             bordered
  //             rowSelection={rowSelection}
  //             columns={columns}
  //             dataSource={data}
  //             onChange={onChange}
  //             pagination={{
  //               position: ["bottomCenter"],
  //             }}
  //           />
  // {/*
  //           <Button
  //             type="primary"
  //             icon={<CheckOutlined />}
  //             style={{
  //               backgroundColor: "#95de64",
  //               color: "Black",
  //             }}
  //             onClick={() => updateList(selectedRowKeys)}
  //           >
  //             Save change
  //           </Button> */}

  //           {/* <Button type="danger" icon={<CloseOutlined />} onClick={resetChange}>
  //             Reset Change
  //           </Button> */}
  //         </Col>

  //         <Col className="request-title" span={24}>
  //           <h2> Create new club page request</h2>
  //         </Col>
  //         <Col className="request-table" span={24}>
  //           <h2> Request list </h2>
  //         </Col>
  //       </Row>

  // </div>
  // );

  // new Table
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      address: "John Address",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      address: "David Address",
    },
    {
      id: 3,
      name: "James",
      email: "james@gmail.com",
      address: "James Address",
    },
    {
      id: 4,
      name: "Sam",
      email: "sam@gmail.com",
      address: "Sam Address",
    },
  ]);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
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

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
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

  return (
    <div className="Container">
        {/* <Button onClick={onAddStudent}> Add a new Student</Button> */}
        <Table columns={columns} dataSource={dataSource}></Table>

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
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>

    </div>
  );
}

export default AdminPage;
