import React, { useState } from "react";
import { Modal } from "antd";
import "./SignOut.css";

const SignOut = () => {
  // Set value of pop up a modal by using useState
  const [visible, setVisible] = useState(false);

  // Set value of loading after clicking "OK" button by using useState
  const [confirmLoading, setConfirmLoading] = useState(false);

  // Set value of rendering the content of the modal by using useState
  const [modalContent, setModalContent] = useState(
    "Do you really want to be signed out???"
  );

  //Function: Visible the Modal
  const showModal = () => {
    setVisible(true);
  };

  //Function: Handle the loading after clicking "OK" button => waiting 2s, both appear another text
  const handleOK = () => {
    setModalContent("You are about to be signed out after a few second");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  //Function: Handle the "Cancel" button
  const handleCancel = () => {
    setVisible(false);
  };

  //Render the Modal
  return (
    <div className="signOutModal">
      <div onClick={showModal}> Sign Out </div>
      <Modal
        className="signModal"
        title="Sign Out"
        visible={visible}
        onOk={handleOK}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered
      >
        <p> {modalContent} </p>
      </Modal>
    </div>
  );
};

export default SignOut;
