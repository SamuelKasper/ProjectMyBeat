"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    class Notes extends ProjectMyBeat.f.Node {
        constructor(_name, _pos) {
            super(_name);
            this.mesh = new ProjectMyBeat.f.MeshQuad("Quad");
            this.posY = 2;
            this.scaleX = 0.6;
            this.scaleY = 0.3;
            this.addComponent(new ProjectMyBeat.f.ComponentTransform());
            switch (_pos) {
                case 0:
                    this.mtxLocal.translateX(ProjectMyBeat.pos0);
                    this.rect = new ProjectMyBeat.f.Rectangle(ProjectMyBeat.pos0, this.posY, this.scaleX, this.scaleY, ProjectMyBeat.f.ORIGIN2D.CENTER);
                    break;
                case 1:
                    this.mtxLocal.translateX(ProjectMyBeat.pos1);
                    this.rect = new ProjectMyBeat.f.Rectangle(ProjectMyBeat.pos1, this.posY, this.scaleX, this.scaleY, ProjectMyBeat.f.ORIGIN2D.CENTER);
                    break;
                case 2:
                    this.mtxLocal.translateX(ProjectMyBeat.pos2);
                    this.rect = new ProjectMyBeat.f.Rectangle(ProjectMyBeat.pos2, this.posY, this.scaleX, this.scaleY, ProjectMyBeat.f.ORIGIN2D.CENTER);
                    break;
                case 3:
                    this.mtxLocal.translateX(ProjectMyBeat.pos3);
                    this.rect = new ProjectMyBeat.f.Rectangle(ProjectMyBeat.pos3, this.posY, this.scaleX, this.scaleY, ProjectMyBeat.f.ORIGIN2D.CENTER);
                    break;
            }
            this.mtxLocal.translateY(this.posY);
            //mesh and scale
            let cmpMesh = new ProjectMyBeat.f.ComponentMesh(this.mesh);
            cmpMesh.mtxPivot.scaleX(this.scaleX);
            cmpMesh.mtxPivot.scaleY(this.scaleY);
            this.addComponent(cmpMesh);
            //material
            if (_pos == 0 || _pos == 3) {
                this.addComponent(new ProjectMyBeat.f.ComponentMaterial(ProjectMyBeat.materialOuter));
            }
            else if (_pos == 1 || _pos == 2) {
                this.addComponent(new ProjectMyBeat.f.ComponentMaterial(ProjectMyBeat.materialInner));
            }
        }
        static moveDown(note) {
            note.mtxLocal.translateY(-0.01);
        }
        static updateRect(note) {
            note.rect.position.x = note.mtxLocal.translation.x - note.rect.size.x / 2;
            note.rect.position.y = note.mtxLocal.translation.y - note.rect.size.y / 2;
        }
    }
    ProjectMyBeat.Notes = Notes;
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Notes.js.map