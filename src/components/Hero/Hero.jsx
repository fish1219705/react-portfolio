import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Hi, I am Peiyu Han.
      </h1>
      <p className="hero-subtitle">
        I build simple, clean websites.
      </p>
      <a href="#work" className="hero-cta">See My Work</a>
    </section>
  );
}
