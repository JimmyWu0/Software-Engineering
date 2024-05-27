"use strict";
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