import React from "react";

const CardTool = ({ tool }) => {
  const { tool_name, img } = tool;

  return (
    <div className='grid auto-cols-max justify-items-center'>
      <img src={img} className='size-16 shrink-0 my-2'></img>
      <p className='text-sm mb-3'>{tool_name}</p>
    </div>
  );
};

export default CardTool;
