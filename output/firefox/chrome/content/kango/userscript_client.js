/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.UserscriptEngineClient=function(){};DefinitionPlugin_kango.UserscriptEngineClient.prototype={run:function(c,b,a){var d=this;DefinitionPlugin_kango.invokeAsync("kango.userscript.getScripts",c.document.URL,b,a,function(a){for(var b in a)a.hasOwnProperty(b)&&d.executeScript(c,a[b].join("\n\n"))})},executeScript:function(c,b){try{var a=new DefinitionPlugin_kango.UserscriptApi(c);a.kango=DefinitionPlugin_kango;DefinitionPlugin_kango.lang.evalInSandbox(c,a,b)}catch(d){DefinitionPlugin_kango.console.log("US: "+d.message+"\n"+d.stack||"")}}};DefinitionPlugin_kango.UserscriptApi=function(){};
DefinitionPlugin_kango.UserscriptApi.prototype={};
