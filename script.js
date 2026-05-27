const songs = [
  {
    title: "Lot",
    artist: "Butrint Imeri x Tayna",
    file: "music/song1.mp3",
    cover: "covers/cover1.jpg"
  },
  {
    title: "Behind Barz",
    artist: "VINZ",
    file: "music/song2.mp3",
    cover: "covers/cover2.jpg"
  },
  {
    title: "Gangland",
    artist: "Hellbanianz",
    file: "music/song3.mp3",
    cover: "covers/cover3.jpg"
  },
  {
    title: "Zemer ty",
    artist: "Dafina x ricky rich",
    file: "music/song4.mp3",
    cover: "covers/cover4.jpg"
  },
  {
    title: "Vone",
    artist: "Dhurata dora",
    file: "music/song5.mp3",
    cover: "covers/cover5.jpg"
  }
];

const songsGrid = document.getElementById("songsGrid");

const audio = new Audio();

let currentSong = 0;
let isPlaying = false;

/* PLAYER ELEMENTS */

const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");
const playerCover = document.getElementById("playerCover");

const progressBar = document.getElementById("progressBar");

const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

const volumeSlider = document.getElementById("volumeSlider");

const toast = document.getElementById("toast");

/* RENDER SONGS */

function renderSongs(songList){

  songsGrid.innerHTML = "";

  songList.forEach((song,index)=>{

    const card = document.createElement("div");

    card.classList.add("song-card");

    card.innerHTML = `
      <img src="${song.cover}">
      <div class="play-overlay">▶</div>
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
    `;

    card.addEventListener("click",()=>{

      const realIndex = songs.findIndex(s => s.file === song.file);

      loadSong(realIndex);

      playSong();

    });

    songsGrid.appendChild(card);

  });

}

renderSongs(songs);

/* LOAD SONG */

function loadSong(index){

  currentSong = index;

  audio.src = songs[index].file;

  playerTitle.innerText = songs[index].title;

  playerArtist.innerText = songs[index].artist;

  playerCover.src = songs[index].cover;

  showToast(`Now Playing: ${songs[index].title}`);

}

/* PLAY SONG */

function playSong(){

  audio.play();

  isPlaying = true;

  playBtn.innerText = "⏸";

}

/* PAUSE SONG */

function pauseSong(){

  audio.pause();

  isPlaying = false;

  playBtn.innerText = "▶";

}

/* PLAY BUTTON */

playBtn.addEventListener("click",()=>{

  if(!audio.src){

    loadSong(0);

  }

  isPlaying ? pauseSong() : playSong();

});

/* NEXT */

nextBtn.addEventListener("click",()=>{

  currentSong++;

  if(currentSong >= songs.length){

    currentSong = 0;

  }

  loadSong(currentSong);

  playSong();

});

/* PREVIOUS */

prevBtn.addEventListener("click",()=>{

  currentSong--;

  if(currentSong < 0){

    currentSong = songs.length - 1;

  }

  loadSong(currentSong);

  playSong();

});

/* UPDATE PROGRESS */

audio.addEventListener("timeupdate",()=>{

  progressBar.max = audio.duration;

  progressBar.value = audio.currentTime;

  currentTimeEl.innerText = formatTime(audio.currentTime);

  durationEl.innerText = formatTime(audio.duration);

});

/* SEEK */

progressBar.addEventListener("input",()=>{

  audio.currentTime = progressBar.value;

});

/* VOLUME */

volumeSlider.addEventListener("input",()=>{

  audio.volume = volumeSlider.value;

});

/* FORMAT TIME */

function formatTime(time){

  if(isNaN(time)) return "0:00";

  const mins = Math.floor(time / 60);

  const secs = Math.floor(time % 60);

  return `${mins}:${secs < 10 ? "0"+secs : secs}`;

}

/* SEARCH */

document.getElementById("searchInput")
.addEventListener("input",(e)=>{

  const value = e.target.value.toLowerCase();

  const filteredSongs = songs.filter(song =>

    song.title.toLowerCase().includes(value) ||
    song.artist.toLowerCase().includes(value)

  );

  renderSongs(filteredSongs);

});

/* TOAST */

function showToast(message){

  toast.innerText = message;

  toast.classList.add("show-toast");

  setTimeout(()=>{

    toast.classList.remove("show-toast");

  },2500);

}

/* THEME TOGGLE */

document.getElementById("themeToggle")
.addEventListener("click",()=>{

  document.body.classList.toggle("light-mode");

});

/* KEYBOARD SHORTCUTS */

document.addEventListener("keydown",(e)=>{

  if(e.code === "Space"){

    e.preventDefault();

    isPlaying ? pauseSong() : playSong();

  }

  if(e.code === "ArrowRight"){

    audio.currentTime += 5;

  }

  if(e.code === "ArrowLeft"){

    audio.currentTime -= 5;

  }

});

/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");

const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click",()=>{

  sidebar.classList.toggle("active");

});

/* LOADER */

window.addEventListener("load",()=>{

  setTimeout(()=>{

    document.getElementById("loader").style.display = "none";

  },1500);

});