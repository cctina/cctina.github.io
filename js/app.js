(function () {
	"use strict";
	
	var menu = {
		$btnContainer: $('.nav-menu'),
		$openBtn: $('.fa-bars'),		// hamburger
		$closeBtn: $('.fa-times'),		// cross
		$navList: $('.nav-list'),		// nav-list
		$navItems: $('.nav-item'),		// nav-item
		mqLgWidth: window.matchMedia('only screen and (min-width: 720px)'),

		isBtnClosed: function() {
			return menu.$closeBtn.hasClass('hidden');
		},
		open: function () {
			// To open the menu (Menu currently closed)
			menu.$openBtn.addClass('hidden');
			menu.$closeBtn.removeClass('hidden');
			menu.$navList.addClass('nav-list--wholepage');
			menu.$navItems.addClass('nav-item--wholepage');
		},
		close: function () {
			// To close the menu (Menu currently opened)
			menu.$closeBtn.addClass('hidden');
			menu.$openBtn.removeClass('hidden');
			menu.$navList.removeClass('nav-list--wholepage');
			menu.$navItems.each(function(index, item) {
				$(item).removeClass('nav-item--wholepage');
			});
		},
		toggle: function() {
			if (menu.isBtnClosed()) {
				// To open the menu (Menu currently closed)
				menu.open();
			} else {
				// To close the menu (Menu currently opened)
				menu.close();
			}
		}

	};

	// Listener: menu button, onclick
	menu.$btnContainer.on('click', menu.toggle);
	menu.$navItems.on('click', function () {
		menu.close();
	});
	// Listener: screen size changing (media query)
	menu.mqLgWidth.addListener( function (changed) {
		if (changed.matches) {
			// the width of browser is more then 720px
			menu.close();
			menu.$navList.removeClass('nav-list--wholepage');
			menu.$navItems.each(function(index, item) {
				$(item).removeClass('nav-item--wholepage');
			});
		}
	});
	
})()