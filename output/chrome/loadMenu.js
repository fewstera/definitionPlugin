// ==UserScript==
// @name            Load the right click menu
// @include         http://*
// @include			https://*
// @require			jquery.min.js
// ==/UserScript==

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	loadDefinitions(request.defineText)
});