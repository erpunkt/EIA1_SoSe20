
window.addEventListener("load", function(): void {
    document.querySelector("#button1").addEventListener("mousedown", function(): void { playSample("kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function(): void { playSample("snare.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function(): void { playSample("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function(): void { playSample("F.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function(): void { playSample("G.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function(): void { playSample("A.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function(): void { playSample("C.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function(): void { playSample("laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function(): void { playSample("laugh-2.mp3"); });
    document.querySelector("#playButton").addEventListener("click", playMyBeat);
    document.querySelector("#microButton").addEventListener("click", recordBeat);
    document.querySelector("#trashButton").addEventListener("click", deleteBeat);
});

var beat: string[] = ["hihat.mp3", "hihat.mp3", "laugh-1.mp3", "kick.mp3", "F.mp3", "C.mp3", "laugh-2.mp3"];
var record: boolean = false;

function playSample(mp3sounds: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + mp3sounds);
    sound.play();
    if (record == true) {
        beat.push(mp3sounds);
    }
}

var tempo: number;
var index: number = 0;

function playMyBeat(): void {
    playSample(beat[index]);
    index += 1;
    console.log( [index]);
    if (index > (beat.length - 1))
        index = 0;
}

function changeBeat(): void {
    if (document.getElementById("playButton").classList.contains("fa-play-circle")) {
        document.getElementById("playButton").classList.remove("fa-play-circle");
        document.getElementById("playButton").classList.add("fa-stop-circle");
        tempo = setInterval(playMyBeat, 500);
        record = false;
        console.log("Changed Beat?");
    }
    else {
        document.getElementById("playButton").classList.remove("fa-stop-circle");
        document.getElementById("playButton").classList.add("fa-play-circle");
        clearInterval(tempo);
        console.log("Changed Beat!");
    }
}
function recordBeat(): void {
    record = true;
    console.log("This is recoring a new Beat!");
    alert("Recording Beat!");
}
function deleteBeat(): void {
    beat.length = 0;
    console.log("This is deleting the Beat!");
    alert("Deleted Beat!");
}

