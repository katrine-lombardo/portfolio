import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitError from "./SubmitError";
import SubmitSuccess from "./SubmitSuccess";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
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
      console.log("data: ", data);

      if (data.status === "success") {
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
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
    <div className='md:w-3/5 justify-center mx-auto p-10 shadow-md rounded-xl'>
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
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
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
              className='block items-center px-3 py-2 border rounded text-rose-300 border-rose-300 bg-rose-100 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-200'
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </label>
        <button
          type='submit'
          className='mt-6 text-white bg-rose-800 hover:bg-rose-600 p-2 shadow-md rounded-xl focus:outline-none focus:ring focus:ring-rose-200'
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
