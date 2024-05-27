// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class logIn extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "logIn";
        StartButton.handler = "loadGameScene";

        cc.find("Canvas/silver_6_6/button").getComponent(cc.Button).clickEvents.push(StartButton);
    }

    // update (dt) {}

    loadGameScene(){
        var email = cc.find("Canvas/silver_6_6/email").getComponent(cc.EditBox).string;
        var password = cc.find("Canvas/silver_6_6/password").getComponent(cc.EditBox).string;

        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            var user=userCredential.user;
            alert("Successfully Signed In!");
            cc.director.loadScene("stageSelect");
          }).catch(error => { 
            alert("The user doesn't exist.");
          });
    }
}
