import confisenseIMG from '../assets/images/projects/ConFiSense.png'
import preskoIMG from '../assets/images/projects/PRESKO.png'
import ligtasIMG from '../assets/images/projects/LIGTAS.png'

import { type Tech, tech } from './tech'

export type Project = {
  image: string,
  title: string,
  description: string,
  projectType: string,
  techStack: Tech[],
  githubLink: string,
}

export const projects: Project[] = [
  {
    image: confisenseIMG,
    title: 'ConFiSense',
    description: 'An AI-powered financial what-if sandbox that lets users model budgeting, debt, and other real-life scenarios, adjust key variables, and instantly visualize outcomes, designed around the everyday financial realities of Filipinos.',
    projectType: 'Hackathon',
    techStack: [
      tech.HTML,
      tech.CSS,
      tech.JavaScript,
    ],
    githubLink: 'https://github.com/eigenlambda123/ConFisense'
  },
  {
    image: preskoIMG,
    title: 'PRESKO',
    description: 'A mobile-first web app that provides real-time heat indices, personalized safety tips, and an interactive map to help users find nearby cooling zones during extreme heat.',
    projectType: 'Hackathon',
    techStack: [
      tech.JavaScript,
      tech.React,
      tech.ChakraUI,
    ],
    githubLink: 'https://github.com/neophiles/KlimaTech'
  },
  {
    image: ligtasIMG,
    title: 'LIGTAS',
    description: 'Ligtas is a mobile-first web app that delivers real-time earthquake data, safety guides, evacuation center mapping, and route navigation to help users stay safe during seismic events.',
    projectType: 'Hackathon',
    techStack: [
      tech.JavaScript,
      tech.React,
      tech.ChakraUI,
    ],
    githubLink: 'https://github.com/eigenlambda123/OpenIT'
  },
]
