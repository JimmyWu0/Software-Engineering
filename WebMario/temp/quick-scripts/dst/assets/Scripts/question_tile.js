
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/question_tile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccXVlc3Rpb25fdGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF1RkM7UUFwRkcsWUFBTSxHQUFxQixJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRXhCLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGNBQVEsR0FBMEIsSUFBSSxDQUFDO1FBRXZDLFNBQUcsR0FBWSxLQUFLLENBQUM7O0lBZ0VqQyxDQUFDO0lBOURHLHdCQUF3QjtJQUV4Qiw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw4QkFBTSxH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RSxHQUFHLENBQUMsQ0FBQztnQkFDUiwrQkFBK0I7Z0JBQy9CLHlFQUF5RTtnQkFDekUsK0NBQStDO2dCQUMvQyxtQ0FBbUM7YUFDdEM7U0FDSjtJQUNMLENBQUM7SUFuRkQ7UUFEQyxRQUFRLENBQUMsMEJBQWdCLENBQUM7aURBQ0s7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ2M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxREFDUztJQWZmLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0F1RmpDO0lBQUQsb0JBQUM7Q0F2RkQsQUF1RkMsQ0F2RjBDLEVBQUUsQ0FBQyxTQUFTLEdBdUZ0RDtrQkF2Rm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgUGxheWVyQ29udHJvbGxlciBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHF1ZXN0aW9uX3RpbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyKVxyXG4gICAgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgUHJlZmFiczEwMDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgUHJlZmFic1llbGxvdzogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgUHJlZmFic011c2hyb29tOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBpc011c2hyb29tOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbGxpZGVyOiBjYy5QaHlzaWNzQm94Q29sbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaGl0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYob3RoZXIudGFnID09IDcpIHsgLy8gcGxheWVyXHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMucGxheWVyLmlzRGVhZCB8fCB0aGlzLnBsYXllci5pc1N0cm9uZyB8fCB0aGlzLmRpZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIuaXNEZWFkID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC54ID09IDAgJiYgY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmhpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5pc011c2hyb29tLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90aGlzLmRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuYW5pbS5wbGF5KFwicXVlc3Rpb25fcG9wXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC4wNSwgMCwgNSksIGNjLm1vdmVCeSgwLjA1LCAwLCAtNSkpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZVNjb3JlKDEwMCk7ICAvL3Njb3JlXHJcbiAgICAgICAgICAgICAgICB2YXIgXzEwMCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiczEwMCk7XHJcbiAgICAgICAgICAgICAgICAvL18xMDAuc2V0UG9zaXRpb24oY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkucG9pbnRzWzBdKTtcclxuICAgICAgICAgICAgICAgIF8xMDAuc2V0UG9zaXRpb24oc2VsZi5ub2RlLngsIHNlbGYubm9kZS55KzIwKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoXzEwMCk7XHJcbiAgICAgICAgICAgICAgICBfMTAwLnJ1bkFjdGlvbihjYy5zcGF3bihjYy5tb3ZlQnkoMSwgMCwgMjApLCBjYy5mYWRlT3V0KDEpKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIF8xMDAuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSwgMS41KTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29sbGlkZXIuc2Vuc29yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtdXNocm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFic011c2hyb29tKTtcclxuICAgICAgICAgICAgICAgICAgICBtdXNocm9vbS5zZXRQb3NpdGlvbihzZWxmLm5vZGUueCwgc2VsZi5ub2RlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQobXVzaHJvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ZWxsb3cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYnNZZWxsb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHllbGxvdy5zZXRQb3NpdGlvbihzZWxmLm5vZGUueCwgc2VsZi5ub2RlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoeWVsbG93KTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllci5wbGF5ZXJKdW1wKDUwMSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDYwMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnBsYXllci5zdG9tcEVuZW15XzEwMChzZWxmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=