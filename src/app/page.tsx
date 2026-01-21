import { Header } from "@components/layout/composed/Header";
import { Footer } from "@components/layout/composed/Footer";
import Hero from "@components/domain/hero/Hero";
import { Section } from "@components/layout/base/Section";
import { FeaturedRoles } from "@components/domain/experience/FeaturedRoles";
import {FaCode, FaServer, FaCheckCircle, FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import { SITE_EMAIL, TECHNICAL_SKILLS, WHATSAPP_URL} from "@lib/constants";
import { Button } from "@components/ui/base/Button";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Section id="featured-roles" className="bg-black">
        <FeaturedRoles />
      </Section>
      <Section id="expertise" className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Strategic Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <FaCode className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Modern WordPress & E-commerce</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialist in custom Gutenberg blocks, WooCommerce integrations, and Headless WordPress. Building high-converting shopping experiences and complex POS integrations.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <FaServer className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">React & Full Stack Architecture</h3>
              <p className="text-gray-300 leading-relaxed">
                Crafting pixel-perfect UIs with React and Next.js, backed by robust Laravel/Symfony APIs. Applying rigorous analytical methodologies from a Physics background to software architecture.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            {TECHNICAL_SKILLS.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-blue-900/30 border border-blue-500/50 rounded-full text-blue-200 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="professional" className="bg-black min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Beyond the Code</h2>
          <p className="text-xl text-gray-300 mb-12">
            A &quot;UX-Aware&quot; developer who bridges the gap between backend logic and pixel-perfect UI, 
            ensuring technical solutions drive measurable commercial growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="text-left p-6 border-l-4 border-blue-500 bg-gray-800 rounded-r-lg">
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-400 mr-2" />
                <h4 className="font-bold text-lg">Physics-Driven Logic</h4>
              </div>
              <p className="text-sm text-gray-400">Applying rigorous analytical methodologies to build scalable and optimized solutions.</p>
            </div>
            <div className="text-left p-6 border-l-4 border-blue-500 bg-gray-800 rounded-r-lg">
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-400 mr-2" />
                <h4 className="font-bold text-lg">Analytics & Growth</h4>
              </div>
              <p className="text-sm text-gray-400">Engineering custom GTM/GA4 data layers to track business KPIs and ensure measurable results.</p>
            </div>
            <div className="text-left p-6 border-l-4 border-blue-500 bg-gray-800 rounded-r-lg">
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-400 mr-2" />
                <h4 className="font-bold text-lg">UX-Aware Development</h4>
              </div>
              <p className="text-sm text-gray-400">Translating Figma/Adobe XD designs into high-performance, responsive, and accessible interfaces.</p>
            </div>
            <div className="text-left p-6 border-l-4 border-blue-500 bg-gray-800 rounded-r-lg">
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-blue-400 mr-2" />
                <h4 className="font-bold text-lg">Global Collaboration</h4>
              </div>
              <p className="text-sm text-gray-400">Fluent in English, Spanish, and Portuguese with extensive experience in US and European markets.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" className="bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to scale your team?</h2>
          <p className="text-xl text-blue-100 mb-10">
            I am currently available for new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href={WHATSAPP_URL} className="bg-white text-blue-600 hover:bg-gray-100 border-none">
              <FaWhatsapp className="mr-3 h-5" />
              Chat with me right now
            </Button>
            <Button href={`mailto:${SITE_EMAIL}`} variant="secondary">
              <FaEnvelope className="mr-3 h-5" />
              Send me an Email
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
