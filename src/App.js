import React,{useState, useEffect} from 'react'
import './App.css';
import ContactCard from './ContactCard';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
     newfun()
    
  }, [])

  function newfun() {
    axios.get(`https://randomuser.me/api/?results=10`)
    .then(function (response) {
      // handle success
      setResults(response.data.results)
    })
    .catch(function (error) {
      // handle error
    
    })
  }
  return (
    <div>
      {results.map((result, index)=> {
        return(
          <ContactCard key={index}
            avatarUrl = {result.picture.large}
            name =  {result.name.first}
            email = {result.email}
            age = {result.dob.age} />

        )
      })}
      <div className='btn'>

        <button onClick={()=> newfun() } className='refresh-btn'>change</button>
      </div>

    </div>

  );
}

export default App;
