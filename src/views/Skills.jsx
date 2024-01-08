import ListSkills from "../components/ListSkills";
import ListTools from "../components/ListTools";
import ListCertifications from "../components/ListCertifications";

const Skills = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='container'>
          <h1>My Skills</h1>
          <ListSkills />
        </div>
        <div className='container mx-auto'>
          <h1>My Tools</h1>
          <ListTools />
        </div>
        <div className='container mx-auto'>
          <h1>My Certifications</h1>
          <ListCertifications />
        </div>
      </div>
    </>
  );
};
export default Skills;
