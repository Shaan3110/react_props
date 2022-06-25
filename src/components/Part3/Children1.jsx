import React from 'react'

const Children1 = ({toogle}) => {
  
  return (
    <div className="section1">
        <h1>Control Text Visibility</h1>
        <button onClick={toogle}>Toggle</button>
    </div>
  )
}

export default Children1