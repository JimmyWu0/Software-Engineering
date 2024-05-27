"use strict";
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