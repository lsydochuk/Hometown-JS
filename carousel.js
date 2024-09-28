// Массив с новостями
var news = [
  {
    image: 'images/CreweFootball.jpg',
    title: 'Watch a Football Match',
    description: 'Visit the famous Alexandra Stadium and cheer for Crewe Alexandra Football Club.'
  },
  {
    image: 'images/QueensPark.jpeg',
    title: 'Relax at Queens Park',
    description: 'One of Cheshire\'s finest parks, perfect for a leisurely stroll or a picnic with friends.'
  },
  {
    image: 'images/CreweHeritageCentre.jpg',
    title: 'Visit Crewe Heritage Centre',
    description: 'Learn about Crewe\'s rich railway history and explore historic locomotives and trains.'
  }
];

var currentIndex = 0;

// Функция для обновления карусели
function updateCarousel() {
  var carousel = document.getElementById('carousel');
  var newsTitle = document.getElementById('news-title');
  var newsDescription = document.getElementById('news-description');

  carousel.setAttribute('src', news[currentIndex].image);
  newsTitle.textContent = news[currentIndex].title;
  newsDescription.textContent = news[currentIndex].description;
}

// Обработчик для кнопки "Следующий"
document.getElementById('next').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % news.length;
  updateCarousel();
});

// Обработчик для кнопки "Предыдущий"
document.getElementById('prev').addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + news.length) % news.length;
  updateCarousel();
});

// Инициализация карусели с первой новостью
updateCarousel();

