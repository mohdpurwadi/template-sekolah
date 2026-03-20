# 🚀 Tutorial Hosting Gratis di Vercel

Panduan lengkap untuk hosting website statis secara gratis menggunakan Vercel, mulai dari upload ke GitHub hingga website online.

## 📋 Prasyarat

Sebelum memulai, pastikan Anda memiliki:

- Akun GitHub (gratis)
- Akun Vercel (gratis, bisa login dengan GitHub)
- Proyek website statis (HTML, CSS, JS)

## 📑 Daftar Isi

- [Langkah 1: Upload Proyek ke GitHub](#langkah-1-upload-proyek-ke-github)
- [Langkah 2: Buat Akun Vercel](#langkah-2-buat-akun-vercel)
- [Langkah 3: Deploy ke Vercel](#langkah-3-deploy-ke-vercel)
- [Langkah 4: Konfigurasi Domain (Opsional)](#langkah-4-konfigurasi-domain-opsional)
- [Tips dan Troubleshooting](#tips-dan-troubleshooting)

## 🛠️ Langkah 1: Upload Proyek ke GitHub

### 1.1 Buat Repository Baru

1. Buka [GitHub.com](https://github.com) dan login
2. Klik tombol **"New repository"** (hijau)
3. Isi informasi repository:
   - **Repository name**: `website-sekolah` (atau nama yang Anda inginkan)
   - **Description**: "Website sekolah vanilla SPA"
   - **Visibility**: Public (agar bisa diakses Vercel)
4. **JANGAN** centang "Add a README file" atau "Add .gitignore"
5. Klik **"Create repository"**

### 1.2 Upload File Proyek

1. Pada halaman repository yang baru dibuat, Anda akan melihat instruksi
2. Pilih opsi **"uploading an existing file"**
3. Drag and drop semua file proyek Anda (`index.html`, `script.js`, `styles.css`, `README.MD`) ke area upload
4. Klik **"Commit changes"**

### 1.3 Verifikasi Upload

Pastikan semua file sudah ter-upload dengan benar di repository GitHub Anda.

## 🌐 Langkah 2: Buat Akun Vercel

1. Buka [vercel.com](https://vercel.com)
2. Klik **"Sign Up"** atau **"Sign In"**
3. Pilih **"Continue with GitHub"** (ini akan memudahkan integrasi)
4. Berikan izin akses ke GitHub jika diminta
5. Selesai! Akun Vercel Anda sudah dibuat

## 🚀 Langkah 3: Deploy ke Vercel

### 3.1 Import Repository

1. Di dashboard Vercel, klik **"New Project"**
2. Pada bagian **"Import Git Repository"**, pilih repository GitHub yang baru saja dibuat
3. Klik **"Import"**

### 3.2 Konfigurasi Deploy

1. **Project Name**: Biarkan default atau ubah sesuai keinginan
2. **Framework Preset**: Pilih **"Other"** (karena ini proyek vanilla)
3. **Root Directory**: Biarkan kosong (jika file utama di root)
4. **Build and Output Settings**: Biarkan default
5. Klik **"Deploy"**

### 3.3 Tunggu Deploy Selesai

Vercel akan secara otomatis mendeteksi file `index.html` sebagai entry point dan melakukan deploy. Proses ini biasanya memakan waktu 1-2 menit.

### 3.4 Website Online!

Setelah deploy selesai, Anda akan mendapatkan URL seperti `https://website-sekolah.vercel.app`. Klik link tersebut untuk melihat website Anda online!

## 🌍 Langkah 4: Konfigurasi Domain (Opsional)

### 4.1 Domain Kustom

1. Di project Vercel, klik tab **"Settings"**
2. Cari **"Domains"**
3. Klik **"Add"**
4. Masukkan domain Anda (misal: `sekolahanda.com`)
5. Ikuti instruksi untuk mengatur DNS records di provider domain Anda

### 4.2 Domain Gratis dari Vercel

Vercel menyediakan subdomain gratis seperti `namaprojek.vercel.app`, yang sudah cukup untuk kebanyakan kasus.

## 💡 Tips dan Troubleshooting

### Tips

- **Auto-deploy**: Setiap kali Anda push perubahan ke GitHub, Vercel akan otomatis redeploy website
- **Environment Variables**: Jika website membutuhkan API keys, tambahkan di Settings > Environment Variables
- **Analytics**: Aktifkan Vercel Analytics untuk melihat traffic website

### Troubleshooting

**Deploy Gagal:**

- Pastikan file `index.html` ada di root directory
- Periksa error message di Vercel dashboard
- Coba redeploy manual

**Website Tidak Muncul:**

- Tunggu beberapa menit setelah deploy
- Clear cache browser (Ctrl+F5)
- Periksa URL yang benar

**Perubahan Tidak Terlihat:**

- Pastikan perubahan sudah di-commit dan di-push ke GitHub
- Vercel biasanya redeploy otomatis dalam 1-2 menit

## 🎉 Selamat!

Website sekolah Anda sekarang sudah online secara gratis di Vercel! Anda bisa membagikan link ke siswa, guru, dan orang tua.

---

**Catatan**: Hosting gratis Vercel sangat cocok untuk website statis dengan traffic rendah hingga sedang. Jika website Anda berkembang, pertimbangkan upgrade ke plan berbayar untuk fitur tambahan.
