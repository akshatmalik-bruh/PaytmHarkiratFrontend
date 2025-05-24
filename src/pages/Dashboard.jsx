import React from 'react'
import axios from 'axios'
import Appbar from '../components/Appbar'
import Heading from '../components/Heading'
import { useEffect,useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Subheading from '../components/Subheading'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()
  const [balance, setBalance] = useState(0)
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(()=>{
         axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                "authorization": `Bearer ${localStorage.getItem('token')}`
    }}).then((response) => {
        if(response.status === 200) {
            setBalance(response.data.balance)
        }
    }).catch((error) => {
        console.error("Error fetching balance:", error);
    })},[])
    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/get?filter=${searchTerm}`, 

                {
                  headers : {
                    "Authorization" : `Bearer ${localStorage.getItem('token')}`
                  }
                }).then((res)=>{
                    if(res.status === 200) {
                        setUsers(res.data.msg)
                    } 

                })},[searchTerm])
  return (
    
    <div>
           <Appbar />
       
         <Heading heading = {`your balance is ₹${balance}`} />
         <Input label = "Search" placeholder = "Search for people" onChange = {
         (event) => {
            setSearchTerm(event.target.value) }
         }/>
         
         {
          users.map((item,key)=>{
            return (
                <div key = {key} className = "flex justify-between gap-2 p-10 ml-5">
                  <div>
                    <Heading heading = {item.firstname + " " + item.lastname} />
                    <Subheading subheading = {item.emailid} />
                    </div>
                    <Button text = "Transfer" onClick = {() => {
                        navigate(`/transfer?id=${item.id}&name=${item.firstname}`)
                    }} /> 
                </div>
            )   
          })
         }


    </div>
  )
}

export default Dashboard