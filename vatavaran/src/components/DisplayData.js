import React from 'react'

const DisplayData = ({ data }) => {
  const date = new Date();

  return (
    <>
    <p>{data.name}{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
        <p>{data.main.temp}</p>
        <p>{data.main.humidity}</p>
        <p>{data.weather[0].main}</p>
    </>
  )
}

export default DisplayData