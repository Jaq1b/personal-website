import PageWrapper from './PageWrapper'

interface Project {
  title: string
  description: string
  technologies: string[]
  status: 'Completed' | 'In Progress'
  link?: string
}

const projects: Project[] = [
  {
    title: 'Fairview Lane',
    description: 'Led development of multiplayer Roblox experience with 400,000+ visitors for Smithing Studios, coordinating a small team to optimize performance using Lua scripting. Engineered data persistence layer using DataStore services with retry logic and error handling, ensuring reliable storage of player progression, inventory, and Game Pass purchases across all sessions.',
    technologies: ['Lua', 'Data Management', 'Roblox Studio', 'Teamwork'],
    status: 'Completed',
    link: 'https://www.roblox.com/games/121864607057791/Fairview-Lane-RP',
  },
  {
    title: 'Rock Climbing Difficulty Calculator',
    description: 'App that with a picture of a route will attempt to calculate an estimated difficulty rating.',
    technologies: ['Python', 'NumPy', 'OpenCV'],
    status: 'In Progress',
    link: 'https://github.com/Jaq1b/Rock-Grader',
  },
  {
    title: 'Algorithmic Trading Bot',
    description: 'Developed an automated trading bot using Python and Alpaca API that generated $1,500 profit on $10,000 initial investment during a 2-week paper trading period. Implemented real-time market data processing pipeline with technical analysis indicators (RSI, MACD, moving averages) and automated risk management protocols including stop-loss and position sizing.',
    technologies: ['Python', 'Alpaca API', 'Financial Analysis', 'Pandas', 'NumPy'],
    status: 'Completed',
    link: 'https://github.com/Jaq1b/tradingbottest',
  },
  {
    title: 'Raycasting 3D Engine',
    description: 'Led team to build a custom 3D rendering engine from scratch using raycasting techniques similar to Doom, coordinating implementation of mathematical ray-wall intersection algorithms across multiple developers. Engineered efficient wall rendering system with depth calculation, collision detection, and optimized rendering pipeline for real-time performance.',
    technologies: ['Java', 'Computer Graphics', 'Mathematical Algorithms', 'Raycasting'],
    status: 'Completed',
    link: 'https://github.com/JohnnySprit/RaycastingGame',
  },
  {
    title: 'Personal Website',
    description: 'This is the website you are currently on. Built with React, TypeScript, Tailwind CSS, and Vite.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'In Progress',
    link: 'https://github.com/Jaq1b/personal-website',
  },
]

const statusStyles: Record<string, string> = {
  'Completed':  'bg-green-500/30 border-green-500/40',
  'In Progress': 'bg-orange-500/30 border-orange-500/40',
}

export default function Projects() {
  return (
    <PageWrapper>
      <h1 className="font-display text-[3rem] font-semibold text-white/95 mb-4 tracking-[-0.03em] leading-[1.2]">
        My Projects
      </h1>
      <p className="text-[1.125rem] text-white/80 mb-12 font-normal leading-[1.6]">
        A collection of projects I've worked on, showcasing my skills and experience
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mb-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 isolate hover:bg-white/[0.08] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex justify-between items-start mb-5 pb-4 border-b border-white/10 gap-4">
              <h3 className="font-display text-[1.375rem] text-white/95 font-semibold flex-1 tracking-[-0.01em]">
                {project.title}
              </h3>
              <span className={`px-3 py-1.5 rounded-lg text-[0.75rem] font-semibold uppercase tracking-[0.5px] whitespace-nowrap border text-white/95 ${statusStyles[project.status]}`}>
                {project.status}
              </span>
            </div>
            <p className="text-white/85 leading-[1.7] mb-6 text-[0.95rem]">
              {project.description}
            </p>
            <div className="mb-6">
              <strong className="text-white/95 block mb-3 text-[0.875rem] font-semibold uppercase tracking-[0.5px]">
                Technologies:
              </strong>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/15 backdrop-blur-sm text-white/95 px-3 py-1.5 rounded-lg text-[0.8125rem] font-medium border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-transparent text-white/95 border border-white/20 rounded-lg text-[0.9375rem] font-medium no-underline transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                View Project
                <span className="text-[0.875rem] ml-1 opacity-70">→</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
