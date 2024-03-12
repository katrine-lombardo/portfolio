import React, { useEffect } from "react";
import FormLogin from "../components/FormLogin";
import ListComments from "../components/ListComments";

const Messages = () => {
  useEffect(() => {
    document.title = `Messages    ・    Badingo.net`;
  }, []);

  return (
    <div className='my-9 mx-7'>
      <div className='flex-col'>
        <div>
          <FormLogin />
        </div>

        <div>
          <h1>List of messages </h1>
          <div className='flex justify-items-center overflow-y-auto'>
            <ListComments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
