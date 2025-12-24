import htmlLogo from '../assets/logos/tech/html5-original.svg'
import cssLogo from '../assets/logos/tech/css3-original.svg'
import javascriptLogo from '../assets/logos/tech/javascript-original.svg'
import typescriptLogo from '../assets/logos/tech/typescript-original.svg'
import tailwindLogo from '../assets/logos/tech/tailwindcss-original.svg'
import reactLogo from '../assets/logos/tech/react-original.svg'
import chakraLogo from '../assets/logos/tech/chakraui-original.svg'
import nextjsLogo from '../assets/logos/tech/nextjs-original.svg'
import gitLogo from '../assets/logos/tech/git-original.svg'
import vercelLogo from '../assets/logos/tech/vercel-original.svg'

export type Tech = {
  name: string,
  logo: string,
}

export const tech: Record<string, Tech> = {
  HTML: { name: 'HTML', logo: htmlLogo },
  CSS: { name: 'CSS', logo: cssLogo},
  JavaScript: { name: 'JavaScript', logo: javascriptLogo },
  TypeScript: { name: 'TypeScript', logo: typescriptLogo },
  Tailwind: { name: 'Tailwind', logo: tailwindLogo },
  React: { name: 'React', logo: reactLogo },
  ChakraUI: { name: 'Chakra UI', logo: chakraLogo },
  NextJS: { name: 'Next JS', logo: nextjsLogo },
  Git: { name: 'Git', logo: gitLogo },
  Vercel: { name: 'Vercel', logo: vercelLogo },
}
