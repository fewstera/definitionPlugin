safari.application.addEventListener("contextmenu", handleContextMenu, false);
function handleContextMenu(event) {
    var query = event.userInfo;
    if(query!=null && query!="" && query!=" "){
	    var wordsCount = query.trim().split(' ').length;
		if(wordsCount>0 && wordsCount<4){
			event.contextMenu.appendContextMenuItem("defineRun", "Define");
			kango.console.log('Im adding that shit "' + query + '"');
		}
	}
}

safari.application.addEventListener("command", performCommand, false);
function performCommand(event) {
	kango.console.log(event);
    if (event.command === "defineRun") {
		kango.browser.tabs.getCurrent(function(tab) {
			tab.dispatchMessage('defineMessage', event.userInfo);
		});
    }
}