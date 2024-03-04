import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import SubmitSuccess from "../components/SubmitSuccess";
import SubmitError from "../components/SubmitError";

const Contact = () => {
  useEffect(() => {
    document.title = `Contact    ・    Badingo.net`;
  }, []);

  return (
    <div className='flex flex-col justify-center px-6'>
      <div className='flex-col'>
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
