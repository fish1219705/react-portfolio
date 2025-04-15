import React, { useEffect, useState } from 'react';
import './project.css';

const ProjectLists = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // 加入 loading 狀態

  useEffect(() => {
    fetch('https://node-js-express-api-app.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);  // 資料抓到後，關掉 loading
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setLoading(false); // 即使錯誤也關掉 loading，避免卡住
      });
  }, []);

  return (
    <section className="project-section" id="work">
      <h2 className="project-title">Projects</h2>
       {/* 👇 顯示 Loading 訊息 */}
       {loading ? (
        <p>Loading projects from personal api....</p>
      ) : (
      <div className="project-cards">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <div className="project-image">
              <img 
                src={`/images/Projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
                alt={project.title} 
              />
            </div>
            <div className="project-text">
              <h3 className="project-card-title">
                <a href={project.URL} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.stack.replace(/,/g, ' · ')}</p>
            </div>
          </div>
        ))}
      </div>
      )}
    </section>
  );
};

export default ProjectLists;
