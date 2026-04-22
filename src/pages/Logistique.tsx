import { Truck, Clock, Hammer, CheckCircle, AlertCircle, BarChart3, PlayCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Préparation légère du site',
    duration: '2 jours',
    tasks: [
      'Implantation du module et contrôle altimétrique',
      'Nivellement léger si nécessaire, sans grand chantier de terrassement',
      'Mise en place des plots en béton préfabriqués',
      'Vérification des accès poids lourds et de la zone de levage',
    ],
    workers: '6–8',
  },
  {
    phase: 'Phase 2',
    title: 'Pose de la dalle de base',
    duration: '1–2 jours',
    tasks: [
      'Déchargement des éléments préfabriqués de la dalle hexagonale',
      'Assemblage sur plots de la dalle bois de 257 m² et 30 cm d’épaisseur',
      'Contrôle des réservations pour les conteneurs et la structure porteuse',
      'Préparation des interfaces de montage pour les niveaux supérieurs',
    ],
    workers: '6–8',
  },
  {
    phase: 'Phase 3',
    title: 'Montage d’un étage type',
    duration: '~1 jour / étage',
    tasks: [
      'Mise en place de la structure porteuse treillis sur la dalle',
      'Positionnement des 5 conteneurs dans les emplacements prévus',
      'Calage, fixation et contrôles géométriques',
      'Préparation des appuis pour la dalle de l’étage suivant',
    ],
    workers: '6–8',
  },
  {
    phase: 'Phase 4',
    title: 'Empilement des niveaux',
    duration: '4 à 5 jours',
    tasks: [
      'Pose des dalles intermédiaires standardisées',
      'Répétition du principe structure + 5 conteneurs sur 4 niveaux',
      'Assemblage sec et répétitif pour limiter le temps de chantier',
      'Coordination des opérations de levage et de sécurisation',
    ],
    workers: '6–8',
  },
  {
    phase: 'Phase 5',
    title: 'Toiture et champ photovoltaïque',
    duration: '2 jours',
    tasks: [
      'Pose de la toiture supérieure spécifique',
      'Mise en place du support photovoltaïque',
      'Installation du champ PV, des liaisons et des éléments de protection',
      'Préparation des raccordements vers le local technique',
    ],
    workers: '5–7',
  },
  {
    phase: 'Phase 6',
    title: 'Raccordements, finitions et mise en service',
    duration: '5 jours',
    tasks: [
      'Raccordements VMC, électricité, eau, ECS et PAC',
      'Contrôles, essais de fonctionnement et vérifications de sécurité',
      'Finitions techniques et mise en service progressive',
      'Cette phase peut être menée en parallèle du montage d’un autre module',
    ],
    workers: '4–6',
  },
];

const logistics = [
  {
    icon: <Truck size={20} />,
    title: 'Accès et transport',
    desc: 'Le système est conçu pour être livré sous forme préfabriquée. Le chantier suppose un accès poids lourds standard et une zone de manœuvre suffisante pour la grue mobile.',
    metric: '20 conteneurs',
    unit: 'par module',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Équipe de montage',
    desc: 'Hypothèse de chantier : 1 chef(fe) de chantier, 1 grutier, 3 à 5 monteurs/assembleurs et 1 à 2 technicien(ne)s fluides/électricité.',
    metric: '6–8',
    unit: 'personnes',
  },
  {
    icon: <Hammer size={20} />,
    title: 'Moyens nécessaires',
    desc: 'Une grue mobile, l’outillage d’assemblage standard, les moyens de levage et les interfaces de raccordement rapide suffisent. Le chantier reste majoritairement sec.',
    metric: '1 grue',
    unit: 'mobile',
  },
  {
    icon: <AlertCircle size={20} />,
    title: 'Points sensibles',
    desc: 'Tolérances de pose, météo, accès au site, coordination des raccordements et disponibilité des éléments préfabriqués sont les principaux facteurs pouvant ralentir le montage.',
    metric: 'Faible terrassement',
    unit: 'chantier sec',
  },
];

const timeline = [
  { week: 'Jours 1–2', phase: 'Préparation du site', pct: 12 },
  { week: 'Jours 3–4', phase: 'Plots + dalle de base', pct: 24 },
  { week: 'Jours 5–10', phase: 'Assemblage structure + conteneurs', pct: 60 },
  { week: 'Jours 11–12', phase: 'Toiture + champ PV', pct: 72 },
  { week: 'Jours 13–18', phase: 'Raccordements, finitions, contrôles', pct: 100 },
];

const demontage = [
  {
    step: '1. Déconnexion des réseaux',
    desc: 'Isolation et déconnexion des réseaux électriques, hydrauliques, VMC, PAC, ECS et PV afin de sécuriser le démontage.',
  },
  {
    step: '2. Dépose des équipements de toiture',
    desc: 'Retrait du champ photovoltaïque, des supports et des liaisons techniques de la toiture supérieure.',
  },
  {
    step: '3. Dépose des niveaux supérieurs',
    desc: 'Les dalles et les structures porteuses sont retirées étage par étage, puis les conteneurs sont levés et évacués.',
  },
  {
    step: '4. Retrait de la dalle de base',
    desc: 'Démontage des éléments bois préfabriqués et retrait des interfaces structurelles.',
  },
  {
    step: '5. Libération du site',
    desc: 'Les plots préfabriqués peuvent être retirés rapidement, permettant une remise en état légère et une réversibilité du foncier.',
  },
];

const reuse = [
  {
    scenario: 'Relocalisation complète',
    timeline: 'Rapide',
    capex: 'Très favorable',
    desc: 'Les modules peuvent être démontés puis remontés sur un autre site avec peu de transformations, ce qui donne au projet une vraie dimension réversible.',
  },
  {
    scenario: 'Extension progressive',
    timeline: 'Par étapes',
    capex: 'Maîtrisé',
    desc: 'Le campus peut être agrandi module par module, sans repenser l’ensemble du système ni engager une nouvelle opération lourde.',
  },
  {
    scenario: 'Réaffectation fonctionnelle',
    timeline: 'Flexible',
    capex: 'Modéré',
    desc: 'Un module initialement prévu pour le logement peut être réinterprété en espace de service, coworking ou usage temporaire selon les besoins du site.',
  },
  {
    scenario: 'Démontage et stockage',
    timeline: 'Possible',
    capex: 'Intermédiaire',
    desc: 'Le système peut être mis en attente entre deux implantations, ce qui reste plus souple qu’un bâtiment classique définitivement attaché à son terrain.',
  },
];

const videoEmbedUrl = 'LIEN_VIDEO_EMBED';

export default function Logistique() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Logistique & Montage"
        title="Un chantier pensé comme un assemblage"
        subtitle="La Ruche repose sur la préfabrication maximale des dalles, des structures porteuses et des conteneurs. Le travail sur site est donc réduit à l’assemblage, aux raccordements et aux contrôles."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Principe général"
          title="Un montage rapide grâce à la préfabrication"
          subtitle="Le système est conçu comme un jeu de construction à grande échelle : les éléments arrivent préfabriqués, puis sont assemblés sur site avec un minimum d’opérations lourdes."
        />

        <div
          style={{
            background: 'rgba(74,222,128,0.06)',
            border: '1px solid rgba(74,222,128,0.15)',
            borderRadius: '10px',
            padding: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
            Hypothèses retenues
          </div>
          <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.7 }}>
            Le montage suppose un accès poids lourds, une grue mobile disponible et un terrain globalement propre. L’équipe type comprend 1 chef(fe) de chantier, 1 grutier, 3 à 5 monteurs/assembleurs et 1 à 2 technicien(ne)s fluides/électricité.
          </div>
        </div>

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
          tag="Vidéo"
          title="Visualiser le principe d’assemblage"
          subtitle="Remplace simplement le lien ci-dessous par le lien embed de ta vidéo."
          centered
        />

        <div
          style={{
            background: '#0F1A0B',
            border: '1px solid rgba(245,158,11,0.1)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 1.25rem',
              borderBottom: '1px solid rgba(245,158,11,0.08)',
              background: 'rgba(245,158,11,0.04)',
            }}
          >
            <PlayCircle size={18} style={{ color: '#F59E0B' }} />
            <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.92rem' }}>
              Démonstration du montage d’un module
            </div>
          </div>

          <div style={{ aspectRatio: '16 / 9', background: '#111A0F' }}>
            <iframe
              src='https://res.cloudinary.com/dgsvjcdfk/video/upload/v1776863130/20260422-1228-01.1037597_skfd4n.mp4'
              title="Vidéo de montage du module"
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div style={{ padding: '1rem 1.25rem' }}>
            <div style={{ color: '#A7C9A0', fontSize: '0.84rem', lineHeight: 1.6 }}>
              Cette vidéo peut illustrer l’assemblage successif des plots, de la dalle, des structures porteuses, des conteneurs, puis de la toiture photovoltaïque.
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Ressources"
          title="Ce qu’il faut pour déployer La Ruche"
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
          tag="Timeline"
          title="Du terrain propre au module opérationnel"
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
              <span style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.95rem' }}>18 jours ouvrés bruts</span>
            </div>
            <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '0.6rem' }}>
              En intégrant les opérations simultanées et les tâches parallélisables, le temps cible ramené par module est d’environ 10 jours.
            </div>
            <div style={{ color: '#F59E0B', fontSize: '0.82rem', fontWeight: 700 }}>
              La valeur ajoutée du projet vient donc autant de la préfabrication que du produit lui-même.
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Réversibilité"
          title="Le démontage fait partie du projet"
          subtitle="La Ruche n’est pas pensée comme un bâtiment figé, mais comme une infrastructure réversible capable d’être déplacée, reconfigurée ou réaffectée."
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
                Démontage estimé : environ 10 jours
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Le démontage est plus rapide que le montage, car il n’y a pas de mise en service ni de réglages fins comparables à la phase initiale.
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
                <div
                  key={i}
                  style={{
                    background: '#0F1A0B',
                    border: '1px solid rgba(245,158,11,0.1)',
                    borderRadius: '8px',
                    padding: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem', gap: '1rem' }}>
                    <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{scenario.scenario}</div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      <span
                        style={{
                          background: 'rgba(74,222,128,0.1)',
                          color: '#4ADE80',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
                        {scenario.timeline}
                      </span>
                      <span
                        style={{
                          background: 'rgba(245,158,11,0.1)',
                          color: '#F59E0B',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                        }}
                      >
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
            { value: '18 j', label: 'Montage brut', sub: 'module complet', color: 'green' },
            { value: '10 j', label: 'Montage optimisé', sub: 'avec opérations simultanées', color: 'amber' },
            { value: '10 j', label: 'Démontage estimé', sub: 'module standard', color: 'green' },
            { value: '0 gros terrassement', label: 'Principe chantier', sub: 'plots + assemblage sec', color: 'amber' },
          ]}
        />
      </section>
    </div>
  );
}
