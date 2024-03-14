import React, { useEffect } from "react";
import FormContact from "../components/FormContact";
import ListContacts from "../components/ListContacts";

const Contact = () => {
  useEffect(() => {
    document.title = `Contact    ・    Badingo.net`;
  }, []);

  return (
    <div className='flex flex-col justify-center px-10'>
      <div className='flex-col mb-4'>
        <ListContacts />
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
