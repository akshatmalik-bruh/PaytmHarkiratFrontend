import React from 'react'

const Subheading = ({subheading,children}) => {
  return (
    <>
    <div className='flex gap-2 justify-center'>
         <h2 className = "text-gray-600 ">{subheading}</h2>
    {children}
    </div>
      </>
 
  )
}

export default Subheading