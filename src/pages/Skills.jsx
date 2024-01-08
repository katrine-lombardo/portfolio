import ListSkills from "../components/ListSkills";
import ListTools from "../components/ListTools";
import ListCertifications from "../components/ListCertifications";

const Skills = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='container pb-6'>
          <h1 className='text-left'>My Technical Skills</h1>
          <ListSkills />
        </div>
        <div className='container py-6'>
          <h1 className='text-left'>My Tools</h1>
          <ListTools />
        </div>
        <div className='container py-6'>
          <h1 className='text-left'>My Certifications</h1>
          <ListCertifications />
        </div>
      </div>
    </>
  );
};
export default Skills;
