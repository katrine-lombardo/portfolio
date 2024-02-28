import CardSkill from "./CardSkill";

const ListSkills = () => {
  const skills = [
    {
      skill_name: "JavaScript",
      img: "./images/skills_javascript.png",
    },
    {
      skill_name: "Python",
      img: "./images/skills_python.png",
    },
    {
      skill_name: "HTML",
      img: "./images/skills_html.png",
    },
    {
      skill_name: "CSS",
      img: "./images/skills_css.png",
    },
    {
      skill_name: "PostgreSQL",
      img: "./images/skills_postgres.png",
    },
    {
      skill_name: "React",
      img: "./images/skills_react.png",
    },
    {
      skill_name: "Vite",
      img: "./images/skills_vite.png",
    },
    {
      skill_name: "Django",
      img: "./images/skills_django.png",
    },
    {
      skill_name: "FastAPI",
      img: "./images/skills_fastapi.png",
    },
  ];

  return (
    <div>
      <div className='flex overflow-x-auto space-x-7 md:justify-center'>
        {skills.map((skill, index) => (
          <CardSkill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};
export default ListSkills;
