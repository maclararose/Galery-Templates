document.addEventListener('DOMContentLoaded', () => {
  const miniatures = document.querySelectorAll(".img__miniature");
  const preview = document.querySelector(".img__image--preview");
  let currentImage = 0;

  const changeImage = (preview, img) => {
    preview.src = img.src;
      
    const active = document.querySelector(".active");
    active.classList.toggle("active");

    img.classList.toggle("active");
  };
  
  miniatures.forEach((mini, index) => {
    mini.addEventListener('click',() => {
      changeImage(preview, mini);
      currentImage = index;
    });

  });

  setInterval(() => {
    if(currentImage > miniatures.length - 1) {
      currentImage = 0;
    };

    changeImage(preview, miniatures[currentImage]);

    currentImage++;

  }, 2000);

});
