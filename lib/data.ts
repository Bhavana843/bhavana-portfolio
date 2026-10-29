export const profile = {
  name: "Bhavana Kandikatla",
  firstName: "Bhavana",
  lastName: "Kandikatla",
  role: "QA Engineer",
  company: "Betalectic",
  location: "Hyderabad, India",
  email: "bhavanakandikatla4@gmail.com",
  phone: "+91 6304053635",
  phoneHref: "+916304053635",
  linkedin:
    "https://www.linkedin.com/in/bhavana-kandikatla",
  linkedinLabel: "linkedin.com/in/bhavana-kandikatla",
  resume: "/Bhavana_Kandikatla_Resume.pdf",
  summary:
    "QA Engineer with experience in quality assurance for MF-Stack, a fintech platform supporting mutual fund investments. I plan and execute end-to-end manual testing, prepare test scenarios, test cases and test data, and cover functional, regression, integration, system, smoke, sanity and release testing.",
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const focusAreas = [
  {
    title: "End-to-end quality",
    description:
      "Test planning, scenario design and execution across investor and distributor journeys.",
  },
  {
    title: "Clear defect communication",
    description:
      "Reproducible bug reports with screenshots, logs, severity awareness and retesting through closure.",
  },
  {
    title: "Release confidence",
    description:
      "Functional, regression and API validation across sandbox, staging and production environments.",
  },
] as const;

export const skillGroups = [
  {
    key: "testing",
    title: "Testing & QA",
    items: [
      "Manual testing",
      "Functional testing",
      "Regression testing",
      "Integration testing",
      "System testing",
      "Exploratory testing",
      "Smoke testing",
      "Sanity testing",
      "Release validation",
      "SDLC",
      "STLC",
    ],
  },
  {
    key: "planning",
    title: "Test Planning & Design",
    items: [
      "Test planning",
      "Test scenario preparation",
      "Test case design",
      "Test data preparation",
      "Coverage analysis",
      "Test prioritization",
      "End-to-end workflow validation",
    ],
  },
  {
    key: "api",
    title: "API Testing",
    items: [
      "Postman",
      "REST API testing",
      "Request and response validation",
      "HTTP status codes",
      "Payload validation",
      "Negative scenarios",
      "Error handling",
    ],
  },
  {
    key: "defects",
    title: "Defect Management",
    items: [
      "Bug identification",
      "Defect reporting",
      "Reproduction steps",
      "Severity and priority awareness",
      "Defect tracking",
      "Retesting",
      "Closure",
      "GitHub Issues",
      "Project boards",
    ],
  },
  {
    key: "automation",
    title: "Test Automation",
    items: [
      "Playwright hands-on practice",
      "Automation fundamentals",
      "Identifying stable regression flows",
      "Repeatable regression coverage",
    ],
  },
  {
    key: "tools",
    title: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "MySQL",
      "Browser developer tools",
      "Sentry",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    key: "fintech",
    title: "Fintech Domain",
    items: [
      "Investor onboarding",
      "Distributor onboarding",
      "KYC",
      "OTP and consent flows",
      "SIP",
      "Lumpsum",
      "STP",
      "Switch",
      "Redemption",
      "Mandates",
      "Payments",
      "Folios",
      "Reports",
    ],
  },
  {
    key: "collaboration",
    title: "Collaboration",
    items: [
      "Cross-functional coordination",
      "Client-specific testing",
      "Release readiness support",
      "Progress reporting",
      "Blocker and risk communication",
    ],
  },
] as const;

export const experience = [
  {
    role: "QA Engineer",
    company: "Betalectic",
    period: "September 2025 — Present",
    platform: "MF-Stack",
    summary:
      "Quality assurance for MF-Stack, a fintech platform for mutual fund investments, supporting onboarding and implementation across multiple clients.",
    bullets: [
      "Plan, coordinate and execute QA activities for MF-Stack, a fintech platform for mutual fund investments, supporting onboarding and implementation across multiple clients.",
      "Prepare and execute test scenarios, test cases and test data for end-to-end investor and distributor journeys, including onboarding, KYC, OTP and consent, SIP, lumpsum, STP, switch, redemption, mandates, payments and reporting.",
      "Perform functional, regression, integration, system, smoke, sanity and release testing across sandbox, staging and production environments.",
      "Validate client-specific configurations and workflows to confirm that required functionality behaves as expected before go-live.",
      "Test REST APIs using Postman, checking request and response data, status codes, payloads and error handling for positive and negative scenarios.",
      "Identify, document and track defects with clear reproduction steps, screenshots and relevant logs; retest fixes and coordinate with developers through resolution.",
      "Investigate application behavior using browser developer tools and Sentry logs to help identify and communicate the details of issues.",
      "Review GitHub issues and pull requests, communicate testing status, and flag configuration or credential changes that may affect test execution.",
      "Identify test coverage gaps and organize repeatable regression cases that can support future Playwright automation.",
      "Coordinate testing across concurrent client requirements and communicate daily progress, blockers, risks and expected timelines to relevant stakeholders.",
    ],
  },
] as const;

export const projects = [
  {
    key: "mfstack",
    title: "MF-Stack — Mutual Fund Platform",
    status: "Client platform",
    icon: "landmark",
    description:
      "End-to-end QA for a fintech platform supporting mutual fund investments, spanning investor and distributor onboarding, KYC, OTP and consent, SIP, lumpsum, STP, switch, redemption, mandates, payments, folios and reports.",
    tags: ["Manual QA", "Fintech", "End-to-end testing", "Regression"],
  },
  {
    key: "api",
    title: "REST API Validation with Postman",
    status: "API testing",
    icon: "webhook",
    description:
      "Validated request and response data, HTTP status codes, payloads and error handling across positive and negative scenarios for the MF-Stack platform.",
    tags: ["Postman", "REST APIs", "Payload validation", "Negative testing"],
  },
  {
    key: "playwright",
    title: "Playwright Regression Practice",
    status: "In progress",
    icon: "bot",
    description:
      "Identifying stable, repeatable regression flows and building practical test automation skills with Playwright to support future automated coverage.",
    tags: ["Playwright", "Automation", "Regression flows"],
  },
] as const;

export const education = {
  degree: "B.Tech",
  field: "Electronics and Communication Engineering",
  institution: "Balaji Institute of Technology and Science",
  year: "2024",
  location: "Telangana, India",
} as const;
