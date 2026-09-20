document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

const projectData = {
  project1: {
    tag: "Web Systems",
    title: "Student Attendance Web Application",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80",
    body: "Aplikasi berbasis web ini dirancang untuk mencatat dan mengelola rekapitulasi absensi siswa secara efisien. Proyek ini mempermudah admin dan pengajar dalam memantau kehadiran harian siswa.",
    highlights: [
      "Autentikasi login multi-level (Admin & Pengajar)",
      "Manajemen CRUD (Create, Read, Update, Delete) Data Siswa",
      "Ekspor rekapitulasi data absensi"
    ],
    link: "https://github.com/aisyahmrymn-eng"
  },
  project2: {
    tag: "ERP / HRMS",
    title: "Odoo 16 HRMS Module Development",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
    body: "Kustomisasi modul Human Resource Management System (HRMS) di platform Odoo 16. Proyek ini berfokus pada efisiensi alur kerja manajemen SDM, penggajian, dan pencatatan cuti karyawan.",
    highlights: [
      "Kustomisasi tampilan Form & Tree View menggunakan XML",
      "Penambahan logika bisnis kustom dengan Python",
      "Konfigurasi hak akses pengguna & aturan keamanan modul"
    ],
    link: "https://github.com/aisyahmrymn-eng"
  },
  project3: {
    tag: "Networking",
    title: "Computer Network Simulation",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=700&q=80",
    body: "Perancangan dan simulasi arsitektur jaringan komputer menggunakan Cisco Packet Tracer untuk menguji performa konektivitas antar sub-jaringan LAN.",
    highlights: [
      "Konfigurasi Router & Switch Cisco via CLI",
      "Penerapan Static & Dynamic Routing Protocol (RIP/OSPF)",
      "Uji coba troubleshooting konektivitas & skenario PING latency"
    ],
    link: "https://github.com/aisyahmrymn-eng"
  },
  project4: {
    tag: "Database",
    title: "Database Design & Management",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=700&q=80",
    body: "Perancangan skema basis data relasional dari tahap ERD (Entity Relationship Diagram) hingga pengimplementasian Query SQL tingkat lanjut.",
    highlights: [
      "Normalisasi Tabel hingga bentuk 3NF",
      "Penerapan Query Kompleks (INNER JOIN, LEFT JOIN, Aggregation)",
      "Pengelolaan server lokal menggunakan XAMPP & phpMyAdmin"
    ],
    link: "https://github.com/aisyahmrymn-eng"
  },
  project5: {
    tag: "Data Science",
    title: "Rainfall Data Analysis",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    body: "Analisis data historis curah hujan untuk menemukan pola iklim harian dan bulanan menggunakan pustaka pemrograman Python.",
    highlights: [
      "Data Cleaning & Preprocessing menggunakan Pandas",
      "Visualisasi grafik tren curah hujan dengan Matplotlib & Seaborn",
      "Eksplorasi data interaktif via Google Colab"
    ],
    link: "https://github.com/aisyahmrymn-eng"
  }
};

function openModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  document.getElementById('modalTag').innerText = data.tag;
  document.getElementById('modalTitle').innerText = data.title;
  document.getElementById('modalImg').src = data.img;
  document.getElementById('modalBody').innerText = data.body;
  document.getElementById('modalLink').href = data.link;

  const highlightsList = document.getElementById('modalHighlights');
  highlightsList.innerHTML = '';
  data.highlights.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    highlightsList.appendChild(li);
  });

  document.getElementById('projectModal').classList.add('active');
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
}

window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeModal();
  }
};