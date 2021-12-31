class Expectation {

    constructor(input) {

        this.data = input;

    }

    toBe(input) {

        global.EAF_CURRENT_TEST_PASSING = global.EAF_CURRENT_TEST_PASSING && (this.data == input);
        return this;

    }

    toBeGreaterThan(input) {

        if (typeof input != 'number' || typeof (this.data) != 'number') {

            global.EAF_CURRENT_TEST_PASSING = false;
            return this;

        }

        global.EAF_CURRENT_TEST_PASSING = global.EAF_CURRENT_TEST_PASSING && (this.data > input);

        return this;

    }

    toBeLessThan(input) {

        if (typeof input != 'number' || typeof (this.data) != 'number') {

            global.EAF_CURRENT_TEST_PASSING = false;
            return this;

        }

        global.EAF_CURRENT_TEST_PASSING = global.EAF_CURRENT_TEST_PASSING && (this.data < input);

        return this;

    }

    toExist() {

        global.EAF_CURRENT_TEST_PASSING = global.EAF_CURRENT_TEST_PASSING && (this.data != undefined) && (this.data != null);

        return this;

    }

    and() {

        return this;

    }

}

function describe(name, method) {

    method();

}

function expect(input) {

    return new Expectation(input);

}

module.exports = {
    expect,
    describe,
};