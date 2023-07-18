import { React, useState } from "react";
import { Badge, Button, Card } from "antd";
import ModalComp from "./ModalComp";

const { Meta } = Card;

const WorkCard = ({
  img,
  heading,
  tag,
  link,
  title,
  description,
}) => {
  const [buttonLoad, setBtnLoad] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setBtnLoad(true);
    setTimeout(() => {
      setOpen(false);
      setBtnLoad(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  heading = heading.length > 100 ? heading.substring(0, 100) + "....." : heading;

  return (
    <div className="workCard">
      <Badge.Ribbon text={tag} color="#d8ae61s" className="ribbonFont">
        <Card
          style={{ width: "100%", margin: "50px 0px",background: 'rgb(255 244 222)' }}
          cover={<img className="cardImage" alt="work image" src={img} />}
        >
          <Meta title={title} description={heading} />
          <Button
            type="primary"
            onClick={showModal}
            className="cardBtn"
            style={{ width: "100%", marginTop: "20px"}}
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
