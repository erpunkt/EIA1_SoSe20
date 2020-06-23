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
    document.getElementById("microButton").addEventListener("click", function () {
        recordBeat();
    });
    document.querySelector(".fa-play-circle").addEventListener("click", playButton);
    document.querySelector(".fa-trash").addEventListener("click", function () {
        deleteBeat();
    });
});
var beat = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];
var record = false;
var tempo;
//Buttons mit Samples + Aufnahme funktioniert//
function playSample(bNumber) {
    var sound = new Audio(mp3sounds[bNumber]);
    sound.play();
    if (record == true) {
        beat.push(mp3sounds[bNumber]);
    }
}
function recordBeat() {
    if (record) {
        record = false;
    }
    else {
        record = true;
        console.log("recording");
    }
}
// *Beat Abspielen wenn Play gedrückt wird*//
var intervals = [];
function playBeat() {
    var i = 0;
    tempo = setInterval(function startBeat() {
        play(beat[i]);
        i += 1;
        intervals.push(tempo);
        if (i >= beat.length) {
            i = 0;
        }
    }, 600);
}
function play(_song) {
    var sound = new Audio(_song);
    sound.play();
}
/*mit Hilfe von Annette*/
function playButton() {
    var playB = document.getElementById("playButton");
    if (playB.classList.contains("fa-play-circle")) {
        playB.classList.remove("fa-play-circle");
        playB.classList.add("fa-stop-circle");
        playBeat();
    }
    else {
        playB.classList.remove("fa-stop-circle");
        playB.classList.add("fa-play-circle");
        stopBeat();
    }
}
//Beat stoppen//
function stopBeat() {
    for (var i = 0; i < intervals.length - 1; i++) {
        clearInterval(intervals[i]);
    }
}
//Beat löschen - funktioniert//
function deleteBeat() {
    beat.length = 0;
    console.log("deleted");
    alert("Deleted Beat!");
}
//hier kommt Tastaturbedienung hin//
//# sourceMappingURL=scriptA8.js.map