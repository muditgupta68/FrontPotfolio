import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";
import WorkCard from "../components/WorkCard";
import { Pagination } from "antd";

const { Option } = Select;

const Project = () => {
  const [projectData, setProjects] = useState([]);
  const [tagData, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [currPage, setPage] = useState(1);
  const [totalData, setTotal] = useState(0);

  const handlePage = (page) => {
    setPage(page);
  };

  const fetchProjectData = async () => {
    const projectData = await axios.get(
      `https://odd-bass-yoke.cyclic.app/api/v1/project?page=${currPage}&search=${search}`
    );
    const dataApi = projectData?.data?.projects;
    const totalData = Number(6 * projectData?.data?.totalPages);
    setTotal(totalData);
    setProjects(dataApi);

    return projectData?.data?.projects;
  };

  const fetchApiForTags = async () => {
    const apiCall = await axios.get(
      `https://odd-bass-yoke.cyclic.app/api/v1/project?page=${currPage}`
    );
    const dataApi = apiCall?.data?.projects;

    const tags = dataApi?.map((data) => {
      return data?.tag;
    });

    const newTagSet = new Set(tags);

    const tagsArray = Array.from(newTagSet);

    const finalTag = tagsArray?.map((tag) => {
      return { tag: tag, id: Date.now() + Math.random() };
    });

    setTags(finalTag);
  };

  useEffect(() => {
    fetchProjectData();
  }, [search, currPage]);

  useEffect(() => {
    fetchApiForTags();
  }, [currPage]);

  const handleChangeValue = (value) => {
    let formatVal = value.join("%");
    setSearch(formatVal);
  };

  return (
    <div className="basicTemplate">
      <div className="templateBox">
        {projectData ? (
          <>
            <div className="heading">
              <h1>Project</h1>
            </div>
            <div className="mt-5 d-flex justify-content-lg-end">
              <Select
                mode="multiple"
                style={{
                  width: "30%",
                }}
                className="filter"
                placeholder="Filter"
                onChange={handleChangeValue}
                optionLabelProp="label"
              >
                {tagData?.map((data) => {
                  return (
                    <Option
                      value={data?.tag}
                      label={data?.tag}
                      key={data?.id}
                    ></Option>
                  );
                })}
              </Select>
            </div>
            <div className="mt-4">
              <div className="parent">
                {projectData?.map((data) => {
                  return (
                    <WorkCard
                      key={data?._id}
                      img={data?.image}
                      title={data?.title}
                      heading={data?.Heading}
                      link={data?.Link}
                      tag={data?.tag}
                      description={data?.description}
                    />
                  );
                })}
              </div>
              <Pagination
                className="pagination"
                current={currPage}
                onChange={handlePage}
                total={totalData}
                responsive={true}
                pageSize={6}
              />
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Project;
