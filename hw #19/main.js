// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const friendsImages = [
  "https://variety.com/wp-content/uploads/2020/05/the-one-that-couldve-been.jpg?w=1000",
  "https://variety.com/wp-content/uploads/2020/05/the-one-where-they-all-turn-30.jpg?w=1000",
  "https://variety.com/wp-content/uploads/2020/05/the-one-with-five-steaks-and-an-eggplant.jpg?w=1000",
  "https://variety.com/wp-content/uploads/2020/05/brad-pitt-friends-the-one-with-the-rumor.jpg?w=935",
  "https://variety.com/wp-content/uploads/2020/05/the-one-with-phoebes-wedding.jpg?w=1000",
  "https://variety.com/wp-content/uploads/2020/05/the-one-with-the-blackout.jpg?w=1000",
  "https://variety.com/wp-content/uploads/2020/05/the-one-with-the-routine.jpg?w=1000",
  "https://variety.com/wp-content/uploads/2020/05/the-one-with-monica-and-chandlers-wedding.jpg?w=1000",
  "https://variety.com/wp-content/uploads/2020/05/the-one-with-the-embryos.jpg?w=1000"
];

const showImage = () => {
  const randomIndex = Math.floor(Math.random() * friendsImages.length);
  document.querySelector('.image').src = friendsImages[randomIndex];
}

document.querySelector('.action').addEventListener('click', showImage);
