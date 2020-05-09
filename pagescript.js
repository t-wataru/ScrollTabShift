let bt3debug = false;
function debugLog(message) {
  bt3debug && console.log(message)
}

window.onwheel=wheelEvent=>{
  debugLog(wheelEvent);
  if(!(wheelEvent.buttons == 2 || wheelEvent.shiftKey)) {
    return;
  }

  //down
  if(wheelEvent.deltaY > 0){
    debugLog("down");
    browser.runtime.sendMessage({scrollTab: "down"});
  }

  //up
  if(wheelEvent.deltaY < 0){
    debugLog("up");
    browser.runtime.sendMessage({scrollTab: "up"});
  }
}