// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import PlayerController from "./PlayerController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class question_tile extends cc.Component {

    @property(PlayerController)
    player: PlayerController = null;

    @property(cc.Prefab)
    Prefabs100: cc.Prefab = null;

    @property(cc.Prefab)
    PrefabsYellow: cc.Prefab = null;

    @property(cc.Prefab)
    PrefabsMushroom: cc.Prefab = null;

    @property(cc.AudioClip)
    isMushroom: cc.AudioClip = null;

    private anim: cc.Animation = null;

    private rigidBody: cc.RigidBody = null;

    private collider: cc.PhysicsBoxCollider = null;

    private hit: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.collider = this.getComponent(cc.PhysicsBoxCollider);
    }

    start () {
        this.hit = false;
    }

    update (dt) {

    }

    onBeginContact(contact, self, other) {
        if(other.tag == 7) { // player
            // if(this.player.isDead || this.player.isStrong || this.die) {
            //     contact.disabled = true;
            //     return;
            // }
            if(this.player.isDead == true){
                return;
            }
            if(contact.getWorldManifold().normal.x == 0 && contact.getWorldManifold().normal.y == -1) {
                if(!this.hit){
                    this.hit = true;
                    cc.audioEngine.playEffect(this.isMushroom, false);
                }

                //this.die = true;
                //this.anim.play("question_pop");
                this.node.runAction(cc.sequence(cc.moveBy(0.05, 0, 5), cc.moveBy(0.05, 0, -5)));
                this.player.updateScore(100);  //score
                var _100 = cc.instantiate(this.Prefabs100);
                //_100.setPosition(contact.getWorldManifold().points[0]);
                _100.setPosition(self.node.x, self.node.y+20);
                cc.find("Canvas").addChild(_100);
                _100.runAction(cc.spawn(cc.moveBy(1, 0, 20), cc.fadeOut(1)));
                // this.schedule(function () {
                //     console.log("hi");
                //     _100.destroy();
                // }, 1.5);
                //this.rigidBody.gravityScale = 0;
                // this.collider.sensor = true;
                this.schedule(function(){
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
    }
}
