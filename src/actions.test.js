import {
	RESTART_GAME,
	restartGame,
	MAKE_GUESS,
	makeGuess,
	generateAuralUpdate,
	GENERATE_AURAL_UPDATE
} from './actions';

describe('restartGame'), () => {
	const correctAns = 10;
	const action = restartGame(correctAns);
	expect(action.type).toEqual(RESTART_GAME);
	expect(action.type.correctAns).toEqual(correctAns)
}

describe('makeGuess'), () => {
	const guess = 10;
	const action = makeGuess(correctAns);
	expect(action.type).toEqual(MAKE_GUESS);
	expect(action.type.guess).toEqual(guess);
}

describe('generateAuralUpdate'), () {
	it('should return action'), ()=> {
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	}
}