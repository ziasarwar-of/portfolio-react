import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
function App() {
  return (
    // <div className="main-container">
    //   <div className="sidebar">
    //     {/* profile */}
    //     <div className="profile">
    //       <img src="\src\assets\zia pic.jpg" alt="profile-picture" />
    //       <h2 className="profile-name">Zia Ur Rehman</h2>
    //       <p className="profile-label">Frontend Developer</p>
    //     </div>
    //     {/* contact */}
    //     <div className="contact">
    //       <div className="email">
    //         <h3 className="email-heading">Email</h3>
    //         <a href="mailto:info.ziasarwar@gmail.com" className="email-label">
    //           info.ziasarwar@gmail.com
    //         </a>
    //       </div>
    //       <div className="phone">
    //         <h3 className="phone-heading">Phone</h3>
    //         <a href="tel:+92 3315936412" className="phone-label">
    //           +92 3315936412
    //         </a>
    //       </div>
    //       <div className="location">
    //         <h3 className="location-heading">Location</h3>
    //         <a href="location" className="location-label">
    //           Mansehra Kpk
    //         </a>
    //       </div>
    //     </div>
    //     <div className="social">
    //       <a href="www.linkedin.com/in/zia-ur-rehman-off">
    //         <img
    //           src="https://www.svgrepo.com/show/57068/linkedin.svg"
    //           alt="linkedin"
    //         />
    //       </a>
    //       <a href="https://github.com/ziasarwar-of">
    //         <img
    //           src="https://www.svgrepo.com/show/94698/github.svg"
    //           alt="github"
    //         />
    //       </a>
    //     </div>
    //   </div>
    //   <div className="main-content">
    //     <div className="navigation">
    //       <nav className="navbar">
    //         <ul className="nav-links">
    //           <li>
    //             <a href="/" className="active">
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a href="/about">About</a>
    //           </li>
    //           <li>
    //             <a href="/skill">Skill</a>
    //           </li>
    //           <li>
    //             <a href="/portfolio">Portfolio</a>
    //           </li>
    //           <li>
    //             <a href="/contact">Contact</a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>

    //     {/* about section */}

    //     <div className="about">
    //       <h2>About Me</h2>
    //       <div className="line"></div>
    //       <p className="content">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
    //         perspiciatis eveniet dolorem sint asperiores hic minima, odit cum
    //         obcaecati cumque, facere eum itaque recusandae harum doloremque
    //         dolore vero, impedit voluptatem corrupti? Adipisci ducimus molestias
    //         ullam maiores tempore impedit provident, dicta quae molestiae,
    //         dolore obcaecati ipsum totam tempora nihil deleniti inventore!
    //       </p>
    //     </div>

    //     {/* skill section */}
    //     <div className="skill">
    //       <h2>Skill</h2>
    //       <div className="line"></div>
    //       <div className="grid-container">
    //         <div className="grid-item">
    //           <img
    //             src="https://www.svgrepo.com/show/508837/html5-01.svg"
    //             alt=""
    //           />
    //           <h3>HTML</h3>
    //         </div>
    //         <div className="grid-item">
    //           <img src="https://www.svgrepo.com/show/372994/css3.svg" alt="" />
    //           <h3>Css</h3>
    //         </div>
    //         <div className="grid-item">
    //           <img
    //             src="https://www.svgrepo.com/show/305241/github.svg"
    //             alt=""
    //           />
    //           <h3>Git & Github</h3>
    //         </div>
    //         <div className="grid-item">
    //           <img
    //             src="https://www.svgrepo.com/show/508935/nodejs02.svg"
    //             alt=""
    //           />
    //           <h3>Javascript</h3>
    //         </div>
    //         <div className="grid-item">
    //           <img src="https://www.svgrepo.com/show/445968/react.svg" alt="" />
    //           <h3>React Native</h3>
    //         </div>
    //         <div className="grid-item">
    //           <img
    //             src="https://www.svgrepo.com/show/443364/brand-react.svg"
    //             alt=""
    //           />
    //           <h3>React</h3>
    //         </div>
    //       </div>
    //       <div className="portfolio">
    //         <h2>Portfolio</h2>
    //         <div className="line"></div>
    //         <div className="project-container">
    //           <div className="project">
    //             <img
    //               src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //               alt=""
    //             />
    //             <div className="card">
    //               <h3>E-Commerse Website</h3>
    //               <p>
    //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //                 Porro at architecto excepturi soluta, nisi cupiditate unde
    //                 cumque esse et a.
    //               </p>
    //               <span>HTML</span>
    //               <span>Css</span>
    //             </div>
    //           </div>
    //           <div className="project">
    //             <img
    //               src="https://images.pexels.com/photos/461073/pexels-photo-461073.jpeg"
    //               alt=""
    //             />
    //             <div className="card">
    //               <h3>Bussiness Landing Page</h3>
    //               <p>
    //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //                 Porro at architecto excepturi soluta, nisi cupiditate unde
    //                 cumque esse et a.
    //               </p>
    //               <span>React Native</span>
    //               <span>JavaScript</span>
    //               <span>Css</span>
    //             </div>
    //           </div>
    //           <div className="project">
    //             <img
    //               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //               alt=""
    //             />
    //             <div className="card">
    //               <h3>Analytic Dashborad UI</h3>
    //               <p>
    //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //                 Porro at architecto excepturi soluta, nisi cupiditate unde
    //                 cumque esse et a.
    //               </p>
    //               <span>React JS</span>
    //               <span>Css</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="app-layout">
      <Sidebar/>
      <div className="content-area">
        <NavBar/>
        

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skill/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
