import React , {useState } from 'react'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Button from '../components/Button'
import Subheading from '../components/Subheading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className = "flex flex-col items-center justify-center h-fit bg-gray-400 w-fit m-auto p-10 rounded-2xl ">
    <Heading heading = "Signup"/>
     <Subheading subheading = "Enter your information to create an account" />
     <Input onChange = {(e) => {
      setFirstName(e.target.value)
     }} label = "First Name" placeholder = "John" />
     <Input onChange = {
      (e) => {
        setLastName(e.target.value)
     } } label = "Last Name" placeholder = "Doe" />
      <Input  onChange = {
        (e) => {
          setEmailid(e.target.value)
      } }label = "Email" placeholder = "Johndoe@gmail.com "/>
      <Input onChange = {
        (e) => {
          setPassword(e.target.value)
        }
      }label = "Password" placeholder = "********" />
      <div className = "mt-5 flex items-center gap-2">
      <Button text = "Create Account" onClick = {
        async() => {
          const response =await axios.post('http://localhost:3000/api/v1/user/signup', {
            firstname: firstName,
            lastname: lastName,
            emailid: emailid,
            password: password
          })
          if(response.status === 200) {
            navigate('/signin')
          }

        }
      } />
      <Subheading subheading = "Already have an account?">
        <Link to = "/signin" className = "text-blue-500 hover:underline">Signin</Link>
      </Subheading>
      </div>
      </div>
      </div>

    </>
  )
}

export default Signup