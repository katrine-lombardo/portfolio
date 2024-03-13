import React, { useEffect, useState } from "react";
import SubmitError from "./SubmitError";
import SubmitSuccess from "./SubmitSuccess";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [inputName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://badingo.net/api/comments.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          comment: "",
        });
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        console.error("Error posting comment: ", response.statusText);
        setSubmitSuccess(false);
        setSubmitError(true);
        setTimeout(() => {
          setSubmitError(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error posting comment: ", error);
    }
  };

  return (
    <>
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
        <h1 className='text-center'>Send me a message</h1>
        <form onSubmit={handleSubmit}>
          <label className='block text-left mb-5'>
            <span className='text-gray-700'>Name</span>
            <input
              id='name'
              name='name'
              type='text'
              value={formData.name}
              onChange={handleFormChange}
              className='mt-1 w-full block rounded-md p-2 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              required
              placeholder=''
            />
          </label>
          <label className='block text-left mb-5'>
            <span className='text-gray-700'>Email address</span>
            <input
              id='email'
              name='email'
              value={formData.email}
              onChange={handleFormChange}
              type='email'
              className='mt-1 w-full block rounded-md p-2 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              required
              placeholder='domino@badingo.net'
            />
          </label>
          <label className='block text-left'>
            <span className='text-gray-700'>Comments</span>
            <textarea
              id='comment'
              placeholder='Share your thoughts here'
              name='comment'
              value={formData.comment}
              onChange={handleFormChange}
              className='mt-1 w-full block rounded-md p-2 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
              required
              rows='3'
            />
          </label>
          <div className='flex justify-center items-center'>
            <button
              type='submit'
              className='place-items-center shadow-md mt-6 p-3 border rounded-lg
              text-rose-600
              border-rose-100
              bg-gradient-to-br from-rose-50 to-rose-100
              hover:text-rose-600
              hover:border-rose-200
              hover:bg-gradient-to-br hover:from-rose-100 hover:to-rose-200
              hover:shadow-lg'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormContact;
