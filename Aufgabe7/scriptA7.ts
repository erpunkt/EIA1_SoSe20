var mp3sounds: string[] = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];

window.addEventListener("load", function(){
    document.querySelector("#button1").addEventListener("mousedown", function(): void { playSample(0); });
    document.querySelector("#button2").addEventListener("mousedown", function(): void { playSample(1); });
    document.querySelector("#button3").addEventListener("mousedown", function(): void { playSample(2); });
    document.querySelector("#button4").addEventListener("mousedown", function(): void { playSample(3); });
    document.querySelector("#button5").addEventListener("mousedown", function(): void { playSample(4); });
    document.querySelector("#button6").addEventListener("mousedown", function(): void { playSample(5); });
    document.querySelector("#button7").addEventListener("mousedown", function(): void { playSample(6); });
    document.querySelector("#button8").addEventListener("mousedown", function(): void { playSample(7); });
    document.querySelector("#button9").addEventListener("mousedown", function(): void { playSample(8); });
    document.querySelector("#playButton").addEventListener("click", playBeat);
});
function playSample(bNumber: number) {
    var sound = new Audio(mp3sounds[bNumber]);
    sound.play();
}

function playBeat() {
    var beat: string[] =  ["assets/hihat.mp3", "assets/hihat.mp3", "assets/laugh-2.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/laugh-1.mp3", "assets/C.mp3", "assets/A.mp3", "assets/G.mp3", "assets/F.mp3"];
    var index: number = 0;
    var time: number = setInterval(startBeat, 500);
    
    function startBeat() {
        var sound = new Audio(beat[index]);
        sound.play();
        index++;
        if (index > 15)
            index = 0;
    }
}

