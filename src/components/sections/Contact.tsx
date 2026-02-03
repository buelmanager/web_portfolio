'use client'

import FadeInSection from '@/components/animations/FadeInSection'
import TextReveal from '@/components/animations/TextReveal'
import MagneticButton from '@/components/animations/MagneticButton'
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com', color: 'hover:text-primary' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <TextReveal 
            text="연락처" 
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-text-secondary">
            프로젝트에 대한 문의나 협업 제안을 환영합니다
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="bg-surface rounded-2xl p-8 md:p-12 border border-border text-center">
            <div className="mb-8">
              <MagneticButton>
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-hover text-background font-semibold rounded-full transition-all duration-300 hover:shadow-lg cyan-glow"
                >
                  <Mail className="w-5 h-5" />
                  이메일 보내기
                  <ExternalLink className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>

            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <MagneticButton key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-text-muted transition-colors ${link.color}`}
                    title={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <footer className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()} Web Portfolio. All rights reserved.
            </p>
            <p className="text-text-muted text-xs mt-2">
              Built with Next.js, React, TypeScript, Tailwind CSS, and GSAP
            </p>
          </footer>
        </FadeInSection>
      </div>
    </section>
  )
}
