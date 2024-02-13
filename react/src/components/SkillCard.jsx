import React from "react";
import "../styles/Logos.css";

const SkillCard = ({ skill }) => {
  const { skill_name, img } = skill;

  return (
    <div className='grid auto-cols-max justify-items-center'>
      <img src={img} className='size-16 shrink-0 my-2'></img>
      <p className='text-gray-400 text-base'>{skill_name}</p>
    </div>
  );
};
export default SkillCard;
