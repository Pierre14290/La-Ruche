interface Stat {
  value: string;
  label: string;
  sub?: string;
  color?: 'amber' | 'green';
}

interface StatGridProps {
  stats: Stat[];
}

export default function StatGrid({ stats }: StatGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`,
        gap: '1px',
        background: 'rgba(245,158,11,0.08)',
        border: '1px solid rgba(245,158,11,0.08)',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            background: '#0F1A0B',
            padding: '2rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <div
            className="stat-value"
            style={{ color: stat.color === 'green' ? '#4ADE80' : '#F59E0B', marginBottom: '0.5rem' }}
          >
            {stat.value}
          </div>
          <div style={{ color: '#F0FDF4', fontSize: '0.875rem', fontWeight: 600, marginBottom: stat.sub ? '0.25rem' : 0 }}>
            {stat.label}
          </div>
          {stat.sub && (
            <div style={{ color: '#A7C9A0', fontSize: '0.75rem' }}>{stat.sub}</div>
          )}
        </div>
      ))}
    </div>
  );
}
