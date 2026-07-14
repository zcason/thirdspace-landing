import React from "react";
import { AppStoreBadge } from "@/components/shared/AppStoreBadge";

/**
 * UrgencySection Component
 * Final call-to-action section with urgency messaging
 */
export function UrgencySection() {
  const marquee = "Find a place · Go for a while · Come back tomorrow · ";

  return (
    <section className="closing" aria-labelledby="closing-title">
      <div className="closing__marquee" aria-hidden="true">
        <div className="closing__track">
          <span>{marquee}</span>
          <span>{marquee}</span>
        </div>
      </div>
      <div className="page-frame closing__statement">
        <div>
          <p className="section-label">Your next place is closer than it feels</p>
          <h2 id="closing-title">Make leaving home the easy part.</h2>
        </div>
        <div className="closing__action">
          <p>Choose the feeling, see what’s nearby, and start an offline routine.</p>
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}
