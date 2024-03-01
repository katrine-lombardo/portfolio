import React, { useEffect, useState } from "react";
import SubmitError from "./SubmitError";
import SubmitSuccess from "./SubmitSuccess";

const FormContact = () => {
  useEffect(() => {
    document.title = `Contact`;
  }, []);

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
      } else {
        console.error("Error posting comment: ", response.statusText);
        setSubmitSuccess(false);
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Error posting comment: ", error);
    }
  };

  return (
    <>
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
      <div className='md:w-3/5 justify-center mx-auto p-10 m-5 shadow-md rounded-xl'>
        <h1>Let's chat</h1>
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
          <button
            type='submit'
            className='mt-6 text-white bg-rose-800 hover:bg-rose-600 p-2 shadow-md rounded-xl focus:outline-none focus:ring focus:ring-rose-200'
          >
            Share
          </button>
        </form>
      </div>
    </>
  );
};

export default FormContact;
