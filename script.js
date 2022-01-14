let songIndex = 0;
let aud = new Audio("songs/1.mp3");
var btn = document.getElementById("pause");
var gif = document.getElementById("gif");
var gif2 = document.getElementById("gif2");
var progressbar = document.getElementById("probar");
let songitem = Array.from(document.getElementsByClassName("songlist"));

let songs = [
  {
    songName: "1:Shree Krishna Govind hare murari",
    filePath: "songs/1.mp3",
    coverPath: "img/1.png",
  },
  {
    songName: "2:I don't care",
    filePath: "songs/2.mp3",
    coverPath: "img/2.png",
  },
  {
    songName: "3:Gabru by Guru",
    filePath: "songs/3.mp3",
    coverPath: "img/3.png",
  },
  {
    songName: "4:Rata lambiya lambiya from Shershah ",
    filePath: "songs/4.mp3",
    coverPath: "img/4.png",
  },
  {
    songName: "sajna tere bina",
    filePath: "songs/5.mp3",
    coverPath: "img/5.png",
  },
  {
    songName: "Made in india by Guru",
    filePath: "songs/6.mp3",
    coverPath: "img/6.png",
  },
  {
    songName: "Hawaye by Arjit-singh",
    filePath: "songs/7.mp3",
    coverPath: "img/7.png",
  },
  {
    songName: "Tera yaar hu mai",
    filePath: "songs/8.mp3",
    coverPath: "img/8.png",
  },
  {
    songName: "Teri yari Teri yari ",
    filePath: "songs/9.mp3",
    coverPath: "img/9.png",
  },
  {
    songName: "stay By justin Bober",
    filePath: "songs/10.mp3",
    coverPath: "img/10.png",
  },
];

songitem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

function playSong() {
  // var myVideo = aud;
  if (aud.paused || aud.currentTime <= 0) {
    aud.play();
    btn.classList.remove("fa-play-circle");
    btn.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    gif2.style.opacity = 1;
  } else {
    aud.pause();
    btn.classList.remove("fa-pause-circle");
    btn.classList.add("fa-play-circle");
    gif.style.opacity = 0;
    gif2.style.opacity = 0;
  }
}

// listen to events

aud.addEventListener("timeupdate", () => {
  progress = parseInt((aud.currentTime / aud.duration) * 100);
  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  aud.currentTime = (progressbar.value * aud.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songitemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songitemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      aud.src = `songs/${songIndex + 1}.mp3`;
      aud.currentTime = 0;
      aud.play();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      pause.classList.remove("fa-play-circle");
      pause.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
      gif2.style.opacity = 1;
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  aud.src = `songs/${songIndex + 1}.mp3`;
  aud.currentTime = 0;
  aud.play();
  pause.classList.remove("fa-play-circle");
  pause.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }

  aud.src = `songs/${songIndex + 1}.mp3`;
  aud.currentTime = 0;
  aud.play();
  pause.classList.remove("fa-play-circle");
  pause.classList.add("fa-pause-circle");
});
