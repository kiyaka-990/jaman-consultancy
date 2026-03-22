interface SectionHeaderProps {
  tag: string
  title: string
  highlight?: string
  sub?: string
  center?: boolean
}

export function SectionHeader({ tag, title, highlight, sub, center }: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12`}>
      <div className={`section-tag ${center ? 'justify-center' : ''}`}>{tag}</div>
      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {sub && (
        <p className={`text-slate-400 text-lg leading-relaxed mt-2 ${center ? 'max-w-xl mx-auto' : 'max-w-xl'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
