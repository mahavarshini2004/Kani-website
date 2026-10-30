
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  "General Enquiry",
  "Research Support Services",
  "Academic Writing Support",
  "English Language Training",
  "30-Day English Programme",
  "Other",
];

const contactCards = [
  {
    icon: Mail,
    label: "Email Us",
    value: "infokaniacademy@gmail.com",
    description: "Send us your questions or enquiries.",
    href: "mailto:infokaniacademy@gmail.com",
    color: "blue",
    action: "Send an email",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 90924 10132",
    description: "Connect with us directly.",
    href: "https://wa.me/919092410132",
    color: "green",
    action: "Chat with us",
  },
];

const cardColors = {
  blue: {
    icon: "bg-[#1769aa]/10 text-[#1769aa] group-hover:bg-[#1769aa] group-hover:text-white",
    border: "hover:border-[#1769aa]/40",
    title: "group-hover:text-[#1769aa]",
    gradient: "from-[#1769aa] to-[#12366b]",
  },
  green: {
    icon: "bg-[#18823b]/10 text-[#18823b] group-hover:bg-[#18823b] group-hover:text-white",
    border: "hover:border-[#18823b]/40",
    title: "group-hover:text-[#18823b]",
    gradient: "from-[#18823b] to-[#1769aa]",
  },
};

const pageBackground = {
  backgroundColor: "#fffdf8",
  backgroundImage: `
    linear-gradient(
      120deg,
      rgba(23,105,170,0.09) 0%,
      rgba(255,253,248,0.12) 40%,
      rgba(24,130,59,0.065) 75%,
      rgba(216,165,43,0.075) 100%
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 39px,
      rgba(18,54,107,0.045) 39px,
      rgba(18,54,107,0.045) 40px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 39px,
      rgba(18,54,107,0.045) 39px,
      rgba(18,54,107,0.045) 40px
    )
  `,
};

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#18823b]/25 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-[#18823b] shadow-sm">
      <Sparkles size={14} className="text-[#d8a52b]" />
      {children}
    </span>
  );
}

function ContactCard({ item }) {
  const Icon = item.icon;
  const color = cardColors[item.color];

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      variants={reveal}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#e8e8df] bg-white/90 p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${color.border}`}
    >
      <div
        className={`absolute left-0 top-0 h-1 w-0 bg-gradient-to-r ${color.gradient} transition-all duration-500 group-hover:w-full`}
      />

      <div
        className={`flex h-13 w-13 items-center justify-center rounded-2xl transition-colors duration-300 ${color.icon}`}
      >
        <Icon size={24} />
      </div>

      <h3
        className={`mt-5 text-xl font-bold text-[#12366b] transition-colors ${color.title}`}
      >
        {item.label}
      </h3>

      <p className="mt-2 break-words text-sm font-semibold text-[#24344d]">
        {item.value}
      </p>

      <p className="mt-2 text-sm leading-6 text-[#66758a]">
        {item.description}
      </p>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1769aa]">
        {item.action}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </motion.a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Enquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setFormError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (
      formData.phone.trim() &&
      !/^[+\d\s()-]{7,20}$/.test(formData.phone.trim())
    ) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter your message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormError("Please check the highlighted fields.");
      return;
    }

    const subject = `KANI Academy Enquiry - ${formData.service}`;

    const body = [
      "Hello KANI English Research Academy,",
      "",
      "I would like to make an enquiry.",
      "",
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim() || "Not provided"}`,
      `Enquiry type: ${formData.service}`,
      "",
      "Message:",
      formData.message.trim(),
    ].join("\n");

    const mailtoUrl =
      `mailto:infokaniacademy@gmail.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <main className="overflow-hidden text-[#24344d]">
      {/* HERO */}
      <section
        style={pageBackground}
        className="relative isolate overflow-hidden pt-20 sm:pt-24 lg:pt-28"
      >
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-[#1769aa]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#18823b]/10 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mx-auto max-w-4xl px-5 pb-16 text-center sm:px-8 sm:pb-20"
        >
          <motion.div variants={reveal}>
            <SectionLabel>We'd love to hear from you</SectionLabel>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-[#12366b] sm:text-5xl lg:text-6xl"
          >
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b] bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#66758a] sm:text-lg"
          >
            Have a question about our programmes, research support, or
            academic guidance? Get in touch with KANI English Research
            Academy. We're here to help you explore the next step in your
            learning journey.
          </motion.p>

          <motion.div variants={reveal} className="mt-7 flex justify-center">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-1 w-12 rounded-full bg-[#1769aa]" />
              <span className="h-1 w-7 rounded-full bg-[#18823b]" />
              <span className="h-1 w-4 rounded-full bg-[#d8a52b]" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section
        style={pageBackground}
        className="relative isolate overflow-hidden pb-20 sm:pb-28"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:px-10">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel>Contact information</SectionLabel>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#12366b] sm:text-4xl">
              Connect with{" "}
              <span className="text-[#1769aa]">KANI</span>
            </h2>

            <p className="mt-4 max-w-md text-base leading-8 text-[#66758a]">
              Whether you need academic guidance or would like to know more
              about our services, reach out using the contact options below.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              {contactCards.map((item) => (
                <ContactCard key={item.label} item={item} />
              ))}
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-5 flex items-start gap-3 rounded-2xl border border-[#d8a52b]/35 bg-white/75 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d8a52b]/15 text-[#9b7111]">
                <ShieldCheck size={21} />
              </div>
              <div>
                <h3 className="font-bold text-[#12366b]">
                  Personalised academic guidance
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#66758a]">
                  Tell us what you need, and we can discuss the appropriate
                  guidance for your learning or research goals.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: ENQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#1769aa]/10 via-transparent to-[#d8a52b]/15 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#d9e4ef] bg-white/95 shadow-[0_22px_70px_rgba(18,54,107,0.09)]">
              <div className="h-1.5 bg-gradient-to-r from-[#1769aa] via-[#18823b] to-[#d8a52b]" />

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1769aa]/10 text-[#1769aa]">
                    <Send size={23} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-extrabold text-[#12366b] sm:text-3xl">
                      Send an Enquiry
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#66758a]">
                      Complete the form below to prepare your enquiry email.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-semibold text-[#24344d]"
                      >
                        Full name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={`w-full rounded-xl border bg-[#fffdf8] px-4 py-3.5 text-sm text-[#24344d] outline-none transition-all placeholder:text-[#66758a]/65 focus:border-[#1769aa] focus:ring-4 focus:ring-[#1769aa]/10 ${
                          errors.name ? "border-red-500" : "border-[#e3e5e2]"
                        }`}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="mt-1.5 text-xs text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-semibold text-[#24344d]"
                      >
                        Email address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={`w-full rounded-xl border bg-[#fffdf8] px-4 py-3.5 text-sm text-[#24344d] outline-none transition-all placeholder:text-[#66758a]/65 focus:border-[#1769aa] focus:ring-4 focus:ring-[#1769aa]/10 ${
                          errors.email ? "border-red-500" : "border-[#e3e5e2]"
                        }`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1.5 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-sm font-semibold text-[#24344d]"
                      >
                        Phone number <span className="font-normal text-[#66758a]">(optional)</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                        className={`w-full rounded-xl border bg-[#fffdf8] px-4 py-3.5 text-sm text-[#24344d] outline-none transition-all placeholder:text-[#66758a]/65 focus:border-[#1769aa] focus:ring-4 focus:ring-[#1769aa]/10 ${
                          errors.phone ? "border-red-500" : "border-[#e3e5e2]"
                        }`}
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" className="mt-1.5 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-2 block text-sm font-semibold text-[#24344d]"
                      >
                        Enquiry type
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#e3e5e2] bg-[#fffdf8] px-4 py-3.5 text-sm text-[#24344d] outline-none transition-all focus:border-[#1769aa] focus:ring-4 focus:ring-[#1769aa]/10"
                      >
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-semibold text-[#24344d]"
                    >
                      Your message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`w-full resize-y rounded-xl border bg-[#fffdf8] px-4 py-3.5 text-sm leading-7 text-[#24344d] outline-none transition-all placeholder:text-[#66758a]/65 focus:border-[#1769aa] focus:ring-4 focus:ring-[#1769aa]/10 ${
                        errors.message ? "border-red-500" : "border-[#e3e5e2]"
                      }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {formError && (
                    <p role="alert" className="text-sm font-medium text-red-600">
                      {formError}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#12366b] via-[#1769aa] to-[#18823b] px-6 py-4 font-bold text-white shadow-lg shadow-[#1769aa]/15 transition-shadow hover:shadow-xl"
                  >
                    Prepare Enquiry Email
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.button>

                  <p className="flex items-start justify-center gap-2 text-center text-xs leading-6 text-[#66758a]">
                    <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#18823b]" />
                    Your email application will open with your enquiry details.
                    Nothing is stored on this website.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate mb-10 overflow-hidden bg-[#12366b] py-16 sm:mb-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(23,105,170,.5),transparent_35%),radial-gradient(circle_at_85%_90%,rgba(24,130,59,.35),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-linear-gradient(0deg,transparent_0px,transparent_39px,rgba(255,255,255,.15)_40px),repeating-linear-gradient(90deg,transparent_0px,transparent_39px,rgba(255,255,255,.12)_40px)]" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-4xl px-5 text-center sm:px-8"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[#f0c75e]">
            <Phone size={25} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            We're Just a Message Away
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
            Reach out to discuss your academic goals and find out how KANI
            English Research Academy can support your journey.
          </p>

          <motion.a
            href="https://wa.me/919092410132"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#fffdf8] px-7 py-3.5 font-bold text-[#12366b] shadow-lg transition-colors hover:bg-[#f0c75e]"
          >
            <MessageCircle size={19} />
            Contact Us on WhatsApp
            <ArrowRight size={17} />
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
