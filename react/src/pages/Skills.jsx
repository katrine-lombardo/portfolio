import ListSkills from "../components/ListSkills";
import ListTools from "../components/ListTools";
import ListCertifications from "../components/ListCertifications";

const Skills = () => {
  return (
    <div className='mx-8'>
      <div className='flex flex-col mx-auto my-9 mx-7'>
        <div className='my-5'>
          <h1 className='text-center mb-1'>My Technical Skills</h1>
          <ListSkills />
        </div>
        <div className='my-5'>
          <h1 className='text-center mb-1'>My Tools</h1>
          <ListTools />
        </div>
        <div className='my-5'>
          <h1 className='text-center mb-1'>My Certifications</h1>
          <ListCertifications />
        </div>
      </div>
    </div>
  );
};
export default Skills;
