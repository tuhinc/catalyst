'use strict'

app.factory('DoorbellService', function() {
	return {
		doorbellRang: function() {
			alert('Someone is at the door!');
		}
	};
});

app.factory('socket', function ($rootScope) {
  alert('ran');
  var socket = io.connect();
  console.log(socket);
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});