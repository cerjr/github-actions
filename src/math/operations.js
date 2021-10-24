const operations = {
    add: (a, b) => {
        return a + b;
    },

    sub: (a, b) => {
        return a - b;
    },

    mult: (a, b) => {
        return a * b;
    },

    div: (a, b) => {
        return a/b;
    },

    pow: (a, b) => {
        return Math.pow(a, b);
    },

    sqrt: (a) => {
        return Math.sqrt(a)
    },

    threeTimes: (a) => {
        return this.mult(a, 3);
    }

}

module.exports = operations;
