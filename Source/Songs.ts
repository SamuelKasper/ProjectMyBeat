namespace ProjectMyBeat {
    export interface SongProperties {
        audio: f.Audio;
        name: string;
        bpm: number;
        lengthInSec: number;
        score: number;
    }
    //Songs
    export let arcade: SongProperties;

    let nowPLaying: SongProperties;
    let secondsPerBeat: number = 0;
    let beat: number = 0;
    let note: Notes;
    export class Songs {
        public constructor() {
            //Arcade
            arcade = { audio: new f.Audio("Music/Arcade.mp3"), name: "Arcade", bpm: 150, lengthInSec: 51, score: 0 };
        }

        //Music playing
        public playMusic(): void {
            //specific arcade
            let compAudio: f.ComponentAudio = new f.ComponentAudio(arcade.audio, false, true);
            nowPLaying = arcade;

            //general
            this.getSPB(nowPLaying);
            this.getSongInfo(nowPLaying);
            compAudio.connect(true);
            compAudio.volume = 0.5;
            compAudio.play(true);
            this.testEventOnBeat();
        }

        public getSPB(song: SongProperties): void {
            secondsPerBeat = 60 / song.bpm;
            console.log("SPB: " + secondsPerBeat);
        }

        public getSongInfo(song: SongProperties): void {
            console.log("Name:" + song.name + "\nBpm:" + song.bpm + "\nLength:" + song.lengthInSec + "\nScore:" + song.score);
        }

        public testEventOnBeat = (): void => {
            console.log("BEAT" + beat);
            if (beat < 3) {
                f.Time.game.setTimer(secondsPerBeat * 1000, 1, this.testEventOnBeat);
                beat++;
            } else if (beat >= 3) {
                f.Time.game.setTimer(secondsPerBeat * 999, 1, this.testEventOnBeat);
                beat = 0;
                this.createNote();
            }
        }

        public createNote(): void {
            let rnd: number = f.Random.default.getRangeFloored(0, 4);
            console.log(rnd);
            note = new Notes("beat", rnd);
            noteNode.addChild(note);
        }
    }
}