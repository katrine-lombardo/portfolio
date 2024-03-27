import React, { useEffect } from "react";
import InstagramProfile from "../components/Instagram";

const Badingo = () => {
  useEffect(() => {
    document.title = `Badingo    ・    Badingo.net`;
  }, []);

  return (
    <div className='grid grid-cols-1 px-10 justify-center items-center md:my-9 md:mx-7 mb-8'>
      <div className='flex flex-col gap-y-4 justify-center text-center items-center px-10'>
        <h1>Why Badingo?</h1>
        <p className='text-slate-600'>
          Badingo is the name of my dog Domino's favourite flamingo toy.
        </p>
        <p className='text-slate-600'>
          She's had badingo since she was a baby.
        </p>
        <InstagramProfile />
      </div>
    </div>
  );
};

export default Badingo;
