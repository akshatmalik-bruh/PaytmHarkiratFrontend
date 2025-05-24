import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Input from '../components/Input'
import Button from '../components/Button'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const Transfer = () => {
  const [amount, setAmount] = useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const receiverId = queryParams.get('id');
  const receiverName = queryParams.get('name');
  return (
        <div className = "h-screen flex flex-col justify-center items-center " >

       
        <div className = "flex flex-col h-fit w-fit p-5 rounded-2xl bg-gray-300 gap-5">
      <Heading heading = "Transfer"/>
      <Heading heading = {`Transfer to ${receiverName}`} />
      <Subheading subheading = "Enter the amount you want to transfer" />
      <Input type= "number" label = "amount" placeholder = "Enter amount to transfer" onChange={(e)=> {
        setAmount(parseInt(e.target.value))
      }} />
      <Button text = "Transfer" onClick={async()=>{
        await axios.post('http://localhost:3000/api/v1/account/transfer', { to : receiverId,
            amount : amount
        },{
          headers : {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }}
           ).then((response) => {
          if(response.status === 200) {
            alert(`Successfully transferred ₹${amount} to ${receiverName}`);

            
          }
         
      }).catch((error) => {
        if(error.response.status === 400) {
          alert("Insufficient balance or invalid amount");
        } 
      })} }/>
    </div>
     </div>
  )
}

export default Transfer