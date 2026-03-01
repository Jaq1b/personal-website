import PageWrapper from './PageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <div className="animate-slideInUp flex items-center justify-center min-h-[calc(100vh-200px)]">
        <h1 className="font-display text-[5rem] font-bold text-white/95 tracking-[-0.05em] leading-[1.05] text-center">
          Welcome
        </h1>
      </div>
    </PageWrapper>
  )
}
