import SkillsCard from "../skillsCard";

const SkillsGrid: React.FC = () => {
  const skills = [
    {title: 'React Native', description: '6 months experience building an app for CST', src: '/react-native.png'},
    {title: 'Typescript', description: '1 year experience, used in every project since discovery! Love it', src: '/typescript.png'},
    {title: 'NextJs', description: '1 year experience, was introduced through Better Climbing and continued to expand my knowledge in CST', src: '/nextjs.png'},
    {title: 'AWS', description: '4 years experience hosting websites on EC2 or using lambdas/dynamoDb', src: '/aws.png'},
    {title: 'Docker', description: '2 years experience using it in Kainos but only got to grips setting it up since CST', src: '/docker.png'},
    {title: 'Tailwind', description: '1 year experience, used on both Better Climbing and CST', src: '/tailwind.png'},
  ]

  return (
    <>
    <h1 className="text-center text-white text-3xl mt-16">Main Skills</h1>
    <div className="grid grid-cols-3 gap-y-28 bg-white rounded-md p-10">
      {skills.map((skill) => (
        <SkillsCard {...skill}/>
      ))}
    </div>
    </>
  );
};

export default SkillsGrid;


