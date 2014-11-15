var min = 1;
var max = 5;
var current = min;

function updateIcon() {
  console.log("icons.js " + current);

  // chrome.browserAction.setIcon({path:"icon" + current + ".png"});
  current++;

  if (current > max)
    current = min;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
