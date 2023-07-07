import Button from "../../components/button";
import Input from "../../components/input";

const Authentication = ({
  // SignIn functionality
  isSignInPage = true,// if false it show welcome else welcome back
}) => {
  // State handling
  const[state, setState] = useState();
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className=" bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">Welcome {isSignInPage && 'Back'} </div>
        <div className=" text-xl font-light mb-14">{isSignInPage ? 'Sign in to get explored' : 'Sign up to get explored'}</div>
        <form className="flex flex-col items-center w-full">
         { ! isSignInPage && <Input label="Full name" name="name" placeholder="Enter your full name" className="mb-6 w-[75%]" />}
          <Input label="Email address" type="email" name="email" placeholder="Enter your email" className="mb-6 w-[75%]" />
          <Input label="Password" type="password" name="password" placeholder="Enter your Password" className="mb-14 w-[75%]" />
          <Button label ={isSignInPage ? "Sign In" : " Sign Up"}type='submit' className="w-[50%] m-4" />
        </form>
        <div>{isSignInPage ?'Did not have account':'Already have an account?'} <span className=" text-primary cursor-pointer underline">{isSignInPage ? 'Sign Up' : 'Sign In'} </span></div>
      </div>
    </div>
  )
}

export default Authentication


