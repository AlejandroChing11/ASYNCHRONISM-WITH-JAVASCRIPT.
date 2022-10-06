const { taskone, tasktwo } = require('./async-await');

async function main() {
    try {
        console.time('Mesauring time');
        await taskone();
        await tasktwo();
        console.timeEnd('Mesauring time');
    } catch (e) {
        console.log(e);
    }
}

main();
