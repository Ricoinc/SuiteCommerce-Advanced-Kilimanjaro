define('overview_banner.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasLink") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + " <hr> ";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"linkUrl") || (depth0 != null ? compilerNameLookup(depth0,"linkUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkUrl","hash":{},"data":data}) : helper)))
    + "\" target=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"linkTarget") || (depth0 != null ? compilerNameLookup(depth0,"linkTarget") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkTarget","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageSource") || (depth0 != null ? compilerNameLookup(depth0,"imageSource") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageSource","hash":{},"data":data}) : helper)))
    + "\"></a> ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <img src=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageSource") || (depth0 != null ? compilerNameLookup(depth0,"imageSource") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"imageSource","hash":{},"data":data}) : helper)))
    + "\"> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ";
},"useData":true}); template.Name = 'overview_banner'; return template;});