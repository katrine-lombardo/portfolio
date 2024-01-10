const AboutMe = () => {
  return (
    <div className='grid grid-rows-2 gird-cols-2 gap-4 border-2 w-4/5'>
      <div className='col-span-2'>
        <h1>About Me</h1>
      </div>
      <div className='row-span-2'>
        <p>
          Hello again, world! In 2023 I made the decision to level-up my career
          by attending Hack Reactor's Advanced Full Time Immersive Coding
          Bootcamp, re-entering the workforce as a Software Developer. I have a
          decade of experience working in tech startups in a Human Resources
          capacity, where I supported high-growth teams with strategic
          partnership across multiple HR operational areas. Now I bring the
          magic of coding to my skillset. With a demonstrated affinity for
          learning new things, implementing new tools and developing scaleable
          systems, my next adventure will see me using my newly developed(haha)
          technical skills with JavaScript, Python, React, and more to
          contribute more deeply to rapidly developing tech startups. Excited to
          connect, collaborate, and contribute to the ever-evolving landscape of
          technology! 🚀 #SoftwareDeveloper #TechEnthusiast #CodingMagic
        </p>
      </div>
      <div className='row-span-3'>
        <img
          src='katrine.png'
          className='w-fit aspect-square object-cover rounded-full border-2 object-none object-top'
          alt='Katrine'
        />
      </div>
    </div>
  );
};

export default AboutMe;
