
import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Search,
  Sparkles,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const articles = [
  {
    id: 1,
    category: 'Speaking Skills',
    title: 'How to Build Confidence in Spoken English',
    excerpt:
      'Discover practical ways to speak more naturally, overcome hesitation, and make English part of your everyday life.',
    readTime: '5 min read',
    date: 'Learning Guide',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    content: [
      {
        heading: 'Start with small conversations',
        body:
          'You do not need perfect grammar to begin speaking English. Start with short conversations about your day, your interests, or familiar topics. Consistent practice helps you become more comfortable expressing your ideas.',
      },
      {
        heading: 'Build a daily speaking habit',
        body:
          'Set aside ten to fifteen minutes each day to describe your activities, read aloud, or practise a conversation. Recording yourself can help you notice improvements in pronunciation, clarity, and fluency over time.',
      },
      {
        heading: 'Learn phrases, not just individual words',
        body:
          'Practise useful expressions in context. Learning complete phrases can make conversations feel more natural and help you respond without translating every word in your head.',
      },
      {
        heading: 'Focus on progress, not perfection',
        body:
          'Mistakes are a normal part of language learning. Review what you have learnt, ask for feedback, and celebrate small improvements. Confidence develops through regular use, not by waiting until you know everything.',
      },
    ],
  },
  {
    id: 2,
    category: 'Vocabulary',
    title: 'Everyday Vocabulary That Makes a Difference',
    excerpt:
      'Learn how to build a useful vocabulary and remember new words through everyday practice.',
    readTime: '4 min read',
    date: 'Vocabulary Guide',
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=85',
    content: [
      {
        heading: 'Learn words in context',
        body:
          'Instead of memorising isolated word lists, learn new words through sentences, conversations, and reading. Context helps you understand how words are used.',
      },
      {
        heading: 'Use new words actively',
        body:
          'Choose a few new words each day and use them in your own sentences. Speaking and writing with new vocabulary makes it easier to recall later.',
      },
      {
        heading: 'Review regularly',
        body:
          'Return to previously learnt words at intervals. Short, consistent review sessions are easier to maintain than trying to memorise a large list at once.',
      },
    ],
  },
  {
    id: 3,
    category: 'Grammar',
    title: 'Grammar Without the Confusion',
    excerpt:
      'Understand how to practise grammar through examples, meaningful sentences, and everyday communication.',
    readTime: '6 min read',
    date: 'Grammar Guide',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85',
    content: [
      {
        heading: 'Understand the pattern',
        body:
          'Start with a clear example of the grammar rule. Notice how the sentence is structured and what the rule communicates.',
      },
      {
        heading: 'Practise with your own sentences',
        body:
          'Write a few examples related to your daily life. Using grammar to express your own ideas helps turn a rule into a practical skill.',
      },
      {
        heading: 'Apply grammar in conversation',
        body:
          'Try using the structure when speaking or writing. Review mistakes as opportunities to understand the pattern more clearly.',
      },
    ],
  },
  {
    id: 4,
    category: 'Academic Writing',
    title: 'Write Clearer Essays and Research Papers',
    excerpt:
      'Explore ways to organise your ideas, improve paragraph structure, and communicate arguments clearly.',
    readTime: '7 min read',
    date: 'Writing Guide',
    image:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85',
    content: [
      {
        heading: 'Plan before writing',
        body:
          'Identify your main argument, the points you need to explain, and the evidence that supports them. A clear outline makes the writing process more manageable.',
      },
      {
        heading: 'Build focused paragraphs',
        body:
          'Give each paragraph a clear purpose. Introduce the point, explain it, support it with relevant evidence, and connect it to your overall argument.',
      },
      {
        heading: 'Edit for clarity',
        body:
          'After drafting, review the organisation, sentence structure, grammar, and transitions. Clear writing prioritises precise meaning over unnecessarily complicated language.',
      },
    ],
  },
  {
    id: 5,
    category: 'Communication',
    title: 'Communicate More Effectively at Work',
    excerpt:
      'Practise clear professional communication for meetings, presentations, interviews, and workplace conversations.',
    readTime: '5 min read',
    date: 'Communication Guide',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
    content: [
      {
        heading: 'Organise your message',
        body:
          'Before speaking, identify the main point you want your listener to understand. Organising your message helps make meetings and discussions more productive.',
      },
      {
        heading: 'Listen actively',
        body:
          'Pay attention to the speaker, ask relevant questions, and clarify details when necessary. Good communication involves listening as well as speaking.',
      },
      {
        heading: 'Practise professional expressions',
        body:
          'Learn useful language for agreeing, disagreeing respectfully, asking for clarification, and presenting suggestions. Practise these expressions in realistic situations.',
      },
    ],
  },
  {
    id: 6,
    category: 'Exam Preparation',
    title: 'Create a Practical English Study Routine',
    excerpt:
      'Build a realistic learning schedule that balances reading, writing, listening, speaking, and revision.',
    readTime: '4 min read',
    date: 'Study Guide',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85',
    content: [
      {
        heading: 'Set a specific goal',
        body:
          'Choose a clear goal, such as improving speaking fluency, preparing for an examination, or strengthening writing skills. Specific goals help you choose suitable practice activities.',
      },
      {
        heading: 'Balance your practice',
        body:
          'Include reading, listening, speaking, and writing across your weekly schedule. Spend additional time on the skills that need the most attention.',
      },
      {
        heading: 'Review your progress',
        body:
          'At the end of each week, note what you practised, what was difficult, and what you want to improve next. Adjust your routine based on your progress.',
      },
    ],
  },
]

const categories = [
  'All Articles',
  'Speaking Skills',
  'Vocabulary',
  'Grammar',
  'Academic Writing',
  'Communication',
  'Exam Preparation',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#d8a52b]/35 bg-[#d8a52b]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8b6814]">
      <Sparkles size={14} />
      {children}
    </span>
  )
}

function ArticleCard({ article, index, onRead, reduceMotion }) {
  return (
    <motion.article
      variants={fadeUp}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 3) * 0.09 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8e8df] bg-white shadow-[0_8px_30px_rgba(18,54,107,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#1769aa]/30 hover:shadow-[0_20px_45px_rgba(18,54,107,0.10)]"
    >
      <button
        type="button"
        onClick={() => onRead(article)}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-[#e8e8df] text-left"
        aria-label={`Read ${article.title}`}
      >
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12366b]/35 to-transparent opacity-60" />
        <span className="absolute left-4 top-4 rounded-full bg-[#fffdf8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#12366b]">
          {article.category}
        </span>
        <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-[#d8a52b] text-[#12366b] transition duration-300 group-hover:rotate-45">
          <ArrowUpRight size={19} />
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs text-[#66758a]">
          <BookOpen size={14} className="text-[#18823b]" />
          <span>{article.date}</span>
          <span className="text-[#d8a52b]">•</span>
          <Clock3 size={14} />
          <span>{article.readTime}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[#12366b]">
          {article.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-[#66758a]">
          {article.excerpt}
        </p>

        <button
          type="button"
          onClick={() => onRead(article)}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#1769aa] transition hover:text-[#18823b]"
        >
          Read article
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  const [category, setCategory] = useState('All Articles')
  const [search, setSearch] = useState('')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const reduceMotion = useReducedMotion()

  const featured = articles[0]

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      category === 'All Articles' || article.category === category

    const query = search.trim().toLowerCase()
    const matchesSearch =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)

    return matchesCategory && matchesSearch && article.id !== featured.id
  })

  return (
    <main className="overflow-hidden bg-[#fffdf8] text-[#24344d]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#12366b]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '42px 42px',
          }}
        />
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#1769aa]/30 blur-[100px]" />
        <div className="absolute -bottom-40 left-[10%] h-80 w-80 rounded-full bg-[#18823b]/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.17em] text-[#f2cb65]">
              <Sparkles size={14} />
              The KANI learning journal
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ideas that inspire.
              <span className="mt-2 block text-[#f2cb65]">
                Skills that grow.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore practical advice on English learning, communication,
              academic writing, and building confidence in every conversation.
            </p>

            <a
              href="#articles"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#d8a52b] px-6 py-4 text-sm font-bold text-[#12366b] transition hover:-translate-y-0.5 hover:bg-[#edbd46]"
            >
              Explore articles
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#18823b] via-[#d8a52b] to-[#1769aa]" />
      </section>

      {/* Featured article */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-end justify-between gap-4"
          >
            <div>
              <SectionLabel>Editor's pick</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#12366b] sm:text-4xl">
                Start with an idea.
              </h2>
            </div>
            <span className="hidden text-sm text-[#66758a] sm:block">
              Handpicked for your learning journey
            </span>
          </motion.div>

          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="grid overflow-hidden rounded-[1.5rem] border border-[#e8e8df] bg-white shadow-[0_16px_55px_rgba(18,54,107,0.07)] lg:grid-cols-2"
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(featured)}
              className="group relative min-h-[260px] overflow-hidden bg-[#e8e8df] text-left sm:min-h-[360px]"
              aria-label={`Read ${featured.title}`}
            >
              <img
                src={featured.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12366b]/45 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full bg-[#d8a52b] px-4 py-2 text-xs font-bold text-[#12366b]">
                Featured article
              </span>
            </button>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#18823b]">
                {featured.category}
              </span>
              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#12366b] sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#66758a] sm:text-base">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-[#66758a]">
                <Clock3 size={15} />
                {featured.readTime}
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(featured)}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#12366b] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#1769aa]"
              >
                Read featured article
                <ArrowRight size={17} />
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Article grid */}
      <section
        id="articles"
        className="scroll-mt-24 border-y border-[#e8e8df] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Explore and learn</SectionLabel>
            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#12366b] sm:text-4xl">
                  The learning journal
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#66758a]">
                  Practical ideas and useful strategies to support your next
                  step in English.
                </p>
              </div>

              <label className="flex w-full items-center gap-3 rounded-xl border border-[#e8e8df] bg-[#fffdf8] px-4 py-3 md:max-w-xs">
                <Search size={18} className="shrink-0 text-[#66758a]" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search articles..."
                  aria-label="Search articles"
                  className="w-full bg-transparent text-sm text-[#12366b] outline-none placeholder:text-[#98a2b3]"
                />
              </label>
            </div>
          </motion.div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition ${
                  category === item
                    ? 'border-[#12366b] bg-[#12366b] text-white'
                    : 'border-[#e8e8df] bg-[#fffdf8] text-[#66758a] hover:border-[#1769aa]/40 hover:text-[#12366b]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <motion.div
            layout={!reduceMotion}
            className="mt-7 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, delay: reduceMotion ? 0 : index * 0.035 }}
                  className="h-full"
                >
                  <ArticleCard
                    article={article}
                    index={index}
                    onRead={setSelectedArticle}
                    reduceMotion={reduceMotion}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-[#e8e8df] p-10 text-center">
              <Search className="mx-auto text-[#66758a]" size={28} />
              <p className="mt-4 font-bold text-[#12366b]">
                No articles found
              </p>
              <p className="mt-2 text-sm text-[#66758a]">
                Try another search term or select a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setCategory('All Articles')
                }}
                className="mt-4 text-sm font-bold text-[#1769aa] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12366b] px-5 py-16 sm:px-8 sm:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Sparkles className="mx-auto text-[#d8a52b]" size={30} />
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to put learning into practice?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Explore the right learning path for your communication and English
            goals with KANI English Research Academy.
          </p>
          <Link
            to="/free-demo"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#d8a52b] px-6 py-4 text-sm font-bold text-[#12366b] transition hover:-translate-y-0.5 hover:bg-[#edbd46]"
          >
            Book Your Free Demo
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Article reader */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-[#101b2b]/65 p-0 backdrop-blur-sm sm:items-center sm:p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedArticle(null)
            }}
          >
            <motion.article
              initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? {} : { opacity: 0, y: 15, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-dialog-title"
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-[#fffdf8] shadow-2xl sm:rounded-3xl"
            >
              <div className="relative h-52 overflow-hidden sm:h-72">
                <img
                  src={selectedArticle.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12366b]/65 to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#12366b] shadow-lg transition hover:bg-[#d8a52b]"
                >
                  <X size={20} />
                </button>
                <span className="absolute bottom-4 left-5 rounded-full bg-[#d8a52b] px-3 py-1.5 text-xs font-bold text-[#12366b]">
                  {selectedArticle.category}
                </span>
              </div>

              <div className="p-6 sm:p-10">
                <div className="flex items-center gap-2 text-xs text-[#66758a]">
                  <Clock3 size={15} />
                  {selectedArticle.readTime}
                </div>

                <h2
                  id="article-dialog-title"
                  className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#12366b] sm:text-4xl"
                >
                  {selectedArticle.title}
                </h2>

                <p className="mt-4 text-base leading-8 text-[#66758a]">
                  {selectedArticle.excerpt}
                </p>

                <div className="mt-8 space-y-7">
                  {selectedArticle.content.map((paragraph) => (
                    <section key={paragraph.heading}>
                      <h3 className="text-lg font-bold text-[#12366b]">
                        {paragraph.heading}
                      </h3>
                      <p className="mt-3 text-sm leading-8 text-[#536074] sm:text-base">
                        {paragraph.body}
                      </p>
                    </section>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#12366b] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#1769aa]"
                >
                  Back to articles
                  <ArrowRight size={17} />
                </button>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
