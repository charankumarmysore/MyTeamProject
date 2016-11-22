var cincinConstants = function() {
	var protocol = "http";
	var host = "ec2-35-160-33-229.us-west-2.compute.amazonaws.com";
	var port = 9000;
	var url = protocol + "://" + host + ":" + port + "/";
	return {
		PROTOCOL : protocol,
		HOST : host,
		PORT : port,
		URL : url,
		DO_LOGIN : function() {
			return url + "login/";
		},
	}
}

angular.module('cincin').constant('CINCIN_CONSTANTS', cincinConstants());
