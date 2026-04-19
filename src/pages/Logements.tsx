import { Thermometer, Wind, Layers, Box } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const containerTypes = [
  {
    name: 'Conteneur 20 pieds',
    dims: '6,06 m × 2,44 m × 2,59 m',
    surface: '~14,9 m² brut / ~13 m² utile',
    usage: 'Studio compact, idéal pour 1 personne. Chambre, salle de bain, kitchenette.',
    weight: '2 300 kg (vide)',
    tag: 'Studio',
    tagColor: '#F59E0B',
  },
  {
    name: 'Conteneur 40 pieds',
    dims: '12,19 m × 2,44 m × 2,59 m',
    surface: '~30,0 m² brut / ~26 m² utile',
    usage: 'T1 confortable ou module à 2 chambres séparées. Séjour, cuisine, salle de bain.',
    weight: '3 800 kg (vide)',
    tag: 'T1 / T1 bis',
    tagColor: '#4ADE80',
  },
  {
    name: 'High Cube 40 pieds',
    dims: '12,19 m × 2,44 m × 2,89 m',
    surface: '~30,0 m² brut / ~26 m² utile',
    usage: 'Hauteur sous plafond supplémentaire (+30 cm). Permet une mezzanine ou un meilleur confort visuel.',
    weight: '3 900 kg (vide)',
    tag: 'Confort+',
    tagColor: '#38BDF8',
  },
];

const layouts = [
  {
    title: 'Studio 20 pieds (type A)',
    items: [
      'Zone nuit : lit 90×200 cm intégré avec rangements sous le matelas',
      'Coin bureau : plan de travail 80 cm + étagères murales',
      'Kitchenette : plaque 2 feux, mini-four, réfrigérateur 120 L',
      'Salle de bain : douche 80×80, WC, lavabo',
      'Rangements : penderie, étagères, valises sous le lit',
    ],
  },
  {
    title: 'T1 40 pieds (type B)',
    items: [
      'Zone nuit séparée : lit 140×200 cm, penderie encastrée',
      'Séjour : canapé 2 places, télévision murale',
      'Cuisine équipée : plaque 4 feux, four, lave-vaisselle 45 cm',
      'Salle de bain complète : baignoire/douche, WC, double vasque',
      'Espace de rangement : débarras de 1,5 m²',
    ],
  },
];

const insulationSystems = [
  {
    icon: <Layers size={20} />,
    title: 'Isolation par l\'extérieur (ITE)',
    desc: 'Panneau polyuréthane haute densité 60 mm + bardage bois composite. Supprime les ponts thermiques et préserve l\'espace intérieur. U = 0,28 W/m²·K.',
    performance: 'U = 0,28',
    unit: 'W/m²·K',
  },
  {
    icon: <Wind size={20} />,
    title: 'Toiture végétalisée ou isolée',
    desc: 'Membrane EPDM + laine de roche 100 mm + pare-vapeur. Option toiture végétalisée extensive (5 cm de substrat) pour l\'inertie thermique et la biodiversité.',
    performance: 'R = 3,7',
    unit: 'm²·K/W',
  },
  {
    icon: <Box size={20} />,
    title: 'Plancher surélevé isolé',
    desc: 'Structure en bois avec vide d\'air ventilé, laine de bois 80 mm. Protection contre l\'humidité du sol et l\'inertie froide du châssis métallique.',
    performance: 'U = 0,35',
    unit: 'W/m²·K',
  },
  {
    icon: <Thermometer size={20} />,
    title: 'Menuiseries triple vitrage',
    desc: 'Fenêtres PVC ou aluminium à rupture de pont thermique, triple vitrage 4-16-4 argon. Ouvrants oscillo-battants, stores extérieurs motorisés.',
    performance: 'Uw = 0,9',
    unit: 'W/m²·K',
  },
];

const thermalBalance = [
  { label: 'Pertes par murs', value: 28, color: '#F87171' },
  { label: 'Pertes par toiture', value: 18, color: '#FB923C' },
  { label: 'Pertes par plancher', value: 12, color: '#FBBF24' },
  { label: 'Pertes par menuiseries', value: 22, color: '#F59E0B' },
  { label: 'Pertes renouvellement d\'air', value: 20, color: '#EAB308' },
];

const heatingSystems = [
  {
    system: 'Pompe à chaleur air/air réversible',
    cop: '3,8 – 4,2',
    desc: 'Solution chauffage + climatisation en un. COP excellent, installation simple par gainable ou console murale.',
    recommended: true,
  },
  {
    system: 'Plancher chauffant basse température',
    cop: '3,5',
    desc: 'Confort optimal, couplé à une PAC eau/eau. Idéal pour les modules T1 avec dalle béton.',
    recommended: false,
  },
  {
    system: 'VMC double flux',
    cop: 'échangeur 85%',
    desc: 'Récupération de chaleur sur l\'air extrait pour préchauffer l\'air neuf. Indispensable pour les bâtiments étanches.',
    recommended: true,
  },
];

export default function Logements() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Les Logements"
        title="Des conteneurs repensés de l'intérieur"
        subtitle="Chaque unité de logement est une transformation complète d'un conteneur maritime — isolation, aménagement, équipements — pour un résultat indiscernable d'un appartement neuf."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Choix des conteneurs"
          title="Trois types de conteneurs, trois usages"
          subtitle="Le choix du conteneur détermine la surface, le confort et l'usage final du logement."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
          {containerTypes.map((c, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div style={{
                padding: '1rem 1.5rem',
                background: 'rgba(245,158,11,0.04)',
                borderBottom: '1px solid rgba(245,158,11,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem' }}>{c.name}</span>
                <span style={{
                  color: c.tagColor,
                  background: `${c.tagColor}18`,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                }}>
                  {c.tag}
                </span>
              </div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#4A6340', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Dimensions</div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.82rem' }}>{c.dims}</div>
                  </div>
                  <div>
                    <div style={{ color: '#4A6340', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>Surface</div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.82rem' }}>{c.surface}</div>
                  </div>
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.65 }}>{c.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Aménagement"
          title="Chaque centimètre est pensé"
          subtitle="L'espace contraint du conteneur impose une conception ultra-optimisée, proche des standards nautiques : mobilier intégré, multifonctionnel et ergonomique."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1rem' }}>
          {layouts.map((l, i) => (
            <div key={i} className="info-card">
              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>{l.title}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {l.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 6, height: 6, background: '#F59E0B',
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      flexShrink: 0, marginTop: '7px',
                    }} />
                    <span style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Isolation thermique"
          title="Une enveloppe performante"
          subtitle="L'acier du conteneur est un excellent conducteur thermique — il faut donc une isolation de haute performance pour atteindre les standards RE2020."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {insulationSystems.map((s, i) => (
            <div key={i} className="info-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '8px',
                  background: 'rgba(245,158,11,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#F59E0B', flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.88rem' }}>{s.title}</div>
                  <div style={{ color: '#4ADE80', fontSize: '0.82rem', fontWeight: 700 }}>
                    {s.performance} <span style={{ color: '#A7C9A0', fontWeight: 400 }}>{s.unit}</span>
                  </div>
                </div>
              </div>
              <p style={{ color: '#A7C9A0', fontSize: '0.83rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Bilan thermique"
              title="Répartition des déperditions"
              subtitle="Pour un module 20 pieds, les pertes thermiques annuelles se répartissent ainsi avec l'isolation mise en place."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {thermalBalance.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#A7C9A0', fontSize: '0.85rem' }}>{item.label}</span>
                    <span style={{ color: item.color, fontSize: '0.85rem', fontWeight: 700 }}>{item.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.value}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: '2rem',
                background: 'rgba(74,222,128,0.06)',
                border: '1px solid rgba(74,222,128,0.15)',
                borderRadius: '8px',
                padding: '1.25rem',
              }}
            >
              <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.375rem' }}>
                Besoin de chauffage : ~35 kWh/m²/an
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Soit 30% en-dessous de la réglementation RT2012 et conforme aux objectifs RE2020 niveau 2.
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Systèmes de chauffage"
              title="Solutions thermiques recommandées"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {heatingSystems.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0F1A0B',
                    border: `1px solid ${s.recommended ? 'rgba(74,222,128,0.25)' : 'rgba(245,158,11,0.1)'}`,
                    borderRadius: '8px',
                    padding: '1.25rem',
                    position: 'relative',
                  }}
                >
                  {s.recommended && (
                    <span style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '12px',
                      background: '#4ADE80',
                      color: '#0A1208',
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}>
                      Recommandé
                    </span>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{s.system}</div>
                    <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.82rem' }}>COP {s.cop}</div>
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.83rem', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '35 kWh', label: 'Besoin chauffage', sub: 'par m² et par an', color: 'amber' },
            { value: '85%', label: 'Récup. chaleur VMC', sub: 'double flux', color: 'green' },
            { value: 'RE2020', label: 'Standard atteint', sub: 'niveau 2', color: 'amber' },
            { value: '0,28', label: 'Coeff. U parois', sub: 'W/m²·K (murs)', color: 'green' },
          ]}
        />
      </section>
    </div>
  );
}
