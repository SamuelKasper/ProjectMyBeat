namespace ProjectMyBeat {
    export class Buttons extends f.Node {
        private materialOuter: f.Material = new f.Material("MaterialOuter", f.ShaderUniColor, new f.CoatColored(new f.Color(1, 0, 0, 1)));
        private materialInner: f.Material = new f.Material("MaterialInner", f.ShaderUniColor, new f.CoatColored(new f.Color(0, 0, 1, 1)));
        private mesh: f.Mesh = new f.MeshQuad("Quad");
        private cmpMesh: f.ComponentMesh = new f.ComponentMesh(this.mesh);
        private rect: f.Rectangle;
        private pos0: number = 0;
        private pos1: number = 150;
        private pos2: number = 300;
        private pos3: number = 450;
        private posY: number = 900;
        private scaleX: number = 140;
        private scaleY: number = 50;

        constructor(_name: string, _material: number, _pos: number) {
            super(_name);
            this.addComponent(new f.ComponentTransform());
            this.addComponent(this.cmpMesh);
            if (_material == 1) {
                this.addComponent(new f.ComponentMaterial(this.materialOuter));
            } else if (_material == 2) {
                this.addComponent(new f.ComponentMaterial(this.materialInner));
            }
            switch (_pos) {
                case 0:
                    this.mtxLocal.translateX(this.pos0);
                    this.rect = new f.Rectangle(this.pos0, this.posY, this.scaleX, this.scaleY, f.ORIGIN2D.CENTER);
                    break;
                case 1:
                    this.mtxLocal.translateX(this.pos1);
                    this.rect = new f.Rectangle(this.pos1, this.posY, this.scaleX, this.scaleY, f.ORIGIN2D.CENTER);
                    break;
                case 2:
                    this.mtxLocal.translateX(this.pos2);
                    this.rect = new f.Rectangle(this.pos2, this.posY, this.scaleX, this.scaleY, f.ORIGIN2D.CENTER);
                    break;
                case 3:
                    this.mtxLocal.translateX(this.pos3);
                    this.rect = new f.Rectangle(this.pos3, this.posY, this.scaleX, this.scaleY, f.ORIGIN2D.CENTER);
                    break;
            }
            this.mtxLocal.translateY(this.posY);
            this.cmpMesh.mtxPivot.scaleX(this.scaleX);
            this.cmpMesh.mtxPivot.scaleY(this.scaleY);
        }
        /*
        public checkCollision(_target: Arrow): boolean{
            return this.rect.collides(_target.rect);
        }*/
    }
}