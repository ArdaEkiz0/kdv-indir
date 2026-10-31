---
name: KDV Çapraz Kontrol
description: Satış faturası ile e-Fatura karşılaştırma programının satış sitesi — tek zemin, tek mürekkep, tek mavi aksan.
colors:
  page-bg: "#f2f3f5"
  surface: "#ffffff"
  ink: "#14161a"
  muted: "#565e69"
  brand-blue: "#2563eb"
  blue-soft: "#dfe9ff"
typography:
  display:
    fontFamily: "'Clash Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5.2vw, 5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Clash Grotesk', system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Clash Grotesk', system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Clash Grotesk', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "'Clash Grotesk', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    letterSpacing: "0em"
rounded:
  sm: "6px"
  chip: "4px"
spacing:
  margin: "clamp(1.25rem, 2.8vw, 2.5rem)"
  gutter: "clamp(1rem, 2vw, 2rem)"
  section: "clamp(5.5rem, 11vw, 12rem)"
components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0 1.4rem"
    height: "3rem"
  button-primary-active:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0 1.4rem"
    height: "3rem"
  button-quiet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 1.4rem"
    height: "3rem"
  plan-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "clamp(1.5rem, 3vw, 2.5rem)"
  faq-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  contact-field:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0 0"
---

# Design System: KDV Çapraz Kontrol

## Overview

**Creative North Star: "The Accountant's Ledger"**

Satış sitesi, ürünün kendisi gibi konuşur: masaüstü çapraz kontrol uygulamasının doğruluğunu, sessiz bir "hesap defteri" düzenine taşır. Tek zemin (gri), tek mürekkep (neredeyse siyah), tek aksan (marka mavisi) — başka renk yok. Tipografi tek ailedir (Clash Grotesk, yalnız 400/500 ağırlık), düzen 12 sütunlu ızgaraya oturur, tüm yüzeyler tek yarıçapı (6px) ve köşe-kesme (notched corner) dilini paylaşır.

Sayfa iki gerçeklik arasında bölünür: metin dünyası (gri zeminde beyaz yüzeyler, net tip) ve ürün dünyası (mavi sahneler: hero canlı karşılaştırma tablosu, üç boyutlu çapraz kontrol sahnesi, kapanış bandı). Ürün fragmanları bağımsız "yardımcı defter" olarak çerçevelenir — tablo, chip ve şerit dili Achromatic ledger dilidir, davetkar "app mockup" tropundan uzak.

**Key Characteristics:**
- Tek zemin + tek mürekkep + tek aksan; ton farkı yalnız muted metin ve zebra satırlar
- 7 adımlı tip ölçeği (14/18/22/26/32/44/75), yalnız Clash Grotesk 400/500
- Tek yarıçap 6px + üst-sol köşe kesme (72px) mavi sahnelerde signature
- Statik düz yüzeyler; derinlik yalnız ton katmanı ve renk tersinimi ile
- Gerçek uygulama ekran görüntüleri; sahte sosyal kanıt ve istatistik yok
- prefers-reduced-motion: yolculuk tamamen durur, içerik her zaman görünür

## Colors

Palet karakteri: "muhasebe kâğıdı" sükûneti — soğuk gri zemin, beyaz yüzeyler, tek mavi aksanı ışıltı gibi nadiren ve kasıtlı kullanır.

### Primary
- **Marka Mavisi** (#2563eb): Tek aksan. Butonlar, seçili durumlar, mavi sahne zeminleri (`hero__stage`, three.js sahne, CTA bandı), karşılaştırma tablosunun `.us` hücreleri, SSS açık durumu, düzeltme çubuğu. Beyaz üzerine ve üzerinde beyaz olmak üzere çift yönlü çalışır.

### Neutral
- **Sayfa Zemini** (#f2f3f5): Gri; tüm sayfanın zemini, karşılaştırma zebra hücreleri dışında her yerde aynı.
- **Yüzey** (#ffffff): Kartlar (plan, SSS, iletişim, showcase, ui fragman tablosu) ve buton-quiet zemini.
- **Mürekkep** (#14161a): Tüm metin, koyu gri-siyah.
- **Muted** (#565e69): İkincil metin, ipuçları, kapatılabilir olamayan showcase isimleri.
- **Mavi Yumuşak** (#dfe9ff): Mavi zemin üzerindeki ikincil metin (`accent-soft`), legend etiketleri.

### Named Rules
**The Tek Aksan Rule.** Mavi sayfanın tek renkli sesidir; bir ekranda yüzeyin onda birinden fazlasını kaplamaz. Zemin grisi ve yüzey beyazı dışında hiçbir ek renk (yeşil başarı, kırmızı hata dahil) sahne dışına çıkmaz — ürün dilinde durum renkleri yalnız ui fragmanlarının içinde yaşar.

## Typography

**Display Font:** Clash Grotesk (system-ui, sans-serif fallback)
**Body Font:** Clash Grotesk (system-ui, sans-serif fallback)
**Label/Mono Font:** Yok — sayısal hizalama `font-variant-numeric: tabular-nums` ile yapılır, mono aile kullanılmaz.

**Character:** Tek aile, iki ağırlık. 400 gövde metni, 500 başlıklar. Kabarıklık yok; başlıklar ve bedenler aynı ses, yalnız boyut ve izleme farkıyla ayrılır.

### Hierarchy
- **Display / Hero Başlığı** (500, clamp(2.75rem→5rem) yani 44→80px, leading 0.98, tracking -0.03em): İlk ekrandaki h1, en fazla 2 satır. "KDV'de / fark kalmasın."
- **Headline / Bölüm Başlığı** (500, 44px, leading 1.06, tracking -0.025em): Bölüm h2'leri; en fazla 2 satır. Showcase isim sekmesi de bu boyutta.
- **Title / Alt Başlık** (500, 22px, tracking -0.015em): Adım h3'leri, lisans dönem etiketleri, kanıt satır öğeleri, SSS soruları, iletişim değerleri.
- **Lead** (400, 26px, leading 1.35): H1 altı anlatım paragrafı, iletişim prompt'u; max 40ch.
- **Body** (400, 18px, leading 1.5): Ekran dışı tüm metin; max 64ch (runin sütununda 58ch).
- **Label / Küçük** (400, 14px, leading 1.45): Meta satırı, altyazılar, footer, legend.
- **UI Fragman** (400, 13px / chip 11px, tabular-nums): ui tablolarının iç dünyası.

### Named Rules
**The İki Ağırlık Rule.** Yalnız 400 ve 500. Kalın (700) ve yarı-kalın (600) asla kullanılmaz; vurgu `.run b` bile 500'e eşlenir.

## Layout

12 sütunlu ızgara, `--gutter: clamp(1rem→2rem)`, sayfa kenarı `--margin: clamp(1.25rem→2.5rem)`. Bölüm boşluğu `--section: clamp(5.5rem→12rem)` olup bölümler `padding-block: section/2` alır.

Merkez sütun yok: her bölüm kendi yerleşimini kurar ama hepsi aynı 12 sütuna yaslanır (runin 4/span5, sahne 1/span4 + 5/span8, showcase 1/span5 + 6/span7, karşılaştırma 1.2:1:1:0.8 dört sütun, SSS 1/span4 + 5/span8, CTA 1/span6 + 8/span5, iletişim 1/span6 + 8/span5).

- **Masaüstü (≥64em):** hero copy 1/span5, sahne (mavi bant) absolute sağda `left: 44%`, kesik köşe üst-sol.
- **Tablet (48–64em):** hero yığın düzenine döner; sahne relative olur, `height: 34rem`.
- **Telefon (<48em):** her şey tek sütun; hero sahne `height: 62svh`; showace isimleri yatay saran isim dizisi; runin kareleri 2 sütun + son kare tam genişlik.

Sayfa yatay taşmayı `overflow-x: clip` ile kapatır; ui fragman tablosu kendi içinde `overflow-x: auto` kayar.

## Elevation & Depth

Gölge sistemi yok: hiçbir yüzeyde `box-shadow` kullanılmaz. Derinlik dört yolla verilir:

1. **Ton katmanı:** gri zemin üstüne beyaz yüzeyler (kart, sahne, showcase) — en düşük adım.
2. **Renk tersinimi:** mavi yüzeyler (CTAyı izleyen geri kalan, SSS açık durumu, `.us` hücresi) gri dünyanın "üstüne çıkar" — dünyadaki en yüksek gerilim.
3. **Zebra satırlar** (#eaecef): karşılaştırma tablosunda okuma sırası.
4. **Köşe kesme:** mavi sahnelerin üst-sol 72px'lik kesiği, düz gri dünyada yüzeyin "kesilerek yerleştirildiği" hissini verir.

### Named Rules
**The Düz Yüzey Rule.** Yüzeyler sükunette düzdür. Yükselme, animasyon veya hover durumunda bile yoktur — yalnız basılı anlarda buton `scale(0.97)` ile çöker.

## Shapes

Tek yarıçap: **6px** (`--radius`) — tüm yüzeyler, kartlar, tablolar, giriş alanları bundan sapmaz (yalnız chip 4px, legend işaretçileri 2px, iletişim gönder düğmesi daire).

Signature form: **üst-sol köşe kesme** — `clip-path: polygon(0 72px, 72px 0, 100% 0, 100% 100%, 0 100%)`. Yalnız mavi sahnelerde (hero sahnesi, CTA bandı) kullanılır; telefonlarda kesi 56px'e düşer. Köşe kesme gri düz dünyada asla kullanılmaz.

Panjur (shutter): hero olmayan ekran görüntüleri `img` üzerinde `clip-path: inset(0 0 100% 0)` ile kapalı gelir; görünüme 1100ms `--ease-in-out` ile açılır, tek seferlik.

## Components

### Buttons
- **Shape:** 6px yarıçap, `min-height: 3rem`, `padding: 0 1.4rem`, `white-space: nowrap`.
- **Primary (`.button`):** marka mavisi zemin, beyaz metin. Aktif: `scale(0.97)` 140ms.
- **Quiet (`.button--quiet`):** beyaz zemin, mürekkep metni (lisans kartlarındaki "Lisans al").
- **Stage (`.button--stage`):** mavi sahne üzerinde beyaz zemin, mavi metin (CTA).
- **Hover / Focus:** hover'da renk değişimi yok; odak 2px mavi outline, 3px offset.

### Chips (yalnız ui fragmanlarında)
- **Style:** 11px, 4px yarıçap, solunda 8px kare işaret. Varsayılan: gri zemin (#eef0f3), muted metin, işaret opacity 0.55.
- **Durumlar:** `--flag` mavi zemin/beyaz; `--ghost` tamamen saydam zemin + kesikli kenarlı işaret (eksik kayıt). Bu renk üçlüsü ekran dışına taşmaz.

### Cards / Containers (`.plan`, `.faq details`, `.contact__rows`, `.showcase__stage`)
- **Corner:** 6px. **Background:** surface. **Shadow:** yok.
- **Border:** yok (bölme zebra satırlar ve boşlukla). **Padding:** `clamp(1.5rem→2.5rem)` plan kartlarında; SSS 16/24px; iletişim 0.5rem/20px.
- **FAQ açık durumu:** yüzeyin kendisi marka mavisine döner, metin beyaz; artı ikon 90° döner (240ms).

### Inputs / Fields (`.contact__field .field`, `.editcell`)
- **Style:** saydam zemin içinde yüzey pedi (6px); yer tutucu muted. Hero canlı hücre `.editcell` 9ch, sağa-hizalı, tabular-nums, soluk gri zemin.
- **Focus:** 2px mavi outline + 1px offset.

### Navigation (`.nav`, `.foot`)
- Tek satır: marka adı sola, bağlantılar sağa. Bağlantılar varsayılan altı çizgisiz; hover'da `currentColor` alt çizgi 0.22em offset / 0.07em kalınlık. `hide-phone` bağlantıları telefonda gizlenir.

### Signature — Canlı Karşılaştırma Sahnesi (`.hero__stage` + `[data-ui="ledger"]`)
Marka mavisi bandın üzerinde beyaz "yardımcı defter" (6px, yalnız kendi gölgesiyle değil, zıtlıkla ayrılır): başlık çubuğu, durum chip'leri, tabular-nums tablo, alt durum çubuğu. Son KDV satırı **düzenlenebilir hücredir** (`js-fark-tutar`): ziyaretçi tutarını doğru girince chip "Eşleşti"ye döner ve sapma çubuğu sıfırlanır — ürünün doğruluğu ziyaretçinin elinde kanıtlanır. GSAP ile kaydırmada ±46px süzülür; hareket yoksa statik.

## Do's and Don'ts

### Do:
- **Do** bölümleri 12 sütunlu ızgaraya yasla; kenar boşlukları `--margin`, sütun araları `--gutter` token'ına bağla.
- **Do** vurguyu 500 ağırlıkla ve/veya marka mavisiyle yap; "kalın" 600/700 kullanma.
- **Do** sayıları `tabular-nums` ile diz — tutar, KDV ve sürüm her zaman sütun-hizalı.
- **Do** mavi sahnelerde üst-sol köşe kesmesini (72px, mobil 56px) signature imza olarak kullan.
- **Do** ürün durumlarını (eşleşti/fark/eksik) yalnız ui fragmanları içindeki chip üçlüsüyle göster.
- **Do** hareketi yalnız GSAP/ScrollTrigger katmanına bağla; `prefers-reduced-motion` açıksa her şey statik ve içerik hep görünür.

### Don't:
- **Don't** ek renk ekleme — yeşil, kırmızı, amber sahne dışına asla çıkmaz; tek aksan marka mavisi.
- **Don't** ikon kartları, cam (backdrop-blur) yüzeyler, kesikli çizgiler ekran dışına taşıma; bunlar ui fragmanların kanunu.
- **Don't** h1'i 2 satırdan uzun yaz; Display 44→80px'i aşma.
- **Don't** sahte sosyal kanıt/istatistik kullan — "72 kaydın 69'u eşleşti" bir demodur, gerçek kullanıcı sayısı değil.
- **Don't** gölge ekleme; yüzeyler düz, derinlik ton+farklı renk tersinimiyle.
- **Don't** mono aile tanıtma; sayısal hizalama tabular-nums'a aittir.