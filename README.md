# EASA — Education Africa Social Architecture

The official website for the Education Africa Social Architecture (EASA) programme — a charity initiative that designs and builds Early Childhood Development centres in rural Limpopo, South Africa, with university architecture students. This site serves as a fundraising and awareness tool for donors, corporate partners, university stakeholders, and the general public.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Package Manager:** pnpm

## Running Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

1. Push the repository to GitHub
2. Connect the repo to Vercel via the Vercel dashboard (Import from GitHub)
3. Vercel auto-deploys on every push to `main` — no additional configuration needed

## Project Structure

```
src/
  app/                  # Next.js App Router pages
    page.tsx            # Homepage
    about/page.tsx      # About the Programme
    mesela/page.tsx     # Mesela 2026 (current project)
    get-involved/page.tsx # Get Involved / Donate
    gallery/page.tsx    # Photo gallery
  components/           # Reusable UI components
    Navbar.tsx          # Sticky navigation
    Footer.tsx          # Site footer
    Hero.tsx            # Full-width hero sections
    SectionHeading.tsx  # Consistent section titles
    Timeline.tsx        # Programme history timeline
    StatCounter.tsx     # Animated impact stats
    BudgetTable.tsx     # Project budget breakdown
    FundraisingChart.tsx # Donut chart for funding sources
    StepByStep.tsx      # "How It Works" process visual
    PartnerCard.tsx     # Organisation cards
    ContactForm.tsx     # Contact form
    AccordionSection.tsx # Expandable content sections
public/
  images/               # Project photography (placeholders for now)
```
