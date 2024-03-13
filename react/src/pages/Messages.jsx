import React, { useEffect, useContext } from "react";
import FormLogin from "../components/FormLogin";
import ListComments from "../components/ListComments";
import { LoginContext } from "../components/ContextLogin";

const Messages = () => {
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    document.title = `Messages    ・    Badingo.net`;
  }, []);

  if (!isLoggedIn) {
    return (
      <div className='my-9 mx-7'>
        <FormLogin />
      </div>
    );
  }

  return (
    <div className='my-9 mx-7'>
      <div className='flex-col'>
        <h1 className='text-center'>Messages</h1>
        <div className='flex flex-wrap rounded-lg border-2 p-6 m-6 overflow-y-auto'>
          <ListComments />
        </div>
      </div>
    </div>
  );
};

export default Messages;
