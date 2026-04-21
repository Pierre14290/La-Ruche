import { TrendingUp, DollarSign, PieChart, BarChart3, Target, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const capexComparison = [
  {
    name: 'La Ruche (1 module / 40 logements)',
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
    timeline: '10 j ouvrés / module (18 j ouvrés bruts)',
    perUnit: '~23,8 k€/logement',
  },
  {
    name: 'Résidence étudiante classique (40 logements)',
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
    tier: 'Studio compact partagé',
    baseRent: '310–330€',
    utilities: '+50–70€',
    total: '360–400€',
    target: 'Étudiants boursiers, mobilité courte',
  },
  {
    tier: 'Studio standard',
    baseRent: '330–350€',
    utilities: '+50€',
    total: '380–400€',
    target: 'Étudiants en cursus classique',
  },
  {
    tier: 'Coliving / logement mutualisé',
    baseRent: '290–320€',
    utilities: '+50–60€',
    total: '340–380€',
    target: 'Étudiants recherchant le coût minimal',
  },
];

const roi = [
  { year: 'Année 1', occupancy: 1, cashflow: '+140 k€', roi: '1,4%' },
  { year: 'Année 2', occupancy: 3, cashflow: '+425 k€', roi: '4,3%' },
  { year: 'Année 3', occupancy: 10, cashflow: '+1 275 k€', roi: '12,8%' },
  { year: 'Année 4', occupancy: 20, cashflow: '+3 125 k€', roi: '31,3%' },
  { year: 'Année 5', occupancy: 32, cashflow: '+6 100 k€', roi: '61,0%' },
  { year: 'Année 6', occupancy: 39, cashflow: '+9 750 k€', roi: '97,5%' },
];

const investorTypes = [
  {
    icon: '🏛️',
    type: 'Collectivités / établissements publics',
    incentive: 'Réponse rapide à la pénurie de logements étudiants, déploiement court, impact territorial immédiat.',
    roi: 'Impact prioritaire',
    risk: 'Faible',
  },
  {
    icon: '🎓',
    type: 'Écoles & groupes d’enseignement',
    incentive: 'Solution mutualisable entre établissements, attractivité renforcée, maîtrise des coûts et des places réservées.',
    roi: 'ROI ~5,7 ans',
    risk: 'Faible',
  },
  {
    icon: '🏗️',
    type: 'Partenaires industriels / construction modulaire',
    incentive: 'Industrialisation d’un produit duplicable, standardisation, baisse des coûts à volume croissant.',
    roi: 'Croissance forte',
    risk: 'Modéré',
  },
  {
    icon: '💼',
    type: 'Investisseurs equity / impact',
    incentive: 'Marché sous tension, modèle scalable, valorisation visée à 5–6 ans avec sortie potentielle x5 à x7.',
    roi: 'Multiple x5–x7',
    risk: 'Modéré',
  },
];

const financialMetrics = [
  { label: 'Coût par logement', vs: '-76%', ref: '23,8 k€ vs. ~100 k€', positive: true },
  { label: 'Délai de montage', vs: '-95%', ref: '10 j/module vs. 18–24 mois', positive: true },
  { label: 'Loyer cible', vs: '< 400€', ref: 'charges incluses', positive: true },
  { label: 'ROI école', vs: '5,7 ans', ref: 'sur 40 logements', positive: true },
];

export default function Financier() {
  return (
    <div className="page-enter">
      <PageHero
  tag="Étude Financière"
  title="Un modèle modulaire rentable et industrialisable"
  subtitle="La Ruche combine un coût de construction réduit, un déploiement rapide et un modèle économique viable pour les écoles comme pour les investisseurs."
/>

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
  tag="Investissement initial"
  title="CAPEX : La Ruche vs. résidence classique"
  subtitle="Grâce à la préfabrication et au montage rapide sur site, La Ruche réduit fortement le coût par logement et le temps de déploiement."
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
                  ~{comp.perUnit} | {comp.timeline}
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
  tag="Exploitation annuelle"
  title="OPEX : charges d’exploitation d’un module"
  subtitle="Budget prévisionnel pour un module de 40 logements, incluant énergie résiduelle, maintenance, gestion et services."
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
            <div
              style={{
                background: 'rgba(74,222,128,0.06)',
                border: '1px solid rgba(74,222,128,0.15)',
                borderRadius: '8px',
                padding: '1.25rem',
              }}
            >
              <div style={{ color: '#4ADE80', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.375rem' }}>
  Budget annuel estimé : ~35–45 k€ / module
</div>
<div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
  L’autoconsommation photovoltaïque et la PAC limitent fortement les charges énergétiques, tout en maintenant un loyer étudiant abordable.
</div>
            </div>
          </div>

          <div>
            <SectionHeader
  tag="Modèle de loyers"
  title="Des loyers maintenus sous 400 €"
  subtitle="Objectif du projet : rester accessible au plus grand nombre tout en assurant la viabilité économique du module."
/>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {rentModels.map((model, i) => (
                <div key={i} style={{
                  background: '#0F1A0B',
                  border: '1px solid rgba(245,158,11,0.1)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                    <div>
                      <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.9rem' }}>{model.tier}</div>
                      <div style={{ color: '#A7C9A0', fontSize: '0.8rem', marginTop: '0.2rem' }}>{model.target}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '1.1rem' }}>{model.total}</div>
                      <div style={{ color: '#4A6340', fontSize: '0.75rem', marginTop: '0.2rem' }}>loyer + charges</div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem' }}>
                    <div style={{ color: '#A7C9A0' }}>{model.baseRent} loyer</div>
                    <div style={{ color: '#A7C9A0' }}>{model.utilities} charges</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
  tag="Performance financière"
  title="Trajectoire de croissance de l’entreprise"
  subtitle="Projection sur 6 ans, basée sur une montée en puissance progressive des ventes de modules."
  centered
/>

        <div style={{ background: '#0F1A0B', border: '1px solid rgba(245,158,11,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
                  {['Année', 'Modules vendus', 'Marge cumulée', 'Valorisation potentielle'].map((h) => (
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
                {roi.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(245,158,11,0.04)' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#F0FDF4', fontSize: '0.9rem', fontWeight: 600 }}>
                      {row.year}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#A7C9A0', fontSize: '0.9rem' }}>
                      {row.occupancy}%
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#4ADE80', fontSize: '0.9rem', fontWeight: 700 }}>
                      {row.cashflow}
                    </td>
                    <td style={{ padding: '1rem 1.5rem', color: '#F59E0B', fontSize: '0.9rem', fontWeight: 700 }}>
                      {row.roi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: '2rem', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)', borderRadius: '8px', padding: '1.5rem' }}>
          <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={18} style={{ color: '#4ADE80' }} />
            Hypothèses
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
  '1 module = 20 conteneurs = 40 logements étudiants',
  'Coût de vente d’un module : 950 k€',
  'Marge estimée par module : 250 k€',
  'Loyer moyen étudiant : 350 €/mois',
  'Recette annuelle école : 168 k€ pour 40 logements',
  'ROI école : 950 k€ / 168 k€ ≈ 5,7 ans',
  'Levée visée : 1,5 M€ pour R&D, prototype et industrialisation',
  'Objectif : 105 modules vendus en 6 ans',
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
  tag="Profils investisseurs"
  title="Qui a intérêt à financer La Ruche ?"
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
                    ROI
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
  { value: '950 k€', label: 'Coût d’un module', sub: '40 logements', color: 'green' },
  { value: '250 k€', label: 'Marge par module', sub: 'vente à 950 k€', color: 'amber' },
  { value: '350€', label: 'Loyer moyen', sub: 'objectif étudiant', color: 'green' },
  { value: '5,7 ans', label: 'ROI école', sub: 'hors services annexes', color: 'amber' },
]}
        />
      </section>
    </div>
  );
}
