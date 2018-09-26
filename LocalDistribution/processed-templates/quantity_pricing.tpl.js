define('quantity_pricing.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "quantity-pricing-hidden";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"quantity-pricing-expander-head\"><a class=\"quantity-pricing-expander-head-toggle "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-toggle=\"collapse\" data-target=\"#expander-body-container-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemKey") || (depth0 != null ? compilerNameLookup(depth0,"itemKey") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemKey","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\" aria-controls=\"expander-body\" data-action=\"toggle\"> "
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Quantity discounts available",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"quantity-pricing-expander-toggle-icon\"></i></a></div><div class=\"quantity-pricing-expander-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-nonprefix='true' id=\"expander-body-container-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemKey") || (depth0 != null ? compilerNameLookup(depth0,"itemKey") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemKey","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"true\"> ";
},"4":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"6":function(container,depth0,helpers,partials,data) {
    return "in";
},"8":function(container,depth0,helpers,partials,data) {
    return " <a class=\"quantity-pricing-flyout-head-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Quantity discounts available",{"name":"translate","hash":{},"data":data}))
    + " <i class=\"quantity-pricing-flyout-toggle-icon\"></i></a><div class=\"quantity-pricing-flyout-content collapsed\"> ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " <tr> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"maximumquantity") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + " </tr> ";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <td class=\"quantity-pricing-table-body-quantity\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"minimumquantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumquantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"minimumquantity","hash":{},"data":data}) : helper)))
    + " – "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maximumquantity") || (depth0 != null ? compilerNameLookup(depth0,"maximumquantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maximumquantity","hash":{},"data":data}) : helper)))
    + "</td> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"is_range") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return " <td class=\"quantity-pricing-table-body-price\">"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"price_range") : depth0)) != null ? compilerNameLookup(stack1,"min_formatted") : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"price_range") : depth0)) != null ? compilerNameLookup(stack1,"max_formatted") : stack1), depth0))
    + "</td> ";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return " <td class=\"quantity-pricing-table-body-price\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"price_formatted") || (depth0 != null ? compilerNameLookup(depth0,"price_formatted") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"price_formatted","hash":{},"data":data}) : helper)))
    + "</td> ";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <td class=\"quantity-pricing-table-body-quantity\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"minimumquantity") || (depth0 != null ? compilerNameLookup(depth0,"minimumquantity") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"minimumquantity","hash":{},"data":data}) : helper)))
    + " +</td> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"is_range") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"quantity-pricing "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showContent") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><div class=\"quantity-pricing-container\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + " <div class=\"quantity-pricing-expander-body-container\"><table><thead><tr><th class=\"quantity-pricing-table-header-quantity\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data}))
    + "</th><th class=\"quantity-pricing-table-header-price\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Price",{"name":"translate","hash":{},"data":data}))
    + "</th></tr></thead><tbody> "
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"priceSchedule") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </tbody></table></div></div></div></div>  ";
},"useData":true}); template.Name = 'quantity_pricing'; return template;});