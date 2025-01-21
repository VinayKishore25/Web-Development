"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { signIn, signOut, useSession } from "next-auth/react";
const Login = () => {
    const router = useRouter()
    const [username ,setusername] = useState("");
    const [password ,setpassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if(username === "1" && password === "1"){
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
        <div>
          <p>You are not logged in. Hello</p>
          <button
            onClick={() => signIn("google")}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#4285F4",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Sign In with Google
          </button>
        </div>
    </>
  )
}

export default Login