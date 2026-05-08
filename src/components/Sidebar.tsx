import profilePic from "../assets/zia pic.jpg";
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src={profilePic} alt="" />
        <h2>Zia Ur Rehman</h2>
        <p>Frontend Developer</p>
      </div>
      <div className="contact-info">
        <div>
          <h4>Email</h4>
          <a href="mailto:info.ziasarwar@gmail.com">info.ziasarwar@gmail.com</a>
        </div>
        <div>
          <h4>Phone</h4>

          <a href="tel:+923315936412">+92 3315936412</a>
        </div>
        <div>
          <h4>Location</h4>

          <span>Mansehra, KPK</span>
        </div>
      </div>
      <div className="social-links">
        <a href="https://github.com/ziasarwar-of">GitHub</a>

        <a href="https://www.linkedin.com/in/zia-ur-rehman-off">
          LinkedIn
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
