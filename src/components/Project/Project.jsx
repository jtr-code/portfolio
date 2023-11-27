import "./Project.css";

const Project = () => {
  const projects = [
    {
      name: "Ai Image prompt",
      link: "https://openai-ai-images.netlify.app/"
    },
    {
      name: "ECOMMERCE",
      link: "https://thapastore.netlify.app/"
    },
    {
      name: "Flipkart Clone",
      link: "https://flipcartecommerce.netlify.app/"
    },
    {
      name: "CREATIVE ENVIRONMENTAL SOLUTIONS",
      link: "https://cenvs.com/"
    }
  ];

  return (
    <div className="project">
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h1>{project.name}</h1>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>Website</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
