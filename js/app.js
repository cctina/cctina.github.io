(function () {
	"use strict";
	
	// Data
	// (image path: relative path to the html file)
	var data = {
		"PROJECT_TYPE": {
			"PERSONAL": "Personal Project",
			"TEAM": "Team Works",
			"WIREFRAME": "Wireframing"
		},
		"works": [
			{
		        "id": 1,
		        "image": [
		        	{ "path": "asset/images/dailycss/dailycss_01.jpg", "alt": "Day 1" },
		        	{ "path": "asset/images/dailycss/dailycss_02.jpg", "alt": "Day 2" },
		        	{ "path": "asset/images/dailycss/dailycss_03.jpg", "alt": "Day 3" },
		        	{ "path": "asset/images/dailycss/dailycss_04_1.jpg", "alt": "Day 4" },
		        ],
		        "datetime": "2017-01-15",
		        "title": "Daily CSS Images",
		        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
		        "type": "Peraonal Project",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": ["All"]
		    },
		    {
		        "id": 2,
		        "image": [ 
		        	{ "path": "asset/images/dailycss/dailycss_02.jpg", "alt": "#2" }
		        ],
		        "datetime": "2017-03-08",
		        "title": "JavaScript30",
		        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		        "category": "Team Works",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": ["Backend developer"]
		    },
		    {
		        "id": 3,
		        "image": [
		        	{ "path": "asset/images/dailycss/dailycss_03.jpg", "alt": "#3" }
		        ],
		        "datetime": "2017-01-15",
		        "title": "Daily CSS Images",
		        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		        "type": "Peraonal Project",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": ["Front-end developer", "Wireframing"]
		    },
		    {
		        "id": 4,
		        "image": [
		        	{ "path": "asset/images/dailycss/dailycss_04_1.jpg", "alt": "#4" }
		        ],
		        "datetime": "2017-03-08",
		        "title": "JavaScript30",
		        "description": "......",
		        "category": "Team Works",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": ["All"]
		    },
		    {
		        "id": 5,
		        "image": [
		        	{ "path": "asset/images/dailycss/dailycss_05.jpg", "alt": "#5" }
		        ],
		        "datetime": "2017-01-15",
		        "title": "Daily CSS Images",
		        "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
		        "type": "Peraonal Project",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": ["Front-end developer"]
		    },
		    {
		        "id": 6,
		        "image": [
		        	{ "path": "asset/images/dailycss/dailycss_06_animation.gif", "alt": "#6" }
		        ],
		        "datetime": "2017-03-08",
		        "title": "JavaScript30",
		        "description": "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
		        "category": "Team Works",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": ["Wireframing"]
		    },
		    {
		        "id": 7,
		        "image": [
		        	{ "path": "asset/images/dailycss/dailycss_07.jpg", "alt": "#7" }
		        ],
		        "datetime": "2017-03-08",
		        "title": "JavaScript30",
		        "description": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.",
		        "category": "Team Works",
		        "keywords": ["HTML", "CSS", "JS", "SASS"],
		        "platform": ["responsive"],
		        "role": ["Wireframing"]
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
			template: Handlebars.templates['work-listitem'],
			renderItems: function () {
				var result = work.listpage.template(data);
				// $('.xxx').get(0) is wrong
				$('.work__container').html(result);
			},
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
				$(`.work__item[data-id='${id}']`).find('.work-cover').removeClass('work-cover-hidden');
				console.log('current target id = ' + id);
				console.log(`.work__item[data-id='${id}']`);
			},
			itemOnmouseleaveHandler: function (e) {
				let target = e.currentTarget;
				let id = target.dataset['id'];
				$(`.work__item[data-id='${id}']`).find('.work-cover').addClass('work-cover-hidden');
			},
			load: function () {
				if (work.listpage.template) {
					work.listpage.renderItems();
				}
				if ( $('#work') ) {
					this.hideDetailArea();
				}
				if ( $('.work-link') ) {
					$('.work-link').on('click', function (e) {
						work.listpage.gotoWorkOnclickHandler(e);
					});
				}
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