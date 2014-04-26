
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var fe_search = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var current_table;
		$('#tableSelect input').change(function()
		{
			current_table = $('#tableSelect input').val();
			current_table = $$('tableSelect').getValue();
			console.log(current_table);
			$("span.current_table").text( current_table );
		
		});
	};// @lock

	fe_search.keyup = function fe_search_keyup (event)// @startlock
	{// @endlock
		// Add your code here
		var search_string = $$('fe_search').getValue();
		sources.filterStates1.query("Filter.FilterName == :1", {params:["*" + search_string + "*"]});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("fe_search", "keyup", fe_search.keyup, "WAF");
// @endregion
};// @endlock
