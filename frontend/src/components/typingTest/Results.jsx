import React from 'react'

const Results = ({className="", errors, total, accuracyPercentage}) => {
  return (
    <>
        <div className="row mb-3 text-center">
      <div className="col-4">Error: {errors}</div>
      <div className="col-4">Accuracy: {accuracyPercentage}%</div>
      <div className="col-4">Total: {total}</div>
    </div>
    </>
  )
}

export default Results