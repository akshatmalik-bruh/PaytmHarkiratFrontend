import React from 'react'
import Heading from './Heading'

const Appbar = () => {
  return (
    <>
    <nav className= "flex justify-between w-full items-center p-3 rounded-b-2xl bg-gray-500">
        <Heading heading = "Paytm" />
        <div className = "flex gap-3">
           <Heading heading = "Hello" />
           <Heading heading = "User" />
        </div>
    </nav>
    </>
  )
}

export default Appbar