import ContactForm from "../components/ContactForm";
import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <div className='columns-1 p-8'>
      <div className='flex justify-center'>
        <AboutMe />
      </div>
      <div className='flex justify-center'>
        <ContactForm />
      </div>
    </div>
  );
};

export default About;
