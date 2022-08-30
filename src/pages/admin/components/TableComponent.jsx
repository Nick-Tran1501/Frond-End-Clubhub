
import React from "react";
import { useState, useEffect ,useMemo } from "react";
import "antd/dist/antd.css";
// import NavBar from "../../components/navbar/NavBars";
// import "./Admin.style.css";

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
} from "antd";

// import icon
import {
  // DownOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";





const TableComponent = ({rowSelection,columns,data,onChange}) => {


  return (
        <div
            style={{
                width: "100%",
            }}
        >
        <Table
            bordered
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            onChange={onChange}
            pagination={{
              position: ["bottomCenter"], 
            }}
        />

        </div>
  





  );
}



export default TableComponent;