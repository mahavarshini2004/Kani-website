
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    id: 1,
    name: 'Learner Name',
    role: 'English Language Learner',
    initials: 'LN',
    rating: 5,
    featured: true,
    review:
      'The sessions helped me become more comfortable expressing my thoughts in English. The structured practice gave me a clearer idea of what to work on.',
  },
  {
    id: 2,
    name: 'Student Name',
    role: 'Communication Skills Student',
    initials: 'SN',
    rating: 5,
    featured: false,
    review:
      'The learning approach encouraged me to practise regularly and pay more attention to vocabulary, pronunciation, and clear communication.',
  },
  {
    id: 3,
    name: 'Learner Name',
    role: 'Academic Writing Student',
    initials: 'LN',
    rating: 5,
    featured: false,
    review:
      'The guidance helped me think more carefully about organising ideas and communicating them clearly in writing.',
  },
]

const cardReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
}

function Stars({ rating }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`text-xl leading-none ${
            index < rating ? 'text-[#d8a52b]' : 'text-[#d7dce2]'
          }`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ item, index, reduceMotion }) {
  return (
    <motion.article
      variants={cardReveal}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : index * 0.12,
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e8df] bg-[#fffdf8] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(0,0,0,0.20)] sm:p-7 ${
        item.featured ? 'lg:translate-y-0' : ''
      }`}
    >
      {/* Decorative brand details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#18823b]/10 transition-transform duration-500 group-hover:scale-125"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full border-[20px] border-[#1769aa]/[0.07]"
      />

      <div className="relative flex items-center gap-3">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#12366b] text-base font-bold text-white ring-4 ring-[#1769aa]/10">
          {item.initials}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold text-[#12366b]">
            {item.name}
          </h3>
          <p className="mt-1 text-xs leading-5 text-[#66758a]">
            {item.role}
          </p>
        </div>

        <MessageCircle
          size={19}
          className="shrink-0 text-[#18823b]/70 transition group-hover:text-[#18823b]"
          aria-hidden="true"
        />
      </div>

      <div className="relative mt-5">
        <Stars rating={item.rating} />
      </div>

      <blockquote className="relative mt-5 flex-1 text-sm leading-7 text-[#536074]">
        “{item.review}”
      </blockquote>

      <div className="relative mt-6 flex items-center gap-2 border-t border-[#e8e8df] pt-4">
        <span className="h-1.5 w-1.5 rounded-full bg-[#18823b]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#66758a]">
          Learner feedback
        </span>
      </div>
    </motion.article>
  )
}

export default function TestimonialsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="testimonials"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#12366b] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Ruled grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '42px 42px',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#1769aa]/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.17em] text-[#f2cb65]">
            <Sparkles size={14} />
            Learner experiences
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Every learner has
            <span className="mt-2 block text-[#f2cb65]">
              a story to tell.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Discover how learners experience their English learning journey
            with KANI English Research Academy.
          </p>
        </motion.div>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item, index) => (
            <ReviewCard
              key={item.id}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            to="/free-demo"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:border-[#d8a52b] hover:bg-[#d8a52b] hover:text-[#12366b]"
          >
            Start Your Learning Journey
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
