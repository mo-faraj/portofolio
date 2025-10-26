import './Proj.css';
import ph1 from '../imgs/first.jpg'
import ph2 from '../imgs/second.jpg'
import ph3 from '../imgs/third.jpg'
import ph4 from '../imgs/nextjs3.jpg'

const Proj = () => {

  const projects = [
    {
      tab: 'Tab 1',
      title: 'Cars gallery',
      image: ph1,
      desc:'html css js',
      src:'https://mo-faraj.github.io/Cars-project/'
      
    },
    {
      tab: 'Tab 1',
      title: "Computers company",
      image: ph2,
      desc:'html css js',
      src:' https://mo-faraj.github.io/Grand-company/'
    },
    {
      tab: 'Tab 1',
      title: 'Real estate',
      image: ph3,
      desc:'react',
      src:'https://mo-faraj.github.io/Real-estate/'
    },
    {
      tab: 'Tab 1',
      title: 'Grand companey',
      image: ph4,
      desc:'Next.js',
      src:' https://mo-faraj.github.io/grand-next.js/'
    },
    

  ];

  const filteredProjects = projects.filter(p => p);

  return (
    <div className="proj" id='proj'>
    <div className="container">
      <header>
        <h1>Projects</h1>
        <p>these are some of my projects</p>
      </header>

      

      <div className="project-grid">
        {filteredProjects.map((proj, idx) => (
          <div key={idx} className="project-card">
           <a href={proj.src}><img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <h4>{proj.desc}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Proj;
