
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'How does tutoring work?',
    answer:
      'We begin by understanding your learning goals and current level. Your tutor then guides you through lessons and practical activities suited to your needs.',
  },
  {
    question: 'What makes KANI English Research Academy different?',
    answer:
      'KANI combines English language learning, communication practice, literature coaching, and academic development in a supportive learning environment.',
  },
  {
    question: 'Can I try a class before booking?',
    answer:
      'Yes. You can request a free demo session to discuss your goals, explore our teaching approach, and find a suitable learning path.',
  },
  {
    question: 'What subjects and levels do you cover?',
    answer:
      'Our programmes include Spoken English and Communication Skills, English Literature and University Coaching, international English exams, competitive exams, research writing, and skill development.',
  },
  {
    question: 'Can I choose 1-to-1 or group tutoring?',
    answer:
      'Please contact the academy to discuss the learning format that suits your goals and the options currently available.',
  },
  {
    question: 'Will tutors know my exact exam board?',
    answer:
      'Share your course, syllabus, or examination details when enquiring so the academy can discuss the most appropriate support for your requirements.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Fees can depend on the programme and your learning requirements. Contact the academy for current course and session fee details.',
  },
  {
    question: "What if my tutor isn't the right fit?",
    answer:
      'Contact the academy to explain your concerns. The team can discuss the available options with you.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="faq"
      className="bg-[#f7f3e9] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[920px]">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#18823b] sm:text-sm">
            NEED TO KNOW
          </p>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#12366b] sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#66758a] sm:text-base sm:leading-7">
            Find answers to common questions about learning with KANI.
          </p>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const answerId = `kani-faq-answer-${index}`

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[15px] border bg-[#fffefa] transition-colors duration-200 ${
                  isOpen
                    ? 'border-[#e5d6bd]'
                    : 'border-[#e6d9c5] hover:border-[#d5c3a6]'
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index
                    )
                  }
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex min-h-[76px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:min-h-[78px] sm:px-7 sm:py-6"
                >
                  <span className="text-[14px] font-bold leading-6 text-[#102f5b] sm:text-base lg:text-[17px]">
                    {faq.question}
                  </span>

                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-200 sm:h-9 sm:w-9 ${
                      isOpen
                        ? 'bg-[#f0e8ff] text-[#6651c8]'
                        : 'bg-transparent text-[#6651c8]'
                    }`}
                    aria-hidden="true"
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.2,
                      }}
                    >
                      <Plus size={19} strokeWidth={1.8} />
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      initial={
                        reduceMotion
                          ? false
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.22,
                        ease: 'easeInOut',
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-7 sm:pb-6">
                        <p className="max-w-[800px] text-sm leading-7 text-[#596b84] sm:text-base sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
