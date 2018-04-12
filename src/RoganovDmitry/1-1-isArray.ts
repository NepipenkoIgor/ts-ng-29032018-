// cd /Users/dmitryroganov/Documents/learnAngular/homeTasks/ts-ng-29032018-/src/RoganovDmitry
// ../node_modules/.bin/tsc

type aVarious = (number | string | boolean )[];

function isInArray (inputArr: aVarious, ...checkElems: aVarious) : boolean {

	for (let elem of checkElems ) {
		if ( inputArr.indexOf(elem) === -1) return false;
	}
	return true;
};



console.log(isInArray([1,2,3], 1,2,3,1));
console.log(isInArray(['1',2,3], '1',2,3));
console.log(isInArray(['1',2,3], '1',2,3,5));