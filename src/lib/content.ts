export const SITE = {
  name: "THE SHRIKS",
  domain: "theshriks.space",
  founded: "22 FEBRUARY",
  version: "v1.0",
  email: "transmission@theshriks.space",
};

export type NavKind = "anchor" | "route";
export const NAV: { href: string; label: string; index: string; kind: NavKind }[] = [
  { href: "#arrival", label: "Arrival", index: "01", kind: "anchor" },
  { href: "#overview", label: "Overview", index: "02", kind: "anchor" },
  { href: "#fleet", label: "Fleet", index: "03", kind: "anchor" },
  { href: "#commanders", label: "Commanders", index: "04", kind: "anchor" },
  { href: "#broadcast", label: "The Manifest", index: "05", kind: "anchor" },
  { href: "#transmit", label: "Transmit", index: "06", kind: "anchor" },
  { href: "#the-shriks", label: "The Shriks", index: "07", kind: "anchor" },
];

export const PAGES: Record<string, { index: string; codename: string; status: string }> = {
  arrival: { index: "01", codename: "ARRIVAL", status: "MOTHERSHIP NOMINAL" },
  typescape: { index: "01·X", codename: "INTERMISSION", status: "TYPE STUDY" },
  overview: { index: "02", codename: "BRIEFING", status: "SIGNAL CLEAR" },
  fleet: { index: "03", codename: "THE FLEET", status: "1 / 3 ARRIVED" },
  commanders: { index: "04", codename: "COMMANDERS' BRIDGE", status: "TWO SEATED" },
  broadcast: { index: "05", codename: "THE MANIFEST", status: "PLAYBACK SIGNAL ACTIVE" },
  transmit: { index: "06", codename: "TRANSMIT", status: "CHANNEL OPEN" },
  "the-shriks": { index: "07", codename: "THE SHRIKS", status: "PLAYBACK" },
  "ship-lokiai": { index: "SHIP·I", codename: "LOKIAI HANGAR", status: "LIVE · IN BUILD" },
  "ship-classified": { index: "SHIP·?", codename: "CLASSIFIED HANGAR", status: "NOT YET ARRIVED" },
};

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/the-shriks-041a15417/", platform: "linkedin" },
  { label: "@TheShriks", href: "https://x.com/TheShriks", platform: "x" },
  { label: "@times.theshriks", href: "https://www.instagram.com/times.theshriks/", platform: "instagram" },
  { label: "@lokiai.theshriks", href: "https://www.instagram.com/lokiai.theshriks/", platform: "instagram" },
  { label: "@the.shriks", href: "https://www.instagram.com/the.shriks/", platform: "instagram" },
  { label: "@thats.enough.loki", href: "https://www.instagram.com/thats.enough.loki/", platform: "instagram" },
  { label: "@The-Shriks", href: "https://github.com/The-Shriks", platform: "github" },
  { label: "u/ShrishLoki", href: "https://www.reddit.com/user/ShrishLoki/", platform: "reddit" },
];

export const SERVICES = [
  { id: "I", title: "Custom Software Engineering", body: "Production-grade full-stack systems for funded ventures. Architecture-first, delivered to deployment — not prototyped and abandoned." },
  { id: "II", title: "AI / ML Systems", body: "Multi-agent orchestration, model pipeline architecture, edge-inference deployment, and applied AI tooling at production scale." },
  { id: "III", title: "Cloud & Platform Engineering", body: "Scalable cloud architecture, CI/CD automation, container orchestration, and production-grade infrastructure built for zero-downtime delivery." },
  { id: "IV", title: "Blockchain Engineering", body: "Smart contract development, decentralised protocol architecture, and on-chain systems engineering." },
  { id: "V", title: "Content & Media Production", body: "Strategic UGC, brand editorial, technical breakdowns, and creator-format content — engineered for reach and produced to cinematic standard." },
  { id: "VI", title: "Cinematic Production", body: "AI-driven cinematic video, brand films, and trailer-format launch sequences — held to the same precision standard as the engineering." },
];

export const CHANNELS = [
  { k: "01", label: "FOUNDER", platform: "Instagram · Public", body: "The personal channel of the founding Commander. Craft process, editorial work, and unfiltered perspective." },
  { k: "02", label: "THE SHRIKS", platform: "Instagram · Primary", body: "The official venture account. Brand films, product launches, fleet arrival sequences, and cinematic releases." },
  { k: "03", label: "LOKIAI", platform: "Instagram · Product", body: "Dedicated signal channel for Ship I. Development progress, live demonstrations, and technical milestones." },
  { k: "04", label: "TIMES.THESHRIKS", platform: "Content · Editorial", body: "The editorial and UGC arm. Technical breakdowns, build documentation, tool reviews, and creator-format content." },
];

export const FAQS = [
  { q: "What is THE SHRIKS?", a: "An independent deep technology venture operating as two unified divisions: external engineering services for funded ventures and an internally developed product line — both governed by the same production standard." },
  { q: "Who leads the venture?", a: "Two Commanders at equal rank. Shrusti leads frontend development, AI-driven cinematic production, and creative direction. Laukik leads engineering, systems architecture, and platform delivery. There is no hierarchy between them." },
  { q: "Where is THE SHRIKS based?", a: "India. All engagements are delivered remotely. Geography does not constrain the scope or standard of the work." },
  { q: "What is the fleet?", a: "The venture operates as a mothership. Each product shipped is a distinct vessel within its fleet, arriving with its own launch sequence, its own visual identity, and its own technical architecture. LokiAI is Ship I." },
  { q: "Why monochrome?", a: "Visual restraint enforces consistency across every medium and format. The single green accent is reserved exclusively for LokiAI — it is a product signal, not a brand colour." },
  { q: "What do the masks represent?", a: "Parity. Both Commanders wear the same mask — a uniform, not a disguise. The work and the venture precede individual visibility." },
  { q: "Does THE SHRIKS accept external engagements?", a: "The venture remains actively available for client work alongside its in-house product line. Enquiries are received through the Transmit channel." },
  { q: "What is the current status of LokiAI?", a: "The announcement trailer has been released. The platform is in active development. The Mobius autonomous agent system and a free-tier desktop configuration are part of the current build." },
];

export type FleetShip = {
  id: string;
  slug: string;
  codename: string;
  name: string;
  status: string;
  statusKind: "live" | "planned";
  tagline: string;
  summary: string;
  arrival: string;
  href: string;
};

export const FLEET: FleetShip[] = [
  {
    id: "I",
    slug: "lokiai",
    codename: "LOKIAI",
    name: "LokiAI",
    status: "LIVE — TRAILER RELEASED · PLATFORM IN BUILD",
    statusKind: "live",
    tagline: "Local AI. Any device. No cloud.",
    summary: "LokiAI deploys AI models directly onto Android devices — no cloud, no latency, no ongoing API costs. Runs locally forever.",
    arrival: "26·06",
    href: "/fleet/lokiai",
  },
  {
    id: "II",
    slug: "classified-ii",
    codename: "CLASSIFIED",
    name: "Ship II",
    status: "PLANNED — NEXT IN ROTATION",
    statusKind: "planned",
    tagline: "Hull in design.",
    summary: "Second vessel in the fleet. Distinct architecture, distinct arrival, same command signature.",
    arrival: "—",
    href: "/fleet/classified-ii",
  },
  {
    id: "III",
    slug: "classified-iii",
    codename: "CLASSIFIED",
    name: "Ship III",
    status: "PLANNED",
    statusKind: "planned",
    tagline: "Trajectory pending.",
    summary: "Third vessel. Format repeats. Visual and narrative continuity across the fleet is the point.",
    arrival: "—",
    href: "/fleet/classified-iii",
  },
];

export const LOKIAI = {
  positioning: "Kubernetes for edge AI",
  description: "A hardware-plus-ML platform that enables local and tiny-model orchestration on edge devices through an agent-based workflow.",
  stack: [
    { k: "Architecture", v: "Next.js 14 · Multi-agent pipeline" },
    { k: "Workers", v: "Python worker system" },
    { k: "Acceleration", v: "NVIDIA NIM" },
    { k: "Targets", v: "IoT · Robotics · Drones · Vehicles · Industrial" },
    { k: "Free Tier", v: "RTX 3050 / 2050 / CPU-only" },
    { k: "Status", v: "Trailer released · Platform in active build" },
  ],
  capabilities: [
    "Multi-agent orchestration across heterogeneous edge nodes.",
    "Tiny-model routing — the right model on the right device for the job.",
    "Dual-key NVIDIA NIM failover for free-tier desktop use.",
    "Persistent agent identity with autonomous failure recovery.",
  ],
  mobius: {
    title: "MOBIUS",
    role: "Autonomous ML Agent",
    body: "Governed by three system-prompt files totalling roughly seven thousand nine hundred words. Identity. ML lifecycle. Autonomy and recovery behaviour — how failure states resume without human intervention.",
    stats: [
      { k: "Files", v: "03" },
      { k: "Words", v: "≈ 7,900" },
      { k: "Domains", v: "Identity · Lifecycle · Recovery" },
    ],
  },
};

export const COMMANDERS = [
  {
    rank: "FOUNDER",
    name: "SHRUSTI",
    role: "Frontend · AI · Creative Direction",
    body: "Leads frontend development, AI-driven cinematic production, and creative direction across product and brand. Architects the interface layer users interact with, directs AI video production from prompt engineering through post, and governs the visual identity of every asset the venture publishes.",
  },
  {
    rank: "FOUNDER",
    name: "LAUKIK",
    role: "AI ENGINEER · BLOCKCHAIN DEVELOPER · SYSTEM ARCHITECTURE",
    body: "Leads full-stack engineering and systems architecture. AI/ML pipelines, blockchain infrastructure, cloud platforms, and production delivery. Primary architect of LokiAI — from multi-agent orchestration to the autonomous ML agent system that powers it.",
  },
];

export const PRINCIPLES = [
  { n: "I", title: "Worth building.", body: "Not technically interesting for its own sake. Worth building — solving a real problem for real users." },
  { n: "II", title: "Revolutionary, not incremental.", body: "Where the work allows it. Help people. Move the category forward. Do not ship competent software for its own sake." },
  { n: "III", title: "Detailing is the brand.", body: "Stroke-angle wordmark construction. Logarithmic audio fade curves. Documented agent-system workarounds. Evidence, not slogans." },
  { n: "IV", title: "Precision in communication.", body: "Exam-ready internally. No emoji and a professional flowing tone externally. Low filler everywhere." },
  { n: "V", title: "Open to partnership.", body: "Active venture for hire alongside the in-house product line. Based in India, working remotely with clients anywhere. Standard venture practice on growth, funding, and partnerships." },
];

export const MANIFEST_BODY = {
  origin: {
    title: "Origin",
    body: "Founded on the twenty-second of February. The date is the founder's birthday — a deliberate choice that ties the company's origin to his own. The venture is not a side project pursued in the abstract. It is the vehicle.",
  },
  universe: {
    title: "Narrative Universe",
    body: "Two Commanders. One capital-class mothership. A fleet that arrives at a planet — conventionally Earth — to make first contact. Each product the venture ships is a distinct vessel within that fleet, arriving in its own right. A launch is staged as an arrival: unusual activity is observed, then the ship descends into the scene.",
  },
  method: {
    title: "Working Method",
    items: [
      "Architecture before implementation.",
      "Willingness to restart from the ground up when something is structurally broken.",
      "Root-cause debugging over symptom patching.",
      "High-precision prompting as an engineering discipline.",
      "Cinematic work held to the same standard as engineering — including the negative specifications.",
      "Documentation as a first-class deliverable, internally and on client engagements.",
    ],
  },
};
