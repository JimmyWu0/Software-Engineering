// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PlayerController from "./PlayerController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property()
    speed: number = 60;

    @property()
    moveDir: number = -1;
    
    @property(PlayerController)
    player: PlayerController = null;

    @property(cc.Prefab)
    Prefabs1000: cc.Prefab = null;

    private anim: cc.Animation = null;

    private rigidBody: cc.RigidBody = null;

    private collider: cc.PhysicsBoxCollider = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
    }

    start () {
        this.scheduleOnce(function(){
            this.node.runAction(cc.moveBy(1, 0, 16));
        });
        this.schedule(function(){
            this.rigidBody.type = cc.RigidBodyType.Dynamic;
        }, 1.5);
    }

    update (dt) {
        if(this.rigidBody.type == cc.RigidBodyType.Dynamic){
            this.node.x += this.speed * this.moveDir * dt;
        }
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
            // if(this.player.isDead == true){
            //     return;
            // }
            var _1000 = cc.instantiate(this.Prefabs1000);
            _1000.setPosition(self.node.x, self.node.y+20);
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
    }
}
