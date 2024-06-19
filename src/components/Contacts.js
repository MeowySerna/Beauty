import React from "react";

export default function Contacts() {
  return (
    <section className="contacts">
      <h2 className="contacts__title">contact us</h2>
      <div className="contacts__text-container">
        <h3 className="contacts__text-title">Get in Touch</h3>
        <p className="contacts__text">
          Have any questions or need assistance? We're here to help! Reach out
          to our customer service team and we'll get back to you as soon as
          possible.
        </p>
      </div>
      <ul className="contacts__list">
        <li>
          <span className="contacts__span-accent">Email </span>
          support@radiantbeauty.com
        </li>
        <li>
          <span className="contacts__span-accent">Phone </span>1-800-RADIANT
        </li>
      </ul>
      <div className="contacts__socials-container">
        <ul className="contacts__socials-list">
          <li>
            <span className="contacts__socials-span">Instagram </span>
            @RadiantBeauty
          </li>
          <li>
            <span className="contacts__socials-span">Facebook </span>
            RadiantBeautyOfficial
          </li>
          <li>
            <span className="contacts__socials-span">Twitter </span>
            @RadiantBeauty
          </li>
        </ul>
      </div>
    </section>
  );
}
