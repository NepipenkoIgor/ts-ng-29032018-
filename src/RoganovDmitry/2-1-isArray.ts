// cd /Users/dmitryroganov/Documents/learnAngular/homeTasks/ts-ng-29032018-/src/RoganovDmitry
// ../node_modules/.bin/tsc

type aVarious = (number | string | boolean )[];

export function isInArray (inputArr: aVarious, ...checkElems: aVarious) : boolean {

	return checkElems.every(elem => inputArr.indexOf(elem) !== -1);

};