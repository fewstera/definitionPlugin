// ==UserScript==
// @name            Definition Plugin
// @include         http://*
// @include			https://*
// @require			jquery.min.js
// ==/UserScript==

var $ = window.$.noConflict(true); // Required for Opera and IE

var API_URL = 'http://definition.org/plugin/';

var cssInjected = false;
/*
	*	Called by all the adapters when the definition button is clicked
	*	begins displaying the content.	
*/
function loadDefinitions(defineText){
	var addonBox = document.getElementById('addonDefinitionXYZ');
	if(addonBox!=null) 	
		addonBox.parentNode.removeChild(addonBox); 
	var overlayBox = document.getElementById('definitionOverlayAAAFxYts'); 
	if(overlayBox!=null)
		overlayBox.parentNode.removeChild(overlayBox);
	if(!cssInjected)
		injectCSS();
	if(defineText.trim().split(' ').length<4){
		injectDefinitionHTML(defineText);
	}else{
		//Too many words selected
	}
}


/*
	*	Loads the two CSS files for the plugin into the page	
*/
function injectCSS(){
	var details = {
        url: 'css/definePlugin.css',
        method: 'GET',
        async: true,
        contentType: 'text'
	};
	kango.xhr.send(details, function(data) {
	        var content = data.response;
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
	        addStyle(content);
	});
	cssInjected = true;
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


function injectDefinitionHTML(defineText){
	var details = {
        url: 'html/template.html',
        method: 'GET',
        async: true,
        contentType: 'text'
	};
	kango.xhr.send(details, function(data) {
	        var content = data.response;
	        var xPos, yPos;
	        if(window.getSelection().type!="None"){
		        var range = window.getSelection().getRangeAt(0);
				range.collapse(false);
				var dummy = document.createElement("span");
				range.insertNode(dummy);
				var rect = dummy.getBoundingClientRect();
				xPos = rect.left;
				yPos = rect.top+window.pageYOffset;
				content = content.replace('{POSITIONING}', '');
				content = content.replace('{ARROW-STYLE}', '');
			}else{
				content = content.replace('{POSITIONING}', 'position: fixed !important;');
				content = content.replace('{ARROW-STYLE}', ' style="display:none;"');
				xPos = 450;
				yPos = 150;
			}
			//dummy.parentNode.removeChild(dummy);
	        content = content.replace('{X-POSITION}', xPos-30);
	        content = content.replace('{Y-POSITION}', yPos-38);
	        
	        var defineReq = {
		        url: 'http://definition.org/definitionJSON.php?word=' + defineText,
		        method: 'GET',
		        async: true,
		        contentType: 'text'
		    };
		    kango.xhr.send(defineReq, function(defineJSON) {
		    	defineJSON = JSON.parse(defineJSON.response);
		    	console.log(defineJSON);
		    	
		    	content = content.replaceAll('{WORD}', defineText);
		    	content = content.replaceAll('{HYPH-WORD}', defineJSON.hyphenatedWord);
		    	
		    	var partsOfSpeach = "";
		    	for (var i = 0; i < defineJSON.partsOfSpeach.length; i++) {
		    		partsOfSpeach = partsOfSpeach + "" + defineJSON.partsOfSpeach[i] + ", "; 
		    	}
		    	
		    	partsOfSpeach = partsOfSpeach.substring(0, partsOfSpeach.length - 2);
		    	content = content.replace('{PARTS-SPEACH}', partsOfSpeach);

		    	
		    	var definitions = "";
		    	for (var i = 0; i < defineJSON.definitions.length; i++) {
		    		definitions = definitions + "\n<li>" + defineJSON.definitions[i] + "</li>"; 
		    	}	

		    	content = content.replace('{DEFINITIONS}', definitions);


		    	var synonyms = "";
		    	for (var i = 0; i < defineJSON.synonyms.length; i++) {
		    		synonyms = synonyms + "\n<li>" + defineJSON.synonyms[i] + ", </li>"; 
		    	}			    	
		    	
		    	if(synonyms == "")
		    		synonyms = "<li>Sorry no synonyms have been found for " + defineText + ".</li>";
		    	
		    	content = content.replace('{SYNONYMS}', synonyms);

	        	$("body").append(content);
	        });
	});
}


String.prototype.replaceAll = function( token, newToken, ignoreCase ) {
    var _token;
    var str = this + "";
    var i = -1;

    if ( typeof token === "string" ) {

        if ( ignoreCase ) {

            _token = token.toLowerCase();

            while( (
                i = str.toLowerCase().indexOf(
                    token, i >= 0 ? i + newToken.length : 0
                ) ) !== -1
            ) {
                str = str.substring( 0, i ) +
                    newToken +
                    str.substring( i + token.length );
            }

        } else {
            return this.split( token ).join( newToken );
        }

    }
return str;
};