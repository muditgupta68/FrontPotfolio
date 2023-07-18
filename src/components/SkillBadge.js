import React from "react";
import { Tabs } from "antd";
import ToolPools from "./skillsets/ToolPools";
import SkillSetsTags from "./skillsets/SkillSetsTags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const SkillBadge = () => {
  return (
    <div className="qualityContainer">
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: (
              <span className="tabs">
                <FontAwesomeIcon icon={faCode} className={`mr-2 shadow-up`} />
                Skill Sets
              </span>
            ),
            key: "1",
            children: (
              <>
                <SkillSetsTags />
              </>
            ),
          },

          {
            label: (
              <span className="tabs">
                <FontAwesomeIcon icon={faLaptopCode} className={`mr-2 shadow-up`}/>
                Tools Pool
              </span>
            ),
            key: "3",
            children: (
              <>
                <ToolPools />
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default SkillBadge;
