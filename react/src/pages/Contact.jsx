import FormContact from "../components/FormContact";
import SubmitSuccess from "../components/SubmitSuccess";
import SubmitError from "../components/SubmitError";

const Contact = () => {
  return (
    <div className='columns-1 p-8'>
      <div className='mx-auto'>
        <SubmitError />
      </div>
      <div className='mx-auto'>
        <SubmitSuccess />
      </div>
      <div className='flex justify-center'>
        <FormContact />
      </div>
    </div>
  );
};

export default Contact;
