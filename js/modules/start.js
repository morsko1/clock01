module.exports = function () {
	startSec = require('./startSec'),
	startMin = require('./startMin'),
	startHour = require('./startHour');
	startSec();
	startMin();
	startHour();
};