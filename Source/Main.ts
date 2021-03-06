namespace ProjectMyBeat {
    export import f = FudgeCore;
    window.addEventListener("load", init);
    let viewport: f.Viewport = new f.Viewport();
    export let rootNode: f.Node = new f.Node("root");
    export let buttonNode: f.Node = new f.Node("buttonNode");
    export let buttonL: Buttons;
    export let buttonML: Buttons;
    export let buttonMR: Buttons;
    export let buttonR: Buttons;
    export let startBtn: HTMLButtonElement;
    export let noteNode: f.Node = new f.Node("Notes");
    let displayScore: HTMLParagraphElement;
    let displayCombo: HTMLParagraphElement;
    let score: number = 0;
    let combo: number = 1;

    async function init(_event: Event): Promise<void> {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        let cam: f.ComponentCamera = new f.ComponentCamera();
        cam.mtxPivot.translateZ(5);
        cam.mtxPivot.translateY(0);
        cam.mtxPivot.translateX(0);
        cam.mtxPivot.rotateY(180);

        //create Buttons
        buttonL = new Buttons("buttonL", 1, 0);
        buttonML = new Buttons("buttonML", 2, 1);
        buttonMR = new Buttons("buttonMR", 2, 2);
        buttonR = new Buttons("buttonR", 1, 3);
        buttonNode.addChild(buttonL);
        buttonNode.addChild(buttonML);
        buttonNode.addChild(buttonMR);
        buttonNode.addChild(buttonR);

        //add to root
        rootNode.addChild(buttonNode);
        rootNode.addChild(noteNode);
        console.log(rootNode);

        //score element
        displayScore = <HTMLParagraphElement>document.getElementById("score");
        displayCombo = <HTMLParagraphElement>document.getElementById("combo");

        //viewport
        viewport.initialize("Viewport", rootNode, cam, canvas);
        viewport.draw();
        startBtn = <HTMLButtonElement>document.getElementById("start");
        startBtn.addEventListener("click", startLoop);
    }

    function startLoop(): void {
        let songs: Songs = new Songs();
        songs.playMusic();
        f.Loop.start(f.LOOP_MODE.TIME_REAL, 60);
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        startBtn.disabled = true;
    }

    function update(_event: Event): void {
        checkKeys();
        resetKeys();
        for (let notes of noteNode.getChildren() as Notes[]) {
            Notes.moveDown(notes);
            Notes.updateRect(notes);
            if (notes.mtxLocal.translation.y < -2) {
                combo = 1;
                displayCombo.innerHTML = "Combo: " + combo;
                noteNode.removeChild(notes);
            }
        }
    }

    function checkKeys(): void {
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D])) {
            Buttons.pressingKey(buttonL, 1);
            checkCollision(buttonL);
        } else if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.F])) {
            Buttons.pressingKey(buttonML, 2);
            checkCollision(buttonML);
        } else if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.J])) {
            Buttons.pressingKey(buttonMR, 2);
            checkCollision(buttonMR);
        } else if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.K])) {
            Buttons.pressingKey(buttonR, 1);
            checkCollision(buttonR);
        }
        viewport.draw();
    }

    function resetKeys(): void {
        Buttons.resetColor(buttonL, 1);
        Buttons.resetColor(buttonML, 2);
        Buttons.resetColor(buttonMR, 2);
        Buttons.resetColor(buttonR, 1);
    }

    function checkCollision(_button: Buttons): void {
        for (let notes of noteNode.getChildren() as Notes[]) {
            if (_button.checkCollision(notes)) {
                noteNode.removeChild(notes);
                updateScore();
            }
        }
    }

    function updateScore(): void {
        combo += 0.1;
        score = score + 1 * combo;
        score = parseFloat(score.toFixed(2));
        combo = parseFloat(combo.toFixed(2));
        displayScore.innerHTML = "Score: " + score;
        displayCombo.innerHTML = "Combo: " + combo;
    }

}