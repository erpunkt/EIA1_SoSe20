"use strict";
var mp3sounds = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { playSample(0); });
    document.querySelector("#button2").addEventListener("mousedown", function () { playSample(1); });
    document.querySelector("#button3").addEventListener("mousedown", function () { playSample(2); });
    document.querySelector("#button4").addEventListener("mousedown", function () { playSample(3); });
    document.querySelector("#button5").addEventListener("mousedown", function () { playSample(4); });
    document.querySelector("#button6").addEventListener("mousedown", function () { playSample(5); });
    document.querySelector("#button7").addEventListener("mousedown", function () { playSample(6); });
    document.querySelector("#button8").addEventListener("mousedown", function () { playSample(7); });
    document.querySelector("#button9").addEventListener("mousedown", function () { playSample(8); });
    document.querySelector("#playButton").addEventListener("click", playBeat);
});
function playSample(bNumber) {
    var sound = new Audio(mp3sounds[bNumber]);
    sound.play();
}
function playBeat() {
    var beat = ["assets/hihat.mp3", "assets/hihat.mp3", "assets/laugh-2.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/laugh-1.mp3", "assets/C.mp3", "assets/A.mp3", "assets/G.mp3", "assets/F.mp3"];
    var index = 0;
    var time = setInterval(startBeat, 500);
    function startBeat() {
        var sound = new Audio(beat[index]);
        sound.play();
        index++;
        if (index > 15)
            index = 0;
    }
}
//# sourceMappingURL=scriptA7.js.map