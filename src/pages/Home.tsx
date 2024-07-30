import profileImg from "../assets/profile.jpg";
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";
import useInViewPort from "../hooks/useInViewPort";
import SkillCard from "../components/SkillCard/SkillCard";
import SkillCardItem from "../components/SkillCard/SkillCardItem";
import skillsData from "../data/skillsData.json";
import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import experienceData from "../data/experienceData.json";

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  const aboutInView = useInViewPort(aboutRef, { threshold: 0.5 });
  const skillsInView = useInViewPort(skillsRef, { threshold: 0.5 });
  const experienceInView = useInViewPort(experienceRef, { threshold: 0.1 });

  const renderSkillCards = (): JSX.Element[] => {
    const skillCards = skillsData.topics.map((topic) => {
      const skills = topic.skills.map((skill) => {
        return (
          <SkillCardItem
            key={skill.item}
            item={skill.item}
            rating={skill.rating}
          />
        );
      });
      return (
        <SkillCard
          key={topic.title}
          title={topic.title}
          containerStyle={"py-5p px-10p shadow-light rounded-md"}
        >
          {skills}
        </SkillCard>
      );
    });
    return skillCards;
  };

  const renderExperienceCards = (): JSX.Element[] => {
    const experienceCards = experienceData.experiences.map(
      (experience, index) => {
        return (
          <ExperienceCard
            key={index}
            period={experience.period}
            job={experience.job}
            company={experience.company}
            responsibilities={experience.responsibilities}
            skills={experience.skills}
          />
        );
      }
    );
    return experienceCards;
  };

  return (
    <div className="flex flex-row overflow">
      <div className="w-1/3 flex flex-col border border-r-1 rounded-xl items-center h-sidenav sticky-sidenav">
        <img
          className="h-48 w-48 rounded-md mt-4"
          src={profileImg}
          alt="Profile"
        />
        <nav className="my-10 flex-grow">
          <ul>
            <li className="mb-2 group">
              <span
                className={`inline-block w-1 h-3.5 mr-2 transition-width ease-in-out duration-300 
                ${
                  aboutInView
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
                  skillsInView
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
                  experienceInView
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
        <div className="flex flex-row mb-8">
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </div>
      </div>
      <div className="w-2/3 flex flex-col gap-16 px-5p">
        <img
          className="h-72 w-72 rounded-md md:hidden"
          src={profileImg}
          alt="Profile"
        />
        <section ref={aboutRef} id="about" className="min-h-[60vh]">
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
        <section ref={skillsRef} id="skills" className="min-h-[60vh]">
          <h1 className="text-green-400 text-4xl underline underline-offset-4 mb-4 text-center">
            Skills
          </h1>
          <div className="grid grid-cols-2 gap-4 ">{renderSkillCards()}</div>
        </section>
        <section ref={experienceRef} id="experience" className="min-h-[60vh]">
          <div className="flex flex-col gap-4">
            <h1 className="text-green-400 text-4xl underline underline-offset-4 text-center">
              Experience
            </h1>
            {renderExperienceCards()}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
