const AboutMe = () => {
  return (
    <div>
      <h1 className='mb-4'>About Me</h1>
      <div className='flex flex-wrap gap-4 justify-center lg:flex-no-wrap'>
        <div className='basis-3/5'>
          <p className='my-2'>Hi, I'm Katrine!</p>
          <p>
            I'm a recent Hack Reactor coding bootcamp graduate and seasoned
            workplace leader with a passion for problem-solving.
          </p>
          <p className='my-2'>
            I aim to use cutting-edge technology for innovative problem-solving
            and actively promote diversity in the tech industry. With a strong
            work ethic and a multicultural background (born in Scotland,
            Norwegian as my first language), I see myself as a bridge-builder
            connecting ideas, people, and solutions.
          </p>
          <p className='my-2'>
            In my 10-year HR journey at tech startups, I've demonstrated
            determination, loyalty, and humor, refining skills in data and
            systems. I've been told I bring a "special sauce" of resilience,
            continuous growth, humour, and authenticity.
          </p>
          <p className='my-2'>
            Excited to connect, collaborate, and contribute to the ever-evolving
            landscape of technology! 🚀
          </p>
        </div>
        <div className='flex-none md:shrink-0'>
          <img
            src='katrine.png'
            className='w-fit aspect-square object-cover rounded-full border-2 object-none object-top'
            alt='Katrine'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
