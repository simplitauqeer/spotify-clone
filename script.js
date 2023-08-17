console.log("welcome to spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Abhi Kuch Dino Se", filePath: "C:\spotify\songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Adhoore", filePath: "C:\spotify\songs\Adhoore.mp3", coverPath: "cover/2.jpg" },
    { songName: "Badri Ki Dulhania", filePath: "C:\spotify\songs\Badri Ki Dulhania - Title Track (Neha Kakkar) 190Kbps.mp3", coverPath: "cover/3.jpg" },
    { songName: "Bezubaan Phir Se", filePath: "C:\spotify\songs\Main Woh Chaand_64(wapking.fm).mp3", coverPath: "cover/4.jpg" },
    { songName: "Dil Chori", filePath: "C:\spotify\songs\Pyaar Manga Hai (Armaan Malik)  (128 Kbps) - DownloadMing.SE.mp3", coverPath: "cover/5.jpg" },
    { songName: "Main Hon Hero Tera", filePath: "C:\spotify\songs\Sharabi(wapking.fm).mp3", coverPath: "cover/6.jpg" },
    { songName: "Main Woh Chaand", filePath: "C:\spotify\songs\Main Hoon Hero Tera (Salman Khan)(wapking.cc).mp3", coverPath: "cover/7.jpg" },
    { songName: "Matargashti", filePath: "C:\spotify\songs\Bezubaan Phir Se (SongsMp3.Com) (SongsMp3.Com).mp3", coverPath: "cover/8.jpg" },
    { songName: "Pyaar Manga Hai", filePath: "C:\spotify\songs\Dil Chori - Yo Yo Honey Singh 190kbps.mp3", coverPath: "cover/9.jpg" },
    { songName: "Sharabi", filePath: "C:\spotify\songs\Matargashti - Tamasha (Mohit Chauhan) (SongsMp3.Com).mp3", coverPath: "cover/10.jpg" },
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


// Listen to element
audioElement.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${index + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})