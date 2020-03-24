let bt3debug = false;
function debugLog(message) {
  bt3debug && console.log(message)
}

browser.runtime.onMessage.addListener(async (message, sender) => {
    debugLog("got messsage", message);
    let currentTab = (await browser.tabs.query({currentWindow: true, active: true}))[0];
    debugLog(currentTab);

    if (message.scrollTab=="up") {
      debugLog("up");
      let leftTab = (await browser.tabs.query({index:currentTab.index-1}))[0];
      debugLog(leftTab);
      browser.tabs.update(leftTab.id, {active: true});
    }

    if (message.scrollTab=="down") {
      debugLog("down");
      let rightTab = (await browser.tabs.query({index:currentTab.index+1}))[0];
      debugLog(rightTab);
      browser.tabs.update(rightTab.id, {active: true})
  }
});
