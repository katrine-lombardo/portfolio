import React, { useEffect } from "react";
import InstagramProfile from "../components/Instagram";

const Badingo = () => {
  useEffect(() => {
    document.title = `Badingo    ・    Badingo.net`;
  }, []);

  return (
    <div className='grid grid-cols-1 px-10 justify-center items-center md:my-9 md:mx-7'>
      <div className='flex flex-col gap-y-4 justify-center text-center items-center px-10'>
        <h1>Why Badingo?</h1>
        <img
          src='./images/domino_and_badingo.jpeg'
          className='w-96 aspect-square object-cover rounded-full border-2'
          alt='Domino and Badingo'
        />
        <p>Badingo is the name of my dog Domino's favourite flamingo toy.</p>
        <p>She's had badingo since she was a baby.</p>
      </div>
      <InstagramProfile />
    </div>
  );
};

export default Badingo;
