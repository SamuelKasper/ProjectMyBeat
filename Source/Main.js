"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    ProjectMyBeat.f = FudgeCore;
    window.addEventListener("load", init);
    let viewport = new ProjectMyBeat.f.Viewport();
    ProjectMyBeat.rootNode = new ProjectMyBeat.f.Node("root");
    ProjectMyBeat.buttonNode = new ProjectMyBeat.f.Node("buttonNode");
    ProjectMyBeat.noteNode = new ProjectMyBeat.f.Node("Notes");
    let displayScore;
    let displayCombo;
    let score = 0;
    let combo = 1;
    async function init(_event) {
        const canvas = document.querySelector("canvas");
        let cam = new ProjectMyBeat.f.ComponentCamera();
        cam.mtxPivot.translateZ(5);
        cam.mtxPivot.translateY(0);
        cam.mtxPivot.translateX(0);
        cam.mtxPivot.rotateY(180);
        //create Buttons
        ProjectMyBeat.buttonL = new ProjectMyBeat.Buttons("buttonL", 1, 0);
        ProjectMyBeat.buttonML = new ProjectMyBeat.Buttons("buttonML", 2, 1);
        ProjectMyBeat.buttonMR = new ProjectMyBeat.Buttons("buttonMR", 2, 2);
        ProjectMyBeat.buttonR = new ProjectMyBeat.Buttons("buttonR", 1, 3);
        ProjectMyBeat.buttonNode.addChild(ProjectMyBeat.buttonL);
        ProjectMyBeat.buttonNode.addChild(ProjectMyBeat.buttonML);
        ProjectMyBeat.buttonNode.addChild(ProjectMyBeat.buttonMR);
        ProjectMyBeat.buttonNode.addChild(ProjectMyBeat.buttonR);
        //add to root
        ProjectMyBeat.rootNode.addChild(ProjectMyBeat.buttonNode);
        ProjectMyBeat.rootNode.addChild(ProjectMyBeat.noteNode);
        console.log(ProjectMyBeat.rootNode);
        //score element
        displayScore = document.getElementById("score");
        displayCombo = document.getElementById("combo");
        //viewport
        viewport.initialize("Viewport", ProjectMyBeat.rootNode, cam, canvas);
        viewport.draw();
        ProjectMyBeat.startBtn = document.getElementById("start");
        ProjectMyBeat.startBtn.addEventListener("click", startLoop);
    }
    function startLoop() {
        let songs = new ProjectMyBeat.Songs();
        songs.playMusic();
        ProjectMyBeat.f.Loop.start(ProjectMyBeat.f.LOOP_MODE.TIME_REAL, 60);
        ProjectMyBeat.f.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        ProjectMyBeat.startBtn.disabled = true;
    }
    function update(_event) {
        checkKeys();
        resetKeys();
        for (let notes of ProjectMyBeat.noteNode.getChildren()) {
            ProjectMyBeat.Notes.moveDown(notes);
            ProjectMyBeat.Notes.updateRect(notes);
            if (notes.mtxLocal.translation.y < -2) {
                combo = 1;
                displayCombo.innerHTML = "Combo: " + combo;
                ProjectMyBeat.noteNode.removeChild(notes);
            }
        }
    }
    function checkKeys() {
        if (ProjectMyBeat.f.Keyboard.isPressedOne([ProjectMyBeat.f.KEYBOARD_CODE.D])) {
            ProjectMyBeat.Buttons.pressingKey(ProjectMyBeat.buttonL, 1);
            checkCollision(ProjectMyBeat.buttonL);
        }
        else if (ProjectMyBeat.f.Keyboard.isPressedOne([ProjectMyBeat.f.KEYBOARD_CODE.F])) {
            ProjectMyBeat.Buttons.pressingKey(ProjectMyBeat.buttonML, 2);
            checkCollision(ProjectMyBeat.buttonML);
        }
        else if (ProjectMyBeat.f.Keyboard.isPressedOne([ProjectMyBeat.f.KEYBOARD_CODE.J])) {
            ProjectMyBeat.Buttons.pressingKey(ProjectMyBeat.buttonMR, 2);
            checkCollision(ProjectMyBeat.buttonMR);
        }
        else if (ProjectMyBeat.f.Keyboard.isPressedOne([ProjectMyBeat.f.KEYBOARD_CODE.K])) {
            ProjectMyBeat.Buttons.pressingKey(ProjectMyBeat.buttonR, 1);
            checkCollision(ProjectMyBeat.buttonR);
        }
        viewport.draw();
    }
    function resetKeys() {
        ProjectMyBeat.Buttons.resetColor(ProjectMyBeat.buttonL, 1);
        ProjectMyBeat.Buttons.resetColor(ProjectMyBeat.buttonML, 2);
        ProjectMyBeat.Buttons.resetColor(ProjectMyBeat.buttonMR, 2);
        ProjectMyBeat.Buttons.resetColor(ProjectMyBeat.buttonR, 1);
    }
    function checkCollision(_button) {
        for (let notes of ProjectMyBeat.noteNode.getChildren()) {
            if (_button.checkCollision(notes)) {
                ProjectMyBeat.noteNode.removeChild(notes);
                updateScore();
            }
        }
    }
    function updateScore() {
        combo += 0.1;
        score = score + 1 * combo;
        score = parseFloat(score.toFixed(2));
        combo = parseFloat(combo.toFixed(2));
        displayScore.innerHTML = "Score: " + score;
        displayCombo.innerHTML = "Combo: " + combo;
    }
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Main.js.map