import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 100, scale: 0.5 }
};

const dateVariant = {
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -100, scale: 0.5 }
};
interface TimelineCardProps  {
  title: string
  date: string
  duration: string
  description: string
  website?: string
}
const TimelineCard: React.FC<TimelineCardProps> = ({title, date, duration, description, website}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      void control.start("visible");
    } else {
      void control.start("hidden");
    }
  }, [control, inView]);


  return (
    <div className="relative ml-5">
    <motion.div
    ref={ref}
    variants={dateVariant}
    initial="hidden"
    animate={control}
  >
    <time className="absolute -top-10  md:top-24 md:-left-64 text-lg font-normal leading-none w-48 text-right text-white">{date}</time>

  </motion.div>
    <motion.div
      className="bg-white relative rounded-xl my-24 p-4 shadow-xl"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <li className="mb-10 ml-4">
        <div className="absolute w-5 h-1 bg-gray-200 top-24 rounded-full -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        { website ? <a href={website} target="_blank" rel="noreferrer" className="text-gray-900 pb-4">{website}</a>:null }
        <h3 className="text-gray-900 pb-4">{duration}</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
        {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
      </li>
    </motion.div>
    </div>
  );
};

export default TimelineCard;


