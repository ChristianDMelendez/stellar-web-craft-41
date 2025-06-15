
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const PROFILE_IMG = "/placeholder.svg"; // Replace with your profile image if you have one, or leave as is.

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: Mail,
  },
];

const SKILLS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Vite",
  "shadcn/ui",
  "HTML5",
  "CSS3",
  "Git",
  "REST APIs",
  "Figma"
];

const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    period: "Jan 2023 – Present",
    description: [
      "Developed interactive web apps with React and TypeScript.",
      "Helped design their new onboarding UI, increasing user retention 12%.",
      "Built reusable component library with Tailwind and shadcn/ui.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Global Corp",
    period: "Aug 2020 – Dec 2022",
    description: [
      "Worked on large-scale internal tools using modern web stacks.",
      "Mentored 3 new hires and led code quality initiatives.",
      "Automated reporting pipeline, saving 20/hours per month.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Open Portfolio",
    description:
      "An open-source portfolio template built with React, Tailwind CSS, and shadcn/ui. Used by 200+ devs.",
    link: "https://github.com/yourusername/open-portfolio",
    image: "/placeholder.svg",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Design System",
    description: "Created a modular design system for scalable sites, now used on 6+ client projects.",
    link: "https://github.com/yourusername/design-system",
    image: "/placeholder.svg",
    tags: ["shadcn/ui", "Storybook"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen font-inter bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* --- Header/Profile --- */}
        <header className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 mb-16">
          <img
            className="rounded-full border-4 border-primary w-28 h-28 object-cover shadow-lg mx-auto md:mx-0"
            src={PROFILE_IMG}
            alt="Your Name profile"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Your Name
            </h1>
            <h2 className="text-xl mb-4 text-muted-foreground">
              Frontend Developer / Software Engineer
            </h2>
            <p className="text-lg md:max-w-xl mb-4">
              Passionate about building impactful digital products, with a love for elegant UI and efficient code. Available for freelance or remote roles.
            </p>
            <div className="flex gap-6 mt-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:text-primary transition-all"
                >
                  <Icon className="inline-block mr-2 align-text-bottom group-hover:scale-110 transition-transform" size={22} />
                  <span className="hidden md:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* --- Download Resume CTA --- */}
        <div className="mb-12 flex justify-end">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary rounded-lg px-4 py-2 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors group"
            download
          >
            <Download className="mr-1" size={18} />
            Download Resume
          </a>
        </div>

        {/* --- About/Skills/Experience Layout --- */}
        <section className="grid md:grid-cols-5 gap-10 mb-16">
          {/* Skills */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h3 className="text-2xl font-bold mb-2 text-primary">Skills & Tools</h3>
            <ul className="flex flex-wrap gap-2">
              {SKILLS.map(skill => (
                <li
                  key={skill}
                  className="bg-muted text-sm px-3 py-1 rounded-full shadow-sm border"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          {/* Experience */}
          <div className="md:col-span-3 flex flex-col gap-10">
            <h3 className="text-2xl font-bold mb-2 text-primary">Experience</h3>
            <div className="flex flex-col gap-8">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="border-l-4 border-primary pl-6 py-2 group">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="font-semibold text-lg">{exp.role}</div>
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">{exp.company}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">{exp.period}</div>
                  <ul className="list-disc pl-5 text-base space-y-1">
                    {exp.description.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Projects --- */}
        <section id="projects" className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-primary">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border shadow transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="rounded-t-xl w-full h-36 object-cover bg-muted"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-semibold">{proj.title}</h4>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-primary hover:underline"
                      aria-label="Open project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-2">{proj.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {proj.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-accent text-[0.8rem] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact --- */}
        <footer id="contact" className="text-center pt-10 border-t mt-20">
          <h3 className="text-2xl font-bold mb-4 text-primary">Contact</h3>
          <p className="mb-2">
            Interested in working together or have a question?
            <br className="hidden md:inline" /> 
            <a className="text-primary underline mx-1" href="mailto:your@email.com">
              Email
            </a>{" "}
            or message me on{" "}
            <a className="text-primary underline mx-1" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            .
          </p>
          <div className="text-xs text-muted-foreground mb-6">© {new Date().getFullYear()} Your Name</div>
        </footer>

      </div>
    </div>
  );
};

export default Index;
