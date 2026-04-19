interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '3rem' }}>
      {tag && <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>{tag}</span>}
      <h2 className="section-title" style={{ color: '#F0FDF4', marginBottom: subtitle ? '1rem' : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p className="prose-body" style={{ maxWidth: centered ? '580px' : '640px', margin: centered ? '0 auto' : '0' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
