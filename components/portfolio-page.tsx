"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "next-themes";
import { portfolioData, sections, type SectionId } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const reveal = {
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection("home");
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioData.projects)[number] | null
  >(null);
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <main
      className="relative min-h-screen overflow-x-hidden bg-background bg-grid bg-[size:32px_32px] text-foreground"
      onMouseMove={(event) => {
        mouseX.set(event.clientX - 180);
        mouseY.set(event.clientY - 180);
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[60] h-[360px] w-[360px] rounded-full bg-cyan-400/15 blur-3xl dark:bg-violet-500/15"
        style={{ x: mouseX, y: mouseY }}
      />
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{ scaleX }}
      />
      <BackgroundEffects />
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Section id="home" className="pt-32 md:pt-40">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="projects">
        <Projects onSelect={setSelectedProject} />
      </Section>
      <Section id="research">
        <Research />
      </Section>
      <Section id="education">
        <Education />
      </Section>
      <Section id="contact" className="pb-28">
        <Contact />
      </Section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <Footer />
    </main>
  );
}

function Navbar({
  activeSection,
  menuOpen,
  setMenuOpen,
}: {
  activeSection: SectionId;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 md:px-5">
        <a
          href="#home"
          className="flex items-center gap-2 font-bold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm text-white shadow-glow">
            {portfolioData.copy.navBrandInitial}
          </span>
          <span>{portfolioData.personal.shortName}</span>
        </a>

        <div className="no-scrollbar hidden max-w-[720px] items-center gap-1 overflow-x-auto rounded-full bg-white/30 p-1 text-sm dark:bg-slate-950/30 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                "rounded-full px-3 py-2 text-muted transition hover:text-foreground",
                activeSection === section.id &&
                  "bg-white text-slate-950 shadow-sm dark:bg-slate-800 dark:text-white",
              )}
            >
              {section.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            aria-label="Toggle dark mode"
            className="h-10 w-10 px-0"
            variant="ghost"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button
            aria-label="Toggle mobile menu"
            className="h-10 w-10 px-0 md:hidden"
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-3 grid max-w-sm gap-1 rounded-3xl p-3 md:hidden"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-sm font-medium",
                activeSection === section.id && "bg-cyan-400/10 text-cyan-500",
              )}
            >
              {section.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

function Section({
  id,
  children,
  className,
}: {
  id: SectionId;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-6xl scroll-mt-28 px-5 py-20 md:px-8",
        className,
      )}
    >
      {children}
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div {...reveal} className="mb-10 max-w-3xl">
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="text-3xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function Hero() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
      <motion.div {...reveal}>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-500 dark:text-cyan-300">
          <Sparkles size={16} /> {portfolioData.personal.availability}
        </div>
        <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
          {portfolioData.personal.name}
        </h1>
        <p className="mt-5 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
          {portfolioData.personal.title}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          {portfolioData.personal.tagline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#projects">
            <Button className="w-full sm:w-auto">
              {portfolioData.copy.heroPrimaryCta}{" "}
              <ArrowUpRight className="ml-2" size={17} />
            </Button>
          </a>
          <a href="#contact">
            <Button className="w-full sm:w-auto" variant="secondary">
              {portfolioData.copy.heroSecondaryCta}
            </Button>
          </a>
        </div>
      </motion.div>

      <motion.div {...reveal} className="relative mx-auto w-full max-w-[420px]">
        <div className="absolute -inset-7 animate-pulseGlow rounded-[3rem] bg-gradient-to-br from-cyan-400/25 to-violet-500/25 blur-2xl" />
        <Card className="relative overflow-hidden p-3">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-950">
            <Image
              src={portfolioData.personal.profileImage}
              alt={`${portfolioData.personal.name} profile illustration`}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <>
      <SectionHeader
        eyebrow={portfolioData.copy.about.eyebrow}
        title={portfolioData.copy.about.title}
        description={portfolioData.about.intro}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {portfolioData.about.highlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.08 }}
          >
            <Card className="h-full hover:-translate-y-1 hover:shadow-glow transition">
              <h3 className="text-xl font-bold">{highlight.title}</h3>
              <p className="mt-3 leading-7 text-muted">
                {highlight.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <SectionHeader
        eyebrow={portfolioData.copy.skills.eyebrow}
        title={portfolioData.copy.skills.title}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {portfolioData.skills.map((group, index) => (
          <motion.div
            key={group.category}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.08 }}
          >
            <Card className="h-full">
              <h3 className="mb-5 text-xl font-bold">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-slate-500/10 px-3 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <SectionHeader
        eyebrow={portfolioData.copy.experience.eyebrow}
        title={portfolioData.copy.experience.title}
      />
      <div className="relative space-y-6 border-l border-cyan-400/30 pl-6">
        {portfolioData.experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.title}`}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-cyan-400 shadow-glow" />
            <Card>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted">{item.company}</p>
                </div>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-500">
                  {item.date}
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-muted">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function Projects({
  onSelect,
}: {
  onSelect: (project: (typeof portfolioData.projects)[number]) => void;
}) {
  return (
    <>
      <SectionHeader
        eyebrow={portfolioData.copy.projects.eyebrow}
        title={portfolioData.copy.projects.title}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((project, index) => (
          <motion.article
            key={project.title}
            {...reveal}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ ...reveal.transition, delay: index * 0.08 }}
            className="group cursor-pointer"
            onClick={() => onSelect(project)}
          >
            <Card className="h-full overflow-hidden p-0">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 560px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {portfolioData.copy.projects.cardHint}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 leading-7 text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-500 dark:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>
    </>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof portfolioData.projects)[number] | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="glass max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="90vw"
            className="object-cover"
          />
        </div>
        <div className="p-3 md:p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-black md:text-3xl">{project.title}</h3>
            <Button
              aria-label="Close project modal"
              variant="ghost"
              className="h-10 w-10 px-0"
              onClick={onClose}
            >
              <X size={18} />
            </Button>
          </div>
          <p className="mt-4 leading-8 text-muted">{project.longDescription}</p>
          <p className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm font-medium text-cyan-600 dark:text-cyan-200">
            {project.outcome}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-500/10 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Research() {
  return (
    <>
      <SectionHeader
        eyebrow={portfolioData.copy.research.eyebrow}
        title={portfolioData.copy.research.title}
      />
      <motion.div {...reveal}>
        <Card className="relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
          <h3 className="relative text-2xl font-black">
            {portfolioData.research.title}
          </h3>
          <p className="relative mt-4 max-w-3xl leading-8 text-muted">
            {portfolioData.research.summary}
          </p>
          <div className="relative mt-6 flex flex-wrap gap-2">
            {portfolioData.research.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </Card>
      </motion.div>
    </>
  );
}

function Education() {
  return (
    <>
      <SectionHeader
        eyebrow={portfolioData.copy.education.eyebrow}
        title={portfolioData.copy.education.title}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {portfolioData.education.map((education, index) => (
          <motion.div
            key={education.degree}
            {...reveal}
            transition={{ ...reveal.transition, delay: index * 0.08 }}
          >
            <Card className="h-full">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-500">
                {education.status}
              </span>
              <h3 className="mt-5 text-xl font-bold">{education.degree}</h3>
              <p className="mt-2 text-muted">{education.institution}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function Contact() {
  return (
    <>
      <SectionHeader
        eyebrow={portfolioData.copy.contact.eyebrow}
        title={portfolioData.copy.contact.title}
        description={portfolioData.copy.contact.description}
      />
      <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
        <motion.form
          {...reveal}
          className="glass space-y-4 rounded-[2rem] p-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder="Your name" aria-label="Your name" />
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              aria-label="Your email"
            />
          </div>
          <Input
            name="subject"
            placeholder="Project subject"
            aria-label="Project subject"
          />
          <Textarea
            name="message"
            placeholder="Tell me about your project..."
            aria-label="Project message"
          />
          <Button type="submit">
            {portfolioData.copy.contact.submitLabel}{" "}
            <Send className="ml-2" size={16} />
          </Button>
        </motion.form>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.08 }}
        >
          <Card className="h-full">
            <h3 className="text-2xl font-black">
              {portfolioData.copy.contact.onlineTitle}
            </h3>
            <p className="mt-3 text-muted">
              Email: {portfolioData.contact.email}
            </p>
            <div className="mt-6 grid gap-3">
              <a
                className="flex items-center justify-between rounded-2xl bg-slate-500/10 p-4 transition hover:bg-cyan-400/10"
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-3">
                  <Linkedin size={19} /> LinkedIn
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                className="flex items-center justify-between rounded-2xl bg-slate-500/10 p-4 transition hover:bg-cyan-400/10"
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-3">
                  <Github size={19} /> GitHub
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
}

function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-[10%] top-24 h-72 w-72 animate-float rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[8%] top-48 h-80 w-80 animate-float rounded-full bg-violet-500/20 blur-3xl [animation-delay:1.5s]" />
      <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
    </div>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="border-t border-border/60 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>
          © {year} {portfolioData.personal.name}. {portfolioData.copy.footer}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
