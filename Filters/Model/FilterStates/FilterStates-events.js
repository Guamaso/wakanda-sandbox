

model.FilterStates.events.onSave = function() {
	// Update the state to be the pending state
	var test = this;
	if ( !this.FilterState )
	{
		this.FilterState = false;	
	}
	
	//
	if ( !this.FilterPending && this.FilterPending !== false )
	{
		this.FilterPending = this.FilterState;	
	}
	
	//
	if ( !this.FilterActive )
	{
		this.FilterActive = false;	
	}
};
