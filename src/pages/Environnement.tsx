import { Leaf, Droplet, Zap, BarChart3, Wind, Sprout, Recycle, Sun } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const impacts = [
  {
    icon: <Recycle size={20} />,
    title: 'Réemploi de matière',
    metric: '20',
    vs: 'conteneurs réemployés / module',
    desc: 'Chaque module logement réutilise 20 conteneurs maritimes 40 pieds. Le projet évite ainsi une partie de la production d’une structure neuve lourde et s’inscrit dans une logique d’économie circulaire.',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Chantier sec et démontable',
    metric: '18 j',
    vs: 'montage brut d’un module',
    desc: 'La préfabrication des dalles, des structures porteuses et des conteneurs réduit fortement les nuisances, les déchets de chantier et la durée d’intervention sur site par rapport à une opération classique.',
  },
  {
    icon: <Sun size={20} />,
    title: 'Production photovoltaïque',
    metric: '49,5 kWc',
    vs: 'par module logement',
    desc: 'La toiture supérieure reçoit un champ photovoltaïque d’environ 110 panneaux. Cette production ne rend pas le module autonome en hiver, mais elle réduit significativement les consommations réseau.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Besoin énergétique hivernal',
    metric: '~200 kWh/j',
    vs: 'par module logement',
    desc: 'Pour 20 conteneurs et 40 étudiants, le besoin électrique journalier en hiver reste contenu grâce à l’isolation, à la PAC mutualisée et à la VMC double flux.',
  },
  {
    icon: <Wind size={20} />,
    title: 'Ventilation performante',
    metric: '81%',
    vs: 'rendement VMC double flux',
    desc: 'Le poste renouvellement d’air représente la part la plus importante des déperditions. La récupération de chaleur est donc un levier environnemental majeur du projet.',
  },
  {
    icon: <Droplet size={20} />,
    title: 'Sobriété en eau',
    metric: 'Mutualisée',
    vs: 'sanitaires et usages communs',
    desc: 'La centralisation des réseaux, la compacité des logements et la mutualisation d’une partie des usages rendent le projet plus favorable à une gestion raisonnée de l’eau qu’un ensemble dispersé de logements indépendants.',
  },
];

const lifecycle = [
  { phase: 'Réemploi / structure existante', pct: 25, color: '#22C55E' },
  { phase: 'Transport & logistique', pct: 12, color: '#F97316' },
  { phase: 'Montage & chantier', pct: 8, color: '#FBBF24' },
  { phase: 'Exploitation énergétique', pct: 45, color: '#EAB308' },
  { phase: 'Maintenance & remplacement', pct: 10, color: '#84CC16' },
];

const materials = [
  {
    name: 'Conteneurs maritimes réemployés',
    desc: 'Le projet s’appuie sur des conteneurs existants, transformés en logements et en modules de service. Le réemploi constitue l’un des principaux leviers environnementaux de La Ruche.',
    carbon: 'Réemploi',
    icon: '📦',
  },
  {
    name: 'Dalles et structure porteuse démontables',
    desc: 'Les dalles bois et les structures treillis sont conçues pour être assemblées, démontées puis potentiellement réutilisées. La matière est concentrée là où elle est structurellement utile.',
    carbon: 'Réversible',
    icon: '🪵',
  },
  {
    name: 'Isolation dimensionnée pour la RE2020',
    desc: 'La laine de verre et le parement intérieur permettent d’atteindre des résistances thermiques cohérentes avec la RE2020 tout en restant compatibles avec la préfabrication.',
    carbon: '10 / 17 / 9 cm',
    icon: '🛡️',
  },
  {
    name: 'Toiture productive',
    desc: 'La toiture supérieure ne protège pas seulement le bâtiment : elle supporte aussi le champ photovoltaïque, ce qui augmente la valeur d’usage de la surface construite.',
    carbon: '49,5 kWc',
    icon: '☀️',
  },
];

const biodiversity = [
  {
    title: 'Jardins collaboratifs',
    desc: 'Les interstices entre modules peuvent accueillir des jardins partagés, créant des usages sociaux et pédagogiques tout en désimperméabilisant partiellement le campus.',
  },
  {
    title: 'Ruches et pollinisateurs',
    desc: 'L’identité du projet peut être prolongée par de vraies ruches, dans un cadre adapté, ainsi que par des plantations favorables aux pollinisateurs.',
  },
  {
    title: 'Patios et sols moins minéraux',
    desc: 'Le pavage du campus permet de ménager des respirations végétales entre les modules, plutôt que de reproduire un ensemble entièrement minéral.',
  },
  {
    title: 'Confort d’usage et vivant',
    desc: 'L’ambition du projet n’est pas seulement de réduire un impact, mais aussi de créer un cadre de vie plus apaisé, plus ombragé et plus connecté au vivant.',
  },
];

const certifications = [
  {
    name: 'RE2020',
    desc: 'Référence environnementale principale retenue pour l’enveloppe et les performances thermiques du projet.',
    icon: '✓',
  },
  {
    name: 'Économie circulaire',
    desc: 'Le projet est construit autour du réemploi, de la démontabilité et de la relocalisation des modules plutôt que d’un bâtiment figé.',
    icon: '◆',
  },
  {
    name: 'Innovation responsable',
    desc: 'La Ruche cherche à répondre à un besoin fondamental — se loger près du campus — avec une solution adaptable, industrialisable et plus sobre.',
    icon: '✓',
  },
];

const waterEnergyLinks = [
  {
    title: 'PAC mutualisée',
    desc: 'Une seule pompe à chaleur par module permet de mutualiser le chauffage et l’ECS pour 40 étudiants, en limitant la multiplication des équipements.',
    metric: '16–18 kW',
  },
  {
    title: 'Stockage batterie intermédiaire',
    desc: 'Le parc batterie de 229 kWh n’a pas pour but l’autonomie totale, mais l’optimisation de l’autoconsommation et la réduction des appels réseau.',
    metric: '229 kWh',
  },
  {
    title: 'Production solaire journalière',
    desc: 'La production moyenne d’environ 68 kWh/j permet de couvrir une part significative des besoins, même si le système reste hybride en hiver.',
    metric: '~68 kWh/j',
  },
  {
    title: 'Appoint réseau hivernal',
    desc: 'Le besoin réseau restant est assumé : le projet ne cherche pas l’autonomie absolue à tout prix, mais un compromis réaliste entre performance et coût.',
    metric: '~132 kWh/j',
  },
];

export default function Environnement() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Étude Environnementale"
        title="Un impact réduit par la conception, pas par le discours"
        subtitle="La Ruche combine réemploi, préfabrication, démontabilité, isolation performante et production photovoltaïque pour proposer une réponse plus sobre qu’une construction étudiante classique."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Indicateurs clés"
          title="Ce qui rend La Ruche plus sobre"
          subtitle="L’intérêt environnemental du projet ne repose pas sur un seul levier, mais sur l’addition de plusieurs choix cohérents."
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
              tag="Lecture cycle de vie"
              title="Où se situe l’impact du projet ?"
              subtitle="Cette répartition ne remplace pas une ACV réglementaire complète, mais elle aide à visualiser les grands postes d’impact du module."
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
                Lecture principale
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Le projet réduit surtout l’impact initial de construction grâce au réemploi et au chantier sec. En exploitation, l’effort porte sur l’isolation, la PAC mutualisée, la VMC double flux et le champ photovoltaïque.
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Matériaux"
              title="Des choix cohérents avec la logique du projet"
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
          tag="Énergie & ressources"
          title="Une sobriété assumée plutôt qu’une autonomie fictive"
          subtitle="Le projet ne prétend pas être totalement autonome : il cherche un bon compromis entre performance, réalisme technique et coût."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {waterEnergyLinks.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '10px',
                padding: '1.25rem',
              }}
            >
              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.84rem', marginBottom: '0.45rem' }}>{item.title}</div>
              <div style={{ color: '#F0FDF4', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.45rem' }}>
                {item.metric}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '1.5rem',
            background: 'rgba(245,158,11,0.04)',
            border: '1px solid rgba(245,158,11,0.1)',
            borderRadius: '10px',
            padding: '1.25rem',
          }}
        >
          <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.45rem' }}>
            Positionnement environnemental du projet
          </div>
          <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>
            L’intérêt environnemental de La Ruche ne repose pas sur une promesse exagérée d’autonomie totale. Il repose sur un ensemble cohérent de décisions : logement plus proche du campus, moins de déplacements contraints, réduction des temps de chantier, réemploi des modules, et baisse des besoins énergétiques grâce à une enveloppe correctement dimensionnée.
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Biodiversité & cadre de vie"
          title="Un campus plus vivant, pas seulement plus efficace"
          subtitle="L’environnement ne se limite pas au carbone : il concerne aussi la qualité des sols, du paysage, de l’eau et du quotidien étudiant."
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
            { value: '20', label: 'Conteneurs réemployés', sub: 'par module logement', color: 'amber' },
            { value: '49,5 kWc', label: 'Champ photovoltaïque', sub: 'par module', color: 'green' },
            { value: '229 kWh', label: 'Stockage batterie', sub: 'ordre de grandeur retenu', color: 'amber' },
            { value: 'RE2020', label: 'Référence visée', sub: 'pour l’enveloppe', color: 'green' },
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
            tag="Références & positionnement"
            title="Cadre environnemental du projet"
            centered
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {certifications.map((cert, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(245,158,11,0.04)',
                  border: '1px solid rgba(245,158,11,0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
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
