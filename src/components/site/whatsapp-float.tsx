import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/business";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
      className="fixed right-6 bottom-24 md:bottom-6 z-40 hidden items-center gap-3 bg-[#25D366] px-5 py-4 text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white shadow-xl transition-all hover:bg-[#20b858] hover:scale-105 hover:-translate-y-1 md:inline-flex rounded-full"
    >
      <MessageCircle className="size-5" aria-hidden />
      WhatsApp
    </a>
  );
}
