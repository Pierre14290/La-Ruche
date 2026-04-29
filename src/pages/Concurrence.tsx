import { useEffect, useState } from 'react';
import {
  Building2,
  Euro,
  MapPin,
  Users,
  ShieldCheck,
  Home,
  Wrench,
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
    /*title: 'Synthèse veille concurrentielle',*/
    /*desc: 'Slide de résumé pour présenter les concurrents, les usages et le positionnement de La Ruche.',*/
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1777503387/Capture_d_%C3%A9cran_2026-04-29_232630_rwfscw.png',
  },
];

const competitors = [
  {
    name: 'CROUS',
    type: 'Logement public étudiant',
    price: '250–400 €',
    strengths: ['Prix accessible', 'Proximité des campus', 'Cadre connu et rassurant'],
    limits: ['Offre insuffisante', 'Attribution sélective', 'Confort parfois limité', 'Délais de développement longs'],
    positioning: 'Très accessible, mais sous-dimensionné face à la demande.',
    color: '#4ADE80',
  },
  {
    name: 'Les Estudines',
    type: 'Résidences étudiantes privées',
    price: '500–800 €',
    strengths: ['Services pratiques', 'Logements meublés', 'Gestion professionnelle'],
    limits: ['Prix plus élevé', 'Surface parfois réduite', 'Frais annexes', 'Accessibilité financière limitée'],
    positioning: 'Offre confortable et clé en main, mais moins accessible.',
    color: '#F59E0B',
  },
  {
    name: 'Ecla',
    type: 'Grandes résidences de coliving',
    price: '800–1200 €',
    strengths: ['Confort élevé', 'Espaces communs', 'Services nombreux', 'Expérience communautaire'],
    limits: ['Prix très élevé', 'Public ciblé plus restreint', 'Modèle difficilement généralisable'],
    positioning: 'Très qualitatif, mais réservé à une population capable de payer plus cher.',
    color: '#38BDF8',
  },
  {
    name: 'Parc locatif privé',
    type: 'Studios et colocations classiques',
    price: '400–900 €',
    strengths: ['Offre très variée', 'Liberté de choix', 'Implantation diffuse dans la ville'],
    limits: ['Prix instables', 'Qualité variable', 'Garanties demandées', 'Éloignement possible du campus'],
    positioning: 'Solution majoritaire, mais peu maîtrisée par les établissements.',
    color: '#A78BFA',
  },
];

const usageFindings = [
  {
    icon: <Euro size={20} />,
    title: 'Le prix reste déterminant',
    desc: 'Les étudiants recherchent avant tout un logement abordable. Une résidence très qualitative mais trop chère exclut rapidement une partie importante du public cible.',
  },
  {
    icon: <MapPin size={20} />,
    title: 'La proximité change les usages',
    desc: 'Un logement proche du campus réduit les trajets, la dépendance à la voiture et la saturation des parkings autour des établissements.',
  },
  {
    icon: <Users size={20} />,
    title: 'Le besoin ne concerne pas que les étudiants',
    desc: 'Alternants, doctorants, enseignants et intervenants extérieurs ont aussi besoin de solutions temporaires proches des sites d’enseignement.',
  },
  {
    icon: <Home size={20} />,
    title: 'Le logement seul ne suffit plus',
    desc: 'Les usagers attendent aussi des services : laverie, restauration, espaces de travail, mobilité douce et lieux de convivialité.',
  },
];

const positioning = [
  {
    title: 'Accessibilité',
    desc: 'La Ruche vise un loyer autour de 350 à 400 €, soit un niveau plus proche du logement social étudiant que des résidences privées premium.',
    metric: '350–400 €',
  },
  {
    title: 'Rapidité',
    desc: 'Le système modulaire permet un déploiement beaucoup plus rapide qu’une résidence classique, avec montage optimisé par module.',
    metric: '≈ 10 jours',
  },
  {
    title: 'Modularité',
    desc: 'Le campus peut être agrandi, réduit, déplacé ou réaffecté selon l’évolution des besoins des établissements et des collectivités.',
    metric: 'réversible',
  },
  {
    title: 'Impact',
    desc: 'Le réemploi de conteneurs, la préfabrication, les panneaux photovoltaïques et la mutualisation des services réduisent l’impact global.',
    metric: 'low impact',
  },
];

const comparisonCriteria = [
  { label: 'Prix accessible', crous: 90, private: 45, coliving: 25, ruche: 80 },
  { label: 'Confort', crous: 45, private: 70, coliving: 90, ruche: 70 },
  { label: 'Services communs', crous: 35, private: 60, coliving: 95, ruche: 80 },
  { label: 'Rapidité de déploiement', crous: 25, private: 35, coliving: 30, ruche: 90 },
  { label: 'Réversibilité', crous: 10, private: 15, coliving: 15, ruche: 90 },
];

const differentiation = [
  {
    icon: <Wrench size={20} />,
    title: 'Une solution constructive',
    desc: 'La Ruche ne propose pas seulement une gestion locative : elle propose une méthode de construction modulaire, industrialisable et réversible.',
  },
  {
    icon: <Building2 size={20} />,
    title: 'Un campus, pas une résidence isolée',
    desc: 'L’offre combine logements, services, espaces communs et mobilité. Elle répond à un usage global du campus.',
  },
  {
    icon: <Leaf size={20} />,
    title: 'Un argument environnemental réel',
    desc: 'Réemploi, chantier sec, démontabilité, production photovoltaïque et mutualisation réduisent l’impact par rapport à une construction lourde classique.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Une réponse territoriale',
    desc: 'Le modèle peut associer collectivités, promoteurs, exploitants et établissements dans une logique de projet local.',
  },
];

export default function Concurrence() {
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
        tag="Veille concurrentielle"
        title="Comprendre l’existant pour positionner La Ruche"
        subtitle="Les résidences étudiantes actuelles répondent partiellement au besoin : certaines sont accessibles, d’autres confortables, mais peu combinent prix, services, proximité, modularité et rapidité de déploiement."
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
          tag="Analyse de l’existant"
          title="Les principales alternatives au logement La Ruche"
          subtitle="Chaque solution existante possède des qualités, mais aucune ne réunit totalement accessibilité, confort, proximité, services et capacité de déploiement rapide."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {competitors.map((comp, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: '1px solid rgba(245,158,11,0.1)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'start', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#F0FDF4', fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>
                    {comp.name}
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.8rem' }}>{comp.type}</div>
                </div>
                <div
                  style={{
                    color: comp.color,
                    background: `${comp.color}18`,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '6px',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {comp.price}
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                  Points forts
                </div>
                <ul style={{ margin: 0, paddingLeft: '1rem', color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  {comp.strengths.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#F87171', fontWeight: 700, fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                  Limites
                </div>
                <ul style={{ margin: 0, paddingLeft: '1rem', color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                  {comp.limits.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: 'rgba(245,158,11,0.04)',
                  border: '1px solid rgba(245,158,11,0.1)',
                  borderRadius: '8px',
                  padding: '0.8rem',
                  color: '#A7C9A0',
                  fontSize: '0.8rem',
                  lineHeight: 1.55,
                }}
              >
                {comp.positioning}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Analyse des usages"
          title="Ce que l’on retient de l’existant"
          subtitle="La veille montre que les étudiants ne recherchent pas seulement un logement : ils recherchent un compromis global entre prix, localisation, confort et services."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {usageFindings.map((item, i) => (
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
        <SectionHeader
          tag="Positionnement"
          title="La Ruche se place entre accessibilité, confort et modularité"
          subtitle="Le projet ne cherche pas à copier les résidences existantes, mais à combler leur angle mort : une solution abordable, rapide, réversible et pensée comme un campus."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {positioning.map((item, i) => (
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
              <div style={{ color: '#F0FDF4', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.45rem' }}>
                {item.metric}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Matrice comparative"
          title="Comparaison qualitative des offres"
          subtitle="Les scores ci-dessous ne sont pas des mesures absolues : ils servent à visualiser le positionnement relatif des solutions."
        />

        <div
          style={{
            background: '#0F1A0B',
            border: '1px solid rgba(245,158,11,0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {comparisonCriteria.map((item, i) => (
              <div key={i}>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                  {item.label}
                </div>

                {[
                  { label: 'CROUS', value: item.crous, color: '#4ADE80' },
                  { label: 'Privé', value: item.private, color: '#F59E0B' },
                  { label: 'Coliving', value: item.coliving, color: '#38BDF8' },
                  { label: 'La Ruche', value: item.ruche, color: '#F87171' },
                ].map((bar, j) => (
                  <div key={j} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 40px', gap: '0.75rem', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <div style={{ color: '#A7C9A0', fontSize: '0.78rem' }}>{bar.label}</div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${bar.value}%`, background: bar.color }} />
                    </div>
                    <div style={{ color: bar.color, fontWeight: 700, fontSize: '0.78rem', textAlign: 'right' }}>
                      {bar.value}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Différenciation"
          title="Ce qui rend La Ruche difficile à comparer directement"
          subtitle="La Ruche ne se limite pas à une résidence : elle combine construction modulaire, éco-campus, services mutualisés et réponse territoriale."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {differentiation.map((item, i) => (
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

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '250–1200€', label: 'Fourchette observée', sub: 'logements étudiants existants', color: 'amber' },
            { value: '350–400€', label: 'Cible La Ruche', sub: 'objectif de loyer mensuel', color: 'green' },
            { value: '4', label: 'Familles comparées', sub: 'CROUS, privé, coliving, parc locatif', color: 'amber' },
            { value: '1', label: 'Positionnement', sub: 'abordable, modulaire, réversible', color: 'green' },
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
            Conclusion de la veille
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
            "Les solutions existantes répondent chacune à une partie du besoin. La Ruche cherche à réunir dans un même système ce qui est aujourd’hui dispersé : prix accessible, confort, services, proximité, rapidité et réversibilité."
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
