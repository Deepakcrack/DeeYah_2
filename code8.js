gdjs.FinalCode = {};
gdjs.FinalCode.localVariables = [];
gdjs.FinalCode.idToCallbackMap = new Map();
gdjs.FinalCode.GDNewSprite2Objects1= [];
gdjs.FinalCode.GDNewSprite2Objects2= [];
gdjs.FinalCode.GDNewSprite3Objects1= [];
gdjs.FinalCode.GDNewSprite3Objects2= [];
gdjs.FinalCode.GDNewSprite4Objects1= [];
gdjs.FinalCode.GDNewSprite4Objects2= [];
gdjs.FinalCode.GDNewSprite5Objects1= [];
gdjs.FinalCode.GDNewSprite5Objects2= [];
gdjs.FinalCode.GDNewSprite6Objects1= [];
gdjs.FinalCode.GDNewSprite6Objects2= [];
gdjs.FinalCode.GDPopyObjects1= [];
gdjs.FinalCode.GDPopyObjects2= [];
gdjs.FinalCode.GDjs_9595onpObjects1= [];
gdjs.FinalCode.GDjs_9595onpObjects2= [];
gdjs.FinalCode.GDFredyObjects1= [];
gdjs.FinalCode.GDFredyObjects2= [];
gdjs.FinalCode.GDOliverObjects1= [];
gdjs.FinalCode.GDOliverObjects2= [];
gdjs.FinalCode.GDTransitionObjects1= [];
gdjs.FinalCode.GDTransitionObjects2= [];
gdjs.FinalCode.GDDarkenObjects1= [];
gdjs.FinalCode.GDDarkenObjects2= [];
gdjs.FinalCode.GDPausamenuObjects1= [];
gdjs.FinalCode.GDPausamenuObjects2= [];
gdjs.FinalCode.GDVoverObjects1= [];
gdjs.FinalCode.GDVoverObjects2= [];
gdjs.FinalCode.GDGuardarObjects1= [];
gdjs.FinalCode.GDGuardarObjects2= [];
gdjs.FinalCode.GDNewSpriteObjects1= [];
gdjs.FinalCode.GDNewSpriteObjects2= [];
gdjs.FinalCode.GDmapaanterioObjects1= [];
gdjs.FinalCode.GDmapaanterioObjects2= [];


gdjs.FinalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pausamenu"), gdjs.FinalCode.GDPausamenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDPausamenuObjects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDPausamenuObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDPausamenuObjects1[k] = gdjs.FinalCode.GDPausamenuObjects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDPausamenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dragon-studio-button-press-382713.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21513644);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Intergalactic - Alex Jones _ Xander Jones.mp3", true, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.FinalCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FinalCode.GDNewSprite4Objects1.length;i<l;++i) {
    if ( gdjs.FinalCode.GDNewSprite4Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.FinalCode.GDNewSprite4Objects1[k] = gdjs.FinalCode.GDNewSprite4Objects1[i];
        ++k;
    }
}
gdjs.FinalCode.GDNewSprite4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "dragon-studio-button-press-382713.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDNewSprite2Objects1.length = 0;
gdjs.FinalCode.GDNewSprite2Objects2.length = 0;
gdjs.FinalCode.GDNewSprite3Objects1.length = 0;
gdjs.FinalCode.GDNewSprite3Objects2.length = 0;
gdjs.FinalCode.GDNewSprite4Objects1.length = 0;
gdjs.FinalCode.GDNewSprite4Objects2.length = 0;
gdjs.FinalCode.GDNewSprite5Objects1.length = 0;
gdjs.FinalCode.GDNewSprite5Objects2.length = 0;
gdjs.FinalCode.GDNewSprite6Objects1.length = 0;
gdjs.FinalCode.GDNewSprite6Objects2.length = 0;
gdjs.FinalCode.GDPopyObjects1.length = 0;
gdjs.FinalCode.GDPopyObjects2.length = 0;
gdjs.FinalCode.GDjs_9595onpObjects1.length = 0;
gdjs.FinalCode.GDjs_9595onpObjects2.length = 0;
gdjs.FinalCode.GDFredyObjects1.length = 0;
gdjs.FinalCode.GDFredyObjects2.length = 0;
gdjs.FinalCode.GDOliverObjects1.length = 0;
gdjs.FinalCode.GDOliverObjects2.length = 0;
gdjs.FinalCode.GDTransitionObjects1.length = 0;
gdjs.FinalCode.GDTransitionObjects2.length = 0;
gdjs.FinalCode.GDDarkenObjects1.length = 0;
gdjs.FinalCode.GDDarkenObjects2.length = 0;
gdjs.FinalCode.GDPausamenuObjects1.length = 0;
gdjs.FinalCode.GDPausamenuObjects2.length = 0;
gdjs.FinalCode.GDVoverObjects1.length = 0;
gdjs.FinalCode.GDVoverObjects2.length = 0;
gdjs.FinalCode.GDGuardarObjects1.length = 0;
gdjs.FinalCode.GDGuardarObjects2.length = 0;
gdjs.FinalCode.GDNewSpriteObjects1.length = 0;
gdjs.FinalCode.GDNewSpriteObjects2.length = 0;
gdjs.FinalCode.GDmapaanterioObjects1.length = 0;
gdjs.FinalCode.GDmapaanterioObjects2.length = 0;

gdjs.FinalCode.eventsList0(runtimeScene);
gdjs.FinalCode.GDNewSprite2Objects1.length = 0;
gdjs.FinalCode.GDNewSprite2Objects2.length = 0;
gdjs.FinalCode.GDNewSprite3Objects1.length = 0;
gdjs.FinalCode.GDNewSprite3Objects2.length = 0;
gdjs.FinalCode.GDNewSprite4Objects1.length = 0;
gdjs.FinalCode.GDNewSprite4Objects2.length = 0;
gdjs.FinalCode.GDNewSprite5Objects1.length = 0;
gdjs.FinalCode.GDNewSprite5Objects2.length = 0;
gdjs.FinalCode.GDNewSprite6Objects1.length = 0;
gdjs.FinalCode.GDNewSprite6Objects2.length = 0;
gdjs.FinalCode.GDPopyObjects1.length = 0;
gdjs.FinalCode.GDPopyObjects2.length = 0;
gdjs.FinalCode.GDjs_9595onpObjects1.length = 0;
gdjs.FinalCode.GDjs_9595onpObjects2.length = 0;
gdjs.FinalCode.GDFredyObjects1.length = 0;
gdjs.FinalCode.GDFredyObjects2.length = 0;
gdjs.FinalCode.GDOliverObjects1.length = 0;
gdjs.FinalCode.GDOliverObjects2.length = 0;
gdjs.FinalCode.GDTransitionObjects1.length = 0;
gdjs.FinalCode.GDTransitionObjects2.length = 0;
gdjs.FinalCode.GDDarkenObjects1.length = 0;
gdjs.FinalCode.GDDarkenObjects2.length = 0;
gdjs.FinalCode.GDPausamenuObjects1.length = 0;
gdjs.FinalCode.GDPausamenuObjects2.length = 0;
gdjs.FinalCode.GDVoverObjects1.length = 0;
gdjs.FinalCode.GDVoverObjects2.length = 0;
gdjs.FinalCode.GDGuardarObjects1.length = 0;
gdjs.FinalCode.GDGuardarObjects2.length = 0;
gdjs.FinalCode.GDNewSpriteObjects1.length = 0;
gdjs.FinalCode.GDNewSpriteObjects2.length = 0;
gdjs.FinalCode.GDmapaanterioObjects1.length = 0;
gdjs.FinalCode.GDmapaanterioObjects2.length = 0;


return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
