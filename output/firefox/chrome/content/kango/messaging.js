/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.MessageRouter=function(){};DefinitionPlugin_kango.MessageRouter.prototype={_onMessage:function(a){this.onmessage(a)},onmessage:function(){},dispatchMessage:function(a,b){var c={name:a,data:b,origin:"background",target:DefinitionPlugin_kango,source:DefinitionPlugin_kango},d=this;window.setTimeout(function(){d.onmessage(c)},1);return!0}};
