// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class menu extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    // =========================== TODO 1-1 ============================
    // 1. Add dynamic click event to StartButton to call this function  
    // ===============================================================  
        let StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "menu";
        StartButton.handler = "signup";

        cc.find("Canvas/StartButton").getComponent(cc.Button).clickEvents.push(StartButton);

        let login = new cc.Component.EventHandler();
        login.target = this.node;
        login.component = "menu";
        login.handler = "login";

        cc.find("Canvas/logIn").getComponent(cc.Button).clickEvents.push(login);
    }

    // update (dt) {}

    signup(){
        // =========================== TODO 1-2 ============================
        // 1. Load main scene by cc.director  
        // ===============================================================
        cc.director.loadScene("signUp");
    }

    login(){
        cc.director.loadScene("logIn");
    }
}