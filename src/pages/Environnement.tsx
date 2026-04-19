import { Leaf, Droplet, Zap, BarChart3, Wind, Sprout } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const impacts = [
  {
    icon: <BarChart3 size={20} />,
    title: 'Bilan carbone en phase chantier',
    metric: '-60%',
    vs: 'vs. construction neuve',
    desc: 'Réutilisation de conteneurs existants vs. production de matériaux neufs. Pas de décapage de terrain, excavation minimale.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Consommation énergétique annuelle',
    metric: '~45 kWh',
    vs: 'par m² chauffé',
    desc: 'Isolation performante + PAC air/air + VMC double flux. Bien en-dessous des standards conventionnels.',
  },
  {
    icon: <Droplet size={20} />,
    title: 'Consommation d\'eau',
    metric: '-40%',
    vs: 'vs. résidence classique',
    desc: 'Toilettes sèches optionnelles, robinetterie débitée (6 L/min), récupération d\'eau de pluie en option.',
  },
  {
    icon: <Wind size={20} />,
    title: 'Émissions en exploitation (30 ans)',
    metric: '~2,5 tCO₂e',
    vs: 'par unité par an',
    desc: 'Chauffage efficace + énergies renouvelables (option solaire thermique). Facteur électricité française = 0,06 kg CO₂/kWh.',
  },
];

const lifecycle = [
  { phase: 'Production matériaux', pct: 35, color: '#EF4444' },
  { phase: 'Transport & logistique', pct: 8, color: '#F97316' },
  { phase: 'Construction & montage', pct: 12, color: '#FBBF24' },
  { phase: 'Exploitation (30 ans)', pct: 40, color: '#EAB308' },
  { phase: 'Démolition & fin de vie', pct: 5, color: '#84CC16' },
];

const materials = [
  {
    name: 'Conteneur acier réutilisé',
    desc: 'Acier usagé, absence de production neuve. Le conteneur a déjà « payé » son empreinte carbone lors de sa première vie.',
    carbon: 'Amortissable',
    icon: '📦',
  },
  {
    name: 'Isolant polyuréthane haute densité',
    desc: 'Excellente performance thermique avec peu de matière (60 mm = 3,5 R). Substitue des épaisseurs plus importantes d\'autres isolants.',
    carbon: '2–3 kg CO₂/m²',
    icon: '🛡️',
  },
  {
    name: 'Bardage bois composite',
    desc: 'Bois reconstitué ou issu de forêts gérées. Aspect naturel, durabilité 30+ ans, fin de vie valorisable.',
    carbon: '1–2 kg CO₂/m²',
    icon: '🌳',
  },
  {
    name: 'Menuiseries triple vitrage',
    desc: 'PVC recyclable ou aluminium à rupture thermique. Durée de vie 40–50 ans, performances énergétiques justifient l\'impact initial.',
    carbon: '4–5 kg CO₂/m²',
    icon: '🪟',
  },
];

const biodiversity = [
  {
    title: 'Toitures végétalisées',
    desc: 'Substrat extensif 5–8 cm accueillant fleurs sauvages, sédums, insectes pollinisateurs. Inertie thermique + habitat urbain.',
  },
  {
    title: 'Jardins partagés',
    desc: 'Espaces entre hexagones aménagés en jardins pédagogiques (permaculture, aromatiques, fruits). Lien au vivant pour les étudiants.',
  },
  {
    title: 'Corridors écologiques',
    desc: 'Plantations de haies, arbres, passages pour petite faune. Connexion avec trames vertes locales et continuités biologiques.',
  },
  {
    title: 'Zéro déchet en exploitation',
    desc: 'Tri à la source, compostage sur site, réduction du plastique. Programme zéro déchet porté par la communauté étudiante.',
  },
];

const certifications = [
  { name: 'HQE Bâtiment', desc: 'Haute Qualité Environnementale — cible 12 cibles. Thermique, eau, déchets, santé.', icon: '✓' },
  { name: 'RE2020', desc: 'Réglementation Environnementale française — niveau 2 minimum visé. Consommation énergétique & confort.', icon: '✓' },
  { name: 'BREEAM', desc: 'Building Research Establishment Environmental Assessment Method — certification possible à titre optionnel.', icon: '◆' },
];

export default function Environnement() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Étude Environnementale"
        title="L'impact de La Ruche sur le climat"
        subtitle="De la réutilisation des conteneurs à l'exploitation énergétique, chaque décision est pensée pour minimiser l'empreinte carbone et créer un environnement sain."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Indicateurs clés"
          title="Les chiffres de la durabilité"
          centered
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {impacts.map((imp, i) => (
            <div key={i} className="info-card">
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    background: 'rgba(245,158,11,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F59E0B',
                    flexShrink: 0,
                  }}
                >
                  {imp.icon}
                </div>
                <div>
                  <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.1 }}>{imp.metric}</div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.75rem', marginTop: '0.2rem' }}>{imp.vs}</div>
                </div>
              </div>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{imp.title}</div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.65 }}>{imp.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Cycle de vie"
              title="Bilan carbone sur 30 ans"
              subtitle="Répartition des émissions CO₂ sur l'ensemble du cycle de vie d'un module logement."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {lifecycle.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#A7C9A0', fontSize: '0.85rem', fontWeight: 500 }}>{item.phase}</span>
                    <span style={{ color: item.color, fontSize: '0.85rem', fontWeight: 700 }}>{item.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.pct}%`, background: item.color }} />
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
                Total : ~65–75 tCO₂e par unité
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Soit 2,2–2,5 tCO₂e/an en moyenne. 60% en-dessous d'une résidence classique (construction neuve + exploitation).
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Matériaux"
              title="Choix responsables"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {materials.map((mat, i) => (
                <div key={i} className="info-card">
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{mat.icon}</span>
                    <div>
                      <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{mat.name}</div>
                      <div style={{ color: '#F59E0B', fontSize: '0.78rem', fontWeight: 700 }}>{mat.carbon}</div>
                    </div>
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.8rem', lineHeight: 1.6 }}>{mat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Biodiversité"
          title="Un campus vivant"
          subtitle="Au-delà du bilan carbone, La Ruche intègre des stratégies de résilience écologique et de connexion au vivant."
          centered
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {biodiversity.map((item, i) => (
            <div key={i} className="info-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                <Sprout size={20} style={{ color: '#4ADE80', flexShrink: 0 }} />
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{item.title}</div>
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.65 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <StatGrid
          stats={[
            { value: '~70 tCO₂e', label: 'Bilan carbone total', sub: 'par unité sur 30 ans', color: 'amber' },
            { value: '-60%', label: 'vs. construction neuve', sub: 'même durée de vie', color: 'green' },
            { value: '45 kWh/m²', label: 'Conso. énergétique', sub: 'chauffage + ECS annuelle', color: 'amber' },
            { value: '100%', label: 'Fin de vie', sub: 'acier & matériaux recyclables', color: 'green' },
          ]}
        />
      </section>

      <section
        style={{
          background: 'linear-gradient(135deg, rgba(74,222,128,0.06) 0%, rgba(245,158,11,0.04) 100%)',
          borderTop: '1px solid rgba(74,222,128,0.12)',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SectionHeader
            tag="Certifications & normes"
            title="Conformité environnementale"
            centered
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {certifications.map((cert, i) => (
              <div key={i} style={{
                background: 'rgba(245,158,11,0.04)',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
              }}>
                <div style={{ color: '#F59E0B', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {cert.icon}
                </div>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  {cert.name}
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
