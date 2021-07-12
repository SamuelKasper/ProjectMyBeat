namespace ProjectMyBeat {
    export interface SongProperties {
        audio: f.Audio;
        name: string;
        bpm: number;
        lengthInSec: number;
        score: number;
    }
    export let arcade: SongProperties;
    export class Songs {
        public constructor() {
            //Arcade
            arcade = { audio: new f.Audio("Music/Arcade.mp3"), name: "Arcade", bpm: 150, lengthInSec: 51, score: 0 };
        }

        //Music playing
        public playMusic(): void {
            let compAudio: f.ComponentAudio = new f.ComponentAudio(arcade.audio, false, true);
            console.log("Name:" + arcade.name + "\nBpm:" + arcade.bpm + "\nLength:" + arcade.lengthInSec + "\nScore:" + arcade.score);
            compAudio.connect(true);
            compAudio.volume = 0.5;
            compAudio.play(true);
        }
    }
}