define('Facets.Empty.View.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "/*\n	© 2017 NetSuite Inc.\n	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;\n	provided, however, if you are an authorized user with a NetSuite account or log-in, you\n	may use this code subject to the terms that govern your access and use.\n*/\n\n// @module Facets\ndefine(\n	'Facets.Empty.View'\n,	[\n		'SC.Configuration'\n	,	'facets_empty.tpl'\n\n	,	'Utils'\n\n	,	'Backbone'\n	]\n,	function(\n		Configuration\n	,	facets_empty_tpl\n\n	,	Utils\n\n	,	Backbone\n	)\n{\n	'use strict';\n\n	// @class Facets.Empty.View @extends Backbone.View\n	return Backbone.View.extend({\n\n		template: facets_empty_tpl\n\n		// @method getContext @returns {Facets.Empty.View.Context}\n	,	getContext: function ()\n		{\n			//@class Facets.Empty.View.Context\n			return {\n				// @property {String} keywords\n				keywords: this.options.keywords\n			};\n			//@classFacets.Empty.View.View\n		}\n	});\n});";
},"useData":true}); template.Name = 'Facets.Empty.View'; return template;});