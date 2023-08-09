import Button from "../../components/button";
import Input from "../../components/input";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    console.log('data :>> ', data);
    e.preventDefault()
    // e.preventDefault()
    // const res = await fetch(`http://localhost:8000/api/${isSignInPage ? 'login' : 'register'}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
  }
  console.log("datagg", data)
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className=" bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold mb-3€">Welcome {isSignInPage && 'Back'}</div>
        <div className=" text-xl font-light mb-6">{isSignInPage ? 'Sign in to get explored' : 'Sign up to get started'}</div>
        <form className="flex flex-col items-center w-full" onSubmit={(e) => handleSubmit(e)}>
          {!isSignInPage && <Input label="Full name" name="name" placeholder="Enter your full name" className="w-[75%]" value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} />}
          <Input label="Email address" type="email" name="email" placeholder="Enter your email" className="w-[75%]" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <Input label="Password" type="password" name="password" placeholder="Enter your Password" className="w-[75%]" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          <Button label={isSignInPage ? 'Sign in' : 'Sign up'} type='submit' className="w-[50%] m-4 p-0" />
        </form>
        <div>{isSignInPage ? "Didn't have an account?" : "Already have an account?"} <span className=" text-primary cursor-pointer underline mb-3" onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>{isSignInPage ? 'Sign up' : 'Sign in'}</span></div>
      </div>
    </div>
  )
}

export default Authentication


