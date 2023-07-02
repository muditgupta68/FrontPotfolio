import React from 'react'
import { Progress } from 'antd';

const ProgressBar = ({project}) => {
  // console.log(project)
  return (
    <div className='mt-3 mr-3'>
        <Progress className='progress_text' percent={project?.BI} trailColor="#80808033" strokeColor="#6ab5b9" style={{color:'white'}} status="active" />
        <p className='progress_text blue'>Power BI</p>
        <Progress className='progress_text' percent={project?.Analytics} trailColor="#80808033" strokeColor="#fd7590" style={{color:'white'}} status="active" />
        <p className='progress_text pink'>Data Analytics</p>
        <Progress className='progress_text' percent={project?.DS} trailColor="#80808033" strokeColor="#df4848" style={{color:'white'}} status="active" />
        <p className='progress_text red'>Data Science</p>
        <Progress className='progress_text' percent={project?.Web} trailColor="#80808033" strokeColor="#c17ceb" style={{color:'white'}} status="active" />
        <p className='progress_text purple'>Web Development</p>
    </div>
  )
}

export default ProgressBar