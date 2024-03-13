import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-6 justify-center items-center'>
      <div className='flex-none md:order-1 shrink md:shrink-0 px-6 pb-6 md:p-0 mb-12 md:mb-0'>
        <img
          src='./images/katrine_and_domino.jpeg'
          className='w-96 aspect-square object-cover rounded-full border-2'
          alt='Domino'
        />
      </div>
      <div className='md:basis-2/5 mx-8 md:order-2'>
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
            I'm a full-stack developer and seasoned workplace leader with 10+
            years of experience supporting rapidly scaling tech startups, and a
            passion for problem-solving.
          </p>
          <p className='md:text-left my-3'>
            I'm currently looking for my next opportunity, so please check out
            my recent{" "}
            <Link
              to='/projects'
              className='text-rose-500 hover:text-rose-700 visted:text-rose-800'
            >
              projects
            </Link>{" "}
            and{" "}
            <Link
              to='/skills'
              className='text-rose-500 hover:text-rose-700 visted:text-rose-800'
            >
              skills
            </Link>
            , and{" "}
            <Link
              to='/contact'
              className='text-rose-500 hover:text-rose-700 visted:text-rose-800'
            >
              reach out
            </Link>{" "}
            to make a connection!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
