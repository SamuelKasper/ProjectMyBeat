"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    ProjectMyBeat.materialOuterPressed = new ProjectMyBeat.f.Material("MaterialOuterPressed", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(1, 0, 0, 0.7)));
    ProjectMyBeat.materialInnerPressed = new ProjectMyBeat.f.Material("MaterialInnerPressed", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(0, 0, 1, 0.7)));
    ProjectMyBeat.materialOuter = new ProjectMyBeat.f.Material("MaterialOuter", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(1, 0, 0, 1)));
    ProjectMyBeat.materialInner = new ProjectMyBeat.f.Material("MaterialInner", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(0, 0, 1, 1)));
    ProjectMyBeat.pos0 = -1.1;
    ProjectMyBeat.pos1 = -0.4;
    ProjectMyBeat.pos2 = 0.4;
    ProjectMyBeat.pos3 = 1.1;
    class Buttons extends ProjectMyBeat.f.Node {
        constructor(_name, _material, _pos) {
            super(_name);
            this.mesh = new ProjectMyBeat.f.MeshQuad("Quad");
            this.posY = -2;
            this.scaleX = 0.6;
            this.scaleY = 0.3;
            //position and rect
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
            if (_material == 1) {
                this.addComponent(new ProjectMyBeat.f.ComponentMaterial(ProjectMyBeat.materialOuter));
            }
            else if (_material == 2) {
                this.addComponent(new ProjectMyBeat.f.ComponentMaterial(ProjectMyBeat.materialInner));
            }
        }
        static pressingKey(_target, color) {
            _target.removeComponent(_target.getComponent(ProjectMyBeat.f.ComponentMaterial));
            if (color == 1) {
                _target.addComponent(new ProjectMyBeat.f.ComponentMaterial(ProjectMyBeat.materialOuterPressed));
            }
            else {
                _target.addComponent(new ProjectMyBeat.f.ComponentMaterial(ProjectMyBeat.materialInnerPressed));
            }
        }
        static resetColor(_target, color) {
            _target.removeComponent(_target.getComponent(ProjectMyBeat.f.ComponentMaterial));
            if (color == 1) {
                _target.addComponent(new ProjectMyBeat.f.ComponentMaterial(ProjectMyBeat.materialOuter));
            }
            else {
                _target.addComponent(new ProjectMyBeat.f.ComponentMaterial(ProjectMyBeat.materialInner));
            }
        }
        checkCollision(_target) {
            return this.rect.collides(_target.rect);
        }
    }
    ProjectMyBeat.Buttons = Buttons;
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Buttons.js.map