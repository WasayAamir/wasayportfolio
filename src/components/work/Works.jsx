import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load all projects on initial render
    setProjects(projectsData);
  }, []);

  return (
    <div>
      {/* Removed the filtering tabs */}
      <div className='work__container container grid'>
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
