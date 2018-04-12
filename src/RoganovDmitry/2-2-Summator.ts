// cd /Users/dmitryroganov/Documents/learnAngular/homeTasks/ts-ng-29032018-/src/RoganovDmitry
// ../node_modules/.bin/tsc

type sn = string | number;

export function summator (...sumElems: sn[]) : number {

	return sumElems.reduce((sum:number, elem: sn) => sum + +elem, 0);
	
};