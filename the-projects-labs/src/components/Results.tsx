import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Section = styled.section`
  background: #ffffff;
  padding: 5rem 1.25rem;
  @media (max-width: 768px) { padding: 4rem 1rem; }
`;

const Container = styled.div`max-width: 1100px; margin: 0 auto;`;

const SectionLabel = styled.p`
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: #25D366; margin-bottom: 0.6rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.4rem); font-weight: 800; color: #0D1B2A;
  letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 0.6rem;
`;

const SectionSub = styled.p`
  font-size: 0.95rem; color: #5A7184; max-width: 500px;
  line-height: 1.7; margin-bottom: 2.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 3.5rem;
  @media (max-width: 480px) { gap: 0.75rem; }
`;

const StatCard = styled.div`
  background: #0D1B2A; border-radius: 14px;
  padding: 1.75rem 1.25rem; text-align: center;
`;

const StatNum = styled.div`
  font-size: clamp(1.75rem, 5vw, 2.75rem); font-weight: 800;
  color: #25D366; letter-spacing: -0.03em; line-height: 1; margin-bottom: 0.6rem;
`;

const StatLabel = styled.p`font-size: 0.78rem; color: rgba(255,255,255,0.55); line-height: 1.5;`;

const ChartsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;

const ChartCard = styled.div`
  background: #F5F7FA; border-radius: 16px;
  border: 1px solid #E2EAF0; padding: 1.5rem;
`;

const ChartTitle = styled.p`
  font-size: 0.82rem; font-weight: 700; color: #0D1B2A;
  margin-bottom: 0.25rem;
`;

const ChartSub = styled.p`font-size: 0.72rem; color: #5A7184; margin-bottom: 1.25rem;`;

const TestimonialsTitle = styled.h3`
  font-size: 1.35rem; font-weight: 700; color: #0D1B2A;
  margin-bottom: 1.5rem; letter-spacing: -0.01em;
`;

const TestiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 1rem;
`;

const TestiCard = styled.div`
  background: #F5F7FA; border-radius: 16px;
  padding: 1.5rem; border: 1px solid #E2EAF0; position: relative;
  &::before {
    content: '"'; position: absolute; top: 0.75rem; right: 1.25rem;
    font-size: 3.5rem; color: #E2EAF0; font-family: Georgia, serif; line-height: 1;
  }
`;

const Quote = styled.p`
  font-size: 0.875rem; color: #2C3E50; line-height: 1.75;
  margin-bottom: 1.25rem; font-style: italic; padding-right: 1rem;
`;

const Author = styled.div`display: flex; align-items: center; gap: 0.75rem;`;

const Avatar = styled.div`
  width: 38px; height: 38px; border-radius: 50%;
  background: linear-gradient(135deg, #0D1B2A, #1A2E42);
  display: flex; align-items: center; justify-content: center;
  color: #25D366; font-weight: 700; font-size: 0.8rem; flex-shrink: 0;
`;

const AuthorName = styled.p`font-size: 0.875rem; font-weight: 700; color: #0D1B2A;`;
const AuthorRole = styled.p`font-size: 0.75rem; color: #5A7184;`;

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

const trafficData = [
  { month: 'Jan', visits: 420 }, { month: 'Feb', visits: 580 },
  { month: 'Mar', visits: 720 }, { month: 'Apr', visits: 890 },
  { month: 'May', visits: 1050 }, { month: 'Jun', visits: 1420 },
];

const socialData = [
  { platform: 'IG', before: 800, after: 4200 },
  { platform: 'FB', before: 600, after: 2800 },
  { platform: 'LI', before: 300, after: 1600 },
];

const STATS = [
  { num: 150, suffix: '%', label: 'Average increase in website traffic within 6 months' },
  { num: 1, suffix: ' Page', label: 'Google rankings for competitive local keywords', prefix: 'Page' },
  { num: 5, suffix: '×', label: 'Average growth across client social media channels' },
  { num: 50, suffix: '+', label: 'Small businesses helped across India and worldwide' },
];

const TESTIMONIALS = [
  { quote: 'The Projects Labs built our website and optimized our SEO. Our incoming leads increased by 3x in just 4 months!', name: 'Rajesh Sharma', role: 'Owner, Local Business, Delhi', initials: 'RS' },
  { quote: "Finally a digital agency that actually explains what they're doing. Transparent, responsive, and results-driven.", name: 'Priya Mehta', role: 'Founder, Boutique Retail, Mumbai', initials: 'PM' },
  { quote: "Our Google Business Profile was invisible before. Now we rank in the local map pack for our top keywords.", name: 'Amit Verma', role: 'Owner, Services Business, Bangalore', initials: 'AV' },
];

function AnimatedStat({ num, suffix, prefix, label }: { num: number, suffix: string, prefix?: string, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(num, 1600, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <StatCard ref={ref}>
      <StatNum>{prefix ? prefix : ''}{prefix ? ' ' : ''}{count}{suffix}</StatNum>
      <StatLabel>{label}</StatLabel>
    </StatCard>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#0D1B2A', padding: '8px 12px', borderRadius: 8, fontSize: '0.78rem', color: '#fff' }}>
        <p style={{ color: '#25D366', fontWeight: 700 }}>{label}</p>
        {payload.map((p: any) => (
          <p key={p.name}>{p.name}: <strong>{p.value.toLocaleString()}</strong></p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Results() {
  return (
    <Section id="results">
      <Container>
        <SectionLabel>Our Results</SectionLabel>
        <SectionTitle>Numbers that speak for themselves</SectionTitle>
        <SectionSub>Real outcomes for real small businesses. No vanity metrics — just growth that matters.</SectionSub>

        <StatsGrid>
          {STATS.map((s) => (
            <AnimatedStat key={s.label} num={s.num} suffix={s.suffix} prefix={s.prefix} label={s.label} />
          ))}
        </StatsGrid>

        <ChartsRow>
          <ChartCard>
            <ChartTitle>Website Traffic Growth</ChartTitle>
            <ChartSub>Monthly visits — typical client after 6 months</ChartSub>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={trafficData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="trafficGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#25D366" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#25D366" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2EAF0" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#5A7184' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#5A7184' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="visits" name="Visits" stroke="#25D366" strokeWidth={2.5} fill="url(#trafficGrad)" dot={{ fill: '#25D366', r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard>
            <ChartTitle>Social Media Growth</ChartTitle>
            <ChartSub>Followers before vs after — avg. client at 6 months</ChartSub>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={socialData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2EAF0" />
                <XAxis dataKey="platform" tick={{ fontSize: 11, fill: '#5A7184' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#5A7184' }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="before" name="Before" fill="#E2EAF0" radius={[4,4,0,0]} />
                <Bar dataKey="after" name="After" fill="#25D366" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </ChartsRow>

        <TestimonialsTitle>What our clients say</TestimonialsTitle>
        <TestiGrid>
          {TESTIMONIALS.map((t) => (
            <TestiCard key={t.name}>
              <Quote>{t.quote}</Quote>
              <Author>
                <Avatar>{t.initials}</Avatar>
                <div>
                  <AuthorName>{t.name}</AuthorName>
                  <AuthorRole>{t.role}</AuthorRole>
                </div>
              </Author>
            </TestiCard>
          ))}
        </TestiGrid>
      </Container>
    </Section>
  );
}
