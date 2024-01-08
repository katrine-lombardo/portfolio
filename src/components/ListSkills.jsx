import "../assets/Logos.css";

const ListSkills = () => {
  return (
    <div>
      <div class='flex overflow-x-auto space-x-7'>
        <section class='flex-shrink-1'>
          <div class='icons8-javascript'></div>
          <span>JavaScript</span>
        </section>
        <section class='flex-shrink-1'>
          <div class='icons8-python'></div>
          <span>Python</span>
        </section>
        <section class='flex-shrink-1'>
          <div class='icons8-html'></div>
          <span>HTML</span>
        </section>
        <section class='flex-shrink-1'>
          <div class='icons8-css'></div>
          <span>CSS</span>
        </section>
        <section class='flex-shrink-1'>
          <div class='icons8-sql'></div>
          <span>PostgreSQL</span>
        </section>
        <section class='flex-shrink-1'>
          <div class='icons8-react'></div>
          <span>React</span>
        </section>
        <section class='flex-shrink-1'>
          <div class='icons8-vite'></div>
          <span>Vite</span>
        </section>
        <section class='flex-shrink-1'>
          <div class='icons8-django'></div>
          <span>Django</span>
        </section>
        <section class='flex-shrink-1'>
          <div class='icons8-fastapi'></div>
          <span>FastAPI</span>
        </section>
      </div>
    </div>
  );
};
export default ListSkills;
