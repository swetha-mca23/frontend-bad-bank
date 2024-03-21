import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";


function Alldata() {
  const [data, setData] = useState([]);
  const [delTrigger,setDelTrigger] = useState(false)

 

  function delClick(id){
    axios.delete(`http://localhost:8080/delete/${id}`).then(setDelTrigger(true))
  }

  useEffect(()=>{

    axios.get("http://localhost:8080/data").then((item) => {
      setData(item.data);
      setDelTrigger(false)
  })
  },[delTrigger])
 

  return (
    <>
      
      <table>
        <tr>
          <th>
            <td>Name</td>
          </th>
          <th>
            <td>Email</td>
          </th>
          <th>
            <td>Password</td>
          </th>
          <th>
            <td>Amount</td>
          </th>
          <th>
            <td>Delete Account</td>
          </th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.amount}</td>
            <td>
              <button onClick={()=>delClick(item._id)} className="btn-del">Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Alldata;