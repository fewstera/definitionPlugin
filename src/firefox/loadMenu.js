// ==UserScript==
// @name            Load the right click menu
// @include         http://*
// @include			https://*
// @require			jquery.min.js
// ==/UserScript==

if (!("contextMenu" in document.documentElement &&
      "HTMLMenuItemElement" in window)) return;

var body = document.body;
body.addEventListener("contextmenu", initMenu, false);

var menu = body.appendChild(document.createElement("menu"));
menu.outerHTML = '<menu id="definition-plugin" type="context">\
                    <menuitem label="Define"\></menuitem>\
                  </menu>';
document.querySelector("#definition-plugin menuitem")
        .addEventListener("click", loadFFDefinitions, false);

function initMenu(aEvent) {
  var item = document.querySelector("#definition-plugin menuitem");
  
  var totalSelection = $.trim(window.getSelection());
  if(totalSelection.split(' ').length<5){
    body.setAttribute("contextmenu", "definition-plugin");
    item.setAttribute("defineText", $.trim(window.getSelection()));
  } else {
    body.removeAttribute("contextmenu");
    item.removeAttribute("defineText");
  }
}

function loadFFDefinitions(aEvent){
	var defineText = aEvent.target.getAttribute("defineText");
	loadDefinitions(defineText);
}