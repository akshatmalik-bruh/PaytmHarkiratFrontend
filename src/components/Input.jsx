import React from 'react'

const Input = ({label,placeholder,type = "text",onChange}) => {
  return (
    <>
     <h1 className = "text-s font-bold text-center ">
        {label}
    </h1>
    <input onChange = {onChange} type= {type} placeholder={placeholder} className = "border-2 border-black w-full rounded-2xl p-3 text-xs"/>
    </>
   

  )
}

export default Input