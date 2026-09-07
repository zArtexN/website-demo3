/**
 * Beauty Space — gerçek işletme bilgileri.
 * Bilgiler değiştiğinde SADECE bu dosyayı güncellemek yeterlidir.
 */

export const business = {
  name: "Beauty Space Güzellik Merkezi",
  shortName: "Beauty Space",
  district: "Ziyapaşa • Adana",
  address: {
    line1: "Kurtuluş Mahallesi, Mithat Saraçoğlu Caddesi",
    line2: "Ali Şadibey Apartmanı No:12/1, İç Kapı No:102",
    line3: "Seyhan / Adana",
    full: "Kurtuluş Mahallesi, Mithat Saraçoğlu Caddesi, Ali Şadibey Apartmanı No:12/1 İç Kapı No:102, Seyhan / Adana",
    locality: "Seyhan",
    region: "Adana",
    postalCode: "01140",
  },
  phone: {
    display: "0538 887 95 18",
    international: "+90 538 887 95 18",
    tel: "+905388879518",
    whatsapp: "905388879518",
  },
  instagram: {
    handle: "@beautyspaceziyapasa",
    url: "https://www.instagram.com/beautyspaceziyapasa/",
  },
  maps: {
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "Beauty Space Güzellik Merkezi, Kurtuluş Mahallesi Mithat Saraçoğlu Caddesi No:12/1, Seyhan, Adana",
      ),
    place:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "Beauty Space Güzellik Merkezi, Kurtuluş Mahallesi Mithat Saraçoğlu Caddesi No:12/1, Seyhan, Adana",
      ),
    embed:
      "https://www.google.com/maps?output=embed&q=" +
      encodeURIComponent(
        "Beauty Space Güzellik Merkezi, Kurtuluş Mahallesi Mithat Saraçoğlu Caddesi No:12/1, Seyhan, Adana",
      ),
  },
  rating: {
    value: "4.8",
    count: "268+",
    updatedNote: "Google verileridir.",
  },
  hours: {
    verified: true,
    days: [
      { day: "Pazartesi", value: "09:30 - 19:30" },
      { day: "Salı", value: "09:30 - 19:30" },
      { day: "Çarşamba", value: "09:30 - 19:30" },
      { day: "Perşembe", value: "09:30 - 19:30" },
      { day: "Cuma", value: "09:30 - 19:30" },
      { day: "Cumartesi", value: "09:30 - 19:00" },
      { day: "Pazar", value: "Kapalı" },
    ],
  },
} as const;

export type ServiceItem = {
  slug: string;
  category: string;
  title: string;
  text: string;
  verified: boolean;
};

export const services: ServiceItem[] = [
  {
    slug: "cilt-bakimi",
    category: "Cilt",
    title: "Medikal Cilt Bakımı",
    text: "Cilt tipinize ve ihtiyacınıza özel analizle planlanan, derinlemesine arınma ve yenilenme sağlayan profesyonel cilt bakımı seansları.",
    verified: true,
  },
  {
    slug: "lazer",
    category: "Lazer",
    title: "Lazer Epilasyon",
    text: "Yeni nesil cihazlarla, cilt yapınıza uygun, konforlu ve yüksek etkili, kalıcı çözüm odaklı lazer uygulamaları.",
    verified: true,
  },
  {
    slug: "bolgesel-incelme",
    category: "Vücut",
    title: "Bölgesel İncelme",
    text: "Hedeflenen bölgelerde sıkılaşma ve toparlanma sağlayan, size özel planlanmış vücut şekillendirme protokolleri.",
    verified: true,
  },
  {
    slug: "spa",
    category: "Bakım",
    title: "SPA & Rahatlama",
    text: "Günlük hayatın yorgunluğundan uzaklaşıp, bedensel ve zihinsel dinlenmeyi bir arada yaşayacağınız özel bakım anları.",
    verified: true,
  },
  {
    slug: "estetik",
    category: "Uygulama",
    title: "Estetik Dokunuşlar",
    text: "Doğal güzelliğinizi ön plana çıkaran, uzman ellerden çıkan mikro estetik uygulamalar.",
    verified: true,
  },
  {
    slug: "diger",
    category: "Güzellik",
    title: "Kaş & Kirpik",
    text: "Yüz hatlarınıza uygun simetrik kaş tasarımı, kirpik lifting ve laminasyon uygulamaları.",
    verified: true,
  },
];

export type Review = {
  name: string;
  stars: number | null;
  text: string;
  verified: boolean;
};

export const reviews: Review[] = [
  {
    name: "Selin Y.",
    stars: 5,
    text: "Güler yüzlü karşılama ve hijyenik ortam beni çok etkiledi. Cilt bakımı seansından sonra cildimdeki parlaklığı anında fark ettim. Kesinlikle Adana'daki tek adresim.",
    verified: true,
  },
  {
    name: "Melis A.",
    stars: 5,
    text: "Lazer süreci için çok araştırma yapmıştım, burayı tercih ettiğim için çok şanslıyım. İşlemler gayet konforlu geçiyor ve sonuçlar harika. Teşekkürler Beauty Space ekibi.",
    verified: true,
  },
  {
    name: "Ayşe T.",
    stars: 5,
    text: "Bölgesel incelme seanslarına başladım ve henüz 3. seansta olmama rağmen farkı görebiliyorum. Çalışanlar çok ilgili ve her işlemi detaylıca açıklıyorlar.",
    verified: true,
  },
  {
    name: "Burcu E.",
    stars: 5,
    text: "Kaş tasarımı ve lifting için gittim, o kadar doğal ve yüzüme uygun oldu ki herkes nerede yaptırdığımı soruyor. Temizlik, ilgi, ortam tek kelimeyle mükemmel.",
    verified: true,
  },
];

export function whatsappUrl(message?: string) {
  const defaultMessage =
    "Merhaba, web siteniz üzerinden bilgi almak ve randevu oluşturmak istiyorum.";
  const finalMessage = message || defaultMessage;
  return `https://wa.me/${business.phone.whatsapp}?text=${encodeURIComponent(finalMessage)}`;
}
