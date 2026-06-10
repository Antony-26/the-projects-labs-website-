import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #F5F7FA;
  padding: 5rem 1.25rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
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
  color: #0D1B2A;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin-bottom: 0.6rem;
`;

const SectionSub = styled.p`
  font-size: 0.95rem;
  color: #5A7184;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  text-align: left;
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #E2EAF0;
  box-shadow: 0 4px 24px rgba(13,27,42,0.06);

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: #0D1B2A;
  margin-bottom: 0.2rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1.5px solid #E2EAF0;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #0D1B2A;
  background: #F5F7FA;
  transition: border-color 0.2s, background 0.2s;
  outline: none;
  -webkit-appearance: none;

  &:focus { border-color: #25D366; background: #ffffff; }
  &::placeholder { color: #8FA3B1; }
`;

const SubmitBtn = styled.button`
  background: #25D366;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.95rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(37,211,102,0.3);
  margin-top: 0.25rem;
  width: 100%;

  &:hover { background: #1BA84E; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,211,102,0.4); }
  &:active { transform: translateY(0); }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.75rem 0;
  color: #8FA3B1;
  font-size: 0.8rem;

  &::before, &::after { content: ''; flex: 1; height: 1px; background: #E2EAF0; }
`;

const QuickConnect = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const WhatsAppQuick = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: #25D366;
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(37,211,102,0.3);
  transition: all 0.2s;
  flex: 1;

  &:hover { background: #1BA84E; transform: translateY(-1px); }

  @media (max-width: 480px) { flex: unset; width: 100%; }
`;

const EmailQuick = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: #ffffff;
  color: #0D1B2A;
  border: 1.5px solid #E2EAF0;
  transition: all 0.2s;
  flex: 1;
  word-break: break-all;

  &:hover { border-color: #0D1B2A; }

  @media (max-width: 480px) { flex: unset; width: 100%; }
`;

const SuccessMsg = styled.div`
  background: #E8FAF0;
  border: 1px solid rgba(37,211,102,0.3);
  border-radius: 12px;
  padding: 1.25rem;
  color: #0D6B2F;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.6;
`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', contact: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact">
      <Container>
        <SectionLabel>Get In Touch</SectionLabel>
        <SectionTitle>Ready to Grow Your Business Online?</SectionTitle>
        <SectionSub>Book a free 15-minute digital strategy call. No obligation, just actionable advice.</SectionSub>

        <Form onSubmit={handleSubmit}>
          {submitted ? (
            <SuccessMsg>🎉 Thanks! We&apos;ll be in touch within 24 hours. For faster response, chat with us on WhatsApp.</SuccessMsg>
          ) : (
            <>
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" type="text" placeholder="Rajesh Sharma" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div>
                <Label htmlFor="business">Business Name / Industry</Label>
                <Input id="business" type="text" placeholder="My Shop / Retail" required value={form.business} onChange={e => setForm(f => ({ ...f, business: e.target.value }))} />
              </div>
              <div>
                <Label htmlFor="contact">WhatsApp Number or Email</Label>
                <Input id="contact" type="text" placeholder="+91 98765 43210 or hello@yourbusiness.com" required value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))} />
              </div>
              <SubmitBtn type="submit">Claim My Free Strategy Call →</SubmitBtn>
            </>
          )}
        </Form>

        <Divider>or reach us directly</Divider>

        <QuickConnect>
          <WhatsAppQuick href="https://wa.me/919488569079" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L0 24l6.335-1.519A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.376l-.36-.214-3.732.895.929-3.624-.235-.372A9.818 9.818 0 1112 21.818z"/></svg>
            Click to Chat Now
          </WhatsAppQuick>
          <EmailQuick href="mailto:info@theprojectslabs.com">
            📧 info@theprojectslabs.com
          </EmailQuick>
        </QuickConnect>
      </Container>
    </Section>
  );
}
