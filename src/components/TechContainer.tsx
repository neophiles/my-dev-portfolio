function TechContainer({ logo, techName }: { logo: string; techName: string }) {
  return (
    <div className='group flex flex-col justify-center items-center gap-4 rounded-2xl p-3 bg-gray-300/30 dark:bg-gray-900/30 dark:hover:bg-gray-800/50 border border-blue-500/20 transition-all duration-500'>
      <img src={logo} alt={`${techName} Logo`} className={`w-10 h-10 group-hover:scale-110 transition-transform duration-500 ${techName === "React" ? "brightness-75" : ""}`} />
      <h2 className='text-sm text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-all duration-500'>
        { techName }
      </h2>
    </div>
  )
}

export default TechContainer 
