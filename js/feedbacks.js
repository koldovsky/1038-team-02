
 //*<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>
 //* var swiper = new Swiper(".mySwiper", {
  //*  spaceBetween: 30,
  //*  navigation: {
  //*    nextEl: ".swiper-button-next",
  //*    prevEl: ".swiper-button-prev",
  //*  },
 //* });

 //*const slides = [
 //*'<div class="carousel__slide"><img class="cards__image_quotes" src="img/quotes.svg" alt="quotes" /> <h3 class="feedbacks_name">John Jeely</h3><p class="feedbacks_occupation">Coffee Enthusiast</p> <p class="feedbacks_text">"I am the kind of person that can sing odes to coffee. At the course, I learned to make the perfect coffee at home, so now I have no reason to leave it at all. I cant even count how much money Im saving on coffee-to-go every day!"</p> <p class="feedbacks_date">December 15, 2022</p> </div>',
  //*'<div class = "carousel__slide"> <img class = "cards__image_quotes" src="img/quotes.svg" alt="quotes"/> <h3 class = "feedbacks_name">Mary Woolen</h3> <p class = "feedbacks_occupation">Barista</p> <p class = "feedbacks_text">"I was so happy to study at CoffeeLab. They know how to work with poor learners and find the best approach to them. Sure, I still have many tricks to learn, but this school gave me basic skills that I use every day at work."</p>  <p class="feedbacks_date">March 25, 2022</p></div>',
 //* '<div class="carousel__slide"> <img class="cards__image_quotes" src="img/quotes.svg" alt="quotes" />  <h3 class="feedbacks_name"> Lilly Blues </h3> <p class="feedbacks_occupation">Bar Owner</p><p class="feedbacks_text">"It changed the way Im doing my business. The courses gave me the management basics for my own coffee bar and the community gave the best baristas. Running my coffee place is now such a pleasure."</p> <p class="feedbacks_date">November 12, 2022</p> </div>'
 //* ];

  const slides = [
     '<img class="cards__image_quotes" src="img/quotes.svg" alt="quotes" /> <h3 class="feedbacks_name">John Jeely</h3><p class="feedbacks_occupation">Coffee Enthusiast</p> <p class="feedbacks_text">"I am the kind of person that can sing odes to coffee. At the course, I learned to make the perfect coffee at home, so now I have no reason to leave it at all. I cant even count how much money Im saving on coffee-to-go every day!"</p> <p class="feedbacks_date">December 15, 2022</p> ',
     '<img class = "cards__image_quotes" src="img/quotes.svg" alt="quotes"/> <h3 class = "feedbacks_name">Mary Woolen</h3> <p class = "feedbacks_occupation">Barista</p> <p class = "feedbacks_text">"I was so happy to study at CoffeeLab. They know how to work with poor learners and find the best approach to them. Sure, I still have many tricks to learn, but this school gave me basic skills that I use every day at work."</p>  <p class="feedbacks_date">March 25, 2022</p>',
     '<img class="cards__image_quotes" src="img/quotes.svg" alt="quotes" />  <h3 class="feedbacks_name"> Lilly Blues </h3> <p class="feedbacks_occupation">Bar Owner</p><p class="feedbacks_text">"It changed the way Im doing my business. The courses gave me the management basics for my own coffee bar and the community gave the best baristas. Running my coffee place is now such a pleasure."</p> <p class="feedbacks_date">November 12, 2022</p>'
    ];


 const carouselSlide = document.querySelector('.carousel__slide');

 let currentSlide = 0;
 
 function renderSlide() {
     carouselSlide.innerHTML = slides[currentSlide];
 }

 renderSlide();

 function nextSlide() {
  if (currentSlide + 1 < slides.length) {
      currentSlide++;
      renderSlide();
  }
}


 function prevSlide() {
  if (currentSlide - 1 >= 0) {
      currentSlide--;
      renderSlide();
  }
}


 //*setInterval(nextSlide, 2000);

 const btnNext = document.querySelector('.feedbacks-btn-next');
 const btnPrev = document.querySelector('.feedbacks-btn-prev');

 btnNext.addEventListener('click', nextSlide); 
 btnPrev.addEventListener('click', prevSlide);
