import React, { useEffect, useContext } from "react";
import FormLogin from "../components/FormLogin";
import ListComments from "../components/ListComments";
import { LoginContext } from "../components/ContextLogin";

const Messages = () => {
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    document.title = `Messages    ・    Badingo.net`;
  }, []);

  return (
    <div className='my-9 mx-7'>
      <div className='flex-col'>
        {isLoggedIn ? (
          <div>
            <h1>Messages </h1>
            <div className=' flex flex-wrap rounded-lg border-2 p-6 m-6 overflow-y-auto'>
              <ListComments />
            </div>
          </div>
        ) : (
          <div>
            <FormLogin />
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
