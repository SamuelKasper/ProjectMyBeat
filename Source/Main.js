"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    ProjectMyBeat.f = FudgeCore;
    window.addEventListener("load", init);
    let viewport = new ProjectMyBeat.f.Viewport();
    let rootNode = new ProjectMyBeat.f.Node("root");
    async function init() {
        const canvas = document.querySelector("canvas");
        let cam = new ProjectMyBeat.f.ComponentCamera();
        cam.mtxPivot.translateZ(50);
        cam.mtxPivot.rotateY(180);
        viewport.initialize("Viewport", rootNode, cam, canvas);
        viewport.draw();
    }
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Main.js.map