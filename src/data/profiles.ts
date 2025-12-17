import githubLogoWhite from '../assets/logos/profiles/github-mark-white.png'
import githubLogo from '../assets/logos/profiles/github-mark.png'
import linkedinLogo from '../assets/logos/profiles/LI-In-Bug.png'
import facebookLogo from '../assets/logos/profiles/Facebook_Logo_Primary.png'

export type Profile = {
  logos: string[],
  platformName: string,
  link: string,
}

export const profiles = [
  {
    logos: [githubLogo, githubLogoWhite],
    platformName: 'GitHub',
    link: 'https://github.com/neophiles',
  },
  {
    logos: [linkedinLogo, linkedinLogo],
    platformName: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marc-neil-tagle/',
  },
  {
    logos: [facebookLogo, facebookLogo],
    platformName: 'Facebook',
    link: 'https://www.facebook.com/mnv.tagle.06',
  },
]
