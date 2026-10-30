


import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  Sparkles,
  RotateCcw,
  Play,
  Target,
  Eye,
  Heart,
  BookOpen,
  ShieldCheck,
  TrendingUp,
  Users,
  GraduationCap,
} from 'lucide-react'

const stories = {
  founder: {
    label: 'MEET THE FOUNDER',
    title: 'Dr. Nirmala Devi M',
    subtitle: 'PhD in English Literature · Educator · Researcher',
    image: '/images/founder.png',
    alt: 'Dr. Nirmala Devi M, founder of KANI English Research Academy',
    description: `Welcome to KANI English Research Academy!

I am Dr. Nirmala Devi M, an educator with a PhD in English Literature and over 16 years of experience in higher education.

My academic journey includes 37 publications, 17 patents, and 3 textbooks. I have also received the International Teacher Excellence Award and the Go Getter Teacher Award.

My vision is to help learners develop confident communication, strengthen their academic abilities, and discover their potential.

At KANI, learning is more than acquiring knowledge. It is about finding your voice, expressing your ideas, and growing with confidence.`,
  },
  academy: {
    label: 'DISCOVER OUR ACADEMY',
    title: 'KANI English Research Academy',
    subtitle: 'Learn Globally. Communicate Confidently. Achieve Excellence.',
    image: '/images/kani-classroom.png',
    alt: 'Learning environment at KANI English Research Academy',
    description: `Welcome to KANI English Research Academy, a place where language, communication, and learning come together.

Our vision is to help learners express themselves confidently, strengthen their academic abilities, and pursue their goals through meaningful learning.

We believe education should go beyond textbooks. It should encourage curiosity, develop independent thinking, and prepare learners for opportunities in academic, personal, and professional life.

At KANI, every learning journey is an opportunity to discover your voice, build confidence, and grow towards a brighter future.`,
  },
}

const coreValues = [
  {
    number: '01',
    title: 'Confidence',
    description: 'Through communication',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Excellence',
    description: 'In teaching and learning',
    icon: GraduationCap,
  },
  {
    number: '03',
    title: 'Integrity',
    description: 'In academic research',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Continuous Growth',
    description: 'Personal and professional development',
    icon: TrendingUp,
  },
  {
    number: '05',
    title: 'Inclusivity',
    description: 'Supportive education for every learner',
    icon: Users,
  },
]

/* FULL-PAGE RULED BACKGROUND */

function GlobalAnimatedBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#fffdf8]"
    >
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 70, -30, 0],
                y: [0, 45, -20, 0],
                scale: [1, 1.15, 0.95, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -left-40 top-[5%] h-80 w-80 rounded-full bg-[#18823b]/10 blur-[100px] sm:h-[32rem] sm:w-[32rem]"
      />

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -65, 30, 0],
                y: [0, -35, 50, 0],
                scale: [1, 0.9, 1.15, 1],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -right-40 top-[30%] h-80 w-80 rounded-full bg-[#1769aa]/10 blur-[100px] sm:h-[34rem] sm:w-[34rem]"
      />

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 35, -25, 0],
                y: [0, -25, 20, 0],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[5%] left-[30%] h-72 w-72 rounded-full bg-[#d8a52b]/[0.08] blur-[90px] sm:h-96 sm:w-96"
      />

      {/* Horizontal and vertical ruled lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(18,54,107,0.075) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(24,130,59,0.075) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
        }}
      />

      {!reduceMotion && (
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background:
              'linear-gradient(120deg, transparent 20%, rgba(24,130,59,0.035) 45%, rgba(23,105,170,0.04) 60%, transparent 80%)',
          }}
        />
      )}
    </div>
  )
}

/* TYPEWRITER EFFECT */

function Typewriter({ text, active }) {
  const reduceMotion = useReducedMotion()
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (!active) {
      setOutput('')
      return
    }

    if (reduceMotion) {
      setOutput(text)
      return
    }

    let position = 0
    setOutput('')

    const timer = window.setInterval(() => {
      position += 2
      setOutput(text.slice(0, position))

      if (position >= text.length) {
        window.clearInterval(timer)
      }
    }, 16)

    return () => window.clearInterval(timer)
  }, [text, active, reduceMotion])

  return (
    <p className="whitespace-pre-line text-sm leading-7 text-[#52647d] sm:text-base sm:leading-8">
      {output}
      {active && output.length < text.length && !reduceMotion && (
        <span
          aria-hidden="true"
          className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-[#18823b] align-middle"
        />
      )}
    </p>
  )
}

/* INTERACTIVE FLIP CARDS */

function FlipStoryCard({ type, flipped, onFlip }) {
  const reduceMotion = useReducedMotion()
  const story = stories[type]
  const isFounder = type === 'founder'
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    setImageFailed(false)
  }, [story.image])

  return (
    <div className="w-full" style={{ perspective: '1600px' }}>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          display: 'grid',
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full"
      >
        {/* FRONT */}
        <article
          style={{
            gridArea: '1 / 1',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className="relative min-h-[440px] overflow-hidden rounded-[28px] border border-white/60 bg-[#e9eee8] shadow-[0_20px_55px_rgba(18,54,107,0.14)] sm:min-h-[500px] lg:min-h-[540px]"
        >
          {imageFailed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e9eee8] to-[#cbdccf] p-6 text-center">
              <Sparkles size={32} className="text-[#12366b]" />
              <p className="font-bold text-[#12366b]">
                Image could not be loaded
              </p>
              <p className="text-xs text-[#52647d]">
                Check the filename in public/images.
              </p>
            </div>
          ) : (
            <img
              src={story.image}
              alt={story.alt}
              onError={() => setImageFailed(true)}
              className={`absolute inset-0 z-0 h-full w-full ${
                isFounder
                  ? 'object-contain object-center'
                  : 'object-cover object-center'
              }`}
            />
          )}

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 z-[1] ${
              isFounder
                ? 'bg-gradient-to-t from-[#071b3a]/90 via-[#071b3a]/10 to-transparent'
                : 'bg-gradient-to-t from-[#071b3a]/95 via-[#071b3a]/45 to-transparent'
            }`}
          />

          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/30 bg-[#12366b]/45 px-4 py-2 text-xs font-bold tracking-wider text-white backdrop-blur-md sm:left-7 sm:top-7">
            <Sparkles size={14} className="mr-2 inline" />
            {story.label}
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8">
            <p className="text-xs font-bold tracking-wider text-[#d9f3c8]">
              {isFounder
                ? 'EDUCATOR · RESEARCHER'
                : 'LEARN · COMMUNICATE · GROW'}
            </p>

            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {isFounder ? 'Meet Our Founder' : 'Discover KANI'}
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/95">
              {story.subtitle}
            </p>

            <button
              type="button"
              onClick={onFlip}
              aria-expanded={flipped}
              className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#d9f3c8] px-5 py-3 text-sm font-bold text-[#12366b] transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              {isFounder ? 'Know more about her' : 'Know more about KANI'}
              <ArrowRight size={18} />
            </button>
          </div>
        </article>

        {/* BACK */}
        <article
          aria-hidden={!flipped}
          style={{
            gridArea: '1 / 1',
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          className="relative isolate flex min-h-[440px] flex-col overflow-hidden rounded-[28px] border border-[#18823b]/20 bg-[#fffdf8] p-5 shadow-[0_20px_55px_rgba(18,54,107,0.09)] sm:min-h-[500px] sm:p-7 lg:min-h-[540px] lg:p-8"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full bg-[#18823b]/15 blur-3xl"
            animate={
              reduceMotion
                ? {}
                : {
                    x: [0, -20, 10, 0],
                    y: [0, 20, -10, 0],
                    scale: [1, 1.2, 0.9, 1],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-12 -z-10 h-48 w-48 rounded-full bg-[#1769aa]/10 blur-3xl"
            animate={
              reduceMotion
                ? {}
                : {
                    x: [0, 18, -12, 0],
                    y: [0, -15, 10, 0],
                  }
            }
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="relative flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#18823b] sm:text-xs">
                {story.label}
              </span>
              <h3 className="mt-2 text-xl font-extrabold leading-tight text-[#12366b] sm:text-2xl">
                {story.title}
              </h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-[#66758a] sm:text-sm">
                {story.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onFlip}
              aria-label="Flip card back to image"
              tabIndex={flipped ? 0 : -1}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#edf7ed] text-[#12366b] transition hover:bg-[#d9f3c8]"
            >
              <RotateCcw size={18} />
            </button>
          </div>

          <div className="relative mt-5">
            <Typewriter text={story.description} active={flipped} />
          </div>

          <button
            type="button"
            onClick={onFlip}
            tabIndex={flipped ? 0 : -1}
            className="relative mt-auto flex min-h-11 w-fit items-center gap-2 pt-6 text-sm font-bold text-[#18823b] transition hover:text-[#12366b]"
          >
            <RotateCcw size={16} />
            Flip back to image
          </button>
        </article>
      </motion.div>
    </div>
  )
}

/* MISSION, VISION AND CORE VALUES */

function MissionVisionValues() {
  const reduceMotion = useReducedMotion()

  const principles = [
    {
      title: 'Our Mission',
      icon: Target,
      color: 'text-[#18823b]',
      iconBg: 'bg-[#e8f4ec]',
      description:
        'To make quality English education and academic guidance accessible worldwide through affordable, inclusive and practical learning that empowers individuals to communicate confidently and succeed academically and professionally.',
    },
    {
      title: 'Our Vision',
      icon: Eye,
      color: 'text-[#1769aa]',
      iconBg: 'bg-[#e9f0fc]',
      description:
        'To become a trusted global learning destination for English communication, literary studies and academic development, helping learners transform their potential into achievement.',
    },
  ]

  return (
    <section
      id="mission-vision"
      className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/20 bg-white/90 px-4 py-2 text-xs font-bold tracking-wider text-[#18823b] shadow-sm sm:text-sm">
            <BookOpen size={15} />
            WHAT GUIDES US
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#12366b] sm:text-4xl lg:text-5xl">
            Our purpose.
            <span className="block text-[#18823b]">
              Our promise.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#66758a] sm:text-base">
            Every learning experience at KANI is shaped by our commitment
            to accessible education, meaningful growth, and academic integrity.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:gap-7">
          {principles.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/85 p-6 shadow-[0_16px_45px_rgba(18,54,107,0.07)] backdrop-blur-sm sm:p-8 lg:p-9"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#18823b]/[0.06] blur-2xl"
                />

                <div className="relative">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl ${item.iconBg} ${item.color}`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-[#12366b] sm:text-3xl">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#18823b] to-[#d8a52b]" />

                  <p className="mt-5 text-sm leading-7 text-[#52647d] sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Academy tagline */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mt-7 overflow-hidden rounded-[28px] bg-[#12366b] px-6 py-9 text-center shadow-[0_20px_50px_rgba(18,54,107,0.14)] sm:px-10 sm:py-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border-[28px] border-white/[0.06]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full border-[28px] border-[#d9f3c8]/[0.08]"
          />

          <div className="relative">
            <Sparkles
              size={26}
              className="mx-auto text-[#d9f3c8]"
            />

            <p className="mx-auto mt-5 max-w-3xl text-xl font-extrabold leading-relaxed text-white sm:text-2xl lg:text-3xl">
              KANI English Research Academy
            </p>

            <p className="mx-auto mt-3 max-w-3xl text-base font-semibold leading-7 text-[#d9f3c8] sm:text-lg sm:leading-8">
              Learn Globally. Communicate Confidently. Achieve Excellence.
            </p>
          </div>
        </motion.div>

        {/* Core values */}
        <div className="mt-16 sm:mt-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-xs font-bold tracking-[0.18em] text-[#18823b] sm:text-sm">
              THE PRINCIPLES WE LIVE BY
            </span>

            <h3 className="mt-3 text-3xl font-extrabold text-[#12366b] sm:text-4xl">
              Our Core Values
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#66758a] sm:text-base">
              The values that shape our teaching, research, and learning community.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.article
                  key={value.number}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                  whileHover={reduceMotion ? {} : { y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#e8e8df] bg-white/90 p-5 shadow-[0_8px_25px_rgba(18,54,107,0.04)] backdrop-blur-sm transition-colors hover:border-[#18823b]/35 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-extrabold tracking-wider text-[#b5c6b5]">
                      {value.number}
                    </span>

                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#e8f4ec] text-[#18823b] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={21} />
                    </div>
                  </div>

                  <h4 className="mt-5 text-lg font-extrabold text-[#12366b]">
                    {value.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#66758a]">
                    {value.description}
                  </p>

                  <div className="mt-5 h-1 w-10 rounded-full bg-[#18823b]/40 transition-all duration-300 group-hover:w-16 group-hover:bg-[#18823b]" />
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* TRAINING VIDEO */

function AcademyVideo() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/20 bg-white/90 px-4 py-2 text-xs font-bold tracking-wider text-[#18823b]">
            <Play size={14} fill="currentColor" />
            EXPERIENCE KANI
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#12366b] sm:text-4xl lg:text-5xl">
            See the vision.
            <span className="mt-2 block text-[#18823b]">
              Experience the journey.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#66758a] sm:text-base">
            Discover how communication, language learning, and academic
            development come together at KANI.
          </p>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  clipPath: 'inset(12% 12% 12% 12% round 24px)',
                }
          }
          whileInView={{
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0% round 24px)',
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.8 }}
          className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/70 bg-[#12366b] shadow-[0_24px_60px_rgba(18,54,107,0.18)]"
        >
          <video
            className="block max-h-[560px] w-full bg-black object-contain"
            src="/videos/training-video.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="KANI English Research Academy training video"
          >
            Your browser does not support HTML video.
          </video>
        </motion.div>
      </div>
    </section>
  )
}

/* ABOUT PAGE */

export default function About() {
  const [flippedCard, setFlippedCard] = useState(null)

  function toggleCard(type) {
    setFlippedCard((current) => (current === type ? null : type))
  }

  return (
    <main className="relative isolate overflow-x-clip bg-transparent text-[#24344d]">
      <GlobalAnimatedBackground />

      {/* HERO */}
      <section className="relative px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/20 bg-white/85 px-4 py-2 text-xs font-bold tracking-wider text-[#18823b] shadow-sm backdrop-blur-sm sm:text-sm">
            <Sparkles size={15} />
            OUR STORY
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#12366b] sm:text-6xl">
            A vision for learning.
            <span className="mt-2 block text-[#18823b]">
              A purpose for growth.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#66758a] sm:text-base sm:leading-8">
            Two stories. One purpose. Flip a card to discover the person
            and purpose behind KANI English Research Academy.
          </p>
        </motion.div>
      </section>

      {/* FOUNDER AND ACADEMY */}
      <section className="relative px-5 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-12">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-7">
          <FlipStoryCard
            type="founder"
            flipped={flippedCard === 'founder'}
            onFlip={() => toggleCard('founder')}
          />

          <FlipStoryCard
            type="academy"
            flipped={flippedCard === 'academy'}
            onFlip={() => toggleCard('academy')}
          />
        </div>
      </section>

      {/* MISSION, VISION AND VALUES */}
      <MissionVisionValues />

      {/* TRAINING VIDEO */}
      <AcademyVideo />

      {/* FINAL CTA */}
      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#12366b] px-6 py-10 text-center sm:px-12 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-[30px] border-white/5"
          />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#d9f3c8]">
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
              Ready to discover your potential?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Take your next step towards confident communication and
              meaningful learning.
            </p>

            <a
              href="/free-demo"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#12366b] transition hover:-translate-y-1 hover:bg-[#fff6e4]"
            >
              Book a Free Demo
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
