"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    ProjectMyBeat.f = FudgeCore;
    window.addEventListener("load", init);
    let viewport = new ProjectMyBeat.f.Viewport();
    ProjectMyBeat.rootNode = new ProjectMyBeat.f.Node("root");
    ProjectMyBeat.buttonNode = new ProjectMyBeat.f.Node("buttonNode");
    async function init() {
        const canvas = document.querySelector("canvas");
        let cam = new ProjectMyBeat.f.ComponentCamera();
        cam.mtxPivot.translateZ(50);
        cam.mtxPivot.translateY(0);
        cam.mtxPivot.translateX(0);
        cam.mtxPivot.rotateY(180);
        cam.clrBackground = ProjectMyBeat.f.Color.CSS("white");
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
        console.log(ProjectMyBeat.rootNode);
        //viewport
        viewport.initialize("Viewport", ProjectMyBeat.rootNode, cam, canvas);
        viewport.draw();
    }
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Main.js.map