"use client";
import Image from "next/image";

import { useEffect, useState } from "react";


export default function Home() {
  const [language, setLanguage] = useState("en");
  const [loaded, setLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
  setLoaded(true);

  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <main className="bg-[#0B1220] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Nauefal Ardiansyah & Partners"
    width={50}
    height={50}
  />

  <div>
    <h1 className="font-semibold text-sm md:text-base">
      Nauefal Ardiansyah & Partners
    </h1>

    <p className="text-xs text-[#C8A35F]">
      Trusted Legal Solutions & Halal Compliance Services
    </p>
  </div>
</div> 

          <div className="flex items-center gap-3">

  <button
    onClick={() => setLanguage("en")}
    className={`px-3 py-1 rounded ${
      language === "en"
        ? "bg-[#C8A35F] text-black"
        : "bg-white/10 text-white"
    }`}
  >
    EN
  </button>

  <button
    onClick={() => setLanguage("id")}
    className={`px-3 py-1 rounded ${
      language === "id"
        ? "bg-[#C8A35F] text-black"
        : "bg-white/10 text-white"
    }`}
  >
    ID
  </button>

  <a
    href="https://wa.me/6287711687657"
    className="bg-[#C8A35F] text-black px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90"
  >
    {language === "en" ? "Consultation" : "Konsultasi"}
  </a>

</div>
        </div>
      </header>

      {/* HERO VIDEO */}
      <section className="relative h-screen flex items-center justify-center text-center">

        {/* VIDEO */}
        <video
          className="absolute w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* DARK + BLUR DEPTH */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* HERO CONTENT */}
        <div
          className={`relative z-10 max-w-4xl px-6 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {language === "en"
  ? "Trusted Legal Solutions"
  : "Solusi Hukum Terpercaya"} <br /> {language === "en"
  ? "& Halal Compliance"
  : "& Kepatuhan Halal"}
          </h2>

          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            McKinsey-level legal advisory for corporate law, contracts,
            litigation, and halal compliance services in Indonesia.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="#services"
              className="bg-[#C8A35F] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Services
            </a>

            <a
              href="https://wa.me/6287711687657"
              target="_blank"
rel="noopener noreferrer"
              className="border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              WhatsApp Consultation
            </a>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    <div>
      <div className="w-full h-[450px] bg-white/10 rounded-2xl flex items-center justify-center">
        Founder Photo
      </div>
    </div>

    <div>
      <p className="text-[#C8A35F] uppercase tracking-widest mb-4">
        Founder & Managing Partner
      </p>

      <h2 className="text-4xl font-bold">
        Nauefal Ardiansyah, S.H., CLA
      </h2>

      <p className="mt-6 text-white/70 leading-8">
        Legal practitioner focusing on corporate law,
        contract drafting, business licensing, litigation,
        and halal compliance services across Indonesia.
      </p>
    </div> 
    

  </div>
</section>
<section className="py-24 bg-[#0F172A]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="text-[#C8A35F] uppercase tracking-widest">
        Our Services
      </p>

      <h2 className="text-4xl font-bold mt-4">
        Legal & Halal Services
      </h2>

      <p className="text-white/60 mt-4 max-w-3xl mx-auto">
        Comprehensive legal advisory and halal compliance solutions
        tailored for businesses, entrepreneurs, and organizations.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* LEGAL SERVICES */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-[#C8A35F] mb-6">
          Legal Services
        </h3>

        <ul className="space-y-4 text-white/80">
          <li>✓ Corporate Law Advisory</li>
          <li>✓ Contract Drafting & Review</li>
          <li>✓ Legal Opinion</li>
          <li>✓ Litigation & Dispute Resolution</li>
          <li>✓ Arbitration & Mediation</li>
          <li>✓ Business Licensing (OSS & NIB)</li>
          <li>✓ Due Diligence</li>
          <li>✓ Employment & Labor Law</li>
        </ul>
      </div>

      {/* HALAL SERVICES */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-[#C8A35F] mb-6">
          Halal Compliance Services
        </h3>

        <ul className="space-y-4 text-white/80">
          <li>✓ Halal Certification Assistance</li>
          <li>✓ SJPH Implementation</li>
          <li>✓ Internal Halal Audit</li>
          <li>✓ Halal Supervisor Services</li>
          <li>✓ Halal Documentation Support</li>
          <li>✓ Training & Awareness Programs</li>
          <li>✓ Product Compliance Assessment</li>
          <li>✓ Business Readiness Consultation</li>
        </ul>
      </div>

    </div>

  </div>
</section>
<section className="py-24 bg-[#0F172A]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="text-[#C8A35F] uppercase tracking-widest">
        Contact Us
      </p>

      <h2 className="text-4xl font-bold mt-4">
        Let's Discuss Your Legal Needs
      </h2>

      <p className="text-white/60 mt-4 max-w-3xl mx-auto">
        Whether you require legal advisory, corporate support,
        litigation assistance, or halal compliance consultation,
        our team is ready to assist you.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* CONTACT INFO */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

        <h3 className="text-2xl font-bold mb-8">
          Contact Information
        </h3>

        <div className="space-y-6">

          <div>
            <p className="text-[#C8A35F] font-semibold">
              WhatsApp
            </p>
            <p className="text-white/70">
              +62 877 1168 7657
            </p>
          </div>

          <div>
            <p className="text-[#C8A35F] font-semibold">
              Email
            </p>
            <p className="text-white/70">
              nauefalardiansyah270602@gmail.com
            </p>
          </div>

          <div>
            <p className="text-[#C8A35F] font-semibold">
              Office Location
            </p>
            <p className="text-white/70">
              Depok, Indonesia
            </p>
          </div>

          <div>
            <p className="text-[#C8A35F] font-semibold">
              Business Hours
            </p>
            <p className="text-white/70">
              Monday - Friday
              <br />
              09:00 AM - 05:00 PM
            </p>
          </div>

        </div>
      </div>

      {/* CTA BOX */}
      <div className="bg-[#C8A35F] text-black rounded-3xl p-8 flex flex-col justify-center">

        <h3 className="text-3xl font-bold">
          Schedule a Consultation
        </h3>

        <p className="mt-4 opacity-80">
          Connect with us for legal advisory,
          corporate matters, business licensing,
          litigation support, and halal compliance services.
        </p>

        <a
          href="https://wa.me/6287711687657"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-black text-white px-6 py-4 rounded-full font-semibold text-center hover:scale-105 transition"
        >
          Contact via WhatsApp
        </a>

      </div>

    </div>

  </div>
</section>
<section className="py-24 bg-[#111827]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="text-[#C8A35F] uppercase tracking-widest">
        Our Professionals
      </p>

      <h2 className="text-4xl font-bold mt-4">
        {language === "en"
  ? "Meet Our Team"
  : "Tim Profesional Kami"}
      </h2>

      <p className="text-white/60 mt-4">
        Dedicated legal and halal compliance professionals.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        "Senior Legal Counsel",
        "Legal Associate",
        "Legal Associate",
        "Litigation Specialist",
        "Halal Consultant",
        "Compliance Officer",
        "Paralegal",
        "Research Associate",
      ].map((position, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-[#C8A35F] text-black flex items-center justify-center text-2xl font-bold">
            {index + 1}
          </div>

          <h3 className="mt-6 text-lg font-semibold">
            Team Member
          </h3>

          <p className="mt-2 text-[#C8A35F]">
            {position}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
<section className="py-24 bg-[#111827]">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <video
          className="rounded-2xl shadow-2xl w-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
      </div>

      <div>
        <p className="text-[#C8A35F] uppercase tracking-widest mb-4">
          About The Firm
        </p>

        <h2 className="text-4xl font-bold">
          Nauefal Ardiansyah & Partners
        </h2>

        <p className="mt-6 text-white/70 leading-8">
          Providing strategic legal advisory, dispute resolution,
          business compliance, and halal certification support
          for clients across Indonesia.
        </p>
      </div>

    </div>

  </div>
</section>
      <section
  id="services"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <div className="text-center mb-16">

    <p className="text-[#C8A35F] uppercase tracking-widest">
      Practice Areas
    </p>

    <h2 className="text-4xl font-bold mt-4">
      {language === "en"
  ? "Legal Practice Areas"
  : "Bidang Praktik Hukum"}
    </h2>

    <p className="text-white/60 mt-4">
      Comprehensive legal solutions for businesses and individuals.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        title: "Corporate Law",
        desc: "Corporate structuring, governance, shareholder agreements, and legal compliance.",
        icon: "🏢",
      },
      {
        title: "Contract Drafting",
        desc: "Preparation, review, and negotiation of commercial contracts.",
        icon: "📄",
      },
      {
        title: "Business Licensing",
        desc: "NIB, OSS, operational permits, and regulatory compliance support.",
        icon: "📑",
      },
      {
        title: "Litigation",
        desc: "Representation before courts in civil and commercial disputes.",
        icon: "⚖️",
      },
      {
        title: "Arbitration & Mediation",
        desc: "Alternative dispute resolution with strategic legal advocacy.",
        icon: "🤝",
      },
      {
        title: "Legal Opinion",
        desc: "Professional legal analysis for business and investment decisions.",
        icon: "🖋️",
      },
      {
        title: "Due Diligence",
        desc: "Comprehensive legal review for acquisitions and investments.",
        icon: "🔍",
      },
      {
        title: "Halal Certification",
        desc: "Assistance in halal compliance and certification procedures.",
        icon: "✅",
      },
      {
        title: "Compliance Advisory",
        desc: "Risk management and regulatory compliance programs.",
        icon: "🛡️",
      },
    ].map((service, index) => (
      <div
        key={index}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#C8A35F]/20"
      >
        <div className="text-4xl mb-6">
          {service.icon}
        </div>

        <h3 className="text-xl font-semibold mb-4">
          {service.title}
        </h3>

        <p className="text-white/60 leading-7">
          {service.desc}
        </p>
      </div>
    ))}

  </div>
</section>
<section className="py-24 bg-[#111827]">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <p className="text-[#C8A35F] uppercase tracking-widest">
      Client Testimonials
    </p>

    <h2 className="text-4xl font-bold mt-4">
      Building Trust Through Results
    </h2>

    <div className="mt-12 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10">

      <p className="text-white/70 leading-8 text-lg">
        At Nauefal Ardiansyah & Partners, we strive to deliver
        strategic legal and compliance solutions that create value
        for our clients. Testimonials and success stories will be
        published here as our client portfolio expands.
      </p>

    </div>

  </div>
</section>
{/* WHY CHOOSE US */}
<section className="py-24 bg-[#0F172A]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="text-[#C8A35F] uppercase tracking-widest">
        Why Choose Us
      </p>

      <h2 className="text-4xl font-bold mt-4">
        Modern Legal Solutions with Professional Integrity
      </h2>

      <p className="text-white/60 mt-4 max-w-3xl mx-auto">
        We combine legal knowledge, regulatory understanding, and a
        client-focused approach to provide practical and effective legal
        solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-[#C8A35F] font-semibold text-xl mb-4">
          Legal Expertise
        </h3>

        <p className="text-white/60">
          Strong understanding of corporate law, contracts, business
          licensing, and dispute resolution.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-[#C8A35F] font-semibold text-xl mb-4">
          Halal Compliance Focus
        </h3>

        <p className="text-white/60">
          Supporting businesses in navigating halal certification,
          compliance requirements, and regulatory obligations.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-[#C8A35F] font-semibold text-xl mb-4">
          Responsive Service
        </h3>

        <p className="text-white/60">
          Clear communication, timely responses, and practical legal
          guidance tailored to client needs.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-[#C8A35F] font-semibold text-xl mb-4">
          Regulatory Insight
        </h3>

        <p className="text-white/60">
          Up-to-date understanding of Indonesian business regulations,
          licensing systems, and compliance frameworks.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-24 bg-[#0B1220]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="text-[#C8A35F] uppercase tracking-widest">
        Professional Credentials
      </p>

      <h2 className="text-4xl font-bold mt-4">
        Qualifications & Expertise
      </h2>

      <p className="text-white/60 mt-4 max-w-3xl mx-auto">
        Dedicated to delivering professional legal and compliance
        solutions through continuous learning and practical experience.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        "Bachelor of Law (S.H.)",
        "Certified Legal Auditor (CLA)",
        "Halal Supervisor",
        "Legal & Compliance Consultant",
        "Corporate Law Advisory",
        "Business Licensing & OSS",
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl
          border border-[#C8A35F]/20
          bg-white/5 backdrop-blur-lg
          p-8
          hover:border-[#C8A35F]
          hover:-translate-y-2
          transition-all duration-500"
        >

          <div className="absolute inset-0 bg-gradient-to-br from-[#C8A35F]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative z-10">

            <div className="w-14 h-14 rounded-2xl bg-[#C8A35F] text-black flex items-center justify-center font-bold text-xl mb-6">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold">
              {item}
            </h3>

            <div className="mt-4 w-16 h-[2px] bg-[#C8A35F]"></div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
      {/* VALUE STRIP */}
      <section className="bg-white/5 py-16 text-center px-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          Precision. Integrity. Legal Excellence.
        </h3>
        <p className="text-white/60 mt-3 max-w-2xl mx-auto">
          Combining corporate legal expertise with modern compliance solutions for businesses in Indonesia.
        </p>
      </section>
{/* LIVE CLOCK */}
<div className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-black/60 to-[#C8A35F]/10 backdrop-blur-md border border-white/10 rounded-3xl px-5 py-3">

  <div className="text-[#C8A35F] text-lg font-semibold">
    {currentTime.toLocaleTimeString("id-ID")}
  </div>

  <div className="text-white/60 text-sm">
    {currentTime.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })}
  </div>

</div>
      {/* FLOATING WHATSAPP CTA */}
      <a
        href="https://wa.me/6287711687657"
        className="fixed bottom-6 right-6 bg-[#C8A35F] text-black px-6 py-3 rounded-full shadow-xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#C8A35F]/40 z-50"
      >
        Chat WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="text-center py-10 text-white/40 text-sm">
        © {new Date().getFullYear()} Nauefal Ardiansyah & Partners
      </footer>

    </main>
  );
}