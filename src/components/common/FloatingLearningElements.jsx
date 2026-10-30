
import { motion, useReducedMotion } from 'motion/react'
import {
  BookOpen,
  MessageCircle,
  GraduationCap,
  Languages,
  Speech,
} from 'lucide-react'

const floatingItems = [
  {
    id: 'letter-a',
    type: 'letter',
    text: 'Aa',
    position: 'left-[4%] top-[16%]',
    delay: 0,
    duration: 6,
    rotate: -8,
  },
  {
    id: 'speech-one',
    type: 'speech',
    position: 'left-[12%] top-[58%]',
    delay: 1.2,
    duration: 7,
    rotate: 5,
  },
  {
    id: 'book-one',
    type: 'book',
    position: 'right-[10%] top-[15%]',
    delay: 0.6,
    duration: 7.5,
    rotate: 8,
  },
  {
    id: 'letter-e',
    type: 'letter',
    text: 'E',
    position: 'right-[5%] top-[51%]',
    delay: 1.8,
    duration: 6.5,
    rotate: 10,
  },
  {
    id: 'graduation',
    type: 'graduation',
    position: 'right-[23%] bottom-[9%]',
    delay: 0.9,
    duration: 8,
    rotate: -6,
  },
  {
    id: 'language',
    type: 'language',
    position: 'left-[27%] bottom-[8%]',
    delay: 2.2,
    duration: 7,
    rotate: 6,
  },
  {
    id: 'letter-english',
    type: 'letter',
    text: 'Hi!',
    position: 'right-[30%] top-[7%]',
    delay: 1.5,
    duration: 8,
    rotate: -5,
  },
]

function FloatingIcon({ type }) {
  const iconProps = {
    size: 25,
    strokeWidth: 1.7,
  }

  switch (type) {
    case 'speech':
      return <MessageCircle {...iconProps} />

    case 'book':
      return <BookOpen {...iconProps} />

    case 'graduation':
      return <GraduationCap {...iconProps} />

    case 'language':
      return <Languages {...iconProps} />

    default:
      return <Speech {...iconProps} />
  }
}

export default function FloatingLearningElements() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {floatingItems.map((item, index) => {
        const isLetter = item.type === 'letter'

        return (
          <motion.div
            key={item.id}
            className={`absolute ${item.position} ${
              isLetter
                ? 'flex h-12 min-w-12 items-center justify-center rounded-2xl border border-[#d8a52b]/30 bg-[#d8a52b]/10 px-3 text-lg font-extrabold text-[#b88618] backdrop-blur-sm'
                : `flex h-12 w-12 items-center justify-center rounded-2xl border shadow-sm backdrop-blur-sm ${
                    index % 3 === 0
                      ? 'border-[#18823b]/20 bg-[#18823b]/10 text-[#18823b]'
                      : index % 3 === 1
                        ? 'border-[#1769aa]/20 bg-[#1769aa]/10 text-[#1769aa]'
                        : 'border-[#d8a52b]/25 bg-[#d8a52b]/10 text-[#b88618]'
                  }`
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              reduceMotion
                ? { opacity: 0.8, scale: 1 }
                : {
                    opacity: [0.55, 0.95, 0.65, 0.55],
                    y: [0, -14, 5, 0],
                    x: [0, index % 2 === 0 ? 5 : -5, 0],
                    rotate: [
                      item.rotate,
                      item.rotate + 5,
                      item.rotate - 3,
                      item.rotate,
                    ],
                    scale: [1, 1.04, 0.98, 1],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.3 }
                : {
                    duration: item.duration,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          >
            {isLetter ? item.text : <FloatingIcon type={item.type} />}
          </motion.div>
        )
      })}

      {/* Decorative floating dots */}
      <motion.span
        className="absolute left-[44%] top-[24%] h-2 w-2 rounded-full bg-[#18823b]/50"
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.span
        className="absolute right-[18%] bottom-[28%] h-3 w-3 rounded-full bg-[#d8a52b]/60"
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, 9, 0],
                opacity: [0.3, 0.9, 0.3],
              }
        }
        transition={{
          duration: 5,
          delay: 1,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
