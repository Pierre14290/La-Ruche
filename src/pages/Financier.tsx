import { useEffect, useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  PieChart,
  BarChart3,
  Target,
  CheckCircle,
  Building2,
  Handshake,
  Landmark,
  Users,
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
    /*title: 'Synthèse du modèle économique',*/
    /*desc: 'Slide de résumé sur le modèle hybride, les acteurs, les flux financiers et le rôle de la SPV.',*/
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1777506870/Capture_d_%C3%A9cran_2026-04-29_232655_k1ynx5.png',
  },
];

const economicActors = [
  {
    icon: <Building2 size={20} />,
    title: 'La Ruche — SCOP SAS',
    role: 'Concepteur du système',
    desc: 'Développe les modules, l’innovation technique, le design, la stratégie énergétique et le savoir-faire. Elle agit comme maître d’œuvre ou assistant à maîtrise d’ouvrage selon les projets.',
    revenue: 'Ingénierie + licence + participation SPV',
  },
  {
    icon: <Handshake size={20} />,
    title: 'Promoteurs / constructeurs',
    role: 'Partenaires industriels',
    desc: 'Assurent la fabrication, le transport, le montage et la gestion du chantier. Ils apportent l’expertise BTP et la capacité de production.',
    revenue: 'Marchés travaux + prestations',
  },
  {
    icon: <Landmark size={20} />,
    title: 'Collectivités',
    role: 'Facilitateurs territoriaux',
    desc: 'Peuvent apporter le foncier, soutenir les démarches administratives, participer au financement et intégrer le projet dans une stratégie locale de logement.',
    revenue: 'Impact territorial',
  },
  {
    icon: <PieChart size={20} />,
    title: 'SPV',
    role: 'Société de projet',
    desc: 'Détient les modules, porte l’investissement, reçoit les loyers et redistribue les bénéfices selon les parts détenues par les partenaires.',
    revenue: 'Loyers + services',
  },
];

const spvShares = [
  { actor: 'Investisseur privé majoritaire', share: '45–60%', desc: 'Apporte la majorité du capital et recherche un rendement long terme.' },
  { actor: 'La Ruche', share: '10–20%', desc: 'Conserve une part stratégique pour rester impliquée dans la valeur créée.' },
  { actor: 'Collectivité / acteur public', share: '0–20%', desc: 'Peut entrer au capital ou soutenir via foncier, subvention ou garantie.' },
  { actor: 'Promoteur / exploitant', share: '10–25%', desc: 'Peut participer au capital pour sécuriser son rôle industriel ou opérationnel.' },
];

const capexComparison = [
  {
    name: 'La Ruche — 1 module logement',
    total: '~950 k€',
    breakdown: [
      { item: 'Conteneurs + transformation + isolation', pct: 27 },
      { item: 'Dalles bois + structures porteuses', pct: 19 },
      { item: 'Électricité, VMC, plomberie', pct: 10 },
      { item: 'PAC + ECS + technique', pct: 4 },
      { item: 'Champ PV + batteries + électronique', pct: 18 },
      { item: 'Transport + montage', pct: 11 },
      { item: 'Ingénierie, imprévus, frais', pct: 11 },
    ],
    timeline: '10 j optimisés / module',
    perUnit: '~23,8 k€/logement',
  },
  {
    name: 'Résidence étudiante classique',
    total: '~4,0 M€',
    breakdown: [
      { item: 'Gros œuvre / structure', pct: 38 },
      { item: 'Second œuvre & équipements', pct: 30 },
      { item: 'Infrastructure + VRD', pct: 18 },
      { item: 'Études, imprévus, frais', pct: 14 },
    ],
    timeline: '18–24 mois',
    perUnit: '~100 k€/logement',
  },
];

const revenueStreams = [
  {
    title: 'Prestations de conception',
    value: '5–8%',
    desc: 'La Ruche facture l’ingénierie, le dimensionnement, les plans, l’adaptation au site et l’accompagnement technique.',
  },
  {
    title: 'Licence du concept',
    value: '2–4%',
    desc: 'Droit d’usage du système La Ruche : marque, architecture modulaire, méthode de déploiement et charte technique.',
  },
  {
    title: 'Participation SPV',
    value: '10–20%',
    desc: 'La Ruche peut conserver une part dans la société de projet pour bénéficier des revenus d’exploitation.',
  },
  {
    title: 'Maintenance / amélioration',
    value: 'récurrent',
    desc: 'Contrats de suivi énergétique, optimisation, rénovation, remplacement et amélioration continue des modules.',
  },
];

const opexBreakdown = [
  { item: 'Électricité résiduelle & PAC', pct: 28, color: '#FBBF24' },
  { item: 'Eau & assainissement', pct: 14, color: '#60A5FA' },
  { item: 'Maintenance & réparations', pct: 22, color: '#F87171' },
  { item: 'Nettoyage & hygiène', pct: 12, color: '#A78BFA' },
  { item: 'Gestion / exploitation', pct: 14, color: '#4ADE80' },
  { item: 'Assurance & taxes', pct: 10, color: '#FB923C' },
];

const rentModels = [
  {
    tier: 'Logement étudiant standard',
    baseRent: '320–350€',
    utilities: '+40–50€',
    total: '360–400€',
    target: 'Étudiants longue durée',
  },
  {
    tier: 'Séjour temporaire',
    baseRent: 'à la semaine',
    utilities: 'incluses',
    total: 'flexible',
    target: 'Intervenants, enseignants, chercheurs',
  },
  {
    tier: 'Services campus',
    baseRent: 'variable',
    utilities: 'selon usage',
    total: 'revenu annexe',
    target: 'Laverie, restauration, commerces, location d’espaces',
  },
];

const fundingHelp = [
  {
    name: 'ADEME',
    help: 'Subventions / accompagnement',
    desc: 'Pertinent pour les volets énergie, chaleur renouvelable, efficacité énergétique et économie circulaire.',
  },
  {
    name: 'Banque des Territoires',
    help: 'Prêt / investissement',
    desc: 'Acteur pertinent pour les projets territoriaux, logements étudiants, infrastructures publiques et innovation urbaine.',
  },
  {
    name: 'France 2030',
    help: 'Appels à projets',
    desc: 'Peut soutenir les projets innovants liés à la transition écologique, l’industrialisation et les nouveaux modes constructifs.',
  },
  {
    name: 'CEE',
    help: 'Primes énergie',
    desc: 'Mobilisables selon les économies d’énergie générées : isolation, chauffage performant, récupération de chaleur.',
  },
  {
    name: 'FEDER',
    help: 'Co-financement européen',
    desc: 'Peut accompagner des projets locaux à dimension environnementale, sociale ou territoriale.',
  },
  {
    name: 'Région / Métropole',
    help: 'Aide locale',
    desc: 'Soutien possible via foncier, subvention, garantie, appel à projet ou intégration dans une politique de logement.',
  },
];

const sixYearProjection = [
  { year: 'Année 1', modules: '1 pilote', revenue: '~950 k€', margin: '~250 k€' },
  { year: 'Année 2', modules: '3', revenue: '~2,85 M€', margin: '~750 k€' },
  { year: 'Année 3', modules: '10', revenue: '~9,5 M€', margin: '~2,5 M€' },
  { year: 'Année 4', modules: '20', revenue: '~19 M€', margin: '~5 M€' },
  { year: 'Année 5', modules: '32', revenue: '~30,4 M€', margin: '~8 M€' },
  { year: 'Année 6', modules: '39', revenue: '~37,05 M€', margin: '~9,75 M€' },
];

const investorTypes = [
  {
    icon: '🏛️',
    type: 'Collectivités / établissements publics',
    incentive: 'Réponse rapide à la pénurie de logements, outil territorial réversible, impact social direct.',
    roi: 'Impact + maîtrise du foncier',
    risk: 'Faible',
  },
  {
    icon: '🏗️',
    type: 'Promoteurs / constructeurs',
    incentive: 'Nouveau produit constructif industrialisable, adapté à un marché en tension et reproductible sur plusieurs sites.',
    roi: 'Marge travaux + récurrence',
    risk: 'Modéré',
  },
  {
    icon: '💼',
    type: 'Investisseurs privés / impact',
    incentive: 'Revenus locatifs portés par la SPV, marché étudiant tendu, actif modulaire déplaçable et valorisable.',
    roi: 'Rendement SPV',
    risk: 'Modéré',
  },
  {
    icon: '🌱',
    type: 'Financeurs publics / transition',
    incentive: 'Réemploi, réduction du chantier, performance énergétique et réponse sociale à un besoin fondamental.',
    roi: 'Subvention / impact',
    risk: 'Faible',
  },
];

export default function Financier() {
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
        tag="Modèle économique"
        title="Un modèle hybride : concevoir, déployer, exploiter"
        subtitle="La Ruche ne vend pas seulement des modules : elle conçoit un système, s’appuie sur des partenaires industriels et participe à la valeur créée par les sociétés de projet."
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
          tag="Architecture économique"
          title="Qui possède quoi ? Qui gagne quoi ?"
          subtitle="Le modèle repose sur une séparation claire entre conception, construction, financement, propriété des actifs et exploitation."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1rem' }}>
          {economicActors.map((actor, i) => (
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
                  {actor.icon}
                </div>
                <div>
                  <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.92rem' }}>{actor.title}</div>
                  <div style={{ color: '#4ADE80', fontSize: '0.78rem', fontWeight: 700 }}>{actor.role}</div>
                </div>
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.65, marginBottom: '0.9rem' }}>
                {actor.desc}
              </div>
              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.8rem' }}>
                {actor.revenue}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Société de projet"
              title="La SPV porte l’investissement"
              subtitle="La société de projet détient les modules, reçoit les loyers et redistribue les bénéfices."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {spvShares.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0F1A0B',
                    border: '1px solid rgba(245,158,11,0.1)',
                    borderRadius: '10px',
                    padding: '1.1rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.45rem' }}>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{item.actor}</div>
                    <div style={{ color: '#F59E0B', fontWeight: 800, fontSize: '0.9rem' }}>{item.share}</div>
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.55 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Revenus de La Ruche"
              title="Ne pas dépendre d’une seule source de revenus"
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {revenueStreams.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0F1A0B',
                    border: '1px solid rgba(245,158,11,0.1)',
                    borderRadius: '10px',
                    padding: '1.2rem',
                  }}
                >
                  <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.86rem', marginBottom: '0.35rem' }}>
                    {item.title}
                  </div>
                  <div style={{ color: '#F0FDF4', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.4rem' }}>
                    {item.value}
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Investissement initial"
          title="CAPEX : La Ruche vs résidence classique"
          subtitle="Les coûts restent des ordres de grandeur, mais ils montrent l’intérêt économique de la préfabrication, du réemploi et du montage rapide."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {capexComparison.map((comp, i) => (
            <div
              key={i}
              style={{
                background: '#0F1A0B',
                border: `2px solid ${i === 0 ? 'rgba(74,222,128,0.25)' : 'rgba(245,158,11,0.1)'}`,
                borderRadius: '12px',
                padding: '1.75rem',
                position: 'relative',
              }}
            >
              {i === 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '12px',
                    background: '#4ADE80',
                    color: '#0A1208',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '0.15rem 0.6rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Plus rapide
                </div>
              )}

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1rem', marginBottom: '0.375rem' }}>
                  {comp.name}
                </div>
                <div style={{ color: '#F59E0B', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                  {comp.total}
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.85rem' }}>
                  {comp.perUnit} | {comp.timeline}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {comp.breakdown.map((item, j) => (
                  <div key={j}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                      <span style={{ color: '#A7C9A0', fontSize: '0.8rem' }}>{item.item}</span>
                      <span style={{ color: '#F59E0B', fontSize: '0.8rem', fontWeight: 700 }}>{item.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${item.pct}%`,
                          background: i === 0 ? '#4ADE80' : '#F59E0B',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Exploitation"
              title="OPEX : charges portées par la SPV"
              subtitle="Les charges d’exploitation sont couvertes par les loyers et les revenus de services."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {opexBreakdown.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#A7C9A0', fontSize: '0.85rem' }}>{item.item}</span>
                    <span style={{ color: item.color, fontSize: '0.85rem', fontWeight: 700 }}>{item.pct}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.pct}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '8px', padding: '1.25rem' }}>
              <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.375rem' }}>
                Budget annuel estimé : ~35–45 k€ / module
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                L’autoconsommation photovoltaïque et la PAC limitent les charges énergétiques, mais le modèle reste volontairement hybride avec appoint réseau.
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Revenus d’exploitation"
              title="Des loyers accessibles et des revenus annexes"
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {rentModels.map((model, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0F1A0B',
                    border: '1px solid rgba(245,158,11,0.1)',
                    borderRadius: '8px',
                    padding: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                    <div>
                      <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{model.tier}</div>
                      <div style={{ color: '#A7C9A0', fontSize: '0.8rem', marginTop: '0.2rem' }}>{model.target}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '1.1rem' }}>{model.total}</div>
                      <div style={{ color: '#4A6340', fontSize: '0.75rem', marginTop: '0.2rem' }}>revenu</div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem' }}>
                    <div style={{ color: '#A7C9A0' }}>{model.baseRent}</div>
                    <div style={{ color: '#A7C9A0' }}>{model.utilities}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)', borderRadius: '8px', padding: '1.25rem' }}>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                Flux principal
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Les loyers sont versés à la SPV, qui rembourse l’investissement, paie l’exploitation, finance la maintenance et redistribue les bénéfices aux actionnaires selon leurs parts.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Aides et financements"
          title="Des leviers publics pour réduire le risque"
          subtitle="Le modèle ne repose pas uniquement sur le capital privé : il peut mobiliser des aides liées à l’énergie, au logement, au territoire et à l’innovation."
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1rem' }}>
          {fundingHelp.map((item, i) => (
            <div key={i} className="info-card">
              <div style={{ color: '#F59E0B', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                {item.name}
              </div>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.86rem', marginBottom: '0.5rem' }}>
                {item.help}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Projection"
          title="Trajectoire industrielle possible"
          subtitle="Cette projection reste une hypothèse de travail : elle sert à montrer le potentiel de croissance après un démonstrateur validé."
          centered
        />

        <div style={{ background: '#0F1A0B', border: '1px solid rgba(245,158,11,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '650px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
                  {['Année', 'Modules déployés', 'Volume projet', 'Marge industrielle potentielle'].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: '1rem 1.5rem',
                        textAlign: 'left',
                        color: '#F59E0B',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        background: 'rgba(245,158,11,0.04)',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sixYearProjection.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(245,158,11,0.04)' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#F0FDF4', fontSize: '0.9rem', fontWeight: 600 }}>{row.year}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#A7C9A0', fontSize: '0.9rem' }}>{row.modules}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#4ADE80', fontSize: '0.9rem', fontWeight: 700 }}>{row.revenue}</td>
                    <td style={{ padding: '1rem 1.5rem', color: '#F59E0B', fontSize: '0.9rem', fontWeight: 700 }}>{row.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: '2rem', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)', borderRadius: '8px', padding: '1.5rem' }}>
          <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={18} style={{ color: '#4ADE80' }} />
            Hypothèses de lecture
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              '1 module = 20 conteneurs = 40 logements',
              'Coût complet estimé : environ 700 k€ ; prix projet : environ 950 k€',
              'Marge industrielle théorique : environ 250 k€ par module',
              'Les loyers ne sont pas directement encaissés par La Ruche, mais par la SPV',
              'La Ruche se rémunère par ingénierie, licence, maintenance et éventuelle participation à la SPV',
              'Le modèle permet de combiner investisseurs privés, collectivités, promoteurs et exploitants',
            ].map((item, i) => (
              <li key={i} style={{ color: '#A7C9A0', fontSize: '0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#F59E0B', fontWeight: 700, flexShrink: 0 }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Profils financeurs"
          title="Qui peut financer ou soutenir La Ruche ?"
          centered
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {investorTypes.map((inv, i) => (
            <div key={i} className="info-card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{inv.icon}</div>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                {inv.type}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {inv.incentive}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(245,158,11,0.08)' }}>
                <div>
                  <div style={{ color: '#4A6340', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                    Intérêt
                  </div>
                  <div style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: 700 }}>{inv.roi}</div>
                </div>
                <div>
                  <div style={{ color: '#4A6340', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                    Risque
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.85rem', fontWeight: 700 }}>{inv.risk}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '950 k€', label: 'Prix projet module', sub: '40 logements', color: 'green' },
            { value: 'SPV', label: 'Propriétaire des actifs', sub: 'modules + loyers', color: 'amber' },
            { value: '10–20%', label: 'Part possible La Ruche', sub: 'dans la société de projet', color: 'green' },
            { value: '350–400€', label: 'Loyer cible', sub: 'charges incluses', color: 'amber' },
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
            padding: 0,
            zIndex: 9999,
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(1400px, 96vw)',
              height: '100vh',
              background: '#0F1A0B',
              border: '1px solid rgba(245,158,11,0.18)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
              display: 'flex',
              flexDirection: 'column',
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

            <div
              style={{
                background: '#111A0F',
                height: 'calc(100vh - 84px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={fullscreenSlide.src}
                alt={fullscreenSlide.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
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
