import Card from 'react-bootstrap/Card';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function Deposit(){
    const [deposit,setDeposit] = useState(0);
    var [data,setData] = useState([]);
    var [name,setName] = useState('');
    var [pass,setPass] = useState('');
    var [total,setTotal] = useState(null);

    
    useEffect(()=>{
        async function fetchData(){
            if(name && pass){
            await axios.get('https://server-1-784t.onrender.com/data').then(res=>{console.log(res.data);
            setData(res.data);
            let user = res.data.find(user=>user.name === name && user.password === pass)
            if(user){
                setTotal(user.amount)
            }
        })
       
    }
}fetchData();
    },[name,pass])

    function handlePass(e){
        const passwordVal = e.target.value;
    if(!name && passwordVal !== ''){
      alert("Fill the Name first!");
    }
   
    setPass(passwordVal)
    }

    function handleDeposit(e){
        const depositVal = e.target.value;
        if(!name || !pass){
            alert("Fill name and password first!");
            return
        }
        if(depositVal<=0){
            alert("Negative Deposit!");
        }
        setDeposit(depositVal)
    }


    async function handleClick(e){

        e.preventDefault();
        console.log(deposit)

        if(pass.length<8){
            alert("Wrong Password!");
            return;
          }

        let validAcc = false;
        for(let i=0;i<data.length;i++){
           
            if(data[i].name === name && data[i].password === pass){
                console.log(data[i]._id)
                await axios.put(`https://server-1-784t.onrender.com/update/${data[i]._id}`,{amount:data[i].amount  + Number(deposit)});
                setTotal(data[i].amount + Number(deposit));
                alert("Successfully Deposited")
                    
                validAcc = true;
                return;
            }
    }
    if(!validAcc){
        alert("Invalid Account!");
    }
    }

    
   

    return(<>

   <div className="create">
    <Card className='card' border="success" style={{ width: '38rem',height:'30rem' ,backgroundColor:"aqua"}}>
        <Card.Header className='account'>Deposit</Card.Header>
        <Card.Body>
        <form>
        <p className="total">Available Balance &nbsp;Rs. {total}</p>
            <input type="text" placeholder="Enter Account Holder Name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off"></input>
            <input type="password" placeholder="Enter a Password" value={pass} onChange={handlePass} autoComplete="off"></input>
        <input type="number" placeholder="Enter a Valid Amount" onChange={handleDeposit} autoComplete="off"></input>
    <button onClick={handleClick} disabled={name==='' || pass === '' || deposit<=0}>Deposit</button>
    </form>
        </Card.Body>
      </Card>
      <br />
      </div>
    </>)
}

export default Deposit;
