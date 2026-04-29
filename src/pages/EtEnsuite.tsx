import { useEffect, useState } from 'react';
import {
  Rocket,
  Building2,
  Car,
  Sun,
  BadgeCheck,
  Network,
  Globe2,
  Factory,
  Users,
  Leaf,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const summarySlides = [
  {
    title: 'Synthèse des perspectives',
    desc: 'Slide de résumé pour présenter les évolutions possibles de La Ruche après le premier démonstrateur.',
    src: 'LIEN_DIAPO_ET_ENSUITE_1',
  },
  {
    title: 'Feuille de route de développement',
    desc: 'Slide complémentaire sur le passage du prototype au déploiement multi-campus.',
    src: 'LIEN_DIAPO_ET_ENSUITE_2',
  },
];

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Prototype démonstrateur',
    horizon: '0–18 mois',
    desc: 'Construire un premier module logement complet afin de valider l’assemblage, le confort, les consommations réelles, les coûts et l’acceptabilité des usagers.',
    icon: <Rocket size={20} />,
  },
  {
    phase: 'Phase 2',
    title: 'Campus pilote',
    horizon: '18–36 mois',
    desc: 'Déployer un premier éco-campus à petite échelle, avec logements, espaces communs, laverie, services et suivi énergétique en conditions réelles.',
    icon: <Building2 size={20} />,
  },
  {
    phase: 'Phase 3',
    title: 'Industrialisation',
    horizon: '3–5 ans',
    desc: 'Standardiser les modules, sécuriser la chaîne fournisseurs, réduire les coûts unitaires et créer un catalogue de modules reproductibles.',
    icon: <Factory size={20} />,
  },
  {
    phase: 'Phase 4',
    title: 'Déploiement multi-sites',
    horizon: '5 ans et +',
    desc: 'Adapter le modèle à plusieurs territoires : campus urbains, écoles isolées, technopôles, logements temporaires et besoins saisonniers.',
    icon: <Globe2 size={20} />,
  },
];

const evolutions = [
  {
    icon: <Sun size={20} />,
    title: 'Améliorer l’autonomie énergétique',
    desc: 'Optimiser la toiture photovoltaïque, ajouter du solaire thermique, améliorer le stockage et piloter les consommations pour réduire davantage l’appel au réseau.',
    metric: 'objectif : +50%',
    sub: 'de couverture solaire',
  },
  {
    icon: <BadgeCheck size={20} />,
    title: 'Obtenir des labels',
    desc: 'Viser des reconnaissances environnementales et sociales : bâtiment durable, réemploi, accessibilité, économie circulaire ou qualité de vie étudiante.',
    metric: 'labels',
    sub: 'crédibilité projet',
  },
  {
    icon: <Car size={20} />,
    title: 'Créer un hub mobilité modulaire',
    desc: 'Développer une extension du concept avec parking démontable, vélos sécurisés, bornes de recharge, covoiturage et véhicules partagés.',
    metric: 'mobilité',
    sub: 'complément campus',
  },
  {
    icon: <Users size={20} />,
    title: 'Élargir les publics',
    desc: 'Adapter les modules aux enseignants, intervenants, chercheurs, alternants, saisonniers ou personnels temporaires ayant besoin d’un logement court séjour.',
    metric: 'multi-usages',
    sub: 'au-delà des étudiants',
  },
  {
    icon: <Leaf size={20} />,
    title: 'Renforcer l’économie circulaire',
    desc: 'Développer une filière de réemploi : conteneurs, mobilier, isolants biosourcés, démontage propre, réparation et réaffectation des modules.',
    metric: 'réemploi',
    sub: 'fin de vie maîtrisée',
  },
  {
    icon: <Network size={20} />,
    title: 'Structurer un réseau de partenaires',
    desc: 'Créer un écosystème avec collectivités, promoteurs, écoles, CROUS, fournisseurs, exploitants et financeurs pour accélérer les futurs déploiements.',
    metric: 'écosystème',
    sub: 'effet réseau',
  },
];

const businessGrowth = [
  {
    title: 'Bureau d’études intégré',
    desc: 'La Ruche peut vendre son expertise : conception modulaire, dimensionnement énergétique, calculs de déperditions, optimisation de campus et accompagnement réglementaire.',
    value: 'revenus ingénierie',
  },
  {
    title: 'Catalogue de modules',
    desc: 'À terme, l’entreprise peut proposer un catalogue standardisé : logement, restauration, laverie, étude, technique, mobilité, santé, stockage.',
    value: 'standardisation',
  },
  {
    title: 'Participation aux sociétés de projet',
    desc: 'La Ruche peut rester associée aux SPV afin de percevoir une part des résultats d’exploitation, en plus des prestations de conception.',
    value: 'revenus récurrents',
  },
  {
    title: 'Licence du concept',
    desc: 'Le modèle peut être répliqué par des partenaires sous licence, avec une charte technique et environnementale contrôlée par La Ruche.',
    value: 'scalabilité',
  },
];

const improvementAxes = [
  { label: 'Énergie', value: 85, desc: 'PV, stockage, pilotage intelligent, solaire thermique' },
  { label: 'Confort d’été', value: 75, desc: 'ombrage, ventilation nocturne, matériaux à inertie' },
  { label: 'Coût de fabrication', value: 80, desc: 'standardisation, préfabrication, fournisseurs récurrents' },
  { label: 'Montage / démontage', value: 90, desc: 'connexions rapides, interfaces standard, contrôle qualité' },
  { label: 'Réemploi', value: 70, desc: 'démontabilité, traçabilité des matériaux, seconde vie' },
];

const risksAndResponses = [
  {
    title: 'Croissance trop rapide',
    risk: 'Multiplier les sites avant d’avoir validé le prototype peut créer des surcoûts ou des erreurs répétées.',
    response: 'Avancer par étapes : démonstrateur, campus pilote, puis industrialisation.',
  },
  {
    title: 'Réglementation locale variable',
    risk: 'Urbanisme, sécurité incendie, accessibilité et raccordements peuvent changer selon les villes.',
    response: 'Créer un guide de déploiement adaptable et travailler tôt avec les collectivités.',
  },
  {
    title: 'Image du conteneur',
    risk: 'Certains usagers peuvent associer le conteneur à un logement temporaire peu qualitatif.',
    response: 'Soigner les rendus, le confort réel, les matériaux intérieurs et les retours d’expérience.',
  },
  {
    title: 'Dépendance aux partenaires',
    risk: 'Le projet nécessite des acteurs publics, privés, techniques et financiers.',
    response: 'Diversifier les partenaires et standardiser les rôles dans chaque société de projet.',
  },
];

export default function EtEnsuite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenSlide, setFullscreenSlide] = useState<null | {
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
  }, [fullscreenSlide, currentSlide]);

  const activeSlide = summarySlides[currentSlide];

  return (
    <div className="page-enter">
      <PageHero
        tag="Et ensuite ?"
        title="Faire évoluer La Ruche après le premier campus"
        subtitle="La Ruche n’est pas pensée comme un projet figé : c’est une plateforme modulaire capable d’évoluer vers plus d’autonomie, plus de services, plus de réemploi et un déploiement à plus grande échelle."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
        <SectionHeader
          tag="Support de présentation"
          title="Diapositive de synthèse"
          subtitle="← / → : changer de diapo · F : plein écran · Échap : quitter"
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
          tag="Vision long terme"
          title="Un projet qui peut devenir une plateforme"
          subtitle="Le premier module sert à valider le concept. Ensuite, La Ruche peut évoluer vers un système complet de conception, déploiement et exploitation de campus modulaires."
        />

        <div
          style={{
            background: '#0F1A0B',
            border: '1px solid rgba(245,158,11,0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
          }}
        >
          <div style={{ color: '#A7C9A0', fontSize: '0.9rem', lineHeight: 1.75 }}>
            L’objectif n’est pas simplement de construire un éco-campus unique, mais de créer une méthode réplicable. Chaque nouveau site permettrait d’améliorer les modules, de réduire les coûts, de renforcer les performances énergétiques et de développer une expertise propre à La Ruche. À terme, l’entreprise pourrait devenir un acteur spécialisé dans l’habitat modulaire durable pour les territoires en tension.
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Feuille de route"
          title="Passer du concept au déploiement"
          subtitle="La croissance doit rester progressive pour éviter de promettre plus que ce que le prototype peut réellement démontrer."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {roadmap.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '12px',
                padding: '1.25rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '12px',
                  background: i === 0 ? '#4ADE80' : '#F59E0B',
                  color: '#0A1208',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {item.horizon}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
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
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: '#4A6340', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.phase}
                  </div>
                  <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem' }}>
                    {item.title}
                  </div>
                </div>
              </div>

              <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Axes d’évolution"
          title="Les pistes les plus crédibles pour améliorer le projet"
          subtitle="Ces évolutions renforcent directement la valeur du projet sans le transformer en idée irréaliste."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {evolutions.map((item, i) => (
            <div key={i} className="info-card">
              <div style={{ display: 'flex', gap: '0.875rem', marginBottom: '1rem' }}>
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
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem' }}>{item.title}</div>
                  <div style={{ color: '#4ADE80', fontSize: '0.78rem', fontWeight: 700 }}>
                    {item.metric} <span style={{ color: '#A7C9A0', fontWeight: 400 }}>{item.sub}</span>
                  </div>
                </div>
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Développement de l’entreprise"
          title="Comment La Ruche peut créer de la valeur"
          subtitle="L’entreprise peut évoluer au-delà de la construction d’un seul campus en développant des revenus d’ingénierie, de licence et de participation aux projets."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {businessGrowth.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '10px',
                padding: '1.25rem',
              }}
            >
              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.86rem', marginBottom: '0.45rem' }}>
                {item.title}
              </div>
              <div style={{ color: '#F0FDF4', fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.45rem' }}>
                {item.value}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Amélioration technique"
              title="Où concentrer les prochains calculs ?"
              subtitle="Ces axes peuvent devenir des approfondissements techniques dans la suite du projet."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {improvementAxes.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', gap: '1rem' }}>
                    <span style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.88rem' }}>{item.label}</span>
                    <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.82rem' }}>{item.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.value}%`, background: i % 2 === 0 ? '#F59E0B' : '#4ADE80' }} />
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.78rem', lineHeight: 1.5, marginTop: '0.25rem' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Risques de développement"
              title="Ce qu’il faudra maîtriser"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {risksAndResponses.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0F1A0B',
                    border: '1px solid rgba(245,158,11,0.1)',
                    borderRadius: '10px',
                    padding: '1.2rem',
                  }}
                >
                  <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    {item.title}
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    {item.risk}
                  </div>
                  <div
                    style={{
                      background: 'rgba(74,222,128,0.06)',
                      border: '1px solid rgba(74,222,128,0.12)',
                      borderRadius: '8px',
                      padding: '0.8rem',
                      color: '#A7C9A0',
                      fontSize: '0.8rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: '#4ADE80', fontWeight: 700 }}>Réponse : </span>
                    {item.response}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '4', label: 'Phases', sub: 'du prototype au multi-sites', color: 'amber' },
            { value: '+50%', label: 'Objectif solaire', sub: 'amélioration de couverture', color: 'green' },
            { value: '8+', label: 'Modules possibles', sub: 'logement, mobilité, services', color: 'amber' },
            { value: '1', label: 'Ambition', sub: 'devenir une plateforme réplicable', color: 'green' },
          ]}
        />
      </section>

      <section
        style={{
          background: 'linear-gradient(135deg, rgba(74,222,128,0.05) 0%, rgba(245,158,11,0.05) 100%)',
          borderTop: '1px solid rgba(74,222,128,0.12)',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span
            className="tag"
            style={{
              marginBottom: '1.25rem',
              display: 'inline-block',
              borderColor: 'rgba(74,222,128,0.35)',
              color: '#4ADE80',
              background: 'rgba(74,222,128,0.08)',
            }}
          >
            Vision finale
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
            "La Ruche peut commencer par un module logement, mais son potentiel est plus large : devenir une méthode de construction réversible, durable et adaptable aux besoins réels des territoires."
          </blockquote>
        </div>
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
