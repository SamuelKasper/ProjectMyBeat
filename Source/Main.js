"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    ProjectMyBeat.f = FudgeCore;
    window.addEventListener("load", init);
    let viewport = new ProjectMyBeat.f.Viewport();
    ProjectMyBeat.rootNode = new ProjectMyBeat.f.Node("root");
    ProjectMyBeat.buttonNode = new ProjectMyBeat.f.Node("buttonNode");
    ProjectMyBeat.noteNode = new ProjectMyBeat.f.Node("Notes");
    async function init(_event) {
        const canvas = document.querySelector("canvas");
        let cam = new ProjectMyBeat.f.ComponentCamera();
        cam.mtxPivot.translateZ(5);
        cam.mtxPivot.translateY(0);
        cam.mtxPivot.translateX(0);
        cam.mtxPivot.rotateY(180);
        //cam.clrBackground = f.Color.CSS("white");
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
        checkCollision();
        for (let notes of ProjectMyBeat.noteNode.getChildren()) {
            ProjectMyBeat.Notes.moveDown(notes);
            if (notes.mtxLocal.translation.y < -2) {
                ProjectMyBeat.noteNode.removeChild(notes);
            }
        }
    }
    function checkKeys() {
        if (ProjectMyBeat.f.Keyboard.isPressedOne([ProjectMyBeat.f.KEYBOARD_CODE.D])) {
            ProjectMyBeat.Buttons.pressingKey(ProjectMyBeat.buttonL, 1);
        }
        else if (ProjectMyBeat.f.Keyboard.isPressedOne([ProjectMyBeat.f.KEYBOARD_CODE.F])) {
            ProjectMyBeat.Buttons.pressingKey(ProjectMyBeat.buttonML, 2);
        }
        else if (ProjectMyBeat.f.Keyboard.isPressedOne([ProjectMyBeat.f.KEYBOARD_CODE.J])) {
            ProjectMyBeat.Buttons.pressingKey(ProjectMyBeat.buttonMR, 2);
        }
        else if (ProjectMyBeat.f.Keyboard.isPressedOne([ProjectMyBeat.f.KEYBOARD_CODE.K])) {
            ProjectMyBeat.Buttons.pressingKey(ProjectMyBeat.buttonR, 1);
        }
        viewport.draw();
    }
    function resetKeys() {
        ProjectMyBeat.Buttons.resetColor(ProjectMyBeat.buttonL, 1);
        ProjectMyBeat.Buttons.resetColor(ProjectMyBeat.buttonML, 2);
        ProjectMyBeat.Buttons.resetColor(ProjectMyBeat.buttonMR, 2);
        ProjectMyBeat.Buttons.resetColor(ProjectMyBeat.buttonR, 1);
    }
    function checkCollision() {
        for (let notes of ProjectMyBeat.noteNode.getChildren()) {
            if (ProjectMyBeat.buttonL.checkCollision(notes)) {
                console.log("collisionL");
            }
            if (ProjectMyBeat.buttonML.checkCollision(notes)) {
                console.log("collisionML");
            }
            if (ProjectMyBeat.buttonMR.checkCollision(notes)) {
                console.log("collisionMR");
            }
            if (ProjectMyBeat.buttonR.checkCollision(notes)) {
                console.log("collisionR");
            }
        }
    }
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Main.js.map