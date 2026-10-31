import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
const LOGO = '/images/kani-logo.jpeg'
const WHATSAPP_NUMBER = '919092410132'

const navItems = [
  { label: 'Home', to: '/', type: 'route', end: true },
  { label: 'Courses', to: '/courses', type: 'route' },
  { label: 'About', to: '/about', type: 'route' },
  { label: '30-Day Programme', to: '/30-day-programme', type: 'route' },
  { label: 'Research Support', to: '/research-support', type: 'route' },
  { label: 'Testimonials', to: '/#testimonials', type: 'section', section: 'testimonials' },
  { label: 'Blog', to: '/blog', type: 'route' },
  { label: 'Contact', to: '/contact', type: 'route' },
]

function LeafAccent() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -left-1.5 -top-[18px] z-0 h-7 w-10">
      <svg viewBox="0 0 42 30" className="h-full w-full" fill="none">
        <path d="M19 27C5 23 1 14 4 5C15 5 22 13 19 27Z" fill="#18823b" />
        <path d="M22 27C15 13 20 3 27 1C34 10 32 20 22 27Z" fill="#58b58a" />
        <path d="M25 28C25 16 33 10 40 12C40 21 34 27 25 28Z" fill="#91cfad" />
        <path d="M19 27L10 10M22 27L26 7M25 28L36 16" stroke="#d7f0df" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function ActiveCapsule({ reduceMotion }) {
  return (
    <motion.span
      layoutId="kani-active-capsule"
      aria-hidden="true"
      transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
      className="absolute inset-0 z-10 rounded-full bg-[#d8a52b] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
    />
  )
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const previousLocation = useRef(`${location.pathname}${location.hash}`)
  const reduceMotion = useReducedMotion()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  // Do not show an active capsule on initial page load; show it after a nav selection.
  const [selectedNav, setSelectedNav] = useState(null)

  // Synchronize the active gold capsule when navigation comes from the footer
  // or browser Back/Forward controls. Keep it hidden on the initial page load.
  useEffect(() => {
    const nextLocation = `${location.pathname}${location.hash}`

    if (previousLocation.current !== nextLocation) {
      previousLocation.current = nextLocation

      if (location.pathname === '/' && location.hash === '#testimonials') {
        setSelectedNav('Testimonials')
      } else {
        const matchingItem = navItems.find(
          (item) => item.type === 'route' && item.to === location.pathname,
        )
        setSelectedNav(matchingItem?.label ?? null)
      }
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    setMobileOpen(false)

    if (!location.hash) return undefined

    const id = decodeURIComponent(location.hash.slice(1))
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    }, 180)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash, reduceMotion])

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return undefined
    }

    const ids = ['testimonials']
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) {
      setActiveSection('')
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const goTo = (to) => {
    setMobileOpen(false)
    const [path, hash] = to.split('#')

    if (location.pathname === path && hash) {
      navigate(to)
      window.setTimeout(() => {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
      }, 100)
      return
    }

    navigate(to)
  }

  const isActive = (item) => {
    // The capsule is intentionally hidden until the user chooses a navigation item.
    // After that, it stays on the last selected item while navigating.
    if (!selectedNav) return false
    if (item.label === selectedNav) return true
    if (item.type === 'section') {
      return selectedNav === item.label && (location.pathname === '/' || item.section === activeSection)
    }
    return false
  }

  const demoClass = 'inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#12366b] px-4 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#194b85] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8a52b] xl:px-5'

  const renderDesktopItem = (item) => {
    const active = isActive(item)
    const commonClass = `relative isolate inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-3 py-3 text-[11px] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8a52b] xl:px-3.5 xl:text-xs ${active ? 'text-[#12366b]' : 'text-[#24344d] hover:text-[#12366b]'}`
    const content = (
      <>
        {active && <ActiveCapsule reduceMotion={reduceMotion} />}
        {active && <LeafAccent />}
        <span className="relative z-20">{item.label}</span>
      </>
    )

    if (item.type === 'section') {
      return (
        <button key={item.label} type="button" onClick={() => { setSelectedNav(item.label); goTo(item.to) }} aria-current={active ? 'location' : undefined} className={commonClass}>
          {content}
        </button>
      )
    }

    return (
      <NavLink key={item.label} to={item.to} end={item.end} onClick={() => setSelectedNav(item.label)} aria-current={active ? 'page' : undefined} className={commonClass}>
        {content}
      </NavLink>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e8df] bg-[#fffdf8]/95 shadow-sm backdrop-blur-md">
      <style>{`
        @media (min-width: 1024px) {
          .kani-mobile-controls {
            display: none !important;
          }
        }
      `}</style>
      <nav aria-label="Main navigation" className="mx-auto flex min-h-[94px] max-w-[1600px] items-center justify-between gap-3 px-3 sm:px-5 lg:px-6 xl:px-8">
        <Link
          to="/"
          aria-label="KANI English Research Academy home"
          className="flex shrink-0 items-center gap-2 sm:gap-2.5"
          onClick={() => { setActiveSection(''); setSelectedNav('Home'); setMobileOpen(false) }}
        >
          <img
            src={LOGO}
            alt="KANI English Research Academy"
            className="h-16 w-52 shrink-0 object-contain sm:h-[72px] sm:w-60 lg:h-[76px] lg:w-[270px]"
          />
        </Link>

        {/* Desktop: navy pill with animated gold capsule and leaf accent */}
        <div className="hidden min-w-0 items-center gap-2 xl:flex">
          <LayoutGroup id="kani-desktop-navigation">
            <div className="flex items-center gap-1 rounded-none bg-transparent p-0 2xl:gap-1.5">
              {navItems.map(renderDesktopItem)}
            </div>
          </LayoutGroup>
          <Link to="/free-demo" onClick={() => setSelectedNav(null)} className={demoClass} style={{ color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>Free Demo</span>
            <ArrowUpRight size={16} aria-hidden="true" style={{ color: '#ffffff', stroke: '#ffffff' }} />
          </Link>
        </div>

        {/* Compact desktop nav for medium screens */}
        <div className="hidden min-w-0 items-center gap-2 lg:flex xl:hidden">
          <LayoutGroup id="kani-compact-navigation">
            <div className="flex items-center gap-0.5 rounded-none bg-transparent p-0">
              {navItems.filter((item) => ['Home', 'Courses', 'About', 'Research Support', 'Contact'].includes(item.label)).map(renderDesktopItem)}
            </div>
          </LayoutGroup>
          <Link to="/free-demo" onClick={() => setSelectedNav(null)} className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full bg-[#12366b] px-3 text-xs font-bold text-white" style={{ color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>Free Demo</span> <ArrowUpRight size={14} aria-hidden="true" style={{ color: '#ffffff', stroke: '#ffffff' }} />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="kani-mobile-controls flex shrink-0 items-center gap-2 lg:hidden">
          <Link to="/free-demo" onClick={() => setSelectedNav(null)} className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full bg-[#12366b] px-3 text-xs font-bold text-white sm:px-4" style={{ color: '#ffffff' }}>
            <span style={{ color: '#ffffff' }}>Free Demo</span> <ArrowUpRight size={14} aria-hidden="true" style={{ color: '#ffffff', stroke: '#ffffff' }} />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="kani-mobile-navigation"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#d9ddd9] text-[#17324f] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8a52b]"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="kani-mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="overflow-hidden border-t border-[#e8e8df] bg-[#fffdf8] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => {
                const active = isActive(item)
                const mobileClass = `flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${active ? 'bg-[#d8a52b] text-[#12366b]' : 'text-[#536074] hover:bg-[#12366b]/5 hover:text-[#12366b]'}`
                const marker = active ? <span className="h-2 w-2 rounded-full bg-[#18823b]" aria-hidden="true" /> : null

                if (item.type === 'section') {
                  return (
                    <button key={item.label} type="button" onClick={() => { setSelectedNav(item.label); goTo(item.to) }} aria-current={active ? 'location' : undefined} className={`${mobileClass} text-left`}>
                      {item.label}{marker}
                    </button>
                  )
                }

                return (
                  <NavLink key={item.label} to={item.to} end={item.end} onClick={() => { setSelectedNav(item.label); setMobileOpen(false) }} aria-current={active ? 'page' : undefined} className={mobileClass}>
                    {item.label}{marker}
                  </NavLink>
                )
              })}

              <Link to="/free-demo" onClick={() => { setSelectedNav(null); setMobileOpen(false) }} className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#12366b] px-5 text-sm font-bold text-white transition hover:bg-[#194b85]" style={{ color: '#ffffff' }}>
                <span style={{ color: '#ffffff' }}>Book a Free Demo</span> <ArrowUpRight size={16} aria-hidden="true" style={{ color: '#ffffff', stroke: '#ffffff' }} />
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full border border-[#18823b]/30 px-5 text-sm font-semibold text-[#18823b] transition hover:bg-[#18823b]/5">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
