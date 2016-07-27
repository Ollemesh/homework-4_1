module.exports = function(milisecs) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, milisecs);
	});
};

