import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate?: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    company: 'Bluesstock.in',
    position: 'Full Stack Developer Intern',
    location: 'Remote',
    image: '/company/BlueStock.png',
    description: [
      'Fintech web technology integration and real-world development practices.',
      'Building scalable financial applications with modern web technologies.',
      'Gaining hands-on experience in production-level development environments.',
    ],
    startDate: 'May 2025',
    endDate: 'July 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
    ],
    website: 'https://bluesstock.in',
  },
  // {
  //   isCurrent: false,
  //   company: 'SecurFin',
  //   position: 'Full Stack Developer & Web3 Engineer',
  //   location: 'Personal Project',
  //   image: '/company/securfin.png',
  //   description: [
  //     'Developed blockchain-based expense & finance tracking system with smart contract integration.',
  //     'Implemented secure decentralized storage and account handling using Solidity and Ganache.',
  //     'Built full-stack application with React, Node.js, and MongoDB for seamless Web3 experience.',
  //   ],
  //   startDate: '2024',
  //   endDate: '2024',
  //   technologies: [
  //     {
  //       name: 'React',
  //       href: 'https://react.dev/',
  //       icon: <ReactIcon />,
  //     },
  //     {
  //       name: 'Node.js',
  //       href: 'https://nodejs.org/',
  //       icon: <NodeJs />,
  //     },
  //     {
  //       name: 'MongoDB',
  //       href: 'https://mongodb.com/',
  //       icon: <MongoDB />,
  //     },
  //     {
  //       name: 'Tailwind CSS',
  //       href: 'https://tailwindcss.com/',
  //       icon: <TailwindCss />,
  //     },
  //     {
  //       name: 'Solidity',
  //       href: 'https://soliditylang.org/',
  //       icon: <JavaScript />,
  //     },
  //   ],
  //   website: '#',
  //   github: 'https://github.com/anshul-ind',
  // },
  // {
  //   isCurrent: false,
  //   company: 'Airbnb Clone',
  //   position: 'Full Stack Developer',
  //   location: 'Personal Project',
  //   image: '/company/airbnb.png',
  //   description: [
  //     'Built full-stack booking platform with property listing and booking workflow.',
  //     'Implemented authentication system and dynamic UI rendering with React and Three.js.',
  //     'Created interactive 3D UI elements for enhanced user experience.',
  //   ],
  //   startDate: '2024',
  //   endDate: '2024',
  //   technologies: [
  //     {
  //       name: 'React',
  //       href: 'https://react.dev/',
  //       icon: <ReactIcon />,
  //     },
  //     {
  //       name: 'Three.js',
  //       href: 'https://threejs.org/',
  //       icon: <JavaScript />,
  //     },
  //     {
  //       name: 'Node.js',
  //       href: 'https://nodejs.org/',
  //       icon: <NodeJs />,
  //     },
  //     {
  //       name: 'MongoDB',
  //       href: 'https://mongodb.com/',
  //       icon: <MongoDB />,
  //     },
  //     {
  //       name: 'Tailwind CSS',
  //       href: 'https://tailwindcss.com/',
  //       icon: <TailwindCss />,
  //     },
  //   ],
  //   website: '#',
  //   github: 'https://github.com/anshul-ind',
  // },
  // {
  //   isCurrent: false,
  //   company: 'NoteBuddy',
  //   position: 'Frontend Developer',
  //   location: 'Personal Project',
  //   image: '/company/notebuddy.png',
  //   description: [
  //     'Developed notes management web app with create, manage, and organize functionality.',
  //     'Built responsive and minimal productivity UI using React and Tailwind CSS.',
  //     'Implemented efficient state management for seamless note-taking experience.',
  //   ],
  //   startDate: '2023',
  //   endDate: '2023',
  //   technologies: [
  //     {
  //       name: 'React',
  //       href: 'https://react.dev/',
  //       icon: <ReactIcon />,
  //     },
  //     {
  //       name: 'Tailwind CSS',
  //       href: 'https://tailwindcss.com/',
  //       icon: <TailwindCss />,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: 'https://javascript.com/',
  //       icon: <JavaScript />,
  //     },
  //   ],
  //   website: '#',
  //   github: 'https://github.com/anshul-ind',
  // },
];
