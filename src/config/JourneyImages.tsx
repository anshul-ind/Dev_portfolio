export interface JourneyImage {
  file: string;
  title: string;
  description?: string;
  date?: string;
}

export const eventsImages: JourneyImage[] = [
  {
    file: '/Events Images/DevFest Indore 2025.png',
    title: 'DevFest Indore 2025',
    description: 'Participated in Google Developer Group DevFest event'
  },
  {
    file: '/Events Images/Milaap Cdgi.png',
    title: 'Milaap Event at CDGI',
    description: 'Organized and participated in social impact event'
  },
  {
    file: '/Events Images/SheBright Web3 & Blockchain .png',
    title: 'SheBright Web3 & Blockchain Workshop',
    description: 'Women in blockchain technology workshop'
  },
  {
    file: '/Events Images/SnowHacks.jpeg',
    title: 'SnowHacks Winter Hackathon',
    description: 'Winter hackathon participation'
  }
];

export const hackathonImages: JourneyImage[] = [
  {
    file: '/Hackathone images/Void Hack1.png',
    title: 'Void Hack 7.0 - Winner',
    description: 'Won ₹20,000 prize in hackathon competition'
  },
  {
    file: '/Hackathone images/void Hacks 2.png',
    title: 'Void Hack 7.0 - Team',
    description: 'Team presentation and project showcase'
  },
  {
    file: '/Hackathone images/HackIndia 1.png',
    title: 'HackIndia 2025 - Participation',
    description: 'National Web3 & AI Hackathon at Noida'
  },
  {
    file: '/Hackathone images/Hackindia 2.png',
    title: 'HackIndia 2025 - Project',
    description: 'Project demonstration at HackIndia'
  },
  {
    file: '/Hackathone images/DevHacks.png',
    title: 'DevHacks CDGI',
    description: 'College-level hackathon participation'
  }
];

export const journeyConfig = {
  eventsImages,
  hackathonImages,
};
