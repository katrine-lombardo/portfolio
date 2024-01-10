import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <div className='columns-1 p-8'>
      <h1>About Me</h1>
      <div className='flex justify-center'>
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
