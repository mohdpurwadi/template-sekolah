# 🏫 Website Sekolah Vanilla (Single Page Application)

Website sekolah modern, interaktif, dan responsif yang dibangun murni menggunakan HTML5, CSS3, dan Vanilla JavaScript tanpa menggunakan framework eksternal seperti Bootstrap, Tailwind, atau React.

Proyek ini dirancang menggunakan konsep SPA (Single Page Application) buatan sendiri, di mana pergantian halaman terjadi secara instan tanpa perlu memuat ulang (reload) halaman browser.

## 📑 Daftar Isi

- [🏫 Website Sekolah Vanilla (Single Page Application)](#-website-sekolah-vanilla-single-page-application)
  - [📑 Daftar Isi](#-daftar-isi)
  - [✨ Fitur Utama](#-fitur-utama)
  - [🛠️ Teknologi yang Digunakan](#️-teknologi-yang-digunakan)
  - [🚀 Cara Menjalankan (Instalasi)](#-cara-menjalankan-instalasi)
  - [🎨 Kustomisasi Tema](#-kustomisasi-tema)
  - [📂 Struktur Halaman (Navigasi)](#-struktur-halaman-navigasi)
  - [📝 Lisensi](#-lisensi)

## ✨ Fitur Utama

- ⚡ **Performa Sangat Cepat**: Tanpa dependency framework besar, website memuat secara instan.
- 📱 **Desain 100% Responsif**: Tampilan menyesuaikan secara otomatis untuk Desktop, Tablet, dan Smartphone. Navigasi mobile menggunakan menu hamburger yang halus.
- 🔄 **Navigasi SPA**: Transisi antar menu (Beranda, Profil, Berita, dll) dikelola dengan JavaScript statis.
- 🖼️ **Galeri Interaktif**: Dilengkapi dengan sistem filter kategori dan efek Lightbox (gambar membesar saat diklik).
- 📅 **Filter Agenda**: Jadwal kegiatan sekolah yang bisa disortir berdasarkan kategori (Akademik, Libur, Perlombaan).
- 💬 **Integrasi Kontak**: Tombol Floating WhatsApp, Form Kontak, dan integrasi Google Maps (Embed).

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik website.
- **CSS3**: Styling menggunakan CSS Variables, Flexbox, dan CSS Grid untuk layout modern.
- **Vanilla JavaScript (ES6)**: Logika untuk navigasi SPA, filtering galeri/agenda, menu mobile, dan lightbox.
- **Google Fonts**: Menggunakan font "Inter" untuk tipografi yang bersih dan mudah dibaca.
- **Phosphor Icons**: Pustaka ikon ringan berformat SVG.

## 🚀 Cara Menjalankan (Instalasi)

Karena proyek ini sepenuhnya statis (tidak memerlukan Node.js, database, atau server khusus pada tahap ini), cara menjalankannya sangatlah mudah:

1. **Unduh Proyek**: Download atau salin kode `index.html` dari proyek ini.
2. **Buka di Browser**: Klik dua kali pada file `index.html`, atau seret (drag & drop) file tersebut ke dalam browser web Anda (Chrome, Firefox, Safari, Edge).
3. **Selesai!** Website sudah bisa digunakan dan dieksplorasi.

💡 **Tips**: Jika Anda menggunakan kode editor seperti VS Code, Anda bisa menginstal ekstensi Live Server untuk menjalankan website ini secara lokal agar bisa melihat perubahan kode secara real-time.

## 🎨 Kustomisasi Tema

Anda dapat dengan mudah mengubah warna identitas sekolah tanpa harus mengedit banyak baris kode. Cukup ubah nilai CSS Variables yang berada di bagian paling atas blok `<style>` pada file `index.html`:

```css
:root {
  --primary-color: #1e3a8a; /* Ubah dengan kode hex warna utama sekolah Anda */
  --primary-light: #3b82f6; /* Ubah dengan variasi warna terang */
  --secondary-color: #fbbf24; /* Ubah dengan warna aksen (misal: kuning/emas) */

  /* Variabel lainnya... */
  --text-main: #1f2937;
  --bg-light: #f3f4f6;
}
```

## 📂 Struktur Halaman (Navigasi)

Semua halaman (section) berada di dalam satu file `index.html` dan disembunyikan/dimunculkan oleh JavaScript berdasarkan atribut ID:

- `#home` - Halaman Beranda (Hero, Sambutan, Statistik)
- `#profil` - Sejarah, Visi Misi, Fasilitas, dan Data Guru
- `#berita` - Portal Berita & Artikel Sekolah
- `#agenda` - Kalender Kegiatan dengan filter
- `#galeri` - Dokumentasi Foto dengan Lightbox
- `#kontak` - Alamat, Peta, dan Form Pesan

## 📝 Lisensi

Proyek ini dibuat untuk tujuan pembelajaran. Anda dapat menggunakan, memodifikasi, serta mengembangkannya secara bebas untuk keperluan sekolah atau instansi pendidikan Anda.
