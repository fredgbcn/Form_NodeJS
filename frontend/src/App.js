import React, {useEffect, useState} from "react";
import Form from "./component/Form";


function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof backendData.users ==='undefined')?(<p>Loading...</p>) :(backendData.users.map((user, i) =>(
        <p key={i}>{user}</p>
      )))}
    <Form/>

    </div>
    );
}

export default App;
