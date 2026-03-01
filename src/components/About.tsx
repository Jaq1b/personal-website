import PageWrapper from './PageWrapper'

const profileImageSrc = `${import.meta.env.BASE_URL}headshot.jpg`

const cardClass = 'text-left p-10 bg-white/5 rounded-xl text-white/95 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] w-full isolate hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]'

const jobs = [
  {
    title: 'Research – Dr. Weihua Guan',
    meta: 'Assistant Researcher/Undergrad Researcher | September 2025 – January 2026 | Bloomington, Indiana',
    bullets: [
      'Developed Nvidia Jetson-based portable nanopore sequencing platform, integrating embedded GPU hardware with MinKNOW and Dorado optimization and implementing CUDA GPU computing for real-time DNA analysis',
      'Conducted performance testing and optimization using Python and shell scripting, establishing standardized protocols for embedded bioinformatics systems, nanopore sequencing, and hardware/software integration',
    ],
  },
  {
    title: 'Smithing Studios',
    meta: 'Software Engineer/Developer | May 2023 – Present | Bull Valley, Illinois',
    bullets: [
      'Develop multiplayer Roblox games using Lua scripting, RemoteEvents/RemoteFunctions, and custom server browser system with DataStore services for real-time server discovery and player tracking',
      'Integrate Roblox APIs and HTTP services for cross-server communication and data persistence, optimizing user experience through structured client-server architecture',
    ],
  },
  {
    title: 'Computer Repair Business',
    meta: 'Founder | June 2017 – May 2023 | Bull Valley, Illinois',
    bullets: [
      'Built and operated computer repair business serving 25+ clients, designing and assembling custom PC systems based on client specifications with comprehensive hardware configuration and component selection',
      'Provided IT diagnostics and technical troubleshooting services, resolving hardware and software issues through systematic problem-solving and customer support',
    ],
  },
]

const skills = [
  { heading: 'Languages', tags: ['Python', 'Java', 'Kotlin', 'SQL', 'C', 'Lua', 'HTML/CSS', 'R', 'CUDA', 'Bash/Shell'] },
  { heading: 'Libraries & Frameworks', tags: ['React', 'TypeScript', 'Tailwind CSS', 'PyTorch', 'PostgreSQL', 'NodeJS', 'Pandas', 'Yfinance', 'JUnit', 'NumPy', 'OpenCV'] },
  { heading: 'Developer Tools', tags: ['Git/GitHub', 'VSCode', 'Roblox Studio', 'IntelliJ', 'Maven', 'Gradle', 'Linux/Unix', 'API', 'Venv/VM', 'Docker'] },
]

export default function About() {
  return (
    <PageWrapper>
      <div className="animate-slideInUp">
        <h1 className="font-display text-[3rem] font-semibold text-white/95 mb-4 tracking-[-0.03em] leading-[1.2]">
          About Me
        </h1>

        <div className="bg-white/5 p-12 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] isolate">

          <div className="flex gap-10 items-start mb-12 pb-10 border-b border-white/10 max-md:flex-col">
            <div className="shrink-0">
              <img
                src={profileImageSrc}
                alt="Jack Wember"
                className="w-[100px] h-[100px] rounded-full object-cover border-2 border-white/20 block"
              />
            </div>
            <div>
              <h2 className="font-display text-[2rem] text-white/95 mb-3 font-semibold tracking-[-0.02em]">
                Hello, I'm Jack Wember
              </h2>
              <p className="text-[1.125rem] text-white/85 leading-[1.7] font-normal">
                Welcome to my website. I'm a dedicated developer/student who loves to explore new
                technologies and create projects that make a difference. This website showcases my
                work, credentials, and projects. I am currently a student at Indiana University
                Bloomington pursuing a Bachelor of Computer Science with a specialization in
                Software Engineering. I am currently very interested in the field of artificial
                intelligence and machine learning.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 mb-12">
            <div className={cardClass}>
              <h3 className="font-display text-[1.25rem] mb-4 font-semibold text-white/95 tracking-[-0.01em]">
                Education
              </h3>
              <h4 className="font-display text-[1.125rem] mb-2 font-semibold text-white/95 tracking-[-0.01em]">
                Indiana University – Bloomington
              </h4>
              <p className="text-white/75 text-[0.9rem] mb-3 leading-[1.5]">Expected Graduation: May 2027</p>
              <p className="text-white/75 text-[0.9rem] mb-3 leading-[1.5]">Bachelor of Computer Science – Specialization: Software Engineering</p>
              <p className="text-white/75 text-[0.9rem] mb-3 leading-[1.5]"><strong className="text-white/95 font-semibold">GPA: 3.7/4.0</strong></p>
              <ul className="list-none p-0 my-4">
                {[
                  'Minors: Data Science, Intelligent Systems Engineering, Informatics',
                  "Dean's List Spring 2024",
                  'Courses: Data Structures & Algorithms (CSCI-C 343), Discrete Mathematics & Structure (CSCI-C 241), Introduction to AI (CSCI-B 351), Database Concepts (CSCI-B 461), System Programming with C and Unix (CSCI-C 291), Software Engineering for Information Systems I (CSCI-P 465), Object-Oriented Software Methods (CSCI-C 322), Computer Structures (CSCI-C 335)',
                ].map((item) => (
                  <li key={item} className="text-white/85 leading-[1.7] text-[0.95rem] mb-3 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-white/60 before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="font-display text-[1.25rem] mb-4 font-semibold text-white/95 tracking-[-0.01em]">
                Work Experience
              </h3>
              {jobs.map((job, i) => (
                <div
                  key={job.title}
                  className={i < jobs.length - 1 ? 'mb-8 pb-8 border-b border-white/10' : ''}
                >
                  <h4 className="font-display text-[1.125rem] mb-2 font-semibold text-white/95 tracking-[-0.01em]">
                    {job.title}
                  </h4>
                  <p className="text-white/75 text-[0.9rem] mb-3 leading-[1.5]">{job.meta}</p>
                  <ul className="list-none p-0 my-4">
                    {job.bullets.map((b) => (
                      <li key={b} className="text-white/85 leading-[1.7] text-[0.95rem] mb-3 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-white/60 before:font-bold">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={`${cardClass} backdrop-blur-xl mb-12`}>
            <h3 className="font-display text-[1.25rem] mb-6 font-semibold text-white/95 tracking-[-0.01em]">
              Skills
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
              {skills.map(({ heading, tags }) => (
                <div key={heading}>
                  <h4 className="font-display text-[1rem] mb-4 font-semibold text-white/95 tracking-[-0.01em]">
                    {heading}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/15 backdrop-blur-sm text-white/95 px-4 py-2 rounded-lg text-[0.875rem] font-medium border border-white/20 transition-all duration-300 hover:bg-white/25 hover:-translate-y-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  )
}
