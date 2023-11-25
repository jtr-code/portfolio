import "./Project.css";

// images
import flipkart from "./images/flipcart.png";
import ai_image from "./images/ai-image.png";
import thapastore from "./images/thapastore.png";

const Project = () => {
  const project = [
    {
      name: "Thapa Store",
      desc: "React Ecommerce project ",
      repo: "https://github.com/jtr-code/ReactEcommerce.git",
      link: "https://thapastore.netlify.app/",
      img: thapastore
    },
    {
      name: "Ai Image Generator",
      desc: "Dalle based ai image generating app",
      repo: "https://github.com/jtr-code/ai-image_generator.git",
      link: "https://openai-ai-images.netlify.app/",
      img: ai_image
    },
    {
      name: "Flipkart Clone",
      desc: "A mvc based mern app",
      repo: "https://github.com/jtr-code/Flipkart.git",
      link: "https://flipcartecommerce.netlify.app/",
      img: flipkart
    }
  ];

  return (
    <div className="project">
      <div className="project-list">
        <div className="project-item">
          <h1>AI IMAGE PROMPT</h1>
          <button>Website</button>
        </div>
        <div className="project-item">
          <h1>ECOMMERCE</h1>
          <button>Website</button>
        </div>
        <div className="project-item">
          <h1>FLIPKART CLONE</h1>
          <button>Website</button>
        </div>
        <div className="project-item">
          <h1>CREATIVE ENVIRONMENTAL SOLUTIONS</h1>
          <button className="btn">Website</button>
        </div>
      </div>

      {/* <div className="project-wrapper">
        <div className="project-content">
          <h2>Projects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            labore assumenda magnam beatae. Expedita earum sit dolor aperiam.
            Officiis, aperiam excepturi! Ipsam a vel aperiam!
          </p>
        </div>
        <div className="project-list">
          {project.map((work, index) => (
            <div key={index} className="project-items" style={{ x }}>
              <div className="project-desc">
                <h3 className="content">{work.name}</h3>
                <p className="content">{work.desc}</p>
                <button className="btn">Website</button>
              </div>
              <img
                loading="lazy"
                src={work.img}
                alt={work.name}
                className="image"
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Project;
