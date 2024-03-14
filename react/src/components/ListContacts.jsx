import CardContact from "./CardContact";
import Resume from "/docs/Public_Katrine_Resume_2024.pdf";

const ListContacts = () => {
  const contacts = [
    {
      method: "LinkedIn",
      text: "Connect on LinkedIn",
      img: "./images/contact_rose_linkedin.png",
      url: "https://www.linkedin.com/in/katrine-lombardo/",
    },
    {
      method: "Location",
      text: "Long Island, NY",
      img: "./images/contact_rose_map.png",
      url: "https://maps.app.goo.gl/XtFV3Q947k4ChK1E8",
    },
    {
      method: "Resume",
      text: "Download resume",
      img: "./images/contact_rose_resume.png",
      url: "./docs/Public_Katrine_Resume_2024.pdf",
    },
  ];

  return (
    <div className='grid grid-cols-3 overflow-x-auto md:w-4/5 mx-auto justify-between text-center'>
      {contacts.map((contact, index) => (
        <CardContact key={index} contact={contact} />
      ))}
    </div>
  );
};
export default ListContacts;
