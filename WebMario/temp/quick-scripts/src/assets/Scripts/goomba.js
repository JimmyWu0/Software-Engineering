"use strict";
cc._RF.push(module, '253fd/MnT5Gy6VSWAlLO/Le', 'goomba');
// Scripts/goomba.ts

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
var goomba = /** @class */ (function (_super) {
    __extends(goomba, _super);
    function goomba() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 30;
        _this.moveDir = -1;
        _this.Prefabs100 = null;
        _this.player = null;
        _this.anim = null;
        _this.rigidBody = null;
        _this.collider = null;
        _this.isDead = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    goomba.prototype.onLoad = function () {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
    };
    goomba.prototype.start = function () {
        // let action = cc.repeatForever(cc.sequence(cc.moveBy(2, 50, 0), cc.moveBy(2, -50, 0)));
        // this.node.runAction(action);
    };
    goomba.prototype.update = function (dt) {
        this.schedule(this.flip, 0.25);
        if (!this.player.isPause)
            this.node.x += this.speed * this.moveDir * dt;
    };
    goomba.prototype.flip = function () {
        this.node.scaleX *= -1;
    };
    goomba.prototype.onBeginContact = function (contact, self, other) {
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
            if (this.player.isDead == true) {
                return;
            }
            if (contact.getWorldManifold().normal.x == 0 && contact.getWorldManifold().normal.y == 1 && !this.isDead) {
                //this.die = true;
                this.isDead = true;
                this.player.updateScore(100); //score
                var _100 = cc.instantiate(this.Prefabs100);
                //_100.setPosition(contact.getWorldManifold().points[0]);
                _100.setPosition(other.node.x, other.node.y + 20);
                cc.find("Canvas").addChild(_100);
                _100.runAction(cc.spawn(cc.moveBy(1, 0, 20), cc.fadeOut(1)));
                // this.schedule(function () {
                //     console.log("hi");
                //     _100.destroy();
                // }, 1.5);
                this.moveDir = 0;
                this.anim.play("goomba_die");
                this.rigidBody.gravityScale = 0;
                this.collider.sensor = true;
                this.schedule(function () {
                    this.node.destroy();
                }, 0.25);
                this.player.playerJump(501);
                // this.player.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
                // cc.audioEngine.playEffect(this.jump, false);
                //this.player.stompEnemy_100(self);
            }
            else {
                if (!this.player.isStrong && !this.isDead)
                    this.player.damage();
            }
        }
    };
    __decorate([
        property()
    ], goomba.prototype, "speed", void 0);
    __decorate([
        property()
    ], goomba.prototype, "moveDir", void 0);
    __decorate([
        property(cc.Prefab)
    ], goomba.prototype, "Prefabs100", void 0);
    __decorate([
        property(PlayerController_1.default)
    ], goomba.prototype, "player", void 0);
    goomba = __decorate([
        ccclass
    ], goomba);
    return goomba;
}(cc.Component));
exports.default = goomba;

cc._RF.pop();