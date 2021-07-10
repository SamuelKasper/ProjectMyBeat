namespace ProjectMyBeat {
    export import f = FudgeCore;
    window.addEventListener("load", init);
    let viewport: f.Viewport = new f.Viewport();
    let rootNode: f.Node = new f.Node("root");

    async function init(): Promise<void> {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        let cam: f.ComponentCamera = new f.ComponentCamera();
        cam.mtxPivot.translateZ(50);
        cam.mtxPivot.rotateY(180);
        viewport.initialize("Viewport", rootNode, cam, canvas);
        viewport.draw();
    }
}