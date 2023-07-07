import Button from "../../components/button";
import Input from "../../components/input";
import React, { useEffect, useState } from "react";

const Authentication = ({
  // SignIn functionality
  isSignInPage = false,// if false it show welcome else welcome back
}) => {
  // State handling
  const [data, setData] = useState({
    // is Sign In then we want full name variable
    ...(!isSignInPage && {
      fullName: ''
    }),
    email: '',
    password: ''
  });
  console.log("siuhuidh",data)
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className=" bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">Welcome {isSignInPage && 'Back'} </div>
        <div className=" text-xl font-light mb-14">{isSignInPage ? 'Sign in to get explored' : 'Sign up to get explored'}</div>
        <form className="flex flex-col items-center w-full" onSubmit={()=>console.log("kljkgl")}>
          {!isSignInPage && <Input label="Full name" type="text" name="name" placeholder="Enter your full name" className="mb-6 w-[75%]" defaultValue={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value }) } />}
          <Input label="Email address" type="email" name="email" placeholder="Enter your email" className="mb-6 w-[75%]" defaultValue={data.email} onChange={(e)=>setData({ ...data, name: e.target.value })}/>
          <Input label="Password" type="password" name="password" placeholder="Enter your Password" className="mb-14 w-[75%]" value={data.password} onChange={(e)=>setData({ ...data, password: e.target.value })}/>
          <Button label={isSignInPage ? "Sign In" : " Sign Up"} type='submit' className="w-[50%] m-4" />
        </form>
        <div>{isSignInPage ? 'Did not have account' : 'Already have an account?'} <span className=" text-primary cursor-pointer underline">{isSignInPage ? 'Sign Up' : 'Sign In'} </span></div>
      </div>
    </div>
  )
}

export default Authentication


