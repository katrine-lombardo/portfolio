import React, { useEffect } from "react";
import FormLogin from "../components/FormLogin";
import ListMessages from "../components/ListMessages";

const Messages = () => {
  useEffect(() => {
    document.title = `Messages    ・    Badingo.net`;
  }, []);

  return (
    <div className='flex flex-col justify-center px-6'>
      <div className='flex-col'>
        <FormLogin />
      </div>
    </div>
  );
};

export default Messages;
