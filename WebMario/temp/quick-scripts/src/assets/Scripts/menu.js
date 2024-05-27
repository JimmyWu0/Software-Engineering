"use strict";
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