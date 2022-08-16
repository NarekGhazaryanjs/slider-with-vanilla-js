const img = document.querySelector('img');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

const imagesArray = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
]

let count = 0;


prevButton.addEventListener('click', () => {
   count === 0 ? count = imagesArray.length - 1 : count = count - 1;
   img.src = imagesArray[count]
})

nextButton.addEventListener('click', () => {
    count === imagesArray.length - 1 ? count = 0 : count = count  + 1;
    img.src = imagesArray[count]
 })