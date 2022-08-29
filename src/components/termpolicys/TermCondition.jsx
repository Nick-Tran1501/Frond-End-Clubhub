import React, { useState } from "react";
import { Button, Modal } from "antd";
import PrivacyText from "./PrivacyPolicy.txt";

const TermCondition = () => {
  const [modal2Visible, setModal2Visible] = useState(false);
  const [text, setText] = useState();

  fetch(PrivacyText)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });

  return (
    <>
      <Button type="primary" onClick={() => setModal2Visible(true)}>
        Term Condition
      </Button>
      <Modal
        title="Term Condition"
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
        style={{ height: "300px", overflowY: "auto" }}
      >
        {text}
      </Modal>
    </>
  );
};

export default TermCondition;
