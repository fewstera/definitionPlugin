// ==UserScript==
// @name            Definition Plugin
// @include         http://*
// @include			https://*
// @require			jquery.min.js
// ==/UserScript==

var API_URL = 'http://localhost/definition';


//This is called by the onclick of the menu item
//The contect menu is populated in *browser*/loadMenu.js
function loadDefinitions(defineText){

	injectCSS();

	if(defineText.trim().split(' ').length<4){
		alert('Loading your definiton of ' + defineText + ' right now! Nigger:' + defineText.trim().split(' ').length);
	}else{
		//Too many words selected
	}
}


function injectCSS(){
	var details = {
        url: 'css/definePlugin.css',
        method: 'GET',
        async: true,
        contentType: 'text'
	};
	kango.xhr.send(details, function(data) {
	        var content = data.response;
	        kango.console.log(content);
	        addStyle(content);
	});
	
	var details = {
        url: 'css/defineFonts.css',
        method: 'GET',
        async: true,
        contentType: 'text'
	};
	kango.xhr.send(details, function(data) {
	        var content = data.response;
		    kango.console.log(content);
	        addStyle(content);
	});
}

function addStyle(cssCode, id) {
    if (id && document.getElementById(id))
        return;
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
    if (id)
        styleElement.id = id;
    if (styleElement.styleSheet){
        styleElement.styleSheet.cssText = cssCode;
    }else{
        styleElement.appendChild(document.createTextNode(cssCode));
    }
    var father = null;
    var heads = document.getElementsByTagName("head");
    if (heads.length>0){
        father = heads[0];
    }else{
        if (typeof document.documentElement!='undefined'){
            father = document.documentElement
        }else{
            var bodies = document.getElementsByTagName("body");
            if (bodies.length>0){
                father = bodies[0];
            }
        }
    }
    if (father!=null)
        father.appendChild(styleElement);
}