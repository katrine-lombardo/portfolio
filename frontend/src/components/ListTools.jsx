import "../styles/Logos.css";

const ListTools = () => {
  return (
    <div>
      <div className='flex overflow-x-auto space-x-7'>
        <section className='flex-shrink-1'>
          <div className='icons8-docker'></div>
          <span>Docker</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-tailwind'></div>
          <span>Tailwind</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-bootstrap'></div>
          <span>Bootstrap</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-github'></div>
          <span>Github</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-gitlab'></div>
          <span>Gitlab</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-rest'></div>
          <span>RESTful API</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-cursor'></div>
          <span>Cursor IDE</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-google-drive'></div>
          <span>Google Drive</span>
        </section>
        <section className='flex-shrink-1'>
          <div className='icons8-excel'></div>
          <span>Excel</span>
        </section>
      </div>
    </div>
  );
};
export default ListTools;
