const ContactForm = () => {
  return (
    <div className='flex flex-col justify-start p-10 m-8 shadow-md rounded-xl'>
      <h1>Contact Form</h1>
      <label className='block text-left mb-5'>
        <span className='text-gray-700'>Name</span>
        <input
          type='text'
          className='mt-1 block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
          placeholder=''
        ></input>
      </label>
      <label className='block text-left mb-5'>
        <span className='text-gray-700'>Email address</span>
        <input
          type='email'
          className='mt-1 block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
          placeholder='domino@example.com'
        ></input>
      </label>
      <label className='block text-left'>
        <span className='text-gray-700'>Comments</span>
        <textarea
          className='mt-1 block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
          rows='3'
        ></textarea>
      </label>
    </div>
  );
};

export default ContactForm;
