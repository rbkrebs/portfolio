
import './App.css';
import { BrowserRouter } from 'react-router-dom'


import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>      
      <Container/>  
      <Footer/>    
    </BrowserRouter>    
    </div>
  );
}

export default App;
