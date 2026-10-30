
import { useState } from 'react'

const Tagline = () => (
  <span className="kani-tagline-text">
    Speak English Confidently.
    <span className="kani-tagline-separator"> ✦ </span>
    Communicate Effectively.
    <span className="kani-tagline-separator"> ✦ </span>
    Grow Professionally.
    <span className="kani-tagline-separator"> ✦ </span>
  </span>
)

export default function TaglineMarquee() {
  const [paused, setPaused] = useState(false)

  return (
    <div
      className="kani-tagline-marquee"
      aria-label="Speak English Confidently. Communicate Effectively. Grow Professionally."
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="kani-tagline-track"
        style={{
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        <Tagline />
        <Tagline />
        <Tagline />
        <Tagline />
        <Tagline />

      </div>
    </div>
  )
}
