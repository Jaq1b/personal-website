import './TabContent.css'

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
                    <div className="profile-placeholder"></div>
                  </div>
                  <div className="profile-info">
                    <h2>Hello, I'm Jack Wember</h2>
                    <p className="lead">
                      Welcome to my personal website. I'm passionate about creating
                      innovative solutions and building meaningful projects.
                    </p>
                  </div>
                </div>
                <div className="about-details">
                  <div className="detail-card">
                    <div className="detail-icon">Education</div>
                    <h3>Education</h3>
                    <p>Currently pursuing my studies in [Your Field]</p>
                  </div>
                  <div className="detail-card">
                    <div className="detail-icon">Experience</div>
                    <h3>Experience</h3>
                    <p>Building experience through projects and learning</p>
                  </div>
                  <div className="detail-card">
                    <div className="detail-icon">Goals</div>
                    <h3>Goals</h3>
                    <p>Continuously learning and growing in my field</p>
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
                  <p>
                    I'm a dedicated developer/student who loves to explore new
                    technologies and create projects that make a difference. This
                    website showcases my work, credentials, and projects.
                  </p>
                  <p>
                    Feel free to explore the different sections to learn more about
                    my background, credentials, and the projects I've worked on.
                  </p>
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

