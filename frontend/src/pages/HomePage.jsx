const HomePage = () => {
  return (
    <div className='mt-32'>
      <div className='flex flex-wrap gap-4 justify-center items-center lg:flex-no-wrap'>
        <div className='flex-none md:shrink-0'>
          <img
            src='domino.jpeg'
            className='w-96 aspect-square object-cover rounded-full border-2'
            alt='Domino'
          />
        </div>
        <div className='basis-2/5'>
          <div>
            <h1 className='font-medium text-3xl my-4 md:text-left'>
              Hello, World
            </h1>
          </div>
          <div>
            <p className='md:text-left my-3'>
              Testing testing 123 Welcome to badingo.net, Katrine's portfolio
              page built in Vite + React and deployed on GoDaddy.
            </p>
          </div>
          <div>
            <p className='md:text-left my-3'>
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
