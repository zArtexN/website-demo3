import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import featuredImg from "@/assets/featured.jpg";
import serviceLaser from "@/assets/service-laser.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceBrow from "@/assets/service-brow.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

/**
 * Merkezi Görsel Yönetimi
 * Tüm site görselleri buradan yönetilir. Yeni bir görsel eklemek
 * veya değiştirmek istediğinizde sadece burayı güncelleyin.
 */
export const siteImages = {
  hero: heroImg,
  about: aboutImg,
  featured: featuredImg,
  services: {
    laser: serviceLaser,
    skin: serviceSkin,
    brow: serviceBrow,
    nails: serviceNails,
  },
  gallery: [
    { src: gallery1, alt: "Bakım öncesi hazırlanan detay", category: "Detay" },
    { src: gallery2, alt: "Bekleme alanından bir köşe", category: "Mekan" },
    { src: aboutImg, alt: "Doğal ışık alan uygulama odası", category: "Mekan" },
    { src: gallery4, alt: "Cilt bakımı ürün dokusu", category: "Cilt Bakımı" },
    { src: gallery3, alt: "Resepsiyon alanı", category: "Mekan" },
    { src: serviceBrow, alt: "Uygulama sonrası yakın plan", category: "Uygulama" },
  ],
  instagram: [gallery1, gallery2, gallery3, gallery4, aboutImg, featuredImg],
};
