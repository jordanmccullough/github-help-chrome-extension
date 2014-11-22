// Global variables for isolated world
var iconActive = false;

function toggle(){
  // Show "on" icon when showing the help
  if(iconActive == false){
    activate();
  } else{
    deactivate();
  }
}

function deactivate(){
  iconActive = false;
  chrome.tabs.executeScript(null, {file: "assets/jquery-2.1.1.min.js"}, function() {
    chrome.tabs.executeScript(null, {file: "deactivate.js"});
    chrome.browserAction.setIcon(
      {
        "path": {
          19: "images/icon-19-" + "off" + ".png",
          38: "images/icon-38-" + "off" + ".png"
        }
      }
    );
  });
}

function activate(){
  iconActive = true;
  chrome.browserAction.setIcon(
    {
      "path": {
        19: "images/icon-19-" + "on" + ".png",
        38: "images/icon-38-" + "on" + ".png"
      }
    }
  );
  chrome.tabs.executeScript(null, {file: "assets/jquery-2.1.1.min.js"}, function() {
    chrome.tabs.executeScript(null, {file: "activate.js"});
  });
}

//////////////////////////////////////
// Tab event bindings
//////////////////////////////////////

chrome.tabs.onUpdated.addListener(function(){
  deactivate();
});

chrome.tabs.onRemoved.addListener(function(){
  deactivate();
});

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle();
});
