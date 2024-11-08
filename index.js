

function playVideo() {
  var imageContainer = document.getElementById('image-container');
  var videoContainer = document.getElementById('video-container');
  var video = document.getElementById('video');


  imageContainer.style.opacity = 0;


  setTimeout(function() {
    imageContainer.style.display = 'none';
    videoContainer.style.display = 'block';
    video.play();
  }, 300);
}

// ___________carousel_________
let currentIndex = 0;
const profiles = document.querySelectorAll('.profil');
const buttons = document.querySelectorAll('.buttons button');

function showProfile(index) {

  profiles[currentIndex].classList.remove('active');
  buttons[currentIndex].classList.remove('active');


  currentIndex = index;


  profiles[currentIndex].classList.add('active');
  buttons[currentIndex].classList.add('active');
}


profiles[currentIndex].classList.add('active');
buttons[currentIndex].classList.add('active');


setInterval(() => {
  showProfile((currentIndex + 1) % profiles.length);
}, 3000);


