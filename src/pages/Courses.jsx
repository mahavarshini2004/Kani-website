import FloatingLearningElements from '../components/common/FloatingLearningElements.jsx'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

import {
  MessageCircle,
  GraduationCap,
  Globe,
  Trophy,
  BookOpen,
  Award,
  ArrowRight,
  CheckCircle2,
  Clock,
  Video,
  ClipboardCheck,
  Lightbulb,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 1,
    number: '01',
    title: 'Spoken English & Communication Skills',
    subtitle: 'Speak with confidence. Communicate with impact.',
    icon: MessageCircle,
    color: 'blue',
    topics: [
      'Beginner to Advanced English',
      'Grammar and Vocabulary',
      'Pronunciation',
      'Public Speaking',
      'Soft Skills',
      'Interview Preparation',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'English Literature & University Coaching',
    subtitle: 'Strengthen your literary knowledge and academic skills.',
    icon: BookOpen,
    color: 'green',
    topics: [
      'B.A. English',
      'M.A. English',
      'Literary Criticism',
      'Linguistics',
      'English Language Teaching',
      'Poetry, Drama and Fiction',
      'Research Methodology',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'International English Exam Preparation',
    subtitle: 'Prepare for international English proficiency exams.',
    icon: Globe,
    color: 'gold',
    topics: [
      'IELTS',
      'TOEFL',
      'Academic English',
      'General English',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Competitive Exam Preparation',
    subtitle: 'Build subject knowledge and exam confidence.',
    icon: Trophy,
    color: 'blue',
    topics: [
      'UGC NET',
      'SET',
      'CTET',
      'TET',
      'English Language Proficiency',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Research & Academic Writing Support',
    subtitle: 'Develop clear, structured academic writing.',
    icon: GraduationCap,
    color: 'green',
    topics: [
      'Research Proposals',
      'Synopses',
      'Literature Reviews',
      'Thesis Guidance',
      'Dissertation Structuring',
      'Journal Articles',
      'Editing and Referencing',
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Certificate & Skill Development Courses',
    subtitle: 'Build practical skills for academic and professional growth.',
    icon: Award,
    color: 'gold',
    topics: [
      'Business English',
      'Academic Writing',
      'Grammar',
      'Vocabulary',
      'Communication Skills',
      'Personality Development',
    ],
  },
]

const demoBenefits = [
  {
    icon: ClipboardCheck,
    title: 'English Proficiency Assessment',
    description: 'Understand your current English proficiency and learning needs.',
  },
  {
    icon: Video,
    title: 'Interactive Sample Lesson',
    description: 'Experience our online teaching approach in a live session.',
  },
  {
    icon: Lightbulb,
    title: 'Speaking & Grammar Tips',
    description: 'Receive practical suggestions to improve your English.',
  },
  {
    icon: GraduationCap,
    title: 'Personalised Recommendations',
    description: 'Explore course options suited to your learning goals.',
  },
  {
    icon: Clock,
    title: 'Duration & Fee Details',
    description: 'Understand the course duration and applicable fees before enrolling.',
  },
]

const reasons = [
  'International teaching experience',
  'Affordable online courses',
  'Beginner-to-advanced English training',
  'Communication and confidence-building activities',
  'English Literature and competitive exam coaching',
  'Academic writing and research support',
  'Personalised, learner-focused guidance',
]

const styles = {
  blue: {
    icon: 'bg-blue-50 text-[#1769aa]',
    number: 'text-[#1769aa]',
    line: 'bg-[#1769aa]',
  },
  green: {
    icon: 'bg-green-50 text-[#18823b]',
    number: 'text-[#18823b]',
    line: 'bg-[#18823b]',
  },
  gold: {
    icon: 'bg-amber-50 text-[#b88618]',
    number: 'text-[#b88618]',
    line: 'bg-[#d8a52b]',
  },
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span
        className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${
          light
            ? 'border-white/20 bg-white/10 text-amber-200'
            : 'border-[#d8a52b]/30 bg-[#d8a52b]/10 text-[#8b6814]'
        }`}
      >
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-[#12366b]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
            light ? 'text-white/75' : 'text-[#66758a]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

function CourseCard({ course, index, isDuplicate = false }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = course.icon
  const theme = styles[course.color]

  return (
    <motion.article
      id={isDuplicate ? undefined : `course-${course.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -9, scale: 1.015, rotateX: 1.5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#dfe5e8] bg-white/95 p-6 shadow-[0_10px_35px_rgba(18,54,107,0.045)] transition-[box-shadow,border-color] duration-300 hover:border-[#18823b]/40 hover:shadow-[0_24px_55px_rgba(18,54,107,0.14)] sm:p-7"
    >
      <div className={`absolute left-0 top-0 h-1 w-full ${theme.line} opacity-90`} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] transition-opacity duration-300 group-hover:opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 27px, rgba(18,54,107,0.055) 28px, transparent 29px), repeating-linear-gradient(90deg, transparent 0px, transparent 27px, rgba(24,130,59,0.035) 28px, transparent 29px)' }} />
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d8a52b]/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${theme.icon}`}
        >
          <Icon size={27} strokeWidth={1.8} />
        </div>

        <span className={`text-4xl font-black tracking-tight opacity-20 ${theme.number}`}>
          {course.number}
        </span>
      </div>

      <h3 className="relative z-10 text-xl font-bold leading-snug text-[#12366b] sm:text-[22px]">
        {course.title}
      </h3>

      <p className="relative z-10 mt-3 min-h-[52px] text-sm leading-6 text-[#66758a]">
        {course.subtitle}
      </p>

      <div className="relative z-10 my-5 h-px bg-[#e8e8df]" />

      <p className="relative z-10 mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#24344d]">
        Areas covered
      </p>

      <ul className="relative z-10 space-y-3">
        {(expanded ? course.topics : course.topics.slice(0, 4)).map((topic) => (
          <li key={topic} className="flex items-start gap-2.5 text-sm leading-5 text-[#526176]">
            <CheckCircle2
              size={17}
              className={`mt-0.5 shrink-0 ${theme.number}`}
            />
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      {course.topics.length > 4 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="relative z-10 mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-[#1769aa] transition hover:text-[#12366b]"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : `View all ${course.topics.length} topics`}
          <ChevronDown
            size={16}
            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      )}

      <div className="relative z-10 mt-auto pt-7">
        <Link
          to="/free-demo"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#12366b] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#1769aa] focus:outline-none focus:ring-2 focus:ring-[#1769aa] focus:ring-offset-2"
          style={{ color: '#ffffff' }}
        >
          Enquire About This Course
          <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
  )
}

function DemoSection() {
  return (
    <section id="free-demo" className="relative overflow-hidden bg-[#12366b] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#18823b]/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#d8a52b]/20 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Your first step is free"
          title="Experience Our Teaching Before You Enrol!"
          description="Join a free 20–30-minute online demo session and discover a learning path suited to your goals."
          light
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm sm:p-9"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d8a52b] text-[#12366b]">
              <Video size={30} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-200">
              Introductory online session
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Start with a conversation.
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              Tell us about your learning goals. We’ll help you explore suitable
              course options before you decide to enrol.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Clock className="mb-3 text-amber-200" size={23} />
                <p className="text-sm text-white/70">Duration</p>
                <p className="mt-1 font-bold text-white">20–30 minutes</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Globe className="mb-3 text-amber-200" size={23} />
                <p className="text-sm text-white/70">Mode</p>
                <p className="mt-1 font-bold text-white">Online</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#18823b]/25 p-4">
              <CheckCircle2 className="shrink-0 text-green-300" size={22} />
              <div>
                <p className="font-bold text-white">Fee: Free</p>
                <p className="mt-0.5 text-sm text-white/70">
                  For the introductory session
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              What you’ll receive
            </h3>

            <p className="mt-3 leading-7 text-white/70">
              A practical introduction to our teaching approach and your next steps.
            </p>

            <div className="mt-7 space-y-4">
              {demoBenefits.map((benefit, index) => {
                const Icon = benefit.icon

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.07 }}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.09] sm:p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-200">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">{benefit.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <Link
              to="/free-demo"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#d8a52b] px-6 py-4 font-bold text-[#12366b] transition hover:bg-amber-300 sm:w-auto"
            >
              Book a Free Demo
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseKani() {
  return (
    <section className="bg-[#fffdf8] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/20 bg-[#18823b]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#18823b]">
              <Sparkles size={14} />
              The KANI difference
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#12366b] sm:text-5xl">
              Learning designed around <span className="text-[#18823b]">you.</span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#66758a]">
              Build your English skills, strengthen your academic foundation and
              develop the confidence to take your next step.
            </p>

            <Link
              to="/free-demo"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#12366b] px-6 py-3.5 font-bold text-white transition hover:bg-[#1769aa]"
              style={{ color: '#ffffff' }}
            >
              Start Your Learning Journey
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`flex items-start gap-3 rounded-2xl border border-[#e8e8df] bg-white p-5 shadow-sm ${
                  index === reasons.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#18823b]/10 text-[#18823b]">
                  <CheckCircle2 size={18} />
                </div>
                <p className="text-sm font-semibold leading-6 text-[#24344d] sm:text-base">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Courses() {
  const courseTrackRef = useRef(null)
  const [isCoursePaused, setIsCoursePaused] = useState(false)

  const getCourseStep = () => {
    const track = courseTrackRef.current
    if (!track) return 0
    const card = track.querySelector('.kani-course-card')
    if (!card) return track.clientWidth
    const styles = window.getComputedStyle(track)
    const gap = parseFloat(styles.columnGap || styles.gap) || 0
    return card.getBoundingClientRect().width + gap
  }

  const moveCourses = (direction) => {
    const track = courseTrackRef.current
    if (!track) return

    const step = getCourseStep()
    const atStart = track.scrollLeft <= 2
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 3

    if (direction < 0 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
      return
    }
    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  useEffect(() => {
    if (isCoursePaused) return undefined

    const intervalId = window.setInterval(() => {
      const track = courseTrackRef.current
      if (!track) return

      const step = getCourseStep()
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8

      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' })
      }
    }, 1500)

    return () => window.clearInterval(intervalId)
  }, [isCoursePaused])

  return (
    <main className="overflow-hidden bg-[#fffdf8]">
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:pb-24">
        <FloatingLearningElements />

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[#1769aa]/10 blur-[100px]" />
          <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-[#18823b]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d8a52b]/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d8a52b]/30 bg-[#d8a52b]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8b6814]">
                <GraduationCap size={15} />
                Our Courses & Services
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#12366b] sm:text-5xl lg:text-6xl">
                Learn a skill.
                <span className="mt-2 block text-[#18823b]">
                  Build your future.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#66758a] sm:text-lg">
                From confident communication and university coaching to
                international exams and academic research, find learning support
                that aligns with your goals.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#free-demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#12366b] px-6 py-4 font-bold text-white shadow-lg shadow-[#12366b]/15 transition hover:-translate-y-0.5 hover:bg-[#1769aa]"
                  style={{ color: '#ffffff' }}
                >
                  Book a Free Demo
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#course-list"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#12366b]/15 bg-white px-6 py-4 font-bold text-[#12366b] transition hover:border-[#18823b]/40 hover:bg-[#18823b]/5"
                >
                  Explore Courses
                  <ChevronDown size={18} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#526176]">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#18823b]" />
                  Online learning
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#18823b]" />
                  Personalised guidance
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#18823b]" />
                  Free introductory demo
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#18823b]/15 via-transparent to-[#d8a52b]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-[0_24px_70px_rgba(18,54,107,0.12)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#e8e8df] pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#18823b]">
                      Find your path
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-[#12366b]">
                      Your learning journey
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d8a52b]/15 text-[#a87a13]">
                    <GraduationCap size={25} />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {courses.map((course, index) => {
                    const Icon = course.icon
                    const theme = styles[course.color]

                    return (
                      <a
                        href={`#course-${course.id}`}
                        key={course.id}
                        className="group flex items-center gap-3 rounded-2xl border border-[#e8e8df] p-3.5 transition hover:-translate-y-0.5 hover:border-[#18823b]/30 hover:bg-[#18823b]/5"
                      >
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme.icon}`}>
                          <Icon size={21} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold leading-5 text-[#24344d]">
                            {course.title}
                          </p>
                          <p className="mt-1 text-xs text-[#66758a]">
                            {course.topics.length} learning areas
                          </p>
                        </div>

                        <ArrowRight
                          size={17}
                          className="shrink-0 text-[#66758a] transition group-hover:translate-x-1 group-hover:text-[#18823b]"
                        />
                      </a>
                    )
                  })}
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#12366b] p-4 text-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-200">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Not sure where to start?</p>
                    <p className="mt-1 text-xs leading-5 text-white/70">
                      Begin with a free introductory demo.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="course-list" className="relative isolate scroll-mt-24 overflow-hidden bg-[#fffdf8] px-5 py-20 sm:px-8 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-70" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 35px, rgba(18,54,107,0.045) 36px, transparent 37px), repeating-linear-gradient(90deg, transparent 0px, transparent 35px, rgba(24,130,59,0.035) 36px, transparent 37px)' }} />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full bg-[#d8a52b]/10 blur-[90px]" />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore your options"
            title="Courses for every learning goal"
            description="Explore our six course categories, from everyday communication to advanced academic and research support."
          />

          <div
            className="relative"
            onMouseEnter={() => setIsCoursePaused(true)}
            onMouseLeave={() => setIsCoursePaused(false)}
            onFocusCapture={() => setIsCoursePaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsCoursePaused(false)
              }
            }}
            onTouchStart={() => setIsCoursePaused(true)}
            onTouchEnd={() => setIsCoursePaused(false)}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm text-[#66758a]">
                Explore all six learning programmes
              </p>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => moveCourses(-1)}
                  aria-label="Previous courses"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#12366b]/20 bg-white text-[#12366b] shadow-sm transition hover:border-[#d8a52b] hover:bg-[#d8a52b] focus:outline-none focus:ring-2 focus:ring-[#1769aa] focus:ring-offset-2"
                >
                  <ChevronLeft size={21} />
                </button>
                <button
                  type="button"
                  onClick={() => moveCourses(1)}
                  aria-label="Next courses"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#12366b]/20 bg-white text-[#12366b] shadow-sm transition hover:border-[#d8a52b] hover:bg-[#d8a52b] focus:outline-none focus:ring-2 focus:ring-[#1769aa] focus:ring-offset-2"
                >
                  <ChevronRight size={21} />
                </button>
              </div>
            </div>

            <div className="relative -mx-5 px-5 sm:-mx-8 sm:px-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-5 z-10 w-5 bg-gradient-to-r from-[#fffdf8] to-transparent sm:left-8 sm:w-10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-5 z-10 w-5 bg-gradient-to-l from-[#fffdf8] to-transparent sm:right-8 sm:w-10"
              />

              <div
                ref={courseTrackRef}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 sm:gap-6"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                }}
                aria-label="Course catalogue. Swipe, scroll, or use the previous and next buttons to explore courses."
                tabIndex={0}
              >
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="kani-course-card w-[min(82vw,350px)] shrink-0 snap-start sm:w-[350px]"
                  >
                    <CourseCard course={course} index={index} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-[#66758a]">
              <span className="h-2 w-2 rounded-full bg-[#18823b]" />
              <span>Auto-sliding · Use arrows or swipe to explore</span>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-[#d8a52b]/25 bg-[#fffdf8] p-6 text-center sm:p-8">
            <p className="text-lg font-bold text-[#12366b]">
              Need help choosing the right course?
            </p>
            <p className="mt-2 text-sm leading-6 text-[#66758a]">
              Book a free introductory session to discuss your goals and explore suitable options.
            </p>
            <a
              href="#free-demo"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#18823b] px-6 py-3.5 font-bold text-white transition hover:bg-[#126b30]"
            >
              Find Your Course
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <DemoSection />
      <WhyChooseKani />

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-[#12366b] via-[#164b82] to-[#18823b] px-6 py-12 text-center shadow-xl shadow-[#12366b]/10 sm:px-12 sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Sparkles size={14} />
            Your next chapter starts here
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Start Your Learning Journey Today!
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Take the first step towards stronger communication, academic growth
            and greater confidence with KANI English Research Academy.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/free-demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d8a52b] px-6 py-4 font-bold text-[#12366b] transition hover:bg-amber-300"
            >
              Book a Free Demo
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/919092410132"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/20"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-6 text-sm text-white/65">
            Online learning · Free introductory demo session
          </p>
        </div>
      </section>
    </main>
  )
}
