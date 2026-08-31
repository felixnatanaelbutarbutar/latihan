# 🌟 Hall of Fame Kontributor (Latihan Fork & PR)

Selamat datang di proyek **ForkLab / Hall of Fame Kontributor**! 🚀  
Proyek ini dibuat khusus sebagai wadah latihan praktis bagi teman-teman yang ingin belajar dan memahami cara melakukan **Fork**, **Clone**, **Branching**, **Commit**, **Push**, dan mengirimkan **Pull Request (PR)** di GitHub.

---

## 🎯 Tujuan Latihan

Setelah menyelesaikan latihan ini, teman-teman akan:
1. Memahami apa itu **Fork** dan perbedaannya dengan clone biasa.
2. Mampu membuat branch baru dan melakukan commit perubahan di lokal.
3. Mampu melakukan push ke repository hasil fork.
4. Mampu membuat **Pull Request (PR)** pertama ke repository utama.
5. Melihat nama dan kartu profil teman-teman tampil langsung di halaman web!

---

## 📋 Panduan Langkah demi Langkah (Step-by-Step)

Ikuti 7 langkah mudah berikut ini:

### 1. Fork Repository Ini 🍴
- Buka halaman repository utama ini di browser.
- Klik tombol **Fork** di pojok kanan atas halaman.
- Pilih akun GitHub kamu, lalu klik **Create Fork**. Sekarang kamu punya salinan repo ini di akunmu sendiri!

---

### 2. Clone Repo Hasil Fork ke Komputer Lokal 💻
Buka terminal (Git Bash, Command Prompt, atau Terminal VS Code), lalu jalankan perintah:

```bash
# Ganti USERNAME_KAMU dengan username GitHub milikmu
git clone https://github.com/USERNAME_KAMU/latihan.git

# Masuk ke folder proyek
cd latihan
```

---

### 3. Buat Branch Baru 🌿
Selalu biasakan membuat branch baru saat mengerjakan fitur atau perubahan:

```bash
# Buat dan pindah ke branch baru (gunakan nama kamu)
git checkout -b tambah-profil-namamu
```

> **Contoh:** `git checkout -b tambah-profil-budi`

---

### 4. Tambahkan Profilmu di `contributors.js` ✍️
1. Buka folder proyek di text editor (misalnya **VS Code** dengan mengetik `code .`).
2. Buka file [`contributors.js`](./contributors.js).
3. Salin template objek di bawah ini dan tempelkan di bagian paling bawah array `contributors`:

```javascript
  {
    name: "Nama Lengkap atau Panggilan Kamu",
    username: "username-github-kamu",
    role: "Frontend Learner / Web Explorer / Mahasiswa",
    bio: "Semangat belajar git fork dan open source!",
    skills: ["HTML", "CSS", "Git", "JavaScript"],
    social: {
      github: "https://github.com/username-github-kamu",
      instagram: "", // opsional
      linkedin: ""   // opsional
    }
  },
```

> ⚠️ **PENTING:** Pastikan antar data profil dipisahkan dengan tanda koma `,` dan jangan menghapus kurung siku `]` di bagian akhir file.

4. Buka file `index.html` di browser (cukup klik dua kali file `index.html` atau pakai Live Server) untuk mengecek apakah kartumu sudah muncul dengan benar!

---

### 5. Simpan dan Commit Perubahan 📦
Kembali ke terminal, jalankan perintah:

```bash
# 1. Cek status perubahan
git status

# 2. Tambahkan file yang diubah ke staging area
git add contributors.js

# 3. Buat pesan commit yang jelas
git commit -m "feat: tambah profil [nama kamu]"
```

---

### 6. Push ke GitHub Kamu 🚀
Kirim branch yang baru kamu buat ke repository GitHub hasil forking-mu:

```bash
git push origin tambah-profil-namamu
```

---

### 7. Buat Pull Request (PR) 📬
1. Buka repository asal (repository utama yang kamu fork di awal) atau buka repository hasil fork-mu di browser.
2. GitHub akan otomatis menampilkan banner hijau: **"Compare & pull request"**. Klik tombol tersebut.
3. Berikan judul yang jelas (misal: `feat: Menambahkan profil Budi Santoso`).
4. Tulis pesan singkat di deskripsi jika ingin menyapa maintainer.
5. Klik tombol hijau **Create pull request**.
6. **Selesai! 🎉** Tunggu maintainer me-review dan melakukan *Merge*. Profilmu akan resmi masuk ke dalam proyek!

---

## 🖥️ Alternatif: Panduan Menggunakan GitHub Desktop (Tanpa Terminal / Klik GUI)

Jika temanmu lebih suka menggunakan aplikasi grafis desktop (GUI) seperti **GitHub Desktop** daripada terminal/command line:

### 1. Download & Buka GitHub Desktop
- Unduh dan instal [GitHub Desktop](https://desktop.github.com/).
- Buka aplikasinya dan login dengan akun GitHub.

### 2. Fork & Clone Repository
1. Buka repo utama ini di browser, lalu klik tombol **Fork** (atau bisa langsung dari GitHub Desktop: menu **File** -> **Clone repository**).
2. Di tab **GitHub.com** atau **URL**, pilih/masukkan repository hasil fork kamu (misal: `USERNAME_KAMU/latihan`).
3. Pilih folder lokal di komputermu, lalu klik **Clone**.
4. *(Jika muncul pertanyaan: "How are you planning to use this fork?", pilih **To contribute to the parent project**).*

### 3. Buat Branch Baru di GitHub Desktop
1. Di bagian atas aplikasi, klik dropdown **Current Branch** (yang awalnya bertuliskan `main`).
2. Klik tombol **New branch**.
3. Beri nama branch, contoh: `tambah-profil-budi`, lalu klik **Create branch**.

### 4. Edit File di Text Editor (VS Code / Notepad)
1. Di GitHub Desktop, kamu bisa klik tombol **Open in Visual Studio Code** (atau buka folder secara manual).
2. Buka file [`contributors.js`](./contributors.js) dan tambahkan data profilmu di bagian bawah array.
3. Simpan file (`Ctrl + S`).

### 5. Commit di GitHub Desktop
1. Kembali ke aplikasi GitHub Desktop. Kamu akan melihat file `contributors.js` otomatis muncul di panel kiri bertanda centang hijau.
2. Di bagian kiri bawah:
   - Pada kotak **Summary (required)**, ketik: `feat: tambah profil Budi`
3. Klik tombol biru **Commit to tambah-profil-...**.

### 6. Publish / Push ke GitHub
- Klik tombol biru **Publish branch** di bagian atas GitHub Desktop. Perubahanmu sekarang sudah ter-upload ke GitHub!

### 7. Buat Pull Request (PR)
1. Setelah push selesai, tombol di atas akan berubah menjadi **Preview Pull Request** atau **Create Pull Request**.
2. Klik tombol **Create Pull Request**.
3. Browser akan otomatis terbuka ke halaman Pull Request GitHub. Beri keterangan singkat dan klik **Create pull request**! 🎉

---

## 🔄 Tips Tambahan: Sinkronisasi Fork (Sync Upstream)

Jika repository utama sudah mendapat update baru dari teman lain dan repo fork milikmu tertinggal:

### Cara 1: Lewat Web GitHub (Paling Mudah)
1. Buka halaman repo hasil fork kamu di GitHub.
2. Klik tombol **Sync fork** di bawah tombol hijau *Code*.
3. Klik **Update branch**.

### Cara 2: Lewat Terminal (Git CLI)
```bash
# Tambahkan upstream remote (hanya perlu sekali di awal)
git remote add upstream https://github.com/OWNER_ASAL/latihan.git

# Ambil update terbaru dari repository utama
git checkout main
git pull upstream main

# Update ke repo fork kamu
git push origin main
```

---

## 🛠️ Struktur File Proyek

```
latihan/
├── index.html          # Halaman web galeri kontributor
├── style.css           # Styling tampilan modern & responsif
├── app.js              # Logika render kartu profil, pencarian & popup modal
├── contributors.js     # File data kontributor (tempat menambahkan datamu)
└── README.md           # Panduan lengkap latihan Fork & PR
```

---

## 💡 Aturan / Etika Berkontribusi
- Harap gunakan foto/avatar, nama, dan kata-kata bio yang sopan.
- Cukup tambahkan datamu sendiri di file `contributors.js` tanpa mengubah data milik orang lain.
- Jangan ragu untuk bertanya jika menemui kendala!

Selamat mencoba dan selamat belajar kolaborasi Git! 🚀✨
