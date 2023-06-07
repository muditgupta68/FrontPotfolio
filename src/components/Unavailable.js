import React from 'react'
import dataError from "../images/error.jpg"

const Unavailable = () => {
  return (
    <div>
        <h1 className='mt-5 d-flex justify-content-center'>Sorry, Server is Down Currently!!</h1>
        <img className='responsiveImage center mt-3' src={dataError} alt="error" />
    </div>
  )
}

export default Unavailable