"use strict";
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { playSample("assets/kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function () { playSample("assets/snare.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function () { playSample("assets/hihat.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function () { playSample("assets/F.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function () { playSample("assets/G.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function () { playSample("assets/A.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function () { playSample("assets/C.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#playButton").addEventListener("click", playBeat);
});
function playSample(mp3sounds) {
    var sound = new Audio(mp3sounds);
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