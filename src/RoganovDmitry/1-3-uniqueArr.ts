// cd /Users/dmitryroganov/Documents/learnAngular/homeTasks/ts-ng-29032018-/src/RoganovDmitry
// ../node_modules/.bin/tsc

type dVarious = (number | string | boolean )[];

function getUnique(inputArr: dVarious ): dVarious {
	
	let uniqueArr: dVarious = [];
	
	for (let elem of inputArr ) {

		if ( uniqueArr.indexOf(elem ) === -1) {
			uniqueArr.push(elem)
		};
	};

	return uniqueArr;
};

console.log(getUnique( [1, 2, '3', 1, '4', '3', false, false]));