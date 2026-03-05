'use client';

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Dialogues from './components/Dialogues';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Dialogues />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
