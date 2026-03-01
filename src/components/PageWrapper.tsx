interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="w-full min-h-[calc(100vh-200px)]">
      <div className="max-w-[1000px] mx-auto px-8">
        {children}
      </div>
    </div>
  )
}
