import { useEffect, useState } from 'react';
import {
  Thermometer,
  Wind,
  Layers,
  Box,
  Maximize2,
  X,
  Sun,
  Battery,
  Zap,
  Gauge,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const summarySlides = [
  {
    title: 'Synthèse des logements',
    desc: 'Slide de résumé pour présenter les logements, l’aménagement et le choix du conteneur 40 pieds.',
    src: 'LIEN_DIAPO_LOGEMENTS_1',
  },
  {
    title: 'Thermique et énergie',
    desc: 'Slide complémentaire sur les déperditions, la PAC, le bilan énergétique et le champ photovoltaïque.',
    src: 'LIEN_DIAPO_LOGEMENTS_2',
  },
];

const containerChoice = [
  {
    name: 'Conteneur 40 pieds',
    dims: '12,00 m × 2,44 m × 2,59 m',
    surface: '~29,3 m² brut / ~25–26 m² utile après isolation',
    usage:
      'Choix retenu pour La Ruche. Un conteneur accueille 2 étudiants avec 2 espaces privatifs latéraux et un noyau sanitaire central mutualisé.',
    weight: '~3 800 kg (vide)',
    tag: 'Choix retenu',
    tagColor: '#4ADE80',
  },
  {
    name: 'Conteneur 20 pieds',
    dims: '6,06 m × 2,44 m × 2,59 m',
    surface: '~14,9 m² brut',
    usage:
      'Trop compact pour accueillir confortablement 2 étudiants. Il reste pertinent pour certains modules de service ou techniques.',
    weight: '~2 300 kg (vide)',
    tag: 'Secondaire',
    tagColor: '#F59E0B',
  },
  {
    name: 'High Cube 40 pieds',
    dims: '12,00 m × 2,44 m × 2,89 m',
    surface: '~29,3 m² brut / hauteur majorée',
    usage:
      'Variante intéressante pour un meilleur confort spatial, mais non retenue comme base standard afin de simplifier l’industrialisation.',
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
    desc:
      'L’enveloppe métallique du conteneur nécessite une isolation performante. Le système retenu repose sur 10 cm de laine de verre et 1,3 cm de placo pour atteindre l’objectif réglementaire.',
    performance: '10 cm',
    unit: 'laine de verre',
  },
  {
    icon: <Box size={20} />,
    title: 'Toiture renforcée',
    desc:
      'La toiture est la zone la plus sensible en hiver comme en été. Une épaisseur de 17 cm de laine de verre est retenue afin de limiter fortement les déperditions et les surchauffes.',
    performance: '17 cm',
    unit: 'laine de verre',
  },
  {
    icon: <Thermometer size={20} />,
    title: 'Plancher isolé',
    desc:
      'Le plancher reçoit 9 cm de laine de verre. Cette valeur permet d’atteindre la résistance thermique visée tout en restant compatible avec la préfabrication du module.',
    performance: '9 cm',
    unit: 'laine de verre',
  },
  {
    icon: <Wind size={20} />,
    title: 'Ventilation double flux',
    desc:
      'La ventilation est assurée par une VMC double flux, avec un rendement d’environ 81 %. Elle limite les pertes dues au renouvellement d’air, tout en garantissant une bonne qualité d’air intérieur.',
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
  {
    item: 'Usages électriques hors chauffage',
    value: '~3,95 kWh/j',
    desc:
      'frigos, micro-ondes, plaques, LED, TV, ordinateurs, téléphones, VMC, petits usages',
  },
  {
    item: 'ECS via PAC',
    value: '~1,1 kWh/j',
    desc: 'pour 2 étudiants, environ 40 L/j chacun à 40°C',
  },
  {
    item: 'Chauffage via PAC',
    value: '~5,0 kWh/j',
    desc: 'en journée hivernale défavorable, avec COP 2,8',
  },
  {
    item: 'Total conteneur en hiver',
    value: '~10 kWh/j',
    desc: 'ordre de grandeur retenu pour le dimensionnement',
  },
];

const moduleEnergy = [
  {
    title: 'Par conteneur',
    value: '~10 kWh/j',
    desc: 'en hiver, pour 2 étudiants',
  },
  {
    title: 'Par module',
    value: '~200–206 kWh/j',
    desc: 'pour 20 conteneurs et 40 étudiants',
  },
  {
    title: 'Déperdition thermique',
    value: '12,2 kW',
    desc: 'module logement complet',
  },
  {
    title: 'PAC retenue',
    value: '16–18 kW',
    desc: 'une seule par module',
  },
];

const pvCards = [
  {
    icon: <Sun size={20} />,
    title: 'Champ photovoltaïque',
    value: '49,5 kWc',
    desc:
      '110 panneaux de 450 Wc sur environ 231 m² utiles de toiture, inclinés à 40°.',
  },
  {
    icon: <Battery size={20} />,
    title: 'Stockage batterie',
    value: '229 kWh',
    desc:
      'Parc LiFePO4 recommandé pour lisser la production, couvrir la nuit et réduire les appels réseau.',
  },
  {
    icon: <Gauge size={20} />,
    title: 'Production moyenne',
    value: '~68 kWh/j',
    desc:
      'Production journalière moyenne estimée à Rouen avec les rendements retenus.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Couverture énergétique',
    value: '~34 %',
    desc:
      'Couverture moyenne d’un besoin hivernal complet du module. Le système reste hybride avec appoint réseau.',
  },
];

const pvSpecs = [
  { label: 'Panneaux', value: '110 × 450 Wc' },
  { label: 'Puissance crête totale', value: '49,5 kWc' },
  { label: 'Surface PV utile', value: '~231 m²' },
  { label: 'Inclinaison', value: '40°' },
  { label: 'Configuration', value: '10 en série × 11 en parallèle' },
  { label: 'Régulateur / MPPT', value: '600 V DC min / ~155 A' },
  { label: 'Tension système batterie', value: '409,6 V' },
  { label: 'Parc batterie', value: '16 batteries LiFePO4' },
  { label: 'Capacité batterie', value: '229 kWh nominaux' },
  { label: 'Production moyenne estimée', value: '~68 kWh/j' },
  { label: 'Besoin hiver module', value: '~200–206 kWh/j' },
  { label: 'Appoint réseau hiver', value: '~132 kWh/j' },
];

const heatingSystems = [
  {
    system: 'PAC air/eau par module',
    cop: 'COP 2,8',
    desc:
      'Une seule pompe à chaleur par module de logement alimente le chauffage et l’eau chaude sanitaire. C’est la solution retenue car elle reste compatible avec le caractère modulaire, démontable et industrialisable du projet.',
    recommended: true,
  },
  {
    system: 'Ballon ECS mutualisé',
    cop: '1 000–1 500 L',
    desc:
      'Un ballon d’eau chaude centralisé permet de répondre aux besoins des 40 étudiants du module. La valeur de 1 200 L constitue une bonne base de dimensionnement.',
    recommended: true,
  },
  {
    system: 'VMC double flux par étage',
    cop: '81 %',
    desc:
      'Un système de ventilation est prévu par étage. Cette stratégie réduit la longueur des réseaux et reste cohérente avec le caractère répétitif de la structure.',
    recommended: true,
  },
];

const planImage = {
  title: 'Schéma d’aménagement du conteneur',
  desc: 'Plan du conteneur 40 pieds avec deux logements et noyau central mutualisé',
  src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776773583/Image1_dgeunk.png',
};

const fusionGallery = [
  {
    title: 'Implantation des 5 conteneurs dans le module',
    desc: 'Principe géométrique d’un étage dans l’hexagone',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776763926/Capture_decran_2026-04-21_112141_r771xp.png',
  },
  {
    title: 'Vue Fusion du module',
    desc: 'Vue d’ensemble du module logement sur plusieurs niveaux',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776763928/Capture_decran_2026-04-21_112008_zmb52u.png',
  },
  {
    title: 'Détail constructif du module',
    desc: 'Structure porteuse, dalle et insertion des conteneurs',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776763926/Capture_decran_2026-04-21_112035_upm68x.png',
  },
];

const pvImage = {
  title: 'Toiture photovoltaïque du module',
  desc: 'Vue du plafond hexagonal supportant le champ PV',
  src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776773801/Capture_decran_2026-04-21_11214_mztwh1.png',
};

export default function Logements() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenSlide, setFullscreenSlide] = useState<null | {
    title: string;
    desc: string;
    src: string;
  }>(null);

  const [selectedImage, setSelectedImage] = useState<null | {
    title: string;
    desc: string;
    src: string;
  }>(null);

  const openFullscreen = () => {
    setFullscreenSlide(summarySlides[currentSlide]);
  };

  const closeFullscreen = () => {
    setFullscreenSlide(null);
  };

  const goPreviousSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev === 0 ? summarySlides.length - 1 : prev - 1;
      if (fullscreenSlide) setFullscreenSlide(summarySlides[next]);
      return next;
    });
  };

  const goNextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev === summarySlides.length - 1 ? 0 : prev + 1;
      if (fullscreenSlide) setFullscreenSlide(summarySlides[next]);
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPreviousSlide();
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNextSlide();
      }

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        if (fullscreenSlide) closeFullscreen();
        else openFullscreen();
      }

      if (e.key === 'Escape') {
        closeFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenSlide, currentSlide, selectedImage]);

  const activeSlide = summarySlides[currentSlide];

  return (
    <div className="page-enter">
      <PageHero
        tag="Les Logements"
        title="Des conteneurs pensés comme de vrais logements étudiants"
        subtitle="La Ruche transforme des conteneurs maritimes en logements compacts, isolés et industrialisables. L’objectif n’est pas seulement d’abriter, mais de loger rapidement, correctement et à coût maîtrisé."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
        <SectionHeader
          tag="Support de présentation"
          title="Diapositive de synthèse"
          /*subtitle="← / → : changer de diapo · F : plein écran · Échap : quitter"*/
          centered
        />

        <div
          style={{
            background: '#0F1A0B',
            border: '1px solid rgba(245,158,11,0.12)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.25rem',
              borderBottom: '1px solid rgba(245,158,11,0.08)',
              background: 'rgba(245,158,11,0.04)',
            }}
          >
            <div>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>
                {activeSlide.title}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem' }}>
                {activeSlide.desc}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
              <button onClick={goPreviousSlide} style={navButtonStyle}>
                <ChevronLeft size={18} />
              </button>

              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.85rem', minWidth: 48, textAlign: 'center' }}>
                {currentSlide + 1} / {summarySlides.length}
              </div>

              <button onClick={goNextSlide} style={navButtonStyle}>
                <ChevronRight size={18} />
              </button>

              <button onClick={openFullscreen} style={navButtonStyle}>
                <Maximize2 size={16} />
              </button>
            </div>
          </div>

          <button
            onClick={openFullscreen}
            style={{
              width: '100%',
              padding: 0,
              border: 'none',
              background: '#111A0F',
              cursor: 'pointer',
              display: 'block',
            }}
          >
            <div style={{ aspectRatio: '16 / 9', background: '#111A0F' }}>
              <img
                src={activeSlide.src}
                alt={activeSlide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </button>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

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

        <div style={{ marginTop: '1.75rem' }}>
          <button
            onClick={() => setSelectedImage(planImage)}
            style={{
              width: '100%',
              background: '#0F1A0B',
              border: '1px solid rgba(245,158,11,0.1)',
              borderRadius: '14px',
              overflow: 'hidden',
              padding: 0,
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 7',
                background: '#111A0F',
                borderBottom: '1px solid rgba(245,158,11,0.08)',
              }}
            >
              <img
                src={planImage.src}
                alt={planImage.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  background: '#fff',
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
            <div style={{ padding: '1rem 1.1rem 1.15rem' }}>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.96rem', marginBottom: '0.3rem' }}>
                {planImage.title}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.6 }}>
                {planImage.desc}
              </div>
            </div>
          </button>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Vues du module"
          title="Plans et vues Fusion"
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
          {fusionGallery.map((img, i) => (
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
          title="Ordres de grandeur pour le module logement"
          subtitle="Les valeurs ci-dessous servent au dimensionnement du chauffage, du stockage et du système photovoltaïque."
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

        <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {moduleEnergy.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(74,222,128,0.06)',
                border: '1px solid rgba(74,222,128,0.15)',
                borderRadius: '10px',
                padding: '1.1rem',
              }}
            >
              <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.84rem', marginBottom: '0.35rem' }}>{item.title}</div>
              <div style={{ color: '#F0FDF4', fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.35rem' }}>{item.value}</div>
              <div style={{ color: '#A7C9A0', fontSize: '0.81rem', lineHeight: 1.55 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Champ photovoltaïque"
          title="Une toiture productive, mais un système volontairement hybride"
          subtitle="Le module n’est pas 100 % autonome en hiver. L’objectif réaliste est de maximiser l’autoconsommation et de réduire le besoin réseau sans tomber dans un surdimensionnement trop coûteux."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {pvCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '10px',
                padding: '1.2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.75rem' }}>
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
                  {card.icon}
                </div>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{card.title}</div>
              </div>
              <div style={{ color: '#F59E0B', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.45rem' }}>{card.value}</div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>{card.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.5rem', alignItems: 'start' }}>
          <div
            style={{
              background: '#0F1A0B',
              border: '1px solid rgba(245,158,11,0.1)',
              borderRadius: '10px',
              padding: '1.25rem',
            }}
          >
            <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>
              Dimensionnement retenu
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem 1rem' }}>
              {pvSpecs.map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(245,158,11,0.06)', paddingBottom: '0.5rem' }}>
                  <div style={{ color: '#4A6340', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>
                    {item.label}
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.5 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(74,222,128,0.06)',
              border: '1px solid rgba(74,222,128,0.15)',
              borderRadius: '10px',
              padding: '1.25rem',
            }}
          >
            <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.45rem' }}>
              Résultat énergétique
            </div>
            <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.7 }}>
              La toiture photovoltaïque couvre une part significative des besoins du module, mais pas l’intégralité des consommations hivernales. Le projet retient donc une stratégie hybride : production solaire maximisée, stockage batterie intermédiaire, puis appoint réseau d’environ 132 kWh/j en hiver.
            </div>
            <div style={{ marginTop: '1rem', color: '#F0FDF4', fontWeight: 700, fontSize: '0.88rem' }}>
              Pourquoi pas une toiture rotative ?
            </div>
            <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6, marginTop: '0.35rem' }}>
              Le gain énergétique supplémentaire ne compense pas la complexité mécanique, la maintenance et le surcoût. Une toiture fixe inclinée à 40° reste plus crédible pour un système modulaire démontable.
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1.75rem' }}>
          <button
            onClick={() => setSelectedImage(pvImage)}
            style={{
              width: '100%',
              background: '#0F1A0B',
              border: '1px solid rgba(245,158,11,0.1)',
              borderRadius: '14px',
              overflow: 'hidden',
              padding: 0,
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 8',
                background: '#111A0F',
                borderBottom: '1px solid rgba(245,158,11,0.08)',
              }}
            >
              <img
                src={pvImage.src}
                alt={pvImage.title}
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
            <div style={{ padding: '1rem 1.1rem 1.15rem' }}>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.96rem', marginBottom: '0.3rem' }}>
                {pvImage.title}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.6 }}>
                {pvImage.desc}
              </div>
            </div>
          </button>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '12,2 kW', label: 'Déperdition module', sub: '20 conteneurs / 40 étudiants', color: 'amber' },
            { value: '49,5 kWc', label: 'Champ PV', sub: 'sur toiture hexagonale', color: 'green' },
            { value: '229 kWh', label: 'Stockage batterie', sub: 'LiFePO4 recommandé', color: 'amber' },
            { value: '~132 kWh/j', label: 'Appoint réseau hiver', sub: 'ordre de grandeur', color: 'green' },
          ]}
        />
      </section>

      {fullscreenSlide && (
        <div
          onClick={closeFullscreen}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.88)',
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
              width: 'min(1400px, 96vw)',
              maxHeight: '94vh',
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
              <button onClick={goPreviousSlide} style={navButtonStyle}>
                <ChevronLeft size={18} />
              </button>

              <div style={{ flex: 1 }}>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>
                  {fullscreenSlide.title}
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.82rem' }}>
                  {fullscreenSlide.desc} · {currentSlide + 1} / {summarySlides.length}
                </div>
              </div>

              <button onClick={goNextSlide} style={navButtonStyle}>
                <ChevronRight size={18} />
              </button>

              <button onClick={closeFullscreen} style={navButtonStyle}>
                <X size={18} />
              </button>
            </div>

            <div style={{ background: '#111A0F', maxHeight: 'calc(94vh - 84px)', overflow: 'auto' }}>
              <img
                src={fullscreenSlide.src}
                alt={fullscreenSlide.title}
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
              <button onClick={() => setSelectedImage(null)} style={navButtonStyle}>
                <X size={18} />
              </button>
            </div>

            <div style={{ background: '#111A0F', maxHeight: 'calc(92vh - 84px)', overflow: 'auto' }}>
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

const navButtonStyle = {
  width: 38,
  height: 38,
  borderRadius: '999px',
  border: '1px solid rgba(245,158,11,0.16)',
  background: 'rgba(245,158,11,0.06)',
  color: '#F0FDF4',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const;
