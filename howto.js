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
  chrome.browserAction.setIcon({"path":"icon-" + "off" + ".png"});
  chrome.tabs.executeScript(null, {file: "jquery-2.1.1.min.js"}, function() {
    chrome.tabs.executeScript(null, {file: "github-off.js"});
    chrome.browserAction.setIcon(
      {
        "path": {
          19: "icon-19-" + "off" + ".png",
          38: "icon-38-" + "off" + ".png"
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
        19: "icon-19-" + "on" + ".png",
        38: "icon-38-" + "on" + ".png"
      }
    }
  );
  chrome.tabs.executeScript(null, {file: "jquery-2.1.1.min.js"}, function() {
    chrome.tabs.executeScript(null, {file: "github-on.js"});
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
