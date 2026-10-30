
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react'

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: '30-Day Programme', href: '/30-day-programme' },
]

const learningLinks = [
  { label: 'Research Support', href: '/research-support' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex w-fit items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-[#d8a52b]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#18823b] transition-colors group-hover:bg-[#d8a52b]" />
      {children}
    </a>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#12366b] text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border-[40px] border-white/[0.035]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#18823b]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-8 sm:pt-16 lg:px-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.15fr] lg:gap-10">
          {/* Academy branding */}
          <div>
            <a
              href="/"
              aria-label="KANI English Research Academy home"
              className="inline-flex items-center gap-3"
            >
              <img
                src="/images/kani-logo.jpeg"
                alt="KANI English Research Academy logo"
                className="h-14 w-14 rounded-xl bg-white object-contain p-1 sm:h-16 sm:w-16"
              />

              <span>
                <span className="block text-xl font-extrabold tracking-wide">
                  KANI
                </span>
                <span className="mt-1 block text-[10px] font-semibold tracking-wide text-[#a8e0b7] sm:text-xs">
                  ENGLISH RESEARCH ACADEMY
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Speak English confidently. Communicate effectively. Grow
              professionally. Learn with guidance designed around your goals.
            </p>

            <div className="mt-5 flex items-start gap-3 text-sm text-white/75">
              <Sparkles
                size={18}
                className="mt-0.5 shrink-0 text-[#d8a52b]"
              />
              <span>
                Learn Globally. Communicate Confidently. Achieve Excellence.
              </span>
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h2 className="text-base font-bold text-white">
              Explore
            </h2>
            <div className="mt-5 flex flex-col items-start gap-3.5">
              {exploreLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Learning links */}
          <div>
            <h2 className="text-base font-bold text-white">
              Learning Support
            </h2>
            <div className="mt-5 flex flex-col items-start gap-3.5">
              {learningLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>

            <a
              href="/free-demo"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d8a52b] transition hover:gap-3"
            >
              Free Demo
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="text-base font-bold text-white">
              Let's Connect
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/65">
              Have questions about our courses or research support? Get in touch.
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:infokaniacademy@gmail.com"
                className="flex items-start gap-3 text-sm text-white/75 transition hover:text-[#d8a52b]"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#a8e0b7]"
                />
                <span className="break-all">
                  infokaniacademy@gmail.com
                </span>
              </a>

              <a
                href="tel:+919092410132"
                className="flex items-center gap-3 text-sm text-white/75 transition hover:text-[#d8a52b]"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-[#a8e0b7]"
                />
                +91 90924 10132
              </a>

              <a
                href="https://wa.me/919092410132"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#a8e0b7] hover:bg-white/5"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Free demo banner */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:mt-14 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#d8a52b]/15 text-[#d8a52b]">
              <GraduationCap size={25} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                Ready to take the next step?
              </h2>
              <p className="mt-1 text-sm leading-6 text-white/65">
                Discover the right learning programme for your goals.
              </p>
            </div>
          </div>

          <a
            href="/free-demo"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#d8a52b] px-5 py-3 text-sm font-bold text-[#12366b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c85c] sm:mt-0 sm:w-auto sm:shrink-0"
          >
            Book a Free Demo
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} KANI English Research Academy. All rights reserved.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 transition hover:text-[#d8a52b]"
          >
            <BookOpen size={14} />
            Learn Globally. Grow Confidently.
          </a>
        </div>
      </div>
    </footer>
  )
}
