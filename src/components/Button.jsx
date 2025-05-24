import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <button onClick = {onClick} className = "bg-black w-fit p-4 rounded-3xl text-white ">{text}</button>
  )
}

export default Button