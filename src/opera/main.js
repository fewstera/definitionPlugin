//
// The background process (e.g. index.html)
//

if (opera.contexts.menu) {
  var menu = opera.contexts.menu;
  
  // Create a menu item properties object
  var itemProps = {
    title: 'Define',
    contexts: ['selection'],
  }

  // Create a menu item with the specified properties
  var item = menu.createItem(itemProps);
  // Add the menu item to the context menu
  menu.addItem(item);
  
  // Open a new tab when clicked
  item.onclick = function(event) {
	kango.browser.tabs.getCurrent(function(tab) {
		tab.dispatchMessage('defineMessage', event.selectionText);
	});

  };
}