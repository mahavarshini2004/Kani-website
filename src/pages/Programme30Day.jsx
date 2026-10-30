
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Headphones,
  MessageCircle,
  Mic,
  MessagesSquare,
  Sparkles,
  Target,
  Users,
  Volume2,
  Video,
  Waypoints,
  Zap,
} from 'lucide-react'

const weeklyPlan = [
  {
    week: 'WEEK 01',
    days: 'Days 1–7',
    title: 'English Foundations',
    description:
      'Build a stronger foundation through essential grammar, everyday vocabulary, and simple sentence construction.',
    topics: [
      'Self-introduction and personal details',
      'Essential grammar and sentence formation',
      'Everyday vocabulary and useful expressions',
      'Speaking simple sentences with clarity',
    ],
    icon: BookOpen,
    accent: '#1769aa',
    soft: '#eaf3ff',
  },
  {
    week: 'WEEK 02',
    days: 'Days 8–14',
    title: 'Speaking with Confidence',
    description:
      'Practise speaking in everyday situations, overcome hesitation, and learn to express your thoughts more clearly.',
    topics: [
      'Everyday conversations and role-play',
      'Asking and answering questions',
      'Expressing thoughts and opinions',
      'Pronunciation and speaking practice',
    ],
    icon: MessagesSquare,
    accent: '#18823b',
    soft: '#edf8ef',
  },
  {
    week: 'WEEK 03',
    days: 'Days 15–21',
    title: 'Professional Communication',
    description:
      'Develop communication skills for interviews, presentations, academic interactions, and workplace situations.',
    topics: [
      'Interview questions and answers',
      'Professional conversations',
      'Presentations and group discussions',
      'Polite expressions and formal English',
    ],
    icon: Target,
    accent: '#b68a1c',
    soft: '#fff7df',
  },
  {
    week: 'WEEK 04',
    days: 'Days 22–30',
    title: 'Fluency & Practical Application',
    description:
      'Bring your learning together through structured speaking tasks, practical activities, and progress evaluations.',
    topics: [
      'Short speeches and storytelling',
      'Real-life speaking scenarios',
      'Fluency-building speaking assignments',
      'Final speaking evaluation and feedback',
    ],
    icon: Volume2,
    accent: '#7656b5',
    soft: '#f3edff',
  },
]

const programmeFeatures = [
  {
    icon: Video,
    title: 'Online Guided Classes',
    description:
      'Learn through online classes with guided explanations and opportunities to practise.',
  },
  {
    icon: Mic,
    title: 'Daily Speaking Practice',
    description:
      'Build a regular speaking habit through activities, prompts, and practical exercises.',
  },
  {
    icon: Users,
    title: 'Personalised Feedback',
    description:
      'Receive feedback tailored to your learning needs and areas for improvement.',
  },
  {
    icon: BookOpen,
    title: 'Vocabulary & Grammar',
    description:
      'Strengthen sentence formation, useful vocabulary, and everyday grammar.',
  },
  {
    icon: Brain,
    title: 'Assignments & Assessments',
    description:
      'Practise regularly with speaking assignments and progress assessments.',
  },
  {
    icon: Waypoints,
    title: 'Speaking Progress Review',
    description:
      'Use before-and-after speaking evaluations to review your progress and identify next steps.',
  },
]

const audiences = [
  {
    icon: GraduationCap,
    title: 'School & College Students',
    description:
      'Improve classroom participation, presentations, and everyday conversations.',
  },
  {
    icon: BookOpen,
    title: 'Graduates & Research Scholars',
    description:
      'Develop confidence in academic discussions, presentations, and formal communication.',
  },
  {
    icon: Target,
    title: 'Job Seekers & Professionals',
    description:
      'Practise interview responses, workplace conversations, and professional introductions.',
  },
  {
    icon: Sparkles,
    title: 'Homemakers & Women',
    description:
      'Build communication confidence for personal, social, educational, and professional goals.',
  },
  {
    icon: Headphones,
    title: 'English Beginners',
    description:
      'Start with the fundamentals and practise speaking at a comfortable learning pace.',
  },
  {
    icon: MessageCircle,
    title: 'Anyone Seeking Confidence',
    description:
      'Strengthen everyday communication through regular, guided English practice.',
  },
]

const outcomes = [
  'Introduce yourself clearly and confidently',
  'Participate in everyday conversations',
  'Ask questions and respond appropriately',
  'Express ideas, thoughts, and opinions',
  'Deliver short speeches and presentations',
  'Communicate in common academic and professional situations',
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[#1769aa]/15 bg-[#eaf3ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1769aa]">
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#12366b] sm:text-4xl lg:text-5xl">
        {title}{' '}
        <span className="bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#b68a1c] bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#66758a] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}

function ProgrammeButton({ children, to = '/free-demo', secondary = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 sm:px-7 ${
        secondary
          ? 'border border-[#12366b]/15 bg-white text-[#12366b] hover:border-[#1769aa]/40 hover:bg-[#eaf3ff]'
          : 'bg-gradient-to-r from-[#1769aa] to-[#18823b] text-white shadow-lg shadow-[#1769aa]/15 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1769aa]/25'
      }`}
      style={{ color: secondary ? '#12366b' : '#ffffff' }}
    >
      {children}
      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  )
}

export default function ThirtyDayProgramme() {
  const [activeWeek, setActiveWeek] = useState(null)

  const whatsappUrl =
    'https://wa.me/919092410132?text=' +
    encodeURIComponent(
      'Hello KANI English Research Academy, I would like to know more about the 30-Day English Communication Programme.',
    )

  return (

<main
  className="relative overflow-hidden text-[#24344d]"
  style={{
    backgroundColor: '#fffdf8',
    backgroundImage: `
      linear-gradient(
        135deg,
        rgba(23, 105, 170, 0.09) 0%,
        rgba(255, 253, 248, 0.92) 45%,
        rgba(24, 130, 59, 0.08) 75%,
        rgba(216, 165, 43, 0.07) 100%
      ),
      repeating-linear-gradient(
        0deg,
        transparent 0px,
        transparent 39px,
        rgba(23, 105, 170, 0.10) 40px,
        transparent 41px
      ),
      repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 39px,
        rgba(23, 105, 170, 0.08) 40px,
        transparent 41px
      )
    `,
  }}
>
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -left-36 top-10 -z-10 h-80 w-80 rounded-full bg-[#1769aa]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 top-24 -z-10 h-96 w-96 rounded-full bg-[#18823b]/10 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-56 w-3/4 -translate-x-1/2 rounded-full bg-[#d8a52b]/10 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#18823b] shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#18823b] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#18823b]" />
              </span>
              KANI English Research Academy
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#12366b] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Speak English
              <span className="mt-1 block bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#b68a1c] bg-clip-text pb-2 text-transparent">
                Confidently
              </span>
              <span className="mt-1 block text-3xl font-bold sm:text-4xl lg:text-[3.25rem]">
                in 30 Days.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[#526176] sm:text-xl">
              Transform Your English. Build Your Confidence. Shape Your Future.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#66758a]">
              Develop your English communication skills through a structured,
              practical, and learner-friendly programme designed to help you
              overcome hesitation, strengthen vocabulary, and speak more
              confidently in everyday, academic, and professional situations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ProgrammeButton>
                Join the Programme
              </ProgrammeButton>
              <a
                href="#weekly-plan"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#12366b]/15 bg-white px-6 py-3 text-sm font-bold text-[#12366b] transition-all duration-300 hover:-translate-y-1 hover:border-[#1769aa]/40 hover:bg-[#eaf3ff]"
              >
                Explore the Programme
                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-[#66758a]">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#18823b]" />
                Guided practice
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#18823b]" />
                Practical activities
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#18823b]" />
                Progress reviews
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-3 rounded-[2.3rem] bg-gradient-to-br from-[#1769aa]/20 via-[#18823b]/10 to-[#d8a52b]/25 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_25px_80px_rgba(18,54,107,0.14)] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
                  alt="Learners developing communication and language skills"
                  className="h-[330px] w-full object-cover sm:h-[430px]"
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#12366b]/85 via-[#12366b]/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-2xl border border-white/40 bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:left-6 sm:top-6">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#12366b]">
                    <Clock3 size={17} className="text-[#18823b]" />
                    A structured 30-day journey
                  </div>
                </div>

                <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-8 sm:left-7 sm:right-7">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8e9ff]">
                    Learn · Practise · Grow
                  </span>
                  <h2 className="mt-3 max-w-md text-2xl font-bold leading-tight sm:text-3xl">
                    Every conversation is an opportunity to grow.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
                    Practise useful English skills and work towards more
                    confident communication, one step at a time.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-2 top-1/3 hidden rounded-2xl border border-[#1769aa]/10 bg-white p-4 shadow-xl sm:block lg:-left-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#1769aa]">
                  <Mic size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#12366b]">
                    Speak more
                  </p>
                  <p className="mt-1 text-xs text-[#66758a]">
                    Practise regularly
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
              className="absolute -right-2 top-1/2 hidden rounded-2xl border border-[#18823b]/10 bg-white p-4 shadow-xl sm:block lg:-right-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf8ef] text-[#18823b]">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#12366b]">
                    Build confidence
                  </p>
                  <p className="mt-1 text-xs text-[#66758a]">
                    One step at a time
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION STRIP */}
      
      {/* INTRODUCTION STRIP */}
      <section className="relative px-5 pb-16 sm:px-8 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          whileHover={{
            y: -4,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          className="group relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_15px_50px_rgba(18,54,107,0.08)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_25px_65px_rgba(18,54,107,0.14)] sm:p-9 lg:p-12"
        >
          {/* Soft background gradients */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#1769aa]/10 blur-[80px] transition-transform duration-700 group-hover:scale-125" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-[#18823b]/10 blur-[80px]" />

          {/* Top gradient accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            {/* Text content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/15 bg-gradient-to-r from-[#edf8ef] to-[#eaf3ff] px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-[#18823b] shadow-[0_0_10px_rgba(24,130,59,0.45)]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#18823b] sm:text-xs">
                  Your learning journey starts here
                </span>
              </motion.div>

              <h2 className="mt-5 max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-[#12366b] sm:text-3xl lg:text-4xl">
                English communication is a skill you can
                <span className="block bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#b68a1c] bg-clip-text pb-1 text-transparent">
                  practise and develop.
                </span>
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#66758a] sm:text-base sm:leading-8">
                Our programme focuses on practical learning, regular speaking
                activities, and personalised feedback to help you recognise
                your strengths, improve your skills, and identify areas for
                further development.
              </p>

              {/* Learning highlights */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  'Practical learning',
                  'Regular speaking practice',
                  'Personalised feedback',
                ].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#e8e8df] bg-white/90 px-3 py-2 text-xs font-semibold text-[#526176] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#18823b]/30 hover:shadow-md sm:text-sm"
                  >
                    <CheckCircle2 size={15} className="shrink-0 text-[#18823b]" />
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Animated visual */}
           
{/* Academy logo */}
<div className="flex items-center justify-center lg:pr-3">
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="group relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44"
  >
    {/* Soft brand glow */}
    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#1769aa]/25 via-[#18823b]/20 to-[#d8a52b]/25 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

    {/* Logo container */}
    <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-[1.8rem] border border-white/90 bg-gradient-to-br from-white via-[#eaf3ff] to-[#edf8ef] p-4 shadow-[0_15px_40px_rgba(18,54,107,0.12)] transition-transform duration-500 group-hover:scale-105 sm:h-40 sm:w-40 sm:p-5">
      <div className="pointer-events-none absolute inset-2 rounded-[1.3rem] border border-[#1769aa]/10" />

      <img
        src="/images/kani-logo.jpeg"
        alt="KANI English Research Academy logo"
        className="relative z-10 h-full w-full object-contain"
      />
    </div>

   
  </motion.div>
</div>

          </div>
        </motion.div>
      </section>

     
      {/* WEEKLY LEARNING PLAN */}
      <section
        id="weekly-plan"
        className="scroll-mt-24 bg-transparent px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Your 30-day roadmap"
            title="Four weeks."
            highlight="One learning journey."
            description="Progress through four connected learning stages, from English foundations to practical communication. Select a week to explore its learning focus."
          />

          {/* WEEK SELECTOR CARDS */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {weeklyPlan.map((week, index) => {
              const Icon = week.icon
              const isActive = activeWeek === index

              return (
                <motion.button
                  key={week.week}
                  type="button"
                  onClick={() => setActiveWeek(index)}
                  whileHover={{
                    y: -8,
                    scale: 1.025,
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: 'easeOut',
                  }}
                  aria-pressed={isActive}
                  className="group relative overflow-hidden rounded-2xl border p-5 text-left transition-shadow duration-300 sm:p-6"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${week.soft}, #ffffff 85%)`
                      : 'linear-gradient(145deg, #ffffff, #fffdf8)',
                    borderColor: isActive
                      ? `${week.accent}70`
                      : '#e8e8df',
                    boxShadow: isActive
                      ? `0 16px 40px ${week.accent}22`
                      : undefined,
                  }}
                >
                  {/* Animated gradient top border */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      background: `linear-gradient(90deg, ${week.accent}, #18823b, #d8a52b)`,
                    }}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                      style={{
                        backgroundColor: week.soft,
                        color: week.accent,
                      }}
                    >
                      <Icon size={23} />
                    </div>

                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold"
                      style={{
                        backgroundColor: week.soft,
                        color: week.accent,
                      }}
                    >
                      {week.days}
                    </span>
                  </div>

                  <p
                    className="mt-5 text-xs font-extrabold tracking-[0.16em]"
                    style={{ color: week.accent }}
                  >
                    {week.week}
                  </p>

                  <h3 className="mt-2 text-base font-bold leading-snug text-[#12366b] transition-colors duration-300 group-hover:text-[#1769aa]">
                    {week.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className="text-xs font-bold"
                      style={{ color: week.accent }}
                    >
                      {isActive ? 'Currently selected' : 'Explore week'}
                    </span>

                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        backgroundColor: week.soft,
                        color: week.accent,
                      }}
                    >
                      <ChevronRight size={17} />
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* WEEK DETAILS: ONLY RENDER AFTER A CARD IS CLICKED */}
          {activeWeek !== null && (
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, y: 18, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-[#e8e8df] bg-white/90 p-6 shadow-[0_20px_60px_rgba(18,54,107,0.08)] backdrop-blur-sm sm:p-9 lg:p-11"
            >
              {/* Gradient accent */}
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${weeklyPlan[activeWeek].accent}, #18823b, #d8a52b)`,
                }}
              />

              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                {/* Selected week introduction */}
                <div>
                  <span
                    className="inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.15em]"
                    style={{
                      backgroundColor: weeklyPlan[activeWeek].soft,
                      color: weeklyPlan[activeWeek].accent,
                    }}
                  >
                    {weeklyPlan[activeWeek].week} ·{' '}
                    {weeklyPlan[activeWeek].days}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold leading-tight text-[#12366b] sm:text-3xl lg:text-4xl">
                    {weeklyPlan[activeWeek].title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#66758a]">
                    {weeklyPlan[activeWeek].description}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: weeklyPlan[activeWeek].soft,
                        color: weeklyPlan[activeWeek].accent,
                      }}
                    >
                      {(() => {
                        const Icon = weeklyPlan[activeWeek].icon
                        return <Icon size={25} />
                      })()}
                    </div>

                    <p className="text-sm font-semibold text-[#12366b]">
                      Practical learning, guided step by step
                    </p>
                  </div>
                </div>

                {/* Learning focus */}
                <div className="rounded-3xl border border-[#e8e8df] bg-gradient-to-br from-white to-[#fffdf8] p-5 sm:p-7">
                  <h4 className="text-lg font-bold text-[#12366b]">
                    Learning focus
                  </h4>

                  <ul className="mt-5 space-y-4">
                    {weeklyPlan[activeWeek].topics.map((topic, index) => (
                      <motion.li
                        key={topic}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08,
                        }}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: weeklyPlan[activeWeek].soft,
                            color: weeklyPlan[activeWeek].accent,
                          }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </span>

                        <span className="text-sm leading-6 text-[#526176] sm:text-base">
                          {topic}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Panel footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e8e8df] pt-6">
                <p className="text-sm text-[#66758a]">
                  {`Week ${activeWeek + 1} of ${weeklyPlan.length} — keep building your communication skills.`}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeWeek > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveWeek((previous) => previous - 1)
                      }
                      className="inline-flex items-center gap-2 rounded-full border border-[#e8e8df] px-4 py-2 text-sm font-bold text-[#12366b] transition-colors hover:bg-[#eaf3ff]"
                    >
                      Previous week
                    </button>
                  )}

                  {activeWeek < weeklyPlan.length - 1 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveWeek((previous) =>
                          previous === null
                            ? 0
                            : Math.min(
                                previous + 1,
                                weeklyPlan.length - 1,
                              ),
                        )
                      }
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1769aa] to-[#18823b] px-5 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      Next week
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveWeek(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#e8e8df] px-4 py-2 text-sm font-bold text-[#12366b] transition-colors hover:bg-[#edf8ef]"
                    >
                      Close details
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>


      {/* HOW THE PROGRAMME WORKS */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#1769aa]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#18823b]/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Learning that works for you"
            title="How does the"
            highlight="programme work?"
            description="Develop your skills through guided learning and practical activities designed to make English communication part of your routine."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programmeFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group relative overflow-hidden rounded-3xl border border-[#e8e8df] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(18,54,107,0.10)] sm:p-7"
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eaf3ff] to-[#edf8ef] text-[#1769aa] transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:text-[#18823b]">
                      <Icon size={26} />
                    </div>
                    <span className="text-sm font-extrabold text-[#dce5ef] transition-colors group-hover:text-[#1769aa]/35">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#12366b] transition-colors group-hover:text-[#1769aa]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#66758a]">
                    {feature.description}
                  </p>
                  <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#1769aa] to-[#18823b] transition-all duration-300 group-hover:w-20" />
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="relative bg-white/70 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="A programme for every learner"
            title="Who can"
            highlight="join?"
            description="Whether you are starting from the basics or looking to improve your professional communication, this programme is designed for learners with different goals and experience levels."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, index) => {
              const Icon = audience.icon

              return (
                <motion.article
                  key={audience.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25, ease: 'easeOut' },
                  }}
                  className="group relative isolate overflow-hidden rounded-3xl border border-[#e8e8df] bg-[#fffdf8] p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-[#1769aa]/40 hover:shadow-[0_18px_42px_rgba(18,54,107,0.12)] sm:p-7"
                >
                  {/* Corner semicircle: gains colour only while hovering */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#1769aa] via-[#18823b] to-[#d8a52b] opacity-0 transition-opacity duration-300 group-hover:opacity-35"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#1769aa]/10 to-[#18823b]/10 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* Subtle gold glow on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-4 -z-10 h-20 w-20 rounded-full bg-[#d8a52b]/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1769aa]/10 bg-gradient-to-br from-[#eaf3ff] to-[#edf8ef] text-[#1769aa] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#18823b]/30 group-hover:text-[#18823b]">
                    <Icon size={26} strokeWidth={1.9} />
                  </div>

                  {/* Heading */}
                  <h3 className="relative mt-6 text-lg font-bold text-[#12366b] transition-colors duration-300 group-hover:text-[#1769aa]">
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-3 text-sm leading-7 text-[#66758a]">
                    {audience.description}
                  </p>

                  {/* Brand gradient accent expands on hover */}
                  <div className="relative mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b] transition-all duration-500 group-hover:w-20" />
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#18823b]/10 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/20 bg-[#edf8ef] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#18823b]">
              <Zap size={14} />
              Put learning into practice
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#12366b] sm:text-4xl lg:text-5xl">
              What will you
              <span className="mt-1 block bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#b68a1c] bg-clip-text text-transparent">
                gain?
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#66758a]">
              Throughout the programme, you will practise useful communication
              tasks that connect your learning to everyday, academic, and
              professional situations.
            </p>

            <div className="mt-8">
              <ProgrammeButton>
                Start Your Journey
              </ProgrammeButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#1769aa]/15 via-[#18823b]/10 to-[#d8a52b]/15 blur-lg" />

            <div className="relative rounded-[2rem] border border-[#e8e8df] bg-white p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4 border-b border-[#e8e8df] pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1769aa] to-[#18823b] text-white">
                  <MessageCircle size={27} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#12366b]">
                    Practical speaking goals
                  </h3>
                  <p className="mt-1 text-sm text-[#66758a]">
                    Skills to practise during your journey
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {outcomes.map((outcome, index) => (
                  <motion.li
                    key={outcome}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#edf8ef] text-[#18823b]">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-6 text-[#526176] sm:text-base">
                      {outcome}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl bg-gradient-to-r from-[#eaf3ff] via-white to-[#edf8ef] p-4">
                <p className="text-sm leading-6 text-[#526176]">
                  Progress depends on your starting level, practice, and
                  individual learning needs. The programme provides structured
                  opportunities to practise and review your communication skills.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#12366b] px-6 py-12 text-center shadow-[0_25px_70px_rgba(18,54,107,0.20)] sm:px-12 sm:py-16 lg:px-20 lg:py-20"
        >
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#1769aa]/50 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-[#18823b]/35 blur-[90px]" />
          <div className="pointer-events-none absolute right-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative mx-auto max-w-3xl">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#d8e9ff] backdrop-blur"
            >
              <Sparkles size={30} />
            </motion.div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#b8dfc1]">
              Your next chapter starts with a conversation
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Start Your English Communication Journey Today!
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75 sm:text-lg">
              Take the first step towards developing your vocabulary, practising
              your speaking skills, and communicating with greater confidence.
              Connect with KANI English Research Academy to explore the programme.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/free-demo?service=30-Day%20English%20Communication%20Programme"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#12366b] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff7df]"
                style={{ color: '#12366b' }}
              >
                Enquire About the Programme
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-6 text-xs leading-5 text-white/55">
              KANI English Research Academy · Learn with guidance. Grow with practice.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
