(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['work-listitem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"work__item\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"work__img\">\r\n		<a class=\"work-link\" href=\"\"><img class=\"work-img\" src=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.path : stack1), depth0))
    + "\" alt=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.alt : stack1), depth0))
    + "\"/></a>\r\n		<a class=\"work-cover work-link work-cover-hidden\" href=\"\">\r\n			<div class=\"work-cover-content\">\r\n				<!-- <p><i class=\"fa fa-eye\"></i></p> -->\r\n				<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n			</div>\r\n		</a>\r\n	</div>\r\n	<div class=\"work__text\">\r\n		<a class=\"work-link\" href=\"\"><p class='work__text-title'>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p></a>\r\n		<ul class='work__text-desc'>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.keywords : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\r\n	</div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "			<li class=\"work__tag work__tag-'-basic\">"
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