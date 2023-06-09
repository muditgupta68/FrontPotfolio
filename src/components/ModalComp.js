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
          <Button className="return" key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="link"
            className="goTo"
            href={url}
            target="_blank"
            type="primary"
            loading={buttonLoad}
            onClick={handleOk}
          >
            Go to Link
          </Button>,
        ]}
      >
        <h2 className="mt-4">{title}</h2>
        <p className="mt-4">{description}</p>
      </Modal>
    </>
  );
};

export default ModalComp;
