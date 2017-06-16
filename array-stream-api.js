console.log(
	[1,2,3].concat([4,5,6])
		.filter(function(){return true;})
		.map(function(e){ return e+e; })
		.sort(function(a,b){ return b-a;})
);