import ReactIcon from '@/components/technologies/ReactIcon';
import NodeJs from '@/components/technologies/NodeJs';
import MongoDB from '@/components/technologies/MongoDB';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import ExpressJs from '@/components/technologies/ExpressJs';
import ThreeJs from '@/components/technologies/ThreeJs';
import Github from '@/components/technologies/Github';
import Netlify from '@/components/technologies/Netlify';
import Motion from '@/components/technologies/Motion';
import SocketIo from '@/components/technologies/SocketIo';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'SecurFin - Web3 Finance Assistant',
    description: 'Blockchain-based expense & finance tracking system with smart contract powered transaction recording and secure decentralized storage',
    image: '/project/SecureFin.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Solidity', icon: <TypeScript key="solidity" /> },
      { name: 'Ganache', icon: <Github key="ganache" /> },
    ],
    github: 'https://github.com/anshul-ind',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/securfin',
    isWorking: false,
  },
  {
    title: 'Airbnb Clone - Full Stack Booking Platform',
    description: 'Property listing and booking workflow with authentication, dynamic UI rendering, and interactive 3D UI elements',
    image: '/project/AirBnb.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
    ],
    github: 'https://github.com/anshul-ind',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/airbnb-clone',
    isWorking: false,
  },
  {
    title: 'NoteBuddy - Notes Management Web App',
    description: 'Create, manage, and organize personal notes with responsive and minimal productivity UI',
    image: '/project/NotesBuddy.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'JavaScript', icon: <TypeScript key="javascript" /> },
      { name: 'NPM', icon: <Netlify key="npm" /> },
    ],
    github: 'https://github.com/anshul-ind',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/notebuddy',
    isWorking: false,
  },
  {
    title: 'Netflix Clone - Streaming Platform',
    description: 'Authentication and dynamic content rendering with modular full-stack architecture',
    image: '/project/Netflix.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Firebase', icon: <Vercel key="firebase" /> },
    ],
    github: 'https://github.com/anshul-ind',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/netflix-clone',
    isWorking: false,
  },
  {
    title: '3D Dynamic Golf Website',
    description: 'Animated interactive website with modular UX using GSAP, Swiper.js, and Locomotive.js',
    image: '/project/Sidcup.png',
    link: '#',
    technologies: [
      { name: 'GSAP', icon: <Motion key="gsap" /> },
      { name: 'Swiper.js', icon: <SocketIo key="swiper" /> },
      { name: 'Locomotive.js', icon: <ThreeJs key="locomotive" /> },
    ],
    github: 'https://github.com/anshul-ind',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/3d-golf',
    isWorking: false,
  },
  {
    title: 'Academic Notes Sharing Portal',
    description: 'Collaborative study material sharing platform for students',
    image: '/project/Sidcup.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/anshul-ind',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/notes-portal',
    isWorking: false,
  },
  {
    title: 'NoteFi - AI Text Paste Generator',
    description: 'AI-assisted customizable text generation and sharing platform',
    image: '/project/Netflix.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/anshul-ind',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/notefi',
    isWorking: false,
  },
];
