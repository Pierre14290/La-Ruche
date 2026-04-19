interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  accentWord?: string;
}

export default function PageHero({ tag, title, subtitle, accentWord }: PageHeroProps) {
  const titleParts = accentWord ? title.split(accentWord) : null;

  return (
    <div
      className="hex-bg"
      style={{
        paddingTop: '9rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>{tag}</span>
        <h1 style={{ color: '#F0FDF4', marginBottom: '1.25rem' }} className="section-title">
          {titleParts ? (
            <>
              {titleParts[0]}<span style={{ color: '#F59E0B' }}>{accentWord}</span>{titleParts[1]}
            </>
          ) : title}
        </h1>
        <p className="prose-body" style={{ fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
