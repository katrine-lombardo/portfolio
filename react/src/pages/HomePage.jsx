import AboutMe from "../components/AboutMe";

const HomePage = () => {
  return (
    <div className='my-32 mx-1'>
      <div className='flex flex-wrap gap-4 justify-center items-center lg:flex-no-wrap'>
        <div className='flex-none md:shrink-0'>
          <img
            src='katrine_and_domino.jpeg'
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
              Hello, I'm Katrine! It's nice to meet you. Welcome to badingo.net,
              my portfolio page built in Vite + React, deployed on Plesk, and
              domain hosted on GoDaddy.
            </p>
            <p className='md:text-left my-3'>
              I'm a recent Hack Reactor coding bootcamp graduate and seasoned
              workplace leader with 10+ years experience supporting rapidly
              scaling tech startups, and a passion for problem-solving.
            </p>
            <p className='md:text-left my-3'>
              Make yourself at home, view my projects and skills, and chat with
              me about how we can work together to build something cool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
