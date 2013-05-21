chrome.contextMenus.create({"title": 'Define', "contexts":['selection'],
                                       "onclick": loadChromeDefinitions});

function loadChromeDefinitions(aEvent){
	chrome.tabs.getSelected(null, function(tab) {
	  chrome.tabs.sendMessage(tab.id, {defineText: aEvent.selectionText});
	});
}