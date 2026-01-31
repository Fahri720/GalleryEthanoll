// Typing title
const text = "🌸 Galery Ethanoll 🌸";
let i = 0;
const typing = document.getElementById("typing");
(function type(){
  if(i < text.length){
    typing.textContent += text.charAt(i++);
    setTimeout(type, 80);
  }
})();

// Fullscreen modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".gallery img").forEach(img=>{
  img.onclick = ()=>{ modal.style.display="flex"; modalImg.src = img.src; }
});
document.querySelector(".close").onclick = ()=> modal.style.display="none";
modal.onclick = e => e.target === modal && (modal.style.display="none");

// Music toggle
const bgm = document.getElementById("bgm");
const btn = document.getElementById("musicBtn");
let playing = false;
btn.onclick = ()=>{
  playing ? bgm.pause() : bgm.play();
  playing = !playing;
  btn.textContent = playing ? "⏸️ Pause" : "🎵 Musik";
};