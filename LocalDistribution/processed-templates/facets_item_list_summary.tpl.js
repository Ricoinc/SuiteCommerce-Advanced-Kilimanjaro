define('facets_item_list_summary.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <div class=\"facets-item-list-summary\"> "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"$(0) - $(1) of $(2) Results",(depth0 != null ? compilerNameLookup(depth0,"rangeStart") : depth0),(depth0 != null ? compilerNameLookup(depth0,"rangeEnd") : depth0),(depth0 != null ? compilerNameLookup(depth0,"total") : depth0),{"name":"translate","hash":{},"data":data}))
    + " </div>  ";
},"useData":true}); template.Name = 'facets_item_list_summary'; return template;});