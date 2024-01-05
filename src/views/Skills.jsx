import ListSkills from "../components/ListSkills";
import ListTools from "../components/ListTools";

const Skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <div className='justify-center flex'>
        <div>
          <h2>My Skills</h2>
          <ListSkills />
        </div>
        <div>
          <h2>My Tools</h2>
          <ListTools />
        </div>
      </div>
    </>
  );
};
export default Skills;
