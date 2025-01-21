"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Login = () => {
    const router = useRouter()
    const [username ,setusername] = useState("");
    const [password ,setpassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if(username === "1" && password === "1"){
            console.log("hello");
            localStorage.setItem("isLoggedIn",true);
            router.push("/");
        }
        else{
            localStorage.setItem("isLoggedIn",false);
            alert("type something");
        }
    }
  return (
    <>
        <form onSubmit={handleLogin}>
            <input id="username" type="text" onChange={(e) =>setusername(e.target.value)} placeholder="enter username"/>
            <br/>
            <br/>
            <input id="password" type="text" onChange={(e) =>setpassword(e.target.value)} placeholder="enter password" /><br/><br/>
            <button type="submit">login</button>
        </form>
    </>
  )
}

export default Login