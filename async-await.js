
const util = require('util');
const sleep = util.promisify(setTimeout);


module.exports = {

    async taskone() {
        await sleep(4000);
        return 'ONE VALUE';
    },

    async tasktwo() {
        await sleep(2000);
        return 'TWO VALUE';
    }

};