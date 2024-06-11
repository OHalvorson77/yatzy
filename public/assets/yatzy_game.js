class YatzyGame {
    constructor() {
        this.rollNumber = 0;
        this.dice = [0, 0, 0, 0, 0];
        this.keep = [false, false, false, false, false];
    }

    rollDice() {
        if (this.rollNumber < 3) {
            for (let i = 0; i < 5; i++) {
                if (!this.keep[i]) {
                    this.dice[i] = Dice.roll();
                }
            }
            this.rollNumber++;
        }
    }

    toggleKeep(index) {
        if (index >= 0 && index < 5) {
            this.keep[index] = !this.keep[index];
        }
    }

    reset() {
        this.rollNumber = 0;
        this.dice = [0, 0, 0, 0, 0];
        this.keep = [false, false, false, false, false];
    }
}