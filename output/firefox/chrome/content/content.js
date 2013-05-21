// ==UserScript==
// @name            Definition Plugin
// @include         http://*
// @include			https://*
// @require			jquery.min.js
// ==/UserScript==

//This is called by the onclick of the menu item
//The contect menu is populated in *browser*/loadMenu.js
function loadDefinitions(defineText){
	alert('Loading your definiton of ' + defineText + ' right now!');
}