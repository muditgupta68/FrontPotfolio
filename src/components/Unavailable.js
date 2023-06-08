import React from 'react'
import dataError1 from "../images/errorIcon.png"

const Unavailable = ({msg}) => {
  return (
    <div className='error_container'>
        <img className='center' src={dataError1} alt="error" />
        <h1 className='mt-3 d-flex justify-content-center errorText'>{msg}</h1>
    </div>
  )
}

export default Unavailable