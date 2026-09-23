const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav>
      <div className="logo">JANI BASHA</div>

      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </div>

      <a href="/resume.pdf" download className="resume-button">
        Download Resume
      </a>
    </nav>
  );
}