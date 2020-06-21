var beat: string[] =  ["assets/hihat.mp3", "assets/hihat.mp3", "assets/laugh-2.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/laugh-1.mp3", "assets/C.mp3", "assets/A.mp3", "assets/G.mp3", "assets/F.mp3"];
var mp3sounds: string[] = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];

window.addEventListener("load", function() {
    document.querySelector("#button1").addEventListener("mousedown", function(): void { playSample(0); });
    document.querySelector("#button2").addEventListener("mousedown", function(): void { playSample(1); });
    document.querySelector("#button3").addEventListener("mousedown", function(): void { playSample(2); });
    document.querySelector("#button4").addEventListener("mousedown", function(): void { playSample(3); });
    document.querySelector("#button5").addEventListener("mousedown", function(): void { playSample(4); });
    document.querySelector("#button6").addEventListener("mousedown", function(): void { playSample(5); });
    document.querySelector("#button7").addEventListener("mousedown", function(): void { playSample(6); });
    document.querySelector("#button8").addEventListener("mousedown", function(): void { playSample(7); });
    document.querySelector("#button9").addEventListener("mousedown", function(): void { playSample(8); });
});

var record: boolean = false;
function playSample(bNumber: number): void {
    var sound: HTMLAudioElement = new Audio(mp3sounds[bNumber]);
    sound.play();
    if (record == true) {
        beat.push(mp3sounds[bNumber]);
        console.log(beat);
    }
}



//mit Hilfe von Annete//
var playBut: HTMLElement = document.querySelector("#playButton");

document.querySelector(".fa-play").addEventListener("click", function() {
  

  if (playBut.classList.contains ("fa-play-circle")) {
    playBut.classList.remove ("fa-play-circle");
    playBut.classList.add ("fa-stop-circle");
    playBeat(beat);
  } else {
    playBut.classList.remove ("fa-stop-circle");
    playbut.classList.add ("fa-play-circle");
    stopbeat();       
  }
  });


var index: number = 0;

function playBeat(): void {
    function startBeat() {
        var sound = new Audio(beat[index]);
        sound.play();
        index++;
        if (index > 2)
            index = 0;
    }
}

var myinterval: number;

function stopbeat() {
    clearInterval(myinterval); 
} 

document.querySelector(".fa-trash").addEventListener("click", function() {deleteBeat();
 });

function deleteBeat() {
 beat.length = 0;
}

document.querySelector(".fa-microphone-alt").addEventListener("click", function() {recordBeat(); 
});

function recordBeat() {
    record = true;
}


