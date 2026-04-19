import { AlertTriangle, TrendingUp, Leaf, Users, Home, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const challenges = [
  {
    icon: <Home size={20} />,
    title: 'Pénurie de logements',
    desc: 'Les grandes villes universitaires font face à une pénurie structurelle. Le parc de logements étudiants est insuffisant : en France, on compte seulement 1 logement Crous pour 11 étudiants.',
    stat: '1 pour 11',
    statLabel: 'logement Crous / étudiants',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Coûts prohibitifs',
    desc: 'Les loyers en zones universitaires ont augmenté de +35% en 10 ans. Le logement représente désormais le premier poste de dépenses pour 68% des étudiants, pesant sur leur réussite académique.',
    stat: '+35%',
    statLabel: 'hausse des loyers en 10 ans',
  },
  {
    icon: <Clock size={20} />,
    title: 'Délais de construction trop longs',
    desc: 'Les résidences universitaires classiques nécessitent 3 à 5 ans de conception, instruction et chantier. Les besoins sont immédiats et évolutifs — les campus ferment, ouvrent, déménagent.',
    stat: '3–5 ans',
    statLabel: 'délai moyen construction',
  },
  {
    icon: <Leaf size={20} />,
    title: 'Impact environnemental',
    desc: 'Le secteur du bâtiment représente 40% des émissions de CO₂ en Europe. La construction neuve standard génère des volumes massifs de déchets et consomme des ressources non renouvelables.',
    stat: '40%',
    statLabel: 'des émissions CO₂ du bâtiment',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Inadaptation aux nouveaux usages',
    desc: 'Les étudiants attendent des espaces de vie communautaires, connectés, modulables. Les logements traditionnels, isolés et standardisés, ne correspondent plus aux modes de vie actuels.',
    stat: '78%',
    statLabel: 'insatisfaits de leur logement',
  },
  {
    icon: <Users size={20} />,
    title: 'Inégalités d\'accès',
    desc: 'Les étudiants issus de milieux modestes, en mobilité internationale ou en alternance rencontrent des obstacles spécifiques. Le manque de flexibilité des baux aggrave la précarité.',
    stat: '25%',
    statLabel: 'des étudiants en situation précaire',
  },
];

const motivations = [
  {
    num: '01',
    title: 'Répondre vite',
    desc: 'La Ruche peut être déployée en 6 à 8 semaines là où une résidence classique prend des années. Le besoin est là maintenant.',
  },
  {
    num: '02',
    title: 'Construire durable',
    desc: 'En réutilisant des conteneurs maritimes déclassés et en intégrant des systèmes énergétiques passifs, chaque module a un bilan carbone radicalement réduit.',
  },
  {
    num: '03',
    title: 'Penser collectif',
    desc: 'La forme hexagonale et le concept de ruche ne sont pas qu\'esthétiques — ils symbolisent et structurent une vie collective, collaborative, efficiente.',
  },
  {
    num: '04',
    title: 'S\'adapter en permanence',
    desc: 'Un campus peut grandir, se reconfigurer, se déplacer. La modularité est au cœur du système : on ajoute, on retire, on réoriente les modules selon l\'évolution des besoins.',
  },
  {
    num: '05',
    title: 'Rendre accessible',
    desc: 'Un modèle économique pensé pour maintenir des loyers étudiants en dessous de 350–450€/mois tout en assurant la rentabilité pour les opérateurs.',
  },
  {
    num: '06',
    title: 'Créer un modèle réplicable',
    desc: 'La Ruche n\'est pas un prototype unique — c\'est un système exportable, standardisé mais flexible, qui peut s\'adapter à n\'importe quel territoire et établissement.',
  },
];

export default function Enjeux() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Enjeux & Motivations"
        title="Pourquoi La Ruche ?"
        subtitle="La crise du logement étudiant est structurelle, urgente et multidimensionnelle. Nous avons conçu une réponse à la hauteur de ces défis."
        accentWord="Ruche"
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Les défis"
          title="Un marché du logement étudiant en crise"
          subtitle="Six problèmes majeurs justifient l'urgence d'une solution innovante et systémique."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1rem',
          }}
        >
          {challenges.map((c, i) => (
            <div key={i} className="info-card">
              <div style={{ display: 'flex', gap: '0.875rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '6px',
                    background: 'rgba(245,158,11,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F59E0B',
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem' }}>{c.title}</div>
                  <div style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: 700 }}>
                    {c.stat} <span style={{ color: '#A7C9A0', fontWeight: 400 }}>{c.statLabel}</span>
                  </div>
                </div>
              </div>
              <p style={{ color: '#A7C9A0', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <StatGrid
          stats={[
            { value: '2.9M', label: 'Étudiants en France', sub: 'hors alternants', color: 'amber' },
            { value: '340 000', label: 'Places Crous disponibles', sub: 'pour tous les étudiants', color: 'green' },
            { value: '1.2M', label: 'Besoin estimé', sub: 'nouveaux logements d\'ici 2030', color: 'amber' },
            { value: '12%', label: 'Budget national logement', sub: 'consacré aux étudiants', color: 'green' },
          ]}
        />
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Nos motivations"
          title="Pourquoi nous avons imaginé La Ruche"
          subtitle="Six raisons fondamentales qui ont guidé la conception de ce projet d'innovation."
        />

        <div style={{ display: 'grid', gap: 0 }}>
          {motivations.map((m, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '2rem',
                padding: '2rem 0',
                borderBottom: i < motivations.length - 1 ? '1px solid rgba(245,158,11,0.08)' : 'none',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  color: '#F59E0B',
                  fontWeight: 800,
                  fontSize: '2rem',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  opacity: 0.35,
                }}
              >
                {m.num}
              </div>
              <div>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                  {m.title}
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {m.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: 'linear-gradient(135deg, rgba(74,222,128,0.05) 0%, rgba(245,158,11,0.05) 100%)',
          borderTop: '1px solid rgba(74,222,128,0.12)',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-block', borderColor: 'rgba(74,222,128,0.35)', color: '#4ADE80', background: 'rgba(74,222,128,0.08)' }}>
            Notre vision
          </span>
          <blockquote
            style={{
              color: '#F0FDF4',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 600,
              lineHeight: 1.5,
              fontStyle: 'italic',
              margin: 0,
            }}
          >
            "La Ruche n'est pas seulement un logement étudiant — c'est une nouvelle manière de concevoir la vie collective, la durabilité et la flexibilité dans l'espace urbain et péri-urbain."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
