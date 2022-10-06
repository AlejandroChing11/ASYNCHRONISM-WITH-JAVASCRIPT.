const { taskone, tasktwo } = require('./async-await');

async function main() {
    console.time('Mesauring time');
    await taskone();
    await tasktwo();
    console.timeEnd('Mesauring time');
}

main();
