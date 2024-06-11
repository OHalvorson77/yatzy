class YatzyEngine {
    static calculateScore(dice, scoreBox) {
        switch (scoreBox) {
            case 'ones':
                return dice.filter(d => d === 1).length * 1;
            case 'twos':
                return dice.filter(d => d === 2).length * 2;
            case 'threes':
                return dice.filter(d => d === 3).length * 3;
            case 'fours':
                return dice.filter(d => d === 4).length * 4;
            case 'fives':
                return dice.filter(d => d === 5).length * 5;
            case 'sixes':
                return dice.filter(d => d === 6).length * 6;
            case 'threeOfAKind':
                return YatzyEngine.ofAKind(dice, 3);
            case 'fourOfAKind':
                return YatzyEngine.ofAKind(dice, 4);
            case 'fullHouse':
                return YatzyEngine.fullHouse(dice);
            case 'smallStraight':
                return YatzyEngine.straight(dice, [1, 2, 3, 4, 5]);
            case 'largeStraight':
                return YatzyEngine.straight(dice, [2, 3, 4, 5, 6]);
            case 'yatzy':
                return YatzyEngine.ofAKind(dice, 5) ? 50 : 0;
            case 'chance':
                return dice.reduce((acc, val) => acc + val, 0);
            default:
                return 0;
        }
    }

    static ofAKind(dice, count) {
        for (let i = 1; i <= 6; i++) {
            if (dice.filter(d => d === i).length >= count) {
                return dice.reduce((acc, val) => acc + val, 0);
            }
        }
        return 0;
    }

    static fullHouse(dice) {
        let counts = {};
        dice.forEach(d => counts[d] = (counts[d] || 0) + 1);
        let values = Object.values(counts);
        return values.includes(3) && values.includes(2) ? 25 : 0;
    }

    static straight(dice, straightPattern) {
        return straightPattern.every(n => dice.includes(n)) ? 40 : 0;
    }

    static updateOverallScore(game) {
        game.score = 0;
        for (let scoreBox of Object.keys(game.scores)) {
            game.score += game.scores[scoreBox];
        }
        game.bonus = game.scores['ones'] + game.scores['twos'] + game.scores['threes'] +
                     game.scores['fours'] + game.scores['fives'] + game.scores['sixes'] >= 63 ? 35 : 0;
        game.score += game.bonus;
    }
}