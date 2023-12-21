function HomePage() {
  return (
    <div className='h-[calc(100vh-150px)] flex items-center justify-center'>
      <div className='grid grid-cols-2 gap-10'>
        <div class='px-1 w-full'>
          <img
            src='domino.jpeg'
            className='w-full aspect-square object-cover rounded-full border-2'
            alt='Domino'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <div>
            <h1>Welcome to Badingo.net</h1>
          </div>
          <div>
            <p>This is the homepage</p>
          </div>
          <div>
            <p className='font-serif'>Am I changing?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
