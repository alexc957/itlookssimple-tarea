
import './App.css';
import { useState } from 'react';
import Grid from './components/Grid'





function App() {
  const [flag,setFlag] = useState(false)
 // const [gifs, setGifs] = useState([])
 
    

  return (
    <div className="layout">
      <header className="header size-full">Giphy random gif generator</header>
      <button onClick={(e)=>setFlag(!flag)}>Click here to generate Random Gifs </button>
       <Grid flag={flag} />

       <footer className="size-full footer">Copyright: alexcoronel1995@gmail.com</footer>
    </div>
  );
}

export default App;
