
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock3,
  Globe2,
  GraduationCap,
  Headphones,
  Mail,
  MessageCircle,
  Mic,
  Phone,
  Send,
  Sparkles,
  Target,
  Video,
} from 'lucide-react'

const WHATSAPP_NUMBER = '919092410132'
const CONTACT_EMAIL = 'infokaniacademy@gmail.com'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  level: '',
  course: '',
  preferredTime: '',
  goals: [],
  message: '',
}

const levelOptions = [
  'Beginner',
  'Elementary',
  'Intermediate',
  'Upper Intermediate',
  'Advanced',
  'Not sure yet',
]

const courseOptions = [
  'Spoken English & Communication Skills',
  'English Literature & University Coaching',
  'IELTS / TOEFL Preparation',
  'Competitive Exam Preparation',
  'Research & Academic Writing Support',
  'Certificate & Skill Development',
  'Not sure — recommend a course',
]

const goalOptions = [
  'Speak English confidently',
  'Improve grammar and vocabulary',
  'Prepare for an examination',
  'Improve academic writing',
  'Prepare for interviews',
  'Improve pronunciation',
]

const demoBenefits = [
  {
    icon: Target,
    number: '01',
    title: 'Understand your level',
    description:
      'Discover your current English proficiency and identify areas to improve.',
  },
  {
    icon: Video,
    number: '02',
    title: 'Experience a live lesson',
    description:
      'Get a feel for our interactive and learner-focused teaching approach.',
  },
  {
    icon: Mic,
    number: '03',
    title: 'Receive personal guidance',
    description:
      'Explore suitable courses and practical next steps for your goals.',
  },
]

const sessionSteps = [
  {
    number: '01',
    title: 'Tell us about yourself',
    description:
      'Share your interests, current English level and learning goals.',
  },
  {
    number: '02',
    title: 'Meet your tutor online',
    description:
      'Experience a welcoming introduction to our teaching approach.',
  },
  {
    number: '03',
    title: 'Find your learning path',
    description:
      'Explore a suitable course, schedule and learning plan.',
  },
]

function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.17em] ${
        light
          ? 'border-white/20 bg-white/[0.08] text-[#f2cb65]'
          : 'border-[#d8a52b]/30 bg-[#d8a52b]/10 text-[#8b6814]'
      }`}
    >
      <Sparkles size={14} />
      {children}
    </span>
  )
}

function FieldLabel({ htmlFor, children, required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-semibold text-[#24344d]"
    >
      {children}
      {required && <span className="ml-1 text-red-600">*</span>}
    </label>
  )
}

const fieldClass =
  'w-full rounded-xl border border-[#e3e7eb] bg-[#fffdf8] px-4 py-3.5 text-sm text-[#24344d] outline-none transition duration-200 placeholder:text-[#98a2b3] hover:border-[#1769aa]/50 focus:border-[#1769aa] focus:bg-white focus:ring-4 focus:ring-[#1769aa]/10'

function InputField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
  autoComplete,
}) {
  return (
    <div className="min-w-0">
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  )
}

function GridBackground({ light = false }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: light
          ? `
            linear-gradient(120deg, rgba(23,105,170,0.07), transparent 45%, rgba(24,130,59,0.04)),
            repeating-linear-gradient(0deg, transparent 0px, transparent 39px, rgba(18,54,107,0.045) 39px, rgba(18,54,107,0.045) 40px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 39px, rgba(18,54,107,0.045) 39px, rgba(18,54,107,0.045) 40px)
          `
          : `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
        backgroundSize: light ? 'auto, 40px 40px, 40px 40px' : '44px 44px, 44px 44px',
        maskImage: light
          ? 'linear-gradient(to bottom, black, transparent 95%)'
          : 'linear-gradient(to bottom, black, transparent 90%)',
        opacity: light ? 1 : 0.5,
      }}
    />
  )
}

function PageHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#12366b] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#66758a] sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}

export default function FreeDemo() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const reduceMotion = useReducedMotion()

  const updateField = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (submitted) setSubmitted(false)
  }

  const toggleGoal = (goal) => {
    setForm((previous) => ({
      ...previous,
      goals: previous.goals.includes(goal)
        ? previous.goals.filter((item) => item !== goal)
        : [...previous.goals, goal],
    }))

    if (submitted) setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(false)

    const details = [
      'Hello KANI English Research Academy!',
      '',
      'I would like to book a FREE introductory demo session.',
      '',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || 'Not provided'}`,
      `Current English level: ${form.level}`,
      `Interested course: ${form.course}`,
      `Preferred time: ${form.preferredTime || 'Flexible'}`,
      `Learning goals: ${
        form.goals.length ? form.goals.join(', ') : 'To be discussed'
      }`,
      `Additional details: ${form.message.trim() || 'None'}`,
      '',
      'Please let me know the available demo session timings. Thank you!',
    ].join('\n')

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details)}`

    const whatsappWindow = window.open(
      whatsappURL,
      '_blank',
      'noopener,noreferrer',
    )

    if (whatsappWindow) {
      setSubmitted(true)
    } else {
      window.location.href = whatsappURL
    }
  }

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.5, delay },
        }

  return (
    <main className="overflow-hidden bg-[#fffdf8] text-[#24344d]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#12366b]">
        <GridBackground />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-32 h-[420px] w-[420px] rounded-full bg-[#1769aa]/35 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-[15%] h-[360px] w-[360px] rounded-full bg-[#18823b]/20 blur-[110px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-20">
          <motion.div {...(reduceMotion ? {} : {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.65 },
          })}>
            <Link
              to="/courses"
              className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-[#f2cb65]"
            >
              <ArrowLeft size={16} />
              Explore our courses
            </Link>

            <SectionLabel light>Your English journey starts here</SectionLabel>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              Small steps.
              <span className="mt-2 block text-[#f2cb65]">
                Greater confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Discover what you can achieve with KANI. Experience our online
              teaching approach, talk about your goals, and find the right
              English learning path for you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d8a52b] px-6 py-4 text-sm font-bold text-[#12366b] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#edbd46] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book Your Free Demo
                <ArrowRight size={18} />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                How it works
                <ArrowDown size={17} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f2cb65]" />
                No payment required
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f2cb65]" />
                Online session
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#f2cb65]" />
                20–30 minutes
              </span>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.97, y: 16 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.12 },
                })}
            className="relative mx-auto w-full max-w-lg"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] border border-white/10"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.2)] sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#18823b]">
                    Your first step
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#12366b] sm:text-3xl">
                    Learning starts with you.
                  </h2>
                </div>

                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#d8a52b]/15 text-[#12366b]">
                  <GraduationCap size={29} />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#66758a]">
                A welcoming first conversation to understand your needs and
                help you take the next step with confidence.
              </p>

              <div className="my-7 h-px bg-[#e8e8df]" />

              <div className="space-y-5">
                {demoBenefits.map((benefit) => {
                  const Icon = benefit.icon

                  return (
                    <div key={benefit.number} className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#1769aa]/10 text-[#1769aa]">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#12366b]">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#66758a]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-[#18823b]/15 bg-[#18823b]/5 p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#18823b]/10 text-[#18823b]">
                  <Check size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#12366b]">
                    Your introductory session is free
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#66758a]">
                    Explore your options before deciding to enrol.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#18823b] via-[#d8a52b] to-[#1769aa]" />
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="relative isolate scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-24"
      >
        <GridBackground light />

        <div className="relative mx-auto max-w-7xl">
          <PageHeading
            eyebrow="A simple beginning"
            title="Your first session, made simple."
            description="Get to know our approach, talk about your needs and discover how KANI can support your learning journey."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {sessionSteps.map((step, index) => (
              <motion.article
                key={step.number}
                {...reveal(index * 0.08)}
                className="group relative overflow-hidden rounded-2xl border border-[#e8e8df] bg-white p-6 shadow-[0_8px_30px_rgba(18,54,107,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#1769aa]/30 hover:shadow-[0_18px_45px_rgba(18,54,107,0.08)] sm:p-8"
              >
                <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b] opacity-70 transition-opacity group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black tracking-tight text-[#12366b]/10">
                    {step.number}
                  </span>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#12366b]/5 text-[#1769aa] transition group-hover:bg-[#1769aa]/10">
                    {index === 0 && <MessageCircle size={23} />}
                    {index === 1 && <Video size={23} />}
                    {index === 2 && <Target size={23} />}
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#12366b]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#66758a]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section
        id="demo-form"
        className="relative scroll-mt-20 border-y border-[#e8e8df] bg-white px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.aside
            {...reveal()}
            className="lg:sticky lg:top-28"
          >
            <SectionLabel>Let's get started</SectionLabel>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#12366b] sm:text-4xl lg:text-[42px]">
              Tell us about
              <span className="mt-1 block text-[#18823b]">
                your goals.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#66758a] sm:text-base">
              A little information helps us understand what you want to
              achieve and prepare a more useful introductory conversation.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1769aa]/10 text-[#1769aa]">
                  <Clock3 size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#12366b]">
                    Flexible session timing
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#66758a]">
                    Tell us when you prefer to learn.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#18823b]/10 text-[#18823b]">
                  <Headphones size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#12366b]">
                    Guidance for your needs
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#66758a]">
                    Share your interests, challenges and learning priorities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#d8a52b]/15 text-[#8b6814]">
                  <MessageCircle size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-[#12366b]">
                    Simple WhatsApp follow-up
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#66758a]">
                    Review your details in WhatsApp and send your enquiry.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8e8df] bg-[#fffdf8] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#66758a]">
                Prefer to contact us directly?
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 flex items-start gap-3 break-all text-sm font-semibold text-[#1769aa] transition hover:text-[#12366b]"
              >
                <Mail size={18} className="mt-0.5 shrink-0" />
                {CONTACT_EMAIL}
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-3 text-sm font-semibold text-[#18823b] transition hover:underline"
              >
                <Phone size={18} />
                +91 90924 10132
              </a>
            </div>
          </motion.aside>

          <motion.div
            {...reveal(0.08)}
            className="overflow-hidden rounded-[1.5rem] border border-[#e8e8df] bg-white shadow-[0_20px_65px_rgba(18,54,107,0.08)] sm:rounded-[2rem]"
          >
            <div className="relative isolate overflow-hidden bg-[#12366b] px-6 py-7 sm:px-9 sm:py-9">
              <GridBackground />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f2cb65]">
                    Free introductory session
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Book your demo
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                    Complete the details below to prepare your WhatsApp
                    enquiry.
                  </p>
                </div>

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-[#f2cb65]">
                  <BookOpen size={23} />
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-9">
              <p className="mb-7 text-xs leading-5 text-[#66758a]">
                Fields marked with <span className="text-red-600">*</span>{' '}
                are required.
              </p>

              {submitted && (
                <div
                  role="status"
                  className="mb-6 flex gap-3 rounded-xl border border-[#18823b]/25 bg-[#18823b]/5 p-4 text-sm leading-6 text-[#18823b]"
                >
                  <CheckCircle2 size={21} className="mt-0.5 shrink-0" />
                  <p>
                    WhatsApp was opened with your enquiry details. Please
                    review the message and press Send in WhatsApp to contact
                    KANI.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    id="name"
                    label="Full name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                  />

                  <InputField
                    id="email"
                    label="Email address"
                    value={form.email}
                    onChange={updateField}
                    type="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />

                  <InputField
                    id="phone"
                    label="Phone / WhatsApp number"
                    value={form.phone}
                    onChange={updateField}
                    type="tel"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />

                  <div className="min-w-0">
                    <FieldLabel htmlFor="level" required>
                      Current English level
                    </FieldLabel>
                    <select
                      id="level"
                      name="level"
                      value={form.level}
                      onChange={updateField}
                      required
                      className={fieldClass}
                    >
                      <option value="">Choose your level</option>
                      {levelOptions.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <FieldLabel htmlFor="course" required>
                    Which course interests you?
                  </FieldLabel>
                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={updateField}
                    required
                    className={fieldClass}
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel htmlFor="preferredTime">
                    Preferred session time
                  </FieldLabel>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={updateField}
                    className={fieldClass}
                  >
                    <option value="">Flexible — discuss with me</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Weekend">Weekend</option>
                  </select>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-semibold text-[#24344d]">
                    What would you like to improve?
                  </legend>

                  <p className="mb-4 text-xs leading-5 text-[#66758a]">
                    Select all that apply.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {goalOptions.map((goal) => {
                      const checked = form.goals.includes(goal)

                      return (
                        <label
                          key={goal}
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-sm transition ${
                            checked
                              ? 'border-[#1769aa]/60 bg-[#1769aa]/5 text-[#12366b]'
                              : 'border-[#e8e8df] bg-white text-[#66758a] hover:border-[#1769aa]/40'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleGoal(goal)}
                            className="mt-0.5 h-4 w-4 shrink-0 accent-[#1769aa]"
                          />
                          <span>{goal}</span>
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                <div>
                  <FieldLabel htmlFor="message">
                    Anything else you would like us to know?
                  </FieldLabel>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={updateField}
                    placeholder="Tell us about your goals, challenges, or questions..."
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#12366b] px-6 py-4 font-bold text-white shadow-lg shadow-[#12366b]/10 transition hover:-translate-y-0.5 hover:bg-[#1769aa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8a52b]"
                >
                  <MessageCircle size={19} />
                  Continue with WhatsApp
                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-[#66758a]">
                  Your details will be prepared in a WhatsApp message. You
                  must send the message in WhatsApp to submit your enquiry.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden bg-[#12366b] px-5 py-16 sm:px-8 sm:py-20">
        <GridBackground />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-36 h-80 w-80 rounded-full bg-[#1769aa]/30 blur-[100px]"
        />

        <motion.div
          {...reveal()}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#d8a52b] text-[#12366b] shadow-lg">
            <GraduationCap size={28} />
          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your next chapter starts with a conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Take the first step towards stronger English, clearer
            communication and new opportunities with KANI English Research
            Academy.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#demo-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d8a52b] px-6 py-4 font-bold text-[#12366b] transition hover:-translate-y-0.5 hover:bg-[#edbd46]"
            >
              Book Your Free Demo
              <ArrowRight size={18} />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello KANI English Research Academy! I would like to know more about the free demo session.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 font-bold transition hover:bg-white/20"
              style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
            >
              <MessageCircle size={18} color="#ffffff" />
              <span style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>
                Chat With Our Team
              </span>
            </a>
          </div>

          <Link
            to="/courses"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium transition hover:text-[#f2cb65]"
            style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
          >
            <Globe2 size={16} color="#ffffff" />
            <span style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>
              Explore all courses
            </span>
            <ArrowRight size={15} color="#ffffff" />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
