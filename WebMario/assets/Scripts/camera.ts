// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

// @ccclass
// export default class camera extends cc.Component {

//     @property(cc.Node)
//     player: cc.Node = null;

//     @property(cc.Vec2)
//     offset: cc.Vec2 = cc.Vec2.ZERO;

//     @property(cc.Rect)
//     boundary: cc.Rect = new cc.Rect(0, 0, 1000, 1000); // 設置邊界

//     @property
//     orthoHeight: number = 500; // 設置正交相機的高度

//     private camera: cc.Camera = null;

//     onLoad() {
//         this.camera = this.getComponent(cc.Camera);
//         if (this.camera) {
//             this.camera.ortho = true; // 設置相機為正交相機
//             this.camera.orthoHeight = this.orthoHeight; // 設置相機高度
//         }
//         this.updateCameraPosition();
//     }

//     update(dt: number) {
//         this.updateCameraPosition();
//     }

//     updateCameraPosition() {
//         if (this.player) {
//             // 計算目標位置
//             let targetPos = this.player.position.add(cc.v2(this.offset.x, this.offset.y));

//             // 邊界檢查
//             targetPos.x = cc.misc.clampf(targetPos.x, this.boundary.xMin, this.boundary.xMax);
//             targetPos.y = cc.misc.clampf(targetPos.y, this.boundary.yMin, this.boundary.yMax);

//             // 更新相機位置
//             this.node.position = targetPos;
//         }
//     }
// }


@ccclass
export default class camera extends cc.Component {

    @property(cc.Node)
    followTarget: cc.Node = null;
    @property(cc.Boolean)
    followX: boolean = true;
    @property(cc.Boolean)
    followY: boolean = true;
    // @property(cc.Float)
    minX: number = -800;  //0
    // @property(cc.Float)
    minY: number = -120;
    // @property(cc.Float)
    maxX: number = 1200;  //400 -> 800
    // @property(cc.Float)
    maxY: number = 120;
    // @property(cc.Float)
    offsetX: number = 0;
    // @property(cc.Float)
    offsetY: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        
    }

    start () {
        
    }

    update(dt) {
        // Not using convertToWorldSpaceAR + convertToNodeSpaceAR because
        // they are inaccurate and causes camera jitter. :(
        let cameraLocalTransform = cc.mat4();
        this.node.getLocalMatrix(cameraLocalTransform);
        let targetWorldTransform = cc.mat4();
        this.followTarget.getWorldMatrix(targetWorldTransform);
        let targetWorldTranslation = cc.v3(0, 0, 0);
        targetWorldTransform.getTranslation(targetWorldTranslation);
        let transformed = cc.v4(targetWorldTranslation.x, targetWorldTranslation.y, targetWorldTranslation.z).transformMat4(cameraLocalTransform);
        let targetPosition = cc.v2(transformed.x, transformed.y).add(cc.v2(-cc.view.getDesignResolutionSize().width / 2, -cc.view.getDesignResolutionSize().height / 2));
        targetPosition = cc.v2(
            clamp(this.followX ? targetPosition.x : this.node.position.x, this.minX, this.maxX),
            clamp(this.followY ? targetPosition.y : this.node.position.y, this.minY, this.maxY)
        );
        this.node.position = targetPosition;
    }
}

function clamp(x: number, a: number, b: number) {
    if (x < a) return a;
    if (x > b) return b;
    return x;
}