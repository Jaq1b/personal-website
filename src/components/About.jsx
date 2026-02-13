import './TabContent.css'

const profileImageSrc = '/headshot.jpg'  

function About() {
  return (
    <div className="tab-content">
      <div className="container">
        <div className="content-section">
          <div className="about-hero">
            <h1 className="section-title">About Me</h1>
            <div className="about-card">
              <div className="about-content">
                <div className="profile-section">
                  <div className="profile-image">
                    <img
                      src={profileImageSrc}
                      alt="Jack Wember"
                      className="profile-photo"
                    />
                  </div>
                  <div className="profile-info">
                    <h2>Hello, I'm Jack Wember</h2>
                    <p className="lead">
                        Welcome to my website.I'm a dedicated developer/student who loves to explore new
                        technologies and create projects that make a difference. This
                        website showcases my work, credentials, and projects.
                    </p>
                  </div>
                </div>
                <div className="about-details">
                  <div className="detail-card">
                    <div className="detail-icon">Education</div>
                    <h3>Education</h3>
                    <div className="detail-content">
                      <h4>Indiana University – Bloomington</h4>
                      <p className="detail-meta">Expected Graduation: May 2027</p>
                      <p className="detail-meta">Bachelor of Computer Science – Specialization: Software Engineering</p>
                      <p className="detail-meta"><strong>GPA: 3.7/4.0</strong></p>
                      <ul className="detail-list">
                        <li>Minors: Data Science, Intelligent Systems Engineering, Informatics</li>
                        <li>Dean's List Spring 2024</li>
                        <li>Courses: Discrete Mathematics & Structure (CSCI-C 241), Data Structures & Algorithms (CSCI-C 343), Object-Oriented Software Methods (CSCI-C 322), Innovation & Design (ENGR-E 101), Introduction to Software Systems (CSCI-C 212), System Programming with C and Unix (CSCI-C 291), Database Concepts (CSCI-B 461), Mobile App Development (CSCI-C 323), Software Engineering for Information Systems I (CSCI-P 465)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="detail-card">
                    <div className="detail-icon">Experience</div>
                    <h3>Work Experience</h3>
                    <div className="detail-content">
                      <div className="experience-item">
                        <h4>Research – Weihua Guan's Lab</h4>
                        <p className="detail-meta">Assistant Researcher/Undergrad Researcher | September 2025 – Present | Bloomington, Indiana</p>
                        <ul className="detail-list">
                          <li>Develop Nvidia Jetson-based portable nanopore sequencing platform, integrating embedded GPU hardware with MinKNOW and Dorado optimization and implementing CUDA GPU computing for real-time DNA analysis</li>
                          <li>Conduct performance testing and optimization using Python and shell scripting, establishing standardized protocols for embedded bioinformatics systems, nanopore sequencing, and hardware/software integration</li>
                        </ul>
                      </div>
                      <div className="experience-item">
                        <h4>Smithing Studios</h4>
                        <p className="detail-meta">Software Engineer/Developer | May 2023 – Present | Bull Valley, Illinois</p>
                        <ul className="detail-list">
                          <li>Develop multiplayer Roblox games using Lua scripting, RemoteEvents/RemoteFunctions, and custom server browser system with DataStore services for real-time server discovery and player tracking</li>
                          <li>Integrate Roblox APIs and HTTP services for cross-server communication and data persistence, optimizing user experience through structured client-server architecture</li>
                        </ul>
                      </div>
                      <div className="experience-item">
                        <h4>Computer Repair Business</h4>
                        <p className="detail-meta">Founder | June 2017 – May 2023 | Bull Valley, Illinois</p>
                        <ul className="detail-list">
                          <li>Built and operated computer repair business serving 25+ clients, designing and assembling custom PC systems based on client specifications with comprehensive hardware configuration and component selection</li>
                          <li>Provided IT diagnostics and technical troubleshooting services, resolving hardware and software issues through systematic problem-solving and customer support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills-section">
                  <div className="detail-icon">Skills</div>
                  <h3>Skills</h3>
                  <div className="skills-grid">
                    <div className="skill-category">
                      <h4>Programming Languages</h4>
                      <div className="skill-tags">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">C</span>
                        <span className="skill-tag">Lua</span>
                        <span className="skill-tag">R</span>
                        <span className="skill-tag">Bash</span>

                      </div>
                    </div>
                    <div className="skill-category">
                      <h4>Frameworks & Libraries</h4>
                      <div className="skill-tags">
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">NodeJS</span>
                        <span className="skill-tag">Pandas</span>
                        <span className="skill-tag">Yfinance</span>
                        <span className="skill-tag">JUnit</span>
                        <span className="skill-tag">NumPy</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h4>Tools & Technologies</h4>
                      <div className="skill-tags">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                        <span className="skill-tag">VSCode</span>
                        <span className="skill-tag">IntelliJ</span>
                        <span className="skill-tag">Maven</span>
                        <span className="skill-tag">Gradle</span>
                        <span className="skill-tag">Linux/Unix</span>
                        <span className="skill-tag">API</span>
                        <span className="skill-tag">Venv/VM</span>
                        <span className="skill-tag">Docker</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-text">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

