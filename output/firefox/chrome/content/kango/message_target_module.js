/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.MessageTargetModule=function(){};
DefinitionPlugin_kango.MessageTargetModule.prototype.init=function(e){var a={};e.addMessageListener=function(b,d){if("undefined"!=typeof d.call&&"undefined"!=typeof d.apply){a[b]=a[b]||[];for(var c=0;c<a[b].length;c++)if(a[b][c]==d)return!1;a[b].push(d);return!0}return!1};e.removeMessageListener=function(b,d){if("undefined"!=typeof a[b])for(var c=0;c<a[b].length;c++)if(a[b][c]==d)return a[b].splice(c,1),!0;return!1};e.removeAllMessageListeners=function(){a={}};e.addEventListener("message",function(b){var d=b.name;
if("undefined"!=typeof a[d])for(var c=0;c<a[d].length;c++)a[d][c](b)})};"undefined"!=typeof DefinitionPlugin_kango&&"undefined"!=typeof DefinitionPlugin_kango.registerModule&&DefinitionPlugin_kango.registerModule(DefinitionPlugin_kango.MessageTargetModule);
