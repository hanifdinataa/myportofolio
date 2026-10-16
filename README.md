# Hanif Dinata — Portfolio

Portfolio website personal berbasis HTML, CSS, dan Vanilla JavaScript.

## Teknologi

- HTML5
- CSS3
- Vanilla JavaScript
- Tanpa framework / library

## Cara Menjalankan

1. Clone repository
   ```bash
   git clone https://github.com/hanifdinataa/portfolio.git
   ```
2. Buka `index.html` di browser

## Cara Deploy (GitHub Pages)

1. Push repository ke GitHub
2. Buka **Settings** → **Pages**
3. Pilih **Branch: main** → **/ (root)**
4. Klik **Save**
5. Website akan tersedia di `https://hanifdinataa.github.io/portfolio/`

## Struktur Folder

```
/
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── images/
    │   └── profile.jpg
    │
    ├── projects/
    │   ├── smart-snack-box/
    │   │   ├── cover.jpg
    │   │   ├── image-1.jpg ~ image-5.jpg
    │   │
    │   ├── henscare/
    │   │   ├── cover.jpg
    │   │   ├── image-1.jpg ~ image-2.jpg
    │   │
    │   └── rfid-door-lock/
    │       ├── cover.jpg
    │       ├── image-1.jpg ~ image-2.jpg
    │
    └── creative/
        ├── kosinaja/
        ├── aicif/
        ├── job-fair/
        └── hmj-ti/
```

## Cara Mengganti Foto

Ganti file gambar di folder `assets/` sesuai nama file yang digunakan.

Contoh: untuk mengganti cover Smart Snack Box, ganti file:
```
assets/projects/smart-snack-box/cover.jpg
```

## Cara Menambah Project

Buka `script.js`, tambahkan object baru di array `projects`.

## Lisensi

© 2026 Hanif Dinata. All rights reserved.
