export interface Highlight {
  text: string,
  hoverColor: string,
  hyperlink: string,
}

export const highlightLinks: Record<string, Highlight> = {
  MSEUF: {
    text: 'Manuel S. Enverga University Foundation Lucena',
    hoverColor: 'hover:text-red-800 dark:hover:text-red-400',
    hyperlink: 'https://mseuf.edu.ph/',
  },
}
