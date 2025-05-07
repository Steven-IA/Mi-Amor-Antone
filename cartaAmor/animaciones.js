function showInitialParticles() {
  const hearts = document.getElementById('hearts');
  hearts.innerHTML = "";
  const iconos = ["✨", "💖", "💜"];
  for (let i = 0; i < 40; i++) {
    let span = document.createElement("span");
    let randomIcono = iconos[Math.floor(Math.random() * iconos.length)];

    span.innerHTML = randomIcono; // Cambia el ícono aquí
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = Math.random() * 20 + 10 + "px";
    span.style.animationDuration = (Math.random() * 2 + 2) + "s";
    hearts.appendChild(span);
  }
}


function showCard() {
    document.querySelector('.heart').style.display = 'none';
    document.getElementById('card').style.display = 'block';
    document.getElementById('bg-music').play();
    document.getElementById('backBtn').style.display = 'inline-block';
  
    const hearts = document.getElementById('hearts');
    hearts.innerHTML = ''; // Limpia antes de añadir nuevos
    for (let i = 0; i < 30; i++) {
      let span = document.createElement("span");
      span.innerHTML = "💖";
      span.style.left = Math.random() * 100 + "vw";
      span.style.fontSize = Math.random() * 20 + 10 + "px";
      span.style.animationDuration = (Math.random() * 3 + 2) + "s";
      hearts.appendChild(span);
    }
  }
  
  function goBack() {
    const card = document.getElementById('card');
    const heart = document.querySelector('.heart');
    const music = document.getElementById('bg-music');
    const hearts = document.getElementById('hearts');

    //card.style.animation = 'closeCard 1s ease forwards';
    card.classList.remove('card-fade-out');
    void card.offsetWidth; // fuerza reflow
    card.classList.add('card-fade-out');
  
    setTimeout(() => {
      card.style.display = 'none';
      //card.style.animation = '';
      card.classList.remove('card-fade-out');

      heart.classList.remove('heart-fade-in');
      void heart.offsetWidth;
    
      heart.style.display = 'block';
      heart.classList.add('heart-fade-in');
      // Quitar corazones de carta
      hearts.innerHTML = '';
    
      // Detener música y quitar corazones
      music.pause();
      music.currentTime = 0;
      hearts.innerHTML = '';

      // Mostrar partículas NUEVAS al final
      showInitialParticles();
    
      // Limpia animación después
      setTimeout(() => heart.classList.remove('animate-show'), 100);
    }, 1000);
  }

  window.addEventListener('DOMContentLoaded', showInitialParticles);