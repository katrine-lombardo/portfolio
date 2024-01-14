import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  useEffect(() => {
    document.title = `About Me`;
  }, []);

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/backend/comments`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          comments: "",
        });
      } else {
        console.error("Error posting comment: ", response.statusText);
      }
    } catch (error) {
      console.error("Error posting comment: ", error);
    }
  };

  return (
    <div className='flex flex-col w-3/5 justify-start p-10 m-10 shadow-md rounded-xl'>
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
            className='mt-1 w-full block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
            required
            placeholder=''
          ></input>
        </label>
        <label className='block text-left mb-5'>
          <span className='text-gray-700'>Email address</span>
          <input
            id='email'
            name='email'
            value={formData.email}
            onChange={handleFormChange}
            type='email'
            className='mt-1 w-full block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
            required
            placeholder='domino@badingo.net'
          ></input>
        </label>
        <label className='block text-left'>
          <span className='text-gray-700'>Comments</span>
          <textarea
            id='comments'
            placeholder='Share your thoughts here'
            name='comments'
            value={formData.comments}
            onChange={handleFormChange}
            className='mt-1 w-full block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
            required
            rows='3'
          ></textarea>
        </label>
        <button
          type='submit'
          className='mt-6 text-white bg-rose-500 hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-200'
        >
          Share
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
