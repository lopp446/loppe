# Vinteg-App

Vinteg-App adalah aplikasi e-commerce modern yang dibangun dengan React di frontend dan Node.js + Express di backend, menggunakan MySQL sebagai database. Aplikasi ini menyediakan fitur autentikasi pengguna, manajemen produk, keranjang belanja, dan wishlist, serta berfungsi secara offline menggunakan **Progressive Web App (PWA)**.

## Fitur
- Autentikasi pengguna (login dan registrasi).
- Manajemen produk: Tambah, edit, hapus produk.
- Keranjang belanja dan wishlist untuk pengguna.
- Responsif di perangkat mobile dan desktop.
- Fungsi offline dengan dukungan **service worker** dan caching.
- Animasi dan desain modern dengan **TailwindCSS**.
- Pengujian menggunakan **Jest** dan **React Testing Library**.

## Prasyarat
- **Node.js** (versi 14.x atau lebih baru)
- **MySQL** (untuk backend database)
- **npm** atau **yarn** (untuk manajemen paket)

## Instalasi

### Backend (Node.js + Express)
1. Pindah ke direktori backend:
    ```bash
    cd backend
    ```
2. Install dependensi backend:
    ```bash
    npm install
    ```
3. Konfigurasi file `.env` untuk koneksi database dan pengaturan lainnya.
4. Jalankan server backend:
    ```bash
    npm run dev
    ```
    Server akan berjalan di **`http://localhost:5000`** (atau port yang telah kamu konfigurasi).

### Frontend (React + TailwindCSS)
1. Pindah ke direktori frontend:
    ```bash
    cd frontend
    ```
2. Install dependensi frontend:
    ```bash
    npm install
    ```
3. Jalankan server frontend:
    ```bash
    npm start
    ```
    Aplikasi akan berjalan di **`http://localhost:3000`**.

### Menambahkan Favicon dan Ikon
Pastikan ikon yang sesuai telah ditambahkan di folder **`public/icons`** dan pastikan file **`favicon.ico`** ada di **`public/`**.

### Setup PWA
Aplikasi ini juga berfungsi sebagai **Progressive Web App (PWA)**. Untuk memastikan PWA bekerja dengan baik:
- Pastikan file **`serviceWorker.js`** telah terkonfigurasi di frontend.
- Periksa **`manifest.json`** untuk memastikan aplikasi diinstal dengan ikon dan tema yang benar.

## Pengujian
Untuk menjalankan pengujian, pastikan kamu berada di direktori frontend dan jalankan perintah berikut:
```bash
npm test
