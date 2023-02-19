console.log("Welcome to Spotify");

// Initialisng the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let mainPlayButton = document.getElementById('mainPlayButton');
let progressBar = document.getElementById('progressBar');


// Songs array
let songs = [
    { songName: "Let Me Love You", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Perfect", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Locked Away", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Story Of My Life", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Night Changes", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "I Like Me Better", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Soocha Na Tha", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Maan Meri Jaan", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tu Hi Das De", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
]

// play/pause button
mainPlayButton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        mainPlayButton.classList.remove('fa-play-circle');
        mainPlayButton.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        mainPlayButton.classList.remove('fa-pause-circle');
        mainPlayButton.classList.add('fa-play-circle');
    }
})