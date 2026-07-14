import React from "react";
/**
 * FeatureCard Component
 * Individual feature display card with icon, title, and description
 * 
 * @param {Object} props
 * @param {React.Component} props.icon - Lucide icon component
 * @param {string} props.title - Feature title
 * @param {string} props.desc - Feature description
 * @param {string} props.pill - Badge label
 */
export function FeatureCard({ step, title, desc, screenshot, alt, className }) {
  return (
    <li className={`workflow-card ${className}`}>
      <div className="workflow-card__copy">
        <span className="workflow-card__number" aria-hidden="true">{step}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <figure className="workflow-card__visual">
        <img src={screenshot} alt={alt} loading="lazy" />
      </figure>
    </li>
  );
}
