import type { LucideIcon } from "lucide-react";

function HeadingContainer({ icon: Icon, sectionTitle }: { icon: LucideIcon; sectionTitle: string }) {
  return (
    <div className='flex items-center gap-4 mt-16 mb-12'>
      <div className='rounded-2xl p-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20'>
        { <Icon className='dark:text-blue-400 text-blue-500'/> }
      </div>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
        { sectionTitle }
      </h2>
    </div>
  )
}

export default HeadingContainer
