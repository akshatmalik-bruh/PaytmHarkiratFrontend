import React , {useState} from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
const Signin = () => {
  const navigate = useNavigate()
  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')
  return (
 <>
 <div className = "h-screen flex flex-col justify-center items-center " >
 <div className = "flex flex-col items-center justify-center h-fit bg-gray-400 w-fit p-10 rounded-2xl ">
 <Heading heading = "Signin"/>
 <Subheading subheading = "Please enter your credentials to sign in" />
    <div className='flex flex-col gap-4 mt-4' >
     <Input onChange={(e)=>{
        setEmailid(e.target.value)
     }} label = "Email" placholder = "johndoe@gmail.com" />
     <Input  onChange = {
        (e) => {
          setPassword(e.target.value) }
     }label = "Password" placeholder = "********" />
    <Button onClick = {
      async() =>{
        await axios.post('http://localhost:3000/api/v1/user/signin', {
          emailid: emailid,
          password: password
        }).then((response) => {
          localStorage.setItem('token', response.data.token)
          if(response.status === 200) {
            navigate("/dashboard")
          }
        }).catch((error) => {
          console.error(error)
        })
      }
    } text = "Signin"  />
      
    </div>
    </div>
  </div>  

 </>
  )
}

export default Signin