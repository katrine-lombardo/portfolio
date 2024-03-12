import React, { useEffect } from "react";
import FormLogin from "../components/FormLogin";
import ListComments from "../components/ListComments";
import SubmitError from "../components/SubmitError";
import SubmitSuccess from "../components/SubmitSuccess";

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
          <h1>Messages </h1>
          <div className=' flex flex-wrap rounded-lg border-2 p-6 m-6 overflow-y-auto'>
            <ListComments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
