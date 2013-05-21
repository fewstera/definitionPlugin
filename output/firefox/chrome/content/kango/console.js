/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.Console=function(){this._consoleService=Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService)};DefinitionPlugin_kango.Console.prototype=DefinitionPlugin_kango.oop.extend(DefinitionPlugin_kango.IConsole,{_consoleService:null,log:function(a){1<arguments.length&&(a=DefinitionPlugin_kango.string.format.apply(DefinitionPlugin_kango.string,arguments));this._consoleService.logStringMessage(a)}});DefinitionPlugin_kango.console=new DefinitionPlugin_kango.Console;
