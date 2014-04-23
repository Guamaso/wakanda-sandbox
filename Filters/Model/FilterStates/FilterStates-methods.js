

model.FilterStates.methods.syncStates = function( mode ) {
	// Syncs the states in a specified direction
	if (mode == "save")
	{
		var filter_states = ds.FilterStates.all();
		
		filter_states.forEach(function( item )
		{
			item.FilterState = item.FilterPending;
		});
			
	}
	if (mode == "cancel")
	{
		var filter_states = ds.FilterStates.all();
		
		filter_states.forEach(function( item )
		{
			item.FilterPending = item.FilterState;
		});
			
	}
	
};

model.FilterStates.methods.syncStates.scope = "public";