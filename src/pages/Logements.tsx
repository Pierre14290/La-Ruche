import { useState } from 'react';
import { Thermometer, Wind, Layers, Box, Maximize2, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const containerChoice = [
  {
    name: 'Conteneur 40 pieds',
    dims: '12,00 m × 2,44 m × 2,59 m',
    surface: '~29,3 m² brut / ~25–26 m² utile après isolation',
    usage: 'Choix retenu pour La Ruche. Un conteneur accueille 2 étudiants avec 2 espaces privatifs latéraux et un noyau sanitaire central mutualisé.',
    weight: '~3 800 kg (vide)',
    tag: 'Choix retenu',
    tagColor: '#4ADE80',
  },
  {
    name: 'Conteneur 20 pieds',
    dims: '6,06 m × 2,44 m × 2,59 m',
    surface: '~14,9 m² brut',
    usage: 'Trop compact pour accueillir confortablement 2 étudiants. Il reste pertinent pour certains modules de service ou techniques.',
    weight: '~2 300 kg (vide)',
    tag: 'Secondaire',
    tagColor: '#F59E0B',
  },
  {
    name: 'High Cube 40 pieds',
    dims: '12,00 m × 2,44 m × 2,89 m',
    surface: '~29,3 m² brut / hauteur majorée',
    usage: 'Variante intéressante pour un meilleur confort spatial, mais non retenue comme base standard afin de simplifier l’industrialisation.',
    weight: '~3 900 kg (vide)',
    tag: 'Option',
    tagColor: '#38BDF8',
  },
];

const layouts = [
  {
    title: 'Organisation générale d’un conteneur',
    items: [
      'Le conteneur 40 pieds est divisé en deux logements symétriques pour 2 étudiants.',
      'Chaque étudiant dispose de son propre accès extérieur pour renforcer l’autonomie et limiter les conflits d’usage.',
      'Le noyau central mutualisé contient une douche 80×80 cm, un WC séparé et un meuble double vasque de 160×60 cm.',
      'Cette organisation concentre les réseaux au centre et libère les extrémités pour les espaces privatifs.',
    ],
  },
  {
    title: 'Équipement d’un espace privatif',
    items: [
      'Lit 90×200 cm',
      'Bureau compact',
      'Coin kitchenette',
      'Penderie et commode',
      'Rangements optimisés en partie haute',
      'Le principe général est de conserver dans la cellule privée l’essentiel du quotidien et de mutualiser les fonctions plus encombrantes à l’échelle du campus.',
    ],
  },
];

const insulationSystems = [
  {
    icon: <Layers size={20} />,
    title: 'Murs isolés en laine de verre + parement',
    desc: 'L’enveloppe métallique du conteneur nécessite une isolation performante. Le système retenu repose sur 10 cm de laine de verre et 1,3 cm de placo pour atteindre l’objectif réglementaire.',
    performance: '10 cm',
    unit: 'laine de verre',
  },
  {
    icon: <Box size={20} />,
    title: 'Toiture renforcée',
    desc: 'La toiture est la zone la plus sensible en hiver comme en été. Une épaisseur de 17 cm de laine de verre est retenue afin de limiter fortement les déperditions et les surchauffes.',
    performance: '17 cm',
    unit: 'laine de verre',
  },
  {
    icon: <Thermometer size={20} />,
    title: 'Plancher isolé',
    desc: 'Le plancher reçoit 9 cm de laine de verre. Cette valeur permet d’atteindre la résistance thermique visée tout en restant compatible avec la préfabrication du module.',
    performance: '9 cm',
    unit: 'laine de verre',
  },
  {
    icon: <Wind size={20} />,
    title: 'Ventilation double flux',
    desc: 'La ventilation est assurée par une VMC double flux, avec un rendement d’environ 81 %. Elle limite les pertes dues au renouvellement d’air, tout en garantissant une bonne qualité d’air intérieur.',
    performance: '81 %',
    unit: 'rendement',
  },
];

const thermalBreakdown = [
  { label: 'Flux surfaciques (DPS)', value: 5417, pct: 44.4, color: '#F87171' },
  { label: 'Ponts thermiques (DPPT)', value: 600, pct: 4.9, color: '#FB923C' },
  { label: 'Renouvellement d’air (DBR)', value: 6214, pct: 50.9, color: '#FBBF24' },
];

const energyPosts = [
  { item: 'Usages électriques hors chauffage', value: '~3,95 kWh/j', desc: 'frigos, micro-ondes, plaques, LED, TV, ordinateurs, téléphones, VMC, petits usages' },
  { item: 'ECS via PAC', value: '~1,1 kWh/j', desc: 'pour 2 étudiants, environ 40 L/j chacun à 40°C' },
  { item: 'Chauffage via PAC', value: '~5,0 kWh/j', desc: 'en journée hivernale défavorable, avec COP 2,8' },
  { item: 'Total conteneur en hiver', value: '~10 kWh/j', desc: 'ordre de grandeur retenu pour le dimensionnement' },
];

const heatingSystems = [
  {
    system: 'PAC air/eau par module',
    cop: '2,8',
    desc: 'Une seule pompe à chaleur par module de logement alimente le chauffage et l’eau chaude sanitaire. C’est la solution retenue car elle reste compatible avec le caractère modulaire, démontable et industrialisable du projet.',
    recommended: true,
  },
  {
    system: 'Ballon ECS mutualisé',
    cop: '1 000–1 500 L',
    desc: 'Un ballon d’eau chaude centralisé permet de répondre aux besoins des 40 étudiants du module. La valeur de 1 200 L constitue une bonne base de dimensionnement.',
    recommended: true,
  },
  {
    system: 'VMC double flux par étage',
    cop: '81 %',
    desc: 'Un système de ventilation est prévu par étage. Cette stratégie réduit la longueur des réseaux et reste cohérente avec le caractère répétitif de la structure.',
    recommended: true,
  },
];

const housingGallery = [
  {
    title: 'Schéma d’aménagement du conteneur',
    desc: 'Plan du conteneur 40 pieds avec deux logements et noyau central mutualisé',
    src: 'LIEN_SCHEMA_CONTAINER',
  },
  {
    title: 'Implantation des 5 conteneurs dans le module',
    desc: 'Principe géométrique d’un étage dans l’hexagone',
    src: 'LIEN_SCHEMA_MODULE_PLAN',
  },
  {
    title: 'Vue Fusion du module',
    desc: 'Vue d’ensemble du module logement sur plusieurs niveaux',
    src: 'LIEN_IMAGE_FUSION_1',
  },
  {
    title: 'Détail constructif du module',
    desc: 'Structure porteuse, dalle et insertion des conteneurs',
    src: 'LIEN_IMAGE_FUSION_2',
  },
];

export default function Logements() {
  const [selectedImage, setSelectedImage] = useState<null | {
    title: string;
    desc: string;
    src: string;
  }>(null);

  return (
    <div className="page-enter">
      <PageHero
        tag="Les Logements"
        title="Des conteneurs pensés comme de vrais logements étudiants"
        subtitle="La Ruche transforme des conteneurs maritimes en logements compacts, isolés et industrialisables. L’objectif n’est pas seulement d’abriter, mais de loger rapidement, correctement et à coût maîtrisé."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Choix du conteneur"
          title="Le 40 pieds comme base standard"
          subtitle="Le projet retient le conteneur 40 pieds comme module d’habitation de référence : assez long pour accueillir deux étudiants, assez standard pour être industrialisé."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
          {containerChoice.map((c, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(245,158,11,0.04)',
                  borderBottom: '1px solid rgba(245,158,11,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem' }}>{c.name}</span>
                <span
                  style={{
                    color: c.tagColor,
                    background: `${c.tagColor}18`,
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {c.tag}
                </span>
              </div>
              <div style={{ padding: '1.15rem 1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#4A6340', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                      Dimensions
                    </div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.82rem' }}>{c.dims}</div>
                  </div>
                  <div>
                    <div style={{ color: '#4A6340', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                      Surface
                    </div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.82rem' }}>{c.surface}</div>
                  </div>
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.85rem' }}>{c.usage}</div>
                <div style={{ color: '#4A6340', fontSize: '0.74rem' }}>
                  Masse à vide : <span style={{ color: '#F0FDF4' }}>{c.weight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Aménagement intérieur"
          title="Une cellule simple, répétable et rationnelle"
          subtitle="L’aménagement privilégie la compacité et la mutualisation : le conteneur accueille l’essentiel, tandis que certaines fonctions sont reportées dans les modules communs."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {layouts.map((l, i) => (
            <div key={i} className="info-card">
              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>{l.title}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {l.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        background: '#F59E0B',
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        flexShrink: 0,
                        marginTop: '7px',
                      }}
                    />
                    <span style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '1.5rem',
            background: 'rgba(74,222,128,0.06)',
            border: '1px solid rgba(74,222,128,0.15)',
            borderRadius: '10px',
            padding: '1.25rem',
          }}
        >
          <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.4rem' }}>
            Choix d’usage retenu
          </div>
          <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>
            La cuisine complète, la laverie, les espaces d’étude et les services sont mutualisés à l’échelle du campus. Cette décision permet de conserver des logements compacts, tout en améliorant la qualité globale de vie et en réduisant les coûts.
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Galerie technique"
          title="Plans et vues du module"
          subtitle="Clique sur une image pour l’agrandir."
          centered
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {housingGallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img)}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '14px',
                overflow: 'hidden',
                padding: 0,
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.1)';
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16 / 10',
                  background: '#111A0F',
                  borderBottom: '1px solid rgba(245,158,11,0.08)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    right: '0.85rem',
                    width: 38,
                    height: 38,
                    borderRadius: '999px',
                    background: 'rgba(10,18,8,0.72)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F0FDF4',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>
              <div style={{ padding: '1.1rem 1.15rem 1.2rem' }}>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1rem', marginBottom: '0.35rem' }}>
                  {img.title}
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.86rem', lineHeight: 1.6 }}>
                  {img.desc}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Isolation et ventilation"
          title="Une enveloppe simple, mais correctement dimensionnée"
          subtitle="Le conteneur métallique impose une vraie stratégie thermique. L’objectif n’est pas d’inventer une paroi complexe, mais d’atteindre un niveau cohérent avec la RE2020 et le confort d’usage."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {insulationSystems.map((s, i) => (
            <div key={i} className="info-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
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
            Références réglementaires retenues
          </div>
          <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>
            Pour le dimensionnement, le projet vise des résistances thermiques compatibles avec la RE2020 : environ 3,2 m²·K/W pour les murs, 5,2 m²·K/W pour la toiture et 3 m²·K/W pour le plancher. Les épaisseurs retenues ont été définies pour atteindre ces ordres de grandeur tout en restant compatibles avec un système modulaire préfabriqué.
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Déperditions thermiques"
              title="Répartition des pertes du module logement"
              subtitle="Le module de 20 conteneurs présente un flux total de déperdition d’environ 12 200 W dans les conditions de calcul retenues."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {thermalBreakdown.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', gap: '1rem' }}>
                    <span style={{ color: '#A7C9A0', fontSize: '0.85rem' }}>{item.label}</span>
                    <span style={{ color: item.color, fontSize: '0.85rem', fontWeight: 700 }}>
                      {item.value} W — {item.pct.toFixed(1)}%
                    </span>
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
                Point clé du projet
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Les pertes par renouvellement d’air représentent la part la plus importante du bilan. Cela justifie pleinement le choix d’une VMC double flux performante et d’une bonne maîtrise de l’étanchéité à l’air.
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Systèmes retenus"
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
                    <span
                      style={{
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
                      }}
                    >
                      Recommandé
                    </span>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', gap: '1rem' }}>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{s.system}</div>
                    <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.82rem' }}>{s.cop}</div>
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.83rem', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                background: 'rgba(245,158,11,0.04)',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '8px',
                padding: '1.25rem',
              }}
            >
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                Dimensionnement retenu
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Le module logement est dimensionné avec une PAC unique d’environ 16 à 18 kW thermiques, compatible avec un flux de déperdition de 12,2 kW et les besoins en ECS des 40 étudiants.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Bilan énergétique"
          title="Ordres de grandeur énergétiques"
          subtitle="Les valeurs ci-dessous servent au dimensionnement du module logement et de son système énergétique."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {energyPosts.map((post, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '10px',
                padding: '1.25rem',
              }}
            >
              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.84rem', marginBottom: '0.45rem' }}>{post.item}</div>
              <div style={{ color: '#F0FDF4', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.45rem', letterSpacing: '-0.03em' }}>
                {post.value}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>{post.desc}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '1.5rem',
            background: 'rgba(74,222,128,0.06)',
            border: '1px solid rgba(74,222,128,0.15)',
            borderRadius: '10px',
            padding: '1.25rem',
          }}
        >
          <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.4rem' }}>
            Synthèse module logement
          </div>
          <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>
            Pour un module de 20 conteneurs, soit 40 étudiants, le besoin électrique journalier en hiver est de l’ordre de 200 à 206 kWh/j. Cette valeur intègre les usages courants, l’ECS et la consommation électrique de la PAC avec un COP de 2,8.
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '12,2 kW', label: 'Déperdition module', sub: '20 conteneurs / 40 étudiants', color: 'amber' },
            { value: '16–18 kW', label: 'PAC recommandée', sub: 'une par module', color: 'green' },
            { value: '~200 kWh/j', label: 'Besoin hiver module', sub: 'ordre de grandeur retenu', color: 'amber' },
            { value: 'RE2020', label: 'Référence visée', sub: 'pour l’enveloppe', color: 'green' },
          ]}
        />
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.82)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            zIndex: 9999,
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(1200px, 96vw)',
              maxHeight: '92vh',
              background: '#0F1A0B',
              border: '1px solid rgba(245,158,11,0.18)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '1rem 1.1rem',
                borderBottom: '1px solid rgba(245,158,11,0.08)',
              }}
            >
              <div>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>
                  {selectedImage.title}
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.82rem' }}>
                  {selectedImage.desc}
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '999px',
                  border: '1px solid rgba(245,158,11,0.15)',
                  background: 'rgba(245,158,11,0.06)',
                  color: '#F0FDF4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div
              style={{
                background: '#111A0F',
                maxHeight: 'calc(92vh - 84px)',
                overflow: 'auto',
              }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
