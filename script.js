const images = document.querySelectorAll('#galery img');
let imgActive = 0;
images[imgActive].classList.add('show');
//masquer les photos sauf la première
for (let i = 1; i < images.length; i += 1) {
  images[i].classList.add('hidden');
}

//clic sur bouton suivant
document.querySelector('#next').addEventListener('click', function () {
  next();
});

//Fonction photo suivante
const next = function () {
  images[imgActive].classList.remove('show');
  images[imgActive].classList.add('hidden');
  imgActive += 1;
  if (imgActive >= images.length) {
    imgActive = 0;
  }
  images[imgActive].classList.remove('hidden');
  setTimeout(function () {
    images[imgActive].classList.add('show');
  }, 300);
};

//clic sur bouton précédent
document.querySelector('#prev').addEventListener('click', function () {
  prev();
});
//fonction pour la photo précédente
const prev = function () {
  images[imgActive].classList.remove('show');
  images[imgActive].classList.add('hidden');
  imgActive -= 1;
  if (imgActive < 0) {
    imgActive = images.length - 1;
  }
  images[imgActive].classList.remove('hidden');
  setTimeout(function () {
    images[imgActive].classList.add('show');
  }, 300);
};
//variable global pour stocker l' interval de temps
let interval;
//clic sur le bouton play
document.querySelector('#play').addEventListener('click', function () {
  //Création de l' interval de temps
  interval = setInterval(next, 3000);
});
//clic sur le bouton pause
document.querySelector('#pause').addEventListener('click', function () {
  //Déstruction de l' interval de temps
  clearInterval(interval);
});

//gestion touche du clavier
window.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    next();
  }
  if (e.key == 'ArrowLeft') {
    prev();
  }
});
