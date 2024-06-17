import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__subtitle">Unleash Your Inner Glow</p>
      <h1 className="hero__title">RADIANT BEAUTY</h1>
      <div className="hero__container">
        <div className="hero__overview-container">
          <div className="hero__images-container">
            <div className="hero__first-image"></div>
            <div className="hero__second-image"></div>
          </div>
          <p className="hero__text">
            At Radiant Beauty, we are passionate about providing high-quality,
            cruelty-free beauty products that make you feel radiant inside and
            out.
          </p>
          <h2 className="hero__overview-title">discover the secret to radiant skin</h2>
        </div>
        <div className="hero__image"></div>
      </div>
    </section>
  );
}
