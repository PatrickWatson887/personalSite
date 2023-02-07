import Head from "next/head";
import { NextPage } from "next";
import Timeline from "../components/timeline";
import Image from "next/image";
import SkillsGrid from "../components/skillsGrid";
import ContactMe from "../components/contactMe";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Patrick Watson</title>
        <meta name="description" content="See Patrick's coding journey and his skills" />
      </Head>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-[#c2edcd] to-[#387f87]">
        <div className="h-screen">
          <Image src={"/mestaring.png"} fill alt={""} className='object-cover'/>
        </div>
        
        <Timeline/>
        <SkillsGrid />
        <ContactMe />
        <div className="h-64"></div>
      </main>
    </>
  );
};

export default Home;
