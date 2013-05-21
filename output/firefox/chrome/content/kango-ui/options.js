/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.ui.OptionsPage=function(){var a=DefinitionPlugin_kango.getExtensionInfo();if("undefined"!=typeof a.options_page){var b=this._optionsUrl=DefinitionPlugin_kango.io.getExtensionFileUrl(a.options_page).toLowerCase();DefinitionPlugin_kango.browser.addEventListener("DOMContentLoaded",function(a){0==a.url.toLowerCase().indexOf(b)&&(a.window.kango=DefinitionPlugin_kango)})}};
DefinitionPlugin_kango.ui.OptionsPage.prototype=DefinitionPlugin_kango.oop.extend(DefinitionPlugin_kango.ui.IOptionsPage,{_optionsUrl:"",open:function(a){if(""!=this._optionsUrl){var b=this._optionsUrl;"undefined"!=typeof a&&(b+="#"+a);DefinitionPlugin_kango.browser.tabs.create({url:b,focused:!0,reuse:!0});return!0}return!1}});DefinitionPlugin_kango.ui.optionsPage=new DefinitionPlugin_kango.ui.OptionsPage;
