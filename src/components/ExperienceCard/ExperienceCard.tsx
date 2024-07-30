interface Props {
  period: string;
  job: string;
  company: string;
  responsibilities: string[];
  skills: string[];
}
const ExperienceCard: React.FC<Props> = ({
  period,
  job,
  company,
  responsibilities,
  skills,
}: Props) => {
  const renderResponsibilities = (): JSX.Element[] => {
    return responsibilities.map((responsibility, index) => {
      return <li key={index}>{responsibility}</li>;
    });
  };

  const renderSkills = (): JSX.Element[] => {
    return skills.map((skill, index) => {
      return (
        <div
          key={index}
          className="border border-green-300 rounded-2xl w-fit px-4 py-1 mt-4 bg-green-800 text-green-300"
        >
          {skill}
        </div>
      );
    });
  };

  return (
    <div className="bg-gray-400 rounded-md bg-opacity-10 border border-gray-100 p-4">
      <p className="mb-3">{period}</p>
      <h1 className="text-green-400">{`${job} - ${company}`}</h1>
      <ul className="list-disc px-6 list-marker-green text-sm">
        {renderResponsibilities()}
      </ul>
      <div className="flex flex-row flex-wrap gap-2 text-sm">
        {renderSkills()}
      </div>
    </div>
  );
};

export default ExperienceCard;
