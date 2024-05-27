"use strict";
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