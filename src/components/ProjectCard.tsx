function ProjectCard({ image, title, description, tech1, tech2 }:any) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="tags">
          <span>{tech1}</span>
          <span>{tech2}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;