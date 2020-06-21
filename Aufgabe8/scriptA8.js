var mp3sounds = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", function () {
        playSample(0);
    });
    document.querySelector("#button2").addEventListener("click", function () {
        playSample(1);
    });
    document.querySelector("#button3").addEventListener("click", function () {
        playSample(2);
    });
    document.querySelector("#button4").addEventListener("click", function () {
        playSample(3);
    });
    document.querySelector("#button5").addEventListener("click", function () {
        playSample(4);
    });
    document.querySelector("#button6").addEventListener("click", function () {
        playSample(5);
    });
    document.querySelector("#button7").addEventListener("click", function () {
        playSample(6);
    });
    document.querySelector("#button8").addEventListener("click", function () {
        playSample(7);
    });
    document.querySelector("#button9").addEventListener("click", function () {
        playSample(8);
    });
    document.querySelector(".fa-microphone.alt").addEventListener("click", function () {
        recordBeat();
    });
    document.querySelector(".fa-play-circle").addEventListener("click", function () { playButton(); });
    document.querySelector(".fa-trash").addEventListener("click", function () { deleteBeat(); });
});
var tempo = undefined;
var beat = ["assets/hihat.mp3", "assets/hihat.mp3", "assets/laugh-2.mp3", "assets/kick.mp3"];
var record = false;
var index = 0;
function playSample(bNumber) {
    var sound = new Audio(mp3sounds[bNumber]);
    sound.play();
    if (record == true) {
        beat.push(mp3sounds);
    }
}
function playBeat() {
    tempo = setTempo(function () {
        var sound = new Audio(beat[index]);
        sound.play();
        index++;
        if (index >= beat.length)
            index = 0;
    }, 500);
}
/*mit Hilfe von Annette*/
function playButton() {
    var index = O;
    var playB = document.getElementById("#playButton");
    if (playB.classList.contains("far fa-play-circle")) {
        playB.classList.remove("far fa-play-circle");
        playB.classList.add("fa-stop-circle");
        tempo = setInterval(playBeat, 500);
        record = false;
    }
    else {
        playB.classList.remove("fa-stop-circle");
        playB.classList.add("fa-play-circle");
        clearInterval(tempo);
    }
}
function deleteBeat() {
    beat.length = 0;
    console.log("deleted");
    alert("Deleted Beat!");
}
function recordBeat() {
    record = true;
    console.log("recording");
    alert("Recording Beat!");
}
//# sourceMappingURL=scriptA8.js.map