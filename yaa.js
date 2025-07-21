const lirikCLBK = [
  "Cinta, maafkan diriku yang menduakanmu",
  "Kini ku menyesal meninggalkan dirimu",
  "Cinta lama ini bersemi kembali",
  "Maukah kau menjadi pacarku lagi?",
  "Bukan ku tak mau terima cintamu",
  "Karena ku sudah ada pengganti dirimu",
  "Biarkan semua jadi masa lalu",
  "Cerita terindah antara kau dan aku"
];



let index = 0;
const lirikEl = document.getElementById("lirik");

function updateLirik() {
  lirikEl.classList.remove("fade");
  setTimeout(() => {
    lirikEl.textContent = `"${lirikCLBK[index]}"`;
    lirikEl.classList.add("fade");
    index = (index + 1) % lirikCLBK.length;
  }, 200);
}
setInterval(updateLirik, 4000);

// Animasi HD - Hati pecah jatuh
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speedY = Math.random() * 1 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.y += this.speedY;
    if (this.y > canvas.height) this.reset();
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.font = `${this.size}px serif`;
    ctx.fillText("💔", this.x, this.y);
    ctx.restore();
  }
}

const hearts = Array.from({ length: 80 }, () => new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

