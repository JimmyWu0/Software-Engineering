
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/goomba.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ29vbWJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVEQUFrRDtBQUU1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWdHQztRQTdGRyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBR25CLGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQztRQUdyQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixZQUFNLEdBQXFCLElBQUksQ0FBQztRQUV4QixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQTBCLElBQUksQ0FBQztRQUUvQyxZQUFNLEdBQVksS0FBSyxDQUFDOztJQTRFNUIsQ0FBQztJQTFFRyx3QkFBd0I7SUFFeEIsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFDSSx5RkFBeUY7UUFDekYsK0JBQStCO0lBRW5DLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFB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QztnQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIseUVBQXlFO2dCQUN6RSwrQ0FBK0M7Z0JBQy9DLG1DQUFtQzthQUN0QztpQkFDSTtnQkFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM1QjtTQUNKO0lBQ0wsQ0FBQztJQTVGRDtRQURDLFFBQVEsRUFBRTt5Q0FDUTtJQUduQjtRQURDLFFBQVEsRUFBRTsyQ0FDVTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLDBCQUFnQixDQUFDOzBDQUNLO0lBWmYsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWdHMUI7SUFBRCxhQUFDO0NBaEdELEFBZ0dDLENBaEdtQyxFQUFFLENBQUMsU0FBUyxHQWdHL0M7a0JBaEdvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSBcIi4vUGxheWVyQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnb29tYmEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBzcGVlZDogbnVtYmVyID0gMzA7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIG1vdmVEaXI6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBQcmVmYWJzMTAwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXJDb250cm9sbGVyKVxyXG4gICAgcGxheWVyOiBQbGF5ZXJDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb2xsaWRlcjogY2MuUGh5c2ljc0JveENvbGxpZGVyID0gbnVsbDtcclxuXHJcbiAgICBpc0RlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBsZXQgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMiwgNTAsIDApLCBjYy5tb3ZlQnkoMiwgLTUwLCAwKSkpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5mbGlwLCAwLjI1KTtcclxuICAgICAgICBpZighdGhpcy5wbGF5ZXIuaXNQYXVzZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMubW92ZURpciAqIGR0O1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAwIHx8IG90aGVyLnRhZyA9PSAxKSB7IC8vIGdyb3VuZCAmIGJsb2NrXHJcbiAgICAgICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC54ID09IC0xICYmIGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55ID09IC0wKSB7IC8vcmlnaHQgYm91bmRcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCA9IC0zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGlyICo9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggPT0gMSAmJiBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueSA9PSAtMCkgeyAvL2xlZnQgYm91bmRcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNjYWxlWCA9IDM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXIgKj0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihvdGhlci50YWcgPT0gNykgeyAvLyBwbGF5ZXJcclxuICAgICAgICAgICAgLy8gaWYodGhpcy5wbGF5ZXIuaXNEZWFkIHx8IHRoaXMucGxheWVyLmlzU3Ryb25nIHx8IHRoaXMuZGllKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllci5pc0RlYWQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnggPT0gMCAmJiBjb250YWN0LmdldFdvcmxkTWFuaWZvbGQoKS5ub3JtYWwueSA9PSAxICYmICF0aGlzLmlzRGVhZCkge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmRpZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci51cGRhdGVTY29yZSgxMDApOyAgLy9zY29yZVxyXG4gICAgICAgICAgICAgICAgdmFyIF8xMDAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYnMxMDApO1xyXG4gICAgICAgICAgICAgICAgLy9fMTAwLnNldFBvc2l0aW9uKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLnBvaW50c1swXSk7XHJcbiAgICAgICAgICAgICAgICBfMTAwLnNldFBvc2l0aW9uKG90aGVyLm5vZGUueCwgb3RoZXIubm9kZS55KzIwKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikuYWRkQ2hpbGQoXzEwMCk7XHJcbiAgICAgICAgICAgICAgICBfMTAwLnJ1bkFjdGlvbihjYy5zcGF3bihjYy5tb3ZlQnkoMSwgMCwgMjApLCBjYy5mYWRlT3V0KDEpKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIF8xMDAuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSwgMS41KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZURpciA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImdvb21iYV9kaWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5zZW5zb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwLjI1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllckp1bXAoNTAxKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheWVyLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgNjAwKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucGxheWVyLnN0b21wRW5lbXlfMTAwKHNlbGYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucGxheWVyLmlzU3Ryb25nICYmICF0aGlzLmlzRGVhZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5kYW1hZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==