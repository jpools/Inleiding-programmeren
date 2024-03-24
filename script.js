let winniepet = document.querySelector('#winniepet');
let winniestate = 0;
let images = ["winniepet-normal.png", "winniepet-feed.png", "winniepet-playful.png", "winniepet-sleep.png"];

let hungerLevel = 20;
let funLevel = 20;
let sleepLevel = 20;

winniepet.src = "img/" + images[0];

function updateWinniePetState() {
  winniepet.src = "img/" + images[winniestate];
}

// met behulp van chatgpt

function changeState(action) {
  if (action === 'feed-button') {
    winniestate = 1;
    hungerLevel = Math.min(100, hungerLevel + 25);
  } else if (action === 'play-button') {
    winniestate = 2;
    funLevel = Math.min(100, funLevel + 25); 
  } else if (action === 'sleep-button') {
    winniestate = 3;
    sleepLevel = Math.min(100, sleepLevel + 25); 
  }
  updateWinniePetState();
  updateNeedBars();
}

function updateNeedBars() {
  document.querySelector('#hunger-fill').style.width = hungerLevel + '%';
  document.querySelector('#fun-fill').style.width = funLevel + '%';
  document.querySelector('#sleep-fill').style.width = sleepLevel + '%';
}

document.querySelectorAll('.button-container button').forEach(button => {
  button.addEventListener('click', function() {
    changeState(this.id);
  });
});

updateNeedBars();

