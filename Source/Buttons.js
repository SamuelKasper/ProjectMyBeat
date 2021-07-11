"use strict";
var ProjectMyBeat;
(function (ProjectMyBeat) {
    let materialOuterPressed = new ProjectMyBeat.f.Material("MaterialOuterPressed", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(1, 0, 0, 0.7)));
    let materialInnerPressed = new ProjectMyBeat.f.Material("MaterialInnerPressed", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(0, 0, 1, 0.7)));
    let materialOuter = new ProjectMyBeat.f.Material("MaterialOuter", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(1, 0, 0, 1)));
    let materialInner = new ProjectMyBeat.f.Material("MaterialInner", ProjectMyBeat.f.ShaderUniColor, new ProjectMyBeat.f.CoatColored(new ProjectMyBeat.f.Color(0, 0, 1, 1)));
    class Buttons extends ProjectMyBeat.f.Node {
        constructor(_name, _material, _pos) {
            super(_name);
            this.mesh = new ProjectMyBeat.f.MeshQuad("Quad");
            this.pos0 = -1.1;
            this.pos1 = -0.4;
            this.pos2 = 0.4;
            this.pos3 = 1.1;
            this.posY = -2.2;
            this.scaleX = 0.6;
            this.scaleY = 0.3;
            //position and rect
            this.addComponent(new ProjectMyBeat.f.ComponentTransform());
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
            //mesh and scale
            let cmpMesh = new ProjectMyBeat.f.ComponentMesh(this.mesh);
            cmpMesh.mtxPivot.scaleX(this.scaleX);
            cmpMesh.mtxPivot.scaleY(this.scaleY);
            this.addComponent(cmpMesh);
            //material
            if (_material == 1) {
                this.addComponent(new ProjectMyBeat.f.ComponentMaterial(materialOuter));
            }
            else if (_material == 2) {
                this.addComponent(new ProjectMyBeat.f.ComponentMaterial(materialInner));
            }
        }
        /*
        public checkCollision(_target: Arrow): boolean{
            return this.rect.collides(_target.rect);
        }*/
        static pressingKey(_target, color) {
            _target.removeComponent(_target.getComponent(ProjectMyBeat.f.ComponentMaterial));
            if (color == 1) {
                _target.addComponent(new ProjectMyBeat.f.ComponentMaterial(materialOuterPressed));
            }
            else {
                _target.addComponent(new ProjectMyBeat.f.ComponentMaterial(materialInnerPressed));
            }
        }
        static resetColor(_target, color) {
            _target.removeComponent(_target.getComponent(ProjectMyBeat.f.ComponentMaterial));
            if (color == 1) {
                _target.addComponent(new ProjectMyBeat.f.ComponentMaterial(materialOuter));
            }
            else {
                _target.addComponent(new ProjectMyBeat.f.ComponentMaterial(materialInner));
            }
        }
    }
    ProjectMyBeat.Buttons = Buttons;
})(ProjectMyBeat || (ProjectMyBeat = {}));
//# sourceMappingURL=Buttons.js.map