import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-card py-4 px-6 md:px-12 flex items-center justify-between relative z-50">
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden md:block text-sm font-medium text-foreground text-blue-700 hover:text-primary transition-colors font-heading"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <span className="text-2xl font-bold text-blue-700 font-heading text-primary tracking-tight">
          RedSegSoluções
        </span>
      </div>

      <button
        className="md:hidden text-foreground z-50"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-card border-t border-border flex flex-col items-center gap-4 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-foreground hover:text-primary transition-colors font-heading"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;