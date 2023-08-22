import React from 'react'
// HOC is a composition that takes a component as input ad returns a component
const applyStyles = (OriginalComponent) => {
  const NewComponent = (props) => {
    return (
      <div className='red-box'>
        <OriginalComponent {...props}/>
      </div>
    )
  }
  return NewComponent
}

export default applyStyles
