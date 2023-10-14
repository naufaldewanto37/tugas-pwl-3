#Aplikasi Web Sederhana dengan React JS
##Deskripsi
Aplikasi web ini adalah contoh sederhana yang dibuat menggunakan React JS. Aplikasi ini memiliki tiga komponen utama: **Header**, **MainContent**, dan **Footer**. Selain itu, aplikasi ini juga menggunakan React Router untuk navigasi dan memiliki tiga halaman: **Beranda**, **Tentang**, dan **Kontak**.

##Fitur
Navigasi antar halaman dengan **react-router-dom.**
Form kontak di halaman "Kontak" untuk mengirim pesan.
Penyimpanan state jumlah pesan yang telah dikirim.
##Bagaimana Cara Kerja
##Komponen
**Header:** Bagian header aplikasi. Stateless component.
**MainContent:*** Konten utama yang ditampilkan di halaman beranda. Stateless component.
**Footer:** Bagian footer aplikasi. Stateless component.
**ContactForm:** Form yang memungkinkan pengguna untuk mengirim pesan. Stateful component.
##State Management
Aplikasi ini menggunakan **useState** dan Context API untuk state management.
**MessageContext** digunakan untuk menyimpan dan memanipulasi jumlah pesan yang telah dikirim.
##Routing
Menggunakan react-router-dom untuk navigasi antar halaman.
Halaman yang tersedia: Beranda, Tentang, dan Kontak.
##Setup
Clone repositori ini.
Jalankan **npm install** untuk menginstal semua dependencies.
Jalankan **npm start** untuk memulai development server.
##Testing
Aplikasi ini menggunakan **jest** dan **testing-library** untuk testing. Jalankan npm test untuk menjalankan test.
