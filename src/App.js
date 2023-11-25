import {Section} from './Component/Section';
import { useState } from 'react';

function App() {
  let[id,setId] = useState(0)
  const addTocart = () => {setId((id+1));}
  return (
    <div className="App">
      <Section addTocart={addTocart}/>
    </div>
  );
}

export default App;
