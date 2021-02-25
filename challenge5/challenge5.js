/*
You will create a 'Now Playing' wall for a theatre to show movies they are showing
They will be able to update the now playing list with new movies when they want to

1. You will need arrays to store the movie titles and poster image links
2. Display each movie in the array with it's poster
  - forEach loops are very useful here, but you can still do without it
3. Create a simple input section for new movies
4. New movies should become the first element of the array
5. The last movie in the array should be removed when adding a new movie
6. Once a movie is added, the page should refresh with the new movies showing

GOOD LUCK 🤹‍♂️
*/

var mName = ['Aquaman', 'The Imitation Game', 'The Martian', 'Joker', 'Robin Hood', 'Venom'];
var mLink = [
  'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg',
  'https://i.pinimg.com/originals/90/8e/07/908e07944ac6b997180a8190600b3df7.jpg',
  'https://cdn.shopify.com/s/files/1/1416/8662/products/martian_2015_styleA_intl_original_film_art_5000x.jpg?v=1569087825',
  'https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/11/IMG_2167-2.jpeg',
  'https://images-na.ssl-images-amazon.com/images/I/812cqC7FD6L._AC_SL1481_.jpg',
  'https://bloximages.chicago2.vip.townnews.com/kokomotribune.com/content/tncms/assets/v3/editorial/2/2e/22e7dc38-c649-11e8-8fb3-73f150ba304d/5bb375fd83314.image.jpg?resize=500%2C750'];

document.getElementById('movie1').innerHTML = mName[0];
document.getElementById('movie2').innerHTML = mName[1];
document.getElementById('movie3').innerHTML = mName[2];
document.getElementById('movie4').innerHTML = mName[3];
document.getElementById('movie5').innerHTML = mName[4];
document.getElementById('movie6').innerHTML = mName[5];
document.getElementById('image1').src = mLink[0];
document.getElementById('image2').src = mLink[1];
document.getElementById('image3').src = mLink[2];
document.getElementById('image4').src = mLink[3];
document.getElementById('image5').src = mLink[4];
document.getElementById('image6').src = mLink[5];

function display() {
  document.getElementById('movie1').innerHTML = mName[0];
  document.getElementById('movie2').innerHTML = mName[1];
  document.getElementById('movie3').innerHTML = mName[2];
  document.getElementById('movie4').innerHTML = mName[3];
  document.getElementById('movie5').innerHTML = mName[4];
  document.getElementById('movie6').innerHTML = mName[5];
  document.getElementById('image1').src = mLink[0];
  document.getElementById('image2').src = mLink[1];
  document.getElementById('image3').src = mLink[2];
  document.getElementById('image4').src = mLink[3];
  document.getElementById('image5').src = mLink[4];
  document.getElementById('image6').src = mLink[5];
}

function userInput() {
  var title = document.getElementById("movieTitle").value;
  var link = document.getElementById("movieLink").value;
  mName.unshift(title);
  mName.pop();
  mLink.unshift(link);
  mLink.pop();
  display();
}