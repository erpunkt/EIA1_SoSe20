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
    document.querySelector(".fa-play-circle").addEventListener("click", function () {
        playButton();
    });
    document.querySelector(".fa-trash").addEventListener("click", function () {
        deleteBeat();
    });
});
var tempo = 5000;
var beat = [0, 4, 3, 5];
var record = false;
function playSample(bNumber) {
    var sound = new Audio(mp3sounds[bNumber]);
    sound.play();
    if (record == true) {
        beat.push(mp3sounds[bNumber]);
    }
}
function playBeat() {
    for (var i = 0; i < beat.length - 1; i++) {
        (function (i) {
            setTimeout(function () {
                playSample(beat[i]);
                alert("beat");
            }, tempo * i);
        })(i);
    }
    ;
}
/*mit Hilfe von Annette*/
function playButton() {
    var index = 0;
    var playB = document.getElementById("playButton");
    if (playB.classList.contains("fa-play-circle")) {
        playB.classList.remove("fa-play-circle");
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
