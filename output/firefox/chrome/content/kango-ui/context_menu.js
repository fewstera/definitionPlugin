/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
DefinitionPlugin_kango.ui.ContextMenuItem=function(a){this.superclass.apply(this,arguments);this.init(a)};
DefinitionPlugin_kango.ui.ContextMenuItem.prototype=DefinitionPlugin_kango.oop.extend(DefinitionPlugin_kango.ui.ContextMenuItemBase,{init:function(a){this.addItem("kango-item1",a.caption,a.context||"all")},addItem:function(a,d,e){var c=document.getElementById("contentAreaContextMenu"),b=document.createElement("menuitem");b.setAttribute("id",a);b.setAttribute("label",d);b.addEventListener("command",DefinitionPlugin_kango.lang.bind(function(a){var b=document.popupNode;this.fireEvent(this.event.CLICK,{srcUrl:b.src,linkUrl:b.href});a.preventDefault()},this),!1);c.appendChild(b);
c.addEventListener("popupshowing",function(){var b=document.getElementById(a);null!=b&&"image"==e&&(b.hidden=!gContextMenu.onImage)},!1)}});DefinitionPlugin_kango.ContextMenuModule=function(){};DefinitionPlugin_kango.ContextMenuModule.prototype.init=function(){var a=DefinitionPlugin_kango.getExtensionInfo();"undefined"!=typeof a.context_menu_item&&(DefinitionPlugin_kango.ui.contextMenuItem=new DefinitionPlugin_kango.ui.ContextMenuItem(a.context_menu_item))};DefinitionPlugin_kango.registerModule(DefinitionPlugin_kango.ContextMenuModule);
