"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    class Buttons extends ProjectMyBeat.f.Node {
        constructor(_name, _material, _pos) {
            super(_name);
            this.materialOuter = new ProjectMyBeat.f.Material("MaterialOuter", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(1, 0, 0, 1)));
            this.materialInner = new ProjectMyBeat.f.Material("MaterialInner", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(0, 0, 1, 1)));
            this.mesh = new ProjectMyBeat.f.MeshQuad("Quad");
            this.cmpMesh = new ProjectMyBeat.f.ComponentMesh(this.mesh);
            this.pos0 = 0;
            this.pos1 = 150;
            this.pos2 = 300;
            this.pos3 = 450;
            this.posY = 900;
            this.scaleX = 140;
            this.scaleY = 50;
            this.addComponent(new ProjectMyBeat.f.ComponentTransform());
            this.addComponent(this.cmpMesh);
            if (_material == 1) {
                this.addComponent(new ProjectMyBeat.f.ComponentMaterial(this.materialOuter));
            }
            else if (_material == 2) {
                this.addComponent(new ProjectMyBeat.f.ComponentMaterial(this.materialInner));
            }
            switch (_pos) {
                case 0:
                    this.mtxLocal.translateX(this.pos0);
                    this.rect = new ProjectMyBeat.f.Rectangle(this.pos0, this.posY, this.scaleX, this.scaleY, ProjectMyBeat.f.ORIGIN2D.CENTER);
                    break;
                case 1:
                    this.mtxLocal.translateX(this.pos1);
                    this.rect = new ProjectMyBeat.f.Rectangle(this.pos1, this.posY, this.scaleX, this.scaleY, ProjectMyBeat.f.ORIGIN2D.CENTER);
                    break;
                case 2:
                    this.mtxLocal.translateX(this.pos2);
                    this.rect = new ProjectMyBeat.f.Rectangle(this.pos2, this.posY, this.scaleX, this.scaleY, ProjectMyBeat.f.ORIGIN2D.CENTER);
                    break;
                case 3:
                    this.mtxLocal.translateX(this.pos3);
                    this.rect = new ProjectMyBeat.f.Rectangle(this.pos3, this.posY, this.scaleX, this.scaleY, ProjectMyBeat.f.ORIGIN2D.CENTER);
                    break;
            }
            this.mtxLocal.translateY(this.posY);
            this.cmpMesh.mtxPivot.scaleX(this.scaleX);
            this.cmpMesh.mtxPivot.scaleY(this.scaleY);
        }
    }
    ProjectMyBeat.Buttons = Buttons;
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Buttons.js.map