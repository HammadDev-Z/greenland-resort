export function SectionIntro({ eyebrow, title, children, light = false }: { eyebrow: string; title: string; children?: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? 'section-intro-light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <div className="intro-copy">{children}</div>}
    </div>
  )
}
