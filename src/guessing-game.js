class GuessingGame {
    constructor() {}

    setRange(min, max) {

    	this.left = min;
    	this.right = max;

    }

    guess() {

    	return (Math.round((this.right+this.left)/2));

    }

    lower() {

    	return this.setRange (this.left, this.guess());

    }

    greater() {

    	return this.setRange (this.guess(), this.right)

    }
}

module.exports = GuessingGame;
