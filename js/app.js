(function () {
	"use strict";
	
	// Data
	var data = {
		"PROJECT_TYPE": {
			"PERSONAL": "Personal Project",
			"TEAM": "Team Works",
			"WIREFRAME": "Wireframing"
		},
		"work": [
			{
		        "id": 1,
		        "image": "../asset/images/dailycss/dailycss_01.jpg",
		        "datetime": "2017-01-15",
		        "title": "Daily CSS Images",
		        "description": "......",
		        "type": "Peraonal Project",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": "All"
		    },
		    {
		        "id": 2,
		        "image": "../asset/images/dailycss/dailycss_02.jpg",
		        "datetime": "2017-03-08",
		        "title": "JavaScript30",
		        "description": "......",
		        "category": "Team Works",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": "All"
		    }
		]
	}

	// Application
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

	// Load page 'work' contents
	var work = {
		listpage: {
			hideDetailArea: function () {
				$('#workDetail').addClass('hidden');
			},
			gotoWorkOnclickHandler: function (e) {
				e.preventDefault();
				let work_url = e.currentTarget.href;
				work_url = work_url.replace(/index/i, 'work_detail');
				let work_id = e.currentTarget.id;
				// $('#main').children('section')[1].remove();
				$('#workDetail').removeClass('hidden');
				$('#workDetail').children().remove();
				$('#workDetail').load(work_url + ' #project', function () {
					$('html, body').animate({
						scrollTop: $('#workDetail').offset().top
					}, 1000);
					// $('#workDetail')[0].scrollIntoView({
					// 	behavior: "smooth", // or "auto" or "instant"
					// 	block: "start" 		// or "end"
					// });
				});
			},
			itemOnmouseoverHandler: function (e) {
				let target = e.currentTarget;
				let id = target.dataset['id'];
				// $(target).children('.work-cover').get(0).removeClass('hidden');
				// $('.work-cover').removeClass('hidden');
				// $('.work-cover').removeClass('work-cover-hidden');
				$(`.work__item[data-id='${id}']`).find('.work-cover').removeClass('work-cover-hidden');
				console.log('current target id = ' + id);
				console.log(`.work__item[data-id='${id}']`);
			},
			itemOnmouseleaveHandler: function (e) {
				let target = e.currentTarget;
				let id = target.dataset['id'];
				// $(target).children('.work-cover').get(0).addClass('hidden');
				// $('.work-cover').addClass('hidden');
				// $('.work-cover').addClass('work-cover-hidden');
				$(`.work__item[data-id='${id}']`).find('.work-cover').addClass('work-cover-hidden');
			},
			load: function () {
				if ( $('#work') ) {
					this.hideDetailArea();
				}
				if ( $('.work-link') ) {
					$('.work-link').on('click', function (e) {
						work.listpage.gotoWorkOnclickHandler(e);
					});
				}
				// var $workImg = $('.work__img');
				// if ( $workImg ) {
				// 	$workImg.on('mouseover', function (e) {
				// 		work.listpage.itemOnmouseoverHandler(e);
				// 	});
				// 	$workImg.on('mouseleave', function (e) {
				// 		work.listpage.itemOnmouseleaveHandler(e);
				// 	});
				// }
				var $workItem = $('.work__item');
				if ( $workItem ) {
					$workItem.on('mouseover', function (e) {
						work.listpage.itemOnmouseoverHandler(e);
					});
					$workItem.on('mouseleave', function (e) {
						work.listpage.itemOnmouseleaveHandler(e);
					});
				}
			}
		}
	};

	// Load page contents
	var content = {
		$container: $('#container'),
		pageLoad: function (e) {
			e.preventDefault();
			let url = e.target.href;

			$('.nav-item .current').removeClass('current');
			$(e.target).addClass('current');
			
			content.$container.children().remove();
			content.$container.load(url + ' #main', function () {
				window.scrollTo(0, 0);
				$('.pagelink').on('click', function (e) {
					content.pageLoad(e);
				});

				// for work page
				work.listpage.load();

				// return $(this);
			// }).hide().fadeIn('slow');
			}).css('opacity', '0').animate({
					opacity: 1
			}, 1000);
		},
		init: function () {
			$(window).load(content.pageLoad);
		}
	}

	// Listener: menu button, onclick
	menu.$btnContainer.on('click', menu.toggle);
	menu.$navItems.children('a').on('click', function (e) {
		menu.close();
		content.pageLoad(e);
	});
	// Listener: onclick -- for any inner page links
	$('.pagelink').on('click', function (e) {
		content.pageLoad(e);
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

}());