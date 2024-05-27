
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/GameManager');
require('./assets/Scripts/PlayerController');
require('./assets/Scripts/camera');
require('./assets/Scripts/gameOver');
require('./assets/Scripts/gameStart');
require('./assets/Scripts/goomba');
require('./assets/Scripts/logIn');
require('./assets/Scripts/menu');
require('./assets/Scripts/mushroom');
require('./assets/Scripts/question_tile');
require('./assets/Scripts/signUp');
require('./assets/Scripts/stageSelect');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa14aAgNFFLqJDUGi4KCRwb', 'gameOver');
// Scripts/gameOver.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gameOver = /** @class */ (function (_super) {
    __extends(gameOver, _super);
    function gameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    gameOver.prototype.start = function () {
        //cc.audioEngine.stopAll();
        this.schedule(function () {
            cc.audioEngine.stopAll();
            cc.director.loadScene("stageSelect");
        }, 3);
    };
    __decorate([
        property(cc.Label)
    ], gameOver.prototype, "label", void 0);
    __decorate([
        property
    ], gameOver.prototype, "text", void 0);
    gameOver = __decorate([
        ccclass
    ], gameOver);
    return gameOver;
}(cc.Component));
exports.default = gameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxQkM7UUFsQkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQWN2QixpQkFBaUI7SUFDckIsQ0FBQztJQWJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBZkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVPdmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzdGFnZVNlbGVjdFwiKTtcclxuICAgICAgICB9LCAzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24782oI1btI+YBTdeaiNzeh', 'PlayerController');
// Scripts/PlayerController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerSpeed = 300;
        _this.playerStandSpeed = 50;
        _this.jump = null;
        _this.eatMushroom = null;
        _this.coin = null;
        _this.shrink = null;
        _this.win = null;
        _this.gameoverSound = null;
        _this.loseOneLife = null;
        _this.bgm = null;
        _this.moveDir = 0;
        _this.leftDown = false;
        _this.rightDown = false;
        _this.physicManager = null;
        _this.fallDown = false;
        _this.idleFrame = null;
        _this.anim = null;
        _this.HP = 5;
        _this.lifeNum = null;
        _this.onGround = false;
        _this.score = 0;
        _this.scorePoints = null;
        _this.time = 300;
        _this.timeNum = null;
        _this.isDead = false;
        _this.movable = true;
        _this.powerUp = false;
        _this.isStrong = false;
        _this.isPause = false;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2(0, -200);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    PlayerController.prototype.start = function () {
        this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
        // ========== TODO ==========
        // 1. Assign the animation component into this.anim from this.node
        this.anim = this.getComponent(cc.Animation);
        this.node.scaleX = 1;
        //this.score = 5;  //this.HP  //TODO
        // this.HP=5;
        // this.score=0;
        this.updateHP(0);
        this.updateScore(0);
        // this.schedule(function() {
        //     this.time -= 1;
        // }, 1);        
    };
    PlayerController.prototype.update = function (dt) {
        if (!this.isPause) { //TODO: when this.isPause, keep player static even if NOT on the ground
            this.node.x += this.playerSpeed * this.moveDir * dt;
            //this.node.getComponent(cc.RigidBody).enabled = true;;
        }
        else {
            //this.node.getComponent(cc.RigidBody).enabled = false;
        }
        //this.node.scaleX = (this.moveDir > 0) ? 1 : -1;
        if (this.moveDir > 0 && !this.isPause)
            this.node.scaleX = 1;
        else if (this.moveDir < 0 && !this.isPause)
            this.node.scaleX = -1;
        if (this.getComponent(cc.RigidBody).linearVelocity.y != 0)
            this.fallDown = true;
        else
            this.fallDown = false;
        this.playerAnimation();
        // if(this.getComponent(cc.RigidBody).linearVelocity.y != 0){
        //     if(!this.anim.getAnimationState("jump").isPlaying)
        //         this.anim.play("jump");
        // }
        //console.log(this.onGround);
        // if(this.leftDown || this.rightDown){
        //     if(!this.anim.getAnimationState("move").isPlaying && !this.anim.getAnimationState("jump").isPlaying)
        //         this.anim.play("move");
        // }
        if (this.node.position.y < -112 && this.isDead == false) {
            if (this.powerUp)
                // this.schedule(function(){
                //     this.node.scaleY *= 0.9090909*0.9090909*0.9090909; 
                // }, 3);
                this.node.scaleY *= 0.9090909 * 0.9090909 * 0.9090909;
            this.powerUp = false;
            this.decrease();
        }
        if (!this.isDead && !this.isPause) {
            this.time -= dt;
        }
        //time
        if (this.time < 0 && !this.isDead) {
            this.decrease();
            this.time = 0;
        }
        this.timeNum.getComponent(cc.Label).string = Math.floor(this.time).toString();
    };
    PlayerController.prototype.onKeyDown = function (event) {
        if (!this.movable || this.isDead) {
            this.playerMove(0);
            return;
        }
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.leftDown = true;
                this.playerMove(-1);
                break;
            case cc.macro.KEY.right:
                this.rightDown = true;
                this.playerMove(1);
                break;
            case cc.macro.KEY.space:
            case cc.macro.KEY.up:
                this.playerJump(500);
                break;
        }
    };
    PlayerController.prototype.onKeyUp = function (event) {
        if (!this.movable || this.isDead) {
            this.playerMove(0);
            return;
        }
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.leftDown = false;
                if (this.rightDown)
                    this.playerMove(1);
                else
                    this.playerMove(0);
                break;
            case cc.macro.KEY.right:
                this.rightDown = false;
                if (this.leftDown)
                    this.playerMove(-1);
                else
                    this.playerMove(0);
                break;
        }
    };
    PlayerController.prototype.onBeginContact = function (contact, self, other) {
        if (this.isDead)
            contact.disabled = true;
        //console.log(otherCollider.tag);
        if (other.tag == 0) { // 假设地面节点的碰撞器 tag 设置为 0    
            this.onGround = true;
        }
        if (other.tag == 6) {
            // this.getComponent(cc.RigidBody).linearVelocity.y = 0;
            // this.getComponent(cc.RigidBody).gravityScale = 0;
            // this.getComponent(cc.RigidBody).linearVelocity.y = 0;
            this.updateScore(1000);
            if (!this.powerUp) {
                this.powerUp = true;
                this.isPause = true;
                //TODO: giant anim & audio
                cc.audioEngine.playEffect(this.eatMushroom, false);
                //this.anim.play("eatMushroom");
                this.getBig();
            }
            else {
                cc.audioEngine.playEffect(this.coin, false);
            }
        }
        else if (other.tag == 8) {
            this.isPause = true;
            this.updateScore(Math.floor(this.time) * 100);
            cc.audioEngine.stopAll();
            cc.audioEngine.playEffect(this.win, false);
            this.scheduleOnce(function () {
                cc.director.loadScene("stageSelect");
            }, 4);
        }
    };
    PlayerController.prototype.onEndContact = function (contact, self, other) {
        if (other.tag == 0) { // 假设地面节点的碰撞器 tag 设置为 0
            this.onGround = false;
        }
    };
    PlayerController.prototype.getBig = function () {
        this.powerUp = true;
        // this.getComponent(cc.RigidBody).linearVelocity.y = 0;
        // this.getComponent(cc.RigidBody).gravityScale = 0;
        // this.getComponent(cc.RigidBody).linearVelocity.y = 0;
        var action = cc.repeat(cc.sequence(cc.scaleBy(0.2, 1, 1.1), cc.hide(), cc.delayTime(0.1), cc.show()), 3);
        this.node.runAction(action);
        this.scheduleOnce(function () {
            this.isPause = false;
            //this.getComponent(cc.RigidBody).gravityScale = 10;
            //this.getComponent(cc.RigidBody).linearVelocity.y = 0;
        }, 1);
    };
    PlayerController.prototype.getSmall = function () {
        cc.audioEngine.playEffect(this.shrink, false);
        this.powerUp = false;
        var action = cc.repeat(cc.sequence(cc.scaleBy(0.2, 1, 0.9090909), cc.hide(), cc.delayTime(0.1), cc.show()), 3);
        this.node.runAction(action);
        this.scheduleOnce(function () {
            this.isStrong = false;
        }, 2);
        this.scheduleOnce(function () {
            this.isPause = false;
        }, 1);
    };
    PlayerController.prototype.updateScore = function (number) {
        this.score += number;
        this.scorePoints.getComponent(cc.Label).string = this.score.toString();
    };
    PlayerController.prototype.updateHP = function (number) {
        this.HP += number;
        this.lifeNum.getComponent(cc.Label).string = this.HP.toString();
    };
    PlayerController.prototype.playerMove = function (moveDir) {
        this.moveDir = moveDir;
    };
    PlayerController.prototype.playerAnimation = function () {
        // if(this.powerUp){
        //     if(!this.anim.getAnimationState("eatMushroom").isPlaying)
        //         this.anim.play("eatMushroom");
        //     // else
        //     //     this.powerUp = false;
        // }
        if (this.isPause) {
            this.anim.stop();
            return;
        }
        if (this.getComponent(cc.RigidBody).linearVelocity.y != 0) {
            if (!this.anim.getAnimationState("jump").isPlaying && !this.anim.getAnimationState("die").isPlaying && !this.anim.getAnimationState("eatMushroom").isPlaying)
                this.anim.play("jump");
        }
        if (this.fallDown == true) {
            // // ========== TODO ==========
            // // 1. Play fall_front animation (Checked the animation is playing or not and moveDir=0)
            // // 2. Play fall_side animation (Checked the animation is playing or not and moveDir != 0)
            // if(this.moveDir == 0 && !this.anim.getAnimationState("fall_front").isPlaying)
            //     this.anim.play("fall_front");
            // else if(this.moveDir != 0 && !this.anim.getAnimationState("fall_side").isPlaying)
            //     this.anim.play("fall_side");
            console.log("hi");
        }
        else {
            if (this.moveDir == 0) {
                this.getComponent(cc.Sprite).spriteFrame = this.idleFrame;
                // ========== TODO ==========
                // 1. Stop the animation which is playing
                this.anim.stop();
            }
            // ========== TODO ==========
            // 1. Play walk animation (Checked the walk animation is playing or not)
            else if (!this.anim.getAnimationState("walk").isPlaying && !this.anim.getAnimationState("jump").isPlaying && !this.anim.getAnimationState("eatMushroom").isPlaying)
                this.anim.play("walk");
        }
    };
    PlayerController.prototype.playerJump = function (velocity) {
        if ((this.onGround && !this.fallDown) || velocity == 501) //if()
            //this.onGround = false;
            //console.log(this.onGround);
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, velocity);
        if (this.node.getComponent(cc.RigidBody).linearVelocity.y >= 500) {
            cc.audioEngine.playEffect(this.jump, false);
        }
    };
    PlayerController.prototype.reborn = function (rebornPos) {
        this.node.position.x = rebornPos.x;
        this.node.position.y = rebornPos.y;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
    };
    // public reborn(rebornPos: cc.Vec3)
    // {
    //     this.node.position = rebornPos;
    //     this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
    // }
    PlayerController.prototype.damage = function () {
        if (this.powerUp) {
            this.isStrong = true;
            this.isPause = true;
            this.getSmall();
        }
        else
            this.decrease();
    };
    PlayerController.prototype.decrease = function () {
        // if(this.powerUp){
        //     this.getSmall();
        //     return;
        // }
        this.isDead = true;
        this.getComponent(cc.PhysicsBoxCollider).sensor = true;
        this.movable = false;
        this.leftDown = false;
        this.rightDown = false;
        this.moveDir = 0;
        this.anim.play("die");
        if (this.HP > 1) {
            //this.score-=1;
            this.updateHP(-1);
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 800);
            cc.audioEngine.stopAll();
            cc.audioEngine.playEffect(this.loseOneLife, false);
            this.scheduleOnce(function () {
                //cc.director.loadScene("level1");
                // if(this.powerUp){
                //     this.node.scaleY *= 0.9090909*0.9090909*0.9090909;
                //     this.powerUp = false;
                // }
                this.isDead = false;
                this.getComponent(cc.PhysicsBoxCollider).sensor = false;
                this.node.setPosition(-980, 0); //40, 120 -> -160, 0
                cc.audioEngine.playMusic(this.bgm, true);
                this.movable = true;
                this.time = 300;
                this.node.scaleX = 1;
            }, 3);
        }
        else {
            this.updateHP(-1);
            this.gameOver();
        }
    };
    PlayerController.prototype.gameOver = function () {
        // this.startIcon.active = true;
        // this.player.node.active = false;
        // this.inGame = false;
        // this.unschedule(this.gatherEnergy);
        // this.updateEnergyBar(0);
        // this.gathering = false;
        cc.audioEngine.stopAll(); //stopMusic
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 800);
        cc.audioEngine.playEffect(this.gameoverSound, false);
        this.scheduleOnce(function () {
            cc.director.loadScene("gameOver"); //gameOver, then stageSelect
        }, 1.5); //4.5 -> 1.5
    };
    __decorate([
        property()
    ], PlayerController.prototype, "playerSpeed", void 0);
    __decorate([
        property()
    ], PlayerController.prototype, "playerStandSpeed", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "jump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "eatMushroom", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "coin", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "shrink", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "win", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "gameoverSound", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "loseOneLife", void 0);
    __decorate([
        property(cc.AudioClip)
    ], PlayerController.prototype, "bgm", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController.prototype, "lifeNum", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController.prototype, "scorePoints", void 0);
    __decorate([
        property(cc.Node)
    ], PlayerController.prototype, "timeNum", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTRZQztRQXpZRyxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUcxQixzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFHOUIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBR2pDLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBaUIsSUFBSSxDQUFDO1FBRzVCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUduQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFHakMsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFFakIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFzQixJQUFJLENBQUM7UUFDeEMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUNqQyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUVsQyxRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBRWYsYUFBTyxHQUFHLElBQUksQ0FBQztRQUVQLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFbEMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixV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QUFDO3lEQUNDO0lBSW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ0g7SUFwREUsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E0WXBDO0lBQUQsdUJBQUM7Q0E1WUQsQUE0WUMsQ0E1WTZDLEVBQUUsQ0FBQyxTQUFTLEdBNFl6RDtrQkE1WW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHBsYXllclNwZWVkOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHBsYXllclN0YW5kU3BlZWQ6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBqdW1wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBlYXRNdXNocm9vbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY29pbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2hyaW5rOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICB3aW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdhbWVvdmVyU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGxvc2VPbmVMaWZlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRGlyID0gMDtcclxuICAgIHByaXZhdGUgbGVmdERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcmlnaHREb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHBoeXNpY01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZmFsbERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaWRsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgSFA6IG51bWJlciA9IDU7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpZmVOdW0gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgb25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgc2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjb3JlUG9pbnRzID0gbnVsbDtcclxuXHJcbiAgICB0aW1lOiBudW1iZXIgPSAzMDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWVOdW0gPSBudWxsO1xyXG5cclxuICAgIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbW92YWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwb3dlclVwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc1N0cm9uZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNQYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5ncmF2aXR5ID0gY2MudjIgKDAsIC0yMDApO1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpe1xyXG4gICAgICAgIHRoaXMuaWRsZUZyYW1lID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyA9PT09PT09PT09IFRPRE8gPT09PT09PT09PVxyXG4gICAgICAgIC8vIDEuIEFzc2lnbiB0aGUgYW5pbWF0aW9uIGNvbXBvbmVudCBpbnRvIHRoaXMuYW5pbSBmcm9tIHRoaXMubm9kZVxyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWD0xO1xyXG4gICAgICAgIC8vdGhpcy5zY29yZSA9IDU7ICAvL3RoaXMuSFAgIC8vVE9ET1xyXG4gICAgICAgIC8vIHRoaXMuSFA9NTtcclxuICAgICAgICAvLyB0aGlzLnNjb3JlPTA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIUCgwKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDApO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGltZSAtPSAxO1xyXG4gICAgICAgIC8vIH0sIDEpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNQYXVzZSl7ICAvL1RPRE86IHdoZW4gdGhpcy5pc1BhdXNlLCBrZWVwIHBsYXllciBzdGF0aWMgZXZlbiBpZiBOT1Qgb24gdGhlIGdyb3VuZFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnBsYXllclNwZWVkICogdGhpcy5tb3ZlRGlyICogZHQ7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmVuYWJsZWQgPSB0cnVlOztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggPSAodGhpcy5tb3ZlRGlyID4gMCkgPyAxIDogLTE7XHJcbiAgICAgICAgaWYodGhpcy5tb3ZlRGlyID4gMCAmJiAhdGhpcy5pc1BhdXNlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICBlbHNlIGlmKHRoaXMubW92ZURpciA8IDAgJiYgIXRoaXMuaXNQYXVzZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKVxyXG4gICAgICAgICAgICB0aGlzLmZhbGxEb3duID0gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZmFsbERvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcclxuICAgICAgICAvLyBpZih0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgIT0gMCl7XHJcbiAgICAgICAgLy8gICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJqdW1wXCIpLmlzUGxheWluZylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwianVtcFwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm9uR3JvdW5kKTtcclxuICAgICAgICAvLyBpZih0aGlzLmxlZnREb3duIHx8IHRoaXMucmlnaHREb3duKXtcclxuICAgICAgICAvLyAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcIm1vdmVcIikuaXNQbGF5aW5nICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJqdW1wXCIpLmlzUGxheWluZylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwibW92ZVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnBvc2l0aW9uLnk8LTExMiAmJiB0aGlzLmlzRGVhZCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucG93ZXJVcClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2NhbGVZICo9IDAuOTA5MDkwOSowLjkwOTA5MDkqMC45MDkwOTA5OyBcclxuICAgICAgICAgICAgICAgIC8vIH0sIDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSAqPSAwLjkwOTA5MDkqMC45MDkwOTA5KjAuOTA5MDkwOTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmlzRGVhZCAmJiAhdGhpcy5pc1BhdXNlKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lIC09IGR0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RpbWVcclxuICAgICAgICBpZih0aGlzLnRpbWUgPCAwICYmICF0aGlzLmlzRGVhZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gTWF0aC5mbG9vcih0aGlzLnRpbWUpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLm1vdmFibGUgfHwgdGhpcy5pc0RlYWQpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdERvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKC0xKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHREb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckp1bXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLm1vdmFibGUgfHwgdGhpcy5pc0RlYWQpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdERvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucmlnaHREb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sZWZ0RG93bilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoLTEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKHRoaXMuaXNEZWFkKVxyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG90aGVyQ29sbGlkZXIudGFnKTtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09IDApIHsgLy8g5YGH6K6+5Zyw6Z2i6IqC54K555qE56Kw5pKe5ZmoIHRhZyDorr7nva7kuLogMCAgICBcclxuICAgICAgICAgICAgdGhpcy5vbkdyb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSA2KXtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDEwMDApO1xyXG4gICAgICAgICAgICBpZighdGhpcy5wb3dlclVwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcCA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogZ2lhbnQgYW5pbSAmIGF1ZGlvXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZWF0TXVzaHJvb20sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5hbmltLnBsYXkoXCJlYXRNdXNocm9vbVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QmlnKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb2luLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihvdGhlci50YWcgPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoTWF0aC5mbG9vcih0aGlzLnRpbWUpKjEwMCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndpbiwgZmFsc2UpOyBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YWdlU2VsZWN0XCIpO1xyXG4gICAgICAgICAgICB9LCA0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAwKSB7IC8vIOWBh+iuvuWcsOmdouiKgueCueeahOeisOaSnuWZqCB0YWcg6K6+572u5Li6IDBcclxuICAgICAgICAgICAgdGhpcy5vbkdyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRCaWcoKXtcclxuICAgICAgICB0aGlzLnBvd2VyVXAgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnJlcGVhdChjYy5zZXF1ZW5jZShjYy5zY2FsZUJ5KDAuMiwgMSwgMS4xKSwgY2MuaGlkZSgpLCBjYy5kZWxheVRpbWUoMC4xKSwgY2Muc2hvdygpKSwgMyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7ICAvL+aaq+WBnDFzXHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3RoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZ3Jhdml0eVNjYWxlID0gMTA7XHJcbiAgICAgICAgICAgIC8vdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS55ID0gMDtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTbWFsbCgpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaHJpbmssIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBvd2VyVXAgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYWN0aW9uID0gY2MucmVwZWF0KGNjLnNlcXVlbmNlKGNjLnNjYWxlQnkoMC4yLCAxLCAwLjkwOTA5MDkpLCBjYy5oaWRlKCksIGNjLmRlbGF5VGltZSgwLjEpLCBjYy5zaG93KCkpLCAzKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXsgIC8v54Sh5pW1MnNcclxuICAgICAgICAgICAgdGhpcy5pc1N0cm9uZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7ICAvL+aaq+WBnDFzXHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gbnVtYmVyO1xyXG4gICAgICAgIHRoaXMuc2NvcmVQb2ludHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSFAobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5IUCArPSBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5saWZlTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5IUC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJNb3ZlKG1vdmVEaXI6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGlyID0gbW92ZURpcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWVyQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgLy8gaWYodGhpcy5wb3dlclVwKXtcclxuICAgICAgICAvLyAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImVhdE11c2hyb29tXCIpLmlzUGxheWluZylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZWF0TXVzaHJvb21cIik7XHJcbiAgICAgICAgLy8gICAgIC8vIGVsc2VcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXMucG93ZXJVcCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZih0aGlzLmlzUGF1c2Upe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImp1bXBcIikuaXNQbGF5aW5nICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJkaWVcIikuaXNQbGF5aW5nICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJlYXRNdXNocm9vbVwiKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImp1bXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZmFsbERvd24gPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIC8vIC8vID09PT09PT09PT0gVE9ETyA9PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIC8vIDEuIFBsYXkgZmFsbF9mcm9udCBhbmltYXRpb24gKENoZWNrZWQgdGhlIGFuaW1hdGlvbiBpcyBwbGF5aW5nIG9yIG5vdCBhbmQgbW92ZURpcj0wKVxyXG4gICAgICAgICAgICAvLyAvLyAyLiBQbGF5IGZhbGxfc2lkZSBhbmltYXRpb24gKENoZWNrZWQgdGhlIGFuaW1hdGlvbiBpcyBwbGF5aW5nIG9yIG5vdCBhbmQgbW92ZURpciAhPSAwKVxyXG4gICAgICAgICAgICAvLyBpZih0aGlzLm1vdmVEaXIgPT0gMCAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiZmFsbF9mcm9udFwiKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW0ucGxheShcImZhbGxfZnJvbnRcIik7XHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYodGhpcy5tb3ZlRGlyICE9IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImZhbGxfc2lkZVwiKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW0ucGxheShcImZhbGxfc2lkZVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmlkbGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIC8vID09PT09PT09PT0gVE9ETyA9PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAvLyAxLiBTdG9wIHRoZSBhbmltYXRpb24gd2hpY2ggaXMgcGxheWluZ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09IFRPRE8gPT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyAxLiBQbGF5IHdhbGsgYW5pbWF0aW9uIChDaGVja2VkIHRoZSB3YWxrIGFuaW1hdGlvbiBpcyBwbGF5aW5nIG9yIG5vdClcclxuICAgICAgICAgICAgZWxzZSBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwid2Fsa1wiKS5pc1BsYXlpbmcgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImp1bXBcIikuaXNQbGF5aW5nICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJlYXRNdXNocm9vbVwiKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIndhbGtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJKdW1wKHZlbG9jaXR5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoKHRoaXMub25Hcm91bmQgJiYgIXRoaXMuZmFsbERvd24gKSB8fCB2ZWxvY2l0eT09IDUwMSkgIC8vaWYoKVxyXG4gICAgICAgICAgICAvL3RoaXMub25Hcm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm9uR3JvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSA+PTUwMCl7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYm9ybihyZWJvcm5Qb3M6IGNjLlZlYzMpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uLnggPSByZWJvcm5Qb3MueDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24ueSA9IHJlYm9yblBvcy55O1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyByZWJvcm4ocmVib3JuUG9zOiBjYy5WZWMzKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHJlYm9yblBvcztcclxuICAgIC8vICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBkYW1hZ2UoKXtcclxuICAgICAgICBpZih0aGlzLnBvd2VyVXApe1xyXG4gICAgICAgICAgICB0aGlzLmlzU3Ryb25nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTbWFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyZWFzZSgpe1xyXG4gICAgICAgIC8vIGlmKHRoaXMucG93ZXJVcCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0U21hbGwoKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKS5zZW5zb3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW92YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVmdERvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJpZ2h0RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW92ZURpciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJkaWVcIik7XHJcbiAgICAgICAgaWYodGhpcy5IUD4xKXtcclxuICAgICAgICAgICAgLy90aGlzLnNjb3JlLT0xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhQKC0xKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgODAwKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubG9zZU9uZUxpZmUsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxldmVsMVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMucG93ZXJVcCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNjYWxlWSAqPSAwLjkwOTA5MDkqMC45MDkwOTA5KjAuOTA5MDkwOTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnBvd2VyVXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLnNlbnNvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC05ODAsIDApOyAgLy80MCwgMTIwIC0+IC0xNjAsIDBcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVIUCgtMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGdhbWVPdmVyKClcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXJ0SWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5pbkdhbWUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUodGhpcy5nYXRoZXJFbmVyZ3kpO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlRW5lcmd5QmFyKDApO1xyXG4gICAgICAgIC8vIHRoaXMuZ2F0aGVyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTsgIC8vc3RvcE11c2ljXHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDgwMCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdhbWVvdmVyU291bmQsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZU92ZXJcIik7ICAvL2dhbWVPdmVyLCB0aGVuIHN0YWdlU2VsZWN0XHJcbiAgICAgICAgfSwgMS41KTsgIC8vNC41IC0+IDEuNVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/logIn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6c3f248eNGD4478q5pC/YT', 'logIn');
// Scripts/logIn.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var logIn = /** @class */ (function (_super) {
    __extends(logIn, _super);
    function logIn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    logIn.prototype.start = function () {
        var StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "logIn";
        StartButton.handler = "loadGameScene";
        cc.find("Canvas/silver_6_6/button").getComponent(cc.Button).clickEvents.push(StartButton);
    };
    // update (dt) {}
    logIn.prototype.loadGameScene = function () {
        var email = cc.find("Canvas/silver_6_6/email").getComponent(cc.EditBox).string;
        var password = cc.find("Canvas/silver_6_6/password").getComponent(cc.EditBox).string;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (userCredential) {
            var user = userCredential.user;
            alert("Successfully Signed In!");
            cc.director.loadScene("stageSelect");
        }).catch(function (error) {
            alert("The user doesn't exist.");
        });
    };
    __decorate([
        property(cc.Label)
    ], logIn.prototype, "label", void 0);
    __decorate([
        property
    ], logIn.prototype, "text", void 0);
    logIn = __decorate([
        ccclass
    ], logIn);
    return logIn;
}(cc.Component));
exports.default = logIn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcbG9nSW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFtQ0M7UUFoQ0csV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQTZCM0IsQ0FBQztJQTNCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHFCQUFLLEdBQUw7UUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELGlCQUFpQjtJQUVqQiw2QkFBYSxHQUFiO1FBQ0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQy9FLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVyRixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLGNBQWM7WUFDNUUsSUFBSSxJQUFJLEdBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ1osS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ0k7SUFHdkI7UUFEQyxRQUFRO3VDQUNjO0lBTk4sS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW1DekI7SUFBRCxZQUFDO0NBbkNELEFBbUNDLENBbkNrQyxFQUFFLENBQUMsU0FBUyxHQW1DOUM7a0JBbkNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2dJbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBTdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgU3RhcnRCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwibG9nSW5cIjtcclxuICAgICAgICBTdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJsb2FkR2FtZVNjZW5lXCI7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2lsdmVyXzZfNi9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChTdGFydEJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBsb2FkR2FtZVNjZW5lKCl7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gY2MuZmluZChcIkNhbnZhcy9zaWx2ZXJfNl82L2VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gY2MuZmluZChcIkNhbnZhcy9zaWx2ZXJfNl82L3Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcblxyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB1c2VyPXVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2Vzc2Z1bGx5IFNpZ25lZCBJbiFcIik7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YWdlU2VsZWN0XCIpO1xyXG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4geyBcclxuICAgICAgICAgICAgYWxlcnQoXCJUaGUgdXNlciBkb2Vzbid0IGV4aXN0LlwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cfb2q2CkxKMqQcj5/NA/sL', 'GameManager');
// Scripts/GameManager.ts

"use strict";
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
exports.GameManager = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.flyingSE = null;
        _this.pigsmPrefabs = null;
        _this.pigbgPrefabs = null;
        return _this;
    }
    GameManager.prototype.start = function () {
        this.playBGM();
        this.pigInstantiate();
    };
    GameManager.prototype.playBGM = function () {
        // ===================== TODO 2 =====================
        // 1. Play music. The audio clip to play is this.bgm
        //if(!this.getComponent(cc.Animation).getAnimationState("bgm").isPlaying)
        cc.audioEngine.playMusic(this.bgm, true);
        // ==================================================
    };
    GameManager.prototype.playEffect = function () {
        // ===================== TODO 3 =====================
        // 1. Play sound effect. The audio clip to play is 
        //    this.flyingSE
        cc.audioEngine.playEffect(this.flyingSE, false);
        // ==================================================
    };
    GameManager.prototype.pigInstantiate = function () {
        // ===================== TODO 5 =====================
        // 1. Instantiate a small pig (this.pigsmPrefabs)
        //    under node Environment, and set it position
        //    to (822.711, 240.513) 
        // 2. Instantiate a big pig (this.pigbgPrefabs)
        //    under node Environment, and set it position
        //    to (822.711, 335.628) 
        var pig_sm = cc.instantiate(this.pigsmPrefabs);
        pig_sm.setPosition(822.711, 240.513);
        cc.find("Canvas/Environment").addChild(pig_sm);
        var pig_bg = cc.instantiate(this.pigbgPrefabs);
        pig_bg.setPosition(822.711, 335.628);
        cc.find("Canvas/Environment").addChild(pig_bg);
        // ==================================================
    };
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bgm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "flyingSE", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "pigsmPrefabs", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "pigbgPrefabs", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.GameManager = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBc0RDO1FBbkRHLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBSTlCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGtCQUFZLEdBQWMsSUFBSSxDQUFDOztJQXlDbkMsQ0FBQztJQXZDRywyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0kscURBQXFEO1FBQ3JELG9EQUFvRDtRQUNwRCx5RUFBeUU7UUFDekUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxxREFBcUQ7SUFDekQsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxxREFBcUQ7UUFDckQsbURBQW1EO1FBQ25ELG1CQUFtQjtRQUNuQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELHFEQUFxRDtJQUV6RCxDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLHFEQUFxRDtRQUNyRCxpREFBaUQ7UUFDakQsaURBQWlEO1FBQ2pELDRCQUE0QjtRQUM1QiwrQ0FBK0M7UUFDL0MsaURBQWlEO1FBQ2pELDRCQUE0QjtRQUM1QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MscURBQXFEO0lBQ3pELENBQUM7SUFsREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FDRTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNPO0lBSTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1c7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDVztJQWJ0QixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBc0R2QjtJQUFELGtCQUFDO0NBdERELEFBc0RDLENBdERnQyxFQUFFLENBQUMsU0FBUyxHQXNENUM7QUF0RFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZmx5aW5nU0U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwaWdzbVByZWZhYnM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBpZ2JnUHJlZmFiczogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnBsYXlCR00oKTtcclxuICAgICAgICB0aGlzLnBpZ0luc3RhbnRpYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJHTSgpe1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PSBUT0RPIDIgPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gUGxheSBtdXNpYy4gVGhlIGF1ZGlvIGNsaXAgdG8gcGxheSBpcyB0aGlzLmJnbVxyXG4gICAgICAgIC8vaWYoIXRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuZ2V0QW5pbWF0aW9uU3RhdGUoXCJiZ21cIikuaXNQbGF5aW5nKVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5RWZmZWN0KCl7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gMyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBQbGF5IHNvdW5kIGVmZmVjdC4gVGhlIGF1ZGlvIGNsaXAgdG8gcGxheSBpcyBcclxuICAgICAgICAvLyAgICB0aGlzLmZseWluZ1NFXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmZseWluZ1NFLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwaWdJbnN0YW50aWF0ZSgpIHtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA1ID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIDEuIEluc3RhbnRpYXRlIGEgc21hbGwgcGlnICh0aGlzLnBpZ3NtUHJlZmFicylcclxuICAgICAgICAvLyAgICB1bmRlciBub2RlIEVudmlyb25tZW50LCBhbmQgc2V0IGl0IHBvc2l0aW9uXHJcbiAgICAgICAgLy8gICAgdG8gKDgyMi43MTEsIDI0MC41MTMpIFxyXG4gICAgICAgIC8vIDIuIEluc3RhbnRpYXRlIGEgYmlnIHBpZyAodGhpcy5waWdiZ1ByZWZhYnMpXHJcbiAgICAgICAgLy8gICAgdW5kZXIgbm9kZSBFbnZpcm9ubWVudCwgYW5kIHNldCBpdCBwb3NpdGlvblxyXG4gICAgICAgIC8vICAgIHRvICg4MjIuNzExLCAzMzUuNjI4KSBcclxuICAgICAgICB2YXIgcGlnX3NtID0gY2MuaW5zdGFudGlhdGUodGhpcy5waWdzbVByZWZhYnMpO1xyXG4gICAgICAgIHBpZ19zbS5zZXRQb3NpdGlvbig4MjIuNzExLCAyNDAuNTEzKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0Vudmlyb25tZW50XCIpLmFkZENoaWxkKHBpZ19zbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBpZ19iZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGlnYmdQcmVmYWJzKTtcclxuICAgICAgICBwaWdfYmcuc2V0UG9zaXRpb24oODIyLjcxMSwgMzM1LjYyOCk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9FbnZpcm9ubWVudFwiKS5hZGRDaGlsZChwaWdfYmcpO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7124uhVfZIiaxkDG9Xvggk', 'menu');
// Scripts/menu.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var menu = /** @class */ (function (_super) {
    __extends(menu, _super);
    function menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    menu.prototype.start = function () {
        // =========================== TODO 1-1 ============================
        // 1. Add dynamic click event to StartButton to call this function  
        // ===============================================================  
        var StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "menu";
        StartButton.handler = "signup";
        cc.find("Canvas/StartButton").getComponent(cc.Button).clickEvents.push(StartButton);
        var login = new cc.Component.EventHandler();
        login.target = this.node;
        login.component = "menu";
        login.handler = "login";
        cc.find("Canvas/logIn").getComponent(cc.Button).clickEvents.push(login);
    };
    // update (dt) {}
    menu.prototype.signup = function () {
        // =========================== TODO 1-2 ============================
        // 1. Load main scene by cc.director  
        // ===============================================================
        cc.director.loadScene("signUp");
    };
    menu.prototype.login = function () {
        cc.director.loadScene("logIn");
    };
    __decorate([
        property(cc.Label)
    ], menu.prototype, "label", void 0);
    __decorate([
        property
    ], menu.prototype, "text", void 0);
    menu = __decorate([
        ccclass
    ], menu);
    return menu;
}(cc.Component));
exports.default = menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTJDQztRQXhDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O0lBcUMzQixDQUFDO0lBbkNHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsb0JBQUssR0FBTDtRQUNBLG9FQUFvRTtRQUNwRSxvRUFBb0U7UUFDcEUsb0VBQW9FO1FBQ2hFLElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsV0FBVyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDL0IsV0FBVyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFFL0IsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwRixJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxpQkFBaUI7SUFFakIscUJBQU0sR0FBTjtRQUNJLG9FQUFvRTtRQUNwRSxzQ0FBc0M7UUFDdEMsa0VBQWtFO1FBQ2xFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXZDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VDQUNJO0lBR3ZCO1FBREMsUUFBUTtzQ0FDYztJQU5OLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EyQ3hCO0lBQUQsV0FBQztDQTNDRCxBQTJDQyxDQTNDaUMsRUFBRSxDQUFDLFNBQVMsR0EyQzdDO2tCQTNDb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWVudSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IFRPRE8gMS0xID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIDEuIEFkZCBkeW5hbWljIGNsaWNrIGV2ZW50IHRvIFN0YXJ0QnV0dG9uIHRvIGNhbGwgdGhpcyBmdW5jdGlvbiAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIFxyXG4gICAgICAgIGxldCBTdGFydEJ1dHRvbiA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgU3RhcnRCdXR0b24udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLmNvbXBvbmVudCA9IFwibWVudVwiO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLmhhbmRsZXIgPSBcInNpZ251cFwiO1xyXG5cclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1N0YXJ0QnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goU3RhcnRCdXR0b24pO1xyXG5cclxuICAgICAgICBsZXQgbG9naW4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGxvZ2luLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBsb2dpbi5jb21wb25lbnQgPSBcIm1lbnVcIjtcclxuICAgICAgICBsb2dpbi5oYW5kbGVyID0gXCJsb2dpblwiO1xyXG5cclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2xvZ0luXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobG9naW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgc2lnbnVwKCl7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09IFRPRE8gMS0yID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBMb2FkIG1haW4gc2NlbmUgYnkgY2MuZGlyZWN0b3IgIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNpZ25VcFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvZ0luXCIpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/signUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c7767oykhBO4ThllfJhfCc', 'signUp');
// Scripts/signUp.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var signUp = /** @class */ (function (_super) {
    __extends(signUp, _super);
    function signUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    signUp.prototype.start = function () {
        var StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "signUp";
        StartButton.handler = "loadGameScene";
        cc.find("Canvas/silver_6_6/button").getComponent(cc.Button).clickEvents.push(StartButton);
    };
    // update (dt) {}
    signUp.prototype.loadGameScene = function () {
        var name = cc.find("Canvas/silver_6_6/name").getComponent(cc.EditBox).string;
        var email = cc.find("Canvas/silver_6_6/email").getComponent(cc.EditBox).string;
        var password = cc.find("Canvas/silver_6_6/password").getComponent(cc.EditBox).string;
        // firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        //     firebase.database().ref('rank/' + username).set({
        //       score: 0
        //     })
        //     firebase.database().ref('users/' + email.split(".").join("_").replace(/@/g, "_")).set({
        //       name: username,
        //       email: email,
        //       password: password,
        //       life: 5,
        //       coin: 0,
        //       score: 0,
        //     }).then(() => { 
        //       alert("Successfully Signed Up!");
        //       cc.director.loadScene("stageSelect");
        //     }).catch(error => { 
        //       alert(error.message); 
        //     });
        //   }).catch(error => { 
        //     alert(error.message); 
        //   });
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function (userCredential) {
            var user = userCredential.user;
            firebase.auth().currentUser.updateProfile({
                displayName: name
            });
            firebase.database().ref('users/' + name).set({
                name: name,
                email: email,
                password: password
            }).then(function () {
                alert("Successfully Signed Up!");
                cc.director.loadScene("stageSelect");
            }).catch(function (error) {
                alert(error.message);
            });
        }).catch(function (error) {
            alert(error.message);
        });
        // =========================== TODO 1-2 ============================
        // 1. Load main scene by cc.director  
        // ===============================================================
        //cc.director.loadScene("stageSelect");
    };
    __decorate([
        property(cc.Label)
    ], signUp.prototype, "label", void 0);
    __decorate([
        property
    ], signUp.prototype, "text", void 0);
    signUp = __decorate([
        ccclass
    ], signUp);
    return signUp;
}(cc.Component));
exports.default = signUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc2lnblVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBeUVDO1FBdEVHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFtRTNCLENBQUM7SUFqRUcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixzQkFBSyxHQUFMO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxXQUFXLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztRQUV0QyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxpQkFBaUI7SUFFakIsOEJBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM3RSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDL0UsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JGLCtFQUErRTtRQUMvRSx3REFBd0Q7UUFDeEQsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCw4RkFBOEY7UUFDOUYsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLDBDQUEwQztRQUMxQyw4Q0FBOEM7UUFDOUMsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixRQUFRO1FBSU4sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLDhCQUE4QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ2xGLElBQUksSUFBSSxHQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDN0IsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hDLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztZQUNILFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDWixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNaLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRUFBb0U7UUFDcEUsc0NBQXNDO1FBQ3RDLGtFQUFrRTtRQUNsRSx1Q0FBdUM7SUFDM0MsQ0FBQztJQXJFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNJO0lBR3ZCO1FBREMsUUFBUTt3Q0FDYztJQU5OLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F5RTFCO0lBQUQsYUFBQztDQXpFRCxBQXlFQyxDQXpFbUMsRUFBRSxDQUFDLFNBQVMsR0F5RS9DO2tCQXpFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2lnblVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IFN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBTdGFydEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgU3RhcnRCdXR0b24uY29tcG9uZW50ID0gXCJzaWduVXBcIjtcclxuICAgICAgICBTdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJsb2FkR2FtZVNjZW5lXCI7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2lsdmVyXzZfNi9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChTdGFydEJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBsb2FkR2FtZVNjZW5lKCl7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBjYy5maW5kKFwiQ2FudmFzL3NpbHZlcl82XzYvbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IGNjLmZpbmQoXCJDYW52YXMvc2lsdmVyXzZfNi9lbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IGNjLmZpbmQoXCJDYW52YXMvc2lsdmVyXzZfNi9wYXNzd29yZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3JhbmsvJyArIHVzZXJuYW1lKS5zZXQoe1xyXG4gICAgICAgIC8vICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy8nICsgZW1haWwuc3BsaXQoXCIuXCIpLmpvaW4oXCJfXCIpLnJlcGxhY2UoL0AvZywgXCJfXCIpKS5zZXQoe1xyXG4gICAgICAgIC8vICAgICAgIG5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIC8vICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAvLyAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgLy8gICAgICAgbGlmZTogNSxcclxuICAgICAgICAvLyAgICAgICBjb2luOiAwLFxyXG4gICAgICAgIC8vICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgIC8vICAgICB9KS50aGVuKCgpID0+IHsgXHJcbiAgICAgICAgLy8gICAgICAgYWxlcnQoXCJTdWNjZXNzZnVsbHkgU2lnbmVkIFVwIVwiKTtcclxuICAgICAgICAvLyAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzdGFnZVNlbGVjdFwiKTtcclxuICAgICAgICAvLyAgICAgfSkuY2F0Y2goZXJyb3IgPT4geyBcclxuICAgICAgICAvLyAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTsgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vICAgfSkuY2F0Y2goZXJyb3IgPT4geyBcclxuICAgICAgICAvLyAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7IFxyXG4gICAgICAgIC8vICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdXNlcj11c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudXBkYXRlUHJvZmlsZSh7XHJcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy8nICsgbmFtZSkuc2V0KHtcclxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7IFxyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2Vzc2Z1bGx5IFNpZ25lZCBVcCFcIik7XHJcbiAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RhZ2VTZWxlY3RcIik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHsgXHJcbiAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHsgXHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpOyBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBUT0RPIDEtMiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gTG9hZCBtYWluIHNjZW5lIGJ5IGNjLmRpcmVjdG9yICBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YWdlU2VsZWN0XCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/stageSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63587R8UxhGrbIojZ/q7pFM', 'stageSelect');
// Scripts/stageSelect.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var stageSelect = /** @class */ (function (_super) {
    __extends(stageSelect, _super);
    function stageSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    stageSelect.prototype.start = function () {
        // =========================== TODO 1-1 ============================
        // 1. Add dynamic click event to StartButton to call this function  
        // ===============================================================  
        var StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "stageSelect";
        StartButton.handler = "loadGameScene";
        cc.find("Canvas/level1").getComponent(cc.Button).clickEvents.push(StartButton); //level1 button
    };
    // update (dt) {}
    stageSelect.prototype.loadGameScene = function () {
        // =========================== TODO 1-2 ============================
        // 1. Load main scene by cc.director  
        // ===============================================================
        cc.director.loadScene("gameStart"); //gameStart, then level1
    };
    __decorate([
        property(cc.Label)
    ], stageSelect.prototype, "label", void 0);
    __decorate([
        property
    ], stageSelect.prototype, "text", void 0);
    stageSelect = __decorate([
        ccclass
    ], stageSelect);
    return stageSelect;
}(cc.Component));
exports.default = stageSelect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3RhZ2VTZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFpQ0M7UUE5QkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQTJCM0IsQ0FBQztJQXpCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDJCQUFLLEdBQUw7UUFDQSxvRUFBb0U7UUFDcEUsb0VBQW9FO1FBQ3BFLG9FQUFvRTtRQUNoRSxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ3RDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUUsZUFBZTtJQUNwRyxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLG1DQUFhLEdBQWI7UUFDSSxvRUFBb0U7UUFDcEUsc0NBQXNDO1FBQ3RDLGtFQUFrRTtRQUNsRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFFLHdCQUF3QjtJQUNqRSxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0k7SUFHdkI7UUFEQyxRQUFROzZDQUNjO0lBTk4sV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWlDL0I7SUFBRCxrQkFBQztDQWpDRCxBQWlDQyxDQWpDd0MsRUFBRSxDQUFDLFNBQVMsR0FpQ3BEO2tCQWpDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RhZ2VTZWxlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBUT0RPIDEtMSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyAxLiBBZGQgZHluYW1pYyBjbGljayBldmVudCB0byBTdGFydEJ1dHRvbiB0byBjYWxsIHRoaXMgZnVuY3Rpb24gIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBcclxuICAgICAgICBsZXQgU3RhcnRCdXR0b24gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIFN0YXJ0QnV0dG9uLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBTdGFydEJ1dHRvbi5jb21wb25lbnQgPSBcInN0YWdlU2VsZWN0XCI7XHJcbiAgICAgICAgU3RhcnRCdXR0b24uaGFuZGxlciA9IFwibG9hZEdhbWVTY2VuZVwiO1xyXG5cclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2xldmVsMVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKFN0YXJ0QnV0dG9uKTsgIC8vbGV2ZWwxIGJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgbG9hZEdhbWVTY2VuZSgpe1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBUT0RPIDEtMiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gTG9hZCBtYWluIHNjZW5lIGJ5IGNjLmRpcmVjdG9yICBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lU3RhcnRcIik7ICAvL2dhbWVTdGFydCwgdGhlbiBsZXZlbDFcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gameStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05531fStFJDfLcrIYa1vWM+', 'gameStart');
// Scripts/gameStart.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gameStart = /** @class */ (function (_super) {
    __extends(gameStart, _super);
    function gameStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    gameStart.prototype.start = function () {
        cc.audioEngine.stopAll();
        this.schedule(function () {
            cc.director.loadScene("level1");
        }, 2);
    };
    __decorate([
        property(cc.Label)
    ], gameStart.prototype, "label", void 0);
    __decorate([
        property
    ], gameStart.prototype, "text", void 0);
    gameStart = __decorate([
        ccclass
    ], gameStart);
    return gameStart;
}(cc.Component));
exports.default = gameStart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVN0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0JDO1FBakJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFhdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFaRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBZEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUd2QjtRQURDLFFBQVE7MkNBQ2M7SUFOTixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0I3QjtJQUFELGdCQUFDO0NBcEJELEFBb0JDLENBcEJzQyxFQUFFLENBQUMsU0FBUyxHQW9CbEQ7a0JBcEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lU3RhcnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibGV2ZWwxXCIpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
