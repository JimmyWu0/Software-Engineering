// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {

    @property()
    playerSpeed: number = 300;

    @property()
    playerStandSpeed: number = 50;

    @property(cc.AudioClip)
    jump: cc.AudioClip = null;

    @property(cc.AudioClip)
    eatMushroom: cc.AudioClip = null;

    @property(cc.AudioClip)
    coin: cc.AudioClip = null;

    @property(cc.AudioClip)
    shrink: cc.AudioClip = null;

    @property(cc.AudioClip)
    win: cc.AudioClip = null;

    @property(cc.AudioClip)
    gameoverSound: cc.AudioClip = null;

    @property(cc.AudioClip)
    loseOneLife: cc.AudioClip = null;

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    private moveDir = 0;
    private leftDown: boolean = false;
    private rightDown: boolean = false;
    private physicManager: cc.PhysicsManager = null;
    private fallDown: boolean = false;
    private idleFrame: cc.SpriteFrame = null;
    private anim: cc.Animation = null;

    HP: number = 5;
    @property(cc.Node)
    lifeNum = null;

    private onGround: boolean = false;
    
    score: number = 0;
    @property(cc.Node)
    scorePoints = null;

    time: number = 300;
    @property(cc.Node)
    timeNum = null;

    isDead: boolean = false;
    movable: boolean = true;
    powerUp: boolean = false;
    isStrong: boolean = false;
    isPause: boolean = false;

    onLoad(){
        this.physicManager = cc.director.getPhysicsManager();
        this.physicManager.enabled = true;
        this.physicManager.gravity = cc.v2 (0, -200);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    start (){
        this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
        // ========== TODO ==========
        // 1. Assign the animation component into this.anim from this.node
        this.anim = this.getComponent(cc.Animation);
        this.node.scaleX=1;
        //this.score = 5;  //this.HP  //TODO
        // this.HP=5;
        // this.score=0;
        this.updateHP(0);
        this.updateScore(0);
        // this.schedule(function() {
        //     this.time -= 1;
        // }, 1);        
    }

    update (dt){
        if(!this.isPause){  //TODO: when this.isPause, keep player static even if NOT on the ground
            this.node.x += this.playerSpeed * this.moveDir * dt;
            //this.node.getComponent(cc.RigidBody).enabled = true;;
        }
        else{
            //this.node.getComponent(cc.RigidBody).enabled = false;
        }
        //this.node.scaleX = (this.moveDir > 0) ? 1 : -1;
        if(this.moveDir > 0 && !this.isPause)
            this.node.scaleX = 1;
        else if(this.moveDir < 0 && !this.isPause)
            this.node.scaleX = -1;
        if(this.getComponent(cc.RigidBody).linearVelocity.y != 0)
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
        if(this.node.position.y<-112 && this.isDead == false){
            if(this.powerUp)
                // this.schedule(function(){
                //     this.node.scaleY *= 0.9090909*0.9090909*0.9090909; 
                // }, 3);
                this.node.scaleY *= 0.9090909*0.9090909*0.9090909;
                this.powerUp = false;
            this.decrease();
        }
        if(!this.isDead && !this.isPause){
            this.time -= dt;
        }
        //time
        if(this.time < 0 && !this.isDead){
            this.decrease();
            this.time = 0;
        }
        this.timeNum.getComponent(cc.Label).string = Math.floor(this.time).toString();
    }

    onKeyDown(event)
    {
        if(!this.movable || this.isDead){
            this.playerMove(0);
            return;
        }

        switch(event.keyCode)
        {
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
    }

    onKeyUp(event)
    {
        if(!this.movable || this.isDead){
            this.playerMove(0);
            return;
        }

        switch(event.keyCode)
        {
            case cc.macro.KEY.left:
                this.leftDown = false;
                if(this.rightDown)
                    this.playerMove(1);
                else
                    this.playerMove(0);
                break;
            case cc.macro.KEY.right:
                this.rightDown = false;
                if(this.leftDown)
                    this.playerMove(-1);
                else
                    this.playerMove(0);
                break;
        }
    }

    onBeginContact(contact, self, other) {
        if(this.isDead)
            contact.disabled = true;
        //console.log(otherCollider.tag);
        if (other.tag == 0) { // 假设地面节点的碰撞器 tag 设置为 0    
            this.onGround = true;
        }
        if(other.tag == 6){
            // this.getComponent(cc.RigidBody).linearVelocity.y = 0;
            // this.getComponent(cc.RigidBody).gravityScale = 0;
            // this.getComponent(cc.RigidBody).linearVelocity.y = 0;
            this.updateScore(1000);
            if(!this.powerUp){
                this.powerUp = true; 
                this.isPause = true;
                //TODO: giant anim & audio
                cc.audioEngine.playEffect(this.eatMushroom, false);
                //this.anim.play("eatMushroom");
                this.getBig();
            }
            else{
                cc.audioEngine.playEffect(this.coin, false);
            }
        }else if(other.tag == 8){
            this.isPause = true;
            this.updateScore(Math.floor(this.time)*100);
            cc.audioEngine.stopAll();
            cc.audioEngine.playEffect(this.win, false); 
            this.scheduleOnce(function(){
                cc.director.loadScene("stageSelect");
            }, 4);
        }
    }

    onEndContact(contact, self, other) {
        if (other.tag == 0) { // 假设地面节点的碰撞器 tag 设置为 0
            this.onGround = false;
        }
    }

    getBig(){
        this.powerUp = true;
        // this.getComponent(cc.RigidBody).linearVelocity.y = 0;
        // this.getComponent(cc.RigidBody).gravityScale = 0;
        // this.getComponent(cc.RigidBody).linearVelocity.y = 0;
        let action = cc.repeat(cc.sequence(cc.scaleBy(0.2, 1, 1.1), cc.hide(), cc.delayTime(0.1), cc.show()), 3);
        this.node.runAction(action);
        this.scheduleOnce(function(){  //暫停1s
            this.isPause = false;
            //this.getComponent(cc.RigidBody).gravityScale = 10;
            //this.getComponent(cc.RigidBody).linearVelocity.y = 0;
        }, 1);
    }

    getSmall(){
        cc.audioEngine.playEffect(this.shrink, false);
        this.powerUp = false;
        let action = cc.repeat(cc.sequence(cc.scaleBy(0.2, 1, 0.9090909), cc.hide(), cc.delayTime(0.1), cc.show()), 3);
        this.node.runAction(action);
        this.scheduleOnce(function(){  //無敵2s
            this.isStrong = false;
        }, 2);
        this.scheduleOnce(function(){  //暫停1s
            this.isPause = false;
        }, 1);
    }

    updateScore(number) {
        this.score += number;
        this.scorePoints.getComponent(cc.Label).string = this.score.toString();
    }

    updateHP(number) {
        this.HP += number;
        this.lifeNum.getComponent(cc.Label).string = this.HP.toString();
    }

    public playerMove(moveDir: number){
        this.moveDir = moveDir;
    }

    public playerAnimation(){
        // if(this.powerUp){
        //     if(!this.anim.getAnimationState("eatMushroom").isPlaying)
        //         this.anim.play("eatMushroom");
        //     // else
        //     //     this.powerUp = false;
        // }
        if(this.isPause){
            this.anim.stop();
            return;
        }
        if(this.getComponent(cc.RigidBody).linearVelocity.y != 0){
            if(!this.anim.getAnimationState("jump").isPlaying && !this.anim.getAnimationState("die").isPlaying && !this.anim.getAnimationState("eatMushroom").isPlaying)
                this.anim.play("jump");
        }
        if(this.fallDown == true){
            // // ========== TODO ==========
            // // 1. Play fall_front animation (Checked the animation is playing or not and moveDir=0)
            // // 2. Play fall_side animation (Checked the animation is playing or not and moveDir != 0)
            // if(this.moveDir == 0 && !this.anim.getAnimationState("fall_front").isPlaying)
            //     this.anim.play("fall_front");
            // else if(this.moveDir != 0 && !this.anim.getAnimationState("fall_side").isPlaying)
            //     this.anim.play("fall_side");
            console.log("hi");
        }
        else{
            if(this.moveDir == 0)
            {
                this.getComponent(cc.Sprite).spriteFrame = this.idleFrame;
                // ========== TODO ==========
                // 1. Stop the animation which is playing
                this.anim.stop();
            }
            // ========== TODO ==========
            // 1. Play walk animation (Checked the walk animation is playing or not)
            else if(!this.anim.getAnimationState("walk").isPlaying && !this.anim.getAnimationState("jump").isPlaying && !this.anim.getAnimationState("eatMushroom").isPlaying)
                this.anim.play("walk");
        }
    }

    public playerJump(velocity: number)
    {
        if((this.onGround && !this.fallDown ) || velocity== 501)  //if()
            //this.onGround = false;
            //console.log(this.onGround);
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, velocity);
            if(this.node.getComponent(cc.RigidBody).linearVelocity.y >=500){
                cc.audioEngine.playEffect(this.jump, false);
            }
    }

    public reborn(rebornPos: cc.Vec3)
    {
        this.node.position.x = rebornPos.x;
        this.node.position.y = rebornPos.y;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
    }

    // public reborn(rebornPos: cc.Vec3)
    // {
    //     this.node.position = rebornPos;
    //     this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
    // }

    damage(){
        if(this.powerUp){
            this.isStrong = true;
            this.isPause = true;
            this.getSmall();
        }
        else
            this.decrease();
    }

    decrease(){
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
        if(this.HP>1){
            //this.score-=1;
            this.updateHP(-1);
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 800);
            cc.audioEngine.stopAll();
            cc.audioEngine.playEffect(this.loseOneLife, false);
            this.scheduleOnce(function() {
                //cc.director.loadScene("level1");
                // if(this.powerUp){
                //     this.node.scaleY *= 0.9090909*0.9090909*0.9090909;
                //     this.powerUp = false;
                // }
                this.isDead = false;
                this.getComponent(cc.PhysicsBoxCollider).sensor = false;
                this.node.setPosition(-980, 0);  //40, 120 -> -160, 0
                cc.audioEngine.playMusic(this.bgm, true);
                this.movable = true;
                this.time = 300;
                this.node.scaleX = 1;
            }, 3);
        }    
        else{
            this.updateHP(-1);
            this.gameOver();
        } 
    }

    gameOver()
    {
        // this.startIcon.active = true;
        // this.player.node.active = false;
        // this.inGame = false;
        // this.unschedule(this.gatherEnergy);
        // this.updateEnergyBar(0);
        // this.gathering = false;

        cc.audioEngine.stopAll();  //stopMusic
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 800);
        cc.audioEngine.playEffect(this.gameoverSound, false);
        this.scheduleOnce(function() {
            cc.director.loadScene("gameOver");  //gameOver, then stageSelect
        }, 1.5);  //4.5 -> 1.5
        
    }

}