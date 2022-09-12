import { React, useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./UserEdit.scss";
import "./UserAPI.js";

//  antd import
import {
  Empty,
  Button,
  Result,
  Row,
  Col,
  Typography,
  Table,
  Modal,
  notification,
} from "antd";

import { SmileOutlined, DeleteOutlined } from "@ant-design/icons";
import { getUsers, deleteStudent } from "./UserAPI.js";

function UserEdit() {
  // attribute
  const { Title, Text } = Typography;
  //  ******** Notification / type: {success, info, warning, error} *******
  const openNotificationWithIcon = (type, content) => {
    notification[type]({
      message: "Notification Title",
      description: content,
    });
  };

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
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
    });
  }, []);

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
      responsive: ['lg'],
      width: "10%",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      responsive: ['lg'],
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      responsive: ['md'],
      width: "20%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      responsive: ['lg'],
      width: "20%",
    },
    {
      title: "Remove",
      width: "5%",
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
        deleteStudent(record.key).then((status) => {
          // console.log(status);
          if (status === 200) {
            openNotificationWithIcon(
              "success",
              `Student ID: ${record.id} is delete of system`
            )
          }
        });
        setTableData((pre) => {
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
