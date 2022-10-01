import logo from './logo.svg';
import './App.css';
import MovieComponent from './movieComponent';
import { useEffect, useState } from 'react';


function App() {
  const [movieList,setMovies] = useState([]); 
  const [err, setError] = useState(null);
  
  useEffect(()=>{
    fetch('http://localhost:2000/').then(res=>res.json()).then(
      (res)=> {setMovies(res)},
      (err)=>{
        setError(err)
      }
    )
    //setMovies([{'name':'xyz','rating':3,'rdate':'22/10/22'},{'name':'xyz','rating':3,'rdate':'22/10/22'}])
  },[])

  return (
    <div className="App">
      <header className="App-header">
          { movieList.map((val,id)=> <MovieComponent id={id} name={val.name} rating = {val.rating} releaseDate={val.rdate}/>)}
      </header>
    </div>
  );
}

export default App;
