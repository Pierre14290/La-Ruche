import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(245,158,11,0.12)',
        backgroundColor: '#050A03',
        padding: '3rem 1.5rem 2rem',
        marginTop: '5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <svg width="28" height="32" viewBox="0 0 32 36" fill="none">
                <path d="M16 0 L32 9 L32 27 L16 36 L0 27 L0 9Z" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" strokeWidth="1.5" />
                <path d="M16 8 L22 11.5 L22 18.5 L16 22 L10 18.5 L10 11.5Z" fill="#F59E0B" opacity="0.9" />
              </svg>
              <span style={{ color: '#F59E0B', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.03em' }}>La Ruche</span>
            </div>
            <p style={{ color: '#A7C9A0', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '220px' }}>
              L'éco-campus modulaire hexagonal — logements durables et flexibles pour les étudiants.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#F59E0B', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Navigation</h4>
            {(['home', 'enjeux', 'campus', 'logements'] as Page[]).map((page) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: '#A7C9A0', fontSize: '0.875rem', padding: '0.3rem 0', textAlign: 'left', transition: 'color 0.2s' }}
              >
                {page === 'home' ? 'Accueil' : page === 'enjeux' ? 'Enjeux & Motivations' : page === 'campus' ? 'Le Campus' : 'Les Logements'}
              </button>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#F59E0B', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Études</h4>
            {(['environnement', 'financier', 'logistique'] as Page[]).map((page) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: '#A7C9A0', fontSize: '0.875rem', padding: '0.3rem 0', textAlign: 'left', transition: 'color 0.2s' }}
              >
                {page === 'environnement' ? 'Étude Environnementale' : page === 'financier' ? 'Étude Financière' : 'Logistique & Planning'}
              </button>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#F59E0B', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Concept</h4>
            <p style={{ color: '#A7C9A0', fontSize: '0.875rem', lineHeight: 1.7 }}>
              Modules hexagonaux assemblables.<br />
              Conteneurs recyclés.<br />
              Campus zéro déchet.
            </p>
          </div>
        </div>

        <div className="section-divider" style={{ marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: '#4A6340', fontSize: '0.75rem' }}>
            © 2026 La Ruche — Projet d'éco-campus modulaire
          </p>
          <p style={{ color: '#4A6340', fontSize: '0.75rem' }}>
            Innovation &bull; Durabilité &bull; Modularité
          </p>
        </div>
      </div>
    </footer>
  );
}
