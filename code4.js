gdjs.nivel1Code = {};
gdjs.nivel1Code.localVariables = [];
gdjs.nivel1Code.idToCallbackMap = new Map();
gdjs.nivel1Code.GDFondoJuegoObjects1= [];
gdjs.nivel1Code.GDFondoJuegoObjects2= [];
gdjs.nivel1Code.GDNewSprite2Objects1= [];
gdjs.nivel1Code.GDNewSprite2Objects2= [];
gdjs.nivel1Code.GDbloque3Objects1= [];
gdjs.nivel1Code.GDbloque3Objects2= [];
gdjs.nivel1Code.GDNewSprite3Objects1= [];
gdjs.nivel1Code.GDNewSprite3Objects2= [];
gdjs.nivel1Code.GDNewSprite4Objects1= [];
gdjs.nivel1Code.GDNewSprite4Objects2= [];
gdjs.nivel1Code.GDpuertaObjects1= [];
gdjs.nivel1Code.GDpuertaObjects2= [];
gdjs.nivel1Code.GDNewSprite5Objects1= [];
gdjs.nivel1Code.GDNewSprite5Objects2= [];
gdjs.nivel1Code.GDbuenlogObjects1= [];
gdjs.nivel1Code.GDbuenlogObjects2= [];
gdjs.nivel1Code.GDmallogObjects1= [];
gdjs.nivel1Code.GDmallogObjects2= [];
gdjs.nivel1Code.GDFondoObjects1= [];
gdjs.nivel1Code.GDFondoObjects2= [];
gdjs.nivel1Code.GDSiguente_9595NivelObjects1= [];
gdjs.nivel1Code.GDSiguente_9595NivelObjects2= [];
gdjs.nivel1Code.GDMenu_9595principalObjects1= [];
gdjs.nivel1Code.GDMenu_9595principalObjects2= [];
gdjs.nivel1Code.GDNewSpriteObjects1= [];
gdjs.nivel1Code.GDNewSpriteObjects2= [];
gdjs.nivel1Code.GDTransitionObjects1= [];
gdjs.nivel1Code.GDTransitionObjects2= [];
gdjs.nivel1Code.GDDarkenObjects1= [];
gdjs.nivel1Code.GDDarkenObjects2= [];
gdjs.nivel1Code.GDPausamenuObjects1= [];
gdjs.nivel1Code.GDPausamenuObjects2= [];
gdjs.nivel1Code.GDVoverObjects1= [];
gdjs.nivel1Code.GDVoverObjects2= [];
gdjs.nivel1Code.GDGuardarObjects1= [];
gdjs.nivel1Code.GDGuardarObjects2= [];
gdjs.nivel1Code.GDNewSpriteObjects1= [];
gdjs.nivel1Code.GDNewSpriteObjects2= [];
gdjs.nivel1Code.GDmapaanterioObjects1= [];
gdjs.nivel1Code.GDmapaanterioObjects2= [];


gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.nivel1Code.GDNewSprite4Objects1});
gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDbuenlogObjects1Objects = Hashtable.newFrom({"buenlog": gdjs.nivel1Code.GDbuenlogObjects1});
gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.nivel1Code.GDNewSprite4Objects1});
gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDpuertaObjects1Objects = Hashtable.newFrom({"puerta": gdjs.nivel1Code.GDpuertaObjects1});
gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.nivel1Code.GDNewSprite4Objects1});
gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDmallogObjects1Objects = Hashtable.newFrom({"mallog": gdjs.nivel1Code.GDmallogObjects1});
gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.nivel1Code.GDNewSprite4Objects1});
gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDbuenlogObjects1Objects = Hashtable.newFrom({"buenlog": gdjs.nivel1Code.GDbuenlogObjects1});
gdjs.nivel1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16709356);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


};gdjs.nivel1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.nivel1Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("buenlog"), gdjs.nivel1Code.GDbuenlogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDNewSprite4Objects1Objects, gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDbuenlogObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.nivel1Code.GDbuenlogObjects1 */
{for(var i = 0, len = gdjs.nivel1Code.GDbuenlogObjects1.length ;i < len;++i) {
    gdjs.nivel1Code.GDbuenlogObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.nivel1Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("puerta"), gdjs.nivel1Code.GDpuertaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDNewSprite4Objects1Objects, gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDpuertaObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.nivel1Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("mallog"), gdjs.nivel1Code.GDmallogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDNewSprite4Objects1Objects, gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDmallogObjects1Objects, false, runtimeScene, false);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12715236);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "One Piece.mp3", true, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguente_Nivel"), gdjs.nivel1Code.GDSiguente_9595NivelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel1Code.GDSiguente_9595NivelObjects1.length;i<l;++i) {
    if ( gdjs.nivel1Code.GDSiguente_9595NivelObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel1Code.GDSiguente_9595NivelObjects1[k] = gdjs.nivel1Code.GDSiguente_9595NivelObjects1[i];
        ++k;
    }
}
gdjs.nivel1Code.GDSiguente_9595NivelObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FondoJuego"), gdjs.nivel1Code.GDFondoJuegoObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.nivel1Code.GDFondoJuegoObjects1.length === 0 ) ? 0 :gdjs.nivel1Code.GDFondoJuegoObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "linear", 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_principal"), gdjs.nivel1Code.GDMenu_9595principalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel1Code.GDMenu_9595principalObjects1.length;i<l;++i) {
    if ( gdjs.nivel1Code.GDMenu_9595principalObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel1Code.GDMenu_9595principalObjects1[k] = gdjs.nivel1Code.GDMenu_9595principalObjects1[i];
        ++k;
    }
}
gdjs.nivel1Code.GDMenu_9595principalObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.nivel1Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("buenlog"), gdjs.nivel1Code.GDbuenlogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDNewSprite4Objects1Objects, gdjs.nivel1Code.mapOfGDgdjs_9546nivel1Code_9546GDbuenlogObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.nivel1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.nivel1Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("buenlog"), gdjs.nivel1Code.GDbuenlogObjects1);
{for(var i = 0, len = gdjs.nivel1Code.GDbuenlogObjects1.length ;i < len;++i) {
    gdjs.nivel1Code.GDbuenlogObjects1[i].setPosition((( gdjs.nivel1Code.GDNewSprite4Objects1.length === 0 ) ? 0 :gdjs.nivel1Code.GDNewSprite4Objects1[0].getCenterXInScene()),(( gdjs.nivel1Code.GDNewSprite4Objects1.length === 0 ) ? 0 :gdjs.nivel1Code.GDNewSprite4Objects1[0].getCenterYInScene()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.nivel1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pausamenu"), gdjs.nivel1Code.GDPausamenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("mapaanterio"), gdjs.nivel1Code.GDmapaanterioObjects1);
{for(var i = 0, len = gdjs.nivel1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.nivel1Code.GDNewSpriteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.nivel1Code.GDPausamenuObjects1.length ;i < len;++i) {
    gdjs.nivel1Code.GDPausamenuObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.nivel1Code.GDmapaanterioObjects1.length ;i < len;++i) {
    gdjs.nivel1Code.GDmapaanterioObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pausamenu"), gdjs.nivel1Code.GDPausamenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel1Code.GDPausamenuObjects1.length;i<l;++i) {
    if ( gdjs.nivel1Code.GDPausamenuObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel1Code.GDPausamenuObjects1[k] = gdjs.nivel1Code.GDPausamenuObjects1[i];
        ++k;
    }
}
gdjs.nivel1Code.GDPausamenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pag Elegir", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mapaanterio"), gdjs.nivel1Code.GDmapaanterioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel1Code.GDmapaanterioObjects1.length;i<l;++i) {
    if ( gdjs.nivel1Code.GDmapaanterioObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel1Code.GDmapaanterioObjects1[k] = gdjs.nivel1Code.GDmapaanterioObjects1[i];
        ++k;
    }
}
gdjs.nivel1Code.GDmapaanterioObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "nivel0", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Siguente_Nivel"), gdjs.nivel1Code.GDSiguente_9595NivelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nivel1Code.GDSiguente_9595NivelObjects1.length;i<l;++i) {
    if ( gdjs.nivel1Code.GDSiguente_9595NivelObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.nivel1Code.GDSiguente_9595NivelObjects1[k] = gdjs.nivel1Code.GDSiguente_9595NivelObjects1[i];
        ++k;
    }
}
gdjs.nivel1Code.GDSiguente_9595NivelObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.nivel1Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pausamenu"), gdjs.nivel1Code.GDPausamenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("mapaanterio"), gdjs.nivel1Code.GDmapaanterioObjects1);
{for(var i = 0, len = gdjs.nivel1Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.nivel1Code.GDNewSpriteObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.nivel1Code.GDmapaanterioObjects1.length ;i < len;++i) {
    gdjs.nivel1Code.GDmapaanterioObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.nivel1Code.GDPausamenuObjects1.length ;i < len;++i) {
    gdjs.nivel1Code.GDPausamenuObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.nivel1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nivel1Code.GDFondoJuegoObjects1.length = 0;
gdjs.nivel1Code.GDFondoJuegoObjects2.length = 0;
gdjs.nivel1Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel1Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel1Code.GDbloque3Objects1.length = 0;
gdjs.nivel1Code.GDbloque3Objects2.length = 0;
gdjs.nivel1Code.GDNewSprite3Objects1.length = 0;
gdjs.nivel1Code.GDNewSprite3Objects2.length = 0;
gdjs.nivel1Code.GDNewSprite4Objects1.length = 0;
gdjs.nivel1Code.GDNewSprite4Objects2.length = 0;
gdjs.nivel1Code.GDpuertaObjects1.length = 0;
gdjs.nivel1Code.GDpuertaObjects2.length = 0;
gdjs.nivel1Code.GDNewSprite5Objects1.length = 0;
gdjs.nivel1Code.GDNewSprite5Objects2.length = 0;
gdjs.nivel1Code.GDbuenlogObjects1.length = 0;
gdjs.nivel1Code.GDbuenlogObjects2.length = 0;
gdjs.nivel1Code.GDmallogObjects1.length = 0;
gdjs.nivel1Code.GDmallogObjects2.length = 0;
gdjs.nivel1Code.GDFondoObjects1.length = 0;
gdjs.nivel1Code.GDFondoObjects2.length = 0;
gdjs.nivel1Code.GDSiguente_9595NivelObjects1.length = 0;
gdjs.nivel1Code.GDSiguente_9595NivelObjects2.length = 0;
gdjs.nivel1Code.GDMenu_9595principalObjects1.length = 0;
gdjs.nivel1Code.GDMenu_9595principalObjects2.length = 0;
gdjs.nivel1Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel1Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel1Code.GDTransitionObjects1.length = 0;
gdjs.nivel1Code.GDTransitionObjects2.length = 0;
gdjs.nivel1Code.GDDarkenObjects1.length = 0;
gdjs.nivel1Code.GDDarkenObjects2.length = 0;
gdjs.nivel1Code.GDPausamenuObjects1.length = 0;
gdjs.nivel1Code.GDPausamenuObjects2.length = 0;
gdjs.nivel1Code.GDVoverObjects1.length = 0;
gdjs.nivel1Code.GDVoverObjects2.length = 0;
gdjs.nivel1Code.GDGuardarObjects1.length = 0;
gdjs.nivel1Code.GDGuardarObjects2.length = 0;
gdjs.nivel1Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel1Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel1Code.GDmapaanterioObjects1.length = 0;
gdjs.nivel1Code.GDmapaanterioObjects2.length = 0;

gdjs.nivel1Code.eventsList1(runtimeScene);
gdjs.nivel1Code.GDFondoJuegoObjects1.length = 0;
gdjs.nivel1Code.GDFondoJuegoObjects2.length = 0;
gdjs.nivel1Code.GDNewSprite2Objects1.length = 0;
gdjs.nivel1Code.GDNewSprite2Objects2.length = 0;
gdjs.nivel1Code.GDbloque3Objects1.length = 0;
gdjs.nivel1Code.GDbloque3Objects2.length = 0;
gdjs.nivel1Code.GDNewSprite3Objects1.length = 0;
gdjs.nivel1Code.GDNewSprite3Objects2.length = 0;
gdjs.nivel1Code.GDNewSprite4Objects1.length = 0;
gdjs.nivel1Code.GDNewSprite4Objects2.length = 0;
gdjs.nivel1Code.GDpuertaObjects1.length = 0;
gdjs.nivel1Code.GDpuertaObjects2.length = 0;
gdjs.nivel1Code.GDNewSprite5Objects1.length = 0;
gdjs.nivel1Code.GDNewSprite5Objects2.length = 0;
gdjs.nivel1Code.GDbuenlogObjects1.length = 0;
gdjs.nivel1Code.GDbuenlogObjects2.length = 0;
gdjs.nivel1Code.GDmallogObjects1.length = 0;
gdjs.nivel1Code.GDmallogObjects2.length = 0;
gdjs.nivel1Code.GDFondoObjects1.length = 0;
gdjs.nivel1Code.GDFondoObjects2.length = 0;
gdjs.nivel1Code.GDSiguente_9595NivelObjects1.length = 0;
gdjs.nivel1Code.GDSiguente_9595NivelObjects2.length = 0;
gdjs.nivel1Code.GDMenu_9595principalObjects1.length = 0;
gdjs.nivel1Code.GDMenu_9595principalObjects2.length = 0;
gdjs.nivel1Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel1Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel1Code.GDTransitionObjects1.length = 0;
gdjs.nivel1Code.GDTransitionObjects2.length = 0;
gdjs.nivel1Code.GDDarkenObjects1.length = 0;
gdjs.nivel1Code.GDDarkenObjects2.length = 0;
gdjs.nivel1Code.GDPausamenuObjects1.length = 0;
gdjs.nivel1Code.GDPausamenuObjects2.length = 0;
gdjs.nivel1Code.GDVoverObjects1.length = 0;
gdjs.nivel1Code.GDVoverObjects2.length = 0;
gdjs.nivel1Code.GDGuardarObjects1.length = 0;
gdjs.nivel1Code.GDGuardarObjects2.length = 0;
gdjs.nivel1Code.GDNewSpriteObjects1.length = 0;
gdjs.nivel1Code.GDNewSpriteObjects2.length = 0;
gdjs.nivel1Code.GDmapaanterioObjects1.length = 0;
gdjs.nivel1Code.GDmapaanterioObjects2.length = 0;


return;

}

gdjs['nivel1Code'] = gdjs.nivel1Code;
