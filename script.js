let enteredPassword = "";
let correctPassword = "2908";

updateDisplay();

function pressNumber(number) {
  if (enteredPassword.length < 4) {
    enteredPassword += number;
    updateDisplay();
  }
}

function updateDisplay() {
  let display = "";

  for (let i = 0; i < enteredPassword.length; i++) {
    display += "•";
  }

  while (display.length < 4) {
    display += "○";
  }

  document.getElementById("passwordDisplay").innerText = display;
}

function clearPassword() {
  enteredPassword = enteredPassword.slice(0, -1);
  updateDisplay();
  document.getElementById("errorText").innerText = "";
}

function checkPassword() {
  if (enteredPassword === correctPassword) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
    showDays();
    window.scrollTo(0, 0);
  } else {
    document.getElementById("errorText").innerText = "Yanlış şifre 😏 İyi düşün";
    enteredPassword = "";
    updateDisplay();
  }
}

function openPopup(title, message) {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("popupOverlay").classList.add("active");
}

function closePopup() {
  document.getElementById("popupOverlay").classList.remove("active");
}

function showDays() {
  let startDate = new Date("2025-08-29");
  let today = new Date();

  let difference = today - startDate;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));

  document.getElementById("daysText").innerText = days + " gündür";
}

let songs = [
  "--ktfxczIxk",
  "hBIj-MeUTuE",
  "JpsU9-QcWVA",
  "K_DRdTFY54k",
  "bCYwZ2h66to"
];

let lastSong = "";

function playRandomSong() {
  let selectedSong;

  do {
    selectedSong = songs[Math.floor(Math.random() * songs.length)];
  } while (selectedSong === lastSong && songs.length > 1);

  lastSong = selectedSong;

  const iframe = document.getElementById("youtubePlayer");

  iframe.src = "";

  setTimeout(() => {
    iframe.src = `https://www.youtube.com/embed/${selectedSong}?autoplay=1&rel=0&playsinline=1`;
    document.getElementById("musicPopup").classList.add("active");
  }, 100);
}

function closeMusic() {
  document.getElementById("musicPopup").classList.remove("active");
  document.getElementById("youtubePlayer").src = "";
}

function openPoemPopup() {
  const popup = document.getElementById("poemPopup");
  popup.style.display = "flex";
}

function closePoemPopup() {
  const popup = document.getElementById("poemPopup");
  popup.style.display = "none";
}


function openNotePopup() {
  document.getElementById("notePopup").style.display = "flex";
}

function closeNotePopup() {
  document.getElementById("notePopup").style.display = "none";
}