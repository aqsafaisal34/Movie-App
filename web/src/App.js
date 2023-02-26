import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";;

function App() {
  const [title , setTitle] =useState("");
  const [appRating , setAppRating] =useState([]);
  const [yourRating , setYourRating] =useState(0);
  const [toggleRefresh, setToggleRefresh] = useState(true)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(yourRating)
    axios.post('http://localhost:5000/rating', {
      title : title,
      yourRating : yourRating,
      appRating : appRating,
    })
    .then(function (response) {
      console.log(response.data.message);
      setToggleRefresh(!toggleRefresh)
    })
    .catch(function (error) {
      console.log(error.data.message);
    });
}

  
  return (
    <div className="App">
    
      <form onSubmit={submitHandler}>
      <h1>MOVIE APP</h1>
      <label htmlFor="title">Title:</label>
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
      <label htmlFor="app-rating">App Rating:</label>
      <input type="number" min={1} max={10} onChange={(e)=>{setAppRating(e.target.value)}} />
      <label htmlFor="your-rating">Your Rating:</label>
      <input type="number" min={1} max={10} onChange={(e)=>{setYourRating(e.target.value)}} />
      <input type="submit" value="Rate" id="rate-btn" />
      <input type="submit" value="Rate" id="rate-btn" />

      </form>
    </div>
  );
}

export default App;
