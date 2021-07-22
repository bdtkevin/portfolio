import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AllData from '../contexts/AllData';
import SWork from './styled/SWork';
import { SPageTitle } from './styled/models';
import 'animate.css';

export default function Work({ color }) {
  const [disProjects, setDisProjects] = useState([]);
  const { projects } = useContext(AllData);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDisProjects(projects);
    }, 1500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [projects]);

  return (
    <SWork color={color}>
      <SPageTitle>#work</SPageTitle>
      {disProjects ? (
        <ul className='projects-list'>
          {disProjects.map((project) => {
            return (
              <li
                className='projects-item animate__animated animate__fadeIn'
                key={project.name}
              >
                <div className='name-link'>
                  <p className='name'>{project.name}</p>
                  <Link to={`/work/${project.name}`} className='link'>
                    <span>See project</span>
                    <svg width='13px' height='10px' viewBox='0 0 13 10'>
                      <path d='M1,5 L11,5'></path>
                      <polyline points='8 1 12 5 8 9'></polyline>
                    </svg>
                  </Link>
                </div>
                <img src={project.img} alt='project name' />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className='load'></div>
      )}
    </SWork>
  );
}
