// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class signUp extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "signUp";
        StartButton.handler = "loadGameScene";

        cc.find("Canvas/silver_6_6/button").getComponent(cc.Button).clickEvents.push(StartButton);
    }

    // update (dt) {}

    loadGameScene(){
        let name = cc.find("Canvas/silver_6_6/name").getComponent(cc.EditBox).string;
        let email = cc.find("Canvas/silver_6_6/email").getComponent(cc.EditBox).string;
        let password = cc.find("Canvas/silver_6_6/password").getComponent(cc.EditBox).string;
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

        

          firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            var user=userCredential.user;
            firebase.auth().currentUser.updateProfile({
              displayName: name
            });
            firebase.database().ref('users/' + name).set({
              name: name,
              email: email,
              password: password
            }).then(() => { 
              alert("Successfully Signed Up!");
              cc.director.loadScene("stageSelect");
            }).catch(error => { 
              alert(error.message); 
            });
          }).catch(error => { 
            alert(error.message); 
          });
        // =========================== TODO 1-2 ============================
        // 1. Load main scene by cc.director  
        // ===============================================================
        //cc.director.loadScene("stageSelect");
    }
}
