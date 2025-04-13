import './project.css'
export default function Project() {
    return (
      <section className="project-section" id="work">
        <h2 className="project-title">Projects</h2>
        <div className="project-cards">
          {[1, 2, 3].map((num) => (
            <div className="project-card" key={num}>
              <div className="project-image"></div>
              <div className="project-text">
                <h3 className="project-card-title">Project Title</h3>
                <p className="project-description">A Short description about the project</p>
                <p className="project-tech">tech · stack · list</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  } 