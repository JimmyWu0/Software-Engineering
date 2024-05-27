
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTRZQztRQXpZRyxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUcxQixzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFHOUIsVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBR2pDLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBaUIsSUFBSSxDQUFDO1FBRzVCLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUduQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFHakMsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFFakIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYSxHQUFzQixJQUFJLENBQUM7UUFDeEMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUNqQyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUVsQyxRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBRWYsYUFBTyxHQUFHLElBQUksQ0FBQztRQUVQLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFbEMsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixVQUFJLEdBQVcsR0FBRyxDQUFDO1FBRW5CLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBa1Y3QixDQUFDO0lBaFZHLGlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU3QyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzFELDZCQUE2QjtRQUM3QixrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7UUFDbkIsb0NBQW9DO1FBQ3BDLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFFRCxpQ0FBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUcsdUVBQXVFO1lBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDcEQsdURBQXVEO1NBQzFEO2FBQ0c7WUFDQSx1REFBdUQ7U0FDMUQ7UUFDRCxpREFBaUQ7UUFDakQsSUFBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNwQixJQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O1lBRXJCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2Qiw2REFBNkQ7UUFDN0QseURBQXlEO1FBQ3pELGtDQUFrQztRQUNsQyxJQUFJO1FBRUosNkJBQTZCO1FBQzdCLHVDQUF1QztRQUN2QywyR0FBMkc7UUFDM0csa0NBQWtDO1FBQ2xDLElBQUk7UUFDSixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBQztZQUNqRCxJQUFHLElBQUksQ0FBQyxPQUFPO2dCQUNYLDRCQUE0QjtnQkFDNUIsMERBQTBEO2dCQUMxRCxTQUFTO2dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsR0FBQyxTQUFTLEdBQUMsU0FBUyxDQUFDO1lBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUM3QixJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNuQjtRQUNELE1BQU07UUFDTixJQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xGLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsS0FBSztRQUVYLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixPQUFPO1NBQ1Y7UUFFRCxRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQ3BCO1lBQ0ksS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxLQUFLO1FBRVQsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBQztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU87U0FDVjtRQUVELFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFDcEI7WUFDSSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUk7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixJQUFHLElBQUksQ0FBQyxTQUFTO29CQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7O29CQUVuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBRyxJQUFJLENBQUMsUUFBUTtvQkFDWixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O29CQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFHLElBQUksQ0FBQyxNQUFNO1lBQ1YsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUNBQWlDO1FBQ2pDLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSwyQkFBMkI7WUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7UUFDRCxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDO1lBQ2Qsd0RBQXdEO1lBQ3hELG9EQUFvRDtZQUNwRCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztnQkFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLDBCQUEwQjtnQkFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbkQsZ0NBQWdDO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDakI7aUJBQ0c7Z0JBQ0EsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMvQztTQUNKO2FBQUssSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO0lBQ0wsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDN0IsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLHVCQUF1QjtZQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsd0RBQXdEO1FBQ3hELG9EQUFvRDtRQUNwRCx3REFBd0Q7UUFDeEQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsb0RBQW9EO1lBQ3BELHVEQUF1RDtRQUMzRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzRSxDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLE1BQU07UUFDWCxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVNLHFDQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0ksb0JBQW9CO1FBQ3BCLGdFQUFnRTtRQUNoRSx5Q0FBeUM7UUFDekMsY0FBYztRQUNkLG1DQUFtQztRQUNuQyxJQUFJO1FBQ0osSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ3JELElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTO2dCQUN2SixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUM7WUFDckIsZ0NBQWdDO1lBQ2hDLDBGQUEwRjtZQUMxRiw0RkFBNEY7WUFDNUYsZ0ZBQWdGO1lBQ2hGLG9DQUFvQztZQUNwQyxvRkFBb0Y7WUFDcEYsbUNBQW1DO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7YUFDRztZQUNBLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQ3BCO2dCQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMxRCw2QkFBNkI7Z0JBQzdCLHlDQUF5QztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtZQUNELDZCQUE2QjtZQUM3Qix3RUFBd0U7aUJBQ25FLElBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTO2dCQUM3SixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFTSxxQ0FBVSxHQUFqQixVQUFrQixRQUFnQjtRQUU5QixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUUsSUFBSSxRQUFRLElBQUcsR0FBRyxFQUFHLE1BQU07WUFDNUQsd0JBQXdCO1lBQ3hCLDZCQUE2QjtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUcsR0FBRyxFQUFDO1lBQzNELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0M7SUFDVCxDQUFDO0lBRU0saUNBQU0sR0FBYixVQUFjLFNBQWtCO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVELG9DQUFvQztJQUNwQyxJQUFJO0lBQ0osc0NBQXNDO0lBQ3RDLGdFQUFnRTtJQUNoRSxJQUFJO0lBRUosaUNBQU0sR0FBTjtRQUNJLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjs7WUFFRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxJQUFJO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUM7WUFDVCxnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2Qsa0NBQWtDO2dCQUNsQyxvQkFBb0I7Z0JBQ3BCLHlEQUF5RDtnQkFDekQsNEJBQTRCO2dCQUM1QixJQUFJO2dCQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUUsb0JBQW9CO2dCQUNyRCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDthQUNHO1lBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBRUksZ0NBQWdDO1FBQ2hDLG1DQUFtQztRQUNuQyx1QkFBdUI7UUFDdkIsc0NBQXNDO1FBQ3RDLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFFMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFFLFdBQVc7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUUsNEJBQTRCO1FBQ3BFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFFLFlBQVk7SUFFMUIsQ0FBQztJQXZZRDtRQURDLFFBQVEsRUFBRTt5REFDZTtJQUcxQjtRQURDLFFBQVEsRUFBRTs4REFDbUI7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztrREFDRztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO3lEQUNVO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7a0RBQ0c7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztvREFDSztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNFO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MkRBQ1k7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt5REFDVTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2lEQUNFO0lBWXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ0g7SUFNZjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNDO0lBSW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ0g7SUFwREUsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0E0WXBDO0lBQUQsdUJBQUM7Q0E1WUQsQUE0WUMsQ0E1WTZDLEVBQUUsQ0FBQyxTQUFTLEdBNFl6RDtrQkE1WW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHBsYXllclNwZWVkOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHBsYXllclN0YW5kU3BlZWQ6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBqdW1wOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBlYXRNdXNocm9vbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgY29pbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgc2hyaW5rOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICB3aW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGdhbWVvdmVyU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGxvc2VPbmVMaWZlOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRGlyID0gMDtcclxuICAgIHByaXZhdGUgbGVmdERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcmlnaHREb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHBoeXNpY01hbmFnZXI6IGNjLlBoeXNpY3NNYW5hZ2VyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZmFsbERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaWRsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgSFA6IG51bWJlciA9IDU7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpZmVOdW0gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgb25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG4gICAgc2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjb3JlUG9pbnRzID0gbnVsbDtcclxuXHJcbiAgICB0aW1lOiBudW1iZXIgPSAzMDA7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRpbWVOdW0gPSBudWxsO1xyXG5cclxuICAgIGlzRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbW92YWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwb3dlclVwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc1N0cm9uZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNQYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGh5c2ljTWFuYWdlci5ncmF2aXR5ID0gY2MudjIgKDAsIC0yMDApO1xyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpe1xyXG4gICAgICAgIHRoaXMuaWRsZUZyYW1lID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICAvLyA9PT09PT09PT09IFRPRE8gPT09PT09PT09PVxyXG4gICAgICAgIC8vIDEuIEFzc2lnbiB0aGUgYW5pbWF0aW9uIGNvbXBvbmVudCBpbnRvIHRoaXMuYW5pbSBmcm9tIHRoaXMubm9kZVxyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWD0xO1xyXG4gICAgICAgIC8vdGhpcy5zY29yZSA9IDU7ICAvL3RoaXMuSFAgIC8vVE9ET1xyXG4gICAgICAgIC8vIHRoaXMuSFA9NTtcclxuICAgICAgICAvLyB0aGlzLnNjb3JlPTA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIUCgwKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDApO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGltZSAtPSAxO1xyXG4gICAgICAgIC8vIH0sIDEpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCl7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNQYXVzZSl7ICAvL1RPRE86IHdoZW4gdGhpcy5pc1BhdXNlLCBrZWVwIHBsYXllciBzdGF0aWMgZXZlbiBpZiBOT1Qgb24gdGhlIGdyb3VuZFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnBsYXllclNwZWVkICogdGhpcy5tb3ZlRGlyICogZHQ7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmVuYWJsZWQgPSB0cnVlOztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RoaXMubm9kZS5zY2FsZVggPSAodGhpcy5tb3ZlRGlyID4gMCkgPyAxIDogLTE7XHJcbiAgICAgICAgaWYodGhpcy5tb3ZlRGlyID4gMCAmJiAhdGhpcy5pc1BhdXNlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICBlbHNlIGlmKHRoaXMubW92ZURpciA8IDAgJiYgIXRoaXMuaXNQYXVzZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKVxyXG4gICAgICAgICAgICB0aGlzLmZhbGxEb3duID0gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZmFsbERvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcclxuICAgICAgICAvLyBpZih0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgIT0gMCl7XHJcbiAgICAgICAgLy8gICAgIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJqdW1wXCIpLmlzUGxheWluZylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwianVtcFwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm9uR3JvdW5kKTtcclxuICAgICAgICAvLyBpZih0aGlzLmxlZnREb3duIHx8IHRoaXMucmlnaHREb3duKXtcclxuICAgICAgICAvLyAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcIm1vdmVcIikuaXNQbGF5aW5nICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJqdW1wXCIpLmlzUGxheWluZylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwibW92ZVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnBvc2l0aW9uLnk8LTExMiAmJiB0aGlzLmlzRGVhZCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucG93ZXJVcClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUuc2NhbGVZICo9IDAuOTA5MDkwOSowLjkwOTA5MDkqMC45MDkwOTA5OyBcclxuICAgICAgICAgICAgICAgIC8vIH0sIDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSAqPSAwLjkwOTA5MDkqMC45MDkwOTA5KjAuOTA5MDkwOTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmlzRGVhZCAmJiAhdGhpcy5pc1BhdXNlKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lIC09IGR0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RpbWVcclxuICAgICAgICBpZih0aGlzLnRpbWUgPCAwICYmICF0aGlzLmlzRGVhZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gTWF0aC5mbG9vcih0aGlzLnRpbWUpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLm1vdmFibGUgfHwgdGhpcy5pc0RlYWQpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdERvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKC0xKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHREb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckp1bXAoNTAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLm1vdmFibGUgfHwgdGhpcy5pc0RlYWQpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdERvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucmlnaHREb3duKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sZWZ0RG93bilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoLTEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTW92ZSgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKHRoaXMuaXNEZWFkKVxyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG90aGVyQ29sbGlkZXIudGFnKTtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09IDApIHsgLy8g5YGH6K6+5Zyw6Z2i6IqC54K555qE56Kw5pKe5ZmoIHRhZyDorr7nva7kuLogMCAgICBcclxuICAgICAgICAgICAgdGhpcy5vbkdyb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSA2KXtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKDEwMDApO1xyXG4gICAgICAgICAgICBpZighdGhpcy5wb3dlclVwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucG93ZXJVcCA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogZ2lhbnQgYW5pbSAmIGF1ZGlvXHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZWF0TXVzaHJvb20sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5hbmltLnBsYXkoXCJlYXRNdXNocm9vbVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QmlnKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb2luLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihvdGhlci50YWcgPT0gOCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoTWF0aC5mbG9vcih0aGlzLnRpbWUpKjEwMCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLndpbiwgZmFsc2UpOyBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YWdlU2VsZWN0XCIpO1xyXG4gICAgICAgICAgICB9LCA0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAwKSB7IC8vIOWBh+iuvuWcsOmdouiKgueCueeahOeisOaSnuWZqCB0YWcg6K6+572u5Li6IDBcclxuICAgICAgICAgICAgdGhpcy5vbkdyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRCaWcoKXtcclxuICAgICAgICB0aGlzLnBvd2VyVXAgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnJlcGVhdChjYy5zZXF1ZW5jZShjYy5zY2FsZUJ5KDAuMiwgMSwgMS4xKSwgY2MuaGlkZSgpLCBjYy5kZWxheVRpbWUoMC4xKSwgY2Muc2hvdygpKSwgMyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7ICAvL+aaq+WBnDFzXHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL3RoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZ3Jhdml0eVNjYWxlID0gMTA7XHJcbiAgICAgICAgICAgIC8vdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS55ID0gMDtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTbWFsbCgpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zaHJpbmssIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBvd2VyVXAgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYWN0aW9uID0gY2MucmVwZWF0KGNjLnNlcXVlbmNlKGNjLnNjYWxlQnkoMC4yLCAxLCAwLjkwOTA5MDkpLCBjYy5oaWRlKCksIGNjLmRlbGF5VGltZSgwLjEpLCBjYy5zaG93KCkpLCAzKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXsgIC8v54Sh5pW1MnNcclxuICAgICAgICAgICAgdGhpcy5pc1N0cm9uZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7ICAvL+aaq+WBnDFzXHJcbiAgICAgICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gbnVtYmVyO1xyXG4gICAgICAgIHRoaXMuc2NvcmVQb2ludHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSFAobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5IUCArPSBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5saWZlTnVtLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5IUC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJNb3ZlKG1vdmVEaXI6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGlyID0gbW92ZURpcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheWVyQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgLy8gaWYodGhpcy5wb3dlclVwKXtcclxuICAgICAgICAvLyAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImVhdE11c2hyb29tXCIpLmlzUGxheWluZylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZWF0TXVzaHJvb21cIik7XHJcbiAgICAgICAgLy8gICAgIC8vIGVsc2VcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXMucG93ZXJVcCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZih0aGlzLmlzUGF1c2Upe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSAwKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImp1bXBcIikuaXNQbGF5aW5nICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJkaWVcIikuaXNQbGF5aW5nICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJlYXRNdXNocm9vbVwiKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImp1bXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZmFsbERvd24gPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIC8vIC8vID09PT09PT09PT0gVE9ETyA9PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIC8vIDEuIFBsYXkgZmFsbF9mcm9udCBhbmltYXRpb24gKENoZWNrZWQgdGhlIGFuaW1hdGlvbiBpcyBwbGF5aW5nIG9yIG5vdCBhbmQgbW92ZURpcj0wKVxyXG4gICAgICAgICAgICAvLyAvLyAyLiBQbGF5IGZhbGxfc2lkZSBhbmltYXRpb24gKENoZWNrZWQgdGhlIGFuaW1hdGlvbiBpcyBwbGF5aW5nIG9yIG5vdCBhbmQgbW92ZURpciAhPSAwKVxyXG4gICAgICAgICAgICAvLyBpZih0aGlzLm1vdmVEaXIgPT0gMCAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiZmFsbF9mcm9udFwiKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW0ucGxheShcImZhbGxfZnJvbnRcIik7XHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYodGhpcy5tb3ZlRGlyICE9IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImZhbGxfc2lkZVwiKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW0ucGxheShcImZhbGxfc2lkZVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmlkbGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIC8vID09PT09PT09PT0gVE9ETyA9PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAvLyAxLiBTdG9wIHRoZSBhbmltYXRpb24gd2hpY2ggaXMgcGxheWluZ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09IFRPRE8gPT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyAxLiBQbGF5IHdhbGsgYW5pbWF0aW9uIChDaGVja2VkIHRoZSB3YWxrIGFuaW1hdGlvbiBpcyBwbGF5aW5nIG9yIG5vdClcclxuICAgICAgICAgICAgZWxzZSBpZighdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwid2Fsa1wiKS5pc1BsYXlpbmcgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImp1bXBcIikuaXNQbGF5aW5nICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJlYXRNdXNocm9vbVwiKS5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcIndhbGtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJKdW1wKHZlbG9jaXR5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoKHRoaXMub25Hcm91bmQgJiYgIXRoaXMuZmFsbERvd24gKSB8fCB2ZWxvY2l0eT09IDUwMSkgIC8vaWYoKVxyXG4gICAgICAgICAgICAvL3RoaXMub25Hcm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm9uR3JvdW5kKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgdmVsb2NpdHkpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSA+PTUwMCl7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlYm9ybihyZWJvcm5Qb3M6IGNjLlZlYzMpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uLnggPSByZWJvcm5Qb3MueDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24ueSA9IHJlYm9yblBvcy55O1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyByZWJvcm4ocmVib3JuUG9zOiBjYy5WZWMzKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHJlYm9yblBvcztcclxuICAgIC8vICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBkYW1hZ2UoKXtcclxuICAgICAgICBpZih0aGlzLnBvd2VyVXApe1xyXG4gICAgICAgICAgICB0aGlzLmlzU3Ryb25nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTbWFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyZWFzZSgpe1xyXG4gICAgICAgIC8vIGlmKHRoaXMucG93ZXJVcCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0U21hbGwoKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmlzRGVhZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKS5zZW5zb3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW92YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVmdERvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJpZ2h0RG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW92ZURpciA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJkaWVcIik7XHJcbiAgICAgICAgaWYodGhpcy5IUD4xKXtcclxuICAgICAgICAgICAgLy90aGlzLnNjb3JlLT0xO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhQKC0xKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgODAwKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubG9zZU9uZUxpZmUsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxldmVsMVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMucG93ZXJVcCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnNjYWxlWSAqPSAwLjkwOTA5MDkqMC45MDkwOTA5KjAuOTA5MDkwOTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnBvd2VyVXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWFkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLnNlbnNvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC05ODAsIDApOyAgLy80MCwgMTIwIC0+IC0xNjAsIDBcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDMpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVIUCgtMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGdhbWVPdmVyKClcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnN0YXJ0SWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5pbkdhbWUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUodGhpcy5nYXRoZXJFbmVyZ3kpO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlRW5lcmd5QmFyKDApO1xyXG4gICAgICAgIC8vIHRoaXMuZ2F0aGVyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTsgIC8vc3RvcE11c2ljXHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDgwMCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmdhbWVvdmVyU291bmQsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZU92ZXJcIik7ICAvL2dhbWVPdmVyLCB0aGVuIHN0YWdlU2VsZWN0XHJcbiAgICAgICAgfSwgMS41KTsgIC8vNC41IC0+IDEuNVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdfQ==