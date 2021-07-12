"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    class Songs {
        constructor() {
            //Arcade
            ProjectMyBeat.arcade = { audio: new ProjectMyBeat.f.Audio("Music/Arcade.mp3"), name: "Arcade", bpm: 150, lengthInSec: 51, score: 0 };
        }
        //Music playing
        playMusic() {
            let compAudio = new ProjectMyBeat.f.ComponentAudio(ProjectMyBeat.arcade.audio, false, true);
            console.log("Name:" + ProjectMyBeat.arcade.name + "\nBpm:" + ProjectMyBeat.arcade.bpm + "\nLength:" + ProjectMyBeat.arcade.lengthInSec + "\nScore:" + ProjectMyBeat.arcade.score);
            compAudio.connect(true);
            compAudio.volume = 0.5;
            compAudio.play(true);
        }
    }
    ProjectMyBeat.Songs = Songs;
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Songs.js.map