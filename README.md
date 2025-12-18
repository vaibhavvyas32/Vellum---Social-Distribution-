<img width="1367" height="713" alt="image" src="https://github.com/user-attachments/assets/54b06154-7bec-4d1b-afa6-8a6294ff1fd0" />

# ⚪️ Vellum

**The next-generation social distribution engine.** *One interface. 12 platforms. Zero friction.*

**[View the Canvas](https://github.com/vaibhavvyas32/Vellum---Social-Distribution-)** | **[Documentation](https://www.google.com/search?q=%23-features-breakdown)** | **[Design System](https://www.google.com/search?q=%23-visual-philosophy)**

---

## 📖 Overview

**Vellum** is a high-performance social media scheduler designed for the "distribution-first" era. Built with a focus on **Neo-minimalist UI** and **Lottie-driven interactions**, Vellum allows creators to treat social media like a physical canvas—scheduling across a dozen platforms simultaneously while maintaining platform-specific nuances.

This project repurposes the sophisticated, grid-heavy design language of Attio to solve the complexity of modern content distribution.

---

## 🎨 Visual Philosophy

The design of Vellum is centered around **high-utility minimalism**.

* **The Bento Grid:** Modular feature sets encapsulated in 1px borders (`#E5E5E5`) with 12px radii.
* **Typography:** Primary use of the **Inter** typeface with tight tracking (-0.04em) for a premium, editorial feel.
* **Whitespace:** Aggressive use of negative space to reduce cognitive load during multi-platform scheduling.
* **Textures:** Subtle 2\% grain overlays and dot-grid backgrounds to simulate the tactile feel of vellum paper.

---

## 🛠 Tech Stack

Designed for speed, reliability, and "smooth-as-paper" transitions.

* **Frontend:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS (Custom Greyscale Palette)
* **Animations:** GSAP + Lottie-Web (60fps vector motion)
* **Typography:** Inter Variable
* **Icons:** Custom stroke-based iconography (1.5px weight)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vaibhavvyas32/Vellum---Social-Distribution-.git
cd Vellum---Social-Distribution-

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_PLATFORM_API_KEY=your_key_here
VELLUM_DB_URL=your_database_url
LOTTIE_ASSET_PATH=/public/animations

```

### 4. Run Development Server

```bash
npm run dev

```

---

## 🧩 Features Breakdown

### 01. The Omni-Post Canvas

A unified composer that intelligently adapts your content for X, Instagram, LinkedIn, Threads, and 8 other platforms simultaneously.

### 02. Smart Scheduling

AI-optimized posting windows visualized through a minimalist sweep-clock Lottie animation, ensuring you hit peak engagement across time zones.

### 03. High-Fidelity Analytics

Bento-style reporting dashboards that prioritize clarity. Track your "Global Reach" through custom-rendered SVG charts.

### 04. Media Optimizer

Automatic resizing and transcoding for platform-specific aspect ratios (9:16, 4:5, 1:1) without leaving the workspace.

---

## 📜 Design Guidelines

To maintain the Vellum aesthetic when contributing:

* **Avoid Color:** Use the greyscale spectrum (#FFFFFF to #0A0A0A).
* **Motion First:** Every state change should have a 0.3s ease-out transition.
* **Grid Fidelity:** All elements must align to the 8px base grid.

---

## 🤝 Contributing

Vellum is a tribute to minimalist design. If you wish to contribute:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/SimpleFeature`)
3. Commit your Changes (`git commit -m 'Add simple feature'`)
4. Push to the Branch (`git push origin feature/SimpleFeature`)
5. Open a Pull Request

---
