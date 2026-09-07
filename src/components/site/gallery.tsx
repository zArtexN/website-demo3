import { useEffect, useState } from "react";
import { X } from "lucide-react";

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  className?: string;
};

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, items.length]);

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 md:gap-5">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative mb-3 block w-full overflow-hidden md:mb-5"
            aria-label={`${item.alt} — büyüt`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06] ${item.className || ""}`}
            />
            <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/25" />
            <span className="absolute bottom-4 left-4 translate-y-2 text-[0.65rem] tracking-[0.22em] text-ivory uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeri görseli"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Kapat"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 grid size-11 place-items-center border border-ivory/30 text-ivory"
          >
            <X className="size-5" />
          </button>
          <figure className="max-h-[86vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active]?.src}
              alt={items[active]?.alt ?? ""}
              className="max-h-[78vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-[0.7rem] tracking-[0.22em] text-ivory/70 uppercase">
              {items[active]?.category}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
