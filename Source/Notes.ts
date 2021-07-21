namespace ProjectMyBeat {
    export class Notes extends f.Node {
        public rect: f.Rectangle;
        private mesh: f.Mesh = new f.MeshQuad("Quad");
        private posY: number = 2;
        private scaleX: number = 0.6;
        private scaleY: number = 0.3;
        constructor(_name: string, _pos: number) {
            super(_name);
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
            if (_pos == 0 || _pos == 3) {
                this.addComponent(new f.ComponentMaterial(materialOuter));
            } else if (_pos == 1 || _pos == 2) {
                this.addComponent(new f.ComponentMaterial(materialInner));
            }
        }

        public static moveDown(note: Notes): void {
            note.mtxLocal.translateY(-0.02);
        }

        public static updateRect(note: Notes): void {
            note.rect.position.x = note.mtxLocal.translation.x - note.rect.size.x / 2;
            note.rect.position.y = note.mtxLocal.translation.y - note.rect.size.y / 2;
        }
    }
}