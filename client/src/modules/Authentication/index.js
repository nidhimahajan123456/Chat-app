import Button from "../../components/button";
import Input from "../../components/input";

const Authentication = () => {
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className=" bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">Welcome </div>
        <div className=" text-xl font-light mb-14">Sign in to get explored</div>
        <form className="flex flex-col items-center w-full">
          <Input label="Full name" name="name" placeholder="Enter your full name" className="mb-6 w-[75%]" />
          <Input label="Email address" type="email" name="email" placeholder="Enter your email" className="mb-6 w-[75%]" />
          <Input label="Password" type="password" name="password" placeholder="Enter your Password" className="mb-14 w-[75%]"  />
          <Button type='submit' className="w-[50%] m-4" />
        </form>
        <div>Didn't have an account <span className=" text-primary cursor-pointer underline">Sign In </span></div>
      </div>
    </div>
  )
}

export default Authentication


