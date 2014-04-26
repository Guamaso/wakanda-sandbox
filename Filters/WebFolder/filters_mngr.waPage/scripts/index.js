
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var assignUser = {};	// @button
	var assignFilter = {};	// @button
	var bind = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	assignUser.click = function assignUser_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.filterStates.User.set( sources.users );
		sources.filterStates.save();
	};// @lock

	assignFilter.click = function assignFilter_click (event)// @startlock
	{// @endlock
		// Add your code here
		sources.filterStates.Filter.set( sources.filters );
		sources.filterStates.FilterPending.set( true );
		sources.filterStates.save();
	};// @lock

	bind.click = function bind_click (event)// @startlock
	{// @endlock
		console.log(sources.table);
		sources.filters.Table.set( sources.tables );
		sources.filters.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("assignUser", "click", assignUser.click, "WAF");
	WAF.addListener("assignFilter", "click", assignFilter.click, "WAF");
	WAF.addListener("bind", "click", bind.click, "WAF");
// @endregion
};// @endlock
