define('shopping_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <style> .switch {\n  position: relative;\n  display: inline-block;\n  width: 70px;\n  height: 20px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #5f6369;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 16px;\n  left: 4px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #cd163f;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(47px);\n  -ms-transform: translateX(47px);\n  transform: translateX(47px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n} </style><div id=\"layout\" class=\"shopping-layout\"><header id=\"site-header\" class=\"shopping-layout-header\" data-view=\"Header\" style=\"box-shadow: none;\"></header><div id=\"main-container\"><div class=\"shopping-layout-breadcrumb\" itemscope itemtype=\"https://schema.org/WebPage\"><div data-view=\"Global.Breadcrumb\" data-type=\"breadcrumb\"></div></div><div id=\"content\" class=\"shopping-layout-content\"></div></div><footer id=\"site-footer\" class=\"shopping-layout-footer\" data-view=\"Footer\" style=\"background-color:#5f6369;\"></footer></div>  ";
},"useData":true}); template.Name = 'shopping_layout'; return template;});