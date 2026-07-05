const papanGame = document.getElementById('papan-game');
const teksSkor = document.getElementById('nilai-skor');
let skorSaatIni = 0;

// 1. CLASS INDUK (Parent Class)
class ObjekGame {
    constructor(ukuran, warna) {
        this.ukuran = ukuran;
        this.elemen = document.createElement('div');
        this.elemen.classList.add('objek-visual');
        
        this.elemen.style.width = `${this.ukuran}px`;
        this.elemen.style.height = `${this.ukuran}px`;
        this.elemen.style.backgroundColor = warna;
        
        papanGame.appendChild(this.elemen);
    }

    pindahPosisi(x, y) {
        this.elemen.style.left = `${x}px`;
        this.elemen.style.top = `${y}px`;
    }
}

// 2. CLASS ANAK (Child Class) - Mewarisi sifat ObjekGame
class Target extends ObjekGame {
    constructor(ukuran, warna) {
        super(ukuran, warna); 
        
        this.elemen.style.borderRadius = '50%'; // Ubah jadi bulat
        
        // Deteksi jika target diklik
        this.elemen.addEventListener('click', () => {
            this.diklik();
        });
        
        this.lompatAcak(); // Posisikan acak saat pertama kali muncul
    }

    diklik() {
        skorSaatIni++; // Tambah skor
        teksSkor.innerText = skorSaatIni; // Update skor di layar
        this.lompatAcak(); // Pindah posisi
    }

    lompatAcak() {
        // Papan game berukuran 400px, dikurangi ukuran target agar tidak tembus batas
        const batasX = 400 - this.ukuran;
        const batasY = 400 - this.ukuran;
        
        const xAcak = Math.floor(Math.random() * batasX);
        const yAcak = Math.floor(Math.random() * batasY);
        
        this.pindahPosisi(xAcak, yAcak);
    }
}

// 3. MENJALANKAN GAME
// Membuat objek target berwarna merah dengan ukuran 40px
const musuh = new Target(40, '#e74c3c');