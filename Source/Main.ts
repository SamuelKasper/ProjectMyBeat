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
    //export let testNode: f.Node;

    async function init(_event: Event): Promise<void> {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        let cam: f.ComponentCamera = new f.ComponentCamera();
        cam.mtxPivot.translateZ(5);
        cam.mtxPivot.translateY(0);
        cam.mtxPivot.translateX(0);
        cam.mtxPivot.rotateY(180);
        //cam.clrBackground = f.Color.CSS("white");

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
        console.log(rootNode);

        //viewport
        viewport.initialize("Viewport", rootNode, cam, canvas);
        viewport.draw();

        //start loop
        f.Loop.start(f.LOOP_MODE.TIME_REAL, 60);
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    }

    function update(_event: Event): void {
        checkKeys();
        resetKeys();
    }

    function checkKeys(): void {
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D])) {
            Buttons.pressingKey(buttonL, 1);
        } else if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.F])) {
            Buttons.pressingKey(buttonML, 2);
        } else if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.J])) {
            Buttons.pressingKey(buttonMR, 2);
        } else if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.K])) {
            Buttons.pressingKey(buttonR, 1);
        }
        viewport.draw();
    }

    function resetKeys(): void {
        Buttons.resetColor(buttonL, 1);
        Buttons.resetColor(buttonML, 2);
        Buttons.resetColor(buttonMR, 2);
        Buttons.resetColor(buttonR, 1);
    }

}