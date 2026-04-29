import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page, NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'enjeux', label: 'Enjeux' },
  { id: 'campus', label: 'Le Campus' },
  { id: 'logements', label: 'Logements' },
  { id: 'concurrence', label: 'Concurrence' },
  { id: 'environnement', label: 'Environnement' },
  { id: 'protection', label: 'Protection Intellectuelle' },
  { id: 'financier', label: 'Finances' },
  { id: 'logistique', label: 'Logistique' },
  { id: 'etensuite', label: 'Et Ensuite ?' },
];

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(245,158,11,0.10)',
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(8,14,5,0.88)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <button
            onClick={() => handleNavigate('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <HexLogo />
            <span style={{ color: '#F59E0B', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.03em' }}>
              La Ruche campus
            </span>
          </button>

          <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A7C9A0' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            borderTop: '1px solid rgba(245,158,11,0.10)',
            backgroundColor: 'rgba(8,14,5,0.98)',
            padding: '1rem 1.5rem 1.5rem',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '0.75rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderBottom: '1px solid rgba(245,158,11,0.08)',
                color: currentPage === item.id ? '#F59E0B' : '#A7C9A0',
                fontSize: '0.875rem',
                fontWeight: currentPage === item.id ? 700 : 500,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function HexLogo() {
  return (
    <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
      <path
        d="M16 0 L32 9 L32 27 L16 36 L0 27 L0 9Z"
        fill="rgba(245,158,11,0.15)"
        stroke="#F59E0B"
        strokeWidth="1.5"
      />
      <path
        d="M16 8 L22 11.5 L22 18.5 L16 22 L10 18.5 L10 11.5Z"
        fill="#F59E0B"
        opacity="0.9"
      />
      <circle cx="16" cy="15" r="2" fill="#0A1208" />
    </svg>
  );
}
