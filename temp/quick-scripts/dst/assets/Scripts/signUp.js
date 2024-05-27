
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/signUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c7767oykhBO4ThllfJhfCc', 'signUp');
// Scripts/signUp.ts

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
var signUp = /** @class */ (function (_super) {
    __extends(signUp, _super);
    function signUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    signUp.prototype.start = function () {
        var StartButton = new cc.Component.EventHandler();
        StartButton.target = this.node;
        StartButton.component = "signUp";
        StartButton.handler = "loadGameScene";
        cc.find("Canvas/silver_6_6/button").getComponent(cc.Button).clickEvents.push(StartButton);
    };
    // update (dt) {}
    signUp.prototype.loadGameScene = function () {
        var name = cc.find("Canvas/silver_6_6/name").getComponent(cc.EditBox).string;
        var email = cc.find("Canvas/silver_6_6/email").getComponent(cc.EditBox).string;
        var password = cc.find("Canvas/silver_6_6/password").getComponent(cc.EditBox).string;
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
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function (userCredential) {
            var user = userCredential.user;
            firebase.auth().currentUser.updateProfile({
                displayName: name
            });
            firebase.database().ref('users/' + name).set({
                name: name,
                email: email,
                password: password
            }).then(function () {
                alert("Successfully Signed Up!");
                cc.director.loadScene("stageSelect");
            }).catch(function (error) {
                alert(error.message);
            });
        }).catch(function (error) {
            alert(error.message);
        });
        // =========================== TODO 1-2 ============================
        // 1. Load main scene by cc.director  
        // ===============================================================
        //cc.director.loadScene("stageSelect");
    };
    __decorate([
        property(cc.Label)
    ], signUp.prototype, "label", void 0);
    __decorate([
        property
    ], signUp.prototype, "text", void 0);
    signUp = __decorate([
        ccclass
    ], signUp);
    return signUp;
}(cc.Component));
exports.default = signUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc2lnblVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBeUVDO1FBdEVHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFtRTNCLENBQUM7SUFqRUcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixzQkFBSyxHQUFMO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixXQUFXLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxXQUFXLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztRQUV0QyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxpQkFBaUI7SUFFakIsOEJBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM3RSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDL0UsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JGLCtFQUErRTtRQUMvRSx3REFBd0Q7UUFDeEQsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCw4RkFBOEY7UUFDOUYsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLDBDQUEwQztRQUMxQyw4Q0FBOEM7UUFDOUMsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQixVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixRQUFRO1FBSU4sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLDhCQUE4QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxjQUFjO1lBQ2xGLElBQUksSUFBSSxHQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDN0IsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hDLFdBQVcsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztZQUNILFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDWixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNaLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxvRUFBb0U7UUFDcEUsc0NBQXNDO1FBQ3RDLGtFQUFrRTtRQUNsRSx1Q0FBdUM7SUFDM0MsQ0FBQztJQXJFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNJO0lBR3ZCO1FBREMsUUFBUTt3Q0FDYztJQU5OLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F5RTFCO0lBQUQsYUFBQztDQXpFRCxBQXlFQyxDQXpFbUMsRUFBRSxDQUFDLFNBQVMsR0F5RS9DO2tCQXpFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2lnblVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IFN0YXJ0QnV0dG9uID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBTdGFydEJ1dHRvbi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgU3RhcnRCdXR0b24uY29tcG9uZW50ID0gXCJzaWduVXBcIjtcclxuICAgICAgICBTdGFydEJ1dHRvbi5oYW5kbGVyID0gXCJsb2FkR2FtZVNjZW5lXCI7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc2lsdmVyXzZfNi9idXR0b25cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChTdGFydEJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBsb2FkR2FtZVNjZW5lKCl7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBjYy5maW5kKFwiQ2FudmFzL3NpbHZlcl82XzYvbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IGNjLmZpbmQoXCJDYW52YXMvc2lsdmVyXzZfNi9lbWFpbFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IGNjLmZpbmQoXCJDYW52YXMvc2lsdmVyXzZfNi9wYXNzd29yZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3JhbmsvJyArIHVzZXJuYW1lKS5zZXQoe1xyXG4gICAgICAgIC8vICAgICAgIHNjb3JlOiAwXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy8nICsgZW1haWwuc3BsaXQoXCIuXCIpLmpvaW4oXCJfXCIpLnJlcGxhY2UoL0AvZywgXCJfXCIpKS5zZXQoe1xyXG4gICAgICAgIC8vICAgICAgIG5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIC8vICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAvLyAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgLy8gICAgICAgbGlmZTogNSxcclxuICAgICAgICAvLyAgICAgICBjb2luOiAwLFxyXG4gICAgICAgIC8vICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgIC8vICAgICB9KS50aGVuKCgpID0+IHsgXHJcbiAgICAgICAgLy8gICAgICAgYWxlcnQoXCJTdWNjZXNzZnVsbHkgU2lnbmVkIFVwIVwiKTtcclxuICAgICAgICAvLyAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzdGFnZVNlbGVjdFwiKTtcclxuICAgICAgICAvLyAgICAgfSkuY2F0Y2goZXJyb3IgPT4geyBcclxuICAgICAgICAvLyAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTsgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vICAgfSkuY2F0Y2goZXJyb3IgPT4geyBcclxuICAgICAgICAvLyAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7IFxyXG4gICAgICAgIC8vICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdXNlcj11c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIudXBkYXRlUHJvZmlsZSh7XHJcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy8nICsgbmFtZSkuc2V0KHtcclxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7IFxyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiU3VjY2Vzc2Z1bGx5IFNpZ25lZCBVcCFcIik7XHJcbiAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic3RhZ2VTZWxlY3RcIik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHsgXHJcbiAgICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHsgXHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpOyBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBUT0RPIDEtMiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gMS4gTG9hZCBtYWluIHNjZW5lIGJ5IGNjLmRpcmVjdG9yICBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvL2NjLmRpcmVjdG9yLmxvYWRTY2VuZShcInN0YWdlU2VsZWN0XCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==