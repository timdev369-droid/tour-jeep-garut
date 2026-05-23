# 🚙 Tour Jeep Garut - Website Petualangan

Selamat datang di repositori **Tour Jeep Garut**! Website modern untuk booking tour jeep di Garut dengan desain responsif dan interaktif.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Folder](#struktur-folder)
- [Cara Menggunakan](#cara-menggunakan)
- [Fitur Website](#fitur-website)
- [Responsive Design](#responsive-design)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## ✨ Fitur Utama

✅ **Desain Modern & Responsif**
- Layout yang sempurna di desktop, tablet, dan mobile
- Animasi smooth dan transisi yang halus
- Color scheme profesional (Orange & Blue)

✅ **Navigasi Intuitif**
- Menu navbar yang sticky
- Hamburger menu untuk mobile
- Smooth scroll ke section
- Active link indicator

✅ **Paket Tour Lengkap**
- 3 paket dengan harga berbeda (Standar, Premium, Keluarga)
- Badge "POPULAR" untuk paket unggulan
- Fitur & benefit yang jelas
- Tombol pesan untuk setiap paket

✅ **Galeri Interaktif**
- Grid galeri yang responsif
- Lightbox modal untuk preview gambar
- Hover effects yang menarik

✅ **Testimoni Pelanggan**
- Kartu testimoni dengan rating bintang
- Layout grid yang rapi
- Background gradient yang menarik

✅ **Form Kontak**
- Validasi form otomatis
- Informasi lengkap (telepon, email, alamat)
- Social media links
- Error handling

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan CSS Variables
- **JavaScript Vanilla** - Interaktivitas tanpa framework
- **FontAwesome 6.4** - Icons library
- **Placeholder.com** - Image placeholder

## 📁 Struktur Folder

```
tour-jeep-garut/
├── index.html          # File HTML utama
├── styles.css          # File CSS styling
├── script.js           # File JavaScript interaktif
├── README.md           # Dokumentasi ini
└── .gitignore          # Git ignore file
```

## 🚀 Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/timdev369-droid/tour-jeep-garut.git
cd tour-jeep-garut
```

### 2. Buka Secara Lokal
Buka file `index.html` di browser Anda:
```bash
# Linux/Mac
open index.html

# Windows
start index.html
```

Atau gunakan Live Server di VS Code:
1. Install extension "Live Server"
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

### 3. Deploy ke GitHub Pages
1. Push repository ke GitHub
2. Settings → Pages
3. Source: Main branch
4. Klik Save

Website akan tersedia di: `https://timdev369-droid.github.io/tour-jeep-garut`

## 🎯 Fitur Website

### Navigation Bar
- Logo dengan icon jeep
- Menu navigasi (Beranda, Paket Tour, Galeri, Testimoni, Kontak)
- Responsive hamburger menu untuk mobile
- Sticky navbar dengan shadow effect pada scroll

### Hero Section
- Headline yang menarik
- Call-to-action button "Pesan Sekarang"
- Gambar placeholder
- Background gradient yang modern

### Paket Tour Section
- 3 paket tour berbeda
- Card dengan hover animation
- Badge "POPULAR" untuk paket unggulan
- Daftar fitur dengan checkmark
- Tombol pesan dengan styling berbeda

### Galeri Section
- Grid galeri 6 item
- Hover overlay dengan icon search
- Lightbox modal untuk preview
- Smooth zoom animation

### Testimoni Section
- 3 testimoni dengan rating bintang
- Avatar profile
- Background gradient biru
- Card dengan hover effect

### Contact Section
- Informasi kontak (Telepon, Email, Alamat, Jam Operasional)
- Social media buttons
- Form kontak dengan validasi
- Layout 2 kolom (dekstop) / 1 kolom (mobile)

### Footer
- Copyright text
- Credit dengan icon heart

## 📱 Responsive Design

Website ini fully responsive dengan breakpoints:

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Desktop | > 1200px | Full width |
| Tablet | 768px - 1199px | Adjusted grid |
| Mobile | < 767px | Stack & hamburger menu |

### Mobile Features:
- Hamburger menu yang toggle
- Text size yang lebih besar
- Single column layout
- Touch-friendly buttons
- Optimized spacing

## ⚙️ Kustomisasi

### Mengubah Warna
Edit CSS Variables di `styles.css`:
```css
:root {
    --primary-color: #ff6b35;      /* Orange */
    --secondary-color: #004e89;    /* Blue */
    --accent-color: #1b6b9f;       /* Dark Blue */
    --light-color: #f5f5f5;        /* Light Gray */
    --dark-color: #333333;         /* Dark Gray */
}
```

### Mengubah Paket
Edit section paket di `index.html`:
```html
<h3>Nama Paket</h3>
<p class="price">Harga</p>
<ul class="paket-features">
    <li><i class="fas fa-check"></i> Fitur 1</li>
    <li><i class="fas fa-check"></i> Fitur 2</li>
</ul>
```

### Mengubah Konten
- Edit text langsung di HTML
- Ganti gambar placeholder di `src`
- Update informasi kontak

## 🔗 Links Penting

- **Repository**: https://github.com/timdev369-droid/tour-jeep-garut
- **Live Demo**: https://timdev369-droid.github.io/tour-jeep-garut
- **FontAwesome Icons**: https://fontawesome.com/icons
- **Placeholder Images**: https://via.placeholder.com

## 📝 TODO / Fitur Masa Depan

- [ ] Backend untuk form submission
- [ ] Database pelanggan & booking
- [ ] Payment integration (Midtrans/Stripe)
- [ ] Admin dashboard
- [ ] Multi-language support (ID/EN)
- [ ] Real images instead of placeholder
- [ ] Testimoni dari database
- [ ] Live chat support
- [ ] Booking calendar

## 🤝 Kontribusi

Kontribusi sangat diterima! Ikuti langkah berikut:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 Lisensi

Project ini dilisensikan di bawah MIT License - lihat file `LICENSE` untuk detail.

## 👨‍💻 Author

**Tim Dev 369**
- GitHub: [@timdev369-droid](https://github.com/timdev369-droid)
- Email: timdev369@gmail.com

---

## 🎓 Tips Pengembangan

### Untuk Pemula:
1. Pahami struktur HTML terlebih dahulu
2. Ubah CSS colors dan fonts
3. Tambah/hapus sections sesuai kebutuhan
4. Test di berbagai devices

### Untuk Intermediate:
1. Tambahkan backend dengan Node.js/Python
2. Implementasikan payment gateway
3. Buat admin dashboard
4. Add database (MongoDB/MySQL)

### Untuk Advanced:
1. Deploy ke cloud (Heroku/Vercel)
2. Setup CI/CD pipeline
3. Implement PWA features
4. Add SEO optimization

---

## 🆘 Troubleshooting

### Hamburger menu tidak berfungsi?
- Cek apakah script.js di-load dengan benar
- Check browser console untuk error
- Pastikan class `.hamburger` dan `.nav-menu` tersedia

### Form tidak submit?
- Browser harus support modern JavaScript
- Check console untuk error message
- Verify semua input fields ada

### Gambar tidak muncul?
- Placeholder.com perlu koneksi internet
- Ganti dengan gambar lokal atau CDN lain
- Check image URL di HTML

### Styling tidak bekerja?
- Pastikan styles.css di-link di HTML
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS path relatif
- Cek CSS syntax di console

---

Made with ❤️ by Tim Dev 369
