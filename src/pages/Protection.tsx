import { useEffect, useState } from 'react';
import {
  ShieldCheck,
  FileText,
  Copyright,
  BadgeCheck,
  Lock,
  Handshake,
  Rocket,
  RefreshCw,
  Network,
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
    /*title: 'Synthèse protection intellectuelle',*/
    /*desc: 'Slide de résumé pour présenter les éléments protégeables et la stratégie retenue.',*/
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1777505357/Capture_d_%C3%A9cran_2026-04-29_232643_lh67am.png',
  },
];

const protectionTargets = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Le concept modulaire',
    desc: 'La logique d’assemblage des modules, leur organisation en éco-campus et leur capacité à être montés, démontés et réutilisés.',
    protection: 'Contrats + savoir-faire',
  },
  {
    icon: <FileText size={20} />,
    title: 'Les plans et documents techniques',
    desc: 'Plans d’aménagement, rendus 3D, calculs énergétiques, fiches techniques, dimensionnements et dossiers de conception.',
    protection: 'Droit d’auteur + confidentialité',
  },
  {
    icon: <BadgeCheck size={20} />,
    title: 'Le design du module',
    desc: 'Apparence extérieure, disposition des conteneurs, identité visuelle du campus et organisation architecturale reconnaissable.',
    protection: 'Dessins et modèles',
  },
  {
    icon: <Copyright size={20} />,
    title: 'La marque La Ruche',
    desc: 'Nom, logo, univers graphique, discours de marque et positionnement écologique du projet.',
    protection: 'Dépôt de marque',
  },
  {
    icon: <Lock size={20} />,
    title: 'Le modèle économique',
    desc: 'Montage hybride, relations avec partenaires publics et privés, logique SPV et répartition des rôles entre acteurs.',
    protection: 'Secret + contrats',
  },
  {
    icon: <Handshake size={20} />,
    title: 'Les relations partenaires',
    desc: 'Accords avec promoteurs, collectivités, exploitants, fournisseurs et acteurs du logement étudiant.',
    protection: 'NDA + accords-cadres',
  },
];

const formalProtections = [
  {
    icon: <BadgeCheck size={20} />,
    title: 'Dessins et modèles',
    desc: 'Protection adaptée à l’apparence du module : forme, aménagement, design extérieur, agencement visible et identité architecturale.',
    action: 'Déposer les vues et rendus auprès de l’INPI.',
    priority: 'Prioritaire',
  },
  {
    icon: <Copyright size={20} />,
    title: 'Marque',
    desc: 'La marque protège le nom du projet, le logo et l’identité commerciale. Elle permet de distinguer La Ruche des autres solutions de logement modulaire.',
    action: 'Vérifier la disponibilité, puis déposer le nom et le logo.',
    priority: 'Prioritaire',
  },
  {
    icon: <FileText size={20} />,
    title: 'Droit d’auteur',
    desc: 'Il protège automatiquement les créations originales : plans, textes, rendus 3D, schémas, supports de présentation et éventuels logiciels.',
    action: 'Conserver des preuves datées de création.',
    priority: 'Important',
  },
  {
    icon: <Lock size={20} />,
    title: 'Contrats et confidentialité',
    desc: 'Les contrats permettent de protéger les échanges avec les partenaires, les contributions de chacun et les documents sensibles.',
    action: 'NDA, clauses de confidentialité et clauses de cession.',
    priority: 'Indispensable',
  },
];

const informalProtections = [
  {
    icon: <RefreshCw size={20} />,
    title: 'Innovation continue',
    desc: 'Réinvestir une partie des revenus dans l’amélioration du module : performance énergétique, montage, confort d’été, maintenance et coût de fabrication.',
  },
  {
    icon: <Rocket size={20} />,
    title: 'Rapidité d’accès au marché',
    desc: 'Déployer rapidement un prototype permet de prendre de l’avance, d’obtenir des retours terrain et de créer une première référence commerciale.',
  },
  {
    icon: <Network size={20} />,
    title: 'Réseau et partenariats',
    desc: 'La relation avec les collectivités, promoteurs, exploitants et écoles devient un actif stratégique difficile à copier.',
  },
];

const strategySteps = [
  {
    step: '01',
    title: 'Identifier ce qui est protégeable',
    desc: 'Séparer les éléments techniques, visuels, commerciaux et contractuels pour choisir la bonne protection pour chacun.',
  },
  {
    step: '02',
    title: 'Sécuriser avant de diffuser',
    desc: 'Limiter les documents partagés, dater les créations et faire signer des accords de confidentialité lors des échanges sensibles.',
  },
  {
    step: '03',
    title: 'Déposer la marque et le design',
    desc: 'Protéger le nom, le logo et l’apparence du module afin d’éviter une copie directe de l’identité du projet.',
  },
  {
    step: '04',
    title: 'Protéger le modèle par les contrats',
    desc: 'Encadrer les relations avec les partenaires : propriété des livrables, usage du concept, confidentialité et exploitation commerciale.',
  },
  {
    step: '05',
    title: 'Rester en avance',
    desc: 'La protection juridique ne suffit pas : l’amélioration continue et les premières références terrain renforcent la barrière à l’entrée.',
  },
];

const risks = [
  {
    title: 'Copie du concept',
    desc: 'Un concurrent peut reprendre l’idée générale du logement modulaire en conteneur.',
    response: 'Protéger l’identité, les dessins, les documents techniques et accélérer le prototype.',
  },
  {
    title: 'Diffusion prématurée',
    desc: 'Des plans ou informations sensibles peuvent être transmis à des tiers avant protection.',
    response: 'NDA, partage limité des documents, versions datées et gestion claire des accès.',
  },
  {
    title: 'Flou sur la propriété',
    desc: 'Dans un projet collectif, plusieurs personnes peuvent contribuer aux plans, visuels ou calculs.',
    response: 'Clauses de cession, traçabilité des contributions et validation interne des livrables.',
  },
  {
    title: 'Nom déjà utilisé',
    desc: 'Le nom La Ruche peut être déjà exploité dans un domaine proche.',
    response: 'Recherche d’antériorité, variantes de marque et dépôt dans les classes pertinentes.',
  },
];

export default function Protection() {
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
        tag="Protection intellectuelle"
        title="Protéger La Ruche sans freiner son développement"
        subtitle="La stratégie de protection ne consiste pas seulement à déposer une idée : elle combine marque, design, contrats, confidentialité et innovation continue."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>
        <SectionHeader
          tag="Support de présentation"
          /*title="Diapositive de synthèse"*/
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
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem' }}>{activeSlide.desc}</div>
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
          tag="Enjeu"
          title="Pourquoi protéger le projet ?"
          subtitle="Une idée seule ne peut pas être protégée. La stratégie consiste donc à protéger les formes concrètes de l’innovation : nom, design, documents, contrats et savoir-faire."
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
            Dans le cadre de La Ruche, la protection intellectuelle poursuit plusieurs objectifs : créer un avantage concurrentiel, prouver l’antériorité du projet, valoriser les actifs de l’entreprise, sécuriser les relations avec les partenaires et générer de futurs revenus. Comme le projet combine architecture modulaire, identité de marque, solutions techniques et modèle économique, aucun outil unique ne suffit. La protection doit donc être construite par couches.
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Éléments à protéger"
          title="Ce qui constitue la valeur de La Ruche"
          subtitle="La protection doit être adaptée à chaque élément : ce qui protège une marque ne protège pas un plan technique ou une relation contractuelle."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {protectionTargets.map((item, i) => (
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
                  <div style={{ color: '#4ADE80', fontSize: '0.78rem', fontWeight: 700 }}>{item.protection}</div>
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
          tag="Protections formelles"
          title="Les outils juridiques à mobiliser"
          subtitle="Ces protections permettent de sécuriser officiellement certains actifs du projet."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {formalProtections.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '10px',
                padding: '1.25rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '12px',
                  background: item.priority === 'Prioritaire' ? '#4ADE80' : '#F59E0B',
                  color: '#0A1208',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {item.priority}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.9rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    background: 'rgba(245,158,11,0.1)',
                    color: '#F59E0B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.92rem' }}>{item.title}</div>
              </div>

              <div style={{ color: '#A7C9A0', fontSize: '0.83rem', lineHeight: 1.65, marginBottom: '0.9rem' }}>{item.desc}</div>

              <div
                style={{
                  background: 'rgba(74,222,128,0.06)',
                  border: '1px solid rgba(74,222,128,0.12)',
                  borderRadius: '8px',
                  padding: '0.85rem',
                  color: '#A7C9A0',
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: '#4ADE80', fontWeight: 700 }}>Action : </span>
                {item.action}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Protections informelles"
          title="Rester difficile à copier"
          subtitle="La protection ne repose pas uniquement sur le juridique. Pour un projet industriel, l’avance opérationnelle est aussi une barrière forte."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {informalProtections.map((item, i) => (
            <div key={i} className="info-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    background: 'rgba(74,222,128,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4ADE80',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{item.title}</div>
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Plan d’action"
              title="Une stratégie en cinq étapes"
            />

            <div style={{ display: 'grid', gap: 0 }}>
              {strategySteps.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '70px 1fr',
                    gap: '1.5rem',
                    padding: '1.5rem 0',
                    borderBottom: i < strategySteps.length - 1 ? '1px solid rgba(245,158,11,0.08)' : 'none',
                    alignItems: 'start',
                  }}
                >
                  <div
                    style={{
                      color: '#F59E0B',
                      fontWeight: 800,
                      fontSize: '1.6rem',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      opacity: 0.45,
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.96rem', marginBottom: '0.45rem' }}>
                      {item.title}
                    </div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Risques"
              title="Points de vigilance"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {risks.map((risk, i) => (
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
                    {risk.title}
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    {risk.desc}
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
                    {risk.response}
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
            { value: '4', label: 'Protections formelles', sub: 'marque, design, droit, contrats', color: 'amber' },
            { value: '6', label: 'Actifs à protéger', sub: 'techniques, visuels et économiques', color: 'green' },
            { value: '5', label: 'Étapes stratégiques', sub: 'avant diffusion large', color: 'amber' },
            { value: '1', label: 'Objectif', sub: 'rester crédible et difficile à copier', color: 'green' },
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
            Notre logique
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
            "La meilleure protection de La Ruche repose sur une combinaison : protéger ce qui est protégeable, garder confidentiel ce qui doit l’être, et rester en avance par le prototype, le réseau et l’amélioration continue."
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
