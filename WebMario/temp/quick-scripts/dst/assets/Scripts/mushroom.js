
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/mushroom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92514kQDGpHLqIUySLaBOiB', 'mushroom');
// Scripts/mushroom.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerController_1 = require("./PlayerController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 60;
        _this.moveDir = -1;
        _this.player = null;
        _this.Prefabs1000 = null;
        _this.anim = null;
        _this.rigidBody = null;
        _this.collider = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
    };
    NewClass.prototype.start = function () {
        this.scheduleOnce(function () {
            this.node.runAction(cc.moveBy(1, 0, 16));
        });
        this.schedule(function () {
            this.rigidBody.type = cc.RigidBodyType.Dynamic;
        }, 1.5);
    };
    NewClass.prototype.update = function (dt) {
        if (this.rigidBody.type == cc.RigidBodyType.Dynamic) {
            this.node.x += this.speed * this.moveDir * dt;
        }
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 0 || other.tag == 1) { // ground & block
            if (contact.getWorldManifold().normal.x == -1 && contact.getWorldManifold().normal.y == -0) { //right bound
                //this.node.scaleX = -3;
                this.moveDir *= -1;
            }
            else if (contact.getWorldManifold().normal.x == 1 && contact.getWorldManifold().normal.y == -0) { //left bound
                //this.node.scaleX = 3;
                this.moveDir *= -1;
            }
        }
        else if (other.tag == 7) { // player
            // if(this.player.isDead || this.player.isStrong || this.die) {
            //     contact.disabled = true;
            //     return;
            // }
            // if(this.player.isDead == true){
            //     return;
            // }
            var _1000 = cc.instantiate(this.Prefabs1000);
            _1000.setPosition(self.node.x, self.node.y + 20);
            cc.find("Canvas").addChild(_1000);
            _1000.runAction(cc.spawn(cc.moveBy(1, 0, 20), cc.fadeOut(1)));
            this.node.destroy();
            // if(contact.getWorldManifold().normal.x == 0 && contact.getWorldManifold().normal.y == 1) {
            //     //this.die = true;
            //     this.player.updateScore(100);  //score
            //     var _100 = cc.instantiate(this.Prefabs100);
            //     //_100.setPosition(contact.getWorldManifold().points[0]);
            //     _100.setPosition(other.node.x, other.node.y+20);
            //     cc.find("Canvas").addChild(_100);
            //     _100.runAction(cc.spawn(cc.moveBy(1, 0, 20), cc.fadeOut(1)));
            //     // this.schedule(function () {
            //     //     console.log("hi");
            //     //     _100.destroy();
            //     // }, 1.5);
            //     this.moveDir = 0;
            //     this.anim.play("goomba_die");
            //     this.rigidBody.gravityScale = 0;
            //     this.collider.sensor = true;
            //     this.schedule(function(){
            //         this.node.destroy();
            //     }, 0.3);
            //     this.player.playerJump(501);
            //     // this.player.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
            //     // cc.audioEngine.playEffect(this.jump, false);
            //     //this.player.stompEnemy_100(self);
            // }
            // else {
            //     this.player.decrease();
            // }
        }
    };
    __decorate([
        property()
    ], NewClass.prototype, "speed", void 0);
    __decorate([
        property()
    ], NewClass.prototype, "moveDir", void 0);
    __decorate([
        property(PlayerController_1.default)
    ], NewClass.prototype, "player", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "Prefabs1000", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcbXVzaHJvb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0dDO1FBN0ZHLFdBQUssR0FBVyxFQUFFLENBQUM7UUFHbkIsYUFBTyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBR3JCLFlBQU0sR0FBcUIsSUFBSSxDQUFDO1FBR2hDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBMEIsSUFBSSxDQUFDOztJQThFbkQsQ0FBQztJQTVFRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFD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QUM7SUE1RkQ7UUFEQyxRQUFRLEVBQUU7MkNBQ1E7SUFHbkI7UUFEQyxRQUFRLEVBQUU7NkNBQ1U7SUFHckI7UUFEQyxRQUFRLENBQUMsMEJBQWdCLENBQUM7NENBQ0s7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVTtJQVpiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnRzVCO0lBQUQsZUFBQztDQWhHRCxBQWdHQyxDQWhHcUMsRUFBRSxDQUFDLFNBQVMsR0FnR2pEO2tCQWhHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBzcGVlZDogbnVtYmVyID0gNjA7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIG1vdmVEaXI6IG51bWJlciA9IC0xO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoUGxheWVyQ29udHJvbGxlcilcclxuICAgIHBsYXllcjogUGxheWVyQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIFByZWZhYnMxMDAwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbGxpZGVyOiBjYy5QaHlzaWNzQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MubW92ZUJ5KDEsIDAsIDE2KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgICAgIH0sIDEuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMucmlnaWRCb2R5LnR5cGUgPT0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMubW92ZURpciAqIGR0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAwIHx8IG90aGVyLnRhZyA9PSAxKSB7IC8vIGdyb3VuZCAmIGJsb2NrXHJcbiAgICAgICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC54ID09IC0xICYmIGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55ID09IC0wKSB7IC8vcmlnaHQgYm91bmRcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCA9IC0zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyICo9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggPT0gMSAmJiBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueSA9PSAtMCkgeyAvL2xlZnQgYm91bmRcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCA9IDM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgKj0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihvdGhlci50YWcgPT0gNykgeyAvLyBwbGF5ZXJcclxuICAgICAgICAgICAgLy8gaWYodGhpcy5wbGF5ZXIuaXNEZWFkIHx8IHRoaXMucGxheWVyLmlzU3Ryb25nIHx8IHRoaXMuZGllKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZih0aGlzLnBsYXllci5pc0RlYWQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdmFyIF8xMDAwID0gY2MuaW5zdGFudGlhdGUodGhpcy5QcmVmYWJzMTAwMCk7XHJcbiAgICAgICAgICAgIF8xMDAwLnNldFBvc2l0aW9uKHNlbGYubm9kZS54LCBzZWxmLm5vZGUueSsyMCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoXzEwMDApO1xyXG4gICAgICAgICAgICBfMTAwMC5ydW5BY3Rpb24oY2Muc3Bhd24oY2MubW92ZUJ5KDEsIDAsIDIwKSwgY2MuZmFkZU91dCgxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyBpZihjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueCA9PSAwICYmIGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55ID09IDEpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vdGhpcy5kaWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIudXBkYXRlU2NvcmUoMTAwKTsgIC8vc2NvcmVcclxuICAgICAgICAgICAgLy8gICAgIHZhciBfMTAwID0gY2MuaW5zdGFudGlhdGUodGhpcy5QcmVmYWJzMTAwKTtcclxuICAgICAgICAgICAgLy8gICAgIC8vXzEwMC5zZXRQb3NpdGlvbihjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5wb2ludHNbMF0pO1xyXG4gICAgICAgICAgICAvLyAgICAgXzEwMC5zZXRQb3NpdGlvbihvdGhlci5ub2RlLngsIG90aGVyLm5vZGUueSsyMCk7XHJcbiAgICAgICAgICAgIC8vICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKF8xMDApO1xyXG4gICAgICAgICAgICAvLyAgICAgXzEwMC5ydW5BY3Rpb24oY2Muc3Bhd24oY2MubW92ZUJ5KDEsIDAsIDIwKSwgY2MuZmFkZU91dCgxKSkpO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICBfMTAwLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIH0sIDEuNSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm1vdmVEaXIgPSAwO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5hbmltLnBsYXkoXCJnb29tYmFfZGllXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSwgMC4zKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyLnBsYXllckp1bXAoNTAxKTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoaXMucGxheWVyLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAvL3RoaXMucGxheWVyLnN0b21wRW5lbXlfMTAwKHNlbGYpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIuZGVjcmVhc2UoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=