define('facets_browse_category_heading.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return " <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"facets-browse-category-heading-main-image\"><img src=\""
    + alias3((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"banner") : depth0),"categorybanner",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "\" class=\"originalImg\" style=\"width: 35%;height: auto;\"/></div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " <link rel=\"stylesheet\" type=\"text/css\" href=\"http://www.ricoinc.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%20Kilimanjaro/Development/Rico_Resources/css/listnav.css\"><style> div	a.letterhover {\n    background-color:#5f6369;\n		color:white;\n\n}\n\n\ndiv	a.letterhover:hover {\n    background-color: #cd163f;\n		color:white;\n\n}\n\n.ln-letters a:hover, .ln-letters .ln-selected{\n	background-color: #cd163f;\n	color:white;\n} </style><script> /*\n* jQuery listnav plugin\n*\n* Add a slick \"letter-based\" navigation bar to all of your lists.\n* Click a letter to quickly filter the list to items that match that letter.\n*\n* Dual licensed under the MIT and GPL licenses:\n*   http://www.opensource.org/licenses/mit-license.php\n*   http://www.gnu.org/licenses/gpl.html\n*\n* Version 3.0.0 (11/22/2017)\n* Author: Eric Steinborn\n* Compatibility: jQuery 2.0+\n*\n*/\n(function ($) {\n  $.fn.listnav = function (options) {\n    var opts = $.extend({}, $.fn.listnav.defaults, options),\n        letters = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-'],\n        firstClick = false,\n        clickEventType = '';\n\n    //detect if you are on a touch device easily.\n    if (document.ontouchstart !== null) {\n      clickEventType = 'click';\n    } else {\n      // We added 'click' to this becuase on touchscreen computers, when you click with a mouse, it will not fire the click function on a letter, hence disabling the entire plugin functionality. Thanks to my homeboy @clechner77 for pointing this out to me:\n      // https://github.com/esteinborn/jquery-listnav/issues/34\n      clickEventType = 'touchend click';\n    }\n\n    opts.prefixes = $.map(opts.prefixes, function (n) {\n      return n.toLowerCase();\n    });\n\n    return this.each(function () {\n      var $wrapper, $letters, $letterCount, left, width, count,\n          id = this.id,\n          $list = $(this),\n          counts = {},\n          allCount = 0, fullCount = 0,\n          isAll = true,\n          prevLetter = '';\n\n      if ( !$('#' + id + '-nav').length ) {\n        $('<div id=\"' + id + '-nav\" class=\"listNav\"/>').insertBefore($list);\n        // Insert the nav if its not been inserted already (preferred method)\n        // Legacy method was to add the nav yourself in HTML, I didn't like that requirement\n      }\n\n      $wrapper = $('#' + id + '-nav');\n      // <ul id=\"myList\"> for list and <div id=\"myList-nav\"> for nav wrapper\n\n      function init() {\n        $wrapper.append(createLettersHtml());\n\n        $letters = $('.ln-letters', $wrapper).slice(0, 1);\n\n        if ( opts.showCounts ) {\n          $letterCount = $('.ln-letter-count', $wrapper).slice(0, 1);\n        }\n\n        addClasses();\n\n        addNoMatchLI();\n\n        bindHandlers();\n\n        if (opts.flagDisabled) {\n          addDisabledClass();\n        }\n\n        // remove nav items we don't need\n\n        if ( !opts.includeAll ) {\n          $('.all', $letters).remove();\n        }\n\n        if ( !opts.includeNums ) {\n          $('._', $letters).remove();\n        }\n\n        if ( !opts.includeOther ) {\n          $('.-', $letters).remove();\n        }\n\n        if ( opts.removeDisabled ) {\n          $('.ln-disabled', $letters).remove();\n        }\n\n        $(':last', $letters).addClass('ln-last');\n\n        if ( $.cookie && (opts.cookieName !== null) ) {\n          var cookieLetter = $.cookie(opts.cookieName);\n\n          if ( cookieLetter !== null && typeof cookieLetter !== \"undefined\" ) {\n            opts.initLetter = cookieLetter;\n          }\n        }\n\n        // decide what to show first\n        // Is there an initLetter set, if so, show that letter first\n        if ( opts.initLetter !== '' ) {\n          firstClick = true;\n\n          // click the initLetter if there was one\n          $('.' + opts.initLetter.toLowerCase(), $letters).slice(0, 1).trigger('click');\n        } else {\n          // If you want to Hide all options until a user clicks\n          if ( opts.initHidden ) {\n\n            addInitHiddenLI();\n\n            $list.children().addClass(\"listNavHide\");\n\n            $list.children('.ln-init-hidden').removeClass('listNavHide');\n          }\n          // If no init letter is set, and you included All, then show it\n          else if ( opts.includeAll ) {\n            // make the All link look clicked, but don't actually click it\n            $('.all', $letters).addClass('ln-selected');\n						$('.all').addClass('btn');\n\n          } else {\n            // All was not included, lets find the first letter with a count and show it\n            for ( var i = ((opts.includeNums) ? 0 : 1); i < letters.length; i++) {\n              if ( counts[letters[i]] > 0 ) {\n                firstClick = true;\n\n                $('.' + letters[i], $letters).slice(0, 1).trigger('click');\n\n                break;\n              }\n            }\n          }\n        }\n      }\n\n      // position the letter count above the letter links\n      function setLetterCountTop() {\n        // we're going to need to subtract this from the top value of the wrapper to accomodate changes in font-size in CSS.\n        var letterCountHeight = $letterCount.outerHeight();\n\n        $letterCount.css({\n          top: $('a:first', $wrapper).slice(0, 1).position().top - letterCountHeight\n          // we're going to grab the first anchor in the list\n          // We can no longer guarantee that a specific letter will be present\n          // since adding the \"removeDisabled\" option\n\n        });\n\n      }\n\n      // adds a class to each LI that has text content inside of it (ie, inside an <a>, a <div>, nested DOM nodes, etc)\n      function addClasses() {\n        var str, spl, $this,\n          firstChar = '',\n          hasPrefixes = (opts.prefixes.length > 0),\n          hasFilterSelector = (opts.filterSelector.length > 0);\n\n        // Iterate over the list and set a class on each one and use that to filter by\n        $($list).children().each(function () {\n          $this = $(this);\n\n          // I'm assuming you didn't choose a filterSelector, hopefully saving some cycles\n          if ( !hasFilterSelector ) {\n            //Grab the first text content of the LI, we'll use this to filter by\n            str = $.trim($this.text()).toLowerCase();\n          } else {\n            // You set a filterSelector so lets find it and use that to search by instead\n            str = $.trim($this.find(opts.filterSelector).text()).toLowerCase();\n          }\n\n          // This will run only if there is something to filter by, skipping over images and non-filterable content.\n          if (str !== '') {\n            // Apply the non-prefix class to LIs that have prefixed content in them\n            if (hasPrefixes) {\n              var prefixes = $.map(opts.prefixes, function(value) {\n                return value.indexOf(' ') <= 0 ? value + ' ' : value;\n              });\n              var matches = $.grep(prefixes, function(value) {\n                return str.indexOf(value) === 0;\n              });\n              if (matches.length > 0) {\n                var afterMatch = str.toLowerCase().split(matches[0])[1];\n\n                if(afterMatch !== null) {\n                  firstChar = $.trim(afterMatch).charAt(0);\n                } else {\n                  firstChar = str.charAt(0);\n                }\n                addLetterClass(firstChar, $this, true);\n                return;\n              }\n            }\n            // Find the first letter in the LI, including prefixes\n            firstChar = str.charAt(0);\n\n            // Doesn't send true to function, which will ++ the All count on prefixed items\n            addLetterClass(firstChar, $this);\n          }\n        });\n      }\n\n      // Add the appropriate letter class to the current element\n      function addLetterClass(firstChar, $el, isPrefix) {\n        if ( /\\W/.test(firstChar) ) {\n          firstChar = '-'; // not A-Z, a-z or 0-9, so considered \"other\"\n        }\n\n        if ( !isNaN(firstChar) ) {\n          firstChar = '_'; // use '_' if the first char is a number\n        }\n\n        $el.addClass('ln-' + firstChar);\n\n        if ( counts[firstChar] === undefined ) {\n          counts[firstChar] = 0;\n        }\n\n        counts[firstChar]++;\n\n        if (!isPrefix) {\n          allCount++;\n        }\n\n      }\n\n      function addDisabledClass() {\n        for ( var i = 0; i < letters.length; i++ ) {\n          if ( counts[letters[i]] === undefined ) {\n            $('.' + letters[i], $letters).addClass('ln-disabled');\n          }\n        }\n      }\n\n      function addNoMatchLI() {\n        $list.append('<li class=\"ln-no-match listNavHide\">' + opts.noMatchText + '</li>');\n      }\n\n      function addInitHiddenLI() {\n        $list.append('<li class=\"ln-init-hidden listNavHide\">' + opts.initHiddenText + '</li>');\n      }\n\n      function getLetterCount(el) {\n        if ($(el).hasClass('all')) {\n          if (opts.dontCount) {\n            fullCount = allCount - $list.find(opts.dontCount).length;\n          } else {\n            fullCount = allCount;\n          }\n\n          return fullCount;\n        } else {\n          el = '.ln-' + $(el).attr('class').split(' ')[0];\n\n          if (opts.dontCount) {\n            count = $list.find(el).not(opts.dontCount).length;\n          } else {\n            count = $list.find(el).length;\n          }\n\n          return (count !== undefined) ? count : 0; // some letters may not have a count in the hash\n        }\n      }\n\n      function bindHandlers() {\n        if (opts.showCounts) {\n          // sets the top position of the count div in case something above it on the page has resized\n          $wrapper.mouseover(function () {\n            setLetterCountTop();\n          });\n\n          //shows the count above the letter\n          //\n          $('.ln-letters a', $wrapper).mouseover(function () {\n            left = $(this).position().left;\n            width = ($(this).outerWidth()) + 'px';\n            count = getLetterCount(this);\n\n            $letterCount.css({\n              left: left,\n              width: width\n            }).text(count).addClass(\"letterCountShow\").removeClass(\"listNavHide\"); // set left position and width of letter count, set count text and show it\n          }).mouseout(function () { // mouseout for each letter: hide the count\n            $letterCount.addClass(\"listNavHide\").removeClass(\"letterCountShow\");\n          });\n        }\n\n        // click handler for letters: shows/hides relevant LI's\n        //\n        $('a', $letters).on(clickEventType, function (e) {\n          e.preventDefault();\n          var $this = $(this),\n            letter = $this.attr('class').split(' ')[0],\n            noMatches = $list.children('.ln-no-match');\n\n          if ( opts.initHidden ) {\n            $list.children('.ln-init-hidden').remove();\n          }\n\n          if ( prevLetter !== letter ) {\n          // Only to run this once for each click, won't double up if they clicked the same letter\n          // Won't hinder firstRun\n            $('a.ln-selected', $letters).removeClass('ln-selected');\n\n            if ( letter === 'all' ) {\n              // If ALL button is clicked:\n              $list.children().addClass(\"listNavShow\").removeClass(\"listNavHide\"); // Show ALL\n\n              noMatches.addClass(\"listNavHide\").removeClass(\"listNavShow\"); // Hide the list item for no matches\n\n              isAll = true; // set this to quickly check later\n            } else {\n              // If you didn't click ALL\n              if ( isAll ) {\n                // since you clicked ALL last time:\n                $list.children().addClass(\"listNavHide\").removeClass(\"listNavShow\");\n\n                isAll = false;\n              } else if (prevLetter !== '') {\n                $list.children('.ln-' + prevLetter).addClass(\"listNavHide\").removeClass(\"listNavShow\");\n              }\n\n              var count = getLetterCount(this);\n\n              if (count > 0) {\n                $list.children('.ln-' + letter).addClass(\"listNavShow\").removeClass(\"listNavHide\");\n                noMatches.addClass(\"listNavHide\").removeClass(\"listNavShow\"); // in case it's showing\n              } else {\n                noMatches.addClass(\"listNavShow\").removeClass(\"listNavHide\");\n              }\n            }\n\n            prevLetter = letter;\n\n            if ($.cookie && (opts.cookieName !== null)) {\n              $.cookie(opts.cookieName, letter, {\n                expires: 999\n              });\n            }\n\n            $this.addClass('ln-selected');\n\n\n\n\n            $this.blur();\n\n            if (!firstClick && (opts.onClick !== null)) {\n              opts.onClick(letter);\n            } else {\n              firstClick = false; //return false;\n            }\n          } // end if prevLetter !== letter\n        }); // end click()\n      } // end BindHandlers()\n\n      // creates the HTML for the letter links\n      //\n      function createLettersHtml() {\n        var html = [];\n        for (var i = 1; i < letters.length; i++) {\n          if (html.length === 0) {\n            html.push('<a class=\"all\" href=\"#\">'+ opts.allText + '</a><a class=\"_\" href=\"#\">0-9</a>');\n          }\n          html.push('<a style=\"width:28px; margin-left:3px;\" class=\"' + letters[i] + ' letterhover btn\" href=\"#\">' + ((letters[i] === '-') ? '...' : letters[i].toUpperCase()) + '</a>');\n        }\n        return '<div class=\"ln-letters\" style=\"font-size:20px;\">' + html.join('') + '</div>' + ((opts.showCounts) ? '<div class=\"ln-letter-count listNavHide\">0</div>' : '');\n        // Remove inline styles, replace with css class\n        // Element will be repositioned when made visible\n      }\n      init();\n    });\n  };\n\n  $.fn.listnav.defaults = {\n    initHidden: false,\n    initHiddenText: 'Tap a letter above to view matching items',\n    initLetter: '',\n    includeAll: true,\n    allText: 'All',\n    includeOther: false,\n    includeNums: true,\n    flagDisabled: true,\n    removeDisabled: false,\n    noMatchText: 'No matching entries',\n    showCounts: true,\n    dontCount: '',\n    cookieName: null,\n    onClick: null,\n    prefixes: [],\n    filterSelector: ''\n  };\n\n})(jQuery); </script><script type=\"text/javascript\" src=\"http://www.ricoinc.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%20Kilimanjaro/Development/Rico_Resources/js/vendor.js\"></script><style></style><script> $(document).ready(function () {\n\n	$('#categorieslist > .facets-category-cell').each(function () {\n	var category=$(this).html();\n	$('<li><div class=\"facets-category-cell\" >'+category+'</div></li>').appendTo(\"#demoSix\");\n	});\n\n\n$( \".categoryname\" ).each( function( index, element ){\n	if($( this ).text().length > 28)$(this).css('font-size', '11px');\n	if($( this ).text() == ' Sam Houston State Bearkats '){\n			$(this).css('font-size', '13px');\n	}\n\n});\n\n$(\".originalImg\").each( function( index, element ){\n	$(this).attr('src',$(this).attr('src').replace('resizeid', ''));\n});\n\n\n$('#demoSix-nav').hide();\nif ($('#league').text() == 'NFL' || $('#league').text() == 'MLB' || $('#league').text() == 'NCAA' || $('#league').text() == 'NBA' || $('#league').text() == 'NHL' || $('#league').text() == 'MARGARITAVILLE' || $('#league').text() == 'PRODUCTS' || $('#league').text() == 'SUPPORT') {\n	$('#demoSix-nav').show();\n\n}else{\n\n	$( \"#main_content\" ).html(\"\");\n}\n\n});\n\n$(function(){\n	var league = $(\"#league\").text();\n	$('#demoSix').listnav({\n		filterSelector: '.categoryname',\n		includeNums: false,\n		removeDisabled: true,\n		allText: 'All Teams'\n		//allText: 'All '+league+' Teams'\n	});\n	$('.demo a').click(function(e) {\n		e.preventDefault();\n	});\n\n}); </script><section class=\"facets-browse-category-heading-list-header\"><div class=\"facets-browse-category-heading-main-description\"><h1 id=\"league\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageheading") || (depth0 != null ? compilerNameLookup(depth0,"pageheading") : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageheading","hash":{},"data":data}) : helper)))
    + "</h1> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDescription") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </section><section id=\"main_content\" class=\"inner\"><ul id=\"demoSix\" class=\"demo imageList\" ></ul></section>  ";
},"useData":true}); template.Name = 'facets_browse_category_heading'; return template;});