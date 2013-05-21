﻿/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.ui.BrowserButton = function(details) {
	if(this._getContainerElem() == null) {
		this._insertButton();
	}
	DefinitionPlugin_kango.ui.Button.call(this, details);
};

DefinitionPlugin_kango.ui.BrowserButton.prototype = DefinitionPlugin_kango.oop.extend(DefinitionPlugin_kango.ui.Button, {

	_buttonId: 'DefinitionPlugin_kango-ui-browserButton',
	_containerId: 'DefinitionPlugin_kango-ui-browserButton-container',

	_getContainerElem: function() {
		return document.getElementById(this._containerId);
	},

	_insertButton: function() {
		if(DefinitionPlugin_kango.systemStorage.getItem('ui.button_inserted') == null) {
			DefinitionPlugin_kango.systemStorage.setItem('ui.button_inserted', true);
			var afterId = 'search-container';
			var navBar = document.getElementById('nav-bar');
			var curSet = navBar.currentSet.split(',');
			if(curSet.indexOf(this._containerId) == -1) {
				var pos = curSet.indexOf(afterId) + 1 || curSet.length;
				navBar.currentSet = curSet.slice(0, pos).concat(this._containerId).concat(curSet.slice(pos)).join(',');
				navBar.setAttribute('currentset', navBar.currentSet);
				document.persist(navBar.id, 'currentset');
				try {
					BrowserToolboxCustomizeDone(true);
				}
				catch(e) {
				}
			}
		}
	}
});