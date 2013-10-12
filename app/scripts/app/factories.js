'use strict'

app.factory('DoorbellService', function() {
	return {
		doorbellRang: function() {
			alert('Someone is at the door!');
		}
	};
});