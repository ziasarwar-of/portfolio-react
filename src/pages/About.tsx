function About() {
  const aboutText = `
    I am a passionate Frontend Developer with a strong interest in creating
    modern, responsive, and user-friendly web applications. I specialize in
    React JS, JavaScript, HTML, and CSS, and enjoy transforming ideas into
    clean and interactive digital experiences. I focus on writing clean,
    maintainable code and building interfaces that provide smooth performance across all devices. Continuously learning new technologies
    and improving my skills is an important part of my development journey.
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <section className="page">
      <h2 className="section-title">About Me</h2>

      <div className="section-line"></div>

      <div className="about">
        <p>{aboutText}</p>
      </div>
    </section>
  );
}

export default About;
