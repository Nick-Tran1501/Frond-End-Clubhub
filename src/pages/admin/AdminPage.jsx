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
  // Dropdown,
  // Space,
  Popconfirm,
  // message,
  Button,
  Select,
} from "antd";

// import icon
import {
  // DownOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

// ----------------------------------------------------------------








function AdminPage() {


  // -------- attributes --------------------------------
  const { Text, Link } = Typography;
  const { Search } = Input;
  const { Option } = Select;
  const onSearch = (value) => console.log(value);
  
  // select options
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    // setUpdates()
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      // Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };


  // table data
  const [data, setData] = useState([
    {
      key: "0",
      name: "Edward King 0",
      age: "32",
      gender: "Male",
      joinDate: "12/11/2021",
      email: "student@gmail.com",
      role: "Content Writer",
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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    // console.log(data[1].role);
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

  // const [updates, setUpdates] = useState([]);
  const updateList = (a) =>{
    if(a != 0) {
      console.log(a)
    }
    else {
       console.log("Not Things Changes")
      }
    
  }
    
  //  Define table columns

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
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
      dataIndex: "Role",
      width: "20%",
      render: (_, record) => (

        // Test new select
        <Select
          defaultValue={data[record.key].role}
          style={{
            width: "100%",
          }}
          onChange={handleChange}
          
        >
          <Option value="President">President</Option>
          <Option value="Vice President"> Vice President</Option>
          <Option value="Content Writer"> Content Writer</Option>
          <Option value="Member">Member</Option>
        </Select>
      ),
    },
    Table.SELECTION_COLUMN,
    // {
    //   title: 'Remove',
    //   dataIndex: 'Remove',
    //   key: 'Remove',
    // },
    // {
    //   title: "operation",
    //   dataIndex: "operation",
    //   width: "10%",
    //   render: (_, record) =>
    //     data.length >= 1 ? (
    //       <Popconfirm
    //         title="Are you sure to remove this person ?"
    //         onConfirm={() => handleDelete(record.key)}
    //       >
    //         <Button type="primary" danger>
    //             Remove
    //         </Button>

    //       </Popconfirm>
    //     ) : null,
    // },
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
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            onChange={onChange}
          />

          <Button
            type="primary"
            icon={<CheckOutlined />}
            style={{
              backgroundColor: "#95de64",
              color: "Black",
            }}
            onClick={() => updateList(selectedRowKeys)}
          >
            Save change
          </Button>

          <Button
            type="danger"
            icon={<CloseOutlined />}
            style={
              {
                // backgroundColor: "#95de64",
                // color: "black"
              }
            }
            // call back current data
            onClick={() => setData()}
          >
            Reset change
          </Button>
        </Col>

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
