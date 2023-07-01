import React from 'react'
import { Spin } from 'antd';
const Loading = () => {
  return (
    <>
    {/* <div className="loadingContainer marginTop24">
        <div className="load-man"></div>
    </div> */}
    <Spin className="loadingContainer pt-5 mt-5" size="large" />
    </>
  )
}

export default Loading