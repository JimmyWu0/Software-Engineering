// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PlayerController from "./PlayerController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class goomba extends cc.Component {

    @property()
    speed: number = 30;

    @property()
    moveDir: number = -1;

    @property(cc.Prefab)
    Prefabs100: cc.Prefab = null;

    @property(PlayerController)
    player: PlayerController = null;

    private anim: cc.Animation = null;

    private rigidBody: cc.RigidBody = null;

    private collider: cc.PhysicsBoxCollider = null;

    isDead: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
    }

    start () {
        // let action = cc.repeatForever(cc.sequence(cc.moveBy(2, 50, 0), cc.moveBy(2, -50, 0)));
        // this.node.runAction(action);

    }

    update (dt) {
        this.schedule(this.flip, 0.25);
        if(!this.player.isPause)
            this.node.x += this.speed * this.moveDir * dt;
    }

    flip() {
        this.node.scaleX *= -1;
    }

    onBeginContact(contact, self, other) {
        if(other.tag == 0 || other.tag == 1) { // ground & block
            if(contact.getWorldManifold().normal.x == -1 && contact.getWorldManifold().normal.y == -0) { //right bound
                //this.node.scaleX = -3;
                this.moveDir *= -1;
            }
            else if(contact.getWorldManifold().normal.x == 1 && contact.getWorldManifold().normal.y == -0) { //left bound
                //this.node.scaleX = 3;
                this.moveDir *= -1;
            }
        }
        else if(other.tag == 7) { // player
            // if(this.player.isDead || this.player.isStrong || this.die) {
            //     contact.disabled = true;
            //     return;
            // }
            if(this.player.isDead == true){
                return;
            }
            if(contact.getWorldManifold().normal.x == 0 && contact.getWorldManifold().normal.y == 1 && !this.isDead) {
                //this.die = true;
                this.isDead = true;
                this.player.updateScore(100);  //score
                var _100 = cc.instantiate(this.Prefabs100);
                //_100.setPosition(contact.getWorldManifold().points[0]);
                _100.setPosition(other.node.x, other.node.y+20);
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
                this.schedule(function(){
                    this.node.destroy();
                }, 0.25);
                this.player.playerJump(501);
                // this.player.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
                // cc.audioEngine.playEffect(this.jump, false);
                //this.player.stompEnemy_100(self);
            }
            else {
                if(!this.player.isStrong && !this.isDead)
                    this.player.damage();
            }
        }
    }
}