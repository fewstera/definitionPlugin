/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.BackgroundScriptEngine=function(){};
DefinitionPlugin_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(a){var b=this;this._sandbox=DefinitionPlugin_kango.lang.createHTMLSandbox("background.html",function(c){b._initScripts(c,a)})},getContext:function(){return this._window},_initScripts:function(a,b){this._window=a;a.kango=b;var c=a.document,d=DefinitionPlugin_kango.getExtensionInfo().background_scripts;if("undefined"!=typeof d){var e=0,f=function(){var a=c.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",DefinitionPlugin_kango.io.getExtensionFileUrl(d[e]));
var b=function(){e++;e<d.length&&f()};"undefined"!=typeof a.onreadystatechange?a.onreadystatechange=function(){"complete"==a.readyState&&b()}:a.onload=b;c.body.appendChild(a)};f()}}};DefinitionPlugin_kango.BackgroundScriptModule=function(){};DefinitionPlugin_kango.BackgroundScriptModule.prototype.init=function(a){DefinitionPlugin_kango.backgroundScript=new DefinitionPlugin_kango.BackgroundScriptEngine;DefinitionPlugin_kango.addEventListener(DefinitionPlugin_kango.event.READY,function(){DefinitionPlugin_kango.backgroundScript.init(a)})};DefinitionPlugin_kango.registerModule(DefinitionPlugin_kango.BackgroundScriptModule);
