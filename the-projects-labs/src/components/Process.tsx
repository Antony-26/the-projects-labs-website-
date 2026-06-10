import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #0D1B2A;
  padding: 5rem 1.25rem;
  @media (max-width: 768px) { padding: 4rem 1rem; }
`;

const Container = styled.div`max-width: 1100px; margin: 0 auto;`;

const SectionLabel = styled.p`
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: #25D366; margin-bottom: 0.6rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.4rem); font-weight: 800; color: #ffffff;
  letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 0.6rem;
`;

const SectionSub = styled.p`
  font-size: 0.95rem; color: rgba(255,255,255,0.5);
  max-width: 480px; line-height: 1.7; margin-bottom: 3.5rem;
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 28px; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(37,211,102,0.4), rgba(37,211,102,0.4), transparent);
    z-index: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
    &::before { display: none; }
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
    padding: 1.25rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    gap: 1.25rem;
    &:last-child { border-bottom: none; }
  }
`;

const StepNum = styled.div`
  width: 56px; height: 56px;
  border-radius: 50%;
  background: rgba(37,211,102,0.12);
  border: 1.5px solid rgba(37,211,102,0.35);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.25rem; margin-bottom: 1.25rem; flex-shrink: 0;

  @media (max-width: 768px) { margin-bottom: 0; }
`;

const StepTitle = styled.h3`
  font-size: 0.9rem; font-weight: 700; color: #ffffff; margin-bottom: 0.4rem;
`;

const StepDesc = styled.p`
  font-size: 0.78rem; color: rgba(255,255,255,0.45); line-height: 1.6;
`;

const Arrow = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const STEPS = [
  { icon: '🔍', title: 'Discovery', desc: 'We learn your business, goals, and target audience in depth.' },
  { icon: '📋', title: 'Strategy', desc: 'Custom digital roadmap built around your exact budget and timeline.' },
  { icon: '⚙️', title: 'Build', desc: 'Design, develop, and set up every asset with precision.' },
  { icon: '🚀', title: 'Launch', desc: 'Go live with full QA, speed optimization, and SEO baseline.' },
  { icon: '📈', title: 'Grow', desc: 'Monthly reports, ongoing optimizations, and continuous improvement.' },
];

export default function Process() {
  return (
    <Section id="process">
      <Container>
        <SectionLabel>How We Work</SectionLabel>
        <SectionTitle>A clear process from day one</SectionTitle>
        <SectionSub>No guesswork. You know exactly what's happening at every stage.</SectionSub>
        <Steps>
          {STEPS.map((s, i) => (
            <Step key={s.title}>
              <StepNum>{s.icon}</StepNum>
              <div>
                <StepTitle>{String(i + 1).padStart(2, '0')} — {s.title}</StepTitle>
                <StepDesc>{s.desc}</StepDesc>
              </div>
            </Step>
          ))}
        </Steps>
      </Container>
    </Section>
  );
}
