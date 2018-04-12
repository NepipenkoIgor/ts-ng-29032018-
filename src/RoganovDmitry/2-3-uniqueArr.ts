// cd /Users/dmitryroganov/Documents/learnAngular/homeTasks/ts-ng-29032018-/src/RoganovDmitry
// ../node_modules/.bin/tsc

type dVarious = (number | string | boolean )[];

export function getUnique(inputArr: dVarious ): dVarious {
	
	const set = new Set();

	inputArr.forEach(elem => set.add(elem));
	
	return  Array.from(set);
};

