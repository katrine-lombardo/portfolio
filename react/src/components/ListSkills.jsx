import SkillCard from "./SkillCard";

const ListSkills = () => {
  const skills = [
    {
      skill_name: "JavaScript",
      img: "/logos/skills_javascript.png",
    },
    {
      skill_name: "Python",
      img: "/logos/skills_python.png",
    },
    {
      skill_name: "HTML",
      img: "/logos/skills_html.png",
    },
    {
      skill_name: "CSS",
      img: "/logos/skills_css.png",
    },
    {
      skill_name: "PostgreSQL",
      img: "/logos/skills_postgres.png",
    },
    {
      skill_name: "React",
      img: "/logos/skills_react.png",
    },
    {
      skill_name: "Vite",
      img: "/logos/skills_vite.png",
    },
    {
      skill_name: "Django",
      img: "/logos/skills_django.png",
    },
    {
      skill_name: "FastAPI",
      img: "/logos/skills_fastapi.png",
    },
  ];

  return (
    <div>
      <div className='flex overflow-x-auto space-x-7'>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};
export default ListSkills;
