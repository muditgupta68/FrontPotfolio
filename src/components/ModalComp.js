import React from "react";
import { Button, Modal } from "antd";

const ModalComp = ({
  open,
  handleOk,
  handleCancel,
  url,
  title,
  tag,
  description,
  buttonLoad,
}) => {
  return (
    <>
      <Modal
        open={open}
        title={`Type: ${tag}`}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="link"
            href={url}
            type="primary"
            loading={buttonLoad}
            onClick={handleOk}
          >
            Go to Link
          </Button>,
        ]}
      >
        <h1 className="mt-4">{title}</h1>
        <p className="mt-3">{description}</p>
      </Modal>
    </>
  );
};

export default ModalComp;
