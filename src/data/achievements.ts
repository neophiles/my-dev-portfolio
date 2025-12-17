import introToFrontend from '../assets/images/achievements/Intro-to-Frontend-Development.png'
import progWithJS from '../assets/images/achievements/Programming-with-JavaScript.png'
import introToGit from '../assets/images/achievements/Intro-to-Git-and-GitHub.png'

export type Achievement = {
  image: string,
  title: string,
  link: string,
}

export const achievements: Achievement[] = [
  {
    image: introToFrontend,
    title: 'Introduction to Front-End Development',
    link: 'https://coursera.org/verify/3DU5G2VTGIZ3',
  },
  {
    image: progWithJS,
    title: 'Programming with JavaScript',
    link: 'https://coursera.org/verify/9SVIXOLCM2QX',
  },
  {
    image: introToGit,
    title: 'Introduction to Git and GitHub',
    link: 'https://coursera.org/verify/0G9VH1UH1OIA',
  }
]
