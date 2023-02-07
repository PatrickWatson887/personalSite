import TimelineCard from "../timelineCard";

const Timeline: React.FC = () => {

  const timeline = [
    {title: 'School - Sullivan Upper', date: 'September 2016', duration: '2 years', description: 'I first started programming in GCSEs using scratch for my IT controlled assessment. I was later introduced properly to programming when I picked it for A level. At the time I was very interersted in maths doing Maths and Further Maths for A level as well. As a result for my A level project I made a calculator that could do up to A level maths and explain the working out. To do this I used python with Flask as a web front end.'},
    {title: 'Kainos - Street Manager', date: 'September 2018', duration: '0.5 years', description: 'Immediately out of school I went into the Earn As You Learn scheme at Kainos. Here I got my first experience at creating production ready code (after code reviews :/) on a project called Street Manager (contract for the Department For Transport). After 6 months on that project I was then rotated into the Applied Innovation department where I along with a fellow EAYL created a proof of concept chat bot that could take in voice commands from an MOT checker and complete the form online.'},
    {title: 'Kainos - Applied Innovation', date: 'February 2019', duration: '0.5 years', description: 'After 6 months on that project I was then rotated into the Applied Innovation department where I along with a fellow EAYL created a proof of concept chat bot that could take in voice commands from an MOT checker and complete the form online. By far and away the most interesting work I got to do in Kainos was the 2 months that I got to research into quantum computing. This researching, meeting with people through out the company to see their opinions and ultimately writing a medium post and presenting my findings to the rest of the innovation team.'},
    {title: 'Kainos - Workday Cloud Platform', date: 'July 2019', duration: '2 years', description: 'While I wasn\'t one of the original members of this team I joined this project pretty early in its development. This meant that a lot more responsibility was placed on each individual member to get more complicted tasks done.'},
    {title: 'Better Climbing', date: 'October 2021', duration: 'Still in development', description: 'After COVID I found myself very unsure how I wanted to continue my future and after lots of thought I realised everything I wanted or needed to learn, I was learning outside of university, as a result I dropped out and decided to pursue projects that mean more to me. Enter my friend Danaan\'s business idea Better Climbing. The goal: revolutionise climbing coaching by making it more accessable and therefore allowing more professional athletes avenues to a career'},
    {title: 'Lightspeed', date: 'April 2022', duration: '0.5 years', description: 'After all my experience so far I\'d still only dabbled in frontend work with a small amount of database interaction, I decided that it was time for a change. I was put onto a project that was entirely backend work moving data through different pipelines from an old product to the new flagship product. '},
    {title: 'Cognitive Sports Therapy (CST)', date: 'Novemember 2022', duration: 'Still Here', description: 'I\'m currently the only developer on this project which means I\'ve been able to get a feel for making decisions on the architecture of a system. Ultimately I went for a mono-repo structure as it allows for type integrity throught out the entire app and admin dashboard. The aim of this product is to get a mental health app into companies around the world to help improve peoples work lives through the mind, body and breath.'},
  ]

  return (
    <>
    <h1 className="text-center text-white text-3xl mt-16">My Coding Journey</h1>
    <ol className="relative border-l w-1/2 border-gray-200 dark:border-gray-700">                  
      {timeline.map((time, index) => (
        <TimelineCard {...time} key={index} />
      ))}
  </ol>
  </>
  );
};

export default Timeline;


