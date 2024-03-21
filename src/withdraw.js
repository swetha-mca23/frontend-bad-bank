import {useEffect,useState } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios"


function Withdraw(){

   
    const [withdraw,setWithdraw] = useState(0);
    // var [total,setTotal] = useState(ctx.users.find(user=>(user.name === name && user.password === pass)?user.amount:null));
    var [data,setData] = useState([]);
    var [name,setName] = useState('')
    var [pass,setPass] = useState('');
    var [onamt,setOnamt] = useState(0)
    var [total,setTotal] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            if(name&&pass){
                await axios.get('http://localhost:8080/data').then(res=>{console.log(res.data);
                setData(res.data);
                let user = res.data.find(user=>user.name === name && user.password ===pass)
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

    function handleWithdraw(e){
        const withdrawVal = e.target.value;
        setOnamt(withdrawVal)
        if(!name || !pass){
            alert("Fill name and password first!");
            return
        }
        // let overdraft = false;

        for(let i=0;i<data.length;i++){
           
            if(data[i].name === name && data[i].password === pass){
                
                if(data[i].amount < withdrawVal){
                    alert("Account Overdraft! You cannot withdraw more than your available balance.")
                    return;
                   
                }
                else{
                    setWithdraw(withdrawVal)
                    return;
                }
            }
        }
       
        
    }


    async function handleClick(e){
        
        e.preventDefault();
        console.log(withdraw)

        if(pass.length<8){
            alert("Wrong Password!");
            return;
          }

        let validAcc = false;

        for(let i=0; i<data.length; i++){
            if(data[i].name === name && data[i].password === pass){
                await axios.put(`http://localhost:8080/update/${data[i]._id}`,{amount:data[i].amount - Number(withdraw)});
                const newTotal = data[i].amount - Number(withdraw);
                setTotal(newTotal);
                data[i].amount = newTotal;
                alert(" Your Amount Withdrawn Successfully!");
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
    <Card className='card' border="success" style={{ width: '38rem',height:'30rem',backgroundColor:"aqua" }}>
        <Card.Header className='account'>Withdraw</Card.Header>
        <Card.Body>
        <form>
        <p className="total">Available Balance &nbsp;Rs. {total}</p>
        <input type="text" placeholder="Enter Account Holder Name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off"></input>
            <input type="password" placeholder="Enter a Password" value={pass} onChange={handlePass} autoComplete="off"></input>
        <input type="number" placeholder="Enter a Valid Amount" required onChange={handleWithdraw} autoComplete="off"></input>
    <button onClick={handleClick} disabled={name === '' || pass === '' ||withdraw<=0 || data.find(user=>(user.name === name&&user.password===pass) && onamt >total)}>Withdraw</button>
    
    </form>
        </Card.Body>
      </Card>
      <br />
      </div>
    </>)
}

export default Withdraw;