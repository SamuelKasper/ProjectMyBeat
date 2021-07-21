namespace ProjectMyBeat {
    export let materialOuterPressed: f.Material = new f.Material("MaterialOuterPressed", f.ShaderUniColor, new f.CoatColored(new f.Color(1, 0, 0, 0.7)));
    export let materialInnerPressed: f.Material = new f.Material("MaterialInnerPressed", f.ShaderUniColor, new f.CoatColored(new f.Color(0, 0, 1, 0.7)));
    export let materialOuter: f.Material = new f.Material("MaterialOuter", f.ShaderUniColor, new f.CoatColored(new f.Color(1, 0, 0, 1)));
    export let materialInner: f.Material = new f.Material("MaterialInner", f.ShaderUniColor, new f.CoatColored(new f.Color(0, 0, 1, 1)));
    export let pos0: number = -1.1;
    export let pos1: number = -0.4;
    export let pos2: number = 0.4;
    export let pos3: number = 1.1;
    export let isPressed: boolean = false;

    export class Buttons extends f.Node {
        private mesh: f.Mesh = new f.MeshQuad("Quad");
        private rect: f.Rectangle;
        private posY: number = -2;
        private scaleX: number = 0.6;
        private scaleY: number = 0.3;

        constructor(_name: string, _material: number, _pos: number) {
            super(_name);

            //position and rect
            this.addComponent(new f.ComponentTransform());
            switch (_pos) {
                case 0:
                    this.mtxLocal.translateX(pos0);
                    this.rect = new f.Rectangle(pos0, this.posY, this.scaleX, this.scaleY, f.ORIGIN2D.CENTER);
                    break;
                case 1:
                    this.mtxLocal.translateX(pos1);
                    this.rect = new f.Rectangle(pos1, this.posY, this.scaleX, this.scaleY, f.ORIGIN2D.CENTER);
                    break;
                case 2:
                    this.mtxLocal.translateX(pos2);
                    this.rect = new f.Rectangle(pos2, this.posY, this.scaleX, this.scaleY, f.ORIGIN2D.CENTER);
                    break;
                case 3:
                    this.mtxLocal.translateX(pos3);
                    this.rect = new f.Rectangle(pos3, this.posY, this.scaleX, this.scaleY, f.ORIGIN2D.CENTER);
                    break;
            }
            this.mtxLocal.translateY(this.posY);

            //mesh and scale
            let cmpMesh: f.ComponentMesh = new f.ComponentMesh(this.mesh);
            cmpMesh.mtxPivot.scaleX(this.scaleX);
            cmpMesh.mtxPivot.scaleY(this.scaleY);
            this.addComponent(cmpMesh);

            //material
            if (_material == 1) {
                this.addComponent(new f.ComponentMaterial(materialOuter));
            } else if (_material == 2) {
                this.addComponent(new f.ComponentMaterial(materialInner));
            }
        }
        static pressingKey(_target: Buttons, color: number): void {
            _target.removeComponent(_target.getComponent(f.ComponentMaterial));
            if (color == 1) {
                _target.addComponent(new f.ComponentMaterial(materialOuterPressed));
            } else {
                _target.addComponent(new f.ComponentMaterial(materialInnerPressed));
            }
        }

        static resetColor(_target: Buttons, color: number): void {
            _target.removeComponent(_target.getComponent(f.ComponentMaterial));
            if (color == 1) {
                _target.addComponent(new f.ComponentMaterial(materialOuter));
            } else {
                _target.addComponent(new f.ComponentMaterial(materialInner));
            }
        }

        public checkCollision(_target: Notes): boolean {
            return this.rect.collides(_target.rect);
        }
    }

}