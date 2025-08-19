# My Portfolio

A single-page portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**, showcasing my work, experience, and contact information.

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── assets/                  # Static files (images, icons)
│       ├── profile.jpg
│       └── project1.png
│
├── src/
│   ├── assets/                  # Imported images/files
│
│   ├── components/              # Global reusable components
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Footer.tsx           # Footer section
│   │   └── SectionWrapper.tsx   # Wrapper for consistent section layout
│
│   ├── sections/                # Main sections (each with section-specific components)
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── HeroText.tsx
│   │   │
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── SkillsList.tsx
│   │   │
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   └── ProjectCard.tsx
│   │   │
│   │   ├── Experience/
│   │   │   ├── Experience.tsx
│   │   │   └── TimelineItem.tsx
│   │   │
│   │   └── Contact/
│   │       ├── Contact.tsx
│   │       └── ContactForm.tsx
│
│   ├── constants/               # Static data used in sections
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── socials.ts
│
│   ├── App.tsx                  # Main app layout combining all sections
│   ├── main.tsx                 # React DOM entry point
│   └── index.css                # Tailwind CSS imports + custom styles
│
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project metadata and dependencies
└── README.md                    # Documentation
```

---

## 🚀 Features

* **Responsive design** using Tailwind CSS
* Smooth scrolling between sections
* Modular structure with reusable and section-specific components
* Built with **TypeScript** for type safety and scalability
* Easy to maintain and extend

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/my-portfolio.git

# Navigate into the project
cd my-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🛠 Technologies Used

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)

---

## 📌 Folder Guidelines

* **components/** → Global reusable UI parts
* **sections/** → Main website sections with their own local components
* **constants/** → Centralized static data (projects, experience, social links)
* **assets/** → Images, icons, or files imported inside components
* **public/assets/** → Static files served directly without import

---

## 📄 License

This project is licensed under the MIT License.
