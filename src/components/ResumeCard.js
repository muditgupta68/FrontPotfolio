import React from 'react'

const ResumeCard = ({ infoHead, data, infoFoot }) => {
  return (
    <div className="d-flex align-items-center mt-2 border_data shadow-up">
      <div className="data">
        <p className="infoHead mt-2">{infoHead}</p>
        <p className="data_val mt-2 mb-0">{data}</p>
        <p className="infoHead mt-1">{infoFoot}</p>
      </div>
    </div>
  )
}

export default ResumeCard