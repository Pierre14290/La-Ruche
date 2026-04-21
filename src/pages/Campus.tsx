import { useState } from 'react';
import { Grid2x2 as Grid, Users, Maximize2, ArrowRight, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import StatGrid from '../components/StatGrid';

const moduleTypes = [
  {
    emoji: '🏠',
    name: 'Logement',
    desc: 'Module standard de 20 conteneurs 40 pieds sur 4 niveaux, soit 40 logements étudiants. Les espaces privatifs sont compacts et les fonctions lourdes peuvent être mutualisées pour optimiser la surface utile et les coûts.',
    count: '1',
    unit: 'module type',
  },
  {
    emoji: '🍽️',
    name: 'Restauration',
    desc: 'Module de vie collective intégrant cuisine partagée, cafétéria, salle à manger et espaces de convivialité. Il complète les logements et limite les équipements redondants dans chaque unité.',
    count: '1–2',
    unit: 'modules',
  },
  {
    emoji: '👕',
    name: 'Laverie',
    desc: 'Module mutualisé avec lave-linge, sèche-linge, tri du linge et rangements techniques. Il évite d’encombrer les logements avec des équipements énergivores rarement utilisés en continu.',
    count: '1',
    unit: 'module',
  },
  {
    emoji: '📚',
    name: 'Espace Études',
    desc: 'Salles de travail individuel et collectif, zones calmes, espace coworking et connexions numériques. Ce module répond aux besoins réels des étudiants au-delà du simple logement.',
    count: '1–2',
    unit: 'modules',
  },
  {
    emoji: '⚽',
    name: 'Sport & Loisirs',
    desc: 'Salle polyvalente, espace détente, terrasse et zones de rencontre. Le campus ne se limite pas à loger : il favorise aussi l’équilibre de vie et le lien social.',
    count: '0–1',
    unit: 'module',
  },
  {
    emoji: '🌿',
    name: 'Espaces Verts',
    desc: 'Jardins collaboratifs, potagers, ruches, zones de biodiversité et patios. Ils occupent les interstices du pavage et renforcent l’identité de “La Ruche” à l’échelle du campus.',
    count: 'variable',
    unit: '',
  },
  {
    emoji: '🚲',
    name: 'Mobilité',
    desc: 'Hub vélos, stationnement sécurisé, bornes de recharge, covoiturage et connexions piétonnes. Le campus est pensé pour réduire la dépendance à la voiture individuelle.',
    count: '1',
    unit: 'hub central',
  },
  {
    emoji: '⚙️',
    name: 'Technique',
    desc: 'Module ou noyau technique regroupant PAC, ECS, gestion électrique, stockage, raccordements et supervision énergétique. Standardisé, il accélère le montage et le démontage.',
    count: '1',
    unit: 'module',
  },
];

const targets = [
  {
    title: 'Étudiants en licence et master',
    desc: 'Public principal du projet : étudiants présents 9 à 12 mois par an, recherchant un logement abordable, rapide à attribuer et proche de leur établissement.',
    icon: '🎓',
  },
  {
    title: 'Doctorants et jeunes chercheurs',
    desc: 'Profils présents plus longtemps, ayant besoin d’un environnement calme, d’espaces de travail et d’une solution immédiatement opérationnelle à proximité du campus.',
    icon: '🔬',
  },
  {
    title: 'Étudiants en mobilité internationale',
    desc: 'Séjours de 3 à 12 mois nécessitant un logement clé en main, flexible, meublé et intégré dans un environnement lisible dès l’arrivée sur le campus.',
    icon: '✈️',
  },
  {
    title: 'Alternants et stagiaires',
    desc: 'Profils en mobilité temporaire, souvent éloignés de leur domicile, pour lesquels la souplesse d’installation et la rapidité de déploiement sont déterminantes.',
    icon: '💼',
  },
];

const adaptability = [
  {
    title: 'Campus compact',
    desc: '1 à 2 modules logement, complétés par les services essentiels. Solution adaptée à une petite école, une antenne universitaire ou un premier déploiement pilote.',
  },
  {
    title: 'Campus intermédiaire',
    desc: '3 à 5 modules logement avec restauration, étude, laverie et espaces extérieurs. Permet de loger plusieurs établissements sur un même site mutualisé.',
  },
  {
    title: 'Grand campus',
    desc: '6 modules et plus, avec une vraie mixité de fonctions. Le système conserve sa lisibilité grâce au pavage modulaire et à la répétition de modules standardisés.',
  },
];

const campusGallery = [
  {
    title: 'Vue aérienne du campus',
    desc: 'Implantation générale des modules et des patios',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776763929/21-04-2026_10-52-53_iujmzw.png',
  },
  {
    title: 'Cœur de vie commun',
    desc: 'Espaces partagés, circulation et convivialité',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776763929/21-04-2026_10-52-27_orw65a.png',
  },
  {
    title: 'Module logement type',
    desc: 'Exemple de composition standard sur 4 niveaux',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776763929/21-04-2026_10-53-14_z5jfk0.png',
  },
  {
    title: 'Extension du campus',
    desc: 'Ajout progressif de modules sur la trame hexagonale',
    src: 'https://res.cloudinary.com/dgsvjcdfk/image/upload/v1776763929/21-04-2026_10-53-04_wrwiaa.png',
  },
];

export default function Campus() {
  const [selectedImage, setSelectedImage] = useState<null | {
    title: string;
    desc: string;
    src: string;
  }>(null);

  return (
    <div className="page-enter">
      <PageHero
        tag="Le Campus"
        title="Un éco-campus modulaire, extensible et mutualisé"
        subtitle="La Ruche applique une logique de pavage hexagonal à l’échelle du campus : les modules restent rationnels et constructibles, tandis que leur assemblage crée une organisation organique, évolutive et lisible."
      />

      <div className="section-divider" />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <SectionHeader
              tag="Principe de pavage"
              title="La ruche n’est pas un bâtiment : c’est une logique d’assemblage"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  title: 'Modules rationnels, campus alvéolaire',
                  desc: 'Les conteneurs restent organisés selon une trame constructive rectangulaire pour préserver la surface utile, la compacité thermique et la facilité de fabrication. La géométrie hexagonale apparaît à l’échelle du campus.',
                },
                {
                  title: 'Croissance simple et réversible',
                  desc: 'Chaque nouveau module vient se connecter à une face libre du pavage. Le campus peut ainsi s’étendre ou se reconfigurer sans remettre en cause l’ensemble du plan.',
                },
                {
                  title: 'Mutualisation des fonctions',
                  desc: 'Tous les besoins ne sont pas intégrés dans les logements. La restauration, l’étude, la laverie, les espaces verts et les équipements techniques sont répartis dans des modules dédiés pour améliorer l’usage global.',
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'rgba(245,158,11,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F59E0B',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ color: '#F0FDF4', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      {item.title}
                    </div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HexCampusVisualization />
          </div>
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <SectionHeader
          tag="Galerie du campus"
          title="Quatre vues pour comprendre La Ruche"
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
          {campusGallery.map((img, i) => (
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
          tag="Les modules"
          title="Un vocabulaire architectural simple et répétable"
          subtitle="Chaque campus est une combinaison de modules standardisés. Cette répétition réduit les coûts, accélère le montage et facilite l’extension future."
          centered
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {moduleTypes.map((mod, i) => (
            <div key={i} className="info-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{mod.emoji}</span>
                  <span style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '0.95rem' }}>{mod.name}</span>
                </div>
                {mod.count && (
                  <span
                    style={{
                      color: '#F59E0B',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: 'rgba(245,158,11,0.1)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {mod.count} {mod.unit}
                  </span>
                )}
              </div>
              <p style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" style={{ maxWidth: '1280px', margin: '0 auto' }} />

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <SectionHeader
              tag="Public cible"
              title="Pour qui La Ruche est-elle conçue ?"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {targets.map((t, i) => (
                <div key={i} className="info-card" style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <div style={{ color: '#F0FDF4', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.375rem' }}>
                      {t.title}
                    </div>
                    <div style={{ color: '#A7C9A0', fontSize: '0.82rem', lineHeight: 1.6 }}>
                      {t.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              tag="Flexibilité"
              title="Trois échelles de campus types"
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {adaptability.map((a, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0F1A0B',
                    border: '1px solid rgba(245,158,11,0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    borderLeft: '3px solid #F59E0B',
                  }}
                >
                  <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {a.title}
                  </div>
                  <div style={{ color: '#A7C9A0', fontSize: '0.85rem', lineHeight: 1.65 }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <StatGrid
          stats={[
            { value: '20', label: 'Conteneurs', sub: 'par module logement standard', color: 'amber' },
            { value: '40', label: 'Étudiants logés', sub: 'par module logement', color: 'green' },
            { value: '8 types', label: 'De modules disponibles', sub: 'pour composer le campus', color: 'amber' },
            { value: '10 j', label: 'Montage optimisé', sub: 'par module en opérations simultanées', color: 'green' },
          ]}
        />
      </section>

      <section
        style={{
          background: 'rgba(245,158,11,0.04)',
          borderTop: '1px solid rgba(245,158,11,0.1)',
          padding: '3rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div style={{ color: '#F0FDF4', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.375rem' }}>
              Envie d’en savoir plus sur les logements ?
            </div>
            <div style={{ color: '#A7C9A0', fontSize: '0.875rem' }}>
              Découvre les détails techniques des conteneurs, l’isolation, la PAC et le bilan énergétique.
            </div>
          </div>
          <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
            Les logements <ArrowRight size={16} />
          </button>
        </div>
      </section>

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
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '999px',
                  border: '1px solid rgba(245,158,11,0.15)',
                  background: 'rgba(245,158,11,0.06)',
                  color: '#F0FDF4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div
              style={{
                background: '#111A0F',
                maxHeight: 'calc(92vh - 84px)',
                overflow: 'auto',
              }}
            >
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

function HexCampusVisualization() {
  type HexCell = { q: number; r: number; type: string; color: string; label: string };

  const hexes: HexCell[] = [
    { q: 0, r: 0, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: 1, r: 0, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: 0, r: 1, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: -1, r: 1, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: -1, r: 0, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: 0, r: -1, type: 'restauration', color: '#4ADE80', label: '🍽️' },
    { q: 1, r: -1, type: 'études', color: '#38BDF8', label: '📚' },
    { q: 2, r: -1, type: 'mobilité', color: '#F472B6', label: '🚲' },
    { q: 2, r: 0, type: 'technique', color: '#A78BFA', label: '⚙️' },
    { q: 1, r: 1, type: 'laverie', color: '#F87171', label: '👕' },
    { q: -1, r: 2, type: 'sport', color: '#FB923C', label: '⚽' },
    { q: -2, r: 1, type: 'logement', color: '#F59E0B', label: '🏠' },
    { q: -2, r: 2, type: 'jardins', color: '#86EFAC', label: '🌿' },
  ];

  const size = 32;
  const gap = 2;
  const w = (size + gap) * Math.sqrt(3);
  const h = (size + gap) * 2;

  const hexToPixel = (q: number, r: number) => ({
    x: w * (q + r / 2),
    y: h * (3 / 4) * r,
  });

  const hexPath = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    });
    return `M ${pts.join(' L ')} Z`;
  };

  const viewSize = 280;

  return (
    <div
      style={{
        background: '#0A1208',
        borderRadius: '12px',
        border: '1px solid rgba(245,158,11,0.12)',
        padding: '1.5rem',
        width: '100%',
        maxWidth: '360px',
      }}
    >
      <div
        style={{
          color: '#A7C9A0',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Vue schématique d’un campus type
      </div>
      <svg
        width="100%"
        viewBox={`${-viewSize / 2} ${-viewSize / 2} ${viewSize} ${viewSize}`}
        style={{ display: 'block' }}
      >
        {hexes.map((hex, i) => {
          const { x, y } = hexToPixel(hex.q, hex.r);
          return (
            <g key={i}>
              <path
                d={hexPath(x, y, size - 2)}
                fill={`${hex.color}18`}
                stroke={hex.color}
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={y + 6}
                textAnchor="middle"
                fontSize="14"
                style={{ userSelect: 'none' }}
              >
                {hex.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem', justifyContent: 'center' }}>
        {[
          { color: '#F59E0B', label: 'Logement' },
          { color: '#4ADE80', label: 'Restauration' },
          { color: '#38BDF8', label: 'Études' },
          { color: '#A78BFA', label: 'Technique' },
          { color: '#F87171', label: 'Laverie' },
          { color: '#86EFAC', label: 'Jardins' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: '#A7C9A0' }}>
            <div style={{ width: 8, height: 8, borderRadius: '2px', background: item.color, flexShrink: 0 }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function _Grid() { return <Grid size={16} />; }
function _Users() { return <Users size={16} />; }
function _Maximize2() { return <Maximize2 size={16} />; }
