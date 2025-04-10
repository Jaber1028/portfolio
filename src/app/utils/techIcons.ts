import { IconType } from 'react-icons';
import { 
  SiTypescript, 
  SiExpress, 
  SiNodedotjs, 
  SiMongodb, 
  SiSocketdotio, 
  SiReact, 
  SiWebgl, 
  SiSharp, 
  SiUnity, 
  SiVuedotjs, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiSwift, 
  SiFirebase, 
  SiLinux, 
  SiPython 
} from 'react-icons/si';

const iconMap: Record<string, IconType> = {
  'TypeScript': SiTypescript,
  'Express': SiExpress,
  'Node.js': SiNodedotjs,
  'MongoDB': SiMongodb,
  'Socket.io': SiSocketdotio,
  'React': SiReact,
  'WebGL': SiWebgl,
  'C#': SiSharp,
  'Unity': SiUnity,
  'Vue.js': SiVuedotjs,
  'Tailwind': SiTailwindcss,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Swift': SiSwift,
  'Firebase': SiFirebase,
  'Linux': SiLinux,
  'Python': SiPython,
};

export const getTechIcon = (tech: string): IconType | null => {
  return iconMap[tech] || null;
}; 