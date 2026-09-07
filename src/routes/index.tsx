import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site/site-header";
import { Reveal } from "@/components/site/reveal";
import { Gallery } from "@/components/site/gallery";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import { business, reviews, services, whatsappUrl } from "@/config/business";
import { siteImages } from "@/config/images";
import {
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const TITLE = "Beauty Space Alchemy | Güzellik & Bakım";
const DESCRIPTION =
  "Adana Ziyapaşa'da premium güzellik ve kişisel bakım deneyimi. Lazer epilasyon, medikal cilt bakımı ve bölgesel incelme hizmetleri. Hemen randevu alın.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: business.name,
          description: DESCRIPTION,
          telephone: business.phone.tel,
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Kurtuluş Mahallesi, Mithat Saraçoğlu Caddesi, Ali Şadibey Apartmanı No:12/1 İç Kapı No:102",
            addressLocality: "Seyhan",
            addressRegion: "Adana",
            postalCode: business.address.postalCode,
            addressCountry: "TR",
          },
          sameAs: [business.instagram.url],
          hasMap: business.maps.place,
        }),
      },
    ],
  }),
  component: Index,
});

const faqs = [
  {
    q: "Randevu süreciniz nasıl işliyor?",
    a: `Randevu almak için WhatsApp üzerinden (${business.phone.display}) bizimle iletişime geçebilirsiniz. İhtiyacınıza uygun seans günü ve saatini birlikte belirliyoruz.`,
  },
  {
    q: "Hangi hizmetleri sunuyorsunuz?",
    a: "Lazer epilasyon, medikal cilt bakımı, bölgesel incelme, SPA ve estetik uygulamalar gibi profesyonel güzellik hizmetleri sunuyoruz.",
  },
  {
    q: "İşlemler öncesi analiz yapıyor musunuz?",
    a: "Evet, özellikle cilt bakımı ve bölgesel incelme işlemlerinden önce uzmanlarımız tarafından cilt ve vücut analizi yapılarak kişiye en uygun protokol belirlenir.",
  },
  {
    q: "Klinik ortamınız ne kadar hijyenik?",
    a: "Tüm uygulamalarımızda en üst düzey hijyen standartları uygulanmaktadır. Tek kullanımlık malzemeler ve düzenli dezenfeksiyon süreçlerimizle sağlığınız güvence altındadır.",
  },
  {
    q: "Fiyatlandırma hakkında nasıl bilgi alabilirim?",
    a: "Uygulanacak protokol kişiden kişiye değiştiği için net fiyat bilgisini ön görüşme veya WhatsApp üzerinden yapacağımız kısa bir değerlendirme sonrası paylaşıyoruz.",
  },
];

function Stars({ count }: { count: number | null }) {
  if (!count) return null;
  return (
    <span className="flex gap-1" aria-label={`${count} yıldız`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-gold text-gold" aria-hidden />
      ))}
    </span>
  );
}

function Index() {
  return (
    <div id="top" className="bg-background overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 lg:pt-48">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="z-10">
              <Reveal>
                <p className="eyebrow flex items-center gap-2">
                  <Sparkles className="size-3 text-gold" />
                  Beauty Space • Ziyapaşa
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 text-[2.8rem] leading-[1.05] text-primary sm:text-6xl lg:text-[4.8rem]">
                  Güzelliğinize
                  <br />
                  <span className="italic text-rose">Kusursuz Bir Dokunuş.</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-muted-foreground">
                  Adana'nın merkezinde, modern teknoloji ve uzmanlığı buluşturan premium güzellik
                  deneyimi. Kendinize ayırdığınız bu özel zamanda, en iyi halinizi keşfedin.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={whatsappUrl("Merhaba, randevu almak için iletişime geçiyorum.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2 bg-primary px-10 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-xl shadow-primary/20"
                  >
                    WhatsApp'tan Randevu Al
                  </a>
                  <a
                    href="#hizmetler"
                    className="inline-flex h-14 items-center justify-center gap-2 border border-border px-10 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-primary transition-all hover:border-primary hover:bg-secondary/30"
                  >
                    Hizmetleri İncele
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={siteImages.hero}
                  alt="Beauty Space Güzellik Merkezi"
                  width={800}
                  height={1000}
                  fetchPriority="high"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 border border-black/5 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 bg-secondary/80 backdrop-blur-md border border-border p-5 lg:flex flex-col justify-center shadow-lg">
                <p className="font-display text-4xl text-primary">{business.rating.value}</p>
                <div className="mt-1 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-2 text-[0.6rem] tracking-wider uppercase text-muted-foreground">
                  Google Puanı
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TRUST BAR */}
        <section
          aria-label="Güven bilgileri"
          className="border-y border-border/50 bg-secondary/40 mt-10"
        >
          <div className="mx-auto max-w-7xl px-5 py-8 md:px-10">
            <Reveal className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-6 text-center md:text-left">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-primary" />
                <div>
                  <p className="text-sm font-medium text-primary">Hijyen ve Sterilizasyon</p>
                  <p className="text-xs text-muted-foreground">En üst düzey klinik standartları</p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-border/80 md:block"></div>
              <div className="flex items-center gap-3">
                <Sparkles className="size-6 text-primary" />
                <div>
                  <p className="text-sm font-medium text-primary">Yeni Nesil Teknoloji</p>
                  <p className="text-xs text-muted-foreground">Modern ve güvenilir cihazlar</p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-border/80 md:block"></div>
              <div className="flex items-center gap-3">
                <Star className="size-6 text-primary" />
                <div>
                  <p className="text-sm font-medium text-primary">Profesyonel Uzmanlar</p>
                  <p className="text-xs text-muted-foreground">Deneyimli ve sertifikalı kadro</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="hizmetler"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
        >
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Hizmetlerimiz</p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl lg:text-6xl">
              Size Özel Uygulamalar
            </h2>
            <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
              Her işlem, cilt yapınız ve beklentileriniz göz önünde bulundurularak profesyonel
              uzmanlarımız tarafından özenle planlanır.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const imageMap: Record<string, string> = {
                "cilt-bakimi": siteImages.services.skin,
                lazer: siteImages.services.laser,
                "bolgesel-incelme": siteImages.featured,
                spa: siteImages.gallery[0].src,
                estetik: siteImages.services.brow,
                diger: siteImages.services.nails,
              };
              return (
                <Reveal
                  key={s.slug}
                  delay={i * 50}
                  className="group flex flex-col bg-card border border-border/60 hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={imageMap[s.slug] || siteImages.hero}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary shadow-sm">
                      {s.category}
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-8">
                    <h3 className="text-2xl text-primary font-display">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-grow">
                      {s.text}
                    </p>
                    <div className="mt-8 pt-6 border-t border-border/50">
                      <a
                        href={whatsappUrl(`${s.title} hizmetiniz hakkında bilgi almak istiyorum.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary transition-colors hover:text-rose group/btn"
                      >
                        Bilgi Al & Randevu{" "}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* FEATURED */}
        <section className="bg-primary text-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-espresso/40"></div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative p-2 border border-ivory/20">
                <img
                  src={siteImages.featured}
                  alt="Vücut Şekillendirme ve Bölgesel İncelme"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow text-ivory/60">Bölgesel İncelme</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl lg:text-6xl text-ivory">
                Değişim,
                <br />
                <span className="italic text-gold">kendinize ayırdığınız zamanla başlar.</span>
              </h2>
              <p className="mt-7 text-[1rem] leading-relaxed text-ivory/80">
                En son teknoloji cihazlarımız ve uzman kadromuzla, vücut hatlarınızı yeniden
                şekillendiriyor, daha sıkı ve pürüzsüz bir görünüme kavuşmanızı sağlıyoruz.
              </p>
              <ul className="mt-8 grid gap-4 text-[0.95rem] text-ivory/90">
                {[
                  "Kişiye özel analiz ve planlama",
                  "Ameliyatsız, konforlu seans deneyimi",
                  "Kalıcı ve gözle görülür sonuçlar",
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                      ✓
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href={whatsappUrl("Bölgesel incelme paketleri hakkında bilgi alabilir miyim?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center bg-ivory px-10 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-primary transition-all hover:bg-white hover:scale-[1.02]"
                >
                  Detaylı Bilgi Al
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="hakkimizda" className="scroll-mt-24 bg-secondary/30">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[1fr_1fr] lg:gap-24 items-center">
            <Reveal>
              <p className="eyebrow">Hakkımızda</p>
              <h2 className="mt-5 text-4xl leading-[1.1] text-primary md:text-5xl">
                Güzellik bir rutin değil, kendinize gösterdiğiniz özenin yansımasıdır.
              </h2>
              <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                <p>
                  Beauty Space olarak Adana Ziyapaşa'da, kaliteden ödün vermeyen hizmet
                  anlayışımızla güzellik ve estetik sektöründe fark yaratmayı hedefliyoruz.
                </p>
                <p>
                  Amacımız; misafirlerimizin kendilerini güvende hissettikleri, steril ve huzurlu
                  bir ortamda, dünyaca kabul görmüş yenilikçi cihazlar ve profesyonel ürünlerle en
                  iyi sonuçları almasını sağlamaktır.
                </p>
              </div>
              <a
                href={business.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 border-b border-primary/30 pb-1 text-[0.7rem] font-bold tracking-[0.2em] uppercase text-primary transition-colors hover:border-primary hover:text-rose"
              >
                Merkezimizi Ziyaret Edin <ArrowUpRight className="size-3.5" />
              </a>
            </Reveal>
            <Reveal delay={100} className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden shadow-xl border border-border/50">
                <img
                  src={siteImages.about}
                  alt="Beauty Space İç Mekan"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="yorumlar" className="scroll-mt-24 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow">Müşteri Yorumları</p>
              <h2 className="mt-4 text-4xl text-primary md:text-5xl">Bizi Tercih Edenler</h2>
              <div className="mt-6 flex flex-col items-center justify-center gap-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Google Değerlendirmeleri
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl text-primary">
                    {business.rating.value}
                  </span>
                  <Stars count={5} />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {reviews.map((r, i) => (
                <Reveal
                  key={i}
                  delay={i * 100}
                  className="flex flex-col bg-secondary/40 p-8 border border-border/40 rounded-sm"
                >
                  <Stars count={r.stars} />
                  <p className="mt-6 flex-grow font-display text-lg leading-relaxed text-primary italic">
                    "{r.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{r.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <ShieldCheck className="size-3 text-green-600" /> Onaylı Müşteri
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-16 text-center">
              <a
                href={business.maps.place}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 border border-primary/20 px-8 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-primary transition-all hover:bg-secondary/50 hover:border-primary/40"
              >
                Tüm Yorumları Google'da İncele <ArrowUpRight className="size-3.5" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* GALLERY */}
        <section id="galeri" className="scroll-mt-24 border-t border-border/50 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Galeri</p>
              <h2 className="mt-4 text-4xl text-primary md:text-5xl">Merkezimizden Kareler</h2>
              <p className="mt-5 text-[0.95rem] text-muted-foreground">
                Sizlere en iyi hizmeti sunmak için tasarlanmış modern ve konforlu alanlarımız.
              </p>
            </Reveal>
            <Gallery items={siteImages.gallery} />
          </div>
        </section>

        {/* FAQ */}
        <section id="sss" className="scroll-mt-24 border-y border-border/70 py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <Reveal className="text-center mb-12">
              <p className="eyebrow">Sıkça Sorulan Sorular</p>
              <h2 className="mt-4 text-3xl text-primary md:text-4xl">Aklınıza Takılanlar</h2>
            </Reveal>
            <Reveal delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
                    <AccordionTrigger className="py-5 text-left font-display text-[1.3rem] text-primary hover:no-underline md:text-[1.4rem]">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="iletisim" className="scroll-mt-24 bg-espresso text-ivory">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
            <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
              <Reveal>
                <p className="eyebrow text-ivory/60">İletişim & Konum</p>
                <h2 className="mt-5 text-4xl leading-[1.1] md:text-5xl text-ivory">
                  Güzellik yolculuğunuza
                  <br />
                  <span className="italic text-gold">hemen başlayın.</span>
                </h2>

                <div className="mt-12 grid gap-8 sm:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-3 text-gold mb-3">
                      <Phone className="size-5" />
                      <h3 className="font-medium tracking-wider uppercase text-xs">
                        Telefon & WhatsApp
                      </h3>
                    </div>
                    <a
                      href={`tel:${business.phone.tel}`}
                      className="block text-lg hover:text-gold transition-colors"
                    >
                      {business.phone.display}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 text-gold mb-3">
                      <MapPin className="size-5" />
                      <h3 className="font-medium tracking-wider uppercase text-xs">Açık Adres</h3>
                    </div>
                    <p className="text-[0.95rem] leading-relaxed text-ivory/80">
                      {business.address.line1}
                      <br />
                      {business.address.line2}
                      <br />
                      {business.address.line3}
                    </p>
                  </div>
                </div>

                <div className="mt-10 border-t border-ivory/20 pt-10">
                  <h3 className="font-medium tracking-wider uppercase text-xs text-gold mb-4">
                    Çalışma Saatleri
                  </h3>
                  <ul className="grid gap-3 text-[0.9rem] text-ivory/80 max-w-md">
                    {business.hours.days.map((d) => (
                      <li
                        key={d.day}
                        className="flex justify-between border-b border-ivory/10 pb-2"
                      >
                        <span>{d.day}</span>
                        <span className={d.value === "Kapalı" ? "text-rose/80" : ""}>
                          {d.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2 bg-ivory px-8 text-[0.75rem] font-bold tracking-[0.2em] uppercase text-espresso transition-all hover:bg-white hover:scale-[1.02]"
                  >
                    <MessageCircle className="size-4" /> WhatsApp'tan Ulaş
                  </a>
                  <a
                    href={business.maps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2 border border-ivory/30 px-8 text-[0.75rem] font-bold tracking-[0.2em] uppercase text-ivory transition-all hover:bg-ivory/10"
                  >
                    Yol Tarifi Al <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={100} className="h-full min-h-[400px]">
                <div className="h-full w-full border border-ivory/20 bg-ivory/5 p-2">
                  <iframe
                    title="Beauty Space Konumu"
                    src={business.maps.embed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full min-h-[400px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1415] text-ivory/60 pb-24 md:pb-8 pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-4 md:px-10 lg:gap-16">
          <div className="md:col-span-1">
            <a href="#top" className="font-display text-xl tracking-[0.25em] uppercase text-ivory">
              Beauty Space
            </a>
            <p className="mt-4 text-[0.85rem] leading-relaxed">
              Adana Ziyapaşa'da premium güzellik ve bakım deneyimi. Güzelliğinize kusursuz bir
              dokunuş için hizmetinizdeyiz.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ivory/60 hover:text-ivory transition-colors"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-ivory font-medium tracking-[0.15em] uppercase text-xs mb-5">
              Hızlı Bağlantılar
            </h4>
            <nav className="flex flex-col gap-3 text-[0.85rem]">
              <a href="#hizmetler" className="hover:text-ivory transition-colors w-fit">
                Hizmetlerimiz
              </a>
              <a href="#hakkimizda" className="hover:text-ivory transition-colors w-fit">
                Hakkımızda
              </a>
              <a href="#galeri" className="hover:text-ivory transition-colors w-fit">
                Galeri
              </a>
              <a href="#yorumlar" className="hover:text-ivory transition-colors w-fit">
                Yorumlar
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-ivory font-medium tracking-[0.15em] uppercase text-xs mb-5">
              Hizmetler
            </h4>
            <nav className="flex flex-col gap-3 text-[0.85rem]">
              <a href="#hizmetler" className="hover:text-ivory transition-colors w-fit">
                Lazer Epilasyon
              </a>
              <a href="#hizmetler" className="hover:text-ivory transition-colors w-fit">
                Medikal Cilt Bakımı
              </a>
              <a href="#hizmetler" className="hover:text-ivory transition-colors w-fit">
                Bölgesel İncelme
              </a>
              <a href="#hizmetler" className="hover:text-ivory transition-colors w-fit">
                Kaş & Kirpik
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-ivory font-medium tracking-[0.15em] uppercase text-xs mb-5">
              İletişim
            </h4>
            <div className="flex flex-col gap-3 text-[0.85rem]">
              <a
                href={`tel:${business.phone.tel}`}
                className="hover:text-ivory transition-colors w-fit"
              >
                {business.phone.display}
              </a>
              <p>{business.district}</p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-gold hover:text-ivory transition-colors w-fit flex items-center gap-1"
              >
                WhatsApp ile ulaşın &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-ivory/10 px-5 pt-8 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem]">
          <p>
            © {new Date().getFullYear()} {business.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

      <WhatsAppFloat />

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_2fr] gap-px border-t border-border bg-border md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a
          href={`tel:${business.phone.tel}`}
          className="flex items-center justify-center gap-2 bg-background py-4 text-[0.7rem] font-bold tracking-[0.15em] uppercase text-primary active:bg-secondary"
        >
          <Phone className="size-3.5" /> Ara
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary py-4 text-[0.7rem] font-bold tracking-[0.15em] uppercase text-primary-foreground active:bg-primary/90"
        >
          <MessageCircle className="size-4" /> Randevu Al
        </a>
      </div>
    </div>
  );
}
