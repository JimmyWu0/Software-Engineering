
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/GameManager');
require('./assets/Scripts/PlayerController');
require('./assets/Scripts/camera');
require('./assets/Scripts/gameOver');
require('./assets/Scripts/gameStart');
require('./assets/Scripts/goomba');
require('./assets/Scripts/logIn');
require('./assets/Scripts/menu');
require('./assets/Scripts/mushroom');
require('./assets/Scripts/question_tile');
require('./assets/Scripts/signUp');
require('./assets/Scripts/stageSelect');

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