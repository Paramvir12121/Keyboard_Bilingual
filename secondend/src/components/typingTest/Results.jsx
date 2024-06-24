import React from 'react'

const Results = ({className="", errors, total, accuracyPercentage}) => {
  return (
    <>
        <div class="column mb-3 text-center">
      <div class="col-4">Error: {errors}</div>
      <div class="col-4">Accuracy: {accuracyPercentage}%</div>
      <div class="col-4">Total: {total}</div>
    </div>
    </>
  )
}

export default Results