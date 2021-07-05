document.addEventListener('DOMContentLoaded', () => {
  const miniatures = document.querySelectorAll(".miniature__img");
  const preview = document.querySelector(".image-example__img");
  const beforeBtn = document.querySelector(".control__span--before");
  const nextBtn = document.querySelector(".control__span--next");
  const counter = document.querySelector(".counter__span");
  let currentImage = 0;

  const changeImage = (preview, img) => {
    const {dataset: { src }} = img;

    preview.src = src;
      
    const active = document.querySelector(".active");
    active.classList.toggle("active");

    img.classList.toggle("active");

    updateCounter();
  };
  
  miniatures.forEach((mini, index) => {
    mini.addEventListener('click',() => {
      changeImage(preview, mini);
      currentImage = index;
    });

  });

  beforeBtn.addEventListener('click',() => {
    currentImage--;

    if (currentImage < 0){
      currentImage = miniatures.length - 1;
    };

    changeImage(preview, miniatures[currentImage]);
  });

  nextBtn.addEventListener('click',() => {
    currentImage++;

    if (currentImage > miniatures.length - 1){
      currentImage = 0;
    };

    changeImage(preview, miniatures[currentImage]);
  });

  const updateCounter = () => {
    const text = `${currentImage + 1}/ ${miniatures.length}`

    counter.innerHTML = text;
  }

  setInterval(() => {
    if(currentImage > miniatures.length - 1) {
      currentImage = 0;
    };

    changeImage(preview, miniatures[currentImage]);

    currentImage++;

  }, 3000);

});
