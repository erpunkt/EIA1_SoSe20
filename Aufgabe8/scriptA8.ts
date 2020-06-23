var mp3sounds: string[] = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];

window.addEventListener("load", function (): void {
    document.querySelector("#button1").addEventListener("click", function (): void {
        playSample(0);
    });
    document.querySelector("#button2").addEventListener("click", function (): void {
        playSample(1);
    });
    document.querySelector("#button3").addEventListener("click", function (): void {
        playSample(2);
    });
    document.querySelector("#button4").addEventListener("click", function (): void {
        playSample(3);
    });
    document.querySelector("#button5").addEventListener("click", function (): void {
        playSample(4);
    });
    document.querySelector("#button6").addEventListener("click", function (): void {
        playSample(5);
    });
    document.querySelector("#button7").addEventListener("click", function (): void {
        playSample(6);
    });
    document.querySelector("#button8").addEventListener("click", function (): void {
        playSample(7);
    });
    document.querySelector("#button9").addEventListener("click", function (): void {
        playSample(8);
    });

    document.getElementById("microButton").addEventListener("click", function (): void {
        recordBeat();
    });
    document.querySelector(".fa-play-circle").addEventListener("click",
        playButton);
    document.querySelector(".fa-trash").addEventListener("click", function (): void {
        deleteBeat();
    });
});

var beat: string[] = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];

var record: boolean = false;
var tempo: any;

//Buttons mit Samples + Aufnahme funktioniert//
function playSample(bNumber: number): void {
    var sound: HTMLAudioElement = new Audio(mp3sounds[bNumber]);
    sound.play();
    if (record == true) {
        beat.push(mp3sounds[bNumber]);
    }
}
function recordBeat(): void {
    if (record) {
        record = false;
    } else {
        record = true;
        console.log("recording");
    }
}

// *Beat Abspielen wenn Play gedrückt wird*//
var intervals: any = [];
function playBeat(): void {
    var i: number = 0;
    tempo = setInterval
        (function startBeat(): void {
            play(beat[i]);
            i += 1;
            intervals.push(tempo);
            if (i >= beat.length) {
                i = 0;
            }
        },
            600);
}


function play(_song: string): void {
    var sound: HTMLAudioElement = new Audio(_song);
    sound.play();


}



/*mit Hilfe von Annette*/

function playButton(): void {
    var playB: HTMLElement = document.getElementById("playButton");
    if (playB.classList.contains("fa-play-circle")) {
        playB.classList.remove("fa-play-circle");
        playB.classList.add("fa-stop-circle");
        playBeat();
    } else {
        playB.classList.remove("fa-stop-circle");
        playB.classList.add("fa-play-circle");
        stopBeat();
    }
}

//Beat stoppen//
function stopBeat(): void {
    for (var i: number = 0; i < intervals.length - 1; i++) {
        clearInterval(intervals[i]);
    }
}

//Beat löschen - funktioniert//
function deleteBeat(): void {
    beat.length = 0;
    console.log("deleted");
    alert("Deleted Beat!");
}


//hier kommt Tastaturbedienung hin//

