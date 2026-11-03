/** Single source of truth for personal details shown across the site. */
export const profile = {
  name: "Hitesh Gupta",
  role: "Software engineer",
  location: "Bengaluru, IN",
  bio: "I architect and design distributed backend systems, building them with Java and Spring Boot. I work with AWS and Python, and build LLM‑powered products on top of model APIs.",
  /** Search and social snippet; kept under ~155 characters so it isn't cut off. */
  description:
    "Software engineer building distributed backend systems with Java, Spring Boot and AWS, and LLM-powered products on model APIs.",
  skills: ["Java", "Spring Boot", "AWS", "Python", "Distributed systems", "LLM applications"],
  url: "https://hiteshgupta.pages.dev",
  email: "hiteshgupta.swe@gmail.com",
  links: {
    github: "https://github.com/hiteshgupta1127",
    linkedin: "https://www.linkedin.com/in/hiteshgupta1127",
  },
  /** Static on purpose: the page is prerendered, so no runtime clock. */
  copyrightYear: 2026,
} as const;
