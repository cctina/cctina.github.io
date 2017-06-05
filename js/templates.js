(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['work-detailitem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"workdetail-image\"><img src=\""
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<li class=\"flat-list-item workdetail-info-value workdetail-tag\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<div class=\"workdetail-content__block\">\r\n	<ul class=\"flat-list\">\r\n		<li class=\"flat-list-item workdetail-info\">\r\n			<span class=\"workdetail-info-title\">Data/Time</span> <span class=\"workdetail-info-value\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</li>\r\n		<li class=\"flat-list-item workdetail-info\">\r\n			<span class=\"workdetail-info-title\">Type</span> <span class=\"workdetail-info-value\">"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</li>\r\n		<li class=\"flat-list-item workdetail-info\">\r\n			<span class=\"workdetail-info-title\">Role</span> <span class=\"workdetail-info-value\">"
    + alias4(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"role","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</li>\r\n		<li class=\"flat-list-item workdetail-info\">\r\n			<span class=\"workdetail-info-title\">Platform</span> <span class=\"workdetail-info-value\">"
    + alias4(((helper = (helper = helpers.platform || (depth0 != null ? depth0.platform : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"platform","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</li>\r\n	</ul>\r\n</div>\r\n<div class=\"workdetail-content__block\">\r\n";
  stack1 = ((helper = (helper = helpers.images || (depth0 != null ? depth0.images : depth0)) != null ? helper : alias2),(options={"name":"images","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.images) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>	\r\n<div class=\"workdetail-content__block\">\r\n	<span class=\"workdetail-info-title\">Keywords</span> \r\n	<ul class=\"flat-list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.keywords : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\r\n</div>\r\n<div class=\"workdetail-content__block\">\r\n	<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>\r\n<div class=\"workdetail-content__block\">\r\n	<p><i class=\"fa fa-link\"></i> <a class=\"workdetail-link\" href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "</a></p>\r\n</div>";
},"useData":true});
templates['work-listitem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"work__item\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"work__img\">\r\n		<a class=\"work-link\" href=\"\"><img class=\"work-img\" src=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.path : stack1), depth0))
    + "\" alt=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.alt : stack1), depth0))
    + "\"/></a>\r\n		<a class=\"work-cover work-link work-cover-hidden\" href=\"\">\r\n			<div class=\"work-cover-content\">\r\n				<!-- <p><i class=\"fa fa-eye\"></i></p> -->\r\n				<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n			</div>\r\n		</a>\r\n	</div>\r\n	<div class=\"work__text\">\r\n		<a class=\"work-link\" href=\"\"><p class='work__text-title'>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p></a>\r\n		<ul class='work__text-desc'>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.keywords : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\r\n	</div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "			<li class=\"work__tag work__tag--basic\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.works || (depth0 != null ? depth0.works : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"works","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.works) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
})();