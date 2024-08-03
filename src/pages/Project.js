import React, { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";
import WorkCard from "../components/WorkCard";
import { Pagination, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Loading from "./Loading";
import { Helmet } from "react-helmet";
import Unavailable from "./../components/Unavailable";
import ScrollToTop from "../components/ScrollToTop";
import * as Scroll from "react-scroll";

const { Option } = Select;
let scroll = Scroll.animateScroll;

const Project = () => {
  const [projectData, setProjects] = useState([]);
  const [tagData, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [toSearch, setToSearch] = useState("");
  const [currPage, setPage] = useState(1);
  const [totalData, setTotal] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isLengthError, setLengthError] = useState(false);

  const handlePage = (page) => {
    setPage(page);
    scroll.scrollTo(130);
  };

  const fetchProjectData = async () => {
    try {
      setIsLoading(true);
      const projectData = await axios.get(
        `https://muditserver.netlify.app/.netlify/functions/api/v1/project?search=${search}&size=${100}`
      );
      const dataApi = projectData?.data?.projects;

      if (dataApi.length === 0) {
        setLengthError(true);
      }

      const TopData = dataApi.filter((data) => {
        return data.top === true;
      });

      const restData = dataApi.filter((data) => {
        return data.top !== true;
      });

      const finalData = TopData.concat(restData);

      //changes

      const Per_page = 6;
      const offset = (currPage - 1) * Per_page;

      const orderedData = finalData.slice(offset, offset + Per_page);
      // const pageCount = Math.ceil(finalData.length / Per_page);
      // console.log(orderedData)

      const totalData = Number(projectData?.data?.totalValues);
      setTotal(totalData);
      setProjects(orderedData);

      setIsLoading(false);

      return projectData?.data?.projects;
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  const fetchApiForTags = async () => {
    const apiCall = await axios.get(
      `https://muditserver.netlify.app/.netlify/functions/api/v1/project`
    );
    const dataApi = apiCall?.data?.projects;

    // console.log(dataApi)

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
  }, []);

  const handleChangeValue = (value) => {
    let formatVal = value.join("%");
    setToSearch(formatVal);
  };

  const submitButton = () => {
    if (toSearch === "") {
      setToSearch("All");
    }
    const check = toSearch.includes("All");
    if (check) {
      setSearch("");
      setPage(1);
    } else {
      setSearch(toSearch);
      setPage(1);
    }
  };

  return (
    <div className="basicTemplate">
      <Helmet>
        <title>My Projects</title>
      </Helmet>
      <div className="templateBox">
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
            placeholder="Select the tag"
            // defaultValue={"All"}
            onChange={handleChangeValue}
            optionLabelProp="label"
          >
            <Option value="All" label="All"></Option>
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
          <div>
            <Button
              shape="rounded"
              icon={<SearchOutlined />}
              className="ml-3 mt-2 goTo"
              style={{ padding: "0px 27px 10px 10px", fontSize: "14px" }}
              onClick={submitButton}
            />
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : projectData ? (
          <>
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
              {isError && (
                <>
                  <Unavailable msg="Sorry, Server is Down Currently! Please try again later" />
                </>
              )}
              {isLengthError && (
                <>
                  <Unavailable msg="no data currently" />
                </>
              )}
              {isError ? (
                <></>
              ) : (
                <Pagination
                  className="pagination"
                  current={currPage}
                  onChange={handlePage}
                  total={totalData}
                  responsive={true}
                  pageSize={6}
                />
              )}
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Project;
