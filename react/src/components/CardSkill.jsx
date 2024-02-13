import React from "react";

const CardSkill = ({ skill }) => {
  const { skill_name, img } = skill;

  return (
    <div className='grid auto-cols-max justify-items-center'>
      <img src={img} className='size-16 shrink-0 my-2'></img>
      <p className='text-sm mb-3'>{skill_name}</p>
    </div>
  );
};
export default CardSkill;
