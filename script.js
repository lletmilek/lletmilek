const songs = [

  {
    title: "Latest Hits",
    artist: "Fadrit Tula",
    file: "https://www.dropbox.com/scl/fi/3dkuzr0sitcvite1jvtgk/Hitet-Shqip-2026-Don-Xhoni-Dhurata-Dora-Era-Istrefi-Butrint-Imeri-Hitet-e-Reja-Shqip-2026.mp3?rlkey=hfrlii1ubsro6suttnv6mkb3f&st=9w75e53i&raw=1",
    cover: "covers/cover1.jpg"
  },

  {
    title: "Random HITS",
    artist: "Random",
    file: "https://www.dropbox.com/scl/fi/t6zw5gg8k01hy7wrr65ly/Top-Hits-2026-Trending-Songs-2026-Top-Songs-2026-Top-Music-fTKqtvXjkvo.mp3?rlkey=49jtiuvnztmqs2rduk14ferla&st=gzlk5g34&raw=1",
    cover: "covers/cover2.jpg"
  },

  {
    title: "mix Mj",
    artist: "Michael Jackson",
    file: "https://www.dropbox.com/scl/fi/f6mwwdqcogzxz58ea5jpp/The-Best-Of-Michael-Jackson-Michael-Jackson-Greatest-Hits-07GHdlabCtg.mp3?rlkey=edfkh6rgwwg54o2vg7h917axg&st=nu4beh3n&raw=1",
    cover: "covers/covermj.jpg"
  },

  {
    title: "Drake mix",
    artist: "Drake",
    file: "https://www.dropbox.com/scl/fi/b5flvdghdr71o0q8orr34/Drake-2025-MIX-Best-Collection-God-s-Plan-Which-One-NOKIA-She-Will-UFnf_CySIfE.mp3?rlkey=mx8jquxb0wgpu96wklo72rczo&st=k1xyrg7b&raw=1",
    cover: "covers/coverdrake.jpg"
  },

  {
    title: "US rap mix",
    artist: "Drake, kendrick, more",
    file: "https://www.dropbox.com/scl/fi/aw5kzx2ow3q0xpq3kyghp/47_100-RAP-PARTY-MIX-pt.4-Drake-Future-Kendrick-Lamar-Kanye-West-Saweetie-Doja-Cat-etc.mp3?rlkey=8gh6foxk48wgt4ckgllf4ja49&st=2v91w0z3&raw=1",
    cover: "covers/cover33.jpg"
  },

  {
    title: "uk rap",
    artist: "uk rap",
    file: "https://www.dropbox.com/scl/fi/do9jpx0qlo6tivchxg9c3/Best-of-UK-Rap-2023-DJ-Mix-_-Central-Cee-Dave-J-Hus-Headie-One-more-_-DJ-Mibro-fCVJifjG3go.mp3?rlkey=n5sgcwrm3jtd902bu43rwtm1q&st=c0t2g7dj&raw=1",
    cover: "covers/cover6.jpg"
  },

  {
    title: "maneskin mix",
    artist: "Maneskin",
    file: "https://www.dropbox.com/scl/fi/ilskxkd1v5m6a4u305oqo/M-neskin-Greatest-Hits-full-album-M-neskin-Best-Songs-Best-of-M-neskin.mp3?rlkey=vwwq9p9uph4niovn5ndfb9nap&st=v1l73ex1&raw=1",
    cover: "covers/covermaneskin.jpg"
  },

  {
    title: "sorre/fr",
    artist: "buta",
    file: "music/song11.mp3",
    cover: "covers/coverbuta.jpg"
  },

  {
    title: "autostrad",
    artist: "buta",
    file: "music/song12.mp3",
    cover: "covers/coverbuta.jpg"
  },

  {
    title: "Ekspertski",
    artist: "buta x ago",
    file: "music/songagoe.mp3",
    cover: "covers/coverbuta.jpg"
  },
  {
    title: "100 ops nuk jan shum",
    artist: "buta x ago",
    file: "music/songago100.mp3",
    cover: "covers/coverbuta.jpg"
  },
    {
    title: "Memphis",
    artist: "buta x lluni",
    file: "music/songllunim.mp3",
    cover: "covers/coverbuta.jpg"
  },
  {
    title: "Mon Amour",
    artist: "SLIMANE",
    file: "music/song3.mp3",
    cover: "covers/coverslimane.jpg"
  },

  {
    title: "Avant toi",
    artist: "SLIMANE x VITA",
    file: "music/song5.mp3",
    cover: "covers/cover5.jpg"
  },

  {
    title: "Training season",
    artist: "DUa lipa",
    file: "music/songd1.mp3",
    cover: "covers/coverdua.jpg"
  },

  {
    title: "dai dai",
    artist: "shakira",
    file: "music/songsh.mp3",
    cover: "covers/covershakira.jpg"
  },
  
  {
    title: "zitti e buoni",
    artist: "Maneskin",
    file: "music/songm.mp3",
    cover: "covers/covermaneskin.jpg"
  },
  {
    title: "i wanna be ur slave ",
    artist: "Maneskin",
    file: "music/songm1.mp3",
    cover: "covers/covermaneskin.jpg"
  },
];

/* AUDIO */

const audio = new Audio();

let currentSong = 0;

let isPlaying = false;

/* ELEMENTS */

const songsGrid = document.getElementById("songsGrid");

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

  songList.forEach((song)=>{

    const card = document.createElement("div");

    card.classList.add("song-card");

    card.innerHTML = `
      <img src="${song.cover}">
      <div class="play-overlay">▶</div>
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
    `;

    card.addEventListener("click",()=>{

      const realIndex =
      songs.findIndex(s => s.file === song.file);

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

/* START LISTENING */

document.getElementById("startListeningBtn")
.addEventListener("click",()=>{

  loadSong(0);

  playSong();

});

/* NEXT SONG */

nextBtn.addEventListener("click",()=>{

  currentSong++;

  if(currentSong >= songs.length){

    currentSong = 0;

  }

  loadSong(currentSong);

  playSong();

});

/* PREVIOUS SONG */

prevBtn.addEventListener("click",()=>{

  currentSong--;

  if(currentSong < 0){

    currentSong = songs.length - 1;

  }

  loadSong(currentSong);

  playSong();

});

/* AUTO NEXT */

audio.addEventListener("ended",()=>{

  currentSong++;

  if(currentSong >= songs.length){

    currentSong = 0;

  }

  loadSong(currentSong);

  playSong();

});

/* UPDATE PROGRESS */

audio.addEventListener("timeupdate",()=>{

  progressBar.max = audio.duration;

  progressBar.value = audio.currentTime;

  currentTimeEl.innerText =
  formatTime(audio.currentTime);

  durationEl.innerText =
  formatTime(audio.duration);

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

  const value =
  e.target.value.toLowerCase();

  const filteredSongs =
  songs.filter(song =>

    song.title.toLowerCase().includes(value) ||

    song.artist.toLowerCase().includes(value)

  );

  renderSongs(filteredSongs);

  setTimeout(()=>{

    const firstCard =
    document.querySelector(".song-card");

    if(firstCard){

      firstCard.scrollIntoView({
        behavior:"smooth",
        block:"center"
      });

    }

  },100);

});

/* ENTER TO PLAY */

document.getElementById("searchInput")
.addEventListener("keydown",(e)=>{

  if(e.key === "Enter"){

    const firstCard =
    document.querySelector(".song-card");

    if(firstCard){

      firstCard.click();

    }

  }

});

/* TOAST */

function showToast(message){

  toast.innerText = message;

  toast.classList.add("show-toast");

  setTimeout(()=>{

    toast.classList.remove("show-toast");

  },2500);

}

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

const menuToggle =
document.querySelector(".menu-toggle");

const sidebar =
document.querySelector(".sidebar");

menuToggle.addEventListener("click",()=>{

  sidebar.classList.toggle("active");

});

/* PROFILE + MODALS */

const profileBtn =
document.getElementById("profileBtn");

const topProfileBtn =
document.getElementById("topProfileBtn");

const profileModal =
document.getElementById("profileModal");

const closeProfileModal =
document.getElementById("closeProfileModal");

const notificationBtn =
document.getElementById("notificationBtn");

const notificationModal =
document.getElementById("notificationModal");

const closeNotificationModal =
document.getElementById("closeNotificationModal");

/* OPEN PROFILE */

if(profileBtn){

  profileBtn.addEventListener("click",()=>{

    profileModal.classList.add("show-modal");

  });

}

/* TOP PROFILE */

if(topProfileBtn){

  topProfileBtn.addEventListener("click",()=>{

    profileModal.classList.add("show-modal");

  });

}

/* CLOSE PROFILE */

if(closeProfileModal){

  closeProfileModal.addEventListener("click",()=>{

    profileModal.classList.remove("show-modal");

  });

}

/* OPEN NOTIFICATIONS */

if(notificationBtn){

  notificationBtn.addEventListener("click",()=>{

    notificationModal.classList.add("show-modal");

  });

}

/* CLOSE NOTIFICATIONS */

if(closeNotificationModal){

  closeNotificationModal.addEventListener("click",()=>{

    notificationModal.classList.remove("show-modal");

  });

}

/* SIGN IN */

const signInBtn =
document.getElementById("signInBtn");

if(signInBtn){

  signInBtn.addEventListener("click",()=>{

    showToast("Sign In coming soon");

  });

}

/* CREATE ACCOUNT */

const createAccountBtn =
document.getElementById("createAccountBtn");

if(createAccountBtn){

  createAccountBtn.addEventListener("click",()=>{

    showToast("Create Account coming soon");

  });

}

/* NOTIFICATION SIGN IN */

const notificationSignIn =
document.getElementById("notificationSignIn");

if(notificationSignIn){

  notificationSignIn.addEventListener("click",()=>{

    showToast("Sign In coming soon");

  });

}

/* NAVBAR LINKS */

const navLinks =
document.querySelectorAll(".nav-link");

navLinks.forEach(link=>{

  link.addEventListener("click",()=>{

    profileModal.classList.add("show-modal");

    showToast("Please sign in first");

  });

});

/* CLOSE MODALS OUTSIDE */

window.addEventListener("click",(e)=>{

  if(e.target === profileModal){

    profileModal.classList.remove("show-modal");

  }

  if(e.target === notificationModal){

    notificationModal.classList.remove("show-modal");

  }

});
