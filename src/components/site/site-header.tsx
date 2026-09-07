import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/config/business";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#galeri", label: "Galeri" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 py-3 backdrop-blur-xl shadow-sm"
          : "border-b border-transparent py-6",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-10 lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#top"
          className="min-w-0 font-display text-xl tracking-[0.25em] uppercase text-primary transition-opacity hover:opacity-80"
        >
          Beauty Space
        </a>

        <nav aria-label="Ana menü" className="hidden justify-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[0.75rem] font-medium tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-primary px-7 py-3.5 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] sm:inline-block"
          >
            Randevu Al
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="grid size-11 shrink-0 place-items-center border border-border text-foreground transition-colors hover:bg-secondary/50 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-[68px] z-40 flex flex-col gap-2 overflow-y-auto bg-background px-6 pt-8 pb-32 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/70 py-5 font-display text-3xl text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 w-full bg-primary px-6 py-5 text-center text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground"
          >
            WhatsApp'tan Randevu Al
          </a>
        </div>
      )}
    </header>
  );
}
