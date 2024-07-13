import profileImg from "../assets/profile.jpg";
import { useRef } from "react";
import {HashLink} from 'react-router-hash-link'
import useInViewPort from '../hooks/useInViewPort'

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  const aboutInView = useInViewPort(aboutRef, { threshold: 0.5 });
  const skillsInView = useInViewPort(skillsRef, { threshold: 0.5 });
  const experienceInView = useInViewPort(experienceRef, { threshold: 0.5 });

  console.log(`aboutInView: ${aboutInView}`)
  console.log(`skillsInView: ${skillsInView}`)
  console.log(`experienceInView: ${experienceInView}`)

  return (
    <div className="flex h-screen overflow-y-hidden">
      <div id="left-section" className="w-3/6 p-6 flex flex-col items-center bg-red-400">
        <img
          className="h-72 w-72 rounded-md"
          src={profileImg}
          alt="Profile Image"
        />
        <nav className="my-10">
          <ul>
          <li className="mb-4 group">
              <span className={`inline-block w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 
                ${aboutInView ? 'w-2 bg-black' : 'group-hover:w-2 group-hover:bg-black'}`}/>
              <HashLink smooth to="/#about">About</HashLink>
            </li>
            <li className="mb-4 group">
            <span className={`inline-block w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 
                ${skillsInView ? 'w-2 bg-black' : 'group-hover:w-2 group-hover:bg-black'}`}/>
              <HashLink smooth to="/#skills">Skills</HashLink>
            </li>
            <li className="mb-4 group">
            <span className={`inline-block w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 
                ${experienceInView ? 'w-2 bg-black' : 'group-hover:w-2 group-hover:bg-black'}`}/>
              <HashLink smooth to="/#experience">Experience</HashLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="right-section" className="w-3/6 bg-green-400 overflow-y-auto">
        <section ref={aboutRef} id="about" className="h-full border border-blue-500">About</section>
        <section ref={skillsRef} id="skills" className="h-full border border-blue-500">Skills</section>
        <section ref={experienceRef} id="experience" className="h-full border border-blue-500">Experience</section>
      </div>
    </div>
  );
};


export default Home;
