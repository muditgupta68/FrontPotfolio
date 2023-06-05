import { React, useState } from "react";
import { Badge, Button, Card, Space } from "antd";
import ModalComp from "./ModalComp";

const { Meta } = Card;

const WorkCard = ({ img, heading, tag, link, title, description }) => {
  const [buttonLoad, setBtnLoad] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setBtnLoad(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="workCard">
      <Badge.Ribbon text={tag} color="yellow" className="ribbonFont">
        <Card
          style={{ width: "100%", margin: "50px 0px" }}
          cover={<img alt="work image" src={img} />}
        >
          <Meta title={title} description={heading} />
          <Button
            type="primary"
            onClick={showModal}
            style={{ width: "100%", marginTop: "20px" }}
          >
            View for more
          </Button>
          <ModalComp
            open={open}
            handleOk={handleOk}
            handleCancel={handleCancel}
            url={link}
            tag={tag}
            title={title}
            description={description}
            buttonLoad={buttonLoad}
          />
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default WorkCard;
