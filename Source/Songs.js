"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    let nowPLaying;
    let secondsPerBeat = 0;
    let beat = 0;
    class Songs {
        constructor() {
            this.testEventOnBeat = () => {
                console.log("BEAT" + beat);
                if (beat < 3) {
                    ProjectMyBeat.f.Time.game.setTimer(secondsPerBeat * 1000, 1, this.testEventOnBeat);
                    beat++;
                }
                else if (beat >= 3) {
                    ProjectMyBeat.f.Time.game.setTimer(secondsPerBeat * 999, 1, this.testEventOnBeat);
                    beat = 0;
                }
            };
            //Arcade
            ProjectMyBeat.arcade = { audio: new ProjectMyBeat.f.Audio("Music/Arcade.mp3"), name: "Arcade", bpm: 150, lengthInSec: 51, score: 0 };
        }
        //Music playing
        playMusic() {
            //specific arcade
            let compAudio = new ProjectMyBeat.f.ComponentAudio(ProjectMyBeat.arcade.audio, false, true);
            nowPLaying = ProjectMyBeat.arcade;
            //general
            this.getSPB(nowPLaying);
            this.getSongInfo(nowPLaying);
            compAudio.connect(true);
            compAudio.volume = 0.5;
            compAudio.play(true);
            this.testEventOnBeat();
        }
        getSPB(song) {
            secondsPerBeat = 60 / song.bpm;
            console.log("SPB: " + secondsPerBeat);
        }
        getSongInfo(song) {
            console.log("Name:" + song.name + "\nBpm:" + song.bpm + "\nLength:" + song.lengthInSec + "\nScore:" + song.score);
        }
    }
    ProjectMyBeat.Songs = Songs;
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Songs.js.map