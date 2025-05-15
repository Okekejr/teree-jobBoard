# 🌲 TreeJobs — Your Gateway to Blockchain Careers

TreeJobs is a modern, visually striking Web3 job board focused on showcasing career opportunities at crypto and blockchain startups across the Americas, primarily targeting Seed to Series A companies. Built with a blend of cutting-edge tools like Next.js, Chakra UI, Framer Motion, React Three Fiber, and **Sanity CMS**, TreeJobs aims to connect top talent with high-potential early-stage Web3 teams.

---

## 🚀 Live Demo

[https://treejobs.vercel.app](https://teree-job-board.vercel.app) <!-- Replace with actual link -->

---

## 🧩 Features

- 🔍 **Curated Web3 Jobs** — Focused on startups that are Seed to Series A stage.
- 🌐 **Beautiful Landing Page** — Built with Chakra UI, GSAP, and Framer Motion animations.
- 🧠 **3D Visuals** — Uses React Three Fiber to render interactive 3D orbs and scenes.
- 🧾 **Content Management** — Static site content is powered by **Sanity CMS**, enabling easy updates to marketing text and section descriptions without code changes.
- 💼 **Featured Companies Section** — Highlights top blockchain companies and their career pages.
- 📱 **Responsive Design** — Fully responsive and optimized for mobile devices.

---

## 🛠️ Tech Stack

| Category        | Technologies |
|----------------|--------------|
| Frontend       | Next.js, React, TypeScript |
| UI Framework   | Chakra UI |
| Animations     | GSAP, Framer Motion |
| 3D Graphics    | React Three Fiber |
| CMS            | **Sanity.io** (for static site text) |
| Hosting        | Vercel |
| Backend Jobs Scraper | Python + PostgreSQL (planned) |

---

## 📦 New Update: Sanity CMS Integration

### ✅ What Changed
TreeJobs now integrates **Sanity CMS** to manage static text content across the landing page, such as:

- Hero section headings and subheadings  
- About section content  
- Value proposition texts  
- Featured company descriptions  
- Any other marketing-related static content

### 🔧 Why This Matters

- **Non-technical team members** can update content without touching code.
- **Faster iteration** on marketing copy and SEO improvements.
- Supports **real-time previewing** and structured content types.

### 🧠 How It Works

- Content is authored and stored in Sanity Studio.
- The frontend uses Sanity's GROQ API to fetch the content during static site generation (SSG) or ISR (Incremental Static Regeneration).
- Types are generated with `@sanity-codegen/types` or defined manually for safer TypeScript integration.

---

## 🧰 Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint the code
npm run lint
