import React, { useState } from "react";
import { Button, Modal } from "antd";
import PrivacyForm from "./PrivacyForm";

const PrivacyPolicy = () => {
  const [modal2Visible, setModal2Visible] = useState(false);


  return (
    <>
      <Button type="primary" onClick={() => setModal2Visible(true)}>
        Privacy Policy
      </Button>
      <Modal
        title="Privacy Policy"
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
        style={{}}
      >
        <PrivacyForm/>
      </Modal>
    </>
  );
};

export default PrivacyPolicy;
