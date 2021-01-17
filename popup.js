$("#en").on("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            language: "en-US"
        });    
    });
});
  
$("#ja").on("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            language: "ja"
        });
    });
});

$("#stop").on("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            isStopClicked: true
        });
    });
});