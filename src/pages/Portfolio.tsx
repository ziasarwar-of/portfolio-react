import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  return (
    <section className="page">
      <h2 className="section-title">Portfolio</h2>

      <div className="section-line"></div>

      <div className="projects-grid">
        <ProjectCard
          image="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
          title="E-Commerce Website"
          description="Modern ecommerce website using React JS."
          tech1="React"
          tech2="CSS"
        />

        <ProjectCard
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          title="Dashboard UI"
          description="Responsive analytics dashboard UI design."
          tech1="JavaScript"
          tech2="React"
        />
      </div>
    </section>
  );
}

export default Portfolio;