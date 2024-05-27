
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/camera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '623496iBTlIeaNyW0XCpryv', 'camera');
// Scripts/camera.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// @ccclass
// export default class camera extends cc.Component {
//     @property(cc.Node)
//     player: cc.Node = null;
//     @property(cc.Vec2)
//     offset: cc.Vec2 = cc.Vec2.ZERO;
//     @property(cc.Rect)
//     boundary: cc.Rect = new cc.Rect(0, 0, 1000, 1000); // 設置邊界
//     @property
//     orthoHeight: number = 500; // 設置正交相機的高度
//     private camera: cc.Camera = null;
//     onLoad() {
//         this.camera = this.getComponent(cc.Camera);
//         if (this.camera) {
//             this.camera.ortho = true; // 設置相機為正交相機
//             this.camera.orthoHeight = this.orthoHeight; // 設置相機高度
//         }
//         this.updateCameraPosition();
//     }
//     update(dt: number) {
//         this.updateCameraPosition();
//     }
//     updateCameraPosition() {
//         if (this.player) {
//             // 計算目標位置
//             let targetPos = this.player.position.add(cc.v2(this.offset.x, this.offset.y));
//             // 邊界檢查
//             targetPos.x = cc.misc.clampf(targetPos.x, this.boundary.xMin, this.boundary.xMax);
//             targetPos.y = cc.misc.clampf(targetPos.y, this.boundary.yMin, this.boundary.yMax);
//             // 更新相機位置
//             this.node.position = targetPos;
//         }
//     }
// }
var camera = /** @class */ (function (_super) {
    __extends(camera, _super);
    function camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.followTarget = null;
        _this.followX = true;
        _this.followY = true;
        // @property(cc.Float)
        _this.minX = -800; //0
        // @property(cc.Float)
        _this.minY = -120;
        // @property(cc.Float)
        _this.maxX = 1200; //400 -> 800
        // @property(cc.Float)
        _this.maxY = 120;
        // @property(cc.Float)
        _this.offsetX = 0;
        // @property(cc.Float)
        _this.offsetY = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    camera.prototype.onLoad = function () {
    };
    camera.prototype.start = function () {
    };
    camera.prototype.update = function (dt) {
        // Not using convertToWorldSpaceAR + convertToNodeSpaceAR because
        // they are inaccurate and causes camera jitter. :(
        var cameraLocalTransform = cc.mat4();
        this.node.getLocalMatrix(cameraLocalTransform);
        var targetWorldTransform = cc.mat4();
        this.followTarget.getWorldMatrix(targetWorldTransform);
        var targetWorldTranslation = cc.v3(0, 0, 0);
        targetWorldTransform.getTranslation(targetWorldTranslation);
        var transformed = cc.v4(targetWorldTranslation.x, targetWorldTranslation.y, targetWorldTranslation.z).transformMat4(cameraLocalTransform);
        var targetPosition = cc.v2(transformed.x, transformed.y).add(cc.v2(-cc.view.getDesignResolutionSize().width / 2, -cc.view.getDesignResolutionSize().height / 2));
        targetPosition = cc.v2(clamp(this.followX ? targetPosition.x : this.node.position.x, this.minX, this.maxX), clamp(this.followY ? targetPosition.y : this.node.position.y, this.minY, this.maxY));
        this.node.position = targetPosition;
    };
    __decorate([
        property(cc.Node)
    ], camera.prototype, "followTarget", void 0);
    __decorate([
        property(cc.Boolean)
    ], camera.prototype, "followX", void 0);
    __decorate([
        property(cc.Boolean)
    ], camera.prototype, "followY", void 0);
    camera = __decorate([
        ccclass
    ], camera);
    return camera;
}(cc.Component));
exports.default = camera;
function clamp(x, a, b) {
    if (x < a)
        return a;
    if (x > b)
        return b;
    return x;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcY2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLFdBQVc7QUFDWCxxREFBcUQ7QUFFckQseUJBQXlCO0FBQ3pCLDhCQUE4QjtBQUU5Qix5QkFBeUI7QUFDekIsc0NBQXNDO0FBRXRDLHlCQUF5QjtBQUN6QixpRUFBaUU7QUFFakUsZ0JBQWdCO0FBQ2hCLDhDQUE4QztBQUU5Qyx3Q0FBd0M7QUFFeEMsaUJBQWlCO0FBQ2pCLHNEQUFzRDtBQUN0RCw2QkFBNkI7QUFDN0IscURBQXFEO0FBQ3JELG9FQUFvRTtBQUNwRSxZQUFZO0FBQ1osdUNBQXVDO0FBQ3ZDLFFBQVE7QUFFUiwyQkFBMkI7QUFDM0IsdUNBQXVDO0FBQ3ZDLFFBQVE7QUFFUiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLHdCQUF3QjtBQUN4Qiw2RkFBNkY7QUFFN0Ysc0JBQXNCO0FBQ3RCLGlHQUFpRztBQUNqRyxpR0FBaUc7QUFFakcsd0JBQXdCO0FBQ3hCLDhDQUE4QztBQUM5QyxZQUFZO0FBQ1osUUFBUTtBQUNSLElBQUk7QUFJSjtJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWdEQztRQTdDRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsc0JBQXNCO1FBQ3RCLFVBQUksR0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFFLEdBQUc7UUFDekIsc0JBQXNC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QUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8vIEBjY2NsYXNzXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhbWVyYSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4vLyAgICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbi8vICAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuLy8gICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4vLyAgICAgb2Zmc2V0OiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuLy8gICAgIEBwcm9wZXJ0eShjYy5SZWN0KVxyXG4vLyAgICAgYm91bmRhcnk6IGNjLlJlY3QgPSBuZXcgY2MuUmVjdCgwLCAwLCAxMDAwLCAxMDAwKTsgLy8g6Kit572u6YKK55WMXHJcblxyXG4vLyAgICAgQHByb3BlcnR5XHJcbi8vICAgICBvcnRob0hlaWdodDogbnVtYmVyID0gNTAwOyAvLyDoqK3nva7mraPkuqTnm7jmqZ/nmoTpq5jluqZcclxuXHJcbi8vICAgICBwcml2YXRlIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuXHJcbi8vICAgICBvbkxvYWQoKSB7XHJcbi8vICAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmdldENvbXBvbmVudChjYy5DYW1lcmEpO1xyXG4vLyAgICAgICAgIGlmICh0aGlzLmNhbWVyYSkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmNhbWVyYS5vcnRobyA9IHRydWU7IC8vIOioree9ruebuOapn+eCuuato+S6pOebuOapn1xyXG4vLyAgICAgICAgICAgICB0aGlzLmNhbWVyYS5vcnRob0hlaWdodCA9IHRoaXMub3J0aG9IZWlnaHQ7IC8vIOioree9ruebuOapn+mrmOW6plxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB0aGlzLnVwZGF0ZUNhbWVyYVBvc2l0aW9uKCk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLnVwZGF0ZUNhbWVyYVBvc2l0aW9uKCk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdXBkYXRlQ2FtZXJhUG9zaXRpb24oKSB7XHJcbi8vICAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XHJcbi8vICAgICAgICAgICAgIC8vIOioiOeul+ebruaomeS9jee9rlxyXG4vLyAgICAgICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy5wbGF5ZXIucG9zaXRpb24uYWRkKGNjLnYyKHRoaXMub2Zmc2V0LngsIHRoaXMub2Zmc2V0LnkpKTtcclxuXHJcbi8vICAgICAgICAgICAgIC8vIOmCiueVjOaqouafpVxyXG4vLyAgICAgICAgICAgICB0YXJnZXRQb3MueCA9IGNjLm1pc2MuY2xhbXBmKHRhcmdldFBvcy54LCB0aGlzLmJvdW5kYXJ5LnhNaW4sIHRoaXMuYm91bmRhcnkueE1heCk7XHJcbi8vICAgICAgICAgICAgIHRhcmdldFBvcy55ID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0UG9zLnksIHRoaXMuYm91bmRhcnkueU1pbiwgdGhpcy5ib3VuZGFyeS55TWF4KTtcclxuXHJcbi8vICAgICAgICAgICAgIC8vIOabtOaWsOebuOapn+S9jee9rlxyXG4vLyAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0YXJnZXRQb3M7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FtZXJhIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZvbGxvd1RhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIGZvbGxvd1g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBmb2xsb3dZOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIG1pblg6IG51bWJlciA9IC04MDA7ICAvLzBcclxuICAgIC8vIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIG1pblk6IG51bWJlciA9IC0xMjA7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtYXhYOiBudW1iZXIgPSAxMjAwOyAgLy80MDAgLT4gODAwXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBtYXhZOiBudW1iZXIgPSAxMjA7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBvZmZzZXRYOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgb2Zmc2V0WTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIE5vdCB1c2luZyBjb252ZXJ0VG9Xb3JsZFNwYWNlQVIgKyBjb252ZXJ0VG9Ob2RlU3BhY2VBUiBiZWNhdXNlXHJcbiAgICAgICAgLy8gdGhleSBhcmUgaW5hY2N1cmF0ZSBhbmQgY2F1c2VzIGNhbWVyYSBqaXR0ZXIuIDooXHJcbiAgICAgICAgbGV0IGNhbWVyYUxvY2FsVHJhbnNmb3JtID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRMb2NhbE1hdHJpeChjYW1lcmFMb2NhbFRyYW5zZm9ybSk7XHJcbiAgICAgICAgbGV0IHRhcmdldFdvcmxkVHJhbnNmb3JtID0gY2MubWF0NCgpO1xyXG4gICAgICAgIHRoaXMuZm9sbG93VGFyZ2V0LmdldFdvcmxkTWF0cml4KHRhcmdldFdvcmxkVHJhbnNmb3JtKTtcclxuICAgICAgICBsZXQgdGFyZ2V0V29ybGRUcmFuc2xhdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xyXG4gICAgICAgIHRhcmdldFdvcmxkVHJhbnNmb3JtLmdldFRyYW5zbGF0aW9uKHRhcmdldFdvcmxkVHJhbnNsYXRpb24pO1xyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1lZCA9IGNjLnY0KHRhcmdldFdvcmxkVHJhbnNsYXRpb24ueCwgdGFyZ2V0V29ybGRUcmFuc2xhdGlvbi55LCB0YXJnZXRXb3JsZFRyYW5zbGF0aW9uLnopLnRyYW5zZm9ybU1hdDQoY2FtZXJhTG9jYWxUcmFuc2Zvcm0pO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3NpdGlvbiA9IGNjLnYyKHRyYW5zZm9ybWVkLngsIHRyYW5zZm9ybWVkLnkpLmFkZChjYy52MigtY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLndpZHRoIC8gMiwgLWNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHQgLyAyKSk7XHJcbiAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBjYy52MihcclxuICAgICAgICAgICAgY2xhbXAodGhpcy5mb2xsb3dYID8gdGFyZ2V0UG9zaXRpb24ueCA6IHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm1pblgsIHRoaXMubWF4WCksXHJcbiAgICAgICAgICAgIGNsYW1wKHRoaXMuZm9sbG93WSA/IHRhcmdldFBvc2l0aW9uLnkgOiB0aGlzLm5vZGUucG9zaXRpb24ueSwgdGhpcy5taW5ZLCB0aGlzLm1heFkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xhbXAoeDogbnVtYmVyLCBhOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgaWYgKHggPCBhKSByZXR1cm4gYTtcclxuICAgIGlmICh4ID4gYikgcmV0dXJuIGI7XHJcbiAgICByZXR1cm4geDtcclxufSJdfQ==