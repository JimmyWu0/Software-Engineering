"use strict";
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