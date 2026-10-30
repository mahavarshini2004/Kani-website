
import TestimonialsSection from '../components/common/TestimonialsSection.jsx'

import FAQSection from '../components/common/FAQSection.jsx'
import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useInView,
} from 'motion/react'
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  MessageCircle,
  Play,
  Sparkles,
} from 'lucide-react'

const pillars = [
  {
    id: 'learn',
    icon: BookOpen,
    title: 'Learn',
    description:
      'Strengthen your English vocabulary, grammar, and understanding.',
    backTitle: 'Build Your Foundation',
    details:
      'Develop strong language skills through grammar, vocabulary, reading, and guided learning.',
    points: ['Grammar & vocabulary', 'Reading & comprehension'],
    tone: 'green',
  },
  {
    id: 'practise',
    icon: MessageCircle,
    title: 'Practise',
    description:
      'Develop communication skills through practical learning activities.',
    backTitle: 'Use English with Confidence',
    details:
      'Turn what you learn into real communication through speaking activities and practical exercises.',
    points: ['Speaking & pronunciation', 'Everyday conversations'],
    tone: 'gold',
  },
  {
    id: 'grow',
    icon: GraduationCap,
    title: 'Grow',
    description:
      'Build confidence for academic, personal, and professional success.',
    backTitle: 'Reach Your Potential',
    details:
      'Apply your skills to interviews, academic work, professional communication, and personal growth.',
    points: ['Interview preparation', 'Academic & professional skills'],
    tone: 'blue',
  },
]




function RuledBackground({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundColor: '#fffdf8',
        backgroundImage: `
          linear-gradient(
            120deg,
            rgba(23, 105, 170, 0.10) 0%,
            rgba(255, 253, 248, 0.18) 35%,
            rgba(24, 130, 59, 0.07) 70%,
            rgba(216, 165, 43, 0.09) 100%
          ),
          repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 39px,
            rgba(18, 54, 107, 0.055) 39px,
            rgba(18, 54, 107, 0.055) 40px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 39px,
            rgba(18, 54, 107, 0.055) 39px,
            rgba(18, 54, 107, 0.055) 40px
          )
        `,
      }}
    />
  )
}


/* SCROLL-TRIGGERED VIDEO REVEAL */

function ParallaxVideo() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const reduceMotion = useReducedMotion()

  const isInView = useInView(sectionRef, { amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center center'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
  })

  const clipPath = useTransform(
    progress,
    [0, 0.8],
    reduceMotion
      ? [
          'inset(0% 0% 0% 0% round 20px)',
          'inset(0% 0% 0% 0% round 20px)',
        ]
      : [
          'inset(35% 35% 35% 35% round 28px)',
          'inset(0% 0% 0% 0% round 20px)',
        ]
  )

  const videoY = useTransform(
    progress,
    [0, 1],
    reduceMotion ? [0, 0] : [35, -8]
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isInView) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isInView])

  return (
    <section
      id="intro-video"
      ref={sectionRef}
      className="relative bg-[#fffdf8] px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <RuledBackground className="opacity-60" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-center sm:mb-9"
        >
          <p className="text-xs font-bold tracking-[0.18em] text-[#18823b] sm:text-sm">
            <Sparkles className="mr-2 inline-block" size={16} />
            EXPERIENCE KANI
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#12366b] sm:text-5xl">
            Learning beyond
            <span className="block text-[#18823b]">
              the classroom.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#66758a] sm:text-base">
            Discover a learning experience designed to build confidence,
            communication, and academic growth.
          </p>
        </motion.div>

        <motion.div
          style={{ clipPath, y: videoY }}
          className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-[#12366b] shadow-[0_24px_70px_rgba(18,54,107,0.2)] sm:rounded-3xl"
        >
          <video
            ref={videoRef}
            className="block aspect-video w-full object-contain"
            src="/videos/intro.mp4"
            controls
            muted
            playsInline
            preload="metadata"
            aria-label="Introduction to KANI English Research Academy"
          >
            Your browser does not support HTML video.
          </video>
        </motion.div>

        <p className="mt-4 text-center text-xs text-[#66758a] sm:text-sm">
          Scroll to reveal the KANI learning experience
        </p>
      </div>
    </section>
  )
}

/* INTERACTIVE 3D FLIP CARDS */

function FlipCard({ pillar, Icon, index, reduceMotion }) {
  const [flipped, setFlipped] = useState(false)

  const tones = {
    green: {
      icon: 'bg-[#e8f4ec] text-[#18823b]',
      front: 'hover:border-[#18823b]/50',
      back: 'from-[#35a966] to-[#14693a]',
      glow: 'shadow-[0_18px_38px_rgba(40,160,90,0.18)]',
    },
    gold: {
      icon: 'bg-[#fdf1dc] text-[#b8780f]',
      front: 'hover:border-[#d8a52b]/70',
      back: 'from-[#e6a326] to-[#b8780f]',
      glow: 'shadow-[0_18px_38px_rgba(220,155,20,0.18)]',
    },
    blue: {
      icon: 'bg-[#e9f0fc] text-[#1769aa]',
      front: 'hover:border-[#1769aa]/50',
      back: 'from-[#3985d7] to-[#12366b]',
      glow: 'shadow-[0_18px_38px_rgba(30,100,190,0.18)]',
    },
  }

  const tone = tones[pillar.tone]

  return (
    <motion.button
      type="button"
      onClick={() => setFlipped((current) => !current)}
      aria-label={`${pillar.title}: ${flipped ? 'show front' : 'show details'}`}
      aria-pressed={flipped}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: reduceMotion ? 0 : index * 0.1,
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      className="group w-full rounded-[28px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769aa] focus-visible:ring-offset-4"
      style={{ perspective: '1400px' }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={
          reduceMotion
            ? { duration: 0.01 }
            : { duration: 0.75, ease: [0.45, 0.05, 0.2, 1] }
        }
        style={{
          display: 'grid',
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {/* FRONT */}
        <div
          style={{
            gridArea: '1 / 1',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className={`flex min-h-[255px] flex-col rounded-[28px] border-2 border-[#e9e6df] bg-white p-6 shadow-[0_6px_18px_rgba(30,30,50,0.07)] transition-colors duration-300 ${tone.front} sm:min-h-[275px] sm:p-7`}
        >
          <motion.div
            animate={{ rotate: flipped ? 360 : 0 }}
            transition={
              reduceMotion
                ? { duration: 0.01 }
                : { duration: 0.75, ease: 'easeInOut' }
            }
            className={`mb-6 grid h-[62px] w-[62px] place-items-center rounded-[18px] ${tone.icon}`}
          >
            <Icon size={27} strokeWidth={1.8} />
          </motion.div>

          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-[#12366b]">
              {pillar.title}
            </h3>

            <motion.span
              animate={{ rotate: flipped ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[#66758a]"
              aria-hidden="true"
            >
              <ArrowRight size={19} />
            </motion.span>
          </div>

          <p className="text-sm leading-7 text-[#66758a] sm:text-base">
            {pillar.description}
          </p>

          <span className="mt-auto pt-5 text-xs font-bold tracking-wide text-[#18823b]">
            TAP TO DISCOVER
          </span>
        </div>

        {/* BACK */}
        <div
          style={{
            gridArea: '1 / 1',
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className={`flex min-h-[255px] flex-col rounded-[28px] border-2 border-white/20 bg-gradient-to-br ${tone.back} p-6 text-white ${tone.glow} sm:min-h-[275px] sm:p-7`}
        >
          <div className="mb-5 grid h-[54px] w-[54px] place-items-center rounded-2xl bg-white/20 text-white">
            <Icon size={26} />
          </div>

          <h3 className="text-xl font-bold leading-snug text-white">
            {pillar.backTitle}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/90">
            {pillar.details}
          </p>

          <ul className="mt-4 space-y-2">
            {pillar.points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm">
                <Check size={17} className="mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <span className="mt-auto pt-4 text-xs font-bold tracking-wide text-white/85">
            TAP TO FLIP BACK
          </span>
        </div>
      </motion.div>
    </motion.button>
  )
}

/* HOME PAGE */

export default function Home() {
  const reduceMotion = useReducedMotion()

  return (
    <main className="overflow-x-clip bg-[#fffdf8] text-[#24344d]">
      {/* HERO */}
      <section
        id="home"
        className="relative isolate flex min-h-[620px] items-center px-5 py-20 sm:min-h-[680px] sm:px-10 sm:py-24 lg:min-h-[720px] lg:px-16"
      >
       {/* Classroom background image */}
<div
  aria-hidden="true"
  className="absolute inset-0 -z-20 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/kani-classroom.png')",
    opacity: 0.75,
  }}
/>

{/* Soft cream overlay */}
<div
  aria-hidden="true"
  className="absolute inset-0 -z-10 bg-[#fffdf8]/35"
/>

        <RuledBackground className="-z-10 opacity-60" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto w-full max-w-7xl"
        >
          <div className="max-w-3xl">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#18823b]/20 bg-white/90 px-3 py-2 text-xs font-semibold text-[#18823b] shadow-sm sm:px-4 sm:text-sm">
              <Sparkles className="shrink-0" size={16} />
              <span>Welcome to KANI English Research Academy</span>
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#12366b] sm:text-6xl lg:text-7xl">
              Find Your Voice.
              <span className="mt-2 block text-[#18823b]">
                Speak with Confidence.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#66758a] sm:mt-6 sm:text-xl sm:leading-8">
              Strengthen your English, develop your communication skills,
              explore literature, and grow through learning designed around you.
            </p>

            {/* HERO CTA BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8 sm:gap-4">
              <a
                href="/free-demo"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#12366b] px-6 py-3.5 text-sm font-bold !text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#1769aa] sm:px-7 sm:text-base"
              >
                <span className="!text-white">Book a Free Demo</span>
                <ArrowRight size={18} className="!text-white" />
              </a>

              <a
                href="#intro-video"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#12366b]/25 bg-white px-6 py-3.5 text-sm font-semibold !text-[#12366b] transition hover:border-[#18823b] hover:bg-[#edf7ed] sm:px-7 sm:text-base"
              >
                <Play size={17} className="!text-[#12366b]" />
                <span className="!text-[#12366b]">Discover KANI</span>
              </a>
            </div>

            {/* SCROLL INDICATOR */}
            <a
              href="#intro-video"
              className="mt-9 inline-flex items-center gap-3 text-sm text-[#66758a] transition hover:text-[#18823b] sm:mt-11"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#12366b]/20 bg-white/85">
                <ArrowDown size={16} />
              </span>
              Scroll to discover our learning experience
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#18823b] via-[#d8a52b] to-[#1769aa]" />
      </section>

      {/* INTRO VIDEO */}
      <ParallaxVideo />

      {/* LEARN, PRACTISE, GROW */}
      <section
        id="learning-journey"
        className="relative bg-[#fffdf8] px-5 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16"
      >
        <RuledBackground className="opacity-60" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-bold tracking-[0.18em] text-[#18823b] sm:text-sm">
              YOUR LEARNING JOURNEY
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#12366b] sm:text-4xl">
              Learn. Practise. Grow.
            </h2>

            <p className="mt-3 leading-7 text-[#66758a] sm:mt-4">
              Choose a card to discover how KANI can support your learning journey.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon

              return (
                <FlipCard
                  key={pillar.id}
                  pillar={pillar}
                  Icon={Icon}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              )
            })}
          </div>
        </div>
      </section>
      
      <FAQSection />

      {/* FINAL CTA */}
      <section className="px-5 pb-14 sm:px-10 sm:pb-20 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#12366b] px-5 py-10 text-center sm:rounded-[30px] sm:px-12 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-[30px] border-white/5 sm:h-64 sm:w-64"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#18823b]/30 blur-3xl"
          />

          <div className="relative">
            <p className="text-xs font-bold tracking-[0.18em] text-[#d9f3c8] sm:text-sm">
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-4xl">
              Your journey to confident English starts here.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Join KANI English Research Academy and take the next step
              towards your personal, academic, and professional goals.
            </p>

            <a
              href="/free-demo"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold !text-[#12366b] transition duration-300 hover:-translate-y-1 hover:bg-[#fff6e4] sm:mt-8 sm:px-7 sm:text-base"
            >
              <span className="!text-[#12366b]">Start with a Free Demo</span>
              <ArrowRight size={18} className="!text-[#12366b]" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
