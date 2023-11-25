import { Navbar } from './Component/Navbar';
import { Header } from './Component/Header';
import {Section} from './Component/Section';
import { Footer } from './Component/Footer';
import { useState } from 'react';

function App() {
  let[id,setId] = useState(0)
  const addTocart = () => {setId((id+1));}
  return (
    <div className="App">
      <Navbar id={id}/>
      <Header /> 
      <Section addTocart={addTocart}/>
      <Footer /> 
    </div>
  );
}

export default App;
