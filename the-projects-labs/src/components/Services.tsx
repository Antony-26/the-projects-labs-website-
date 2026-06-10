import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #F5F7FA;
  padding: 5rem 1.25rem;
  @media (max-width: 768px) { padding: 4rem 1rem; }
`;

const Container = styled.div`max-width: 1100px; margin: 0 auto;`;

const SectionLabel = styled.p`
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: #25D366; margin-bottom: 0.6rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 800; color: #0D1B2A;
  letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 0.6rem;
`;

const SectionSub = styled.p`
  font-size: 0.95rem; color: #5A7184; max-width: 500px;
  line-height: 1.7; margin-bottom: 2.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1rem;
`;

const Card = styled.div<{ $active: boolean }>`
  background: #ffffff;
  border-radius: 16px;
  padding: 1.75rem;
  border: 1.5px solid ${({ $active }) => $active ? '#25D366' : '#E2EAF0'};
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s;
  position: relative; overflow: hidden; cursor: pointer;

  &::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #25D366, #1BA84E);
    opacity: ${({ $active }) => $active ? 1 : 0};
    transition: opacity 0.25s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(13,27,42,0.1);
    border-color: #25D366;
    &::before { opacity: 1; }
  }
`;

const CardIcon = styled.div`font-size: 1.75rem; margin-bottom: 0.75rem;`;
const CardTitle = styled.h3`font-size: 1rem; font-weight: 700; color: #0D1B2A; margin-bottom: 0.5rem;`;
const CardDesc = styled.p`font-size: 0.85rem; color: #5A7184; line-height: 1.7; margin-bottom: 1rem;`;

const SectorTags = styled.div`display: flex; flex-wrap: wrap; gap: 0.4rem;`;

const Tag = styled.span`
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.04em;
  background: #F0FDF6; color: #15803D;
  border: 1px solid #BBF7D0;
  padding: 0.2rem 0.6rem; border-radius: 999px;
`;

const PricingNote = styled.div`
  margin-top: 2.5rem; display: flex; align-items: flex-start; gap: 0.75rem;
  background: #E8FAF0; border: 1px solid rgba(37,211,102,0.2);
  padding: 0.85rem 1.25rem; border-radius: 12px;
  font-size: 0.875rem; color: #0D1B2A; font-weight: 500; line-height: 1.5;
`;

const SERVICES = [
  { icon: '🌐', title: 'Website Development', desc: 'Modern, fast, and mobile-friendly websites built for small businesses. We design sites that look professional and actively convert visitors into paying customers.', sectors: ['Retail', 'Healthcare', 'SaaS', 'F&B'] },
  { icon: '🔍', title: 'Search Engine Optimization', desc: 'Get found on Google. From local SEO in India to international reach, we provide keyword research and on-page optimization that moves the needle.', sectors: ['Local Biz', 'E-Commerce', 'Services', 'B2B'] },
  { icon: '📱', title: 'Social Media Management', desc: 'Turn profiles into growth engines. We manage Instagram, Facebook, LinkedIn, and YouTube — handling content calendars to brand voice.', sectors: ['Retail', 'Hospitality', 'Fashion', 'Startups'] },
  { icon: '🚀', title: 'Digital Presence & Setup', desc: 'Complete online footprint: Google Business Profile optimization, directory listings, and smart interlinking to rapidly build your brand authority.', sectors: ['Local Biz', 'Clinics', 'Restaurants', 'Shops'] },
  { icon: '✍️', title: 'Content Marketing', desc: 'High-quality blog writing and SEO-optimized articles designed to attract your ideal audience and keep them engaging with your business.', sectors: ['SaaS', 'Education', 'Finance', 'Health'] },
  { icon: '🎯', title: 'Lead Generation Ads', desc: 'Targeted Google & Meta ad campaigns tailored for small budgets to bring in immediate leads while your organic SEO builds in the background.', sectors: ['Real Estate', 'Education', 'Services', 'B2B'] },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Section id="services">
      <Container>
        <SectionLabel>How We Help</SectionLabel>
        <SectionTitle>Everything you need to grow online</SectionTitle>
        <SectionSub>Six focused services designed for small businesses — no fluff, just what moves the needle.</SectionSub>
        <Grid>
          {SERVICES.map((s, i) => (
            <Card key={s.title} $active={active === i}
              onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}>
              <CardIcon>{s.icon}</CardIcon>
              <CardTitle>{s.title}</CardTitle>
              <CardDesc>{s.desc}</CardDesc>
              <SectorTags>
                {s.sectors.map(t => <Tag key={t}>{t}</Tag>)}
              </SectorTags>
            </Card>
          ))}
        </Grid>
        <PricingNote>
          💡 Starting from affordable monthly packages. Custom plans tailored for small teams.
        </PricingNote>
      </Container>
    </Section>
  );
}
