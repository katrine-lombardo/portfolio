import { useEffect, useState } from "react";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordButton = ({ path }) => {
    <svg
      className='fill-current h-3 w-3'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d={path} />
    </svg>;
  };

  return (
    <div className='md:w-3/5 justify-center mx-auto p-10 shadow-md rounded-xl'>
      <h1>Admin Login</h1>
      <form>
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
      </form>
    </div>
  );
};

export default FormLogin;
