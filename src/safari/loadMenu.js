// ==UserScript==
// @name            Safari Adapter
// @include         http://*
// @include			https://*
// @require			jquery.min.js
// ==/UserScript==

document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event) {
	kango.console.log(window.getSelection().toString());
    safari.self.tab.setContextMenuEventUserInfo(event, window.getSelection().toString());
}


kango.addMessageListener('defineMessage', function(event) {
	loadDefinitions(event.data);
});