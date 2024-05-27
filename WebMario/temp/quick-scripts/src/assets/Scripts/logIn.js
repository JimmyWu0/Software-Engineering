"use strict";
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