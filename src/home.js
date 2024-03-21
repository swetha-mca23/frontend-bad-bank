import Card from 'react-bootstrap/Card';
import bank from './images/bank.webp';
import './App.css'

function Home(){

    return(<>
    
    <Card className="text-center">
      
      <Card.Body>
        <Card.Title className='title'> WELCOME TO BAD BANK</Card.Title>
        <Card.Text>
       <img className='homeimg' src={bank} alt='' height='500px' width='1300px'></img>
       
          </Card.Text>
      </Card.Body>
    </Card>
    </>)
}

export default Home;