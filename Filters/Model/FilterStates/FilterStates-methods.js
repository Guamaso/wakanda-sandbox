

model.FilterStates.methods.syncStates = function( mode ) {
	// Syncs the states in a specified direction
	if (mode == "save")
	{
		var filter_states = ds.FilterStates.all();
		
		filter_states.forEach(function( item )
		{
			var newState = item.FilterPending;
			newState = (newState == 1 || newState == true ) ? true : false;
			item.FilterState = newState;
		});
			
	}
	if (mode == "cancel")
	{
		var filter_states = ds.FilterStates.all();
		
		filter_states.forEach(function( item )
		{
			var newState = item.FilterState;
			newState = (newState == 1 || newState == true ) ? true : false;
			item.FilterPending = newState;
		});
			
	}
	
};

model.FilterStates.methods.syncStates.scope = "public";