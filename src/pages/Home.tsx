import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Skills from "./Skill";

function Home() {
  return (
    <section className="page">
      <h1 className="hero-title">Hi, I'm Zia Ur Rehman</h1>

      <p className="hero-text">
        Frontend Developer passionate about building modern, responsive, and
        user-focused web applications using React JS, JavaScript, HTML, and CSS.
        I create clean and interactive digital experiences with performance,
        accessibility, and modern UI design in mind.
      </p>

      <About />
      <Skills />

      <Portfolio />
      <Contact />
    </section>
  );
}

export default Home;
