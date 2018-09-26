define('transaction_line_views_tax.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return " <div class=\"transaction-line-views-tax\"><span class=\"transaction-line-views-tax-label\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Taxes:",{"name":"translate","hash":{},"data":data}))
    + "</span><span class=\"transaction-line-views-tax-amount-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"taxAmount") || (depth0 != null ? compilerNameLookup(depth0,"taxAmount") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"taxAmount","hash":{},"data":data}) : helper)))
    + "</span><span class=\"transaction-line-views-tax-rate-value\">( "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"taxRate") || (depth0 != null ? compilerNameLookup(depth0,"taxRate") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"taxRate","hash":{},"data":data}) : helper)))
    + " )</span></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showTax") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}); template.Name = 'transaction_line_views_tax'; return template;});