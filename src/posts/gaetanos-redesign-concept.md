---
title: Redesign Concept — Gaetano's Italian (Denver 80211)
description: A quick UX/UI mockup for a local Denver business site using details from their current website.
date: 2026-03-01
---

I picked **Gaetano's Italian** in Highland (near ZIP **80211**) as a redesign candidate.

Their current site has good content, but it feels heavy and scattered on first load (lots of visual/technical weight before the main user actions). I put together a cleaner concept focused on the three things diners usually need fast:

1. **Reserve a table**
2. **Order online**
3. **Find location + hours**

### Source data used from current site

- Brand/name: **Gaetano's Restaurant / Gaetano's Italian**
- Positioning: authentic Italian cuisine with pizza, pasta, catering, dine-in/takeout/delivery
- Neighborhood/address context: **3760 Tejon St, Denver** (from the site content/news section)
- Social presence references: Facebook + Instagram links

---

## Homepage Mockup (HTML/CSS concept)

<style>
  .mockup-shell {
    --bg: #fffaf6;
    --ink: #1c1a1a;
    --muted: #5f5a58;
    --brand: #b72a2a;
    --brand-dark: #861d1d;
    --card: #ffffff;
    --line: #eadfda;
    --accent: #f3d7c2;

    margin: 2rem 0;
    border: 1px solid var(--line);
    border-radius: 16px;
    overflow: hidden;
    background: var(--bg);
    color: var(--ink);
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }

  .mockup-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    background: #fff;
    border-bottom: 1px solid var(--line);
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .mockup-brand {
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .mockup-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    font-size: 0.92rem;
  }

  .mockup-links span { color: var(--muted); }

  .mockup-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    border: 0;
    font-weight: 700;
    background: var(--brand);
    color: #fff;
  }

  .mockup-hero {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }

  .mockup-hero-card,
  .mockup-panel,
  .mockup-mini {
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 14px;
  }

  .mockup-hero-card {
    padding: 1.2rem;
    background: linear-gradient(165deg, #fff, #fff6f2);
  }

  .mockup-kicker {
    display: inline-block;
    background: #ffe9de;
    color: #7e2c2c;
    border: 1px solid #f4c7ae;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .mockup-hero h3 {
    margin: 0 0 0.45rem;
    font-size: 1.4rem;
    line-height: 1.25;
  }

  .mockup-hero p {
    margin: 0;
    color: var(--muted);
    line-height: 1.5;
  }

  .mockup-actions {
    display: flex;
    gap: 0.6rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .mockup-btn {
    padding: 0.55rem 0.8rem;
    border-radius: 10px;
    border: 1px solid var(--line);
    background: #fff;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .mockup-btn.primary {
    background: var(--brand);
    border-color: var(--brand);
    color: #fff;
  }

  .mockup-panel {
    padding: 1rem;
    display: grid;
    gap: 0.7rem;
    align-content: start;
  }

  .mockup-panel h4,
  .mockup-mini h4 {
    margin: 0;
    font-size: 1rem;
  }

  .mockup-hours {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.35rem 0.75rem;
    font-size: 0.9rem;
  }

  .mockup-hours b { font-weight: 700; }

  .mockup-grid {
    padding: 0 1.5rem 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.8rem;
  }

  .mockup-mini {
    padding: 0.9rem;
    background: #fff;
  }

  .mockup-mini p {
    margin: 0.45rem 0 0;
    color: var(--muted);
    font-size: 0.9rem;
  }

  .mockup-footer {
    border-top: 1px solid var(--line);
    background: #fff;
    padding: 0.95rem 1.25rem;
    color: var(--muted);
    font-size: 0.85rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 860px) {
    .mockup-hero { grid-template-columns: 1fr; }
    .mockup-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="mockup-shell" role="img" aria-label="Homepage redesign mockup for Gaetano's Italian">
  <div class="mockup-nav">
    <div class="mockup-brand">GAETANO'S ITALIAN</div>
    <div class="mockup-links">
      <span>Menu</span>
      <span>Reservations</span>
      <span>Catering</span>
      <span>Private Dining</span>
      <span>Contact</span>
    </div>
    <button class="mockup-cta">Order Online</button>
  </div>

  <div class="mockup-hero">
    <section class="mockup-hero-card">
      <span class="mockup-kicker">Since Highland roots</span>
      <h3>Classic Italian, modern online experience.</h3>
      <p>
        Pizza, pasta, and hospitality in the heart of Denver. This concept simplifies the journey
        from "I'm hungry" to "table booked" in under 30 seconds.
      </p>
      <div class="mockup-actions">
        <button class="mockup-btn primary">Reserve a Table</button>
        <button class="mockup-btn">View Dinner Menu</button>
        <button class="mockup-btn">Catering Inquiry</button>
      </div>
    </section>

    <aside class="mockup-panel">
      <h4>Visit Us</h4>
      <p style="margin:0;color:#5f5a58;font-size:0.92rem;">3760 Tejon St, Denver, CO</p>
      <div class="mockup-hours">
        <b>Mon–Thu</b><span>4:00 PM – 9:00 PM</span>
        <b>Fri</b><span>4:00 PM – 10:00 PM</span>
        <b>Sat</b><span>3:00 PM – 10:00 PM</span>
        <b>Sun</b><span>3:00 PM – 9:00 PM</span>
      </div>
      <button class="mockup-btn">Get Directions</button>
    </aside>
  </div>

  <div class="mockup-grid">
    <section class="mockup-mini">
      <h4>Tonight's Focus</h4>
      <p>House-made pasta, wood-fired pizza, and rotating chef specials.</p>
    </section>
    <section class="mockup-mini">
      <h4>For Events</h4>
      <p>Private dining and catering lead forms front-and-center with fast quote workflow.</p>
    </section>
    <section class="mockup-mini">
      <h4>Social Proof</h4>
      <p>Pull latest Instagram/Facebook content into a clean, lightweight feed strip.</p>
    </section>
  </div>

  <div class="mockup-footer">
    <span>Concept redesign for blog showcase • not affiliated with Gaetano's</span>
    <span>Focus: clarity, speed, conversion</span>
  </div>
</div>

---

## Why this direction

- **Action-first hierarchy:** reservation/order/directions are visible immediately.
- **Cleaner information architecture:** menu and event pathways are explicit.
- **Reduced cognitive load:** one visual language, fewer competing components.
- **Mobile-friendly by default:** layout collapses into single-column sections.

If I iterate this further, next step would be a full menu page mockup plus a mobile-first reservation flow.
