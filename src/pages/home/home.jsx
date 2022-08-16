import React from "react";
import Navbars from "../../components/navbar/navbar";
import Sidebars from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbars from "../../components/rightbar/rightbar";
import Footer from "../../components/footer/footer";
import "./home.css";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Content, Sider } = Layout;

function home() {
  return (
    <div className="homeContainer">
      <Navbars/>
      <Sidebars/>
      <Feed/>
      <Rightbars/>
    </div>
  );
}

export default home;
