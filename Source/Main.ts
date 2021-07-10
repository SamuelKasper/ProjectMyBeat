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

    async function init(): Promise<void> {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        let cam: f.ComponentCamera = new f.ComponentCamera();
        cam.mtxPivot.translateZ(50);
        cam.mtxPivot.translateY(0);
        cam.mtxPivot.translateX(0);
        cam.mtxPivot.rotateY(180);
        cam.clrBackground = f.Color.CSS("white");

        //create Buttons
        buttonL  = new Buttons("buttonL", 1, 0);
        buttonML  = new Buttons("buttonML", 2, 1);
        buttonMR  = new Buttons("buttonMR", 2, 2);
        buttonR  = new Buttons("buttonR", 1, 3);
        buttonNode.addChild(buttonL);
        buttonNode.addChild(buttonML);
        buttonNode.addChild(buttonMR);
        buttonNode.addChild(buttonR);

        //add to root
        rootNode.addChild(buttonNode);
        console.log(rootNode);

        //viewport
        viewport.initialize("Viewport", rootNode, cam, canvas);
        viewport.draw();
    }


}