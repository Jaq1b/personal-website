import './TabContent.css'

function Projects() {
  const projects = [
    {
      title: 'Algorithmic Trading Bot',
      description: 'Developed an automated trading bot using Python and Alpaca API that generated $1,500 profit on $10,000 initial investment during 2-week paper trading period. Implemented real-time market data processing, technical analysis indicators, and risk management protocols achieving 15% return.',
      technologies: ['Python', 'Alpaca API', 'Financial Analysis', 'Pandas', 'NumPy'],
      status: 'Completed',
      link: 'https://github.com/Jaq1b/tradingbottest'
    },
    {
      title: 'Raycasting 3D Engine',
      description: 'Led team efforts to build a custom 3D rendering engine from scratch using raycasting techniques similar to Doom, coordinating implementation of mathematical ray-wall intersection algorithms across multiple developers. Contributed to team development of efficient wall rendering system with proper depth calculation, collision detection, and optimized rendering pipeline for real-time performance.',
      technologies: ['Java', 'Computer Graphics', 'Mathematical Algorithms', 'Raycasting'],
      status: 'Completed',
      link: 'https://github.com/JohnnySprit/RaycastingGame'
    },
    {
      title: 'Rock Climbing Difficulty Calculator',
      description: 'App that with a picture of a route will attempt to calculate an estimated difficulty rating.',
      technologies: ['Python', 'Numpy', 'cv2'],
      status: 'In Progress',
      link: 'https://github.com/Jaq1b/Rock-Grader'
    },
    {
      title: 'Personal Website',
      description: 'This is the website you are currently on. It is built with React and Vite.',
      technologies: ['React', 'Vite', 'CSS', 'HTML', 'JavaScript'],
      status: 'In Progress',
      link: 'https://github.com/Jaq1b/personal-website'
    }
  ]

  return (
    <div className="tab-content">
      <div className="container">
        <div className="content-section">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            A collection of projects I've worked on, showcasing my skills and experience
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  <strong>Technologies:</strong>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    View Project
                    <span className="external-link">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

