import { React, useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./UserEdit.scss";
import "./UserAPI.js";

//  antd import
import { Empty, Button, Result, Row, Col, Typography, Table ,Modal } from "antd";

import { SmileOutlined, DeleteOutlined } from "@ant-design/icons";
import { getUsers } from "./UserAPI.js";

function UserEdit() {
  // attribute
  const { Title, Text } = Typography;

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
      console.log(data);
      // setUsers(users);
      // const sampleData = [];
      const users = [];
      for (let i = 0; i < data.length; i++) {
        users.push({
          key: data[i]._id,
          id: data[i].snumber,
          name: data[i].name,
          gender: data[i].gender,
          birthday: data[i].dob,
          email: data[i].email,
          phone: data[i].phone,
        });
      }
      setTableData(users);
    })
  },[]);



  //  --- table structure ---
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
      title: "Birthday",
      dataIndex: "birthday",
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "20%",
    },
    {
      title: "Remove",
      width: "2%",
      render: (record) => {
        return (
          <>
            {/* <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            /> */}
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", margin: "auto" }}
            />
          </>
        );
      },
    },
  ];

  // function
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setTableData((pre) => {
          // console.log(record.id);
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  // ------------------------------------------------
  return (
    <div className="user-edit-container">
      <Row>
        {/* Area 1 */}
        <Col span={24}>

          <div className="title-user-edit">
            <Title level={3}> Total Users </Title>
          </div>
          <div className="user-edit-table">
            {/* <Title level={3}>Table </Title> */}

            {tableData.length > 0 && (
              <Table
                bordered
                columns={columns}
                dataSource={tableData}
                pagination={{
                  position: ["bottomRight"],
                }}
              />
            )}
            {tableData.length < 1 && (
              <Result
                style={{
                  backgroundColor: "white",
                  height: "70vh",
                }}
                icon={<SmileOutlined />}
                title="Users can not be found !!"
                // extra={<Button type="primary">Next</Button>}
              />
            )}
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default UserEdit;
