import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiFirebase,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiFigma,
  SiGithub,
} from "react-icons/si";

const TECH_STACK = [
  { icon: <SiHtml5 size={40} className="text-[#E34F26]" />, name: "HTML" },
  { icon: <SiCss3 size={40} className="text-[#1572B6]" />, name: "CSS" },
  {
    icon: <SiTailwindcss size={40} className="text-[#06B6D4]" />,
    name: "TailwindCSS",
  },
  {
    icon: <SiJavascript size={40} className="text-[#F7DF1E]" />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript size={40} className="text-[#3178C6]" />,
    name: "TypeScript",
  },
  { icon: <SiReact size={40} className="text-[#61DAFB]" />, name: "React" },
  { icon: <SiRedux size={40} className="text-[#764ABC]" />, name: "Redux" },
  {
    icon: <SiFirebase size={40} className="text-[#FFCA28]" />,
    name: "Firebase",
  },
  { icon: <SiShadcnui size={40} className="text-[#22D3EE]" />, name: "Shadcn" },
  {
    icon: <SiNodedotjs size={40} className="text-[#339933]" />,
    name: "Node.js",
  },
  {
    icon: <SiExpress size={40} className="text-[#000000]" />,
    name: "Express.js",
  },
  { icon: <SiFigma size={40} className="text-[#F24E1E]" />, name: "Figma" },
  { icon: <SiGithub size={40} className="text-[#c7c5c5]" />, name: "GitHub" },
];

function Slider() {
  return (
    <div className="absolute bottom-20 left-1/2 z-30 w-full max-w-[600px] -translate-x-1/2 overflow-hidden rounded-md bg-transparent before:absolute before:top-0 before:left-0 before:z-[2] before:h-full before:w-[80px] before:bg-gradient-to-r before:from-[#a5a5a5] before:to-transparent after:absolute after:top-0 after:right-0 after:z-[2] after:h-full after:w-[80px] after:bg-gradient-to-l after:from-[#a5a5a5] after:to-transparent">
      <div className="animate-infinite-slider flex w-max">
        {TECH_STACK.map(({ icon, name }, index) => (
          <div
            className="slide flex w-[150px] cursor-pointer items-center justify-center gap-2 px-2 py-1 transition-transform duration-300 hover:scale-110"
            key={index}
          >
            {icon}
            <span className="font-medium text-white">{name}</span>
          </div>
        ))}
        {TECH_STACK.map(({ icon, name }, index) => (
          <div
            className="slide flex w-[150px] cursor-default items-center justify-center gap-2 px-2 py-1 transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
            key={index + TECH_STACK.length}
          >
            {icon}
            <span className="font-medium text-white">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
