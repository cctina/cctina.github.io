(function () {
	"use strict";
	
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
			renderItems: function (e) {
				// data: from data.json file
				let result = work.listpage.template(data);
				// $('.xxx').get(0) is wrong
				$('.work__container').html(result);
			},
			hideDetailArea: function () {
				$('#workDetail').addClass('hidden');
			},
			gotoWorkOnclickHandler: function (e) {
				e.preventDefault();
				// Get item root node & id
				let $targetItem = $(e.currentTarget).parents('.work__item');
				let work_id = $targetItem.data('id');
				work.detailpage.currentItem.setId(work_id);

				// Set template url
				let work_url = e.currentTarget.href;
				// work_url = work_url.replace(/index/i, 'work_detail'); // index.html >> work_detail.html

				$('#workDetail').removeClass('hidden');
				$('#workDetail').children().remove();
				$('#workDetail').load(work_url + ' #project', function (response, status, xhr) {
					let work_id = work.detailpage.currentItem.getId();
					if (work_id && work_id > 0) {
						work.detailpage.init(work_id); 	
					}
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
				// console.log('current target id = ' + id);
			},
			itemOnmouseleaveHandler: function (e) {
				let target = e.currentTarget;
				let id = target.dataset['id'];
				$(`.work__item[data-id='${id}']`).find('.work-cover').addClass('work-cover-hidden');
			},
			imageloadOnerrorHandler: function (e) {
				// message
				let $rootNode = $(e.currentTarget).parents('.work__item');
				let id = $rootNode.data('id');
				console.info('Failed to load the image of item #' + id);
				// set style
				$(e.currentTarget).parents('.work__img').addClass('work__img--default');
			},
			load: function () {
				if (work.listpage.template) {
					work.listpage.renderItems();
				}
				if ( $('#work') ) {
					this.hideDetailArea();
				}
				if ( $('.work-img') ) {
					// Set style if image-loading fails
					$('.work-img').on('error', function (e) {
						work.listpage.imageloadOnerrorHandler(e);
					});
				}
				if ( $('.work-link') ) {
					$('.work-link').on('click', function (e) {
						work.listpage.gotoWorkOnclickHandler(e);
					});
				}
				let $workItem = $('.work__item');
				if ( $workItem ) {
					$workItem.on('mouseover', function (e) {
						work.listpage.itemOnmouseoverHandler(e);
					});
					$workItem.on('mouseleave', function (e) {
						work.listpage.itemOnmouseleaveHandler(e);
					});
				}
			}
		},

		detailpage: {
			template: Handlebars.templates['work-detailitem'],
			currentItem: {
				id: 0,
				setId: function (id) {
					this.id = id;
				},
				getId: function () {
					return this.id;
				}
			},
			render: function (id) {
				var index = id - 1;
				var result = work.detailpage.template(data.works[index]);
				if (result) {
					$('.workdetail__container').empty();
					$('.workdetail__container').html(result);
				}
			},
			init: function (id) {
				work.detailpage.render(id);
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