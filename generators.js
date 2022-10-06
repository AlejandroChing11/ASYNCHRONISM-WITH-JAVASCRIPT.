function* gen() {
    yield 1;
    yield 2;
    yield 3;
};

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
    for (let value of array) {
        yield value;
    };
};

const ite = iterate(['Alejandro', 'Juan', 'Miguel', 'Mar']);

console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);


/*Second example to understand better*/
function* subSerie() {
    yield 'Hola';
    yield 'This is another Generic';
};
function* serie(i) {
    yield i;
    yield i + 5;
    yield i * 2;
    yield* subSerie();
}
const genSerie = serie(5);
const sub = subSerie();
console.log(genSerie.next().value);
console.log(genSerie.next().value);
console.log(genSerie.next().value);
console.log(sub.next().value);
console.log(sub.next().value);

