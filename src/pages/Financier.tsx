import { TrendingUp, DollarSign, PieChart, BarChart3, Target, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const capexComparison = [
  {
    name: 'La Ruche (40 logements)',
    total: '~700 k€',
    breakdown: [
      { item: 'Conteneurs + transformation', pct: 35 },
      { item: 'Modules non-logement', pct: 25 },
      { item: 'Infrastructure + VRD', pct: 20 },
      { item: 'Contingences & frais', pct: 20 },
    ],
    timeline: '3 semaines',
    perUnit: '~17.5 k€/logement',
  },
  {
    name: 'Résidence classique (40 logements)',
    total: '~4,0 M€',
    breakdown: [
      { item: 'Gros œuvre béton', pct: 40 },
      { item: 'Second œuvre & équipements', pct: 30 },
      { item: 'Infrastructure + VRD', pct: 20 },
      { item: 'Contingences & frais', pct: 10 },
    ],
    timeline: '3–5 ans',
    perUnit: '~100 k€/logement',
  },
];

const opexBreakdown = [
  { item: 'Électricité & chauffage', pct: 35, color: '#FBBF24' },
  { item: 'Eau & assainissement', pct: 15, color: '#60A5FA' },
  { item: 'Maintenance & réparations', pct: 20, color: '#F87171' },
  { item: 'Nettoyage & hygiène', pct: 15, color: '#A78BFA' },
  { item: 'Gestion administrative', pct: 10, color: '#4ADE80' },
  { item: 'Assurance & taxes', pct: 5, color: '#FB923C' },
];

const rentModels = [
  {
    tier: 'T1 compact (18 m²)',
    baseRent: '280–320€',
    utilities: '+80€',
    total: '360–400€',
    target: 'Étudiants boursiers, alternants',
  },
  {
    tier: 'T1 standard (26 m²)',
    baseRent: '350–400€',
    utilities: '+100€',
    total: '450–500€',
    target: 'Étudiants en mobilité, doctorants',
  },
  {
    tier: 'T1+ premium (30 m²)',
    baseRent: '420–480€',
    utilities: '+120€',
    total: '540–600€',
    target: 'Chercheurs, alternants bien rémunérés',
  },
];

const roi = [
  { year: 'Année 1', occupancy: 85, cashflow: '+180 k€', roi: '7%' },
  { year: 'Année 3', occupancy: 95, cashflow: '+450 k€', roi: '18%' },
  { year: 'Année 5', occupancy: 98, cashflow: '+750 k€', roi: '30%' },
  { year: 'Année 10', occupancy: 98, cashflow: '+1 600 k€', roi: '64%' },
];

const investorTypes = [
  {
    icon: '🏛️',
    type: 'Collectivités territoriales',
    incentive: 'Réponse urgente à la crise du logement, amortissement sur 20–25 ans, impact social direct.',
    roi: 'Modéré (4–6%)',
    risk: 'Faible',
  },
  {
    icon: '🏦',
    type: 'Établissements d\'enseignement',
    incentive: 'Attraction d\'étudiants internationaux, amélioration de l\'offre de services, contrôle de l\'aménagement.',
    roi: 'Modéré (5–7%)',
    risk: 'Faible',
  },
  {
    icon: '💼',
    type: 'Fonds immobiliers / promoteurs',
    incentive: 'Rendement stable & prévisible, classe d\'actifs nouvelle, ESG positif, scalabilité de modèle.',
    roi: 'Bon (8–12%)',
    risk: 'Modéré',
  },
  {
    icon: '🌱',
    type: 'Fonds ESG / Impact',
    incentive: 'Durabilité certifiée, impact social & environnemental mesurable, contributeur à ODD.',
    roi: 'Très bon (10–15%)',
    risk: 'Modéré',
  },
];

const financialMetrics = [
  { label: 'Coût construction', vs: '-50%', ref: 'vs. immeuble classique', positive: true },
  { label: 'Délai réalisation', vs: '-85%', ref: '6–8 sem. vs. 3–5 ans', positive: true },
  { label: 'Loyer moyen', vs: '-35%', ref: 'vs. marché urbain', positive: true },
  { label: 'TRI estimé', vs: '+8–12%', ref: '10 ans horizon', positive: true },
];

export default function Financier() {
  return (
    <div className="page-enter">
      <PageHero
        tag="Étude Financière"
        title="Un modèle économiquement viable"
        subtitle="La Ruche offre un ROI attractif tout en maintenant des loyers accessibles aux étudiants. Voici comment."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Investissement initial"
          title="CAPEX : La Ruche vs. résidence classique"
          subtitle="La rapidité de déploiement réduit les coûts indirects (frais de financement, intérêts, gestion prolongée)."
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
              title="OPEX : coûts de fonctionnement"
              subtitle="Budget prévisionnel pour l'exploitation complète d'un campus de 50 logements (année stabilisée)."
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
                Budget annuel : ~650–700 k€
              </div>
              <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                Soit 13–14 k€ par logement/an. Chauffage efficace = économie majeure vs. résidences conventionnelles.
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Modèle de loyers"
              title="Trois tiers tarifaires"
              subtitle="Loyers mensuels moyens, charges incluses. Accessibilité progressive selon le profil étudiant."
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
          title="Rentabilité du projet"
          subtitle="Projection de ROI sur 10 ans, base 50 logements à taux d'occupation progressif."
          centered
        />

        <div style={{ background: '#0F1A0B', border: '1px solid rgba(245,158,11,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
                  {['Année', 'Taux occupancy', 'Flux de trésorerie', 'ROI cumulatif'].map((h) => (
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
              'Loyer moyen = 400€/mois + 100€ charges',
              'Taux d\'occupation année 1 : 85%, année 3+ : 95–98%',
              'OPEX = 650 k€/an (année stabilisée)',
              'Financement : 60% emprunt (3% sur 20 ans), 40% fonds propres',
              'Pas de revalorisation loyer pendant 5 ans (hypothèse prudente)',
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
          title="Pour qui La Ruche est-elle intéressante ?"
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
            { value: '-50%', label: 'Coût construction', sub: 'vs. résidence classique', color: 'green' },
            { value: '8–12%', label: 'TRI estimé', sub: '10 ans horizon', color: 'amber' },
            { value: '400€', label: 'Loyer moyen', sub: 'toutes charges incluses', color: 'green' },
            { value: '6 ans', label: 'Retour sur investissement', sub: 'année pleine occupancy', color: 'amber' },
          ]}
        />
      </section>
    </div>
  );
}
