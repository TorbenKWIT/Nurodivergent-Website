# CLAUDE.md

This file gives Claude Code context for working on this project. Keep it updated as decisions change.

## Project Overview

Website for **Neurodiversity** (placeholder name — update once finalized), a college club launching in Fall [YEAR]. The club supports and connects neurodivergent students (ADHD, autism, dyslexia, and other forms of neurodivergence) and promotes awareness on campus.

The site needs to serve as the club's public face: what it is, how to join, what's happening, and where to find support resources.

## Goals

- Give prospective members a clear, welcoming first impression
- Make it easy to find and RSVP to events
- Publish a recurring blog/newsletter with low friction (Markdown-based)
- Be genuinely accessible — not just compliant, but comfortable to use for neurodivergent visitors
- Deployable to university web hosting with minimal fuss

## Tech Stack

- **Frontend:** React (recommend Vite for build tooling unless there's a reason to use Next.js — confirm before assuming SSR/routing needs)
- **Content:** Markdown for blog posts and newsletters (e.g. via MDX or a Markdown-parsing library — front matter for title/date/author/tags)
- **Styling:** [TBD — recommend plain CSS/CSS Modules or Tailwind; flag this as an open decision]
- **Hosting:** University web hosting (static file hosting — confirm whether it supports a build step or requires a fully static export)

### Hosting constraints to confirm early
- Does the university host support Node build steps, or only static file upload (HTML/CSS/JS/assets)?
- Is there a subdirectory path (e.g. `university.edu/orgs/neurodiversity/`) rather than a root domain? This affects routing and asset paths.
- File size / storage limits?

## Site Structure

- **Home** — mission statement, quick links to join/events/resources
- **About** — club purpose, leadership, meeting info
- **Blog / Newsletter** — Markdown-based posts, reverse chronological
- **Events** — calendar or list view of upcoming meetings/events
- **Resources** — accommodations info, campus disability services, mental health contacts, external support links
- **Join Us** — member sign-up / interest form
- **Gallery** — photos from events/meetings
- **Contact**

## Accessibility Requirements (Core, Non-Negotiable)

This is a neurodiversity club — the site itself must model good accessible and sensory-friendly design.

- **WCAG 2.1 AA compliance minimum** across all pages
- Full keyboard navigation; visible focus states
- Semantic HTML first; ARIA only to fill real gaps
- Color contrast meets AA ratios; never convey meaning by color alone
- `prefers-reduced-motion` respected — no autoplay animations, parallax, or motion by default
- No autoplaying video/audio
- Calm, uncluttered layouts — generous whitespace, predictable navigation, no flashing/strobing content
- Readable typography: adjustable/legible font sizes, good line height, avoid dense text blocks
- Forms: clear labels, inline validation with plain-language error messages, no time limits on submission
- Alt text required for all images (including gallery photos)
- Test with a screen reader (VoiceOver/NVDA) and keyboard-only navigation before considering any page "done"

## Content Notes

- **Blog/Newsletter posts** live as Markdown files with front matter, e.g.:
  ```md
  ---
  title: "Welcome to Neurodiversity Club"
  date: 2026-09-01
  author: "..."
  tags: ["newsletter"]
  ---
  ```
- **Resources page** content should be reviewed for accuracy (links to campus disability services, crisis lines, etc.) — flag if any info looks outdated or unverified rather than guessing.
- **Sign-up form** — confirm where submissions should go (email, Google Form embed, university system, etc.) before building.

## Open Decisions (fill in as they're made)

- [ ] Final club name
- [x] Styling approach — **Tailwind CSS**
- [x] Vite vs. Next.js — **Vite** (no confirmed need for SSR; matches static-hosting constraint)
- [ ] University hosting: static export or build-step support?
- [ ] Sign-up form backend/destination
- [ ] Event calendar: static list, or synced with an external calendar (Google Calendar embed, etc.)?
- [ ] Color palette / visual identity (consider calm, low-saturation palettes given sensory-friendly goals)

## Conventions

- Prefer functional React components with hooks
- Keep components small and single-purpose
- Co-locate component-specific styles with components
- Write descriptive alt text and ARIA labels as content is added, not as a later pass
- Commit messages: short, present tense (e.g. "Add events page skeleton")

## Out of Scope (for now)

- User authentication / member accounts
- Payment processing
- Real-time chat or forums
