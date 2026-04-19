import { Truck, Clock, Hammer, CheckCircle, AlertCircle, BarChart3 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Préparation du site',
    duration: '1–2 semaines',
    tasks: [
      'Levé topographique et piquetage des hexagones',
      'Terrassement minimal (nivellement)',
      'Préparation des fondations (plots béton ou dallage)',
      'Établissement des accès et zones de circulation',
    ],
    workers: '10–15',
  },
  {
    phase: 'Phase 2',
    title: 'Livraison & positionnement des conteneurs',
    duration: '2–3 semaines',
    tasks: [
      'Acheminement des conteneurs par camion semi-remorque',
      'Positionnement par grue (hexagone par hexagone)',
      'Calage & ancrage des conteneurs',
      'Connexion structurelles entre modules (passerelles)',
    ],
    workers: '15–20',
  },
  {
    phase: 'Phase 3',
    title: 'Travaux d\'aménagement intérieur',
    duration: '2–3 semaines',
    tasks: [
      'Installation des cloisons intérieures et portes',
      'Plomberie, électricité, gaz (distribution)',
      'Pose des revêtements (sol, murs)',
      'Installation des mobiliers intégrés',
    ],
    workers: '20–30',
  },
  {
    phase: 'Phase 4',
    title: 'Systèmes techniques & finitions',
    duration: '1–2 semaines',
    tasks: [
      'PAC air/air et conduits de climatisation',
      'VMC double flux et conduits',
      'Chauffage/ECS (si équipement centralisé)',
      'Électricité : tableaux, éclairage, prises',
    ],
    workers: '15–20',
  },
  {
    phase: 'Phase 5',
    title: 'Équipements de confort & tests',
    duration: '1–2 semaines',
    tasks: [
      'Mobiliers, cuisines aménagées, sanitaires complets',
      'Tests de tous les systèmes (électrique, hydraulique, thermique)',
      'Nettoyage & détails finaux',
      'Réceptions techniques et conformités',
    ],
    workers: '10–15',
  },
  {
    phase: 'Phase 6',
    title: 'Mise en service & livraison',
    duration: '3–5 jours',
    tasks: [
      'Derniers réglages (thermostat, électricité fine)',
      'Formation & transmission au gestionnaire',
      'Mise à disposition des clés',
      'Premiers emménagements étudiants',
    ],
    workers: '5–10',
  },
];

const logistics = [
  {
    icon: <Truck size={20} />,
    title: 'Transport & manutention',
    desc: 'Acheminement des conteneurs par route standard. Pas de permit spéciaux pour les routes normales. Chaque conteneur = 1 camion semi-remorque.',
    metric: '~50 camions',
    unit: 'pour 50 modules',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Ressources humaines',
    desc: 'Équipe pluridisciplinaire : maçons (fondations), électriciens, plombiers, menuisiers, spécialistes PAC/VMC.',
    metric: '15–30',
    unit: 'personnes simultanées',
  },
  {
    icon: <Hammer size={20} />,
    title: 'Équipements nécessaires',
    desc: 'Grues (location), compresseurs, découpe thermique, outillage standard. La plupart peut être loué localement.',
    metric: '1 grue',
    unit: '50 t min., 4–6 sem.',
  },
  {
    icon: <AlertCircle size={20} />,
    title: 'Points d\'attention',
    desc: 'Météo (pluies prolongées ralentissent fondations). Accès au site. Disponibilité des entreprises sub-traitantes locales.',
    metric: 'Climat tempéré',
    unit: 'idéal',
  },
];

const timeline = [
  { week: 'Sem. 1–2', phase: 'Préparation site', pct: 12 },
  { week: 'Sem. 3–5', phase: 'Positionnement modules', pct: 30 },
  { week: 'Sem. 6–8', phase: 'Aménagements', pct: 45 },
  { week: 'Sem. 9–10', phase: 'Finitions & tests', pct: 70 },
  { week: 'Sem. 11–12', phase: 'Livraison & réception', pct: 100 },
];

const demontage = [
  {
    step: '1. Évacuation des habitants',
    desc: 'Préavis et relogement temporaire des résidents. Vente ou réaffectation des meubles intégrés.',
  },
  {
    step: '2. Déconnexions techniques',
    desc: 'Électricité, eau, gaz, chauffage. Récupération des données si systèmes connectés. Isolation temporaire.',
  },
  {
    step: '3. Désolidarisation structurelle',
    desc: 'Retrait des passerelles et liaisons. Séparation des modules. Inspection du châssis conteneur.',
  },
  {
    step: '4. Chargement & transport',
    desc: 'Grue + semi-remorques. Destination : réutilisation sur nouveau site ou centre de reconditionnement.',
  },
  {
    step: '5. Renaturation du site',
    desc: 'Retrait des fondations (si nécessaire), restauration du sol. Campus peut être utilisé à d\'autres fins.',
  },
];

const reuse = [
  {
    scenario: 'Réutilisation sur nouveau site',
    timeline: '2–3 ans',
    capex: '-30%',
    desc: 'Le coût d\'installation est divisé par 1.5 (modules déjà aménagés). Réaménagement minimaliste.',
  },
  {
    scenario: 'Reconditionnement & amélioration',
    timeline: '6–12 mois',
    capex: '+15–20%',
    desc: 'Remplacement d\'équipements, mise à jour de l\'isolation ou des systèmes. Seconde vie identique.',
  },
  {
    scenario: 'Valorisation de matériaux',
    timeline: 'continu',
    capex: '+5–10% du coût matière',
    desc: 'Acier récupéré, menuiseries, tuyauterie, électricité. Marché de l\'occasion robuste.',
  },
  {
    scenario: 'Stockage intermédiaire',
    timeline: 'illimité',
    capex: '-5%',
    desc: 'Park conteneurs en attente de nouvel usage. Stockage agricole ou industriel temporaire. Reversible.',
  },
];

export default function Logistique() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Logistique & Planning"
        title="Du terrain vierge aux premiers emménagements"
        subtitle="La rapidité est l'un des avantages majeurs de La Ruche. Voyez comment un campus peut être déployé en 10–12 semaines."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Chronologie détaillée"
          title="Six phases de déploiement"
          subtitle="Chaque phase s'enchaîne logiquement, avec parallélisation possible sur certains tâches."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {phases.map((p, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '2rem',
                padding: '2rem 0',
                borderBottom: i < phases.length - 1 ? '1px solid rgba(245,158,11,0.08)' : 'none',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'rgba(245,158,11,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F59E0B',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                  }}
                >
                  {i + 1}
                </div>
                {i < phases.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      height: 60,
                      background: 'linear-gradient(to bottom, rgba(245,158,11,0.3), transparent)',
                    }}
                  />
                )}
              </div>

              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1rem' }}>{p.title}</div>
                    <div style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.25rem' }}>
                      {p.duration}
                    </div>
                  </div>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {p.tasks.map((task, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#A7C9A0', fontSize: '0.82rem' }}>
                      <CheckCircle size={14} style={{ color: '#4ADE80', marginTop: '2px', flexShrink: 0 }} />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: 'rgba(245,158,11,0.04)',
                  border: '1px solid rgba(245,158,11,0.08)',
                  borderRadius: '8px',
                  padding: '0.875rem 1rem',
                  textAlign: 'center',
                  minWidth: '100px',
                }}
              >
                <div style={{ color: '#4A6340', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                  Équipe
                </div>
                <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.03em' }}>
                  {p.workers}
                </div>
                <div style={{ color: '#A7C9A0', fontSize: '0.75rem', marginTop: '0.25rem' }}>personnes</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Ressources"
          title="Ce qu'il faut pour déployer La Ruche"
          centered
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {logistics.map((item, i) => (
            <div key={i} className="info-card">
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
                  marginBottom: '1rem',
                }}
              >
                {item.icon}
              </div>
              <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                {item.title}
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                {item.desc}
              </div>
              <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', display: 'flex', gap: '0.3rem', alignItems: 'baseline' }}>
                {item.metric} <span style={{ color: '#A7C9A0', fontSize: '0.8rem', fontWeight: 500 }}>{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Timeline complète"
          title="Du terrain vierge à l'occupancy"
        />

        <div style={{ background: '#0F1A0B', border: '1px solid rgba(245,158,11,0.08)', borderRadius: '12px', padding: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {timeline.map((t, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem' }}>{t.week}</div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.8rem', marginTop: '0.15rem' }}>{t.phase}</div>
                  </div>
                  <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.85rem' }}>{t.pct}%</div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${t.pct}%`, background: `linear-gradient(90deg, #F59E0B ${50 + t.pct * 0.3}%, #4ADE80)` }} />
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: '2rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(245,158,11,0.08)',
              background: 'rgba(74,222,128,0.04)',
              padding: '1.5rem',
              borderRadius: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <Clock size={18} style={{ color: '#4ADE80' }} />
              <span style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.95rem' }}>Total : 10–12 semaines</span>
            </div>
            <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.65 }}>
              Contre 3–5 ans pour une résidence classique. Gain de temps : -85%.
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Fin de vie & réversibilité"
          title="Le démontage"
          subtitle="La modularité signifie aussi la réversibilité : la Ruche peut être démantelée et repositionnée ailleurs."
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {demontage.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: 'rgba(245,158,11,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F59E0B',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      {item.step}
                    </div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
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
                Durée du démontage : 4–6 semaines
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Comparable au déploiement. Les conteneurs peuvent être réutilisés en bon état 5–10 fois.
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Scénarios"
              title="Que deviennent les modules ?"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {reuse.map((scenario, i) => (
                <div key={i} style={{
                  background: '#0F1A0B',
                  border: '1px solid rgba(245,158,11,0.1)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{scenario.scenario}</div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ background: 'rgba(74,222,128,0.1)', color: '#4ADE80', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                        {scenario.timeline}
                      </span>
                      <span style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                        {scenario.capex}
                      </span>
                    </div>
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.65 }}>{scenario.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '10–12 sem.', label: 'Temps de déploiement', sub: '50 logements type', color: 'green' },
            { value: '-85%', label: 'vs. construction neuve', sub: 'même ampleur', color: 'amber' },
            { value: '~100%', label: 'Taux de réutilisation', sub: 'conteneurs & matériaux', color: 'green' },
            { value: '4–6 sem.', label: 'Démontage & relogement', sub: 'site complètement libéré', color: 'amber' },
          ]}
        />
      </section>
    </div>
  );
}
