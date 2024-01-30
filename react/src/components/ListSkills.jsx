import "../styles/Logos.css";

const ListSkills = () => {
  return (
    <div>
      <div className='flex overflow-x-auto space-x-7'>
        <section className='flex-shrink-1'>
          <div className='icons8-javascript'></div>
          <span>JavaScript</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-python'></div>
          <span>Python</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-html'></div>
          <span>HTML</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-css'></div>
          <span>CSS</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-sql'></div>
          <span>PostgreSQL</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-react'></div>
          <span>React</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-vite'></div>
          <span>Vite</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-django'></div>
          <span>Django</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-fastapi'></div>
          <span>FastAPI</span>
        </section>
      </div>
    </div>
  );
};
export default ListSkills;
