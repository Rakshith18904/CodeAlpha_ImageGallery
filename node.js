document.addEventListener('DOMContentLoaded', () => {
    const images = Array.from(document.querySelectorAll('.gallery a'));
    let currentIndex = 0;

    
    const lightboxOverlay = document.createElement('div');
    const lightbox = document.createElement('div');
    const lightboxImage = document.createElement('img');
    const btnClose = document.createElement('button');
    const btnNext = document.createElement('button');
    const btnPrev = document.createElement('button');
lightboxOverlay.className = 'lightbox-overlay';
    lightbox.className = 'lightbox';
    btnClose.className = 'lightbox-close';
    btnNext.className = 'lightbox-next';
    btnPrev.className = 'lightbox-prev';
    
    btnClose.textContent = '×';
    btnNext.textContent = '›';
    btnPrev.textContent = '‹';

   lightbox.appendChild(lightboxImage);
    lightbox.appendChild(btnClose);
    lightbox.appendChild(btnNext);
lightbox.appendChild(btnPrev);
    document.body.appendChild(lightboxOverlay);
    document.body.appendChild(lightbox);

    
    const showLightbox = (index) => {
        currentIndex = index;
        const imageSrc = images[index].querySelector('img').src;
        lightboxImage.src = imageSrc;
        lightboxOverlay.style.display = 'block';
lightbox.style.display = 'block';
    };

   
    const hideLightbox = () => {
        lightboxOverlay.style.display = 'none';
        lightbox.style.display = 'none';
    };

    
    const showNextImage = () => {
currentIndex = (currentIndex + 1) % images.length;
        showLightbox(currentIndex);
    };
    
     
    const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showLightbox(currentIndex);
    };

images.forEach((img, index) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            showLightbox(index);
        });
    });

    btnClose.addEventListener('click', hideLightbox);
    btnNext.addEventListener('click', showNextImage);
btnPrev.addEventListener('click', showPrevImage);
    lightboxOverlay.addEventListener('click', hideLightbox);
});

