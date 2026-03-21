import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Footprints,
  MapPinned,
  ScanSearch,
  Sparkles,
  Store,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { APP_STORE_URL } from "./constants/config";
import thirdspaceLogo from "./assets/images/thirdspace-logo.png";
import homePageScreenshot from "./assets/screenshots/home-page.png";
import checkInPageScreenshot from "./assets/screenshots/check-in-screen.png";
import explorePageScreenshot from "./assets/screenshots/explore-page.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const principles = [
  {
    icon: Users,
    eyebrow: "Belonging first",
    title: "Real life is the product.",
    body:
      "Thirdspace helps people spend less time orbiting their phones and more time in the places that make a city feel human.",
  },
  {
    icon: Compass,
    eyebrow: "Discovery second",
    title: "Find the right place, not just any place.",
    body:
      "Coffee shops, parks, bookstores, community spaces, quiet corners, lively rooms — discover where your next hour actually belongs.",
  },
  {
    icon: Sparkles,
    eyebrow: "AI in the background",
    title: "A mechanism, not an identity.",
    body:
      "Thirdspace uses intelligence quietly: to narrow the city down to the places that fit your mood, energy, and timing right now.",
  },
];

const howItWorks = [
  {
    icon: Footprints,
    title: "Start with how you want to feel",
    body:
      "Need somewhere social, calm, creative, or restorative? Tell Thirdspace the shape of the moment you want.",
  },
  {
    icon: ScanSearch,
    title: "See places with real-world fit",
    body:
      "Get nearby third places matched to your mood, distance, timing, and what is actually happening around you.",
  },
  {
    icon: MapPinned,
    title: "Go live your life",
    body:
      "Pick a place, head out, and let the app disappear into the background while the city takes over.",
  },
];

const placeTypes = [
  "Neighborhood cafés",
  "Libraries and bookshops",
  "Parks and waterfronts",
  "Studios and creative rooms",
  "Markets and casual hangouts",
  "Community events",
];

const stats = [
  { value: "30 min", label: "to a place worth leaving home for" },
  { value: "3 taps", label: "from mood to destination" },
  { value: "City-scale", label: "discovery built for everyday life" },
];

function StoreButton({ className = "" }) {
  return (
    <a href={APP_STORE_URL} className={`store-button ${className}`.trim()}>
      <span className="store-button__overline">Download on the</span>
      <span className="store-button__label">App Store</span>
      <ArrowRight className="store-button__icon" aria-hidden="true" />
    </a>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <div className="ambient ambient--grid" />

      <header className="site-header">
        <Link to="/" className="brand-mark" aria-label="Thirdspace home">
          <img src={thirdspaceLogo} alt="Thirdspace" className="brand-mark__image" />
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <a href="#principles">Why it matters</a>
          <a href="#how">How it works</a>
          <a href="#app">The app</a>
        </nav>

        <StoreButton className="site-header__cta" />
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <motion.div {...fadeUp} className="eyebrow-pill">
              Built for getting out of the house
            </motion.div>

            <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}>
              A better social life starts with a better place to be.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="hero-copy__lede"
            >
              Thirdspace helps you find the cafés, parks, bookstores, and public rooms that
              make a city feel alive — so you can spend less time deciding where to go and
              more time actually being there.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="hero-actions"
            >
              <StoreButton />
              <a href="#how" className="text-link">
                See how it works
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="hero-proof"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="hero-proof__item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="hero-visual"
          >
            <div className="hero-visual__caption">
              <span>Thirdspace</span>
              <span>Find your next place to belong</span>
            </div>

            <div className="hero-phones">
              <article className="phone-card phone-card--back">
                <img src={checkInPageScreenshot} alt="Thirdspace check-in screen" />
              </article>
              <article className="phone-card phone-card--front">
                <img src={homePageScreenshot} alt="Thirdspace home screen" />
              </article>
              <article className="phone-card phone-card--side">
                <img src={explorePageScreenshot} alt="Thirdspace explore screen" />
              </article>
            </div>

            <div className="hero-note">
              <Store className="hero-note__icon" />
              <p>
                Not another feed. Not another chatbot. Just a sharper way to discover the
                places that make everyday life feel fuller.
              </p>
            </div>
          </motion.div>
        </section>

        <motion.section {...fadeUp} id="principles" className="content-section">
          <div className="section-heading">
            <span className="section-label">Brand foundation</span>
            <h2>Thirdspace is about belonging in public again.</h2>
            <p>
              The app exists to make city life more lived-in: more spontaneous, more social,
              more grounded in real places and real presence.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="editorial-card">
                  <div className="editorial-card__icon-wrap">
                    <Icon className="editorial-card__icon" />
                  </div>
                  <p className="editorial-card__eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="how" className="content-section content-section--split">
          <div className="section-heading section-heading--left">
            <span className="section-label">How it works</span>
            <h2>Designed to get you off your phone quickly.</h2>
            <p>
              The interaction model is intentionally simple: feel something, pick a direction,
              and go. The value is what happens after the tap.
            </p>

            <div className="places-panel">
              <span className="places-panel__label">What you can discover</span>
              <div className="places-list">
                {placeTypes.map((place) => (
                  <span key={place}>{place}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="steps-stack">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="step-card">
                  <div className="step-card__index">0{index + 1}</div>
                  <div className="step-card__body">
                    <div className="step-card__icon-wrap">
                      <Icon className="step-card__icon" />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.section>

        <motion.section {...fadeUp} id="app" className="content-section">
          <div className="app-showcase">
            <div className="app-showcase__copy">
              <span className="section-label">Inside the app</span>
              <h2>Discovery with taste, not noise.</h2>
              <p>
                Thirdspace helps you move from intention to action with a clear, visual browse
                experience. It surfaces the right third places for the moment without turning
                the product into an AI personality.
              </p>
              <ul className="feature-list">
                <li>Browse places by vibe, proximity, and what kind of hour you want.</li>
                <li>Check in and build a living relationship with the city around you.</li>
                <li>Use intelligent recommendations without making intelligence the headline.</li>
              </ul>
            </div>

            <div className="showcase-grid">
              <figure className="showcase-card showcase-card--tall">
                <img src={homePageScreenshot} alt="Thirdspace home interface" />
              </figure>
              <figure className="showcase-card">
                <img src={explorePageScreenshot} alt="Thirdspace place discovery interface" />
              </figure>
              <figure className="showcase-card showcase-card--accent">
                <img src={checkInPageScreenshot} alt="Thirdspace place check-in interface" />
              </figure>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="content-section">
          <div className="manifesto-panel">
            <div>
              <span className="section-label">The idea</span>
              <h2>Technology should make the city easier to enter, not harder to escape.</h2>
            </div>
            <p>
              Thirdspace is for people who want more than efficient consumption of places. It is
              for building rituals, routines, serendipity, and a sense that your city still has
              doors worth walking through.
            </p>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="content-section">
          <div className="cta-panel">
            <div>
              <span className="section-label">Get the app</span>
              <h2>Find your next third place.</h2>
              <p>
                Open the app, pick the energy you want, and head somewhere that makes real life
                feel a little bigger.
              </p>
            </div>
            <StoreButton />
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <Link to="/" className="brand-mark brand-mark--footer" aria-label="Thirdspace home">
          <img src={thirdspaceLogo} alt="Thirdspace" className="brand-mark__image" />
        </Link>

        <nav className="footer-links" aria-label="Footer">
          <Link to="/privacy">Privacy</Link>
          <Link to="/privacy/terms">Terms</Link>
          <Link to="/privacy/security">Security</Link>
          <a href="mailto:hi@jointhirdspace.app">Contact</a>
        </nav>

        <p className="site-footer__copy">© {new Date().getFullYear()} Thirdspace</p>
      </footer>
    </div>
  );
}
