import './TabContent.css'

function Credentials() {
  const credentials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Jaq1b',
      description: 'This is my personal github page',
      username: 'Jaq1b'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jack-wember/',
      description: 'Connect with me on LinkedIn',
      username: 'Jack Wember'
    },
    {
      name: 'Handshake',
      url: 'https://app.joinhandshake.com/profiles/ftcese',
      description: 'View my profile and career opportunities',
      username: 'Jack Wember'
    }
  ]

  return (
    <div className="tab-content">
      <div className="container">
        <div className="content-section">
          <h1 className="section-title">My Credentials</h1>
          <p className="section-subtitle">
            These are my professional profiles on other websites
          </p>
          <div className="credentials-grid">
            {credentials.map((credential, index) => (
              <div key={index} className="credential-card">
                <h3>{credential.name}</h3>
                <p className="credential-description">{credential.description}</p>
                <div className="credential-username">
                  <strong>Username:</strong> {credential.username}
                </div>
                <a
                  href={credential.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit {credential.name}
                  <span className="external-link">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credentials

