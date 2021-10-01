import React, {useState, useEffect} from "react";
import './App.css';
import {fetchRequest, logIn, tokenLogin} from "./utils";
import {login} from "./components/login";
import {NoteCard} from "./components/noteCard";
import {SignUp} from "./components/signUp";

const App = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [account, setAccount] = useState();
  const [arr, setArr]= useState([
    {title: "Note 1", content: "First note"},
    {title: "Note 2", content: "Second Note"},
    {title: "Note 3", content: "Third Note"}
  ]);

  useEffect(() => {
    tokenLogin(setAccount)
  }, [setAccount]);

  const submitHandler = async (e) => {
    e,preventsDefault()
    fetchRequest(username, password, setAccount);
  }

  const loginHandler = (e) => {
    e.preventsDefault();
    logIn(username, password, setAccount);
  }

  const addArray = (e) => {
    e.preventsDefault();
    const tempArr = arr
    tempArr.pish({title: "Note 4", content: "fouth Note"});
    setArr(tempArr);
  }

return (
    <div className="App">
      <SignUp setUsername={setUsername} setPassword={setPassword} submitHandler={submitHandler}/>
      <LogIn setUsername={setUsername} setPassword={setPassword} loginHandler={loginHandler}/>
      <h1>{account ? account.name : "No User"}</h1>
      <button onClick={addArray}>X</button>
      {arr.map((item, index => {
        <NoteCard key={index} title={item.title} content={item.content}/>
      }))}
    </div>
  );
}

export default App;
