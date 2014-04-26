
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var fe_all_filters = {};	// @dataGrid
	var fe_search = {};	// @textField
	var search_filters = {};	// @textField
	var fe_save = {};	// @button
	var filters = {};	// @dataGrid
	var fe_cancel = {};	// @richText
	var toggle_filter_edit = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	fe_all_filters.onCellClick = function fe_all_filters_onCellClick (event)// @startlock
	{// @endlock
		
			sources.filterStates1.save();
			sources.filterStates.query("FilterPending = true");
	};// @lock
	
	fe_search.keyup = function fe_search_keyup (event)// @startlock
	{// @endlock
		// Add your code here
		var search_string = $$('fe_search').getValue();
		sources.filterStates1.query("Filter.FilterName == :1", {params:["*" + search_string + "*"]});
	};// @lock

	search_filters.keyup = function search_filters_keyup (event)// @startlock
	{// @endlock
		//do query live search
		var search_string = $$('search_filters').getValue();
		sources.filterStates.query("FilterState = true AND Filter.FilterName == :1", {params:["*" + search_string + "*"]});
	};// @lock

	fe_save.click = function fe_save_click (event)// @startlock
	{// @endlock
		console.log("Committing states...");
		//commit "pending" values to "state" (saved) values
		//sources.filterStates.FilterState.set(sources.filterStates.FilterPending);
		//call filterstate method
		sources.filterStates.callMethod({method: "syncStates", onSuccess:function(event)
	    {
			$$('filter_edit').hide();
			$$('toggle_filter_edit').show();
			//sources.filterStates.collectionRefresh();
			sources.filterStates1.collectionRefresh();
			sources.filterStates.query("FilterState = true");
			$$('search_filters').show();
	        
	    } },"save");
	};// @lock

	filters.onRowDraw = function filters_onRowDraw (event)// @startlock
	{// @endlock
		//Convert each item into a checkbox
	};// @lock

	fe_cancel.click = function fe_cancel_click (event)// @startlock
	{// @endlock
		
		sources.filterStates.callMethod({method: "syncStates", onSuccess:function(event)
	    {
			$$('filter_edit').hide();
			$$('toggle_filter_edit').show();
			//sources.filterStates.collectionRefresh();
			sources.filterStates1.collectionRefresh();
			sources.filterStates.query("FilterState == true");
			$$('search_filters').show();
	        
	    } },"cancel");
	};// @lock

	toggle_filter_edit.click = function toggle_filter_edit_click (event)// @startlock
	{// @endlock
		//show edit pane
		$$('filter_edit').show();
		this.hide();
		//switch query to use pending states
		//sources.filterStates.all();
		sources.filterStates.query("FilterPending = true");
		$$('search_filters').hide();
		
	};// @lock

	//traps all clicks within container
	
	//loads initial filters
	function loadAllFilters()
	{
		var filters;
		filters = ["TEst","Meh", "weee"];
		console.log("Loading Filters");
		//filters = TableFilters.all();
		console.log(filters.length);
		//filters = filters.toArray("");
		console.log(filters);
		filters.forEach(function(filter)
		{
			console.log(filter);
			print_filter(filter);
			
		});
		console.log("Filters loaded");
	}
	
	function print_filter( filter )
	{
		var new_checkbox, cbx_label, cbx_wrap;
		cbx_wrap = $("<div>");
		cbx_wrap.css("position","relative");
		new_checkbox = $("#cbx_template").clone();
		cbx_label = $("#templates .waf-widget.waf-label.waf-label-checkbox").clone();
		cbx_label.text(filter);
		cbx_label.attr("ID", "filter_label_"+filter);
		cbx_label.attr("for", "filter_"+filter);
		new_checkbox.attr("id","filter_" + filter);
		new_checkbox.attr("data-label",filter);
		new_checkbox.css({visibility:"visible","z-index":2,width:"16px",height:"16px",top:"20px",left:"32px",position:"absolute"});
		cbx_wrap.append(new_checkbox);
		cbx_wrap.append(cbx_label);
		$("#filters").append(cbx_wrap);
		$("#filter_" + filter).show().removeAttr("data-hideonload");
		$("#filter_label_"+filter).show();
	}

	//page load
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
		//loadAllFilters();
		var current_table = 'Dockets';
		$("span.current_table").text( current_table );
		//hide state column in main filters grid
		//$$("avail_filters").column("FilterState").setWidth(0);
		//console.log($$("avail_filters").column("FilterState").width);
		
		//filter down the main filters to show only active filters
		sources.filterStates.query("FilterState == true");
		
		$("#fe_all_filters input.waf-dataGrid-checkbox").bind("click",function(e)
		{
			console.log("CHECKBOX!");
		
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("fe_all_filters", "onCellClick", fe_all_filters.onCellClick, "WAF");
	WAF.addListener("fe_search", "keyup", fe_search.keyup, "WAF");
	WAF.addListener("search_filters", "keyup", search_filters.keyup, "WAF");
	WAF.addListener("fe_save", "click", fe_save.click, "WAF");
	WAF.addListener("fe_cancel", "click", fe_cancel.click, "WAF");
	WAF.addListener("toggle_filter_edit", "click", toggle_filter_edit.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
