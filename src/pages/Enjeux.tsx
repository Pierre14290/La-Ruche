import { useEffect, useState } from 'react';
import {
  TrendingUp,
  Leaf,
  Users,
  Home,
  Clock,
  Car,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const summarySlides = [
  {
    title: 'Synthèse des enjeux',
    desc: 'Slide de résumé pour introduire la page Enjeux.',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1777468018/Capture_d_%C3%A9cran_2026-04-29_150452_r1tbsz.png',
  },
  {
    title: 'Problématique logement + mobilité',
    desc: 'Slide complémentaire sur le lien entre logement, parking et mobilité subie.',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1777468102/Capture_d_%C3%A9cran_2026-04-29_150810_rvjjrr.png',
  },
];

const challenges = [
  {
    icon: <Home size={20} />,
    title: 'Pénurie de logements étudiants',
    desc: 'Le besoin en logement étudiant est structurellement supérieur à l’offre disponible. En France, le parc Crous ne couvre qu’une faible part des besoins, ce qui pousse une grande partie des étudiants vers le parc privé, souvent plus cher et moins accessible.',
    stat: '340 000',
    statLabel: 'places Crous env.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Loyers trop élevés',
    desc: 'Le logement est devenu le premier poste de dépense pour une grande partie des étudiants. Dans les villes universitaires, les loyers pèsent directement sur la réussite académique, la mobilité et l’égalité d’accès aux études.',
    stat: '≤ 400€',
    statLabel: 'objectif loyer La Ruche',
  },
  {
    icon: <Clock size={20} />,
    title: 'Délais de construction trop longs',
    desc: 'Une résidence classique demande souvent plusieurs années entre la conception, les autorisations et le chantier. Or les besoins des campus évoluent vite : augmentation des effectifs, nouveaux partenariats, mobilité internationale, saturation ponctuelle.',
    stat: '18 jours',
    statLabel: 'montage brut d’un module',
  },
  {
    icon: <Leaf size={20} />,
    title: 'Enjeu environnemental du bâtiment',
    desc: 'La construction neuve mobilise beaucoup de matière, de temps de chantier et de ressources. La Ruche cherche à réduire cet impact grâce au réemploi des conteneurs, à la préfabrication, à la démontabilité et à un système énergétique partiellement autonome.',
    stat: '20 conteneurs',
    statLabel: 'réemployés / module',
  },
  {
    icon: <Car size={20} />,
    title: 'Saturation des parkings et mobilité subie',
    desc: 'Faute de logements proches, beaucoup d’étudiants viennent en voiture. Cela entraîne une saturation rapide des parkings des écoles et des stationnements autour des campus, accentuant congestion, stress quotidien et impact environnemental.',
    stat: '1 besoin',
    statLabel: 'loger plus près du campus',
  },
  {
    icon: <Users size={20} />,
    title: 'Besoins plus variés',
    desc: 'Étudiants, alternants, doctorants, enseignants et intervenants extérieurs n’ont pas les mêmes durées de présence. Le logement doit donc pouvoir répondre à des usages longs, courts et temporaires.',
    stat: '40 personnes',
    statLabel: 'par module logement',
  },
];

const motivations = [
  {
    num: '01',
    title: 'Répondre vite à un besoin immédiat',
    desc: 'La Ruche est pensée pour être montée rapidement grâce à la préfabrication des dalles, des structures porteuses et des conteneurs. Là où une résidence classique exige un chantier long, notre solution cherche à répondre à une tension immédiate du terrain.',
  },
  {
    num: '02',
    title: 'Créer une solution réellement modulaire',
    desc: 'Le projet ne consiste pas à dessiner un bâtiment unique, mais à concevoir un système reproductible. Les acteurs du projet peuvent choisir le nombre et le type de modules en fonction des besoins réels du territoire.',
  },
  {
    num: '03',
    title: 'Réduire l’impact environnemental',
    desc: 'Le réemploi des conteneurs, le chantier sec, la démontabilité, la mutualisation des espaces et l’intégration photovoltaïque permettent d’inscrire le projet dans une logique d’innovation responsable plutôt que de construction lourde classique.',
  },
  {
    num: '04',
    title: 'Penser le campus comme un écosystème',
    desc: 'La Ruche ne se limite pas au logement. Le projet intègre des espaces de restauration, d’étude, de services, de mobilité et de vie commune. L’objectif est d’améliorer le quotidien des usagers dans son ensemble.',
  },
  {
    num: '05',
    title: 'Rester accessible économiquement',
    desc: 'Le modèle est construit pour maintenir un loyer cible autour de 350 à 400 € par mois, tout en restant viable pour les partenaires publics et privés qui financent le déploiement.',
  },
  {
    num: '06',
    title: 'Conserver une réversibilité réelle',
    desc: 'Un module peut être démonté, déplacé, réaffecté ou étendu. Cette capacité de transformation est au cœur du projet : elle évite de figer une réponse lourde sur plusieurs décennies alors que les besoins peuvent évoluer.',
  },
];

const opportunityBlocks = [
  {
    title: 'Pour les collectivités',
    desc: 'Une réponse rapide à la pénurie de logements, avec une solution réversible, adaptable et plus légère qu’un programme immobilier classique.',
    metric: 'foncier optimisé',
  },
  {
    title: 'Pour les usagers',
    desc: 'Un logement plus proche du campus, moins dépendant de la voiture, intégré à des services communs et pensé pour différents temps de présence.',
    metric: '350–400€',
  },
  {
    title: 'Pour les partenaires privés',
    desc: 'Un produit industrialisable sur un marché en tension, avec un modèle duplicable à l’échelle de plusieurs campus.',
    metric: 'modèle hybride',
  },
];

export default function Enjeux() {
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
        if (fullscreenSlide) {
          closeFullscreen();
        } else {
          openFullscreen();
        }
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
        tag="Enjeux & Motivations"
        title="Pourquoi La Ruche ?"
        subtitle="La crise du logement étudiant ne se résume pas à un manque de lits : elle touche aussi la mobilité, le coût de la vie, l’attractivité des écoles et l’impact environnemental du campus."
        accentWord="Ruche"
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
          tag="Les enjeux"
          title="Une problématique plus large qu’un simple manque de logements"
          subtitle="Le projet répond à plusieurs tensions simultanées : logement, coût, mobilité, délais de construction et impact environnemental."
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
            { value: '2,9 M', label: 'Étudiants en France', sub: 'ordre de grandeur', color: 'amber' },
            { value: '340 000', label: 'Places Crous', sub: 'offre insuffisante', color: 'green' },
            { value: '700 000', label: 'Demande retenue', sub: 'hypothèse de marché prudente', color: 'amber' },
            { value: '105', label: 'Modules visés en 6 ans', sub: 'scénario de croissance', color: 'green' },
          ]}
        />
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Pourquoi agir maintenant ?"
          title="Le logement agit aussi sur la mobilité et la vie du campus"
          subtitle="Quand les usagers ne trouvent pas à se loger près de leur établissement, les conséquences dépassent largement la question du logement."
        />

        <div
          style={{
            background: '#0F1A0B',
            border: '1px solid rgba(245,158,11,0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}
        >
          <div>
            <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
              Effets observés aujourd’hui
            </div>
            <ul style={{ margin: 0, paddingLeft: '1rem', color: '#A7C9A0', lineHeight: 1.8, fontSize: '0.86rem' }}>
              <li>trajets domicile-campus plus longs et plus coûteux ;</li>
              <li>recours accru à la voiture individuelle ;</li>
              <li>saturation des parkings des écoles et des rues voisines ;</li>
              <li>fatigue, stress, retards et baisse du confort étudiant ;</li>
              <li>difficulté à accueillir des profils internationaux ou temporaires.</li>
            </ul>
          </div>
          <div>
            <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
              Ce que propose La Ruche
            </div>
            <ul style={{ margin: 0, paddingLeft: '1rem', color: '#A7C9A0', lineHeight: 1.8, fontSize: '0.86rem' }}>
              <li>rapprocher les usagers du campus ;</li>
              <li>réduire la pression sur les parkings et les accès ;</li>
              <li>mutualiser logement, services et espaces communs ;</li>
              <li>déployer rapidement une réponse évolutive ;</li>
              <li>mieux adapter la capacité d’accueil aux besoins réels.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Nos motivations"
          title="Les principes qui ont guidé la conception de La Ruche"
          subtitle="Le projet n’a pas été pensé comme un simple bâtiment, mais comme une réponse systémique à un besoin local, concret et urgent."
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

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Opportunité"
          title="Pourquoi le projet a du sens pour tous les acteurs"
          subtitle="La Ruche articule un intérêt social, territorial, environnemental et économique."
          centered
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {opportunityBlocks.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '10px',
                padding: '1.25rem',
              }}
            >
              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.45rem' }}>
                {item.title}
              </div>
              <div style={{ color: '#F0FDF4', fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.45rem' }}>
                {item.metric}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>
                {item.desc}
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
            "La Ruche n’est pas seulement un logement étudiant : c’est une manière plus rapide, plus réversible et plus durable de rapprocher les usagers de leur campus, tout en soulageant la pression sur la ville et sur les infrastructures existantes."
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
