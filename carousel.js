var images, currentIndex;


images = ['https://via.placeholder.com/300x150/FF0000', 'https://via.placeholder.com/300x150/00FF00', 'https://via.placeholder.com/300x150/0000FF'];
currentIndex = 0;
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  currentIndex = (typeof currentIndex === 'number' ? currentIndex : 0) + 1;
  if (currentIndex > 2) {
    currentIndex = 0;
  }
  if (currentIndex == 0) {
    let element_carousel2 = document.getElementById('carousel');
    element_carousel2.setAttribute("src", 'https://via.placeholder.com/300x150/FF0000');
  }
  if (currentIndex == 1) {
    let element_carousel3 = document.getElementById('carousel');
    element_carousel3.setAttribute("src", 'https://via.placeholder.com/300x150/00FF00');
  }
  if (currentIndex == 2) {
    let element_carousel4 = document.getElementById('carousel');
    element_carousel4.setAttribute("src", 'https://via.placeholder.com/300x150/0000FF');
  }

});

document.getElementById('prev').addEventListener('click', (event) => {
  currentIndex = (typeof currentIndex === 'number' ? currentIndex : 0) + -1;
  if (currentIndex < 0) {
    currentIndex = 2;
  }
  if (currentIndex == 0) {
    let element_carousel5 = document.getElementById('carousel');
    element_carousel5.setAttribute("src", 'https://via.placeholder.com/300x150/FF0000');
  }
  if (currentIndex == 1) {
    let element_carousel6 = document.getElementById('carousel');
    element_carousel6.setAttribute("src", 'https://via.placeholder.com/300x150/00FF00');
  }
  if (currentIndex == 2) {
    let element_carousel7 = document.getElementById('carousel');
    element_carousel7.setAttribute("src", 'https://via.placeholder.com/300x150/0000FF');
  }

});
