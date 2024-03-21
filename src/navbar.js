import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function MyNavbar() {
  return (<>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link><FontAwesomeIcon icon={faBuildingColumns} /></Nav.Link>
            <Nav.Link href="#/" className='nav'>Home</Nav.Link>
            <span className='item'>Welcome to Bad Bank</span>
            <Nav.Link href="#/create" className='nav'>Create Account</Nav.Link>
            <span className='item'>Create New Account Here!</span>
            <Nav.Link href="#/deposit" className='nav'>Deposit</Nav.Link>
            <span className='item'>Deposit Your Amount Here! </span>
            <Nav.Link href="#/withdraw" className='nav'>Withdraw</Nav.Link>
            <span className='item'>Withdraw Your Amount Here!</span>
            <Nav.Link href="#/alldata" className='nav'>All Data</Nav.Link>
            <span className='item'>All Account Info..!</span>
          </Nav>
        </Container>
      </Navbar>
 
    </>);
}

export default MyNavbar;