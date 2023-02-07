import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } } ,
  hidden: { y: 80, opacity: 0, scale: 0.5 }
};

interface SkillsCardProps  {
  title: string
  description: string
  src: string
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, description, src }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="flex flex-col p-4"
    >
      <Image src={src} alt={''} width={100} height={100} className='mx-auto' />
      <h1 className="opacity-50 text-center">{title}</h1>
      <text className="text-center w-1/2 mx-auto">{description}</text>
    </motion.div>
  );
};

export default SkillsCard;


