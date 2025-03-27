## E-Commerce Product Management System

Alfian Fadillah Putra (10231009) - Backend

Muhammad Athala Romero (10231059) - Frontend

#### Deskripsi Proyek

Sistem Manajemen Produk E-Commerce adalah platform berbasis web yang dirancang untuk mengelola produk dalam lingkungan e-commerce. Aplikasi ini dikembangkan dengan React.js di sisi frontend dan Express.js di sisi backend, menawarkan antarmuka yang modern serta mudah digunakan untuk pengelolaan produk secara efisien.

#### Teknologi yang Digunakan pada E-Commerce Product Management System

1. Frontend:
    - React.js
    - Tailwind CSS untuk styling
    - Axios untuk HTTP requests

2. Backend:
    - Express.js
    - Node.js
    - RESTful API

#### Preparation

Sebelum menjalankan aplikasi, pastikan telah terinstall:

- Web browser modern (Chrome, Firefox, Safari, atau Edge)
- Node.js (versi 14.0.0 atau lebih tinggi)
- NPM (Node Package Manager)

#### Installation and Usage

> Install Dependensi:
```
npm install
```
> Running the Backend Application:
```
node index.js
```
Server akan berjalan pada http://localhost:3001

> Running the Frontend Application:
```
npm run dev
```
Server akan berjalan pada http://localhost:5173/

> Project Structure:

📦ecommerce-backend 

    ┣ 📜db.js
    ┣ 📜index.js
    ┣ 📜package-lock.json
    ┣ 📜package.json

📦ecommerce-frontend

    ┣ 📂src
    ┃ ┣ 📂components
    ┃ ┃ ┣ 📜EditProduk.jsx
    ┃ ┃ ┣ 📜ProdukForm.jsx
    ┃ ┃ ┗ 📜ProdukList.jsx
    ┃ ┣ 📂styles
    ┃ ┃ ┗ 📜buttons.css
    ┃ ┣ 📜App.css
    ┃ ┣ 📜App.jsx
    ┃ ┣ 📜index.css
    ┃ ┗ 📜main.jsx
    ┣ 📜index.html
    ┣ 📜package-lock.json
    ┣ 📜package.json

#### API Endpoints
Base URL: http://localhost:3001

**1. Get All Products**
- Method: GET
- Endpoint: /produk
- Response: Array of products
- Used in: ProdukList.jsx

**2. Get Single Product**
- Method: GET
- Endpoint: /produk/:id
- Parameters: id (number)
- Response: Single product object
- Used in: EditProduk.jsx

**3. Create Product**
- Method: POST
- Endpoint: /produk
- Body: { nama: string, harga: number }
- Response: Created product object
- Used in: ProdukForm.jsx

**4. Update Product**
- Method: PATCH
- Endpoint: /produk/:id
- Parameters: id (number)
- Body: { nama: string, harga: number }
- Response: Updated product object
- Used in: EditProduk.jsx

**5. Delete Product**
- Method: DELETE
- Endpoint: /produk/:id
- Parameters: id (number)
- Response: { message: 'Produk dihapus' }
- Used in: ProdukList.jsx

#### Additional Test Endpoints

1. GET /
- Returns: "Hello World from Express.js!"
2. POST /data
- Body: { nama: string }
- Returns: "Data diterima: {nama}"
3. DELETE /data/:id
- Returns: "Data dengan id {id} telah dihapus"
4. PUT /data/:id
- Body: { nama: string }
- Returns: "Data dengan id {id} telah diubah menjadi {nama}"

#### Application Features

**1. Manajemen Produk**
- Create: Menambahkan produk baru
- Read: Menampilkan daftar produk
- Update: Mengubah data produk
- Delete: Menghapus produk

**2. Validasi Input**
- Validasi form untuk input produk
- Feedback visual untuk error
- Konfirmasi untuk aksi penting

**3. User Interface**
- Desain responsif
- Animasi dan transisi
- Feedback visual
- Loading states

#### Review Aplikasi Berjalan Tanpa Error
Aplikasi e-commerce ini telah berhasil diterapkan dengan berbagai fitur modern dan ramah pengguna. Berdasarkan pengujian yang dilakukan, semua fungsionalitas beroperasi dengan baik tanpa adanya error atau bug yang berarti. Berikut ini adalah ulasan rinci mengenai implementasi aplikasi:

#### Tampilan dan Interaksi Utama
Aplikasi ini menghadirkan antarmuka yang modern dan intuitif dengan prioritas pada pengalaman pengguna yang optimal. Pada halaman utama, produk ditampilkan dalam tata letak yang terstruktur dengan rapi, disertai informasi yang jelas mengenai setiap produk.

#### Fitur-fitur Utama:
1. Manajemen Produk
- Daftar produk dengan tampilan modern
- Badge penghitung jumlah produk
- Status ketersediaan produk

<img src="1.png">
<img src="2.png">
<img src="3.png">

2. Sistem CRUD yang Lengkap
- Penambahan Produk:
    - Form input yang intuitif
    - Validasi data real-time

<img src="4.png">
<img src="5.png">

- Pembaruan Produk:
    - Modal edit dengan data terpopulasi
    - Preview perubahan langsung

<img src="6.png">
<img src="7.png">

- Penghapusan Produk:
    - Modal konfirmasi yang aman
    - Feedback visual yang jelas
    - Update tampilan secara real-time 

<img src="8.png">

### User Experience:
- Desain responsif di berbagai perangkat
- Feedback visual yang informatif
- Navigasi yang mudah dan intuitif
- Pesan error yang jelas dan helpful

<img src="9.png">

### Validasi dan Error Handling
Aplikasi dilengkapi dengan sistem validasi yang komprehensif:
- Pencegahan input kosong dengan pesan error yang jelas
- Highlight field yang memerlukan perhatian
- Panduan pengguna yang informatif 

<img src="10.png">

### Kesimpulan
Setelah melalui serangkaian pengujian dan perbaikan, aplikasi berhasil terbukti dengan:
1. Berjalan dengan stabil tanpa error
2. Memiliki performa yang optimal
3. Menyajikan UX/UI yang modern dan user-friendly
4. Menangani berbagai kasus penggunaan dengan baik
5. Memberikan feedback yang jelas kepada pengguna

Seluruh fitur yang telah dikembangkan dan diimplementasikan berhasil berjalan dengan baik sesuai dengan spesifikasi yang telah ditetapkan sebelumnya. Keberhasilan ini memberikan kontribusi signifikan terhadap terciptanya pengalaman pengguna yang tidak hanya mulus dan efisien, tetapi juga memberikan kesan profesional dalam setiap aspek pengelolaan produk pada platform e-commerce. Dengan berfungsinya seluruh komponen sistem sebagaimana mestinya, pengguna dapat menjalankan berbagai aktivitas manajemen produk—seperti penambahan, pengubahan, dan penghapusan produk—dengan mudah, cepat, dan tanpa hambatan berarti, sehingga meningkatkan efektivitas operasional secara keseluruhan.

## Troubleshooting

### Masalah Umum dan Solusi

1. Jika server tidak bisa dijalankan:
    - Pastikan port 3001 tidak digunakan oleh aplikasi lain
    - Periksa instalasi Node.js dan NPM
2. Jika frontend tidak bisa diakses:
    - Pastikan semua dependensi terinstall dengan npm install
    - Periksa console browser untuk error
3. Jika API tidak merespons:
    - Pastikan backend server berjalan
    - Periksa URL dan port yang digunakan