import React, { useEffect } from "react";
import AboutMe from "../components/AboutMe";

const HomePage = () => {
  useEffect(() => {
    document.title = `Home    ・    Badingo.net`;
  }, []);

  return (
    <div className='flex md:mx-6 md:min-h-[200px] text-center md:mt-20'>
      <AboutMe />
    </div>
  );
};

export default HomePage;
