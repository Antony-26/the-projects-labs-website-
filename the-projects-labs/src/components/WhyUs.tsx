import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #0D1B2A;
  padding: 5rem 1.25rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -150px; right: -150px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(37,211,102,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const SectionLabel = styled.p`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #25D366;
  margin-bottom: 0.6rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.4rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const SectionText = styled.p`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ChatBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #25D366;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.8rem 1.75rem;
  border-radius: 999px;
  box-shadow: 0 4px 20px rgba(37,211,102,0.3);
  transition: all 0.2s;

  &:hover { background: #1BA84E; transform: translateY(-2px); }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DiffCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 1.1rem 1.25rem;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(37,211,102,0.25);
    background: rgba(37,211,102,0.04);
  }
`;

const CheckIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(37,211,102,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #25D366;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 1px;
`;

const DiffTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.2rem;
`;

const DiffDesc = styled.p`
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.6;
`;

const DIFFERENTIATORS = [
  { title: 'Tailored for Small Teams', desc: 'We optimize every rupee/dollar of your budget — no wasted spend on tactics that only work for large enterprises.' },
  { title: 'Sustainable Growth', desc: 'We focus on long-term digital assets, not just temporary ad hacks that disappear the moment you pause spending.' },
  { title: 'Dual Market Expertise', desc: 'Proven experience capturing both Indian and global audiences — we know what works in each market.' },
  { title: '100% Transparency', desc: "Clear, jargon-free monthly reports so you know exactly what's working and where every rupee went." },
];

export default function WhyUs() {
  return (
    <Section id="why-us">
      <Container>
        <div>
          <SectionLabel>Why Choose Us</SectionLabel>
          <SectionTitle>Your Small Business Digital Partner</SectionTitle>
          <SectionText>
            We are a lean, agile team dedicated to helping other small businesses succeed online. Unlike massive agencies that pass you off to interns, we provide personal attention, transparent communication, and strategies built around your exact budget.
          </SectionText>
          <ChatBtn href="https://wa.me/919488569079" target="_blank" rel="noopener noreferrer">
            Let&apos;s Talk →
          </ChatBtn>
        </div>
        <Right>
          {DIFFERENTIATORS.map((d) => (
            <DiffCard key={d.title}>
              <CheckIcon>✓</CheckIcon>
              <div>
                <DiffTitle>{d.title}</DiffTitle>
                <DiffDesc>{d.desc}</DiffDesc>
              </div>
            </DiffCard>
          ))}
        </Right>
      </Container>
    </Section>
  );
}
