import React, { useEffect, useState } from "react";
import axios from "axios";

const Project = () => {
  const [projectData, setProjects] = useState([]);

  const fetchProjectData = async () => {
    const projectData = await axios.get(
      "https://odd-bass-yoke.cyclic.app/api/v1/project"
    );
    console.log(projectData?.data?.projects)
    return projectData?.data?.projects;
  };

  useEffect(() => {
    const fetchedData = fetchProjectData();
    setProjects(fetchedData);
  }, []);

  return <div>
    {projectData?(<h1>Recieved</h1>):(<h1>RNot ecieved</h1>)}
  </div>;
};

export default Project;
