gdjs.nivel0Code = {};
gdjs.nivel0Code.localVariables = [];
gdjs.nivel0Code.idToCallbackMap = new Map();
gdjs.nivel0Code.GDPlayerObjects1= [];
gdjs.nivel0Code.GDPlayerObjects2= [];
gdjs.nivel0Code.GDbloque_9595colisionObjects1= [];
gdjs.nivel0Code.GDbloque_9595colisionObjects2= [];
gdjs.nivel0Code.GDNewSprite2Objects1= [];
gdjs.nivel0Code.GDNewSprite2Objects2= [];
gdjs.nivel0Code.GDpuertaObjects1= [];
gdjs.nivel0Code.GDpuertaObjects2= [];
gdjs.nivel0Code.GDNewTileMapObjects1= [];
gdjs.nivel0Code.GDNewTileMapObjects2= [];
gdjs.nivel0Code.GDNewTileMap2Objects1= [];
gdjs.nivel0Code.GDNewTileMap2Objects2= [];
gdjs.nivel0Code.GDNewTiledSpriteObjects1= [];
gdjs.nivel0Code.GDNewTiledSpriteObjects2= [];
gdjs.nivel0Code.GDFlatHeartBarObjects1= [];
gdjs.nivel0Code.GDFlatHeartBarObjects2= [];
gdjs.nivel0Code.GDFondoJuegoObjects1= [];
gdjs.nivel0Code.GDFondoJuegoObjects2= [];
gdjs.nivel0Code.GDpausa1Objects1= [];
gdjs.nivel0Code.GDpausa1Objects2= [];
gdjs.nivel0Code.GDVolver_9595MenuObjects1= [];
gdjs.nivel0Code.GDVolver_9595MenuObjects2= [];
gdjs.nivel0Code.GDrenaudarObjects1= [];
gdjs.nivel0Code.GDrenaudarObjects2= [];
gdjs.nivel0Code.GDcomenzarObjects1= [];
gdjs.nivel0Code.GDcomenzarObjects2= [];
gdjs.nivel0Code.GDpaguiprincFNAfObjects1= [];
gdjs.nivel0Code.GDpaguiprincFNAfObjects2= [];
gdjs.nivel0Code.GDGuardadoObjects1= [];
gdjs.nivel0Code.GDGuardadoObjects2= [];
gdjs.nivel0Code.GDVolver_9595Menu2Objects1= [];
gdjs.nivel0Code.GDVolver_9595Menu2Objects2= [];
gdjs.nivel0Code.GDTransitionObjects1= [];
gdjs.nivel0Code.GDTransitionObjects2= [];
gdjs.nivel0Code.GDDarkenObjects1= [];
gdjs.nivel0Code.GDDarkenObjects2= [];
gdjs.nivel0Code.GDPausamenuObjects1= [];
gdjs.nivel0Code.GDPausamenuObjects2= [];
gdjs.nivel0Code.GDVoverObjects1= [];
gdjs.nivel0Code.GDVoverObjects2= [];
gdjs.nivel0Code.GDGuardarObjects1= [];
gdjs.nivel0Code.GDGuardarObjects2= [];
gdjs.nivel0Code.GDNewSpriteObjects1= [];
gdjs.nivel0Code.GDNewSpriteObjects2= [];
gdjs.nivel0Code.GDmapaanterioObjects1= [];
gdjs.nivel0Code.GDmapaanterioObjects2= [];


gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDpuertaObjects1Objects = Hashtable.newFrom({"puerta": gdjs.nivel0Code.GDpuertaObjects1});
gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.nivel0Code.GDPlayerObjects1});
gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDpuertaObjects1Objects = Hashtable.newFrom({"puerta": gdjs.nivel0Code.GDpuertaObjects1});
gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.nivel0Code.GDPlayerObjects1});
gdjs.nivel0Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.nivel0Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("puerta"), gdjs.nivel0Code.GDpuertaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDpuertaObjects1Objects, gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nivel0Code.GDpuertaObjects1 */
{for(var i = 0, len = gdjs.nivel0Code.GDpuertaObjects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDpuertaObjects1[i].getBehavior("Animation").setAnimationName("puerta#1");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.nivel0Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("puerta"), gdjs.nivel0Code.GDpuertaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDpuertaObjects1Objects, gdjs.nivel0Code.mapOfGDgdjs_9546nivel0Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9548948);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Five Nights at Freddy.mp3", true, 30, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("comenzar"), gdjs.nivel0Code.GDcomenzarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel0Code.GDcomenzarObjects1.length;i<l;++i) {
    if ( gdjs.nivel0Code.GDcomenzarObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel0Code.GDcomenzarObjects1[k] = gdjs.nivel0Code.GDcomenzarObjects1[i];
        ++k;
    }
}
gdjs.nivel0Code.GDcomenzarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FondoJuego"), gdjs.nivel0Code.GDFondoJuegoObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.nivel0Code.GDFondoJuegoObjects1.length === 0 ) ? 0 :gdjs.nivel0Code.GDFondoJuegoObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "linear", 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Volver_Menu"), gdjs.nivel0Code.GDVolver_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel0Code.GDVolver_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.nivel0Code.GDVolver_9595MenuObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel0Code.GDVolver_9595MenuObjects1[k] = gdjs.nivel0Code.GDVolver_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.nivel0Code.GDVolver_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Guardado"), gdjs.nivel0Code.GDGuardadoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Volver_Menu2"), gdjs.nivel0Code.GDVolver_9595Menu2Objects1);
gdjs.copyArray(runtimeScene.getObjects("pausa1"), gdjs.nivel0Code.GDpausa1Objects1);
gdjs.copyArray(runtimeScene.getObjects("renaudar"), gdjs.nivel0Code.GDrenaudarObjects1);
{for(var i = 0, len = gdjs.nivel0Code.GDpausa1Objects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDpausa1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.nivel0Code.GDVolver_9595Menu2Objects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDVolver_9595Menu2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.nivel0Code.GDrenaudarObjects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDrenaudarObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.nivel0Code.GDGuardadoObjects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDGuardadoObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Volver_Menu2"), gdjs.nivel0Code.GDVolver_9595Menu2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel0Code.GDVolver_9595Menu2Objects1.length;i<l;++i) {
    if ( gdjs.nivel0Code.GDVolver_9595Menu2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel0Code.GDVolver_9595Menu2Objects1[k] = gdjs.nivel0Code.GDVolver_9595Menu2Objects1[i];
        ++k;
    }
}
gdjs.nivel0Code.GDVolver_9595Menu2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("comenzar"), gdjs.nivel0Code.GDcomenzarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel0Code.GDcomenzarObjects1.length;i<l;++i) {
    if ( gdjs.nivel0Code.GDcomenzarObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel0Code.GDcomenzarObjects1[k] = gdjs.nivel0Code.GDcomenzarObjects1[i];
        ++k;
    }
}
gdjs.nivel0Code.GDcomenzarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Volver_Menu2"), gdjs.nivel0Code.GDVolver_9595Menu2Objects1);
gdjs.copyArray(runtimeScene.getObjects("pausa1"), gdjs.nivel0Code.GDpausa1Objects1);
{for(var i = 0, len = gdjs.nivel0Code.GDVolver_9595Menu2Objects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDVolver_9595Menu2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.nivel0Code.GDpausa1Objects1.length ;i < len;++i) {
    gdjs.nivel0Code.GDpausa1Objects1[i].hide();
}
}
}

}


};

gdjs.nivel0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nivel0Code.GDPlayerObjects1.length = 0;
gdjs.nivel0Code.GDPlayerObjects2.length = 0;
gdjs.nivel0Code.GDbloque_9595colisionObjects1.length = 0;
gdjs.nivel0Code.GDbloque_9595colisionObjects2.length = 0;
gdjs.nivel0Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel0Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel0Code.GDpuertaObjects1.length = 0;
gdjs.nivel0Code.GDpuertaObjects2.length = 0;
gdjs.nivel0Code.GDNewTileMapObjects1.length = 0;
gdjs.nivel0Code.GDNewTileMapObjects2.length = 0;
gdjs.nivel0Code.GDNewTileMap2Objects1.length = 0;
gdjs.nivel0Code.GDNewTileMap2Objects2.length = 0;
gdjs.nivel0Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.nivel0Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.nivel0Code.GDFlatHeartBarObjects1.length = 0;
gdjs.nivel0Code.GDFlatHeartBarObjects2.length = 0;
gdjs.nivel0Code.GDFondoJuegoObjects1.length = 0;
gdjs.nivel0Code.GDFondoJuegoObjects2.length = 0;
gdjs.nivel0Code.GDpausa1Objects1.length = 0;
gdjs.nivel0Code.GDpausa1Objects2.length = 0;
gdjs.nivel0Code.GDVolver_9595MenuObjects1.length = 0;
gdjs.nivel0Code.GDVolver_9595MenuObjects2.length = 0;
gdjs.nivel0Code.GDrenaudarObjects1.length = 0;
gdjs.nivel0Code.GDrenaudarObjects2.length = 0;
gdjs.nivel0Code.GDcomenzarObjects1.length = 0;
gdjs.nivel0Code.GDcomenzarObjects2.length = 0;
gdjs.nivel0Code.GDpaguiprincFNAfObjects1.length = 0;
gdjs.nivel0Code.GDpaguiprincFNAfObjects2.length = 0;
gdjs.nivel0Code.GDGuardadoObjects1.length = 0;
gdjs.nivel0Code.GDGuardadoObjects2.length = 0;
gdjs.nivel0Code.GDVolver_9595Menu2Objects1.length = 0;
gdjs.nivel0Code.GDVolver_9595Menu2Objects2.length = 0;
gdjs.nivel0Code.GDTransitionObjects1.length = 0;
gdjs.nivel0Code.GDTransitionObjects2.length = 0;
gdjs.nivel0Code.GDDarkenObjects1.length = 0;
gdjs.nivel0Code.GDDarkenObjects2.length = 0;
gdjs.nivel0Code.GDPausamenuObjects1.length = 0;
gdjs.nivel0Code.GDPausamenuObjects2.length = 0;
gdjs.nivel0Code.GDVoverObjects1.length = 0;
gdjs.nivel0Code.GDVoverObjects2.length = 0;
gdjs.nivel0Code.GDGuardarObjects1.length = 0;
gdjs.nivel0Code.GDGuardarObjects2.length = 0;
gdjs.nivel0Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel0Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel0Code.GDmapaanterioObjects1.length = 0;
gdjs.nivel0Code.GDmapaanterioObjects2.length = 0;

gdjs.nivel0Code.eventsList0(runtimeScene);
gdjs.nivel0Code.GDPlayerObjects1.length = 0;
gdjs.nivel0Code.GDPlayerObjects2.length = 0;
gdjs.nivel0Code.GDbloque_9595colisionObjects1.length = 0;
gdjs.nivel0Code.GDbloque_9595colisionObjects2.length = 0;
gdjs.nivel0Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel0Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel0Code.GDpuertaObjects1.length = 0;
gdjs.nivel0Code.GDpuertaObjects2.length = 0;
gdjs.nivel0Code.GDNewTileMapObjects1.length = 0;
gdjs.nivel0Code.GDNewTileMapObjects2.length = 0;
gdjs.nivel0Code.GDNewTileMap2Objects1.length = 0;
gdjs.nivel0Code.GDNewTileMap2Objects2.length = 0;
gdjs.nivel0Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.nivel0Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.nivel0Code.GDFlatHeartBarObjects1.length = 0;
gdjs.nivel0Code.GDFlatHeartBarObjects2.length = 0;
gdjs.nivel0Code.GDFondoJuegoObjects1.length = 0;
gdjs.nivel0Code.GDFondoJuegoObjects2.length = 0;
gdjs.nivel0Code.GDpausa1Objects1.length = 0;
gdjs.nivel0Code.GDpausa1Objects2.length = 0;
gdjs.nivel0Code.GDVolver_9595MenuObjects1.length = 0;
gdjs.nivel0Code.GDVolver_9595MenuObjects2.length = 0;
gdjs.nivel0Code.GDrenaudarObjects1.length = 0;
gdjs.nivel0Code.GDrenaudarObjects2.length = 0;
gdjs.nivel0Code.GDcomenzarObjects1.length = 0;
gdjs.nivel0Code.GDcomenzarObjects2.length = 0;
gdjs.nivel0Code.GDpaguiprincFNAfObjects1.length = 0;
gdjs.nivel0Code.GDpaguiprincFNAfObjects2.length = 0;
gdjs.nivel0Code.GDGuardadoObjects1.length = 0;
gdjs.nivel0Code.GDGuardadoObjects2.length = 0;
gdjs.nivel0Code.GDVolver_9595Menu2Objects1.length = 0;
gdjs.nivel0Code.GDVolver_9595Menu2Objects2.length = 0;
gdjs.nivel0Code.GDTransitionObjects1.length = 0;
gdjs.nivel0Code.GDTransitionObjects2.length = 0;
gdjs.nivel0Code.GDDarkenObjects1.length = 0;
gdjs.nivel0Code.GDDarkenObjects2.length = 0;
gdjs.nivel0Code.GDPausamenuObjects1.length = 0;
gdjs.nivel0Code.GDPausamenuObjects2.length = 0;
gdjs.nivel0Code.GDVoverObjects1.length = 0;
gdjs.nivel0Code.GDVoverObjects2.length = 0;
gdjs.nivel0Code.GDGuardarObjects1.length = 0;
gdjs.nivel0Code.GDGuardarObjects2.length = 0;
gdjs.nivel0Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel0Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel0Code.GDmapaanterioObjects1.length = 0;
gdjs.nivel0Code.GDmapaanterioObjects2.length = 0;


return;

}

gdjs['nivel0Code'] = gdjs.nivel0Code;
