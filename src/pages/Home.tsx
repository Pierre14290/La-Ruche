import { ArrowRight, Hexagon, Leaf, TrendingUp, Package, Users, Zap, ChevronRight } from 'lucide-react';
import { Page } from '../types';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const modules = [
  { icon: '🏠', label: 'Logement', desc: 'Studios et T1 aménagés dans des conteneurs', color: '#F59E0B' },
  { icon: '🍽️', label: 'Restauration', desc: 'Espaces cuisine collectifs et cafétéria', color: '#4ADE80' },
  { icon: '👕', label: 'Laverie', desc: 'Laverie mutualisée basse consommation', color: '#38BDF8' },
  { icon: '📚', label: 'Étude', desc: 'Salles de travail et bibliothèque', color: '#A78BFA' },
  { icon: '⚽', label: 'Sport', desc: 'Espaces loisirs et bien-être', color: '#F472B6' },
  { icon: '🌱', label: 'Jardins', desc: 'Espaces verts et jardins partagés', color: '#86EFAC' },
];

const pillars = [
  {
    icon: <Leaf size={22} />,
    title: 'Éco-responsable',
    desc: 'Conteneurs recyclés, énergie renouvelable, bilan carbone optimisé. Chaque module est conçu pour minimiser son empreinte.',
    page: 'environnement' as Page,
  },
  {
    icon: <Package size={22} />,
    title: 'Modulaire',
    desc: 'Une forme hexagonale unique permettant un pavage parfait. Les campus s\'adaptent aux besoins en ajoutant ou retirant des modules.',
    page: 'campus' as Page,
  },
  {
    icon: <Zap size={22} />,
    title: 'Rapide à déployer',
    desc: 'Installation en quelques semaines. Démontable et relocalisable, La Ruche suit l\'évolution des besoins des établissements.',
    page: 'logistique' as Page,
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Économiquement viable',
    desc: 'Un modèle de financement réaliste avec un ROI attractif pour les investisseurs et des loyers accessibles pour les étudiants.',
    page: 'financier' as Page,
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-enter">
      <section
        className="hex-bg"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 1.5rem 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 100% 70% at 50% -10%, rgba(245,158,11,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            Éco-campus modulaire &bull; Innovation logement étudiant
          </span>

          <div style={{ marginBottom: '1.5rem' }}>
            <HeroHexCluster />
          </div>

          <h1 className="hero-title" style={{ marginBottom: '1rem' }}>
            <span style={{ color: '#F0FDF4' }}>LA</span>
            <br />
            <span style={{ color: '#F59E0B' }}>RUCHE</span>
          </h1>

          <p
            className="prose-body"
            style={{
              fontSize: '1.2rem',
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.6,
            }}
          >
            L'éco-campus hexagonal modulaire — des logements durables, flexibles et accessibles pour les étudiants d'aujourd'hui.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => handleNav('campus')}>
              Découvrir le campus <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={() => handleNav('enjeux')}>
              Les enjeux du projet
            </button>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            animation: 'fadeInUp 1s ease 0.5s both',
          }}
        >
          <span style={{ color: '#4A6340', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Défiler</span>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(245,158,11,0.4), transparent)' }} />
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Concept"
          title="Un campus inspiré de la nature"
          subtitle="Des modules hexagonaux indépendants et interconnectables — logement, restauration, laverie, études — qui forment ensemble un campus vivant, adapté aux besoins réels des établissements et de la vie étudiante."
          centered
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {modules.map((mod, i) => (
            <div
              key={i}
              className="info-card"
              style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}
            >
              <div style={{ fontSize: '2.25rem', marginBottom: '0.875rem' }}>{mod.icon}</div>
              <div style={{ color: mod.color, fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {mod.label}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.8rem', lineHeight: 1.6 }}>
                {mod.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Nos piliers"
          title="Pensé pour durer, conçu pour s'adapter"
          subtitle="La Ruche repose sur quatre piliers fondamentaux qui guident chaque décision de conception."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1px',
            background: 'rgba(245,158,11,0.07)',
            border: '1px solid rgba(245,158,11,0.07)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {pillars.map((pillar, i) => (
            <button
              key={i}
              onClick={() => handleNav(pillar.page)}
              style={{
                background: '#0F1A0B',
                padding: '2rem',
                textAlign: 'left',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#152112')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0F1A0B')}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '8px',
                  background: 'rgba(245,158,11,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F59E0B',
                  marginBottom: '1rem',
                }}
              >
                {pillar.icon}
              </div>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1rem', marginBottom: '0.625rem' }}>
                {pillar.title}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                {pillar.desc}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#F59E0B', fontSize: '0.8rem', fontWeight: 600 }}>
                En savoir plus <ChevronRight size={14} />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '~43%', label: 'Moins cher', sub: 'vs. résidence classique', color: 'amber' },
            { value: '18 jours.', label: 'Installation complète', sub: 'pour 40 logements', color: 'green' },
            { value: '-60%', label: 'CO₂ en phase chantier', sub: 'vs. construction neuve', color: 'amber' },
            { value: '100%', label: 'Démontable', sub: 'et relocalisable', color: 'green' },
          ]}
        />
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
            <SectionHeader
              tag="Contexte"
              title="Une réponse à la crise du logement étudiant"
              subtitle="En France, plus de 1,5 million d'étudiants cherchent chaque année un logement dans les grandes villes universitaires. Les solutions actuelles manquent de flexibilité, de durabilité et d'accessibilité."
            />
            <button className="btn-primary" onClick={() => handleNav('enjeux')}>
              Voir les enjeux <ArrowRight size={16} />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { v: '1.5M+', l: 'Étudiants', c: '#F59E0B' },
              { v: '3 ans', l: 'Délai moyen construction', c: '#4ADE80' },
              { v: '650€', l: 'Loyer moyen Paris', c: '#F59E0B' },
              { v: '78%', l: 'Difficultés à se loger', c: '#4ADE80' },
            ].map((s, i) => (
              <div key={i} className="info-card" style={{ textAlign: 'center' }}>
                <div style={{ color: s.c, fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {s.v}
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.78rem', marginTop: '0.375rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(74,222,128,0.04) 100%)',
          borderTop: '1px solid rgba(245,158,11,0.1)',
          borderBottom: '1px solid rgba(245,158,11,0.1)',
          padding: '4rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Hexagon size={36} style={{ color: '#F59E0B', margin: '0 auto 1.25rem', display: 'block' }} />
          <h2 className="section-title" style={{ color: '#F0FDF4', marginBottom: '1rem' }}>
            Prêt à explorer La Ruche ?
          </h2>
          <p className="prose-body" style={{ marginBottom: '2rem' }}>
            Plongez dans les détails techniques, environnementaux et financiers de ce projet d'innovation unique.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => handleNav('campus')}>
              Le campus <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={() => handleNav('logements')}>
              Les logements
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroHexCluster() {
  const hexes = [
    { x: 50, y: 42, size: 38, opacity: 0.7, filled: true },
    { x: 81, y: 24, size: 22, opacity: 0.4, filled: false },
    { x: 19, y: 24, size: 22, opacity: 0.4, filled: false },
    { x: 81, y: 60, size: 18, opacity: 0.25, filled: false },
    { x: 19, y: 60, size: 18, opacity: 0.25, filled: false },
    { x: 50, y: 10, size: 16, opacity: 0.2, filled: false },
    { x: 50, y: 74, size: 16, opacity: 0.2, filled: false },
  ];

  const hexPath = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return `M ${pts.join(' L ')} Z`;
  };

  return (
    <svg width="140" height="84" viewBox="0 0 100 84" style={{ display: 'inline-block' }}>
      {hexes.map((h, i) => (
        <path
          key={i}
          d={hexPath(h.x, h.y, h.size)}
          fill={h.filled ? 'rgba(245,158,11,0.15)' : 'none'}
          stroke="#F59E0B"
          strokeWidth={h.filled ? 1.5 : 1}
          opacity={h.opacity}
        />
      ))}
      <path d={hexPath(50, 42, 18)} fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="1.5" />
    </svg>
  );
}

function _Users() {
  return <Users size={16} />;
}
