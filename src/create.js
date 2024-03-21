import Card from 'react-bootstrap/Card';
import './App.css'
import { useState } from 'react';
import axios from 'axios';



function Create(){
   
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    // let [details,setDetails] = useState({})
   
  function handleEmail(e){

    const emailVal = e.target.value;
    if(!name && emailVal !== ''){
      alert("Name is Required!")
    }
    setEmail(emailVal)
  }
    
  function handlePassword(e){
    const passwordVal = e.target.value;
    if(!name && passwordVal !== ''){
      alert("Fill the Name first!")
    }
    if(!email && passwordVal !== ''){
      alert("Fill the Email first!")
    }
    setPassword(passwordVal)
  }
    
   function handleSubmit(e){
    e.preventDefault();
    let n = name;
    let em = email;
    let pass = password
    let newItem = {name:n,email:em,password:pass,amount:0};
    axios.post("http://localhost:8080/create",newItem);

    if(password.length<8){
      alert("Enter Atleast 8 Characters as Password!");
      return;
    }
    
    alert(" Your Account Created Successfully....!")

    
   }

  //  console.log(details)
  //  console.log(ctx.users)

   
    return(<>
    {/* <h1>Create</h1> */}
    <div className='create'>
    <Card className='card' border="success" style={{ width: '38rem',height:'28rem',backgroundColor:"aqua" }}>
        <Card.Header className='account'>Create an Account</Card.Header>
        <Card.Body>
        <form onSubmit={handleSubmit}>
        <input id='name' type='text' placeholder='Enter Your Full Name'  value={name} onChange={(e)=>setName(e.target.value)} autoComplete='off'></input>
        <input id='email' type="email" placeholder='Enter E-mail ID' value={email} onChange={handleEmail} autoComplete='off'></input>
        <input id='password' type="Password" placeholder='Enter a password' value={password} onChange={handlePassword} autoComplete='off'></input>
     <button disabled={name === '' || email === '' || password === ''}>Create Account</button> 
        
    </form>
        </Card.Body>
      </Card>
      <br />
      </div>

      
  
    </>)
}

export default Create;