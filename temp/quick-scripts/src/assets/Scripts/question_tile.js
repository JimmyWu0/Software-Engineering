"use strict";
cc._RF.push(module, '8e46ew5o1lHNY1cJ31uRJmY', 'question_tile');
// Scripts/question_tile.ts

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
var question_tile = /** @class */ (function (_super) {
    __extends(question_tile, _super);
    function question_tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = null;
        _this.Prefabs100 = null;
        _this.PrefabsYellow = null;
        _this.PrefabsMushroom = null;
        _this.isMushroom = null;
        _this.anim = null;
        _this.rigidBody = null;
        _this.collider = null;
        _this.hit = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    question_tile.prototype.onLoad = function () {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
    };
    question_tile.prototype.start = function () {
        this.hit = false;
    };
    question_tile.prototype.update = function (dt) {
    };
    question_tile.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == 7) { // player
            // if(this.player.isDead || this.player.isStrong || this.die) {
            //     contact.disabled = true;
            //     return;
            // }
            if (this.player.isDead == true) {
                return;
            }
            if (contact.getWorldManifold().normal.x == 0 && contact.getWorldManifold().normal.y == -1) {
                if (!this.hit) {
                    this.hit = true;
                    cc.audioEngine.playEffect(this.isMushroom, false);
                }
                //this.die = true;
                //this.anim.play("question_pop");
                this.node.runAction(cc.sequence(cc.moveBy(0.05, 0, 5), cc.moveBy(0.05, 0, -5)));
                this.player.updateScore(100); //score
                var _100 = cc.instantiate(this.Prefabs100);
                //_100.setPosition(contact.getWorldManifold().points[0]);
                _100.setPosition(self.node.x, self.node.y + 20);
                cc.find("Canvas").addChild(_100);
                _100.runAction(cc.spawn(cc.moveBy(1, 0, 20), cc.fadeOut(1)));
                // this.schedule(function () {
                //     console.log("hi");
                //     _100.destroy();
                // }, 1.5);
                //this.rigidBody.gravityScale = 0;
                // this.collider.sensor = true;
                this.schedule(function () {
                    this.node.destroy();
                    var mushroom = cc.instantiate(this.PrefabsMushroom);
                    mushroom.setPosition(self.node.x, self.node.y);
                    cc.find("Canvas").addChild(mushroom);
                    var yellow = cc.instantiate(this.PrefabsYellow);
                    yellow.setPosition(self.node.x, self.node.y);
                    cc.find("Canvas").addChild(yellow);
                }, 0.1);
                // this.player.playerJump(501);
                // this.player.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
                // cc.audioEngine.playEffect(this.jump, false);
                //this.player.stompEnemy_100(self);
            }
        }
    };
    __decorate([
        property(PlayerController_1.default)
    ], question_tile.prototype, "player", void 0);
    __decorate([
        property(cc.Prefab)
    ], question_tile.prototype, "Prefabs100", void 0);
    __decorate([
        property(cc.Prefab)
    ], question_tile.prototype, "PrefabsYellow", void 0);
    __decorate([
        property(cc.Prefab)
    ], question_tile.prototype, "PrefabsMushroom", void 0);
    __decorate([
        property(cc.AudioClip)
    ], question_tile.prototype, "isMushroom", void 0);
    question_tile = __decorate([
        ccclass
    ], question_tile);
    return question_tile;
}(cc.Component));
exports.default = question_tile;

cc._RF.pop();