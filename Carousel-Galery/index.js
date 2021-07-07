document.addEventListener('DOMContentLoaded', () => {
  const miniatures = document.querySelectorAll(".card-miniatures__miniature");
  const preview = document.querySelector(".card-image__preview");
  const beforeBtn = document.querySelector(".span__control--before");
  const nextBtn = document.querySelector(".span__control--next");
  const counter = document.querySelector(".span__counter");
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
