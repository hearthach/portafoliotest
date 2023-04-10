import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const res = await axios.get('/api/projects');
      setProjects(res.data);
    };
    getProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.url}>{project.url}</a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
