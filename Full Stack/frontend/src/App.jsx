import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const fun = () => {
    const data = document.getElementsByTagName("input")[0].files[0];
    const formData = new FormData();
    formData.append("myFile",data);
    console.log(formData);
    axios.post("http://localhost:7000" + '/upload', formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
  return (
    <>
      {/* <input type='name' placeholder='username' onChange={(e) => nameChange(e.target.value)}/>
      <input type='password' placeholder='password' onChange={(e) => passwordChange(e.target.value)}/>
      <button onClick={onSubmit} >Submit</button>
      <button onClick={ShowDetails} >Show</button> */}
      <input type='file' />
      <button onClick={fun}>upload</button>
      {/* <button onClick={ShowImage}>Show</button> */}
      <img src='http://localhost:7000/images/multerPractice/d413505bef2512491358e79f.jpg' className='vinay' />
        
    </>
  )
}

export default App
