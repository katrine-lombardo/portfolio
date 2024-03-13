import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitError from "./SubmitError";
import SubmitSuccess from "./SubmitSuccess";
import { LoginContext } from "./ContextLogin";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://badingo.net/api/validate.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.status === "success") {
        setSubmitSuccess(true);
        setIsLoggedIn(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          navigate("/messages");
        }, 3000);
      } else {
        console.error("Error logging in: ", data.message);
        setSubmitError(true);
        setTimeout(() => {
          setSubmitError(false);
        }, 3000);
      }
    } catch (error) {
      console.error("An error occurred during login: ", error);
    }
  };

  return (
    <div className='flex flex-col justify-items-center mx-auto md:w-4/5 py-10'>
      {submitSuccess && (
        <div>
          <SubmitSuccess />
        </div>
      )}
      {submitError && (
        <div>
          <SubmitError />
        </div>
      )}
      <h1 className='text-center'>Admin Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
        <label className='block text-left mb-5'>
          <span className='text-gray-700'>Email</span>
          <input
            id='email'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 w-full block rounded-md p-2 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
            required
            placeholder='domino@doggy.com'
          />
        </label>
        <label className='block text-left mb-5'>
          <span className='text-gray-700'>Password</span>
          <div className='flex flex-wrap'>
            <input
              id='password'
              name='password'
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1 w-fit grow rounded-md p-2 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              required
              placeholder='*****'
            />
            <button
              type='button'
              className='block items-center w-16 border rounded-lg
          text-rose-600
          border-rose-100
          bg-gradient-to-br from-rose-50 to-rose-100
          hover:text-rose-600
          hover:border-rose-200
          hover:bg-gradient-to-br hover:from-rose-100 hover:to-rose-200
          hover:shadow-lg'
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </label>
        <div className='flex justify-center items-center'>
          <button
            type='submit'
            className='justify-center items-center mt-6 p-2   w-32
          border rounded-lg
          shadow-md
          text-rose-600
          border-rose-100
          bg-gradient-to-br from-rose-50 to-rose-100
          hover:text-rose-600
          hover:border-rose-200
          hover:bg-gradient-to-br hover:from-rose-100 hover:to-rose-200
          hover:shadow-lg'
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
