import MyNavbar from "./navbar";
import Home from "./home";
import Create from "./create";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Alldata from "./alldata";
import { HashRouter,Routes,Route} from 'react-router-dom';
import userContext from "./context";

function App() {
  return (<>
  <MyNavbar/>
  <userContext.Provider 
  value={{users:[{
    name:'xyz',
    email:'xyz@gmail.com',
    password:'12345678',
    amount:100
    }]}}>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/deposit" element={<Deposit/>}></Route>
      <Route path="/withdraw" element={<Withdraw/>}></Route>
      <Route path="/alldata" element={<Alldata/>}></Route>
    </Routes>
  </HashRouter>
  </userContext.Provider>
  
  </>
  );
}

export default App;