// ==UserScript==
// @name            Opera adapter for context menus
// @include         http://*
// @include			https://*
// @require			jquery.min.js
// ==/UserScript==

kango.addMessageListener('defineMessage', function(event) {
	loadDefinitions(event.data);
});