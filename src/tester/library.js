class Expectation {

    constructor(input) {

        this.data = input;

    }

    toBe(input) {

        global.EAF_CURRENT_TEST_PASSING = global.EAF_CURRENT_TEST_PASSING && (this.data == input);
        return this;

    }

}

function expect(input) {

    return new Expectation(input);

}

module.exports = {
    expect
};