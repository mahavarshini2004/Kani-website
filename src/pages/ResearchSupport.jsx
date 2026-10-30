
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  BookMarked,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Microscope,
  PencilLine,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  UserRound,
  Video,
  WandSparkles,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Research Topic Selection",
    description:
      "Explore and refine a research topic suited to your interests and academic focus.",
    color: "blue",
  },
  {
    icon: ClipboardCheck,
    title: "Proposal and Synopsis Preparation Guidance",
    description:
      "Understand research objectives, problem statements, proposal structure, and synopsis-writing conventions.",
    color: "green",
  },
  {
    icon: BookOpen,
    title: "Literature Review and Research Methodology",
    description:
      "Learn to organise relevant literature, identify research gaps, and understand research methodology.",
    color: "gold",
  },
  {
    icon: GraduationCap,
    title: "Thesis and Dissertation Guidance",
    description:
      "Receive guidance on chapter structure, academic organisation, argument development, and presentation.",
    color: "blue",
  },
  {
    icon: FileText,
    title: "Research Paper Development",
    description:
      "Strengthen the structure, clarity, coherence, and presentation of your research paper.",
    color: "green",
  },
  {
    icon: BookMarked,
    title: "Journal Selection and Publication Guidance",
    description:
      "Understand journal scope, submission requirements, and publication conventions.",
    color: "gold",
  },
  {
    icon: PencilLine,
    title: "Academic Editing, Proofreading, and Referencing",
    description:
      "Improve grammar, academic tone, readability, and referencing accuracy in your own work.",
    color: "blue",
  },
  {
    icon: Video,
    title: "Ph.D. Presentation and Viva Preparation",
    description:
      "Practise presenting your research clearly and preparing responses to academic questions.",
    color: "green",
  },
];

const reasons = [
  {
    icon: GraduationCap,
    title: "Experienced Academic Guidance",
    description: "Guidance from an experienced English academic.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Personalised Support",
    description: "Support tailored to individual research needs.",
    color: "green",
  },
  {
    icon: BookOpen,
    title: "English Literature Specialisation",
    description: "Specialised assistance in English Literature and academic writing.",
    color: "gold",
  },
  {
    icon: Lightbulb,
    title: "Clear Explanations",
    description: "Clear explanations of research concepts and writing conventions.",
    color: "blue",
  },
  {
    icon: Video,
    title: "Flexible Online Guidance",
    description: "Flexible online academic guidance.",
    color: "green",
  },
  {
    icon: ShieldCheck,
    title: "Academic Integrity",
    description: "A focus on quality, originality, and academic integrity.",
    color: "gold",
  },
];

const audiences = [
  { icon: BookOpen, title: "School and College Students", color: "blue" },
  {
    icon: GraduationCap,
    title: "Undergraduate and Postgraduate Learners",
    color: "green",
  },
  {
    icon: UserRound,
    title: "Job Seekers and Working Professionals",
    color: "gold",
  },
  {
    icon: Sparkles,
    title: "Women Seeking Personal and Professional Development",
    color: "blue",
  },
  {
    icon: Microscope,
    title: "M.Phil. and Ph.D. Scholars",
    color: "green",
  },
  {
    icon: FileCheck2,
    title: "Researchers Seeking Academic Writing Support",
    color: "gold",
  },
];

const styles = {
  blue: {
    icon: "bg-[#1769aa]/10 text-[#1769aa] group-hover:bg-[#1769aa] group-hover:text-white",
    border: "hover:border-[#1769aa]/40",
    title: "group-hover:text-[#1769aa]",
    line: "from-[#1769aa] to-[#12366b]",
    glow: "from-[#1769aa]/15 to-transparent",
  },
  green: {
    icon: "bg-[#18823b]/10 text-[#18823b] group-hover:bg-[#18823b] group-hover:text-white",
    border: "hover:border-[#18823b]/40",
    title: "group-hover:text-[#18823b]",
    line: "from-[#18823b] to-[#1769aa]",
    glow: "from-[#18823b]/15 to-transparent",
  },
  gold: {
    icon: "bg-[#d8a52b]/15 text-[#9b7111] group-hover:bg-[#d8a52b] group-hover:text-[#12366b]",
    border: "hover:border-[#d8a52b]/50",
    title: "group-hover:text-[#9b7111]",
    line: "from-[#d8a52b] to-[#18823b]",
    glow: "from-[#d8a52b]/20 to-transparent",
  },
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};



const sectionBackground = {
  backgroundColor: "#fffdf8",
  backgroundImage: `
    linear-gradient(
      120deg,
      rgba(23, 105, 170, 0.12) 0%,
      rgba(255, 253, 248, 0.15) 35%,
      rgba(24, 130, 59, 0.09) 70%,
      rgba(216, 165, 43, 0.10) 100%
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 39px,
      rgba(18, 54, 107, 0.045) 39px,
      rgba(18, 54, 107, 0.045) 40px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 39px,
      rgba(18, 54, 107, 0.045) 39px,
      rgba(18, 54, 107, 0.045) 40px
    )
  `,
};

const whatsappUrl =
  "https://wa.me/919092410132?text=" +
  encodeURIComponent(
    "Hello KANI English Research Academy, I would like to enquire about Research Support Services."
  );

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[#d8a52b]/35 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#12366b]">
        <Sparkles size={14} className="text-[#d8a52b]" />
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#12366b] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#66758a] sm:text-lg">
          {description}
        </p>
      )}

      <div className="mt-6 flex justify-center gap-2">
        <span className="h-1 w-10 rounded-full bg-[#1769aa]" />
        <span className="h-1 w-6 rounded-full bg-[#18823b]" />
        <span className="h-1 w-3 rounded-full bg-[#d8a52b]" />
      </div>
    </motion.div>
  );
}

function ServiceCard({ item, index }) {
  const Icon = item.icon;
  const color = styles[item.color];

  return (
    <motion.article
      variants={reveal}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.015 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#e8e8df] bg-white/90 p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${color.border}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div
        className={`absolute left-0 top-0 h-1 w-0 bg-gradient-to-r ${color.line} transition-all duration-500 group-hover:w-full`}
      />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <motion.div
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${color.icon}`}
          >
            <Icon size={25} />
          </motion.div>
          <span className="text-xs font-bold tracking-widest text-[#66758a]/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3
          className={`text-lg font-bold leading-snug text-[#12366b] transition-colors ${color.title}`}
        >
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#66758a]">
          {item.description}
        </p>

        <div
          className={`mt-6 h-1 w-9 rounded-full bg-gradient-to-r ${color.line} transition-all duration-500 group-hover:w-16`}
        />
      </div>
    </motion.article>
  );
}

function BenefitCard({ item }) {
  const Icon = item.icon;
  const color = styles[item.color];

  return (
    <motion.article
      variants={reveal}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative flex gap-4 overflow-hidden rounded-2xl border border-[#e8e8df] bg-white/85 p-5 transition-all duration-300 hover:shadow-lg ${color.border}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <motion.div
        whileHover={{ rotate: 8, scale: 1.08 }}
        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${color.icon}`}
      >
        <Icon size={22} />
      </motion.div>

      <div className="relative">
        <h3
          className={`font-bold text-[#12366b] transition-colors ${color.title}`}
        >
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#66758a]">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

function AudienceCard({ item }) {
  const Icon = item.icon;
  const color = styles[item.color];

  return (
    <motion.article
      variants={reveal}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -7, scale: 1.015 }}
      className={`group relative min-h-44 overflow-hidden rounded-2xl border border-[#e8e8df] bg-white/90 p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${color.border}`}
    >
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${color.glow} opacity-60 blur-[1px] transition-all duration-500 group-hover:h-48 group-hover:w-48 group-hover:opacity-100`}
      />

      <div
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${color.line} transition-all duration-500 group-hover:w-full`}
      />

      <div className="relative">
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${color.icon}`}
        >
          <Icon size={22} />
        </motion.div>

        <h3
          className={`max-w-xs font-bold leading-6 text-[#12366b] transition-colors ${color.title}`}
        >
          {item.title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function ResearchSupport() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="overflow-hidden text-[#24344d]">
      {/* HERO */}
      <section
        style={sectionBackground}
        className="relative isolate overflow-hidden pt-20 sm:pt-24 lg:pt-28"
      >
        <div className="pointer-events-none absolute -left-28 top-20 -z-10 h-64 w-64 rounded-full bg-[#1769aa]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#18823b]/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:px-10 lg:pb-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={reveal}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#1769aa]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.17em] text-[#1769aa] shadow-sm sm:text-sm"
            >
              <BookMarked size={15} />
              KANI English Research Academy
            </motion.span>

            <motion.h1
              variants={reveal}
              transition={{ duration: 0.7 }}
              className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#12366b] sm:text-5xl lg:text-6xl"
            >
              Research Support{" "}
              <span className="bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b] bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.h2
              variants={reveal}
              className="mt-6 text-xl font-bold leading-snug text-[#24344d] sm:text-2xl"
            >
              Your Research Journey,{" "}
              <span className="text-[#18823b]">
                Our Academic Guidance
              </span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-xl text-base leading-8 text-[#66758a] sm:text-lg"
            >
              Receive personalised academic guidance to strengthen your
              research skills and improve your academic writing.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
            
<a
  href={whatsappUrl}
  target="_blank"
  rel="noreferrer"
  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#12366b] px-6 py-3 font-semibold !text-white shadow-lg shadow-[#12366b]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1769aa] hover:!text-white hover:shadow-xl"
>
  <span className="!text-white">
    Enquire About Research Support
  </span>

  <ArrowRight
    size={18}
    className="!text-white transition-transform duration-300 group-hover:translate-x-1"
  />
</a>

              <a
                href="#our-services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#12366b]/20 bg-white/80 px-6 py-3 font-semibold text-[#12366b] transition-all hover:-translate-y-1 hover:border-[#18823b]/50"
              >
                Explore Our Services <ArrowDown size={17} />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#66758a]"
            >
              {[
                "Personalised guidance",
                "Academic writing support",
                "Research integrity",
              ].map((text) => (
                <span key={text} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#18823b]" />
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated research illustration card */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#1769aa]/20 via-transparent to-[#d8a52b]/25 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/90 p-5 shadow-[0_25px_80px_rgba(18,54,107,.13)] sm:p-7">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[5rem] bg-gradient-to-br from-[#d8a52b]/25 to-transparent" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#66758a]">
                    Academic development
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-[#12366b] sm:text-3xl">
                    Build your research confidence
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1769aa]/10 text-[#1769aa]">
                  <WandSparkles size={24} />
                </div>
              </div>

              <div className="relative mt-7 space-y-3">
                
{[
  {
    icon: Search,
    title: "Explore your research focus",
    description: "Clarify topics, objectives, and direction.",
    color: "blue",
    href: "#our-services",
  },
  {
    icon: BookOpen,
    title: "Strengthen academic writing",
    description: "Develop structure, clarity, and coherence.",
    color: "green",
    href: "#our-services",
  },
  {
    icon: MessageCircle,
    title: "Prepare to present your work",
    description: "Build confidence in explaining your research.",
    color: "gold",
    href: "#our-services",
  },
].map((item, index) => {
  const Icon = item.icon;
  const color = styles[item.color];

  return (
    <motion.a
      key={item.title}
      href={item.href}
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.45 + index * 0.13 }}
      whileHover={{ x: 5 }}
      className="group flex items-center gap-4 rounded-2xl border border-[#e8e8df] bg-[#fffdf8] p-4 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769aa]"
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color.icon}`}
      >
        <Icon size={21} />
      </div>

      <div>
        <p className="font-bold text-[#12366b]">{item.title}</p>
        <p className="mt-1 text-sm leading-6 text-[#66758a]">
          {item.description}
        </p>
      </div>

      <ArrowRight
        size={17}
        className="ml-auto shrink-0 text-[#66758a]/50 transition-all group-hover:translate-x-1 group-hover:text-[#1769aa]"
      />
    </motion.a>
  );
})}

              </div>

              <div className="relative mt-6 flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#12366b] via-[#1769aa] to-[#18823b] p-4 text-white">
                <ShieldCheck size={23} className="shrink-0" />
                <p className="text-sm font-medium leading-6">
                  Guidance that values quality, originality, and academic integrity.
                </p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-4 top-16 hidden rounded-2xl border border-white bg-white p-3 text-[#1769aa] shadow-lg sm:block"
            >
              <FileCheck2 size={25} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -right-3 bottom-16 hidden rounded-2xl border border-white bg-white p-3 text-[#18823b] shadow-lg sm:block"
            >
              <PencilLine size={25} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section id="our-services" style={sectionBackground} className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="How we can help"
            title="Our Research Support Services"
            description="Receive structured academic guidance to strengthen your research skills and communicate your ideas with greater clarity."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((item, index) => (
              <ServiceCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-9 max-w-3xl text-center text-sm leading-7 text-[#66758a]"
          >
            We support researchers through structured guidance, constructive
            feedback, and a strong commitment to academic integrity.
          </motion.p>
        </div>
      </section>

      {/* WHY CHOOSE KANI */}
      <section style={sectionBackground} className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Why KANI"
            title={
              <>
                Why Choose{" "}
                <span className="bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b] bg-clip-text text-transparent">
                  KANI English Research Academy?
                </span>
              </>
            }
            description="Thoughtful, individual-focused guidance designed to support your academic development."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {reasons.map((item) => (
              <BenefitCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO CAN BENEFIT */}
      <section style={sectionBackground} className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Who we support"
            title="Who Can Benefit?"
            description="Our guidance is intended for learners and researchers at different stages of their academic and professional journeys."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {audiences.map((item) => (
              <AudienceCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

    
{/* OUR COMMITMENT — ENHANCED */}
<section
  style={sectionBackground}
  className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32"
>
  {/* Decorative background accents */}
  <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-[#1769aa]/[0.07] blur-3xl" />
  <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#18823b]/[0.07] blur-3xl" />

  <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-10">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative"
    >
      {/* Section label */}
      <div className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/25 bg-white/85 px-4 py-2.5 shadow-sm">
        <ShieldCheck size={16} className="text-[#18823b]" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#18823b]">
          Our Commitment
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-7 max-w-xl text-4xl font-extrabold leading-[1.13] tracking-tight text-[#12366b] sm:text-5xl lg:text-[3.65rem]">
        Your Research.
        <span className="mt-1 block bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b] bg-clip-text pb-1 text-transparent">
          Your Responsibility.
        </span>
      </h2>

      {/* Supporting text */}
      <p className="mt-7 max-w-xl text-base leading-8 text-[#66758a] sm:text-lg sm:leading-9">
        We aim to empower researchers with the knowledge, confidence, and
        academic writing skills needed to conduct and present their
        research effectively.
      </p>

      {/* Supporting principle */}
      <div className="mt-7 flex max-w-xl items-start gap-4">
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#18823b]/10 text-[#18823b]">
          <CheckCircle2 size={19} />
        </div>

        <p className="text-sm leading-7 text-[#66758a] sm:text-base">
          Our approach centres on learning, constructive feedback,
          originality, and responsible academic practice.
        </p>
      </div>

      {/* Decorative divider */}
      <div className="mt-8 flex items-center gap-3" aria-hidden="true">
        <span className="h-[3px] w-14 rounded-full bg-[#1769aa]" />
        <span className="h-[3px] w-8 rounded-full bg-[#18823b]" />
        <span className="h-[3px] w-4 rounded-full bg-[#d8a52b]" />
      </div>
    </motion.div>

    {/* RIGHT INTEGRITY CARD */}
    <motion.div
      initial={{ opacity: 0, x: 35, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Outer glow */}
      <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-[#1769aa]/10 via-transparent to-[#d8a52b]/15 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#d9e4ef] bg-white/90 shadow-[0_22px_70px_rgba(18,54,107,0.08)] backdrop-blur-sm transition-all duration-500 group-hover:border-[#1769aa]/30 group-hover:shadow-[0_28px_80px_rgba(18,54,107,0.13)]">

        {/* Gradient top border */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b]" />

        {/* Soft corner decoration */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-[#1769aa]/10 to-[#18823b]/5 blur-2xl transition-transform duration-700 group-hover:scale-125" />

        <div className="relative p-6 sm:p-9 lg:p-10">

          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            transition={{ duration: 0.25 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#12366b] to-[#1769aa] text-white shadow-lg shadow-[#1769aa]/20"
          >
            <ShieldCheck size={30} strokeWidth={2} />
          </motion.div>

          {/* Card heading */}
          <h3 className="mt-7 text-2xl font-extrabold leading-snug text-[#12366b] sm:text-3xl">
            A commitment to
            <span className="block text-[#1769aa]">
              academic integrity
            </span>
          </h3>

          {/* Card description */}
          <p className="mt-5 text-base leading-8 text-[#66758a]">
            All research remains the responsibility of the researcher.
            Our services provide guidance, feedback, editing, and
            learning support while respecting university regulations
            and research ethics.
          </p>

          {/* Highlighted integrity statement */}
          <div className="relative mt-7 overflow-hidden rounded-2xl border border-[#d8a52b]/40 bg-[#fffdf8] p-5 sm:p-6">
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b] transition-all duration-500 group-hover:w-full" />

            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#18823b]/10 text-[#18823b]">
                <CheckCircle2 size={19} />
              </div>

              <p className="text-sm font-semibold leading-7 text-[#24344d] sm:text-base">
                We help you strengthen your own understanding and work
                while respecting your institution’s requirements and
                research ethics.
              </p>
            </div>
          </div>

          {/* Small footer label */}
          <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#66758a]">
            <span className="h-2 w-2 rounded-full bg-[#18823b]" />
            Guidance with integrity
          </div>
        </div>
      </div>
    </motion.div>

  </div>
</section>


      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#12366b] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(23,105,170,.55),transparent_35%),radial-gradient(circle_at_85%_90%,rgba(24,130,59,.35),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-linear-gradient(0deg,transparent_0px,transparent_39px,rgba(255,255,255,.15)_40px),repeating-linear-gradient(90deg,transparent_0px,transparent_39px,rgba(255,255,255,.12)_40px)]" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl px-5 text-center sm:px-8"
        >
          <motion.div
            animate={{ y: [0, -5, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#f0c75e] backdrop-blur"
          >
            <GraduationCap size={32} />
          </motion.div>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Take the Next Step in Your{" "}
            <span className="bg-gradient-to-r from-[#f0c75e] via-[#8ed6a1] to-[#8fc9f2] bg-clip-text text-transparent">
              Research Journey!
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Connect with KANI English Research Academy to explore academic
            guidance that fits your research and writing needs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#fffdf8] px-7 py-3 font-bold text-[#12366b] shadow-lg transition-colors hover:bg-[#f0c75e]"
            >
              Start an Enquiry <ArrowRight size={18} />
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowContact((current) => !current)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle size={18} />
              {showContact ? "Hide Contact Information" : "Contact Information"}
            </motion.button>
          </div>

          {showContact && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-5 max-w-xl rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-7 text-white/90 backdrop-blur"
            >
              <p>
                Email:{" "}
                <a
                  className="font-semibold underline underline-offset-4 hover:text-[#f0c75e]"
                  href="mailto:infokaniacademy@gmail.com"
                >
                  infokaniacademy@gmail.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  className="font-semibold underline underline-offset-4 hover:text-[#f0c75e]"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  +91 90924 10132
                </a>
              </p>
            </motion.div>
          )}

          <p className="mt-7 text-xs leading-6 text-white/55">
            Guidance, feedback, editing, and learning support — with respect
            for research ethics and university regulations.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
