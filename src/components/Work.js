import WorkItem from './Work-Item';
import './Work.css'



function Work() {
  return (
    <section id="work">
      <ol className='project-list'>
        <WorkItem />
        <WorkItem />
        <WorkItem />
        <WorkItem />
      </ol>
    </section>
  );

}

export default Work;