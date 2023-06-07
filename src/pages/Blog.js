import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import WorkCard from "../components/WorkCard";

const Blog = () => {
  const [blogData, setBlogs] = useState([]);
  const [currPage, setPage] = useState(1);
  const [totalData, setTotal] = useState(0);

  const handlePage = (page) => {
    setPage(page);
  };

  const fetchBlogApi = async () => {
    const apiCall = await axios.get(
      `https://odd-bass-yoke.cyclic.app/api/v1/blog?page=${currPage}`
    );

    const dataApi = apiCall?.data?.projects;
    const totalData = Number(6 * apiCall?.data?.totalPages);
    console.log(dataApi);
    setTotal(totalData);
    setBlogs(dataApi);
  };

  useEffect(() => {
    fetchBlogApi();
  }, [currPage]);

  return (
    <div className="basicTemplate">
      <div className="templateBox">
        {blogData ? (
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

export default Blog;
