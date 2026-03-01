import PageWrapper from './PageWrapper'

interface Credential {
  name: string
  url: string
  description: string
  username: string
}

const credentials: Credential[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Jaq1b',
    description: 'This is my personal GitHub page',
    username: 'Jaq1b',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jack-wember/',
    description: 'Connect with me on LinkedIn',
    username: 'Jack Wember',
  },
  {
    name: 'Handshake',
    url: 'https://app.joinhandshake.com/profiles/ftcese',
    description: 'View my profile and career opportunities',
    username: 'Jack Wember',
  },
]

export default function Credentials() {
  return (
    <PageWrapper>
      <h1 className="font-display text-[3rem] font-semibold text-white/95 mb-4 tracking-[-0.03em] leading-[1.2]">
        My Credentials
      </h1>
      <p className="text-[1.125rem] text-white/80 mb-12 font-normal leading-[1.6]">
        These are my professional profiles on other websites
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-8">
        {credentials.map((credential) => (
          <div
            key={credential.name}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-left transition-all duration-300 isolate hover:bg-white/[0.08] hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <h3 className="font-display text-[1.375rem] text-white/95 mb-3 font-semibold tracking-[-0.01em]">
              {credential.name}
            </h3>
            <p className="text-white/85 leading-[1.6] mb-5 text-[0.95rem]">
              {credential.description}
            </p>
            <div className="bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg mb-5 text-white/90 text-[0.875rem] border border-white/10">
              <strong className="text-white/95 font-semibold">Username:</strong> {credential.username}
            </div>
            <a
              href={credential.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white/95 border border-white/20 rounded-lg text-[0.9375rem] font-medium no-underline transition-all duration-300 hover:bg-white/15 hover:border-white/30"
            >
              Visit {credential.name}
              <span className="text-[0.875rem] ml-1 opacity-70">→</span>
            </a>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
