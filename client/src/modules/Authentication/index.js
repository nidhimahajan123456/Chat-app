import Button from "../../components/button";
import Input from "../../components/input";

const Authentication = () => {
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className=" bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">Welcome</div>
        <div className=" text-xl font-light mb-14">Sign up to get Ready</div>
        <form className="flex flex-col items-center w-full">
          <Input label="Full Name" className="mb-6 w-[75%]" placeholder="Enter your full name" type="text" />
          <Input label="Email" className="mb-6 w-[75%]" placeholder="Enter your email" type="text" />
          <Input label="Password" className="mb-14 w-[75%]" placeholder="Enter your Password" type="password" />
          <Button label="Sign up" className="w-[52%] mb-2" />
        </form>

        <div className={`margin-top-top:10px`}>Already have an account</div>
      </div>
    </div>
  )
}

export default Authentication


