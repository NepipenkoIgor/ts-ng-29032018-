// cd /Users/dmitryroganov/Documents/learnAngular/homeTasks/ts-ng-29032018-/src/RoganovDmitry
// ../node_modules/.bin/tsc


function summator (...sumElems: (string | number)[]) : number {
	
	let sum: number = 0;
	
	
	for (let elem of sumElems ) {
		

		if ( typeof elem === 'number') {
			sum += elem;
		} else {
			sum += +elem;
		};
	}

	return sum;
};

console.log(summator( 1,2,'3',1));