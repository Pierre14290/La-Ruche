import { Grid2x2 as Grid, Users, Maximize2, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const moduleTypes = [
  { emoji: '🏠', name: 'Logement', desc: 'Studios 20 m² et T1 30 m² aménagés dans des conteneurs 20 ou 40 pieds. Salle de bain intégrée, kitchenette, rangements optimisés.', count: '40–80', unit: 'unités typ.' },
  { emoji: '🍽️', name: 'Restauration', desc: 'Cuisines collectives, cafétéria, salle à manger. Un module de restauration peut servir jusqu\'à 200 couverts par service.', count: '1–3', unit: 'modules' },
  { emoji: '👕', name: 'Laverie', desc: 'Laverie mutualisée avec machines basse consommation, récupération de chaleur et système de réservation connecté.', count: '1–2', unit: 'modules' },
  { emoji: '📚', name: 'Espace Études', desc: 'Salles de travail individuel et collectif, bibliothèque, bornes informatiques. Conçu pour la concentration et la collaboration.', count: '2–4', unit: 'modules' },
  { emoji: '⚽', name: 'Sport & Loisirs', desc: 'Salle de fitness, espace détente, terrasse. Les modules sport s\'ouvrent sur des espaces extérieurs partagés.', count: '1–2', unit: 'modules' },
  { emoji: '🌿', name: 'Espaces Verts', desc: 'Jardins partagés, potagers, zones de biodiversité. Intégrés dans les interstices du pavage hexagonal.', count: 'variable', unit: '' },
  { emoji: '🚲', name: 'Mobilité', desc: 'Local à vélos sécurisé, bornes de recharge électrique, point de co-voiturage. Mobilité douce au cœur du campus.', count: '1', unit: 'hub central' },
  { emoji: '⚙️', name: 'Technique', desc: 'Module dédié aux équipements : électricité, eau, gestion thermique centralisée. Invisible mais indispensable.', count: '1–2', unit: 'modules' },
];

const targets = [
  {
    title: 'Étudiants en licence et master',
    desc: 'La cible principale : étudiants en résidence longue durée (9–12 mois) en quête d\'un logement abordable et de qualité.',
    icon: '🎓',
  },
  {
    title: 'Doctorants et chercheurs',
    desc: 'Des profils qui restent 1 à 3 ans sur un campus et ont besoin d\'un environnement calme et bien équipé.',
    icon: '🔬',
  },
  {
    title: 'Étudiants en mobilité internationale',
    desc: 'Erasmus, échanges bilatéraux — des séjours de 3 à 12 mois qui nécessitent flexibilité et accueil clé en main.',
    icon: '✈️',
  },
  {
    title: 'Alternants et stagiaires',
    desc: 'Contrats courts de 3 à 6 mois, souvent à distance de leur domicile. La Ruche propose des baux très flexibles.',
    icon: '💼',
  },
];

const adaptability = [
  { title: 'Campus compact', desc: '20 à 40 logements + services essentiels. Pour une petite école ou une antenne universitaire. Emprise foncière : ~2 500 m².' },
  { title: 'Campus intermédiaire', desc: '40 à 100 logements + module restaurant + sport. Campus complet et autonome. Emprise : ~5 000 à 8 000 m².' },
  { title: 'Grand campus', desc: '100 à 200 logements, tous les modules disponibles. Pour une grande université ou un technopôle. Emprise : 10 000 à 20 000 m².' },
];

export default function Campus() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Le Campus"
        title="Un campus qui respire et s'adapte"
        subtitle="La disposition hexagonale crée un maillage organique et efficace — comme une ruche naturelle — où chaque module trouve sa place et interagit avec ses voisins."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <SectionHeader
              tag="Principe de pavage"
              title="L'hexagone : le secret de la ruche"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Optimisation de l\'espace', desc: 'L\'hexagone est la forme géométrique qui maximise la surface occupée avec un minimum de périmètre — exactement comme dans une ruche d\'abeilles.' },
                { title: 'Connexions naturelles', desc: 'Chaque hexagone partage 6 faces avec ses voisins. Les passerelles et couloirs couverts créent des liens directs entre les modules.' },
                { title: 'Croissance organique', desc: 'On ajoute un module en le collant simplement à une face existante. Pas besoin de repenser l\'ensemble lors d\'une extension.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'rgba(245,158,11,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#F59E0B', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ color: '#F0FDF4', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HexCampusVisualization />
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Les modules"
          title="Tout ce qu'il faut, exactement où il le faut"
          subtitle="Huit types de modules constituent le vocabulaire architectural de La Ruche. Chaque campus est une combinaison unique, pensée selon les besoins locaux."
          centered
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {moduleTypes.map((mod, i) => (
            <div key={i} className="info-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{mod.emoji}</span>
                  <span style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem' }}>{mod.name}</span>
                </div>
                {mod.count && (
                  <span style={{
                    color: '#F59E0B', fontSize: '0.75rem', fontWeight: 700,
                    background: 'rgba(245,158,11,0.1)', padding: '0.2rem 0.5rem',
                    borderRadius: '4px', whiteSpace: 'nowrap',
                  }}>
                    {mod.count} {mod.unit}
                  </span>
                )}
              </div>
              <p style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Public cible"
              title="Pour qui La Ruche est-elle conçue ?"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {targets.map((t, i) => (
                <div key={i} className="info-card" style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <div style={{ color: '#F0FDF4', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.375rem' }}>{t.title}</div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Flexibilité"
              title="Trois tailles de campus types"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {adaptability.map((a, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0F1A0B',
                    border: '1px solid rgba(245,158,11,0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    borderLeft: '3px solid #F59E0B',
                  }}
                >
                  <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {a.title}
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.65 }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '~18 m²', label: 'Surface utile', sub: 'par module logement std.', color: 'amber' },
            { value: '6', label: 'Connexions max.', sub: 'par module hexagonal', color: 'green' },
            { value: '8 types', label: 'De modules disponibles', sub: 'combinables à l\'infini', color: 'amber' },
            { value: '3 sem.', label: 'Installation d\'un module', sub: 'de la livraison à l\'emménagement', color: 'green' },
          ]}
        />
      </section>

      <section
        style={{
          background: 'rgba(245,158,11,0.04)',
          borderTop: '1px solid rgba(245,158,11,0.1)',
          padding: '3rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.375rem' }}>
              Envie d'en savoir plus sur les logements ?
            </div>
            <div style={{ color: '#A7C9A0', fontSize: '0.875rem' }}>
              Découvrez les détails techniques des conteneurs, l'isolation et le bilan thermique.
            </div>
          </div>
          <button
            className="btn-primary"
            style={{ whiteSpace: 'nowrap' }}
          >
            Les logements <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

function HexCampusVisualization() {
  type HexCell = { q: number; r: number; type: string; color: string; label: string };

  const hexes: HexCell[] = [
    { q: 0, r: 0, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: 1, r: 0, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: 0, r: 1, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: -1, r: 1, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: -1, r: 0, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: 0, r: -1, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: 1, r: -1, type: 'restauration', color: '#4ADE80', label: '🍽️' },
    { q: 2, r: -1, type: 'étude', color: '#38BDF8', label: '📚' },
    { q: 2, r: 0, type: 'sport', color: '#F472B6', label: '⚽' },
    { q: 1, r: 1, type: 'laverie', color: '#A78BFA', label: '👕' },
    { q: -1, r: 2, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: -2, r: 1, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: -2, r: 2, type: 'jardins', color: '#86EFAC', label: '🌿' },
  ];

  const size = 32;
  const gap = 2;
  const w = (size + gap) * Math.sqrt(3);
  const h = (size + gap) * 2;

  const hexToPixel = (q: number, r: number) => ({
    x: w * (q + r / 2),
    y: h * (3 / 4) * r,
  });

  const hexPath = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return `M ${pts.join(' L ')} Z`;
  };

  const viewSize = 280;
  const offsetX = viewSize / 2;
  const offsetY = viewSize / 2;

  return (
    <div
      style={{
        background: '#0A1208',
        borderRadius: '12px',
        border: '1px solid rgba(245,158,11,0.12)',
        padding: '1.5rem',
        width: '100%',
        maxWidth: '360px',
      }}
    >
      <div style={{ color: '#A7C9A0', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', textAlign: 'center' }}>
        Vue schématique d'un campus type
      </div>
      <svg
        width="100%"
        viewBox={`${-viewSize / 2} ${-viewSize / 2} ${viewSize} ${viewSize}`}
        style={{ display: 'block' }}
      >
        {hexes.map((hex, i) => {
          const { x, y } = hexToPixel(hex.q, hex.r);
          return (
            <g key={i}>
              <path
                d={hexPath(x, y, size - 2)}
                fill={`${hex.color}18`}
                stroke={hex.color}
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={y + 6}
                textAnchor="middle"
                fontSize="14"
                style={{ userSelect: 'none' }}
              >
                {hex.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem', justifyContent: 'center' }}>
        {[
          { color: '#F59E0B', label: 'Logement' },
          { color: '#4ADE80', label: 'Restauration' },
          { color: '#38BDF8', label: 'Études' },
          { color: '#F472B6', label: 'Sport' },
          { color: '#A78BFA', label: 'Laverie' },
          { color: '#86EFAC', label: 'Jardins' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: '#A7C9A0' }}>
            <div style={{ width: 8, height: 8, borderRadius: '2px', background: item.color, flexShrink: 0 }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function _Grid() { return <Grid size={16} />; }
function _Users() { return <Users size={16} />; }
function _Maximize2() { return <Maximize2 size={16} />; }
