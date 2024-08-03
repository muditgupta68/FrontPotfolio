import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import WorkCard from "../components/WorkCard";
import Loading from "./Loading";
import Unavailable from "../components/Unavailable";
import { Helmet } from "react-helmet";
import ScrollToTop from "../components/ScrollToTop";
import * as Scroll from "react-scroll";

let scroll = Scroll.animateScroll;

const Blog = () => {
  const [blogData, setBlogs] = useState([]);
  const [currPage, setPage] = useState(1);
  const [totalData, setTotal] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isLengthError, setLengthError] = useState(false);

  const handlePage = (page) => {
    scroll.scrollTo(130);
    setPage(page);
  };

  const fetchBlogApi = async () => {
    try {
      setIsLoading(true);
      const apiCall = await axios.get(
        `https://muditserver.netlify.app/.netlify/functions/api/v1/blog?page=${currPage}`
      );

      const dataApi = apiCall?.data?.projects;

      if (dataApi.length === 0) {
        setLengthError(true);
      }

      const TopData = dataApi.filter((data)=>{
        return data.top===true
      })

      const restData = dataApi.filter((data)=>{
        return data.top!==true
      })

      const finalData = TopData.concat(restData);
      
      // console.log(finalData)

      const totalData = Number(6 * apiCall?.data?.totalPages);
      // console.log(dataApi);
      setTotal(totalData);
      setBlogs(finalData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchBlogApi();
  }, [currPage]);

  return (
    <div className="basicTemplate">
      <Helmet>
        <title>My Blogs</title>
      </Helmet>
      <div className="templateBox">
        {isLoading ? (
          <Loading />
        ) : blogData ? (
          <>
            <div className="heading">
              <h1>Blogs</h1>
            </div>
            <div className="mt-4">
              <div className="parent">
                {blogData?.map((data) => {
                  return (
                    <WorkCard
                      key={data?._id}
                      img={data?.image}
                      title={data?.Title}
                      heading={data?.description}
                      link={data?.link}
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

export default Blog;
