
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