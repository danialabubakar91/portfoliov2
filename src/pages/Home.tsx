import profileImg from "../assets/profile.jpg";
import { useRef, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("about");
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (
      experienceRef.current &&
      scrollPosition >= experienceRef.current.offsetTop &&
      activeSection !== "experience"
    ) {
      setActiveSection("experience");
    } else if (
      skillsRef.current &&
      scrollPosition >= skillsRef.current.offsetTop &&
      activeSection !== "skills"
    ) {
      setActiveSection("skills");
    } else if (
      aboutRef.current &&
      scrollPosition >= aboutRef.current.offsetTop &&
      activeSection !== "about"
    ) {
      setActiveSection("about");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const doClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href) {
      const targetRef =
        href === "#about"
          ? aboutRef.current
          : href === "#skills"
          ? skillsRef.current
          : experienceRef.current;
      if (targetRef) {
        targetRef.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
        setActiveSection(href.substring(1));
      }
    }
  };
  
  console.log(`the location: ${useLocation().pathname}`)
  return (
    <div className="flex h-screen overflow-y-hidden">
      <section className="w-3/6 p-6 flex flex-col items-center bg-red-400">
        <img
          className="h-72 w-72 rounded-md"
          src={profileImg}
          alt="Profile Image"
        />
        <nav className="my-10">
          <ul>
            <li className="mb-4 group">
              <span 
                className={`${activeSection==='about' ? 
                  'inline-block bg-black w-2 h-3.5 mr-2':
                  'inline-block bg-red-400 w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 group-hover:inline-block group-hover:w-2 group-hover:bg-black' 
                }`}
              />
              <a href="#about" onClick={doClick}>
                About
              </a>
            </li>
            <li className="mb-4 group">
              <span 
                className={`${activeSection==='skills' ? 
                  'inline-block bg-black w-2 h-3.5 mr-2':
                  'inline-block bg-red-400 w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 group-hover:inline-block group-hover:w-2 group-hover:bg-black' 
                }`}
              />
              <a href="#skills" onClick={doClick}>
                Skills
              </a>
            </li>
            <li className="mb-4 group">
              <span 
                className={`${activeSection==='experience' ? 
                  'inline-block bg-black w-2 h-3.5 mr-2':
                  'inline-block bg-red-400 w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 group-hover:inline-block group-hover:w-2 group-hover:bg-black' 
                }`}
              />
              <a href="#experience" onClick={doClick}>
                Experience
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="w-3/6 bg-green-400 overflow-y-auto">
        <h1 ref={aboutRef} id="about" className="h-full border border-blue-500">
          About
        </h1>
        <h1
          ref={skillsRef}
          id="skills"
          className="h-full border border-blue-500"
        >
          Skills
        </h1>
        <h1
          ref={experienceRef}
          id="experience"
          className="h-full border border-blue-500"
        >
          Experience
        </h1>
      </section>
    </div>
  );
};

export default Home;
