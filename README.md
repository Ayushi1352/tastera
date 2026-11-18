# Tastera Landing Page

One-page landing page for **Tastera — Restaurant & Dining**, built with Next.js 16, React 19 and Tailwind CSS 3 from the Tastera design. It follows the same project structure as the other landing pages (Haulix, Constrix, Magical Moments): every piece of text, image, icon and link lives in `data/templates.json`, and the components only render it.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx            fonts, metadata (title, description, favicon), header, footer, scroll reveal
  page.tsx              the sections in page order
  globals.css           theme colours (CSS variables)
components/
  common/               Header (bar that turns compact on scroll, menu panel on phones and tablets), Footer
  sections/             Hero, About, Menus, Why Choose Us, Gallery (+ GalleryGrid with photo viewer),
                        Testimonials (+ TestimonialSlider), Contact (+ ReservationForm), FAQ (+ FaqAccordion)
  ui/                   Icon, LineArt (chef's hat, fork and knife, basil drawings), SectionHeading, buttonStyles,
                        sectionSpace, ScrollReveal, FormSuccess, useDummySubmit, useActiveSection, text
data/templates.json     all content (sections and their variants)
types/templates.types.ts
public/images/          photos, logo (dark and white), favicon (WebP / PNG)
```

Each section's `id` in `templates.json` matches a header link (`#about` → `id="about"`). Every "Book a Table" button leads to the reservation form (`#reservation`).

## Images and icons

- **Photos** (`public/images/*.webp`) are plain, full-bleed pictures. Frames and shapes are drawn with CSS on top of them, not baked into the image: the white photo frame (About), the orange arch (Why Choose Us), the orange outlines (Contact, FAQ), rounded corners (menus, gallery) and round guest photos (Testimonials). A new photo only needs to replace the file.
- **Icons** are [react-icons](https://react-icons.github.io/react-icons/) names stored in `templates.json` (`"icon": "LuChefHat"`). A new icon is added once to the list in `components/ui/Icon.tsx`.
- **Line drawings** (the chef's hat and fork and knife in the hero, the faint hat, cutlery and basil behind About, Testimonials, Contact and FAQ) are SVG in `components/ui/LineArt.tsx`. They draw in `currentColor`; the faint ones use `--color-deco-line` from `globals.css`. They show from 1024px up.

## Responsive

Designed for phones, tablets, 1024px and desktop. From 1024px up the root font size follows the 1920px design (`1rem = 100vw / 120`, at most 16px), so a 1920px screen shows the design 1:1 and 1024px shows the same layout, only smaller. Sizes are taken from the 1920px design (1 design pixel = 0.0625rem). Wider than 1920px, the page stays 1920px wide on a dark backdrop.

Every section has the same space above and below its content (`sectionSpace` in `components/ui/sectionSpace.ts`).

## Interactions

- Header: the link of the section on screen is highlighted; the logo scrolls back to the top.
- Gallery photos open in a full-screen viewer (arrows, keyboard and Esc).
- Testimonials are a slider (arrows, dots, autoplay that pauses on hover).
- FAQ: one answer open at a time.
- The reservation form uses a dummy submit (`useDummySubmit`): it shows a sending state and a thank-you message, but nothing is sent anywhere yet.
