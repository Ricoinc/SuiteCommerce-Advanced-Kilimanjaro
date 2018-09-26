define('requestquote_wizard_module_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For immediate assistance call us at <strong>$(0)</strong> or email us at <a href=\"mailto:$(1)\">$(1)</a>",(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data}))
    + " ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return " "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimer","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"requestquote-wizard-module-confirmation\"><h2 class=\"requestquote-wizard-module-confirmation-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Thank you!",{"name":"translate","hash":{},"data":data}))
    + "</h2><p class=\"requestquote-wizard-module-confirmation-body\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Your Quote Request <a href=\"/quotes/$(0)\">#$(1)</a> was successfully placed.",(depth0 != null ? compilerNameLookup(depth0,"quoteId") : depth0),(depth0 != null ? compilerNameLookup(depth0,"quoteTranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </p><p class=\"requestquote-wizard-module-confirmation-body\"> "
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"contactBusinessDaysMessage") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </p><p class=\"requestquote-wizard-module-confirmation-body\"> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </p><a class=\"requestquote-wizard-module-confirmation-new-quote\" href=\"/request-a-quote\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Request a new Quote",{"name":"translate","hash":{},"data":data}))
    + "</a><a class=\"requestquote-wizard-module-confirmation-continue\" href=\"/quotes\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"See Your Quotes",{"name":"translate","hash":{},"data":data}))
    + "</a></div>  ";
},"useData":true}); template.Name = 'requestquote_wizard_module_confirmation'; return template;});