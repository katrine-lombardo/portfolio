const HomePage = () => {
  return (
    <div className='h-[calc(100vh-150px)] flex items-center justify-center mx-20'>
      <div className='grid grid-cols-2 gap-10'>
        <div className='px-1 w-full'>
          <img
            src='domino.jpeg'
            className='w-full aspect-square object-cover rounded-full border-2'
            alt='Domino'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <div>
            <h1 className='font-medium text-3xl text-left my-4'>
              Hello, World
            </h1>
          </div>
          <div>
            <p className='text-left my-3'>
              Welcome to badingo.net, Katrine's portfolio page built in Vite /
              React and deployed on GoDaddy.
            </p>
          </div>
          <div>
            <p className='text-left my-3'>
              Make yourself at home, view my projects and skills, and reach out
              to me here to start the conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
