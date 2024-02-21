// Silder Before and After 
const html = document.querySelector('html');
html.setAttribute('data-bs-theme', 'dark');

document.addEventListener('DOMContentLoaded', () => {
  // --- Create LightBox
  const galleryGrid = document.querySelector(".gallery-grid");
  const links = galleryGrid.querySelectorAll("a");
  const imgs = galleryGrid.querySelectorAll("img");
  const lightboxModal = document.getElementById("lightbox-modal");
  const bsModal = new bootstrap.Modal(lightboxModal);
  const modalBody = lightboxModal.querySelector(".lightbox-content");

  function createCaption(caption) {
    return `<div class="carousel-caption d-none d-md-block">
    <h4 class="m-0">${caption}</h4>
  </div>`;
  }

  function createIndicators(img) {
    let markup = "", i, len;

    const countSlides = links.length;
    const parentCol = img.closest('.col');
    const curIndex = [...parentCol.parentElement.children].indexOf(parentCol);

    for (i = 0, len = countSlides; i < len; i++) {
      markup += `
    <button type="button" data-bs-target="#lightboxCarousel"
      data-bs-slide-to="${i}"
      ${i === curIndex ? 'class="active" aria-current="true"' : ''}
      aria-label="Slide ${i + 1}">
    </button>`;
    }

    return markup;
  }

  function createSlides(img) {
    let markup = "";
    const currentImgSrc = img.closest('.gallery-item').getAttribute("href");

    for (const img of imgs) {
      const imgSrc = img.closest('.gallery-item').getAttribute("href");
      const imgAlt = img.getAttribute("alt");

      markup += `
    <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
      <img class="d-block img-fluid w-100" src=${imgSrc} alt="${imgAlt}">
      ${imgAlt ? createCaption(imgAlt) : ""}
    </div>`;
    }

    return markup;
  }

  function createCarousel(img) {
    const markup = `
  <!-- Lightbox Carousel -->
  <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="true">
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      ${createIndicators(img)}
    </div>
    <!-- Wrapper for Slides -->
    <div class="carousel-inner justify-content-center mx-auto">
      ${createSlides(img)}
    </div>
    <!-- Controls/icons -->
    <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `;

    modalBody.innerHTML = markup;
  }

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const currentImg = link.querySelector("img");
      const lightboxCarousel = document.getElementById("lightboxCarousel");

      if (lightboxCarousel) {
        const parentCol = link.closest('.col');
        const index = [...parentCol.parentElement.children].indexOf(parentCol);

        const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
        bsCarousel.to(index);
      } else {
        createCarousel(currentImg);
      }

      bsModal.show();
    });
  }

  // --- Support Fullscreen
  const fsEnlarge = document.querySelector(".btn-fullscreen-enlarge");
  const fsExit = document.querySelector(".btn-fullscreen-exit");

  function enterFS() {
    lightboxModal.requestFullscreen().then({}).catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
    fsEnlarge.classList.toggle("d-none");
    fsExit.classList.toggle("d-none");
  }

  function exitFS() {
    document.exitFullscreen();
    fsExit.classList.toggle("d-none");
    fsEnlarge.classList.toggle("d-none");
  }

  fsEnlarge.addEventListener("click", (e) => {
    e.preventDefault();
    enterFS();
  });

  fsExit.addEventListener("click", (e) => {
    e.preventDefault();
    exitFS();
  });
})



var divisor = document.getElementById("divisor"),
handle = document.getElementById("handle"),
slider = document.getElementById("slider");

function moveDivisor() {
handle.style.left = slider.value + "%";
divisor.style.width = slider.value + "%";
}

window.onload = function () {
moveDivisor();
};


(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);






//  form.addEventListener('submit', e => {
//    e.preventDefault()
//    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//      .then(response => {sentmsg.innerHTML = "Message Sent Successfully"
//    setTimeout(function(){
//        sentmsg.innerHTML =""
//    },5000)
//    form.reset()
// })
//      .catch(error => {unsentmsg.innerHTML = "Message Sent Unsuccesfull"
//      setTimeout(function(){
//        unsentmsg.innerHTML =""
//      },5000)
//      form.reset()
//  })
//  })




