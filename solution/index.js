const images = [
  // BU NESNEYİ DEĞİŞTİRMEYİN
  {
    image: 'https://i.ibb.co/T48RzpD/food-avocadotoast.jpg',
    alt_text: 'food-avocadotoast',
  },
  {
    image: 'https://i.ibb.co/fFDwRTr/food-burger.jpg',
    alt_text: 'food-burger',
  },
  {
    image: 'https://i.ibb.co/Z6kQzRF/food-chickenfingers.jpg',
    alt_text: 'food-chickenfingers',
  },
  {
    image: 'https://i.ibb.co/TvFrJgV/food-poutine.jpg',
    alt_text: 'food-poutine',
  },
  {
    image: 'https://i.ibb.co/94P4YRd/food-ribs.jpg',
    alt_text: 'food-ribs',
  },
  {
    image: 'https://i.ibb.co/xJPTqGj/food-sandwich.jpg',
    alt_text: 'food-sandwich',
  },
  {
    image: 'https://i.ibb.co/25nNb71/food-sausage.jpg',
    alt_text: 'food-sausage',
  },
  {
    image: 'https://i.ibb.co/bXsYBXn/food-steak.jpg',
    alt_text: 'food-steak',
  },
  {
    image: 'https://i.ibb.co/L1pFsM8/food-tacos.jpg',
    alt_text: 'food-tacos',
  },
];

/* Kodlar Buradan aşağıya */

// css dosyasının linki index.html'de eklenmemiş.
document.getElementsByTagName('link')[1].href = './index.css';

const elements = document.querySelectorAll('.gallery-content img');

for (let i = 0; i < elements.length; i++) {
  elements[i].src = images[i].image;
  elements[i].classList.add('border-md');
  elements[i].setAttribute('alt', images[i].alt_text);
}
