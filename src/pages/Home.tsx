import profileImg from "../assets/profile.jpg";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import useInViewPort from "../hooks/useInViewPort";

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  const aboutInView = useInViewPort(aboutRef, { threshold: 0.5 });
  const skillsInView = useInViewPort(skillsRef, { threshold: 0.5 });
  const experienceInView = useInViewPort(experienceRef, { threshold: 0.5 });

  let aboutOn;
  let skillsOn;
  let experienceOn;
  if (experienceInView) {
    aboutOn = false;
    skillsOn = false;
    experienceOn = true;
  } else if ((skillsInView && aboutInView) || skillsInView) {
    aboutOn = false;
    skillsOn = true;
    experienceOn = false;
  } else {
    aboutOn = true;
    skillsOn = false;
    experienceOn = false;
  }

  return (
    <div className="flex h-screen  pl-3 pb-3 overflow-y-hidden">
      <div className="hidden overflow-y-auto md:h-auto md:w-2/6 md:p-6 md:flex md:flex-col md:items-center md:border md:border-r-1 md:rounded-xl ">
        <img className="h-48 w-48 rounded-md" src={profileImg} alt="Profile" />
        <nav className="my-10 flex-grow">
          <ul>
            <li className="mb-2 group">
              <span
                className={`inline-block w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 
                ${
                  aboutOn
                    ? "w-2 bg-green-400"
                    : "group-hover:w-2 group-hover:bg-green-400"
                }`}
              />
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li className="mb-2 group">
              <span
                className={`inline-block w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 
                ${
                  skillsOn
                    ? "w-2 bg-green-400"
                    : "group-hover:w-2 group-hover:bg-green-400"
                }`}
              />
              <HashLink smooth to="/#skills">
                Skills
              </HashLink>
            </li>
            <li className="group">
              <span
                className={`inline-block w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 
                ${
                  experienceOn
                    ? "w-2 bg-green-400"
                    : "group-hover:w-2 group-hover:bg-green-400"
                }`}
              />
              <HashLink smooth to="/#experience">
                Experience
              </HashLink>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row">
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </div>
      </div>
      <div className="w-full overflow-y-auto md:w-4/6 md:px-5p  md:flex md:flex-col md:gap-32">
        <img
          className="h-72 w-72 rounded-md md:hidden"
          src={profileImg}
          alt="Profile"
        />
        <section
          ref={aboutRef}
          id="about"
          // className="min-h-3/4"
        >
          <h2 className="text-xl mb-1">Hello! My name is...</h2>
          <h1 className="text-4xl mb-1 text-green-400">Danial Abu Bakar</h1>
          <h2 className="text-2xl mb-3">Software Developer</h2>
          <h3>Singaporean</h3>
          <h3 className="mb-3">BA in Business Information Systems</h3>

          <p className="text-sm mb-3">
            When I first started, I worked mostly in IT operations and support.
            However, I wanted to be more hands on in coding, which is why I
            decided to pick up programming. Back in 2022, I managed to
            transition into a software developer career where I focused on
            backend development. 2 years to the present, i've learnt alot as a
            backend developer, but at the same time I have always tried to
            expand my knowledge into frontend development.
          </p>
          <p className="text-sm mb-3">
            On my free time I like to explore and learn on different frontend
            tech stacks and work on mini projects. Currently I am using React
            with TypeScript and Tailwind CSS for styling. Of course its not all
            work. I also love to unwind by going to the gym or the occasional
            rock climb.
          </p>
          <p className="text-sm mb-3">
            I am currently open for job opportunities and I am looking out for
            roles in Frontend or Full-stack web development. If you feel that I
            am a fit, please feel free to get in touch!
          </p>
        </section>
        <section
          ref={skillsRef}
          id="skills"
          className="grid grid-cols-2 gap-4"
        >
          <div className="py-5p px-10p shadow-light rounded-md">
            <h1 className="mb-3 font-semibold">Frontend Frameworks</h1>
            <p>ReactJS 60%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-60p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>Tailwind CSS 60%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-60p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>Radix UI 30%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-40p h-full border rounded-md bg-green-400"></div>
            </div>
          </div>
          <div className="py-5p px-10p shadow-light rounded-md">
            <h1 className="mb-3 font-semibold">Backend Frameworks</h1>
            <p>Spring Boot 70%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-70p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>NodeJS 20%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-20p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>ExpressJS 30%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-30p h-full border rounded-md bg-green-400"></div>
            </div>
          </div>
          <div className="py-5p px-10p shadow-light rounded-md">
            <h1 className="mb-3 font-semibold">Databases</h1>
            <p>MySQL 60%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-60p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>Microsoft SQL Server 50%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-50p h-full border rounded-md bg-green-400"></div>
            </div>
          </div>
          <div className="py-5p px-10p shadow-light rounded-md">
            <h1 className="mb-3 font-semibold">Programming Languages</h1>
            <p>HTML, CSS 70%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-70p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>Javascript 70%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-70p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>Typescript 60%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-60p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>Java 80%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-80p h-full border rounded-md bg-green-400"></div>
            </div>
          </div>
          <div className="shadow-light rounded-md py-5p px-10p col-span-2">
            <h1 className="mb-3 font-semibold">Other</h1>
            <p>GitHub, GitLab 80%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-80p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>Postman 90%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-90p h-full border rounded-md bg-green-400"></div>
            </div>
            <p>Swagger OpenAPI 90%</p>
            <div className="w-full h-3 mb-2 border border-violet-800 rounded-md">
              <div className="w-90p h-full border rounded-md bg-green-400"></div>
            </div>
          </div>
        </section>
        <section
          ref={experienceRef}
          id="experience"
          className="min-h-3/4 flex flex-col"
        >
          <div>0</div>
          <div>0</div>
          <div>0</div>
        </section>
      </div>
    </div>
  );
};

export default Home;
