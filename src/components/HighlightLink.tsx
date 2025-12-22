import type { Highlight } from '../data/highlightLinks'

function HighlightLink({ highlightLink }: { highlightLink: Highlight }) {
  const {
    text,
    hoverColor,
    hyperlink 
  } = highlightLink;

  return (
    <a href={hyperlink} target='_blank' className={`${hoverColor} transition-colors duration-200`}>
      { text }
    </a>
  )
}

export default HighlightLink
